import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
          Sell Inherited Mineral Rights or Timber in West Virginia
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-brand-medium font-medium">
          Not sure what it&apos;s worth — or where to even start? I can help.
        </p>
        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Every year, West Virginia families inherit mineral rights, oil and gas
          rights, or timber — often without knowing what it&apos;s worth or who
          to trust. I&apos;m Jay Parrack, and I help WV families understand
          their options and connect with fair, vetted buyers. No pressure. No
          jargon. Just honest answers about your inherited property.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="inline-block bg-brand-medium hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-sm hover:shadow-md"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="/mineral-rights"
            className="inline-block bg-white hover:bg-gray-50 text-brand-dark font-semibold px-8 py-4 rounded-lg text-lg transition-colors border border-gray-300"
          >
            Learn About Mineral Rights
          </Link>
        </div>
      </div>
    </section>
  );
}
