import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="container about-inner">
        <div className="about-avatar">
          <Image src="/me.png" alt="yadira" fill />
        </div>
        <div className="about-content">
          <span className="section-label">Sobre mí</span>
          <h2 className="section-title">Una desarrolladora que te entiende</h2>
          <p>
            Mi nombre es Yadira Condezo, soy una desarrolladora Frontend con un poco
            más de 4 años de experiencia creando aplicaciones web y actualmente
            trabajo de forma independiente.
          </p>
          <p>
            He trabajado en proyectos para distintos sectores, incluyendo el
            financiero, y como Desarrolladora Frontend participé en el
            desarrollo y mantenimiento de soluciones digitales para un banco en
            Honduras.
          </p>
          <p>
            Trabajo de forma cercana y con comunicación constante. Te explico
            cada etapa de manera sencilla, sin tecnicismos innecesarios, para
            que tengas claridad sobre lo que estamos construyendo.
          </p>
          <a
            href="https://wa.me/51960220312"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Hablemos de tu idea
          </a>
        </div>
      </div>
    </section>
  );
}
