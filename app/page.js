import { getProjects } from '../lib/sanity';
import Nav              from '../components/Nav';
import Hero             from '../components/Hero';
import { Ticker, Proceso, Footer } from '../components/Static';
import Servicios        from '../components/Servicios';
import Precios          from '../components/Precios';
import Trabajos         from '../components/Trabajos';
import Contacto         from '../components/Contacto';
import CookieConsent    from '../components/CookieConsent';
import Cursor           from '../components/Cursor';
import RevealObserver   from '../components/RevealObserver';

export default async function Page() {
  const projects = await getProjects();

  return (
    <>
      <Cursor />
      <RevealObserver />
      <Nav />
      <Hero />
      <Ticker />
      <Servicios />
      <Precios />
      <Trabajos projects={projects} />
      <Proceso />
      <Contacto />
      <Footer />
      <CookieConsent />
    </>
  );
}
