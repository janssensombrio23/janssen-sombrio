import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp, MapPin } from 'lucide-react';
import Starburst from './Starburst';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer({ name, email, github, linkedin, figma }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="min-h-screen flex flex-col justify-center relative py-20 overflow-hidden scroll-mt-12">
      
      {/* Radiant Glow Behind CTA (Blue & Purple Aura) */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-[#7c3aed]/20 to-[#2563eb]/20 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        
        {/* Call to Action Container */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#130b24]/90 to-[#070410]/95 backdrop-blur-2xl p-8 sm:p-14 mb-16 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle starburst decorations */}
          <div className="absolute top-6 left-6 text-purple-400/10 pointer-events-none">
            <Starburst className="w-12 h-12" spin={true} />
          </div>
          <div className="absolute bottom-6 right-6 text-indigo-400/10 pointer-events-none">
            <Starburst className="w-12 h-12" spin={true} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a855f7] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-ping"></span>
            <span>NEXT STEPS & COLLABORATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 max-w-3xl mx-auto">
            Let's build something remarkable together<span className="text-[#8b5cf6]">.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Whether you have an upcoming product launch, require an accessibility-first design system, or want to discuss full-time opportunities.
          </p>

          {/* Copy Email & Direct Reach Out Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#05030a] font-display font-bold text-sm hover:bg-slate-100 hover:shadow-xl hover:shadow-purple-500/20 transition-all shadow-xl active:scale-95 group"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#05030a]/70 group-hover:scale-110 transition-transform text-[#7c3aed]" />
                  <span>{email}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20-%20Janssen%20Sombrio`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] border border-white/15 text-white font-display font-medium text-sm hover:bg-white/10 hover:border-[#8b5cf6]/50 transition-all backdrop-blur-md"
            >
              <Mail className="w-4 h-4 text-[#8b5cf6]" />
              <span>Launch Mail Client</span>
            </a>
          </div>

        </div>

        {/* Social Links & Location Details */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-mono">
          
          {/* Copyright & Location */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} {name}.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" />
              Bulacan, Philippines (UTC+8 PHT)
            </span>
          </div>

          {/* Social Pills */}
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-[#8b5cf6]/50 transition flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-[#8b5cf6]/50 transition flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            {figma && (
              <a
                href={figma}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-[#8b5cf6]/50 transition flex items-center gap-1.5"
              >
                <span>Figma</span>
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-[#8b5cf6]/50 transition"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Design System Attribution */}
        <div className="mt-8 text-center text-[11px] font-mono text-slate-500">
          Designed with Poppins & Roboto typography &bull; Crafted with React, Vite & Tailwind CSS
        </div>

      </div>
    </footer>
  );
}