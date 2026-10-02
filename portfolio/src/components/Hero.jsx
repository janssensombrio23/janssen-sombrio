import React, { useState, useEffect } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import Starburst from './Starburst';

export default function Hero({ personalInfo }) {
  const rawName = personalInfo?.name || "Janssen Sombrio";
  const nameParts = rawName.split(" ");
  const firstName = nameParts[0] || "Janssen";
  const lastName = nameParts.slice(1).join(" ") || "Sombrio";
  const fullText = `${firstName} ${lastName}.`;

  const [currentLen, setCurrentLen] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && currentLen < fullText.length) {
      // Natural typewriter typing cadence
      const speed = 75 + Math.random() * 45;
      timeout = setTimeout(() => {
        setCurrentLen((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && currentLen === fullText.length) {
      // Hold finished name for 5 seconds for reading
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 5000);
    } else if (isDeleting && currentLen > 0) {
      // Fast backspace
      timeout = setTimeout(() => {
        setCurrentLen((prev) => prev - 1);
      }, 35);
    } else if (isDeleting && currentLen === 0) {
      // Brief pause before retyping
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 650);
    }
    return () => clearTimeout(timeout);
  }, [currentLen, isDeleting, fullText.length]);

  // Derived character slices
  const typedFirst = firstName.slice(0, Math.min(currentLen, firstName.length));
  const hasSpace = currentLen > firstName.length;
  const typedLast = hasSpace
    ? lastName.slice(0, Math.max(0, currentLen - firstName.length - 1))
    : "";
  const hasDot = currentLen === fullText.length;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">

      {/* Radiant Blue, Purple & Black Ambient Light */}
      <div
        className="pointer-events-none absolute top-1/2 right-[8%] -translate-y-1/2 w-[550px] h-[550px] md:w-[780px] md:h-[780px] rounded-full bg-gradient-to-br from-[#7c3aed]/35 via-[#6366f1]/25 to-[#2563eb]/20 blur-[130px] md:blur-[170px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 left-[5%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#1d4ed8]/30 to-[#9333ea]/20 blur-[140px]"
        aria-hidden="true"
      />

      {/* Decorative Starburst (matching top-right position in reference) */}
      <div className="absolute top-10 right-6 md:top-14 md:right-16 text-purple-400/40 pointer-events-none hidden sm:block">
        <Starburst className="w-20 h-20 md:w-28 md:h-28 text-indigo-400/35" spin={true} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">


        {/* Plus Jakarta Sans Headline with Typing Animation (Non-wrapping) */}
        <div className="mb-10 max-w-full overflow-x-auto sm:overflow-visible pb-1 scrollbar-none">
          <h1
            onClick={() => { setIsDeleting(false); setCurrentLen(0); }}
            title="Click to replay typing animation"
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-[-0.03em] leading-[0.95] text-white min-h-[1.05em] inline-flex flex-nowrap items-baseline whitespace-nowrap cursor-pointer select-none group"
            aria-label={`${firstName} ${lastName}`}
          >
            <span className="text-[#8b5cf6] drop-shadow-[0_0_16px_rgba(139,92,246,0.35)] transition-colors duration-500">
              {typedFirst}
            </span>
            {hasSpace && <span>&nbsp;</span>}
            <span className="text-white relative inline-block">
              {typedLast}
              {hasDot && <span className="text-[#8b5cf6] drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]">.</span>}
            </span>
            {/* Blinking Purple/Blue Caret (Attached & Non-wrapping) */}
            <span
              className="inline-block w-[3px] sm:w-[5px] md:w-[8px] h-[0.78em] bg-[#8b5cf6] ml-1 sm:ml-2.5 align-baseline animate-pulse shadow-[0_0_14px_#8b5cf6] rounded-sm shrink-0"
              aria-hidden="true"
            />
          </h1>
          <p className="mt-4 font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-300">
            UI/UX Designer & Front-end developer
          </p>
        </div>

        {/* Narrative & Actions Row */}
        <div className="pt-6 border-t border-white/10">
          {/* Description */}
          <div className="max-w-3xl">
            <p className="font-body text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
              Driven by a passion for creating end-to-end digital experiences, I blend UI/UX design with front-end development to turn complex user needs into intuitive, pixel-perfect web and mobile interfaces. Specializing in BSIT Web and Mobile Applications Development, I love building human-centered design systems and bringing them to life through clean, production-ready code.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#05030a] font-display font-bold text-sm hover:bg-slate-100 transition-all duration-200 shadow-xl shadow-purple-500/10 active:scale-95 group"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#7c3aed]" />
              </a>

              <a
                href="#specimen"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] border border-white/15 text-white/90 font-display font-medium text-sm hover:bg-white/10 hover:border-[#8b5cf6]/50 transition-all backdrop-blur-md"
              >
                <Layers className="w-4 h-4 text-[#8b5cf6]" />
                <span>Interactive UI Lab</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}