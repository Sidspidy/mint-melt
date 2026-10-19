import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductStorySection from './components/ProductStorySection';
import IngredientSection from './components/IngredientSection';
import CreamyExperienceSection from './components/CreamyExperienceSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import OrderDrawer from './components/OrderDrawer';
import TastingProfileModal from './components/TastingProfileModal';
import TravelingCup from './components/TravelingCup';
import Preloader from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [sensoryModalOpen, setSensoryModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'pack-1',
      name: 'MINT MELT The Connoisseur Flight',
      details: '4 × 120ml Cups + Waffle Crisps',
      price: '$34',
      quantity: 1,
    },
  ]);

  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scrolling and link with GSAP ScrollTrigger
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      });

      lenisRef.current = lenis;

      // Synchronize Lenis scroll with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      const updateTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      // Force refresh ScrollTrigger once DOM is stabilized
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        gsap.ticker.remove(updateTicker);
        lenis.destroy();
      };
    }
  }, []);

  // Cart operations
  const handleAddToCart = (newItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, newItem];
    });
    setBagOpen(true);
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const bagItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#A8C686] text-[#183B2C] overflow-x-clip selection:bg-[#183B2C] selection:text-[#FFF7E8]">
      
      {/* Subtle organic film grain texture for luxury editorial feel */}
      <div className="grain-overlay" />

      {/* Editorial Luxury Preloader */}
      <Preloader
        onComplete={() => {
          setIsAppReady(true);
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 150);
        }}
      />

      {/* The Master Persistent Product Layer: Traveling Ice Cream Cup across ALL sections */}
      <TravelingCup ready={isAppReady} />

      {/* Luxury Brand Navigation */}
      <Navbar
        onOpenBag={() => setBagOpen(true)}
        bagCount={bagItemCount}
      />

      {/* SECTION 01 — THE HERO REVEAL (Video in background) */}
      <HeroSection
        onDiscoverClick={() => {
          document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* SECTION 02 — MEET YOUR SCOOP */}
      <ProductStorySection />

      {/* SECTION 03 — THE ART OF PISTACHIO */}
      <IngredientSection
        onOpenSensoryModal={() => setSensoryModalOpen(true)}
      />

      {/* SECTION 04 — THE CREAMY CLOSE-UP */}
      <CreamyExperienceSection />

      {/* SECTION 05 — THE FINAL SCOOP */}
      <FinalCTASection
        onAddToCart={handleAddToCart}
        onOpenBag={() => setBagOpen(true)}
      />

      {/* POLISHED FOOTER */}
      <Footer />

      {/* Interactive Bag Drawer */}
      <OrderDrawer
        isOpen={bagOpen}
        onClose={() => setBagOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Sensory Masterclass Modal */}
      <TastingProfileModal
        isOpen={sensoryModalOpen}
        onClose={() => setSensoryModalOpen(false)}
      />

    </div>
  );
}
