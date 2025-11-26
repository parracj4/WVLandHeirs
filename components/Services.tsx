const services = [
  {
    icon: "⛽",
    title: "Mineral Rights",
    description:
      "Oil, gas, and coal rights can be valuable — or confusing. I'll help you understand what you own and what it's worth.",
  },
  {
    icon: "🌲",
    title: "Timber",
    description:
      "Standing timber has real value, but most people don't know how to sell it fairly. I can help.",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-12">
          What Did You Inherit?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-brand-bg rounded-xl p-6 sm:p-8 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
