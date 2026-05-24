'use client';
import { useState, useCallback } from 'react';

export default function Trabajos({ projects }) {
  const [preview, setPreview] = useState({ visible: false, src: '', x: 0, y: 0, alt: '' });

  const onEnter = useCallback((img, alt) => setPreview(p => ({ ...p, visible: true, src: img, alt })), []);
  const onMove  = useCallback((e) => setPreview(p => ({ ...p, x: e.clientX + 28, y: e.clientY - 80 })), []);
  const onLeave = useCallback(() => setPreview(p => ({ ...p, visible: false })), []);

  return (
    <section id="trabajos">
      <div
        className="work-preview"
        aria-hidden="true"
        style={{ left: preview.x, top: preview.y }}
        data-visible={preview.visible}
      >
        {preview.visible && (
          <img src={preview.src} alt={preview.alt} loading="lazy" />
        )}
      </div>

      <div className="works-header reveal">
        <div>
          <p className="section-label">Proyectos</p>
          <h2 className="section-title">Últimos <em>trabajos</em></h2>
        </div>
        <a href="#contacto">Iniciar proyecto →</a>
      </div>

      <div className="works-list">
        {projects.map((p, i) => (
          <a
            key={p.id}
            className={`work-row reveal d${i + 1}`}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => onEnter(p.image, p.imageAlt)}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            <span className="work-row-num">{p.num}</span>
            <div className="work-row-info">
              <p className="work-row-tag">{p.tag}</p>
              <h3 className="work-row-title">{p.title}</h3>
            </div>
            <p className="work-row-desc">{p.description}</p>
            <span className="work-row-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
