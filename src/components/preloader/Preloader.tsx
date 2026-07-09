import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../logo/Logo';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete();
      }
    });

    // 1. Blueprint background fades in
    tl.fromTo(blueprintRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.inOut" }
    )
    // 2. Blueprint grid lines draw themselves (horizontal)
    .fromTo('.bp-line-h',
      { scaleX: 0 },
      { scaleX: 1, duration: 0.6, stagger: 0.05, ease: "power1.inOut", transformOrigin: "left center" }
    )
    // 3. Blueprint grid lines draw themselves (vertical)
    .fromTo('.bp-line-v',
      { scaleY: 0 },
      { scaleY: 1, duration: 0.6, stagger: 0.05, ease: "power1.inOut", transformOrigin: "center top" },
      "-=0.3"
    )
    // 4. Grid squares build one by one (like tiles)
    .fromTo('.bp-tile',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.15, stagger: 0.08, ease: "back.out(2)" }
    )
    // 5. Logo text draws in character by character
    .to('.preloader-logo .tw-char', {
      opacity: 1,
      duration: 0.04,
      stagger: 0.05,
      ease: "none"
    })
    // 6. Brief hold, then blueprint fades to white and reveals page
    .to(blueprintRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      ease: "power2.inOut"
    });

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={container} className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden">
      {/* Blueprint grid lines on white background */}
      <div ref={blueprintRef} className="absolute inset-0 opacity-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(42,148,140,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bp-grid)" />
        </svg>
        
        {/* Decorative sketch lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bp-line-h absolute w-64 h-[1px] bg-brand-teal/20" style={{ top: '35%' }}></div>
          <div className="bp-line-h absolute w-48 h-[1px] bg-brand-teal/15" style={{ top: '65%' }}></div>
          <div className="bp-line-v absolute h-48 w-[1px] bg-brand-teal/20" style={{ left: '30%' }}></div>
          <div className="bp-line-v absolute h-32 w-[1px] bg-brand-teal/15" style={{ right: '25%' }}></div>
        </div>
      </div>

      {/* Logo container */}
      <div className="preloader-logo relative z-10">
        <Logo className="h-20 w-auto" size="lg" typewriter blueprint />
      </div>
    </div>
  );
}
