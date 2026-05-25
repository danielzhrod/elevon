export default function Precios() {
  const plans = [
    { valor: <>390<em>€</em></>,  badge: 'Starter',      nombre: 'Web Esencial',         desde: 'Desde', items: [ 'Diseño a medida (hasta 4 secciones)', 'Adaptado a móvil y tablet', 'Formulario de contacto funcional', 'SEO básico incluido', 'Entrega en menos de 2 semanas', ], cta: 'Solicitar presupuesto', featured: false, },
    { valor: <>550<em>€</em></>,  badge: 'Más popular',  nombre: 'Web Profesional',      desde: 'Desde', items: [ 'Diseño premium a medida', 'Hasta 8 secciones / páginas', 'Sistema de citas o reservas', 'SEO local avanzado', 'Animaciones y microinteracciones', 'Entrega en menos de 3 semanas', ], cta: 'Solicitar presupuesto', featured: true, },
    { valor: <>1.250<em>€</em></>,badge: 'Completo',     nombre: 'Web + Automatización', desde: 'Desde', items: [ 'Todo lo del plan Profesional', 'Chatbot con IA integrado', 'Branding y guía de marca', 'Google Analytics configurado', 'Mantenimiento 3 meses incluido', 'Soporte prioritario', ], cta: 'Solicitar presupuesto', featured: false, },
  ];

  return (
    <section id="precios">
      <div className="reveal" style={{ marginBottom: '56px' }}>
        <p className="section-label">Tarifas orientativas</p>
        <h2 className="section-title">
          Inversión clara,<br /><em>sin sorpresas</em>
        </h2>
      </div>
      <div className="precios-inner">
        {plans.map((p, i) => (
          <div key={i} className={`precio-card reveal d${i + 1}${p.featured ? ' featured' : ''}`}>
            <span className="precio-badge">{p.badge}</span>
            <p className="precio-nombre">{p.nombre}</p>
            <p className="precio-desde">{p.desde}</p>
            <p className="precio-valor">{p.valor}</p>
            <ul className="precio-lista">
              {p.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
            <a href="#contacto" className="precio-cta">{p.cta}</a>
          </div>
        ))}
      </div>
      <p className="precio-nota">
        Precios orientativos. Cada proyecto es único.{' '}
        <a href="#contacto">Cuéntanos el tuyo</a> y te damos un presupuesto exacto sin compromiso.
      </p>
    </section>
  );
}
