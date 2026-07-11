import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { images } from '../../constants/images';
import BrandName from '../brand-name/BrandName';

const businesses = [
  { id: 'interior', title: 'Gauri Interior Pvt. Ltd.', desc: 'Comprehensive turnkey interior contracting solutions for commercial, residential, and institutional spaces.', logo: images.businesses.interiorLogo },
  { id: 'kitchen', title: "Gauri's Kitchen", desc: 'Premium modular kitchens and smart storage solutions designed for modern living.', logo: images.businesses.kitchenLogo },
  { id: 'nikhil', title: 'Nikhil Enterprises', desc: 'Your trusted supplier of premium plywood, laminates, hardware fittings, and modular furniture accessories.', logo: images.businesses.nikhilLogo },
  { id: 'studio', title: "Gauri's Designing Studio", desc: 'Creative design consultancy delivering architecture, interiors, space planning and 3D visualization.', logo: images.businesses.studioLogo },
];

export default function OtherBusinesses({ currentId }: { currentId: string }) {
  const others = businesses.filter((b) => b.id !== currentId);

  return (
    <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">Explore More</p>
        <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Our Other Businesses</h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((biz) => (
          <Link key={biz.id} to={`/business/${biz.id}`} className="group block">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-white flex items-center justify-center p-8">
              <img loading="lazy" src={biz.logo} alt={biz.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-brand-orange text-white text-xs font-semibold px-3 py-1.5 rounded inline-flex items-center gap-1.5">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1"><BrandName as="span">{biz.title}</BrandName></h3>
            <p className="text-gray-500 text-sm">{biz.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
