const steps = [
  {
    number: "1",
    title: "Tell me what you have",
    description:
      "Fill out a quick form with the basics about your inherited property.",
  },
  {
    number: "2",
    title: "I'll explain your options",
    description:
      "We'll talk through what you have, what it might be worth, and whether selling makes sense.",
  },
  {
    number: "3",
    title: "Get connected to vetted buyers",
    description:
      "If you decide to sell, I'll connect you with honest, fair buyers I personally trust.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-brand-bg py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-12">
          Simple. Honest. Local.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-medium text-white font-bold text-xl mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
