'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx  = canvas.getContext('2d');
    const hero = canvas.parentElement;
    const isMobile = () => window.innerWidth < 768;

    let W, H, particles, rafId;
    const mouse = { x: -999, y: -999 };

    function getCount() { return isMobile() ? 25 : 55; }
    const MAX_DIST   = 145;
    const MOUSE_DIST = 180;

    function resize() {
      W = canvas.width  = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    }

    function Particle() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - .5) * .45;
      this.vy = (Math.random() - .5) * .45;
      this.r  = Math.random() * 1.8 + .8;
      this.accent = Math.random() < .18;
    }

    function init() {
      resize();
      particles = Array.from({ length: getCount() }, () => new Particle());
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST * .9;
          p.x += dx / dist * force * 1.6;
          p.y += dy / dist * force * 1.6;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent ? 'rgba(255,77,28,.55)' : 'rgba(13,13,13,.25)';
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(13,13,13,${(1 - d / MAX_DIST) * .18})`;
            ctx.lineWidth = .7;
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      if (!document.hidden) draw();
      rafId = requestAnimationFrame(loop);
    }

    const onMouseMove = (e) => {
      const r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onMouseLeave = () => { mouse.x = -999; mouse.y = -999; };
    const onVisibility  = () => { if (document.hidden) cancelAnimationFrame(rafId); else loop(); };
    const onResize      = () => init();

    hero.addEventListener('mousemove',  onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', onResize);

    init();
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      hero.removeEventListener('mousemove',  onMouseMove);
      hero.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="inicio">
      <div className="hero-gradient" aria-hidden="true" />
      <canvas id="particleCanvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero-main">
        <p className="hero-eyebrow">Estudio de diseño web</p>
        <h1 className="hero-title">
          Webs que<br />
          <em>elevan</em><br />
          tu <span className="outline">negocio.</span>
        </h1>
      </div>
      <div className="hero-bottom">
        <p className="hero-sub">
          Diseñamos y desarrollamos páginas web a medida para negocios que quieren
          destacar. Cada proyecto es único. Cada detalle, pensado.
        </p>
        <div className="hero-actions">
          <a href="#trabajos" className="btn-primary">Ver trabajos</a>
          <a href="#contacto" className="btn-ghost">Hablemos</a>
        </div>
      </div>
    </section>
  );
}
