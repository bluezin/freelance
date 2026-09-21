export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <span className="hero-badge">Disponible para nuevos proyectos</span>
        <h1>
          Creo sitios web que hacen crecer tu{" "}
          <span className="accent-text">negocio</span>
        </h1>
        <p>
          Soy una desarrolladora web independiente. Diseño y desarrollo
          sitios web modernos, rápidos y atractivos para emprendedores y
          pequeñas empresas.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary">
            Cotiza tu proyecto
          </a>
          <a href="#servicios" className="btn btn-outline">
            Ver servicios
          </a>
        </div>
        {/* <div className="hero-stats">
          <div>
            <strong>2</strong>
            <span>Proyectos entregados</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Clientes satisfechos</span>
          </div>
          <div>
            <strong>1</strong>
            <span>Año de experiencia</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
