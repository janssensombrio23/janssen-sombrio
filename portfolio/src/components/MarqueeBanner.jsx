import React from 'react';
import Starburst from './Starburst';

export default function MarqueeBanner({ textItems }) {
  const defaultItems = [
    "JANSSEN SOMBRIO",
    "UI/UX ARCHITECTURE",
    "PRODUCT DESIGN",
    "DESIGN SYSTEMS",
    "REACT & WMAD",
    "INTERACTIVE PROTOTYPING",
    "WCAG ACCESSIBILITY",
    "GAME HUD & ASSETS"
  ];

  const items = textItems || defaultItems;

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#040207] py-4 select-none">
      {/* Subtle edge fade overlays */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05030a] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05030a] to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {/* Render sets to make it seamless infinite scroll */}
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-sm sm:text-base font-display font-extrabold tracking-[0.2em] text-white/90 uppercase hover:text-[#a855f7] transition-colors">
              {text}
            </span>
            <Starburst className="w-5 h-5 text-indigo-400/50 group-hover:text-[#8b5cf6] transition-colors shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
