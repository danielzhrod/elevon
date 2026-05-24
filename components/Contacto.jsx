'use client';
import { useState, useRef } from 'react';

const KNOWN_DOMAINS = new Set([
  'gmail.com','googlemail.com','hotmail.com','hotmail.es','hotmail.co.uk',
  'outlook.com','outlook.es','live.com','live.es','msn.com',
  'yahoo.com','yahoo.es','yahoo.co.uk','icloud.com','me.com','mac.com',
  'proton.me','protonmail.com','tutanota.com','aol.com','gmx.com','gmx.es',
  'telefonica.net','movistar.es','orange.es','vodafone.es',
]);
const SPAM_TLDS = new Set(['xyz','tk','ml','ga','cf','gq','pw','top','click','loan','win','bid']);

function isValidEmail(val) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) return false;
  const domain = val.split('@')[1];
  const tld    = domain.split('.').pop();
  return KNOWN_DOMAINS.has(domain) || (!SPAM_TLDS.has(tld) && domain.includes('.'));
}

export default function Contacto() {
  const [state, setState] = useState({ nombre: '', email: '', tipo: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [btnState, setBtnState] = useState('idle'); // idle | sending | success | error
  const [msgText, setMsgText] = useState('');
  const honeyRef = useRef(null);

  const onChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }));
    setErrors(er => ({ ...er, [e.target.name]: false }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (honeyRef.current?.value) return; // honeypot triggered

    const errs = {};
    if (!state.nombre.trim()) errs.nombre = true;
    if (!isValidEmail(state.email.trim().toLowerCase())) errs.email = true;
    if (!state.tipo) errs.tipo = true;

    if (Object.keys(errs).length) {
      setErrors(errs);
      setBtnState('error');
      setMsgText('');
      setTimeout(() => setBtnState('idle'), 3000);
      return;
    }

    setBtnState('sending');
    try {
      const res = await fetch('https://formspree.io/f/xjgzeroy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...state, email: state.email.trim().toLowerCase() }),
      });
      if (res.ok) {
        setBtnState('success');
        setState({ nombre: '', email: '', tipo: '', mensaje: '' });
      } else throw new Error();
    } catch {
      setBtnState('idle');
      setMsgText('✗ Error al enviar. Escríbenos a elevongroup@hotmail.com');
    }
  }

  const btnLabel = { idle: 'Enviar mensaje →', sending: 'Enviando…', success: '✓  Mensaje enviado — te contactamos pronto', error: '⚠  Faltan campos obligatorios' };

  return (
    <section id="contacto">
      <div className="contact-inner">
        <div className="contact-left reveal">
          <h2>¿Qué tienes<br /><em>en mente?</em></h2>
          <p>Cuéntanos en qué consiste. Respondemos en menos de 24 horas y la primera consulta es siempre gratuita.</p>
          <div className="contact-links">
            <a href="mailto:elevongroup@hotmail.com" className="contact-link">
              <div className="cl-meta">
                <span className="cl-type">Email</span>
                <span className="cl-label">elevongroup@hotmail.com</span>
              </div>
              <span className="cl-arrow" aria-hidden="true">↗</span>
            </a>
            <a href="tel:+34681066861" className="contact-link">
              <div className="cl-meta">
                <span className="cl-type">Teléfono</span>
                <span className="cl-label">+34 681 066 861</span>
              </div>
              <span className="cl-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="contact-link" style={{ cursor: 'default' }}>
              <div className="cl-meta">
                <span className="cl-type">Horario</span>
                <span className="cl-label">Lun — Dom · 16:00 a 20:30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form reveal d2">
          <p className="form-title">Cuéntanos tu proyecto</p>
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot anti-spam */}
            <div className="fg honeypot" aria-hidden="true">
              <input ref={honeyRef} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="form-row">
              <div className="fg">
                <label htmlFor="f-nombre">Nombre <span className="req">*</span></label>
                <input id="f-nombre" name="nombre" type="text" placeholder="Tu nombre"
                  value={state.nombre} onChange={onChange}
                  className={errors.nombre ? 'error' : ''} />
              </div>
              <div className="fg">
                <label htmlFor="f-email">Email <span className="req">*</span></label>
                <input id="f-email" name="email" type="email" placeholder="tu@email.com"
                  value={state.email} onChange={onChange}
                  className={errors.email ? 'error' : ''} />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="f-tipo">Tipo de proyecto <span className="req">*</span></label>
              <select id="f-tipo" name="tipo" value={state.tipo} onChange={onChange}
                className={errors.tipo ? 'error' : ''}>
                <option value="" disabled>Selecciona una opción</option>
                <option>Web de empresa / negocio</option>
                <option>Restaurante / Hostelería</option>
                <option>Clínica / Salud</option>
                <option>Tienda online</option>
                <option>Portfolio / Personal</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="fg">
              <label htmlFor="f-mensaje">Cuéntame tu proyecto</label>
              <textarea id="f-mensaje" name="mensaje" placeholder="Describe brevemente qué necesitas…"
                value={state.mensaje} onChange={onChange} />
            </div>
            {msgText && <div className="form-msg error" style={{ display: 'block' }}>{msgText}</div>}
            <button
              type="submit"
              className={`form-submit ${btnState}`}
              disabled={btnState === 'sending' || btnState === 'success'}
            >
              {btnLabel[btnState]}
            </button>
            <p style={{ fontSize: '.75rem', color: 'rgba(245,242,236,.35)', marginTop: '10px', textAlign: 'center' }}>
              Respondemos en &lt;24h · Consulta gratuita sin compromiso
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
