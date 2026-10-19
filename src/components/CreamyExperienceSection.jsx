import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplet, Wind, Thermometer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CreamyExperienceSection() {
  const sectionRef = useRef(null);
  const ribbonLeftRef = useRef(null);
  const ribbonRightRef = useRef(null);
  const headlineMaskRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline scrubbed with scroll through this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          scrub: 1.2,
        },
      });

      // 1. Large cream shapes glide in from sides
      tl.fromTo(
        ribbonLeftRef.current,
        { xPercent: -50, rotate: -8, opacity: 0.4 },
        { xPercent: 0, rotate: 0, opacity: 0.9, duration: 2, ease: 'power2.out' }
      )
      .fromTo(
        ribbonRightRef.current,
        { xPercent: 50, rotate: 10, opacity: 0.4 },
        { xPercent: 0, rotate: 0, opacity: 0.85, duration: 2, ease: 'power2.out' },
        '-=1.8'
      );

      // 2. Mask reveal for headline
      tl.fromTo(
        '.close-up-headline-line',
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.3, duration: 1.4, ease: 'power3.out' },
        '-=1.5'
      );

      // 3. Supporting micro-stats reveal
      tl.fromTo(
        '.metric-badge',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.2, duration: 1, ease: 'back.out(1.4)' },
        '-=1.0'
      );

      // 4. Ribbons smoothly exit towards the end
      tl.to(
        [ribbonLeftRef.current, ribbonRightRef.current],
        { opacity: 0.6, scale: 1.05, duration: 1.5 },
        '+=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-[110svh] w-full bg-[#A8C686] text-[#183B2C] py-28 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden z-10"
      style={{ backgroundColor: '#A8C686', zIndex: 10 }}
    >
      {/* Dynamic Layered Silky Cream Wave: Left Ribbon (behind traveling cup) */}
      <div
        ref={ribbonLeftRef}
        className="absolute -left-20 top-1/4 w-[500px] md:w-[750px] lg:w-[950px] pointer-events-none z-0 transform -translate-y-1/2"
      >
        <svg
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto filter drop-shadow-[0_20px_40px_rgba(24,59,44,0.12)] opacity-90"
        >
          <path
            d="M-50,250 C150,120 300,380 550,220 C750,100 850,200 900,180 C950,160 850,550 450,520 C150,500 -50,420 -50,250 Z"
            fill="#FFF7E8"
          />
          <path
            d="M0,280 C200,160 380,360 620,240 C780,160 820,220 860,200 C780,480 380,460 0,350 Z"
            fill="#FAF1DD"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* Dynamic Layered Cream Ribbon: Right Ambient Swirl */}
      <div
        ref={ribbonRightRef}
        className="absolute -right-24 bottom-10 w-[420px] md:w-[650px] lg:w-[850px] pointer-events-none z-0"
      >
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto filter drop-shadow-[0_15px_30px_rgba(24,59,44,0.08)] opacity-85"
        >
          <path
            d="M100,50 C320,180 500,-20 720,120 C850,220 900,450 780,550 C620,620 400,480 250,520 C80,550 -20,400 100,50 Z"
            fill="#FFF7E8"
          />
        </svg>
      </div>

      {/* Decorative Pistachio Cluster: Left Wave Accent */}
      <div className="absolute top-1/4 -left-10 sm:left-4 w-[160px] sm:w-[220px] pointer-events-none select-none z-10 opacity-90 transform -rotate-12 animate-gentle-float">
        <img
          src="/assets/pistachio-cluster.png"
          alt="Pistachio Accent"
          className="w-full h-auto object-contain filter drop-shadow-[0_16px_28px_rgba(24,59,44,0.18)]"
        />
      </div>

      {/* Decorative Pistachio Cluster: Right Wave Accent */}
      <div className="absolute bottom-16 right-2 sm:right-10 w-[180px] sm:w-[240px] pointer-events-none select-none z-10 opacity-90 transform rotate-12 animate-gentle-float" style={{ animationDelay: '1.5s' }}>
        <img
          src="/assets/pistachio-cluster-2.png"
          alt="Pistachio Accent"
          className="w-full h-auto object-contain filter drop-shadow-[0_16px_28px_rgba(24,59,44,0.18)]"
        />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#183B2C] text-[#FFF7E8] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.25em] uppercase mb-6 shadow-sm">
          <Droplet className="w-3.5 h-3.5 text-[#A8C686]" />
          <span>TEXTURE & TEMPERATURE</span>
        </div>

        {/* Mask-Revealed Headline */}
        <div ref={headlineMaskRef} className="overflow-hidden mb-8 md:mb-12">
          <h2 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#183B2C] leading-[0.95] tracking-tight">
            <div className="overflow-hidden py-1">
              <span className="close-up-headline-line block">Made to melt.</span>
            </div>
            <div className="overflow-hidden py-1">
              <span className="close-up-headline-line block italic font-normal text-[#183B2C]/90">
                Impossible to forget.
              </span>
            </div>
          </h2>
        </div>

        {/* Foreground Cup Stage (TravelingCup scales up large right here) */}
        <div className="relative w-[300px] sm:w-[440px] md:w-[540px] lg:w-[600px] aspect-[4/3] my-4 flex items-center justify-center">
          
          {/* Soft Shadow Base for the incoming TravelingCup */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-[#183B2C]/25 rounded-[100%] blur-xl pointer-events-none" />

          {/* Floating Metric Badge 1: Ideal Temp */}
          <div className="metric-badge absolute -top-4 -left-2 sm:-left-8 bg-[#FFF7E8]/95 backdrop-blur-md text-[#183B2C] p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/60 z-20 text-left max-w-[180px] hidden sm:block">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#183B2C]/70 mb-1">
              <Thermometer className="w-3.5 h-3.5 text-[#183B2C]" />
              <span>Optimal Temp</span>
            </div>
            <div className="font-serif-luxury text-2xl font-bold text-[#183B2C] leading-none">
              -12°C
            </div>
            <div className="text-[10px] text-[#183B2C]/75 mt-1 font-medium leading-tight">
              Releases fragrant nut oils without tongue freeze.
            </div>
          </div>

          {/* Floating Metric Badge 2: Melt Index */}
          <div className="metric-badge absolute bottom-10 -right-2 sm:-right-8 bg-[#FFF7E8]/95 backdrop-blur-md text-[#183B2C] p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/60 z-20 text-left max-w-[180px] hidden sm:block">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#183B2C]/70 mb-1">
              <Wind className="w-3.5 h-3.5 text-[#183B2C]" />
              <span>Melt Curve</span>
            </div>
            <div className="font-serif-luxury text-2xl font-bold text-[#183B2C] leading-none">
              3.8 sec
            </div>
            <div className="text-[10px] text-[#183B2C]/75 mt-1 font-medium leading-tight">
              Instant velvet coating across the palate.
            </div>
          </div>
        </div>

        {/* Supporting Editorial Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#183B2C]/85 max-w-xl mx-auto leading-relaxed mt-6 font-normal">
          Traditional American ice cream pumps up to 50% air into each pint. We churn at an unhurried pace, yielding a dense, silky ribbon that melts at body temperature.
        </p>

        {/* Sensory quote */}
        <div className="mt-8 italic font-serif-luxury text-lg sm:text-xl text-[#183B2C]/75">
          "The pistachio gelato that ruined all other gelatos for me." — Gastronomy Review
        </div>

      </div>
    </section>
  );
}
