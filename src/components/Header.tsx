export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo">
          <span className="logo-mark" />
          TuDev
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#proceso">Proceso</a>
            </li>
            <li>
              <a href="#sobre-mi">Sobre mí</a>
            </li>
          </ul>
          <a href="#contacto" className="btn btn-primary">
            Contáctame
          </a>
        </nav>
      </div>
    </header>
  );
}