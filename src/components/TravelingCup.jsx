import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TravelingCup() {
  const cupWrapperRef = useRef(null);

  useEffect(() => {
    const el = cupWrapperRef.current;
    if (!el) return;

    // Use ScrollTrigger.matchMedia for desktop vs mobile responsive positioning
    const mm = gsap.matchMedia();

    // DESKTOP COORDINATES (Screen width >= 768px)
    mm.add('(min-width: 768px)', () => {
      // 0. Initial State: completely below the viewport while user is in Hero, 100% invisible
      gsap.set(el, {
        left: '75%',
        top: '50%',
        xPercent: -50,
        yPercent: -50,
        y: () => window.innerHeight * 0.9,
        scale: 1.15,
        rotate: -4,
        autoAlpha: 0,
      });

      // Hero Guard: Ensure cup is completely invisible anywhere in Hero
      ScrollTrigger.create({
        trigger: '#hero',
        start: 'top top',
        end: 'bottom 15%',
        onEnter: () => gsap.set(el, { autoAlpha: 0 }),
        onEnterBack: () => gsap.set(el, { autoAlpha: 0 }),
        onLeaveBack: () => gsap.set(el, { autoAlpha: 0 }),
      });

      // 1. Enter into Section 2 (Meet Your Scoop):
      // The cup rises from below WITH Section 2 at 1:1 scroll speed, settling right in Section 2!
      // It NEVER floats or appears in Hero.
      gsap.fromTo(
        el,
        {
          y: () => window.innerHeight * 0.9,
          autoAlpha: 0,
          scale: 1.10,
          left: '75%',
          top: '50%',
          rotate: -4,
        },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1.15,
          left: '75%',
          top: '50%',
          rotate: -4,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: '#story',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // 2. Start Cup Movement FROM Section 2 -> Section 03 (The Art of Pistachio)
      // Glides smoothly BEHIND Section 3's ingredient cards (IngredientSection is z-40, cup is z-25)
      gsap.to(el, {
        left: '38%',
        top: '50%',
        scale: 0.90,
        rotate: 4.5,
        ease: 'power1.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: '#ingredients',
          start: 'top bottom',
          end: 'center center',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 3. Section 03 (Ingredients) -> Section 04 (TEXTURE & TEMPERATURE)
      // Comes to the FRONT in Section 4! (Cup is z-25, CreamyExperience is z-10)
      gsap.to(el, {
        left: '50%',
        top: '50%',
        scale: 1.35,
        rotate: 0,
        ease: 'power1.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: '#experience',
          start: 'top bottom',
          end: 'center center',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 4. Section 04 (Experience) -> Section 05 (THE FINAL SCOOP)
      // Moving cup comes directly into the left stage and sets in place properly (moved down to top: 56%)!
      // When scrolling to the footer, it moves up WITH Section 5 so it never drifts down into the footer!
      const shopTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#shop',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Part A (top bottom -> center center): Cup glides into Section 5 stage and sets down properly
      shopTl.to(el, {
        left: '24%',
        top: '63%', // Moved more down to set properly on stage shadow
        scale: 1.05,
        rotate: -3,
        ease: 'power1.inOut',
        duration: 1,
      });

      // Part B (center center -> bottom top): Cup stays set in Section 5 stage,
      // moving up with Section 5 at 1:1 speed so it never enters the footer!
      shopTl.to(el, {
        y: () => -(window.innerHeight * 0.5 + (document.querySelector('#shop')?.offsetHeight || 800) * 0.5),
        ease: 'none',
        duration: 1,
      });
    });

    // MOBILE COORDINATES (Screen width < 768px)
    mm.add('(max-width: 767px)', () => {
      gsap.set(el, {
        left: '50%',
        top: '35%',
        xPercent: -50,
        yPercent: -50,
        y: () => window.innerHeight * 0.9,
        scale: 0.88,
        rotate: -3,
        autoAlpha: 0,
      });

      ScrollTrigger.create({
        trigger: '#hero',
        start: 'top top',
        end: 'bottom 15%',
        onEnter: () => gsap.set(el, { autoAlpha: 0 }),
        onEnterBack: () => gsap.set(el, { autoAlpha: 0 }),
        onLeaveBack: () => gsap.set(el, { autoAlpha: 0 }),
      });

      // 1. Mobile Reveal into Section 2 rising from below with Section 2
      gsap.fromTo(
        el,
        { y: () => window.innerHeight * 0.9, autoAlpha: 0, scale: 0.80 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 0.88,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: '#story',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // 2. Mobile: Start from Section 2 -> Section 3 (Ingredients) - BEHIND
      gsap.to(el, {
        left: '50%',
        top: '32%',
        scale: 0.70,
        rotate: 3,
        ease: 'power1.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: '#ingredients',
          start: 'top bottom',
          end: 'center center',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 3. Mobile: Ingredients -> Experience - FRONT
      gsap.to(el, {
        left: '50%',
        top: '35%',
        scale: 1.05,
        rotate: 0,
        ease: 'power1.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: '#experience',
          start: 'top bottom',
          end: 'center center',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 4. Mobile: Experience -> Shop
      // Moving cup comes directly into the stage and sets in place (moved down)!
      const mobileShopTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#shop',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      mobileShopTl.to(el, {
        left: '50%',
        top: '58%', // Moved more down to align properly with mobile stage shadow
        scale: 0.85,
        rotate: -2,
        ease: 'power1.inOut',
        duration: 1,
      });

      mobileShopTl.to(el, {
        y: () => -(window.innerHeight * 0.5 + (document.querySelector('#shop')?.offsetHeight || 700) * 0.5),
        ease: 'none',
        duration: 1,
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ zIndex: 25 }}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      <div
        ref={cupWrapperRef}
        style={{ opacity: 0, visibility: 'hidden' }}
        className="absolute will-change-transform select-none"
      >
        {/* Increased cup size for rich presence, clean without 120ml badge */}
        <div className="relative w-[290px] sm:w-[350px] md:w-[420px] lg:w-[460px] h-auto animate-gentle-float">
          <img
            src="/assets/mint-melt-cup.png"
            alt="MINT MELT Gelato Cup"
            className="w-full h-auto object-contain filter drop-shadow-[0_28px_44px_rgba(24,59,44,0.28)]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
