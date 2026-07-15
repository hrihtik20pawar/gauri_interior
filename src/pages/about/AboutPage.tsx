import { useEffect } from 'react';
import AboutHero from './AboutHero';
import WhoWeAre from './WhoWeAre';
import VisionMission from './VisionMission';
import OurServices from './OurServices';
import OurProcess from './OurProcess';
import WhyChooseUs from './WhyChooseUs';
import CompanyStats from './CompanyStats';
import MeetTheTeam from './MeetTheTeam';
import CoreValues from './CoreValues';
import AboutCta from './AboutCta';
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
      <WhoWeAre />
      <VisionMission />
      <OurServices />
      <WhyChooseUs />
      <MeetTheTeam />
      <CoreValues />
      <AboutCta />
    </main>
  );
}
