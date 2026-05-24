export const metadata = {
  title: 'Política de Privacidad · Elevon Studio',
  description: 'Política de privacidad de Elevon Studio conforme al RGPD y la LOPD.',
};

export default function Privacidad() {
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
        <h1 style={{ fontFamily:"'Instrument Serif',serif", fontSize:'clamp(2rem,5vw,3.2rem)', fontWeight:400, marginBottom:'12px', lineHeight:1.1 }}>Política de Privacidad</h1>
        <p style={{ color:'#7a756e', fontSize:'.82rem', letterSpacing:'.1em', marginBottom:'48px' }}>Última actualización: enero de 2026</p>
        {[
          ['1. Responsable del tratamiento', 'Elevon Studio, NIF 12345122A, con email elevongroup@hotmail.com, es el responsable del tratamiento de los datos personales recogidos a través de este sitio web.'],
          ['2. Datos que recogemos', 'A través del formulario de contacto recogemos nombre, dirección de correo electrónico y la información que el usuario decida incluir en su mensaje.'],
          ['3. Finalidad del tratamiento', 'Los datos facilitados se utilizan exclusivamente para responder a las consultas enviadas y gestionar la relación comercial con los usuarios interesados en nuestros servicios.'],
          ['4. Base jurídica', 'El tratamiento se basa en el consentimiento del interesado (art. 6.1.a RGPD), otorgado al enviar el formulario de contacto.'],
          ['5. Conservación de datos', 'Los datos se conservarán durante el tiempo necesario para gestionar la solicitud y, en caso de relación comercial, durante el período legalmente establecido.'],
          ['6. Destinatarios', 'Los datos no se ceden a terceros salvo obligación legal. El servicio de formulario es proporcionado por Formspree Inc. (formspree.io).'],
          ['7. Derechos del usuario', 'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a elevongroup@hotmail.com. También puedes reclamar ante la AEPD (aepd.es).'],
          ['8. Cookies', 'Este sitio no utiliza cookies propias de seguimiento. Las fuentes de Google Fonts pueden establecer cookies técnicas de terceros.'],
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
