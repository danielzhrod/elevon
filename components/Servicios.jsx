'use client';
import { useState, useRef, useEffect } from 'react';

const SERVICES = [
  { id: 1, name: 'Branding', desc: 'Una marca es mucho más que un logo. Construimos identidades visuales sólidas — logotipo, paleta, tipografía y guía de marca — para que tu negocio comunique con coherencia en todos los puntos de contacto.' },
  { id: 2, name: 'Sitios web', desc: 'Diseñamos y desarrollamos sitios web a medida, rápidos y optimizados para todos los dispositivos. Sin plantillas genéricas. Cada web, construida desde cero para el negocio que la necesita.' },
  { id: 3, name: 'Sistemas de citas y reservas', desc: 'Integramos sistemas de reservas y gestión de citas directamente en tu web. Tus clientes reservan 24/7 sin llamadas, tú recibes confirmaciones automáticas y reduces el trabajo administrativo a cero.' },
  { id: 4, name: 'Chatbots automatizados', desc: 'Implementamos asistentes conversacionales con IA que responden a tus clientes al instante, resuelven dudas frecuentes y recogen la información que necesitas. Tu negocio atiende sin parar, incluso cuando no estás.' },
  { id: 5, name: 'SEO & Rendimiento', desc: 'Código limpio y estrategia de posicionamiento para que Google te encuentre antes que a tu competencia. Webs rápidas, accesibles y optimizadas desde el primer día.' },
  { id: 6, name: 'Mantenimiento & soporte', desc: 'Actualizaciones, copias de seguridad y soporte continuo para que tu web funcione siempre a pleno rendimiento. Estamos disponibles para cualquier ajuste o mejora cuando lo necesites.' },
];

const STATS = [
  { value: null, prefix: '<', suffix: ' sem', label: 'De idea a web publicada', fixed: '3' },
  { value: 24,   prefix: '',  suffix: 'h',    label: 'Tiempo de respuesta garantizado' },
  { value: 100,  prefix: '',  suffix: '%',    label: 'Webs hechas a medida, sin plantillas', accentSuffix: true },
  { value: null, prefix: '',  suffix: '',     label: 'Consulta siempre gratuita', fixed: '1ª', accentFixed: true },
];

function CountUp({ target }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let cur = 0;
      const steps = 1400 / 16;
      const inc   = target / steps;
      const t = setInterval(() => {
        cur = Math.min(cur + inc, target);
        setVal(Math.floor(cur));
        if (cur >= target) clearInterval(t);
      }, 16);
      obs.unobserve(ref.current);
    }, { threshold: .5 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}</span>;
}

export default function Servicios() {
  const [open, setOpen] = useState(null);
  const panelRefs = useRef({});

  function toggle(id) { setOpen(prev => (prev === id ? null : id)); }

  useEffect(() => {
    SERVICES.forEach(s => {
      const el = panelRefs.current[s.id];
      if (!el) return;
      el.style.maxHeight = open === s.id ? el.scrollHeight + 'px' : '0px';
    });
  }, [open]);

  return (
    <section id="servicios">
      <div className="clay-wrap">
        <div className="clay-left">
          <p className="section-label">Lo que hacemos</p>
          <p className="clay-intro">
            Creamos experiencias digitales para negocios que quieren <em>destacar</em>,
            combinando diseño, tecnología e identidad de marca.
          </p>
          <div className="clay-stats reveal">
            {STATS.map((s, i) => (
              <div className="clay-stat" key={i}>
                <div className="clay-stat-num">
                  {s.prefix && <span className="accent">{s.prefix}</span>}
                  {s.fixed
                    ? <span className={s.accentFixed ? 'accent' : ''}>{s.fixed}</span>
                    : <CountUp target={s.value} />
                  }
                  {s.suffix && <span className={s.accentSuffix ? 'accent' : ''}>{s.suffix}</span>}
                </div>
                <div className="clay-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="clay-list" role="list">
          {SERVICES.map(s => (
            <div className={`clay-item${open === s.id ? ' open' : ''}`} key={s.id} role="listitem">
              <button
                className="clay-toggle"
                onClick={() => toggle(s.id)}
                aria-expanded={open === s.id}
                aria-controls={`panel-${s.id}`}
              >
                {s.name}
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className="clay-panel"
                id={`panel-${s.id}`}
                ref={el => (panelRefs.current[s.id] = el)}
                role="region"
                aria-labelledby={`toggle-${s.id}`}
              >
                <div className="clay-panel-inner">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
