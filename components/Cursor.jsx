'use client';
import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    let mx = -200, my = -200, rx = -200, ry = -200;
    let rafId;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);

    function loop() {
      rx += (mx - rx) * .16; ry += (my - ry) * .16;
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
      ring.style.left   = rx + 'px'; ring.style.top   = ry + 'px';
      rafId = requestAnimationFrame(loop);
    }
    loop();

    const hoverEls = document.querySelectorAll('a, button');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" aria-hidden="true" />
      <div className="cursor-ring" id="cursorRing" aria-hidden="true" />
    </>
  );
}
