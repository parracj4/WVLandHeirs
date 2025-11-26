import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  county: string;
  acquisition: string;
  propertyTypes: string;
  description?: string;
  timeline: string;
  // Honeypot fields
  website?: string;
  company?: string;
  // Timing fields
  _formLoadTime?: string;
  _submitTime?: string;
}

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

// Sanitize string input
function sanitize(input: string | undefined, maxLength: number = 500): string {
  if (!input) return "";
  return input
    .slice(0, maxLength)
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .trim();
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Validate phone format (loose - allows various formats)
function isValidPhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

// Valid WV counties for validation
const VALID_COUNTIES = new Set([
  "Barbour", "Berkeley", "Boone", "Braxton", "Brooke", "Cabell", "Calhoun",
  "Clay", "Doddridge", "Fayette", "Gilmer", "Grant", "Greenbrier", "Hampshire",
  "Hancock", "Hardy", "Harrison", "Jackson", "Jefferson", "Kanawha", "Lewis",
  "Lincoln", "Logan", "Marion", "Marshall", "Mason", "McDowell", "Mercer",
  "Mineral", "Mingo", "Monongalia", "Monroe", "Morgan", "Nicholas", "Ohio",
  "Pendleton", "Pleasants", "Pocahontas", "Preston", "Putnam", "Raleigh",
  "Randolph", "Ritchie", "Roane", "Summers", "Taylor", "Tucker", "Tyler",
  "Upshur", "Wayne", "Webster", "Wetzel", "Wirt", "Wood", "Wyoming"
]);

const VALID_ACQUISITIONS = new Set(["Inherited", "Purchased", "Other"]);
const VALID_TIMELINES = new Set(["As soon as possible", "Within a few months", "No rush, just exploring"]);

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ||
               request.headers.get("x-real-ip") ||
               "unknown";

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Honeypot check - if filled, silently accept (don't alert bots)
    if (data.website || data.company) {
      console.log("Honeypot triggered - likely bot submission");
      return NextResponse.json({ success: true });
    }

    // Timing check - if submitted too fast, likely a bot
    if (data._formLoadTime && data._submitTime) {
      const loadTime = parseInt(data._formLoadTime, 10);
      const submitTime = parseInt(data._submitTime, 10);
      if (submitTime - loadTime < 2000) {
        console.log("Timing check failed - likely bot submission");
        return NextResponse.json({ success: true });
      }
    }

    // Sanitize all inputs
    const sanitizedData = {
      firstName: sanitize(data.firstName, 50),
      lastName: sanitize(data.lastName, 50),
      email: sanitize(data.email, 254),
      phone: sanitize(data.phone, 20),
      county: sanitize(data.county, 50),
      acquisition: sanitize(data.acquisition, 50),
      propertyTypes: sanitize(data.propertyTypes, 100),
      description: sanitize(data.description, 2000),
      timeline: sanitize(data.timeline, 100),
    };

    // Validate required fields
    const requiredFields: (keyof typeof sanitizedData)[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "county",
      "acquisition",
      "timeline",
    ];

    for (const field of requiredFields) {
      if (!sanitizedData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    if (!isValidEmail(sanitizedData.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(sanitizedData.phone)) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        { status: 400 }
      );
    }

    // Validate county is a real WV county
    if (!VALID_COUNTIES.has(sanitizedData.county)) {
      return NextResponse.json(
        { error: "Invalid county" },
        { status: 400 }
      );
    }

    // Validate acquisition method
    if (!VALID_ACQUISITIONS.has(sanitizedData.acquisition)) {
      return NextResponse.json(
        { error: "Invalid acquisition method" },
        { status: 400 }
      );
    }

    // Validate timeline
    if (!VALID_TIMELINES.has(sanitizedData.timeline)) {
      return NextResponse.json(
        { error: "Invalid timeline" },
        { status: 400 }
      );
    }

    // Format the email content
    const emailBody = `
New Lead from WV Land Heirs Website

Contact Information:
- Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
- Email: ${sanitizedData.email}
- Phone: ${sanitizedData.phone}
- County: ${sanitizedData.county}

Property Details:
- How Acquired: ${sanitizedData.acquisition}
- Property Types: ${sanitizedData.propertyTypes || "Not specified"}
- Timeline: ${sanitizedData.timeline}

Description:
${sanitizedData.description || "No additional details provided"}

---
Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}
IP: ${ip}
    `.trim();

    // Option 1: Use Formspree (uncomment and add your form ID)
    // const formspreeResponse = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: data.email,
    //     message: emailBody,
    //     _subject: `New Lead: ${data.firstName} ${data.lastName} - ${data.county} County`,
    //   }),
    // });
    // if (!formspreeResponse.ok) {
    //   throw new Error("Formspree submission failed");
    // }

    // Option 2: Use Resend (uncomment and add RESEND_API_KEY to env)
    // const resendResponse = await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     from: "WV Land Heirs <noreply@wvlandheirs.com>",
    //     to: "jay@wvlandheirs.com",
    //     subject: `New Lead: ${data.firstName} ${data.lastName} - ${data.county} County`,
    //     text: emailBody,
    //   }),
    // });
    // if (!resendResponse.ok) {
    //   throw new Error("Resend submission failed");
    // }

    // For MVP: Log the submission (replace with actual email service)
    console.log("=== NEW LEAD SUBMISSION ===");
    console.log(emailBody);
    console.log("===========================");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
