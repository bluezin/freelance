export default function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="container about-inner">
        <div className="about-avatar">👩‍💻</div>
        <div>
          <span className="section-label">Sobre mí</span>
          <h2 className="section-title">Una desarrolladora que te entiende</h2>
          <p>
            Soy una desarrolladora web independiente apasionada por crear
            experiencias digitales claras y funcionales. Entiendo que tu
            sitio web es muchas veces la primera impresión de tu negocio, por
            eso pongo el foco en tus objetivos reales.
          </p>
          <p>
            Trabajo de forma cercana y con comunicación constante. Sin tecnicismos
            innecesarios: me adapto a tu ritmo y te explico cada paso.
          </p>
          <a href="#contacto" className="btn btn-primary">
            Hablemos de tu idea
          </a>
        </div>
      </div>
    </section>
  );
}