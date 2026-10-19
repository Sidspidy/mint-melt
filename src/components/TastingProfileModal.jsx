import React from 'react';
import { X, Award, Check, Sparkles, Thermometer, Wind, Eye } from 'lucide-react';
import { sound } from '../utils/sound';

export default function TastingProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const sensoryMetrics = [
    { label: 'Nutty Depth (Bronte Roast)', value: '98%', desc: 'Intense roasted pistachio oils' },
    { label: 'Creaminess & Velvet Body', value: '96%', desc: 'Pasture-fed Jersey milk fat' },
    { label: 'Air Density (Overrun)', value: '18%', desc: 'Ultra-dense traditional Italian texture' },
    { label: 'Sweetness Balance', value: '45%', desc: 'Low-glycemic subtle cane sugar' },
    { label: 'Mineral Finish (Trapani)', value: '75%', desc: 'Crisp finish that cleanses the palate' },
  ];

  const pairings = [
    { title: 'The Sicilian Affogato', desc: 'Drown a generous scoop in a freshly pulled shot of dark espresso.' },
    { title: 'Brioche Con Gelato', desc: 'Tucked inside a warm, buttery toasted brioche bun with crushed pistachios.' },
    { title: 'Flaky Sea Salt & Honey', desc: 'Drizzle with wild thyme blossom honey and an extra crystal of Trapani salt.' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#183B2C]/50 backdrop-blur-md transition-opacity"
        onClick={() => {
          sound.playScoop();
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFF7E8] text-[#183B2C] rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-white/60 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playScoop();
            onClose();
          }}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#183B2C]/10 hover:bg-[#183B2C]/20 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#183B2C]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#183B2C]/60 mb-2">
          <Award className="w-4 h-4 text-[#8CAE66]" />
          <span>Sensory Masterclass</span>
        </div>
        <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#183B2C] mb-2">
          The Anatomy of a Perfect Scoop
        </h3>
        <p className="text-xs sm:text-sm text-[#183B2C]/75 mb-6">
          Developed in collaboration with Italian master gelatieri to deliver the cleanest pistachio expression on earth.
        </p>

        {/* Sensory Radar Breakdown */}
        <div className="space-y-3 mb-6 bg-white/70 p-5 rounded-2xl border border-[#183B2C]/10">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#183B2C] mb-3">
            Sensory Metrics
          </h4>
          {sensoryMetrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span>{metric.label}</span>
                <span className="font-mono text-[#183B2C]">{metric.value}</span>
              </div>
              <div className="w-full bg-[#183B2C]/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#183B2C] h-full rounded-full transition-all duration-700"
                  style={{ width: metric.value }}
                />
              </div>
              <div className="text-[10px] text-[#183B2C]/60">{metric.desc}</div>
            </div>
          ))}
        </div>

        {/* Pairing Rituals */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#183B2C] mb-3">
            Recommended Tasting Rituals
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {pairings.map((p) => (
              <div
                key={p.title}
                className="bg-white/50 p-3.5 rounded-xl border border-[#183B2C]/10 text-left"
              >
                <div className="text-xs font-bold text-[#183B2C] mb-1">{p.title}</div>
                <div className="text-[11px] text-[#183B2C]/70 leading-snug">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Close CTA */}
        <div className="flex justify-end">
          <button
            onClick={() => {
              sound.playScoop();
              onClose();
            }}
            className="bg-[#183B2C] text-[#FFF7E8] px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#254F3C] transition-colors"
          >
            Close Tasting Guide
          </button>
        </div>

      </div>
    </div>
  );
}
