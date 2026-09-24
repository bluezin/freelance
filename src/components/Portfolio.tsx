import Image from "next/image";

const projects = [
  {
    title: "Restaurante",
    category: "Sitio web",
    description:
      "Web para restaurante con carta de menú, con datos de contacto y mucho más.",
    url: "https://www.desarrollocondezo.com/restaurant",
    initial: "/restaurant.png",
  },
  {
    title: "Estudio de abogados",
    category: "Sitio web",
    description:
      "Sitio profesional para un estudio jurídico, con áreas de práctica y perfiles del equipo.",
    url: "https://www.desarrollocondezo.com/estudio-abogados",
    initial: "/estudio-abogados.png",
  },
  {
    title: "Inmobiliaria",
    category: "Sitio web",
    description:
      "Web para inmobiliaria que destaca propiedades y genera solicitudes de contacto de interesados.",
    url: "https://www.desarrollocondezo.com/inmoviliaria",
    initial: "/inmoviliaria.png",
  },
  {
    title: "MDT David",
    category: "E-commerce",
    description:
      "Tienda online para vender productos, con catálogo, carrito y proceso de compra.",
    url: "https://www.mtdavid.com.pe/",
    initial: "/ecommerce.png",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portafolio">
      <div className="container">
        <span className="section-label">Portafolio</span>
        <h2 className="section-title">Proyectos</h2>
        <p className="section-desc">
          Diseños de muestra para distintos industrias.
        </p>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-preview"
                aria-label={`Ver proyecto ${project.title}`}
              >
                <Image
                  src={project.initial.toString()}
                  alt={project.title}
                  fill
                />
              </a>
              <div className="portfolio-body">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  Ver proyecto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
