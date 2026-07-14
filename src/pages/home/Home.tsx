import Hero from '../../components/hero/Hero';
import Features from '../../components/features/Features';
import Stats from '../../components/stats/Stats';
import About from '../../components/about/About';
import Timeline from '../../components/timeline/Timeline';
import Testimonials from '../../components/testimonials/Testimonials';
import Clients from '../../components/clients/Clients';
import Values from '../../components/values/Values';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <About />
      <Timeline />
      <Clients />
      <Testimonials />
      {/* <Values /> */}
    </main>
  );
}
