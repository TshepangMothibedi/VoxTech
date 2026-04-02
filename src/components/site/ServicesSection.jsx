const services = [
  {
    title: "Marketing Websites",
    text: "Fast, premium websites built to convert attention into calls, demos, and qualified leads."
  },
  {
    title: "Internal Platforms",
    text: "Operational tools for sales, workflows, reporting, customer management, and service delivery."
  },
  {
    title: "Startup MVP Builds",
    text: "Focused product builds that ship the core workflow first without wasting time on noise."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="website-section">
      <div className="section-intro">
        <div className="eyebrow">What VoxTech Builds</div>
        <h2>Sharp websites outside. Solid systems inside.</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card glass-panel">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
