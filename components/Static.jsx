'use client';

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
    <section id="proceso" style={{ background: 'var(--bg2)', padding: '120px 6vw' }}>
      <div className="reveal" style={{ marginBottom: '72px' }}>
        <p className="section-label">Cómo trabajamos</p>
        <h2 className="section-title">Un proceso<br /><em>sin sorpresas</em></h2>
        <p style={{ color: 'var(--muted)', marginTop: '20px', fontSize: '1rem', lineHeight: 1.7, maxWidth: '480px' }}>
          Desde la primera llamada hasta el lanzamiento, sabemos exactamente qué viene después.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
        {steps.map((s, i) => (
          <div
            key={s.num}
            className={`reveal d${i + 1}`}
            style={{ background: 'var(--bg2)', padding: '48px 36px', position: 'relative', transition: 'background .3s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
          >
            <div style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: '5rem', fontWeight: 400, lineHeight: 1,
              color: 'rgba(13,13,13,.18)',
              marginBottom: '28px',
              letterSpacing: '-.02em'
            }}>{s.num}</div>
            <div style={{
              width: '32px', height: '2px',
              background: 'var(--accent)',
              marginBottom: '20px'
            }} />
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
              fontWeight: 700,
              marginBottom: '16px',
              lineHeight: 1.15,
              letterSpacing: '-.01em'
            }}>{s.title}</h3>
            <p style={{
              color: 'var(--muted)',
              fontSize: '1rem',
              lineHeight: 1.72,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 300
            }}>{s.desc}</p>
          </div>
        ))}
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
