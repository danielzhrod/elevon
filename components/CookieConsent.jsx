'use client';
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('elevon_cookies');
      if (!saved) setVisible(true);
    } catch { setVisible(true); }
  }, []);

  function accept() {
    try { localStorage.setItem('elevon_cookies', 'accepted'); } catch {}
    setVisible(false);
  }

  function reject() {
    try { localStorage.setItem('elevon_cookies', 'rejected'); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p>
        Este sitio utiliza cookies técnicas de Google Fonts necesarias para su funcionamiento.
        Puedes consultar nuestra{' '}
        <a href="/privacidad">política de privacidad</a>.
        Conforme a la Ley 34/2002 (LSSI) y el RGPD, necesitamos tu consentimiento.
      </p>
      <div className="cookie-btns">
        <button className="cookie-reject" onClick={reject}>Rechazar</button>
        <button className="cookie-accept" onClick={accept}>Aceptar</button>
      </div>
    </div>
  );
}
