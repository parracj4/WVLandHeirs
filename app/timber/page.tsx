import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";

export const metadata: Metadata = {
  title: "Understanding Timber Rights in West Virginia | WV Land Heirs",
  description:
    "Learn about inherited timber rights in West Virginia - what they're worth, how timber sales work, and what to consider before selling standing timber.",
  keywords: [
    "timber rights West Virginia",
    "sell timber WV",
    "inherited timber",
    "standing timber value",
    "timber sales West Virginia",
  ],
};

export default function TimberPage() {
  return (
    <>
      <LogoSection />
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight text-center">
              Understanding Timber in West Virginia
            </h1>
            <p className="mt-6 text-xl text-gray-700 text-center">
              Inherited land with trees? That timber might be worth more than
              you think — but selling it right matters.
            </p>
          </div>
        </section>

        {/* What Is Timber Worth */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              What Makes Timber Valuable?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Standing timber — trees that are still growing — is a renewable
                resource with real market value. In West Virginia, timber has
                been harvested for over 150 years, and the state&apos;s forests
                continue to produce valuable hardwoods.
              </p>
              <p>The value of your timber depends on several factors:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Species</strong> — Black walnut, white oak, and cherry
                  command premium prices. Red oak, poplar, and maple are
                  valuable but less so.
                </li>
                <li>
                  <strong>Size</strong> — Larger diameter trees (18&quot;+ DBH)
                  are worth significantly more per board foot than smaller ones.
                </li>
                <li>
                  <strong>Quality</strong> — Straight, clear logs with few knots
                  bring top dollar. Veneer-quality wood can be worth 5-10x
                  regular sawlog prices.
                </li>
                <li>
                  <strong>Accessibility</strong> — Timber on steep slopes or far
                  from roads costs more to harvest, reducing what buyers will
                  pay.
                </li>
                <li>
                  <strong>Volume</strong> — Larger tracts with more board feet
                  attract more buyer interest and better prices.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* West Virginia's Timber */}
        <section className="py-12 sm:py-16 bg-brand-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              West Virginia&apos;s Forest Resources
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                West Virginia is the third-most forested state in America, with
                about 12 million acres of timberland — roughly 79% of the
                state&apos;s total land area. Most of this is hardwood forest.
              </p>
              <div className="bg-white rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  High-Value Species in WV
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Black Walnut</strong> — The most valuable species.
                    Large, quality walnut trees can be worth $1,000+ each.
                  </li>
                  <li>
                    <strong>White Oak</strong> — Prized for bourbon barrels,
                    flooring, and furniture. Strong demand keeps prices high.
                  </li>
                  <li>
                    <strong>Black Cherry</strong> — Premium furniture wood with
                    excellent value for quality logs.
                  </li>
                  <li>
                    <strong>Hard Maple</strong> — Used for flooring, cabinets,
                    and furniture.
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Common Species
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Red Oak</strong> — Abundant and valuable for
                    flooring and construction.
                  </li>
                  <li>
                    <strong>Yellow Poplar (Tuliptree)</strong> — Fast-growing,
                    commonly used for lumber and plywood.
                  </li>
                  <li>
                    <strong>Hickory</strong> — Dense hardwood used for tool
                    handles, smoking meat, and flooring.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Timber Sales Work */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              How Timber Sales Work
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Selling timber isn&apos;t like selling a house. The process has
                its own terminology and practices:
              </p>
              <div className="bg-brand-bg rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  1. Timber Cruise (Inventory)
                </h3>
                <p className="text-gray-700">
                  A forester walks your property to estimate the volume, species,
                  and quality of your timber. This &quot;cruise&quot; tells you
                  what you have to sell. Without it, you&apos;re negotiating
                  blind.
                </p>
              </div>
              <div className="bg-brand-bg rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  2. Harvest Plan
                </h3>
                <p className="text-gray-700">
                  You decide what to cut. Options include clear-cutting
                  (removing all trees), selective harvest (taking only mature or
                  high-value trees), or diameter-limit cuts. Each has different
                  financial and environmental implications.
                </p>
              </div>
              <div className="bg-brand-bg rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  3. Finding Buyers
                </h3>
                <p className="text-gray-700">
                  You can sell to logging companies, sawmills, or timber
                  investment organizations. Competitive bidding typically yields
                  better prices than accepting the first offer.
                </p>
              </div>
              <div className="bg-brand-bg rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  4. The Contract
                </h3>
                <p className="text-gray-700">
                  A timber sale contract specifies what&apos;s being sold, the
                  price, harvesting timeline, access roads, and who&apos;s
                  responsible for damage or cleanup. Never sell timber without a
                  written contract.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Buys Timber */}
        <section className="py-12 sm:py-16 bg-brand-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Who Buys Timber?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Logging companies</strong> — They harvest the timber
                  and sell it to mills. They&apos;re often the ones who approach
                  landowners directly.
                </li>
                <li>
                  <strong>Sawmills</strong> — Some mills buy timber directly,
                  cutting out the middleman. This can mean better prices if you
                  have enough volume.
                </li>
                <li>
                  <strong>Timber Investment Management Organizations (TIMOs)</strong>{" "}
                  — These institutional investors buy timberland and timber
                  rights as long-term investments.
                </li>
                <li>
                  <strong>Veneer buyers</strong> — For exceptional quality logs,
                  veneer mills pay premium prices. They&apos;re picky but the
                  prices reflect it.
                </li>
              </ul>
              <p className="mt-4">
                <strong>Warning:</strong> &quot;Timber buyers&quot; who show up
                unannounced are often looking for landowners who don&apos;t know
                what their timber is worth. Their first offer is rarely their
                best, and is often far below market value.
              </p>
            </div>
          </div>
        </section>

        {/* Timber vs Land */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Selling Timber vs. Selling Land
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                You have options when it comes to monetizing timbered property:
              </p>
              <div className="bg-brand-bg rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  Sell Just the Timber
                </h3>
                <p className="text-gray-700 mb-3">
                  You keep the land and sell the right to harvest specific
                  trees. After harvest, the land remains yours and will grow new
                  timber over time.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Get immediate cash</li>
                  <li>Keep the land in the family</li>
                  <li>Timber regrows (typically 20-40 years to maturity)</li>
                  <li>May receive favorable tax treatment (capital gains)</li>
                </ul>
              </div>
              <div className="bg-brand-bg rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  Sell Land with Timber
                </h3>
                <p className="text-gray-700 mb-3">
                  Some buyers want to purchase the entire property — land and
                  timber together. This often brings a premium over selling each
                  separately.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Higher total price</li>
                  <li>One transaction, less complexity</li>
                  <li>No ongoing ownership responsibilities</li>
                  <li>Lose the land permanently</li>
                </ul>
              </div>
              <p>
                Many families choose to harvest mature timber while keeping the
                land, allowing them to benefit now while preserving the property
                for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-12 sm:py-16 bg-brand-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Common Mistakes to Avoid
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Accepting the first offer</strong> — The logger who
                  knocks on your door is rarely offering top dollar. Get
                  multiple bids.
                </li>
                <li>
                  <strong>Selling without a cruise</strong> — If you don&apos;t
                  know what you have, you can&apos;t know if the offer is fair.
                </li>
                <li>
                  <strong>No written contract</strong> — Verbal agreements lead
                  to disputes about what was promised.
                </li>
                <li>
                  <strong>Ignoring access and damage</strong> — Logging
                  equipment can damage roads, streams, and remaining trees. Your
                  contract should address this.
                </li>
                <li>
                  <strong>Not understanding payment terms</strong> — Some buyers
                  pay upfront (lump sum), others pay as they harvest (pay as
                  cut). Each has trade-offs.
                </li>
                <li>
                  <strong>Cutting too young</strong> — Trees increase in value
                  significantly as they grow. A 20&quot; diameter tree is worth
                  far more than two 14&quot; trees with the same total volume.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Have Questions About Your Timber?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              I help West Virginia families understand what their timber is
              worth and connect them with reputable buyers. No pressure, no
              obligation — just honest guidance.
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
