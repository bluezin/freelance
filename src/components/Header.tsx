"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo" onClick={() => setMenuOpen(false)}>
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

        <button
          type="button"
          className={`hamburger${menuOpen ? " is-open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#servicios" onClick={() => setMenuOpen(false)}>
            Servicios
          </a>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>
            Proceso
          </a>
          <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="btn btn-primary">
            Contáctame
          </a>
        </nav>
      )}
    </header>
  );
}