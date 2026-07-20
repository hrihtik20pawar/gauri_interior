import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import { teamMembers } from '../about/MeetTheTeam';
import BrandName from '../../components/brand-name/BrandName';
import LinkedInIcon from '../../components/team/LinkedInIcon';
import { images } from '../../constants/images';

export default function TeamMemberDetail() {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.hero.slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!member) {
    return (
      <main className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-brand-green mb-4">Team Member Not Found</h1>
          <Link to="/about" className="text-brand-orange hover:underline">Back to About</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[500px] overflow-hidden">
        {images.hero.slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide}
            alt="Interior design showcase"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-green/50 to-brand-green/80" />
        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Image */}
              <div className="w-full md:w-1/3">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4]">
                  <img 
                    loading="lazy"
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Info */}
              <div className="w-full md:w-2/3 text-white">
                <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">{member.role}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
                  <BrandName as="span" size="lg" className="text-white">{member.name}</BrandName>
                </h1>
                <div className="w-24 h-1 bg-brand-orange rounded-full mb-6"></div>
                {member.linkedin && (
                  <LinkedInIcon href={member.linkedin} variant="light" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="mb-8">
            <Quote className="w-12 h-12 text-brand-orange/30" />
          </div>

          {/* Description */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 border border-gray-100">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
