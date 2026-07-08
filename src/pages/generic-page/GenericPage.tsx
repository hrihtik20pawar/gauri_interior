import React from 'react';

export default function GenericPage({ title, description }: { title: string, description: string }) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1500px] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-green mb-6">{title}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">{description}</p>
        
        <div className="h-[400px] rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center">
          <p className="text-gray-400 font-medium">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
