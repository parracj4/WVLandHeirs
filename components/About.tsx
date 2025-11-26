import Image from "next/image";

export default function About() {
  return (
    <section className="bg-brand-bg py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:gap-12">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <Image
              src="/jay-family-beach.webp"
              alt="Jay Parrack with family"
              width={192}
              height={192}
              className="w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover mx-auto md:mx-0"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              Why Trust Me?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m Jay Parrack — a third-generation West Virginian, local
              insurance agent, and city councilman in Point Pleasant. I&apos;m
              not a big corporation. I&apos;m a neighbor who understands how
              confusing inherited property can be.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              I built this because too many WV families get lowball offers from
              out-of-state companies who don&apos;t care about them. I think you
              deserve better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
