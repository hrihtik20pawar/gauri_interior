import React, { useEffect } from 'react';
import { images } from '../../constants/images';

const SITE_NAME = 'Gauri Interior Pvt. Ltd.';

export default function GenericPage({ title, description }: { title: string, description: string }) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[100dvh] min-h-[500px] overflow-hidden">
        <img src={images.about.hero} alt="Page hero background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-green/50 to-brand-green/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6">{title}</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-16">{description}</p>
          <div className="h-[200px] sm:h-[300px] w-full max-w-2xl rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <p className="text-white/60 font-medium">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
