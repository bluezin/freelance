const services = [
  {
    icon: "🖥️",
    title: "Sitios web corporativos",
    description:
      "Webs profesionales que presentan tu empresa e inspiran confianza.",
  },
  {
    icon: "🎯",
    title: "Landing pages",
    description:
      "Páginas enfocadas en convertir visitantes en clientes y contactos.",
  },
  {
    icon: "🛒",
    title: "Tiendas online",
    description:
      "Tu tienda en línea simple para vender tus productos y servicios.",
  },
  {
    icon: "🔄",
    title: "Rediseño y mantenimiento",
    description:
      "Renovamos tu web actual o la mantenemos actualizada y segura.",
  },
];

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <span className="section-label">Servicios</span>
        <h2 className="section-title">¿Qué puedo hacer por ti?</h2>
        <p className="section-desc">
          Sitios web enfocados en tu negocio, sin complicaciones. Tú te
          encargas de tu trabajo, yo del tuyo.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}