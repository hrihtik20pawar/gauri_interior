import { useEffect } from 'react';
import Hero from '../../components/hero/Hero';
import Stats from '../../components/stats/Stats';
import About from '../../components/about/About';
import Timeline from '../../components/timeline/Timeline';
import Testimonials from '../../components/testimonials/Testimonials';
import Clients from '../../components/clients/Clients';
import Values from '../../components/values/Values';

const SITE_NAME = 'Gauri Interior Pvt. Ltd.';

export default function Home() {
  useEffect(() => {
    document.title = `${SITE_NAME} | Premium Interior Design & Turnkey Solutions in Mumbai`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Gauri Interior Pvt. Ltd. offers premium interior design, renovation & turnkey project execution for residential, commercial, hospitality & healthcare spaces in Mumbai since 2012.');
  }, []);

  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <Clients />
      <Testimonials />
    </main>
  );
}
