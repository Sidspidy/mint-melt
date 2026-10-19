import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, Sparkles, ShieldCheck, Truck, Heart } from 'lucide-react';
import { sound } from '../utils/sound';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTASection({ onAddToCart, onOpenBag }) {
  const sectionRef = useRef(null);
  const [selectedPack, setSelectedPack] = useState(1); // default to 4-pack (flight)

  const packs = [
    {
      id: 0,
      name: 'The Duo Ritual',
      cups: '2 × 120ml Cups',
      price: '$18',
      desc: 'Perfect for an intimate evening indulgence.',
      badge: 'Starter',
    },
    {
      id: 1,
      name: 'The Connoisseur Flight',
      cups: '4 × 120ml Cups + Waffle Crisps',
      price: '$34',
      desc: 'Our signature collection with buttery waffle crisps.',
      badge: 'Most Popular',
      recommended: true,
    },
    {
      id: 2,
      name: 'The Gelateria Vault',
      cups: '8 × 120ml Cups + Sea Salt Jar',
      price: '$64',
      desc: 'Stock your freezer for dinner parties and gatherings.',
      badge: 'Best Value',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation on scroll
      gsap.fromTo(
        '.final-reveal',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelectPack = (index) => {
    sound.playScoop();
    setSelectedPack(index);
  };

  const handleOrder = () => {
    sound.playChime();
    const pack = packs[selectedPack];
    onAddToCart?.({
      id: `pack-${pack.id}`,
      name: `MINT MELT ${pack.name}`,
      details: pack.cups,
      price: pack.price,
      quantity: 1,
    });
  };

  return (
    <section
      id="shop"
      ref={sectionRef}
      className="relative w-full bg-[#FFF7E8] text-[#183B2C] pt-24 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{ backgroundColor: '#FFF7E8' }}
    >
      {/* Top curved separator transitioning from pistachio green */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[99%] pointer-events-none">
        <svg
          className="relative block w-full h-12 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C350,110 850,110 1200,0 L1200,120 L0,120 Z"
            fill="#FFF7E8"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Headline Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="final-reveal inline-flex items-center gap-2 bg-[#183B2C]/5 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#183B2C]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#183B2C]">
              THE FINAL SCOOP
            </span>
          </div>

          <h2 className="final-reveal font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#183B2C] leading-[0.92] tracking-tight mb-6">
            A LITTLE SCOOP
            <span className="block italic font-normal text-[#183B2C]/85">
              OF BLISS.
            </span>
          </h2>

          <p className="final-reveal text-lg sm:text-xl text-[#183B2C]/80 font-normal max-w-xl mx-auto leading-relaxed">
            Your new favorite ritual is waiting. Packed inside insulated dry-ice chill boxes and delivered directly to your doorstep at peak perfection.
          </p>
        </div>

        {/* Product & Pack Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Product Showcase Stage (where TravelingCup lands) (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[340px] lg:min-h-[460px]">
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] aspect-square flex items-center justify-center">
              
              {/* Ambient radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,198,134,0.35)_0%,rgba(255,247,232,0)_70%)] rounded-full blur-2xl pointer-events-none" />


              {/* Real roasted pistachio cluster placed in FRONT of the cup */}
              <div
                style={{ zIndex: 35 }}
                className="absolute -bottom-2 -left-2 sm:left-2 w-[220px] sm:w-[280px] pointer-events-none select-none transform -rotate-3"
              >
                <img
                  src="/assets/pistachio-cluster.png"
                  alt="Bronte Pistachios"
                  className="w-full h-auto object-contain filter drop-shadow-[0_18px_30px_rgba(24,59,44,0.22)]"
                />
              </div>

              {/* Shadow underneath incoming traveling cup */}
              <div className="absolute bottom-6 w-3/4 h-8 bg-[#183B2C]/15 rounded-[100%] mx-auto blur-md pointer-events-none" />
            </div>

            {/* Freshness guarantee pill */}
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#183B2C]/70 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#183B2C]/10 shadow-sm z-20">
              <ShieldCheck className="w-4 h-4 text-[#183B2C]" />
              <span>Arrives Frozen Guaranteed • Dry Ice Packing</span>
            </div>
          </div>

          {/* Right: Flight Selection Options & CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="text-left mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#183B2C]/60 block mb-1">
                Choose Your Experience
              </span>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#183B2C]">
                Artisanal Tasting Editions
              </h3>
            </div>

            {packs.map((pack, index) => {
              const isSelected = selectedPack === index;
              return (
                <div
                  key={pack.id}
                  onClick={() => handleSelectPack(index)}
                  className={`group relative rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-[#183B2C] shadow-xl -translate-y-1 ring-1 ring-[#183B2C]'
                      : 'bg-white/50 hover:bg-white/90 border-[#183B2C]/15 shadow-sm'
                  }`}
                >
                  {pack.recommended && (
                    <div className="absolute -top-3 right-6 bg-[#183B2C] text-[#FFF7E8] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
                      Recommended Ritual
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Custom Radio Button */}
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-[#183B2C] bg-[#183B2C]'
                            : 'border-[#183B2C]/30 bg-transparent'
                        }`}
                      >
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#FFF7E8]" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#183B2C]">
                            {pack.name}
                          </h4>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#A8C686]/30 text-[#183B2C]">
                            {pack.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#183B2C]/70 mt-0.5">
                          {pack.cups} — {pack.desc}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#183B2C] block">
                        {pack.price}
                      </span>
                      <span className="text-[10px] uppercase text-[#183B2C]/60 tracking-wider">
                        Free shipping
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Primary Order CTA Button */}
            <div className="mt-4 pt-2 flex flex-col sm:flex-row items-center gap-4 relative z-20">
              <button
                onClick={handleOrder}
                className="w-full sm:flex-1 group relative inline-flex items-center justify-center gap-3 bg-[#183B2C] text-[#FFF7E8] hover:bg-[#254F3C] px-8 py-5 rounded-full text-sm uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-xl shadow-[#183B2C]/20 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>DISCOVER MINT MELT</span>
                <span className="text-xs text-[#A8C686] font-normal tracking-normal ml-1">
                  ({packs[selectedPack].price})
                </span>
                <span className="w-6 h-6 rounded-full bg-[#FFF7E8]/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={() => {
                  sound.playScoop();
                  onOpenBag?.();
                }}
                className="w-full sm:w-auto px-6 py-5 rounded-full border border-[#183B2C]/20 hover:border-[#183B2C] text-xs uppercase tracking-widest font-semibold text-[#183B2C] hover:bg-white/60 transition-colors"
              >
                View Bag
              </button>
            </div>

            {/* Quick Benefits list */}
            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#183B2C]/10 text-center text-[11px] text-[#183B2C]/75 font-medium">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-[#183B2C]" />
                <span>Next-Day Cold Express</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#183B2C]" />
                <span>Melt-Free Guarantee</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Heart className="w-4 h-4 text-[#183B2C]" />
                <span>100% Real Ingredients</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
