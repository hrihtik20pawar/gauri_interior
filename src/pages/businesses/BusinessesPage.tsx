import { useEffect } from 'react';
import Businesses from '../../components/businesses/Businesses';

const SITE_NAME = 'Gauri Interior Pvt. Ltd.';

export default function BusinessesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Our Ventures | ${SITE_NAME}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Explore the Gauri Group ventures - Gauri Interior, Nikhil Enterprises, Gauri Kitchen, and Gauri Designing Studio. A diversified business ecosystem in Mumbai.');
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-brand-green to-teal-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Our Companies</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Our Ventures</h1>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-8"></div>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            A diversified business ecosystem bringing together multiple specialized ventures under one trusted brand.
          </p>
        </div>
      </section>

      {/* Businesses Section */}
      <Businesses />
    </main>
  );
}
