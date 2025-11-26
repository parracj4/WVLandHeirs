import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";

export const metadata: Metadata = {
  title: "Understanding Mineral Rights in West Virginia | WV Land Heirs",
  description:
    "Learn what mineral rights are, why they're valuable in West Virginia, who buys them, and what to consider before selling. Expert guidance for inherited mineral rights.",
  keywords: [
    "mineral rights West Virginia",
    "inherited mineral rights",
    "sell mineral rights WV",
    "oil and gas rights",
    "coal rights West Virginia",
  ],
};

export default function MineralRightsPage() {
  return (
    <>
      <LogoSection />
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight text-center">
              Understanding Mineral Rights in West Virginia
            </h1>
            <p className="mt-6 text-xl text-gray-700 text-center">
              If you&apos;ve inherited mineral rights, you probably have
              questions. Here&apos;s what you need to know.
            </p>
          </div>
        </section>

        {/* What Are Mineral Rights */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              What Are Mineral Rights?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                In the United States, land ownership can be split into two
                parts: <strong>surface rights</strong> (the land itself, trees,
                buildings) and <strong>mineral rights</strong> (everything below
                the surface).
              </p>
              <p>
                Mineral rights give you ownership of underground resources like:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Natural gas</li>
                <li>Oil</li>
                <li>Coal</li>
                <li>Limestone and other stone</li>
                <li>Metals and ores</li>
              </ul>
              <p>
                This separation happened frequently in West Virginia during the
                coal boom of the late 1800s and early 1900s, when landowners
                sold their mineral rights to mining companies while keeping
                their homes and farms. Today, many families discover they&apos;ve
                inherited mineral rights separate from surface land — or vice
                versa.
              </p>
            </div>
          </div>
        </section>

        {/* What's Under West Virginia */}
        <section className="py-12 sm:py-16 bg-brand-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              What&apos;s Under West Virginia?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                West Virginia sits on some of the most valuable underground
                resources in the eastern United States:
              </p>
              <div className="bg-white rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Natural Gas (Marcellus & Utica Shale)
                </h3>
                <p className="text-gray-700">
                  The Marcellus Shale formation runs beneath much of West
                  Virginia and is one of the largest natural gas deposits in the
                  world. The deeper Utica Shale adds even more potential. This
                  has made WV mineral rights extremely valuable over the past 15
                  years.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Coal
                </h3>
                <p className="text-gray-700">
                  West Virginia has been coal country for over 150 years. While
                  the industry has declined, coal rights still have value,
                  especially in southern counties. Some areas have multiple coal
                  seams at different depths.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Oil
                </h3>
                <p className="text-gray-700">
                  While less common than gas, oil deposits exist throughout the
                  state, particularly in the western counties. Many older wells
                  are still producing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Are They Valuable */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Why Are Mineral Rights Valuable?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Mineral rights can generate income in two main ways:</p>
              <div className="bg-brand-bg rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  1. Lease Bonuses
                </h3>
                <p className="text-gray-700">
                  When an energy company wants to drill, they pay you an
                  upfront bonus (often per acre) just to lease your mineral
                  rights. This can range from a few hundred to several thousand
                  dollars per acre depending on location and market conditions.
                </p>
              </div>
              <div className="bg-brand-bg rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  2. Royalties
                </h3>
                <p className="text-gray-700">
                  If production happens, you receive a percentage of the value
                  of oil, gas, or coal extracted. In West Virginia, royalties
                  typically range from 12.5% to 20% of production value. This
                  can provide ongoing monthly income for years or even decades.
                </p>
              </div>
              <p>
                The value of your mineral rights depends on several factors:
                location, geology, existing leases, current production, and
                market prices for oil and gas. Rights in active drilling areas
                of the Marcellus Shale can be worth significantly more than
                rights in areas with no recent activity.
              </p>
            </div>
          </div>
        </section>

        {/* Who Buys Mineral Rights */}
        <section className="py-12 sm:py-16 bg-brand-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Who Buys Mineral Rights?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Several types of buyers are interested in mineral rights:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Energy companies</strong> — Oil and gas companies
                  sometimes buy rights outright rather than leasing them.
                </li>
                <li>
                  <strong>Investment funds</strong> — Private equity and
                  specialized mineral funds acquire rights as long-term
                  investments.
                </li>
                <li>
                  <strong>Individual investors</strong> — People who want
                  passive income from royalties.
                </li>
                <li>
                  <strong>Mineral aggregators</strong> — Companies that buy
                  small interests to consolidate into larger holdings.
                </li>
              </ul>
              <p>
                Because mineral rights are valuable, you may receive unsolicited
                offers in the mail. These offers are often lowball prices. It
                pays to understand what you have before responding to any offer.
              </p>
            </div>
          </div>
        </section>

        {/* Fractional Ownership */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Understanding Fractional Ownership
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                One of the most confusing aspects of inherited mineral rights is
                fractional ownership. Here&apos;s how it works:
              </p>
              <p>
                When your grandparents owned 100 acres with mineral rights, they
                owned 100% of those minerals. But when they passed, those rights
                were split among their children. Then split again among
                grandchildren. After several generations, you might own
                something like &quot;1/32 of the mineral rights to 100
                acres.&quot;
              </p>
              <p>
                This means if a gas company pays $100,000 in royalties on that
                tract, your share would be $3,125. Small fractions can still add
                up, especially if you inherited interests in multiple tracts.
              </p>
              <p>
                Fractional interests are harder to sell because:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Buyers prefer larger, consolidated interests</li>
                <li>Title research becomes more complex</li>
                <li>
                  You may need to coordinate with other family members who own
                  shares
                </li>
              </ul>
              <p>
                However, small interests still have value. Many buyers specialize
                in purchasing fractional mineral interests.
              </p>
            </div>
          </div>
        </section>

        {/* Selling vs Keeping */}
        <section className="py-12 sm:py-16 bg-brand-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Should You Sell or Keep Your Mineral Rights?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                This is a personal decision that depends on your circumstances.
                Here are factors to consider:
              </p>
              <div className="bg-white rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  Reasons People Sell
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Need immediate cash for expenses, debt, or investment</li>
                  <li>Don&apos;t want to deal with paperwork and taxes</li>
                  <li>Live far away and have no connection to the land</li>
                  <li>Small fractional interest isn&apos;t worth much annually</li>
                  <li>Uncertain about future energy prices</li>
                  <li>Want to simplify estate for heirs</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  Reasons People Keep
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Enjoy receiving royalty checks</li>
                  <li>Believe future production will increase value</li>
                  <li>Want to pass the asset to children</li>
                  <li>Sentimental attachment to family land</li>
                  <li>Current offers seem too low</li>
                </ul>
              </div>
              <p>
                <strong>Important:</strong> You can sell mineral rights while
                keeping surface rights (or vice versa). Many families sell
                mineral interests to simplify ownership while keeping the family
                farm or homestead.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Have Questions About Your Mineral Rights?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              I help West Virginia families understand what they&apos;ve inherited
              and connect them with fair, vetted buyers. No pressure, no
              obligation.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-brand-medium hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-sm hover:shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
