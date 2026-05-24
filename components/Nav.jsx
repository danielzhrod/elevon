'use client';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`main-nav${scrolled ? ' scrolled' : ''}`} aria-label="Navegación principal">
        <a href="#inicio" className="nav-logo">Elev<span>on</span></a>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#trabajos">Trabajos</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="#contacto" className="nav-cta">Solicitar presupuesto personalizado</a>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <a href="#servicios" onClick={close}>Servicios</a>
        <a href="#trabajos"  onClick={close}>Trabajos</a>
        <a href="#proceso"   onClick={close}>Proceso</a>
        <a href="#contacto"  onClick={close}>Contacto</a>
        <a href="#contacto"  onClick={close} className="mobile-cta">Solicitar presupuesto</a>
      </div>
    </>
  );
}
