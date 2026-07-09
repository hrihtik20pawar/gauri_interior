import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, PenTool, Clock, ArrowRight, Quote, Award, Wrench, Factory, Users, Gem, Handshake, BadgeCheck, Target, X } from 'lucide-react';

const whyChooseItems = [
  { icon: Award, title: "30+ Years Legacy", desc: "Decades of expertise in furniture manufacturing and turnkey interior execution.", fullDesc: "With a legacy spanning over three decades since 1993, Gauri Group has built an unmatched reputation in the interior industry. Our extensive experience across residential, commercial, corporate, hospitality, healthcare, educational, and retail sectors gives us the insight to handle projects of any scale and complexity." },
  { icon: Wrench, title: "Turnkey Solutions", desc: "From planning to handover, we manage every stage of your project.", fullDesc: "We offer complete end-to-end interior solutions — from initial consultation, concept design, and 3D visualization to manufacturing, installation, and final handover. Our turnkey approach means you have a single point of contact throughout the project, ensuring seamless coordination and accountability." },
  { icon: Factory, title: "In-House Manufacturing", desc: "Modern facilities ensure quality, faster delivery, and cost control.", fullDesc: "Our state-of-the-art in-house manufacturing facilities are equipped with modern machinery and technology. This allows us to maintain strict quality control, reduce dependency on third-party vendors, ensure faster turnaround times, and offer competitive pricing without compromising on quality." },
  { icon: Target, title: "Project Management", desc: "Seamless coordination, quality assurance, and on-time completion.", fullDesc: "Dedicated project managers oversee every aspect of your project — coordinating between design, manufacturing, civil work, electrical, MEP, and installation teams. Our structured project management approach ensures quality benchmarks are met and timelines are strictly followed." },
  { icon: Users, title: "Skilled Workforce", desc: "Experienced craftsmen delivering superior workmanship.", fullDesc: "Our team comprises experienced designers, architects, engineers, and skilled craftsmen who bring passion and precision to every project. Continuous training and upskilling ensure our workforce stays updated with the latest techniques, materials, and industry trends." },
  { icon: Gem, title: "Customized Solutions", desc: "Designed around your needs, brand, and budget.", fullDesc: "We understand that every client is unique. That's why we offer fully customized design solutions tailored to your specific business needs, brand identity, functional requirements, and budget constraints. No cookie-cutter solutions — every project is a bespoke creation." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict processes and premium materials for lasting interiors.", fullDesc: "Quality is at the core of everything we do. We follow rigorous quality control processes at every stage — from material procurement and manufacturing to installation and handover. We use only premium-grade materials sourced from trusted national and international brands." },
  { icon: Clock, title: "Timely Delivery", desc: "Consistent delivery within committed timelines.", fullDesc: "We respect your time and understand the importance of deadlines. Our efficient planning, streamlined processes, and dedicated project management ensure that every project is delivered within the committed timeline. Our track record speaks for itself — on-time delivery is a promise we keep." },
  { icon: BadgeCheck, title: "Trusted by Organizations", desc: "Projects across corporate, healthcare, education, and residential.", fullDesc: "Over the years, we have successfully completed projects for leading organizations across diverse sectors — including corporate offices, hospitals, schools, hotels, retail outlets, and premium residences. Our growing portfolio of satisfied clients is a testament to our reliability and excellence." },
  { icon: Handshake, title: "Customer-Centric", desc: "Long-term relationships through transparency and integrity.", fullDesc: "We believe in building lasting relationships with our clients, not just completing projects. Our customer-centric approach is built on transparency, honest communication, and exceptional after-sales support. We stay connected even after project handover to ensure your complete satisfaction." }
];

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [selectedReason, setSelectedReason] = useState<typeof whyChooseItems[number] | null>(null);

  useEffect(() => {
    if (selectedReason) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedReason]);

  useGSAP(() => {
    gsap.fromTo('.about-hero-text',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      },
    );

    // Blueprint lines animation for the image
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageContainer,
          start: 'top 80%',
        }
      });

      // Animate horizontal lines
      tl.fromTo('.bp-line-h',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, stagger: 0.1, ease: 'power2.inOut', transformOrigin: 'left center' }
      );

      // Animate vertical lines
      tl.fromTo('.bp-line-v',
        { scaleY: 0 },
        { scaleY: 1, duration: 0.6, stagger: 0.1, ease: 'power2.inOut', transformOrigin: 'center top' },
        '-=0.3'
      );

      // Animate corner dots
      tl.fromTo('.bp-corner',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, stagger: 0.05, ease: 'back.out(2)' },
        '-=0.2'
      );

      // Animate the image itself
      tl.fromTo('.about-office-image',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );
    }
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-white" id="about">
      {/* Top Part: Title and Image */}
      <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
        <div className="flex-1 lg:max-w-2xl">
          <p className="about-hero-text text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">About Us</p>
          <h2 className="about-hero-text text-5xl md:text-6xl lg:text-7xl font-serif text-brand-green leading-[1.15] mb-8">
            <span className="text-teal-800">Gauri Group</span>
          </h2>
          <p className="about-hero-text text-gray-700 text-xl leading-relaxed mb-6 font-medium">
            Established in <strong className="text-brand-green">2012</strong>, <strong className="text-brand-orange">GAURI INTERIOR PVT. LTD.</strong> is the flagship company of the <strong className="text-brand-orange">GAURI GROUP</strong>, specializing in comprehensive turnkey interior contracting solutions. Built upon a legacy that began in <strong className="text-brand-green">1993</strong>, the company has grown into a trusted name in the interior industry by consistently delivering projects with exceptional quality, innovation, and precision.
          </p>
          <p className="about-hero-text text-gray-700 text-xl leading-relaxed mb-6 font-medium">
            Our journey began in <strong className="text-brand-green">1993</strong>, when <strong className="text-brand-orange">Mr. Lalbachan Vishwakarma</strong> laid the foundation of the business by undertaking customized furniture projects with an unwavering commitment to quality and craftsmanship. Over the years, this passion evolved into executing complete turnkey interior projects across residential, commercial, corporate, hospitality, healthcare, educational, and retail sectors.
          </p>
          <p className="about-hero-text text-gray-700 text-xl leading-relaxed font-medium">
            Under the leadership of <strong className="text-brand-orange">Mr. Shilkumar L. Vishwakarma (Managing Director &amp; CEO)</strong>, GAURI Group expanded into a diversified business ecosystem, bringing together multiple specialized ventures under one trusted brand.
          </p>
        </div>
        <div ref={imageContainerRef} className="flex-1 w-full about-text relative">
          {/* Blueprint lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top line */}
            <div className="bp-line-h absolute top-0 left-8 right-8 h-[1px] bg-brand-teal/40 origin-left"></div>
            {/* Bottom line */}
            <div className="bp-line-h absolute bottom-0 left-8 right-8 h-[1px] bg-brand-teal/40 origin-left"></div>
            {/* Left line */}
            <div className="bp-line-v absolute left-0 top-8 bottom-8 w-[1px] bg-brand-teal/40 origin-top"></div>
            {/* Right line */}
            <div className="bp-line-v absolute right-0 top-8 bottom-8 w-[1px] bg-brand-teal/40 origin-top"></div>
            {/* Corner dots */}
            <div className="bp-corner absolute top-0 left-0 w-3 h-3 bg-brand-orange rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bp-corner absolute top-0 right-0 w-3 h-3 bg-brand-orange rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="bp-corner absolute bottom-0 left-0 w-3 h-3 bg-brand-orange rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="bp-corner absolute bottom-0 right-0 w-3 h-3 bg-brand-orange rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          <img
            loading="lazy"
            src="/images/about/gauri-office.jpeg"
            alt="Gauri Group Office"
            className="about-office-image w-full h-[450px] md:h-[550px] object-contain rounded-xl shadow-2xl relative z-10"
          />
        </div>
      </div>

      {/* Business Divisions */}
      <div className="about-text bg-gray-50/50 p-8 md:p-12 rounded-2xl border border-gray-100 mb-12">
        <p className="text-gray-700 text-xl leading-relaxed font-medium mb-8">
          Today, GAURI Group proudly operates through:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <span className="text-brand-orange font-bold text-2xl font-serif shrink-0">1.</span>
            <div>
              <Link to="/business/interior"><h4 className="font-bold text-brand-green text-xl mb-2 hover:text-brand-orange transition-colors cursor-pointer">GAURI Interior Pvt. Ltd.</h4></Link>
              <p className="text-gray-600 text-base leading-relaxed">Complete Turnkey Interior Fit-Out Solutions for Corporate Offices, Commercial Spaces, Healthcare, Hospitality, Retail, Educational Institutions and Premium Residences.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-brand-orange font-bold text-2xl font-serif shrink-0">2.</span>
            <div>
              <Link to="/business/nikhil"><h4 className="font-bold text-brand-green text-xl mb-2 hover:text-brand-orange transition-colors cursor-pointer">NIKHIL ENTERPRISES</h4></Link>
              <p className="text-gray-600 text-base leading-relaxed">A trusted supplier of premium plywood, laminates, decorative surfaces, hardware fittings and modular furniture accessories for architects, designers, contractors and manufacturers.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-brand-orange font-bold text-2xl font-serif shrink-0">3.</span>
            <div>
              <Link to="/business/kitchen"><h4 className="font-bold text-brand-green text-lg mb-2 hover:text-brand-orange transition-colors cursor-pointer">GAURI's Kitchen</h4></Link>
              <p className="text-gray-600 text-sm leading-relaxed">Premium Modular Kitchens, Wardrobes and Customized Modular Furniture designed with innovation, functionality and aesthetics.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-brand-orange font-bold text-2xl font-serif shrink-0">4.</span>
            <div>
              <Link to="/business/studio"><h4 className="font-bold text-brand-green text-lg mb-2 hover:text-brand-orange transition-colors cursor-pointer">GAURI's Designing Studio</h4></Link>
              <p className="text-gray-600 text-sm leading-relaxed">Our upcoming design consultancy division dedicated to architectural planning, interior designing, space planning, 3D visualization, project consultancy and design management.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Managing Director's Message */}
      <div className="about-text relative rounded-2xl overflow-hidden mb-12 min-h-[450px] lg:min-h-[520px] border border-gray-100 bg-gradient-to-br from-gray-50 to-white">
        {/* Background Image - MD photo with fade */}
        <div className="absolute right-0 top-0 h-full w-[250px] lg:w-[350px]">
          <img
            loading="lazy"
            src="/images/team/team_1.jpeg"
            alt="Managing Director - GAURI GROUP"
            className="h-full w-full object-cover object-top"
          />
          {/* Fade only the left edge into content */}
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>

        {/* Content - positioned on left */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Quote className="w-8 h-8 text-brand-orange rotate-180 shrink-0" />
            <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase">Managing Director's Message</p>
          </div>

          <div className="space-y-3 text-gray-800 text-base leading-relaxed italic">
            <p>Dear Valued Clients, Partners, and Associates,</p>
            <p>It gives me immense pride to welcome you to <strong className="text-brand-orange not-italic">GAURI GROUPS.</strong></p>
            <p>Our journey began with a simple vision—to create quality furniture through honest workmanship and unwavering dedication. Over the years, that vision has grown into a comprehensive turnkey interior solutions company, serving clients across diverse industries while maintaining the same values that laid our foundation.</p>
            <p>At Gauri, we believe that every space tells a story. Whether it is a corporate office, a healthcare facility, an educational institution, a hospitality project, or a premium residence, our objective is to create environments that combine functionality, innovation, and aesthetics.</p>
            <p>Our greatest strength lies in our people—their expertise, commitment, and passion for excellence. Together, we strive to deliver projects that exceed expectations in quality, safety, and timely execution.</p>
            <p>As we expand through our group companies and embrace new opportunities, our commitment remains unchanged: to build long-term relationships based on trust, integrity, and exceptional service.</p>
            <p>I sincerely thank our clients, employees, partners, and well-wishers for being an integral part of our journey. We look forward to creating many more inspiring spaces together.</p>
          </div>

          {/* Signature */}
          <div className="mt-6 pt-5 border-t border-gray-300">
            <p className="text-gray-500 text-sm mb-1">Warm Regards,</p>
            <p className="text-gray-600 text-sm">Managing Director & CEO</p>
            <p className="text-brand-green font-semibold text-sm">GAURI GROUP OF COMPANIES</p>
          </div>
        </div>
      </div>

      {/* Why Choose Gauri? */}
      <div className="about-text mb-12">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Why Choose Gauri?</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Auto-scrolling marquee */}
        <div className="relative group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {[...whyChooseItems, ...whyChooseItems].map((item, idx) => (
              <div key={idx} onClick={() => setSelectedReason(item)} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-6 py-4 shadow-sm shrink-0 min-w-[280px] cursor-pointer hover:shadow-md hover:border-brand-orange/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Part: Highlights */}
      <div className="p-8 rounded-2xl border border-gray-100">
        {/* 4 Points Horizontal with Arrows */}
        <div className="about-text flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border-t-2 border-brand-teal flex-1">
            <CheckCircle2 className="w-8 h-8 text-teal-700 shrink-0 stroke-[1.5]" />
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">Client-Centric Approach</h5>
              <p className="text-xs text-gray-500">Your vision is our priority.</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block" />
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border-t-2 border-brand-teal flex-1">
            <PenTool className="w-8 h-8 text-teal-700 shrink-0 stroke-[1.5]" />
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">Innovative Design</h5>
              <p className="text-xs text-gray-500">Creative solutions for every space.</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block" />
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border-t-2 border-brand-teal flex-1">
            <ShieldCheck className="w-8 h-8 text-teal-700 shrink-0 stroke-[1.5]" />
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">Quality Craftsmanship</h5>
              <p className="text-xs text-gray-500">Precision in every detail.</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block" />
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border-t-2 border-brand-teal flex-1">
            <Clock className="w-8 h-8 text-teal-700 shrink-0 stroke-[1.5]" />
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">Timely Delivery</h5>
              <p className="text-xs text-gray-500">Commitment you can rely on.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Modal */}
      {selectedReason && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedReason(null)}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedReason(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mb-5">
              <selectedReason.icon className="w-7 h-7 text-brand-orange" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{selectedReason.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{selectedReason.fullDesc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
