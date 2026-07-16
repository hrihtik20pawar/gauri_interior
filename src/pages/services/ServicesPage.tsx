import { useEffect } from 'react';
import WhoWeAre from '../about/WhoWeAre';
import VisionMission from '../about/VisionMission';
import OurServices from '../about/OurServices';
import WhyChooseUs from '../about/WhyChooseUs';
import CoreValues from '../about/CoreValues';
import AboutCta from '../about/AboutCta';

const SITE_NAME = 'Gauri Interior Pvt. Ltd.';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Our Services | ${SITE_NAME}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Comprehensive interior design and turnkey solutions by Gauri Group. Explore our services across corporate, healthcare, hospitality, and residential projects.');
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <WhoWeAre />
      <VisionMission />
      <OurServices />
      <WhyChooseUs />
      <CoreValues />
      <AboutCta />
    </main>
  );
}
