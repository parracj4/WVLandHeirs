"use client";

import { useState, useEffect, FormEvent } from "react";

const WV_COUNTIES = [
  "Barbour",
  "Berkeley",
  "Boone",
  "Braxton",
  "Brooke",
  "Cabell",
  "Calhoun",
  "Clay",
  "Doddridge",
  "Fayette",
  "Gilmer",
  "Grant",
  "Greenbrier",
  "Hampshire",
  "Hancock",
  "Hardy",
  "Harrison",
  "Jackson",
  "Jefferson",
  "Kanawha",
  "Lewis",
  "Lincoln",
  "Logan",
  "Marion",
  "Marshall",
  "Mason",
  "McDowell",
  "Mercer",
  "Mineral",
  "Mingo",
  "Monongalia",
  "Monroe",
  "Morgan",
  "Nicholas",
  "Ohio",
  "Pendleton",
  "Pleasants",
  "Pocahontas",
  "Preston",
  "Putnam",
  "Raleigh",
  "Randolph",
  "Ritchie",
  "Roane",
  "Summers",
  "Taylor",
  "Tucker",
  "Tyler",
  "Upshur",
  "Wayne",
  "Webster",
  "Wetzel",
  "Wirt",
  "Wood",
  "Wyoming",
];

const PROPERTY_TYPES = [
  { id: "mineral", label: "Mineral Rights" },
  { id: "timber", label: "Timber" },
  { id: "unsure", label: "Not Sure" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formLoadTime, setFormLoadTime] = useState(0);

  // Track when form loads (for timing-based bot detection)
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    // Honeypot check - if filled, silently reject (bots fill hidden fields)
    const honeypot1 = formData.get("website") as string;
    const honeypot2 = formData.get("company") as string;
    if (honeypot1 || honeypot2) {
      // Fake success to not alert bots
      setTimeout(() => setIsSubmitted(true), 1000);
      return;
    }

    // Timing check - if submitted in under 3 seconds, likely a bot
    const submitTime = Date.now();
    if (formLoadTime && submitTime - formLoadTime < 3000) {
      // Fake success to not alert bots
      setTimeout(() => setIsSubmitted(true), 1000);
      return;
    }

    const data = Object.fromEntries(formData.entries());

    // Handle checkboxes (propertyTypes)
    const propertyTypes = formData.getAll("propertyTypes");
    data.propertyTypes = propertyTypes.join(", ");

    // Add timing data for server-side validation
    data._formLoadTime = String(formLoadTime);
    data._submitTime = String(submitTime);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email jay@wvlandheirs.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-bg rounded-xl p-8 sm:p-12">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Thanks! I&apos;ll be in touch within 48 hours.
            </h2>
            <p className="text-gray-700">
              I appreciate you reaching out. I&apos;ll review your information
              and get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-lg text-gray-700">
            Tell me a little about what you inherited. I&apos;ll be in touch
            within 48 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot fields - hidden from users, bots will fill these */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name fields */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-brand-dark mb-1"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-brand-dark mb-1"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Contact fields */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-dark mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-brand-dark mb-1"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* County dropdown */}
          <div>
            <label
              htmlFor="county"
              className="block text-sm font-medium text-brand-dark mb-1"
            >
              County *
            </label>
            <select
              id="county"
              name="county"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition bg-white"
            >
              <option value="">Select a county</option>
              {WV_COUNTIES.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </select>
          </div>

          {/* How acquired */}
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-brand-dark mb-2">
                How did you acquire this property? *
              </legend>
              <div className="space-y-2">
                {["Inherited", "Purchased", "Other"].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="acquisition"
                      value={option}
                      required
                      className="w-4 h-4 text-brand-medium focus:ring-brand-medium border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* What are you selling */}
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-brand-dark mb-2">
                What are you looking to sell? *
              </legend>
              <div className="space-y-2">
                {PROPERTY_TYPES.map((type) => (
                  <label key={type.id} className="flex items-center">
                    <input
                      type="checkbox"
                      name="propertyTypes"
                      value={type.label}
                      className="w-4 h-4 text-brand-medium focus:ring-brand-medium border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">{type.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Property description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-brand-dark mb-1"
            >
              Tell me a bit about the property
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition resize-none"
              placeholder="Location, acreage, any details you know..."
            />
          </div>

          {/* Timeline */}
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-brand-dark mb-2">
                How soon are you looking to sell? *
              </legend>
              <div className="space-y-2">
                {[
                  "As soon as possible",
                  "Within a few months",
                  "No rush, just exploring",
                ].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="timeline"
                      value={option}
                      required
                      className="w-4 h-4 text-brand-medium focus:ring-brand-medium border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {error && (
            <div role="alert" className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-medium hover:bg-brand-light disabled:bg-gray-400 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-sm hover:shadow-md disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
