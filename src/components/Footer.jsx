import React, { useState } from 'react';
import { ArrowUp, Mail, ExternalLink, Sparkles, Send } from 'lucide-react';
import { sound } from '../utils/sound';

export const CREATOR = {
  name: 'Sidhanathan',
  email: 'sidhart1010@gmail.com',
  github: 'https://github.com/Sidspidy',
  linkedin: 'https://www.linkedin.com/in/sidhanathan-k-sid',
  role: 'Creative Frontend Engineer & Digital Art Director',
  status: 'Available for Roles & Collaborations',
};

function GithubIcon({ className = 'w-3.5 h-3.5', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-3.5 h-3.5', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      sound.playChime();
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    sound.playScoop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'The Story', href: '#story' },
    { label: 'Our Ingredients', href: '#ingredients' },
    { label: 'The Experience', href: '#experience' },
    { label: 'Shop / Discover', href: '#shop' },
  ];

  return (
    <footer
      className="relative bg-[#183B2C] text-[#FFF7E8] pt-20 pb-12 px-4 sm:px-6 lg:px-12 overflow-clip z-40"
      style={{ zIndex: 40, backgroundColor: '#183B2C' }}
    >
      {/* Background ambient leaf motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#254F3C]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Grid: 4 Columns on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#FFF7E8]/15">
          {/* Column 1: Brand Identity & Story (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#A8C686] text-[#183B2C] flex items-center justify-center">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" />
                </svg>
              </div>
              <div>
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-[0.2em] block leading-none">
                  MINT MELT
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A8C686] font-semibold mt-1 block">
                  Artisanal Pistachio Gelato
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FFF7E8]/75 leading-relaxed font-normal mb-6">
              Crafted with volcanic Sicilian Bronte pistachios, slow-churned sweet cream, and sea salt. A quiet celebration of slowing down and tasting pure culinary bliss.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs tracking-wider text-[#A8C686] font-medium">
              <span>Bronte, Sicily</span>
              <span>•</span>
              <span>Small Batch Production</span>
              <span>•</span>
              <span>Est. 2026</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A8C686] mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      sound.playScoop();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-[#FFF7E8]/80 hover:text-[#A8C686] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-xs text-[#FFF7E8]/40 cursor-not-allowed">
                  Private Salon (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Creator & Lead (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A8C686] mb-5">
              Creator & Lead
            </h4>
            <div className="flex flex-col gap-2">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FFF7E8] tracking-tight">
                {CREATOR.name}
              </span>
              <span className="text-xs text-[#A8C686] -mt-1 font-medium leading-snug">
                {CREATOR.role}
              </span>

              <div className="flex items-center gap-2 mt-1 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#A8C686] animate-pulse" />
                <span className="text-[11px] text-[#FFF7E8]/70 font-medium">
                  {CREATOR.status}
                </span>
              </div>

              <div className="flex flex-col gap-2.5 pt-2 border-t border-white/10 text-xs text-[#FFF7E8]/80">
                <a
                  href={`mailto:${CREATOR.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#A8C686] transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A8C686]" />
                  <span className="truncate group-hover:underline">{CREATOR.email}</span>
                </a>
                <a
                  href={CREATOR.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#A8C686] transition-colors group"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#A8C686]" />
                  <span className="group-hover:underline">github.com/Sidspidy</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
                <a
                  href={CREATOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#A8C686] transition-colors group"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#A8C686]" />
                  <span className="group-hover:underline">LinkedIn Connect</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter / Sunday Scoop Club (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A8C686] mb-2">
              The Sunday Scoop
            </h4>
            <p className="text-xs text-[#FFF7E8]/70 mb-4 leading-relaxed">
              First notification of limited seasonal harvests and private batch releases.
            </p>

            {subscribed ? (
              <div className="bg-[#254F3C] text-[#A8C686] p-3 rounded-xl text-xs flex items-center gap-2 border border-[#A8C686]/30">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Benvenuto! You are on the private tasting list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#254F3C] text-[#FFF7E8] placeholder-[#FFF7E8]/40 text-xs px-4 py-3 rounded-full border border-white/10 focus:outline-none focus:border-[#A8C686] transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-full bg-[#A8C686] text-[#183B2C] hover:bg-[#BFDCA0] transition-colors flex items-center justify-center focus:outline-none cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[10px] text-[#FFF7E8]/40">
                  Unsubscribe anytime. We never send spam.
                </span>
              </form>
            )}

            {/* Social Instagram link */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-3">
              <a
                href="#instagram"
                onClick={(e) => {
                  e.preventDefault();
                  sound.playScoop();
                }}
                className="inline-flex items-center gap-2 text-xs text-[#FFF7E8]/75 hover:text-[#A8C686] transition-colors"
                title="Instagram Placeholder"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>@mintmeltgelato</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar with Creator Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FFF7E8]/70">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span>
              © {new Date().getFullYear()} MINT MELT Gelato Co.
            </span>
            <span className="text-[#FFF7E8]/30">•</span>
            <span className="text-[#A8C686] font-semibold tracking-wider uppercase">
              DESIGNED & DEVELOPED BY{' '}
              <a
                href={CREATOR.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                {CREATOR.name.toUpperCase()}
              </a>
            </span>
            <span className="text-[#FFF7E8]/30">•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <span className="hover:text-[#FFF7E8] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#FFF7E8] cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#A8C686] hover:text-[#FFF7E8] transition-colors focus:outline-none ml-2 cursor-pointer font-medium"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
