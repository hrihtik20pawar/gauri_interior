import { useState, useRef, useEffect, useCallback } from 'react';
import { Plus, Minus, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from '../ui/Modal';
import { siteConfig } from '../../constants/contact';

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    question: "How Long Does The Design & Execution Process Take?",
    answer: "Every project has its own timeline depending on its size, complexity, and scope of work. Residential interior projects typically take 4–8 weeks, while larger commercial and turnkey projects may require 8–16 weeks. Before beginning, we provide a detailed project schedule so clients know exactly what to expect."
  },
  {
    question: "Do You Handle Complete Turnkey Projects?",
    answer: "Yes. We provide complete turnkey interior solutions, managing everything from design planning and space optimisation to civil work, carpentry, electrical, plumbing, modular furniture, painting, lighting, and final installation. Our team ensures a smooth and hassle-free experience from start to finish."
  },
  {
    question: "What Services Does Gauri Group Offer?",
    answer: "We offer residential and commercial interior design, modular kitchens, modular furniture, office interiors, renovation services, civil work, electrical work, plumbing, false ceilings, painting, and complete turnkey project execution. Every solution is customised to match your requirements, budget, and style."
  },
  {
    question: "Can You Work Within My Budget?",
    answer: "Absolutely. We understand that every client has different budget requirements. Our team recommends the most suitable materials, finishes, and design solutions to maximise value while maintaining excellent quality and aesthetics."
  },
  {
    question: "Do You Manufacture Modular Furniture?",
    answer: "Yes. We design and manufacture customised modular furniture including kitchens, wardrobes, TV units, office furniture, storage solutions, and bespoke cabinetry. Every product is built using quality materials with attention to durability, functionality, and modern design."
  },
  {
    question: "Will I Receive 3D Designs Before Execution?",
    answer: "Yes. Before execution begins, we provide detailed layouts and realistic 3D visualisations so you can clearly understand the final design. This allows you to review the concept and request modifications before construction starts."
  },
  {
    question: "Can You Renovate Existing Homes And Offices?",
    answer: "Yes. We undertake renovation projects for homes, offices, retail spaces, and commercial properties. Whether you need a complete makeover or improvements to specific areas, our team delivers high-quality renovation solutions with minimal disruption."
  },
  {
    question: "How Is The Project Cost Calculated?",
    answer: "The project cost depends on factors such as area, design complexity, material selection, custom furniture requirements, and project scope. After understanding your requirements, we provide a transparent quotation with a detailed cost breakdown and no hidden charges."
  },
  {
    question: "Why Choose Gauri Group?",
    answer: "Gauri Group combines creative design, skilled craftsmanship, and professional project management to deliver exceptional interiors. We focus on quality, timely completion, transparent communication, and customer satisfaction, ensuring every project exceeds expectations."
  },
  {
    question: "How Do I Get Started?",
    answer: "Getting started is simple. Contact us through our website, phone, or WhatsApp to schedule a consultation. Our experts will understand your requirements, discuss design ideas, visit your site if necessary, and provide a customised proposal and quotation."
  }
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  id
}: {
  item: typeof faqItems[number];
  isOpen: boolean;
  onToggle: () => void;
  id: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    tlRef.current?.kill();

    if (isOpen) {
      const height = contentRef.current.scrollHeight;
      gsap.set(contentRef.current, { height: 0, opacity: 0, display: 'block' });
      tlRef.current = gsap.to(contentRef.current, {
        height,
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(contentRef.current, { height: 'auto' });
        }
      });
    } else {
      const currentHeight = contentRef.current.scrollHeight;
      gsap.set(contentRef.current, { height: currentHeight });
      tlRef.current = gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }

    return () => { tlRef.current?.kill(); };
  }, [isOpen]);

  const questionId = `faq-question-${id}`;
  const answerId = `faq-answer-${id}`;

  return (
    <div
      ref={wrapperRef}
      className={`faq-item rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-brand-orange/40 shadow-[0_4px_20px_rgba(234,91,35,0.08)] bg-white'
          : 'border-gray-200 bg-white hover:border-brand-orange/20 hover:shadow-[0_2px_12px_rgba(234,91,35,0.05)]'
      }`}
    >
      <button
        id={questionId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className={`w-full flex items-center justify-between gap-3 md:gap-4 px-5 md:px-7 py-4 md:py-5 text-left transition-colors duration-200 rounded-2xl ${
          isOpen ? 'bg-brand-orange/5' : 'hover:bg-gray-50/80'
        }`}
      >
        <span className={`font-medium text-sm sm:text-base md:text-[15px] leading-snug transition-colors duration-200 ${
          isOpen ? 'text-brand-orange' : 'text-gray-800'
        }`}>
          {item.question}
        </span>
        <span className={`shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-brand-orange text-white rotate-0' : 'bg-gray-100 text-gray-500 rotate-0'
        }`}>
          <span className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-0'}`}>
            {isOpen ? (
              <Minus className="w-4 h-4" strokeWidth={2.5} />
            ) : (
              <Plus className="w-4 h-4" strokeWidth={2} />
            )}
          </span>
        </span>
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0, display: 'none' }}
      >
        <div className="px-5 md:px-7 pb-5 md:pb-6">
          <div className="w-10 h-[2px] bg-brand-orange/30 rounded-full mb-3"></div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showCount, setShowCount] = useState(5);
  const container = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const el = container.current;
    if (!el || animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  useGSAP(() => {
    if (!container.current || !animated) return;

    gsap.fromTo('.faq-text',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
      }
    );

    gsap.fromTo('.faq-item',
      { x: 30, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
      }
    );
  }, { scope: container, dependencies: [animated] });

  const handleToggle = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <section ref={container} className="bg-white py-12 md:py-20 px-5 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">

        {/* Left Side — Image Card */}
        <div className="faq-text lg:w-[35%] w-full lg:sticky lg:top-28">
          <div className="relative rounded-2xl overflow-hidden bg-gray-50 p-4 md:p-6 lg:p-8">
            <img
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
              src="/images/about/new_office_image.avif"
              alt="Interior Design Studio"
              className="w-full h-[200px] sm:h-[240px] md:h-[340px] object-cover rounded-xl mb-4 md:mb-6"
            />
            <h3 className="text-brand-green font-serif text-xl md:text-3xl mb-2 md:mb-3">Have More Questions?</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 md:mb-6">
              We'd love to hear from you. Reach out to our team for personalized guidance on your next project.
            </p>
            <button
              onClick={() => setShowContact(true)}
              className="flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-orange/90 transition-colors duration-200 mx-auto"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side — Accordion */}
        <div className="lg:w-[65%] w-full">
          <div className="mb-8 md:mb-12 faq-text">
            <p className="text-brand-orange font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 md:mb-3">FAQ</p>
            <h2 className="text-2xl md:text-4xl font-serif text-brand-green leading-snug">
              Your Questions, Answered With Clarity
            </h2>
            <div className="w-12 md:w-16 h-1 bg-brand-orange rounded-full mt-3 md:mt-4"></div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            {faqItems.slice(0, showCount).map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                id={index}
              />
            ))}
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <button
              onClick={() => {
                if (showCount < faqItems.length) {
                  setShowCount(faqItems.length);
                } else {
                  setShowCount(5);
                  setOpenIndex(null);
                }
              }}
              className="inline-flex items-center gap-2 bg-white border-2 border-brand-orange text-brand-orange px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {showCount < faqItems.length ? 'Show More FAQs' : 'Show Less'}
              <svg className={`w-4 h-4 transition-transform duration-300 ${showCount >= faqItems.length ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <Modal isOpen={showContact} onClose={() => setShowContact(false)}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif font-bold text-brand-green mb-2">Get in Touch</h3>
          <p className="text-gray-500 text-sm">We'd love to hear from you. Reach out to us!</p>
        </div>
        <div className="space-y-4">
          <a
            href={siteConfig.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-brand-orange group-hover:scale-110 transition-transform" />
            <span className="text-sm text-gray-600 leading-relaxed">{siteConfig.contact.address}</span>
          </a>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Phone className="w-5 h-5 shrink-0 text-brand-orange" />
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {siteConfig.contact.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/-/g, '')}`} className="text-sm text-gray-600 hover:text-brand-orange transition-colors">
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <Mail className="w-5 h-5 shrink-0 text-brand-orange group-hover:scale-110 transition-transform" />
            <span className="text-sm text-gray-600">{siteConfig.contact.email}</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <MessageCircle className="w-5 h-5 shrink-0 text-brand-orange group-hover:scale-110 transition-transform" />
            <span className="text-sm text-gray-600">{siteConfig.contact.whatsappDisplay}</span>
          </a>
        </div>
      </Modal>
    </section>
  );
}
