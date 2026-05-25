export default function Precios() {
  const plans = [
    {
      badge: 'Starter',
      nombre: 'Web Esencial',
      desde: 'Único pago',
      valor: <>390<em>€</em></>,
      items: [
        'Estructura One-Page con secciones desplazables (Inicio, Sobre mí, Contacto)',
        'Diseño con plantilla adaptada a tus colores corporativos y logotipo',
        '100% responsive para móvil y tablet',
        'Formulario de contacto enlazado a tu correo',
        'Enlaces a redes sociales y mapa de Google',
      ],
      cta: 'Solicitar presupuesto',
      featured: false,
    },
    {
      badge: 'Más popular',
      nombre: 'Web Profesional',
      desde: 'Único pago · Pago fraccionado',
      valor: <>550<em>€</em></>,
      items: [
        'Multi-página hasta 5 secciones independientes (Inicio, Servicios, Sobre Nosotros, Blog y Contacto)',
        'Diseño 100% personalizado a la identidad de tu marca',
        'Estructura estratégica de conversión para conseguir llamadas y presupuestos',
        'SEO local básico para aparecer correctamente en Google',
        'Revisión y optimización de textos (Copywriting)',
        'Sistema de reserva de citas integrado',
        'Botón de WhatsApp directo para contacto con un clic',
        '15 días de soporte técnico gratuito tras la entrega',
      ],
      cta: 'Solicitar presupuesto',
      featured: true,
    },
    {
      badge: 'Completo',
      nombre: 'Web + Automatización',
      desde: 'Único pago · Pago fraccionado',
      valor: <>1.250<em>€</em></>,
      items: [
        'Todo lo incluido en el Paquete Web Profesional',
        'Automatización de clientes potenciales',
        'Integración de WhatsApp API / Email Automation',
        'Sistema de reserva de citas y presupuestos online',
        'Formación incluida: sesión de 1h por videollamada para gestionar tu sistema',
        '2 meses de soporte técnico gratuito',
      ],
      cta: 'Solicitar presupuesto',
      featured: false,
    },
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
