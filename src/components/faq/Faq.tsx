import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BrandName from '../brand-name/BrandName';

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    question: "How Long Does The Design Process Take?",
    answer: "The timeline depends on the scope of the project. A standard residential interior typically takes 4–8 weeks from concept to completion, while larger commercial projects may take 8–16 weeks. We provide a detailed timeline during the initial consultation."
  },
  {
    question: "Do You Handle Renovations Or Just Designs?",
    answer: "We handle both. From complete renovations to fresh interior designs, our team manages everything — including civil work, electrical, plumbing, carpentry, and final styling — all under one roof."
  },
  {
    question: "What Is Included In Your Design Package?",
    answer: "Our design package includes concept development, 3D visualization, material selection, furniture layout, color consultation, site supervision, and project management. We offer flexible packages tailored to your needs and budget."
  },
  {
    question: "Can You Work With My Existing Furniture?",
    answer: "Absolutely. We can incorporate your existing furniture into the new design layout. Our team will suggest complementary pieces, color schemes, and decor to ensure a cohesive and refreshed look."
  },
  {
    question: "How Much Does Interior Design Cost?",
    answer: "Our pricing depends on the project scope, materials, and complexity. We offer transparent pricing with no hidden costs. Contact us for a free consultation and we'll provide a customized quote based on your requirements."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo('.faq-text',
      { y: 40 },
      {
        y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      }
    );

    gsap.fromTo('.faq-item',
      { x: 40, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 75%' }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* Left Side — Image Card */}
        <div className="faq-text lg:w-[35%] w-full">
          <div className="relative rounded-2xl overflow-hidden bg-gray-50 p-6 md:p-8">
            <img
              loading="lazy"
              src="/images/about/new_office_image.avif"
              alt="Interior Design Studio"
              className="w-full h-[280px] md:h-[340px] object-cover rounded-xl mb-6"
            />
            <h3 className="text-brand-green font-serif text-2xl md:text-3xl mb-3">Have More Questions?</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We'd love to hear from you. Reach out to our team for personalized guidance on your next project.
            </p>

          </div>
        </div>

        {/* Right Side — Accordion */}
        <div className="lg:w-[65%] w-full">
          <div className="mb-10 faq-text">
            <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-green leading-snug">
              Your Questions, Answered With Clarity
            </h2>
            <div className="w-16 h-1 bg-brand-orange rounded-full mt-4"></div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-item border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-brand-orange bg-brand-orange/5' : 'border-gray-200 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                      isOpen ? 'hover:bg-brand-orange/10' : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className={`font-medium text-sm md:text-base ${isOpen ? 'text-brand-orange' : 'text-gray-800'}`}>{item.question}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-brand-orange/15' : 'bg-gray-100'}`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-brand-orange" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-500" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
