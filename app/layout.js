import './globals.css';

export const metadata = {
  title: 'Elevon · Diseño Web en Valladolid | Webs a medida para tu negocio',
  description: 'Estudio de diseño web en Valladolid. Creamos páginas web a medida, branding, SEO y chatbots para negocios que quieren destacar. Primera consulta gratuita.',
  metadataBase: new URL('https://elevon.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://elevon.vercel.app/',
    title: 'Elevon · Diseño Web en Valladolid',
    description: 'Webs a medida, branding y SEO para negocios que quieren destacar. Estudio en Valladolid. Primera consulta gratuita.',
    images: [{ url: 'https://raw.githubusercontent.com/danielzhrod/elevon/main/assets/fisiosuab-preview.png', width: 1280, height: 800 }],
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevon · Diseño Web en Valladolid',
    description: 'Webs a medida, branding y SEO para negocios que quieren destacar.',
    images: ['https://raw.githubusercontent.com/danielzhrod/elevon/main/assets/fisiosuab-preview.png'],
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Elevon Studio',
  description: 'Estudio de diseño web en Valladolid. Webs a medida, branding, SEO y chatbots.',
  url: 'https://elevon.vercel.app/',
  email: 'elevongroup@hotmail.com',
  telephone: '+34681066861',
  taxID: '12345122A',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valladolid',
    addressRegion: 'Castilla y León',
    addressCountry: 'ES',
  },
  openingHours: 'Mo-Su 16:00-20:30',
  priceRange: '€€',
  areaServed: 'España',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Syne:wght@300;400;500;600&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Syne:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
