import React, { useState, useEffect } from 'react';
import { ShoppingBag, Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Navbar({ onOpenBag, bagCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playScoop();
    }
  };

  const navLinks = [
    { label: 'The Story', href: '#story' },
    { label: 'Our Ingredients', href: '#ingredients' },
    { label: 'The Experience', href: '#experience' },
    { label: 'Shop / Discover', href: '#shop' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    sound.playScoop();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
              isScrolled
                ? 'glass-nav shadow-lg shadow-[#183B2C]/5'
                : 'bg-[#FFF7E8]/70 backdrop-blur-md border border-white/40'
            }`}
          >
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              {/* Botanical Leaf Mark */}
              <div className="w-8 h-8 rounded-full bg-[#183B2C] text-[#DDF3E5] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury font-bold tracking-[0.22em] text-lg leading-none text-[#183B2C]">
                  MINT MELT
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#183B2C]/70 font-semibold mt-0.5">
                  Pistachio Gelato
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative text-sm tracking-wider uppercase font-medium text-[#183B2C]/80 hover:text-[#183B2C] transition-colors py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#183B2C] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Subtle Audio Toggle */}
              <button
                onClick={handleSoundToggle}
                title={isMuted ? 'Unmute sensory sound' : 'Mute sound effects'}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#183B2C]/80 hover:text-[#183B2C] hover:bg-white/50 transition-colors focus:outline-none"
                aria-label="Toggle sensory sound"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Discover / Order Button */}
              <button
                onClick={() => {
                  sound.playChime();
                  onOpenBag?.();
                }}
                className="relative flex items-center gap-2 bg-[#183B2C] text-[#FFF7E8] hover:bg-[#254F3C] px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus:outline-none"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Taste Gelato</span>
                <span className="sm:hidden">Taste</span>
                {bagCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#A8C686] text-[#183B2C] text-[10px] font-bold flex items-center justify-center ml-0.5">
                    {bagCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#183B2C] hover:bg-white/50 transition-colors focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2">
            <div className="glass-nav rounded-2xl p-5 shadow-xl border border-white/50 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-serif-luxury tracking-wide text-[#183B2C] hover:text-[#254F3C] py-1 border-b border-[#183B2C]/10 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#183B2C]/40" />
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between text-xs text-[#183B2C]/70">
                <span>Handcrafted in small batches</span>
                <span>Bronte, Sicily</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
