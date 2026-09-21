export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <span className="section-label">Contacto</span>
        <h2 className="section-title">¿Listo para tu web?</h2>
        <p className="section-desc">
          Cuéntame tu idea y te responderé con una cotización sin compromiso en
          menos de 24 horas.
        </p>
        <div className="contact-actions">
          <a
            href="mailto:yadiraco304@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Escríbeme por email
          </a>
          <a
            href="https://wa.me/51960220312?text=Hola%2C%20quiero%20una%20p%C3%A1gina%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
