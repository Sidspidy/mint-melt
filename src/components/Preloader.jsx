import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress simulation
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setProgress(100);

        // Allow progress bar to touch 100% then animate out
        setTimeout(() => {
          const tl = gsap.timeline({
            onComplete: () => {
              setIsDone(true);
              onComplete?.();
            },
          });

          tl.to('.preloader-content', {
            y: -20,
            opacity: 0,
            duration: 0.45,
            ease: 'power2.in',
          }).to(
            '#preloader-overlay',
            {
              yPercent: -100,
              duration: 0.8,
              ease: 'power3.inOut',
            },
            '-=0.15'
          );
        }, 250);
      } else {
        setProgress(currentProgress);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <aside
      id="preloader-overlay"
      aria-label="Loading MINT MELT experience"
      aria-live="polite"
      className="fixed inset-0 z-[100] bg-[#183B2C] text-[#FFF7E8] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Ambient background soft glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#A8C686]/15 blur-3xl pointer-events-none" />

      <div className="preloader-content relative z-10 flex flex-col items-center text-center px-6">
        {/* Brand Emblem */}
        <div className="w-12 h-12 rounded-full bg-[#A8C686] text-[#183B2C] flex items-center justify-center mb-5 shadow-lg shadow-[#183B2C]/30 animate-pulse">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" />
          </svg>
        </div>

        {/* Brand Title */}
        <span className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] text-[#FFF7E8] leading-none mb-2">
          MINT MELT
        </span>

        {/* Subtitle */}
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#A8C686] font-semibold mb-8">
          Artisanal Pistachio Gelato • Bronte, Sicily
        </span>

        {/* Progress Bar Container */}
        <div className="w-48 sm:w-60 h-1 bg-white/15 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#A8C686] to-[#FFF7E8] rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage & Status */}
        <div className="flex items-center justify-between w-48 sm:w-60 mt-3 text-[11px] font-mono tracking-wider text-[#FFF7E8]/60">
          <span>SLOW-CHURNING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </aside>
  );
}
