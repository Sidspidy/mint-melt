import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function HeroSection({ onDiscoverClick }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for luxury editorial entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-pill',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      )
        .fromTo(
          '.hero-title-line',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.16,
          },
          '-=0.6'
        )
        .fromTo(
          '.hero-subtext',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.7'
        )
        .fromTo(
          '.hero-cta-group',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          '.hero-bronte-seal',
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.8 },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Handle video autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch(() => {
            // Autoplay restricted fallback
          });
      }
    }
  }, []);

  const handleScrollDown = () => {
    sound.playScoop();
    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      const storyEl = document.querySelector('#story');
      if (storyEl) {
        storyEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between pt-24 md:pt-28 pb-8 px-4 sm:px-6 lg:px-12"
      style={{ backgroundColor: '#A8C686' }}
    >
      {/* FULL BACKGROUND CINEMATIC VIDEO — 100% PROPERLY VISIBLE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/assets/mint-melt-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-100"
          onLoadedData={() => setVideoLoaded(true)}
        />
        {/* Subtle, soft transparent gradient only behind the left text so the video stays vivid and clearly visible */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#A8C686]/85 via-[#A8C686]/40 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-4 md:py-6">

        {/* Left Column: Editorial Headline & Brand Narrative */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">

          {/* Eyebrow Pill */}
          <div className="hero-pill inline-flex items-center gap-2 bg-[#FFF7E8]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/70 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#183B2C] animate-pulse" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-[#183B2C]">
              A LITTLE SCOOP OF HAPPINESS
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-bold text-[#183B2C] leading-[0.92] tracking-[-0.02em] mb-6 drop-shadow-sm"
          >
            <div className="overflow-hidden">
              <span className="hero-title-line block">REAL PISTACHIOS.</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-title-line block italic font-normal text-[#183B2C]/90">
                PURE BLISS.
              </span>
            </div>
          </h1>

          {/* Supporting Text */}
          <p className="hero-subtext text-base sm:text-lg md:text-xl text-[#183B2C]/90 max-w-xl font-normal leading-relaxed mb-8 drop-shadow-sm">
            A richer kind of indulgence. Crafted slowly, savored completely with volcanic Sicilian pistachios and silky Alpine cream.
          </p>

          {/* CTAs and Microcopy */}
          <div className="hero-cta-group flex flex-wrap items-center gap-4 sm:gap-6 relative z-20">
            <button
              onClick={handleScrollDown}
              className="group relative inline-flex items-center justify-center gap-3 bg-[#183B2C] text-[#FFF7E8] hover:bg-[#254F3C] px-8 py-4 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl shadow-[#183B2C]/20 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none"
            >
              <span>DISCOVER THE MELT</span>
              <span className="w-6 h-6 rounded-full bg-[#FFF7E8]/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <a
              href="#ingredients"
              onClick={(e) => {
                e.preventDefault();
                sound.playScoop();
                document.querySelector('#ingredients')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-[0.18em] font-semibold text-[#183B2C] hover:text-[#254F3C] transition-colors py-2 border-b border-[#183B2C]/40 hover:border-[#183B2C]"
            >
              View Ingredients
            </a>
          </div>

          {/* Quality highlights badges */}
          <div className="mt-10 pt-6 border-t border-[#183B2C]/20 flex items-center gap-6 text-[11px] sm:text-xs text-[#183B2C]/85 font-medium tracking-wide">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#183B2C]" />
              <span>100% Bronte D.O.P.</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#183B2C]/40" />
            <span>Slow-Churned Artisan Gelato</span>
            <span className="w-1 h-1 rounded-full bg-[#183B2C]/40" />
            <span>Clean Label</span>
          </div>

        </div>

        {/* Right Column: Open Space showing the video's swirling cream and cup */}
        <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[460px] pointer-events-none" />

      </div>

      {/* Circular Rotating Artisanal Seal — Bottom Right */}
      <div
        onClick={handleScrollDown}
        className="hero-bronte-seal absolute bottom-2 right-3 sm:bottom-3 sm:right-6 lg:bottom-4 lg:right-8 z-20 select-none cursor-pointer group"
        title="100% Bronte D.O.P. Certified — Click to Explore"
      >
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center">
          {/* Outer rotating text circle */}
          <div className="absolute inset-0 w-full h-full animate-[spin_16s_linear_infinite] group-hover:[animation-play-state:paused] transition-all">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              <path
                id="circlePath"
                d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                fill="none"
              />
              <text className="text-[9.2px] font-bold tracking-[0.25em] fill-[#183B2C] uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  ★ 100% BRONTE D.O.P. ★ SICILIAN HARVEST
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center Circular Badge — larger size for prominent luxury badge & watermark coverage */}
          <div className="w-[76px] h-[76px] sm:w-[92px] sm:h-[92px] md:w-[100px] md:h-[100px] rounded-full bg-[#FFF7E8] text-[#183B2C] border-2 border-[#183B2C]/25 shadow-2xl shadow-[#183B2C]/25 flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#183B2C] mb-0.5" />
            <span className="text-xs sm:text-sm md:text-base font-bold tracking-tight leading-none text-[#183B2C]">
              100%
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-serif-luxury italic tracking-widest text-[#183B2C]/85 leading-none mt-0.5">
              Bronte
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
