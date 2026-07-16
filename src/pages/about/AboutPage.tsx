import { useEffect } from 'react';
import AboutHero from './AboutHero';
import MeetTheTeam from './MeetTheTeam';
import Businesses from '../../components/businesses/Businesses';

const SITE_NAME = 'Gauri Interior Pvt. Ltd.';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `About Us | ${SITE_NAME}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Learn about Gauri Group - a trusted name in interior design since 1993. Discover our journey, leadership, and commitment to excellence in Mumbai.');
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <AboutHero />
      <Businesses />
      <MeetTheTeam />
    </main>
  );
}
