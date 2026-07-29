import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "CEO, Sharma Enterprises",
    content: "Working with Gauri Interior was an exceptional experience. Their attention to detail and commitment to quality transformed our office space into a modern masterpiece. The team delivered beyond our expectations.",
    rating: 5
  },
  {
    name: "Priya Patel",
    position: "Director, Patel Hospitality",
    content: "Gauri Group's expertise in interior design is unmatched. They understood our vision perfectly and created a stunning environment for our hotel. Their professionalism and timely delivery impressed us greatly.",
    rating: 5
  },
  {
    name: "Amit Kumar",
    position: "Owner, Kumar Residences",
    content: "The modular kitchen designed by Gauri's Kitchen is beautiful and highly functional. Their team was cooperative, skilled, and delivered a product that perfectly suits our lifestyle. Highly recommended!",
    rating: 5
  },
  {
    name: "Sneha Gupta",
    position: "Founder, Design Studio",
    content: "Partnering with Gauri's Designing Studio was a great decision. Their innovative approach and creative solutions helped us achieve a workspace that inspires creativity and productivity every day.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 md:py-24 px-5 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 md:mb-4">Testimonials</p>
          <h2 className="text-2xl md:text-4xl font-serif text-brand-green mb-3 md:mb-4">What Our Clients Say</h2>
          <div className="w-16 md:w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="relative bg-gray-50 rounded-2xl md:rounded-3xl p-5 md:p-12 lg:p-16">
          <div className="mb-4 md:mb-6">
            <Quote className="w-8 h-8 md:w-10 md:h-10 text-brand-orange/30" />
          </div>

          <p className="text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed mb-6 md:mb-8">
            "{testimonials[currentIndex].content}"
          </p>

          <div className="w-12 md:w-16 h-0.5 bg-brand-orange mb-4 md:mb-6"></div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-brand-teal flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-base md:text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-brand-green font-bold text-sm md:text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500 text-xs md:text-sm">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6 md:mt-10">
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`min-h-[12px] min-w-[12px] md:min-h-[16px] md:min-w-[16px] flex items-center justify-center rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-brand-orange w-3 md:w-4' : 'bg-gray-300 w-1.5'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2 md:gap-3">
              <button
                onClick={goToPrevious}
                aria-label="Previous testimonial"
                className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Next testimonial"
                className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
