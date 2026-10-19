import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SlidersHorizontal, Leaf, Compass } from 'lucide-react';
import { sound } from '../utils/sound';

gsap.registerPlugin(ScrollTrigger);

export default function IngredientSection({ onOpenSensoryModal }) {
  const sectionRef = useRef(null);
  const imageCardRef = useRef(null);
  const [activeIngredient, setActiveIngredient] = useState(0);

  const ingredients = [
    {
      id: 'pistachio',
      title: 'Emerald Bronte Pistachios',
      origin: 'Mount Etna, Sicily (D.O.P.)',
      subtitle: 'The "Green Gold" of the Mediterranean',
      description:
        'Harvested once every two years on volcanic slopes, then stone-ground into a rich, raw emerald paste that delivers an uncompromised, aromatic nutty profile.',
      tag: '100% Pure Paste',
      stat: '34% Ratio',
      statLabel: 'Highest nut density',
    },
    {
      id: 'cream',
      title: 'Alpine Jersey Cream',
      origin: 'High-Altitude Pastures',
      subtitle: 'Rich, dense, and slow-churned',
      description:
        'Fresh whole milk and silky sweet cream with 38% natural butterfat, micro-churned at low temperature with ultra-low overrun for that signature Italian gelateria density.',
      tag: 'Slow Churned',
      stat: '18% Air Overrun',
      statLabel: 'Traditional dense texture',
    },
    {
      id: 'salt',
      title: 'Trapani Hand-Harvested Salt',
      origin: 'Coast of Western Sicily',
      subtitle: 'Crisp sun-dried sea salt crystals',
      description:
        'A microscopic pinch of delicate sea salt flakes balances the rich butterfat and draws out the natural earthy sweetness hiding inside the roasted pistachios.',
      tag: 'Mineral Finish',
      stat: 'Pure Crispness',
      statLabel: 'Aromatics enhancer',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ingredient Headline Entrance
      gsap.fromTo(
        '.ingredient-headline-anim',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Bowl Entrance Reveal
      gsap.fromTo(
        imageCardRef.current,
        { scale: 0.92, opacity: 0, y: 25 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageCardRef.current,
            start: 'top 85%',
          },
        }
      );

      // Continuous Bowl Rotation Scrubbed with Scroll
      gsap.to('.ingredient-bowl-rotate', {
        rotate: 220,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });

      // Parallax floating decorative cards
      gsap.utils.toArray('.parallax-item').forEach((item, index) => {
        const speed = (index + 1) * 25;
        gsap.to(item, {
          y: -speed,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ingredients"
      ref={sectionRef}
      className="relative w-full bg-[#DDF3E5] text-[#183B2C] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-clip z-40"
      style={{ backgroundColor: '#DDF3E5', zIndex: 40 }}
    >
      {/* Decorative background botanical rings */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C8E8D3]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#C8E8D3]/40 blur-3xl pointer-events-none" />

      {/* Floating Pistachio Parallax Accent */}
      <div className="parallax-item absolute top-16 right-4 sm:right-12 w-[180px] sm:w-[240px] pointer-events-none select-none opacity-85 hidden md:block z-0">
        <img
          src="/assets/pistachio-cluster-2.png"
          alt="Roasted Pistachios Accent"
          className="w-full h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(24,59,44,0.14)]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-40" style={{ zIndex: 40 }}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 relative z-40" style={{ zIndex: 40 }}>
          <div className="ingredient-headline-anim inline-flex items-center gap-2 bg-[#183B2C]/5 px-3.5 py-1.5 rounded-full mb-4">
            <Leaf className="w-3.5 h-3.5 text-[#183B2C]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#183B2C]">
              THE ART OF PISTACHIO
            </span>
          </div>

          <h2 className="ingredient-headline-anim font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#183B2C] leading-[1.05] tracking-tight mb-6">
            It starts with the good stuff.
          </h2>

          <p className="ingredient-headline-anim text-base sm:text-lg md:text-xl text-[#183B2C]/80 max-w-2xl mx-auto leading-relaxed">
            Beautiful pistachios. A naturally rich flavor. A creamy finish worth slowing down for.
            No food coloring, no artificial extracts, no compromises.
          </p>
        </div>

        {/* Two-Column Editorial Ingredient Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* Left: Sticky Rotating Ingredient Bowl (5 cols) */}
          <div className="lg:col-span-5 relative self-start lg:sticky lg:top-28">
            <div
              ref={imageCardRef}
              className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] aspect-square mx-auto flex items-center justify-center"
            >
              {/* Subtle ambient soft glow behind the bowl */}
              <div className="absolute inset-4 rounded-full bg-[#183B2C]/10 blur-3xl pointer-events-none" />

              {/* Rotating Transparent Bowl Container */}
              <div className="ingredient-bowl-rotate w-full h-full flex items-center justify-center will-change-transform">
                <img
                  src="/assets/Pistachio Gelato Feast in Ceramic Bowl.png"
                  alt="Pistachio Gelato Feast in Ceramic Bowl"
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(24,59,44,0.22)] select-none pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Right: Interactive Ingredient Selector & Tasting Notes (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {ingredients.map((ing, index) => {
              const isSelected = activeIngredient === index;
              return (
                <div
                  key={ing.id}
                  onClick={() => {
                    sound.playScoop();
                    setActiveIngredient(index);
                  }}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl p-6 sm:p-7 border ${
                    isSelected
                      ? 'bg-[#FFF7E8] border-[#183B2C]/30 shadow-lg -translate-y-1'
                      : 'bg-[#FFF7E8]/50 hover:bg-[#FFF7E8]/80 border-white/60 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#183B2C]/60">
                          {ing.origin}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#183B2C]/30" />
                        <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#183B2C] bg-[#A8C686]/30 px-2 py-0.5 rounded-full">
                          {ing.tag}
                        </span>
                      </div>
                      <h4 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#183B2C]">
                        {ing.title}
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#183B2C] block">
                        {ing.stat}
                      </span>
                      <span className="text-[10px] text-[#183B2C]/65 uppercase tracking-wider block">
                        {ing.statLabel}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#183B2C]/80 leading-relaxed font-normal mt-3">
                    {ing.description}
                  </p>
                </div>
              );
            })}

            {/* Flavor Balance Profile Bar */}
            <div className="mt-4 bg-[#183B2C] text-[#FFF7E8] rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 text-[#A8C686] text-xs font-bold uppercase tracking-widest mb-1">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Sensory Profile Analysis</span>
                </div>
                <h5 className="font-serif-luxury text-xl font-bold">
                  Balanced to Culinary Perfection
                </h5>
                <p className="text-xs text-[#FFF7E8]/70 mt-1 max-w-sm">
                  Deep roast notes with an immediate melt curve and clean, lingering nut aroma.
                </p>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                <button
                  onClick={() => {
                    sound.playChime();
                    onOpenSensoryModal?.();
                  }}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#A8C686] text-[#183B2C] hover:bg-[#BFDCA0] px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 focus:outline-none"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Explore Tasting Map</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
