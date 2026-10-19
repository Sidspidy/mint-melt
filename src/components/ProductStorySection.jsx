import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, CheckCircle2, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductStorySection() {
  const containerRef = useRef(null);
  const textContentRef = useRef(null);
  const pistaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Editorial text on the left reveals on scroll
      gsap.fromTo(
        '.story-text-reveal',
        { opacity: 0, x: -40, filter: 'blur(4px)' },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          stagger: 0.18,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        }
      );

      // Sensory feature cards reveal
      gsap.fromTo(
        '.sensory-pill',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.14,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.sensory-pills-container',
            start: 'top 85%',
          },
        }
      );

      // Pista image entrance: gentle float up into front position
      gsap.fromTo(
        pistaRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 65%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative min-h-[100svh] w-full bg-[#FFF7E8] text-[#183B2C] py-28 sm:py-36 px-4 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#FFF7E8' }}
    >
      {/* Curved organic transition separator from pistachio to cream */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[99%] pointer-events-none">
        <svg
          className="relative block w-full h-12 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
            fill="#FFF7E8"
          />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative">
        
        {/* Left Editorial Narrative Column (spans 7 cols on desktop) */}
        <div
          ref={textContentRef}
          className="md:col-span-7 flex flex-col justify-center items-start text-left z-20 order-2 md:order-1 pt-6 md:pt-0"
        >
          {/* Eyebrow */}
          <div className="story-text-reveal flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#183B2C]/40" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-[#183B2C]/80">
              MEET YOUR NEW OBSESSION
            </span>
          </div>

          {/* Headline */}
          <h2 className="story-text-reveal font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#183B2C] leading-[1.0] tracking-tight mb-6">
            Not just ice cream.
            <span className="block italic font-normal text-[#183B2C]/85 mt-1">
              A little moment of magic.
            </span>
          </h2>

          {/* Body */}
          <p className="story-text-reveal text-base sm:text-lg md:text-xl text-[#183B2C]/85 max-w-xl leading-relaxed mb-8 font-normal">
            Every scoop brings together rich pistachio flavor, velvety texture, and the simple joy of slowing down.
            Stone-ground Bronte pistachios churned into high-butterfat Jersey cream create an unforgettable silken melt that lingers.
          </p>

          {/* Sensory Highlights Pills */}
          <div className="flex flex-wrap gap-3 sm:gap-4 sensory-pills-container">
            <div className="sensory-pill flex items-center gap-2.5 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#183B2C]/10 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#183B2C]" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Real Roasted Pistachio Paste
              </span>
            </div>

            <div className="sensory-pill flex items-center gap-2.5 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#183B2C]/10 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#183B2C]" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Micro-Air Italian Churn
              </span>
            </div>

            <div className="sensory-pill flex items-center gap-2.5 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#183B2C]/10 shadow-sm">
              <Heart className="w-4 h-4 text-[#183B2C]" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Zero Artificial Dyes
              </span>
            </div>
          </div>

          {/* Mini Tasting Tip */}
          <div className="story-text-reveal mt-8 pt-4 border-t border-[#183B2C]/10 text-xs text-[#183B2C]/70 italic">
            *Pro tip: Allow the cup to sit for 3 minutes at room temperature for the ultimate velvety silkiness.
          </div>
        </div>

        {/* Right Stage: Pista PNG placed in FRONT of the cup at the bottom-left */}
        <div className="md:col-span-5 flex items-center justify-center relative order-1 md:order-2 min-h-[360px] md:min-h-[500px]">
          
          {/* Pista Cluster positioned in FRONT of the cup with z-index 40 */}
          <div
            ref={pistaRef}
            style={{ zIndex: 40 }}
            className="absolute bottom-2 left-0 sm:left-4 md:left-0 w-[180px] sm:w-[220px] md:w-[270px] select-none pointer-events-none transform -rotate-3"
          >
            <img
              src="/assets/pistachio-cluster.png"
              alt="Artisanal Roasted Bronte Pistachios and Leaves"
              className="w-full h-auto object-contain filter drop-shadow-[0_18px_30px_rgba(24,59,44,0.22)]"
            />
          </div>

          {/* Quality Origin Tag */}
          <div
            style={{ zIndex: 35 }}
            className="absolute top-4 right-2 sm:right-6 bg-white/80 backdrop-blur-md text-[#183B2C] text-[10px] uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full border border-[#183B2C]/10 shadow-sm hidden sm:block pointer-events-none"
          >
            100% Bronte D.O.P.
          </div>

        </div>

      </div>
    </section>
  );
}
