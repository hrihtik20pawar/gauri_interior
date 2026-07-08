import Hero from '../../components/hero/Hero';
import Features from '../../components/features/Features';
import Stats from '../../components/stats/Stats';
import About from '../../components/about/About';
import Businesses from '../../components/businesses/Businesses';
import Works from '../../components/works/Works';
import Timeline from '../../components/timeline/Timeline';
import Team from '../../components/team/Team';
import Values from '../../components/values/Values';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <About />
      <Businesses />
      <Works />
      <Timeline />
      <Team />
      {/* <Values /> */}
    </main>
  );
}
