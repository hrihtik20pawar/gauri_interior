import { useEffect } from 'react';
import AboutHero from './AboutHero';
import OurStory from './OurStory';
import WhoWeAre from './WhoWeAre';
import VisionMission from './VisionMission';
import OurServices from './OurServices';
import OurProcess from './OurProcess';
import WhyChooseUs from './WhyChooseUs';
import CompanyStats from './CompanyStats';
import MeetTheTeam from './MeetTheTeam';
import CoreValues from './CoreValues';
import AboutCta from './AboutCta';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <AboutHero />
      <OurStory />
      <WhoWeAre />
      <VisionMission />
      <OurServices />
      {/* <OurProcess /> */}
      <WhyChooseUs />
      {/* <CompanyStats /> */}
      <MeetTheTeam />
      <CoreValues />
      <AboutCta />
    </main>
  );
}
