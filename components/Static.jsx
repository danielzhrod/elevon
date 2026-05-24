export function Ticker() {
  const items = ['Diseño web', 'Branding', 'SEO & Rendimiento', 'Desarrollo a medida', 'Identidad visual', 'Mantenimiento'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>{item} <span>✦</span></span>
        ))}
      </div>
    </div>
  );
}

export function Proceso() {
  const steps = [
    { num: '01', title: 'Reunión inicial', desc: 'Escuchamos tu proyecto, tus objetivos y a quién va dirigido. Una conversación sin compromiso para entender qué necesitas.' },
    { num: '02', title: 'Propuesta & presupuesto', desc: 'Te presentamos un plan detallado: diseño, funcionalidades, plazos y precio cerrado. Sin letras pequeñas.' },
    { num: '03', title: 'Diseño & desarrollo', desc: 'Construimos tu web con revisiones periódicas para que siempre tengas el control del resultado.' },
    { num: '04', title: 'Lanzamiento & soporte', desc: 'Publicamos la web, te entregamos todo y seguimos disponibles para cualquier ajuste o actualización.' },
  ];
  return (
    <section id="proceso">
      <div className="proceso-inner">
        <div className="proceso-sticky reveal">
          <p className="section-label">Cómo trabajamos</p>
          <h2 className="section-title">Un proceso<br /><em>sin sorpresas</em></h2>
          <p>Desde la primera llamada hasta el lanzamiento, sabemos exactamente qué viene después. Claridad total en cada paso.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className={`step reveal d${i + 1}`} key={s.num}>
              <span className="step-num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="main-footer">
      <div>
        <a href="#inicio" className="footer-logo">Elev<span>on</span></a>
        <p style={{ fontSize: '.76rem', color: 'rgba(245,242,236,.35)', marginTop: '4px' }}>Estudio de diseño web · Valladolid, España</p>
      </div>
      <nav className="footer-nav" aria-label="Footer">
        <a href="#servicios">Servicios</a>
        <a href="#trabajos">Trabajos</a>
        <a href="#proceso">Proceso</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className="footer-legal">
        <p>© 2026 Elevon Studio</p>
        <div className="footer-legal-links">
          <a href="/privacidad">Política de privacidad</a>
          <a href="/aviso-legal">Aviso legal</a>
        </div>
      </div>
    </footer>
  );
}
