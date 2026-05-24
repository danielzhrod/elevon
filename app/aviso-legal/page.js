export const metadata = {
  title: 'Aviso Legal · Elevon Studio',
  description: 'Aviso legal de Elevon Studio conforme a la Ley 34/2002 (LSSI).',
};

export default function AvisoLegal() {
  return (
    <div style={{ background: '#f5f2ec', minHeight: '100vh', padding: '0 6vw', fontFamily: "'Syne', sans-serif", fontWeight: 300 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Syne:wght@300;400;500&display=swap');`}</style>
      <header style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'28px 0', borderBottom:'1px solid rgba(13,13,13,.1)', marginBottom:'64px' }}>
        <a href="/" style={{ fontFamily:"'Instrument Serif',serif", fontSize:'1.6rem', textDecoration:'none', color:'#0d0d0d', letterSpacing:'.04em' }}>
          Elev<span style={{ color:'#ff4d1c', fontStyle:'italic' }}>on</span>
        </a>
        <a href="/" style={{ fontSize:'.76rem', letterSpacing:'.12em', textTransform:'uppercase', color:'#7a756e', textDecoration:'none' }}>← Volver</a>
      </header>
      <main style={{ maxWidth:'720px', margin:'0 auto', paddingBottom:'100px' }}>
        <h1 style={{ fontFamily:"'Instrument Serif',serif", fontSize:'clamp(2rem,5vw,3.2rem)', fontWeight:400, marginBottom:'12px', lineHeight:1.1 }}>Aviso Legal</h1>
        <p style={{ color:'#7a756e', fontSize:'.82rem', letterSpacing:'.1em', marginBottom:'48px' }}>Última actualización: enero de 2026</p>
        {[
          ['1. Datos identificativos', 'En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI), se informa que el presente sitio web es titularidad de Elevon Studio, NIF 12345122A, con domicilio en Valladolid, España, y email elevongroup@hotmail.com, teléfono +34 681 066 861.'],
          ['2. Objeto y ámbito de aplicación', 'El presente aviso legal regula el acceso y uso del sitio web elevon.vercel.app. El acceso implica la aceptación plena de las presentes condiciones.'],
          ['3. Propiedad intelectual', 'Todos los contenidos de este sitio web son propiedad de Elevon Studio o de sus legítimos titulares. Queda prohibida su reproducción sin autorización expresa.'],
          ['4. Responsabilidad', 'Elevon Studio no se hace responsable de los daños derivados del uso de la información contenida en este sitio.'],
          ['5. Legislación aplicable', 'Las presentes condiciones se rigen por la legislación española. Las partes se someten a los juzgados y tribunales de Valladolid.'],
        ].map(([title, text]) => (
          <div key={title} style={{ marginBottom:'24px' }}>
            <h2 style={{ fontSize:'1rem', fontWeight:600, letterSpacing:'.04em', marginBottom:'8px' }}>{title}</h2>
            <p style={{ color:'#3a3530', fontSize:'.93rem', lineHeight:1.75 }}>{text}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
