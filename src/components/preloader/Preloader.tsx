import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../logo/Logo';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete();
      }
    });

    tl.fromTo('.preloader-logo',
      { scale: 0.85, opacity: 0, filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))' },
      { scale: 1, opacity: 1, filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.1))', duration: 1.2, ease: "power3.out" }
    )
      .to('.preloader-logo', {
        scale: 1.05,
        yoyo: true,
        repeat: 1,
        duration: 0.6,
        ease: "power1.inOut"
      }, "-=0.3")
      .to(container.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.inOut"
      });

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={container} className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="preloader-logo">
        <div style={{ transform: 'scale(2.5)', transformOrigin: 'center' }}>
          <Logo className="h-16 w-auto" />
        </div>
      </div>
    </div>
  );
}
