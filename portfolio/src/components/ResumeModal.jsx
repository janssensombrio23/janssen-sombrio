import React, { useEffect } from 'react';
import { X, Printer, Mail } from 'lucide-react';
import Starburst from './Starburst';

export default function ResumeModal({ isOpen, onClose, personalInfo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-2xl"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#090514] p-6 sm:p-10 shadow-2xl text-white font-body"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Starburst className="w-4 h-4 text-[#8b5cf6]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a855f7]">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-display font-medium text-white transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="mt-8 space-y-8 text-sm">
          
          {/* Candidate Profile */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="font-display text-3xl font-extrabold text-white">
              {personalInfo.name}
            </h1>
            <p className="font-display text-base text-[#a855f7] font-semibold mt-1">
              {personalInfo.role} • {personalInfo.subtitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-white hover:underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-white hover:underline">
                github.com/janssensombrio
              </a>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed font-body">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Education
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-display text-base font-bold text-white">
                  Bachelor of Science in Information Technology (BSIT)
                </h4>
                <p className="text-sm text-slate-300 font-body">
                  Major in Web and Mobile Applications Development (WMAD)
                </p>
                <p className="text-xs text-slate-400 mt-1 font-body">
                  Bulacan State University (BulSU) • Bulacan, Philippines
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                2022 — 2026
              </span>
            </div>
          </div>

          {/* Core Projects Highlight */}
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Featured Case Studies & Work
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-display font-bold text-white">TLE Learning Management System</h4>
                  <span className="text-xs font-mono text-slate-400">UX & EdTech</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 font-body">
                  End-to-end user research and interactive design for Junior High students. Streamlined 3-tab architecture improved test assignment completion rate by +46%.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-display font-bold text-white">Ashen Spire Game UI & HUD</h4>
                  <span className="text-xs font-mono text-slate-400">Game Interface</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 font-body">
                  Dark gothic HUD system, 35+ custom pixel & vector components, and optimized peripheral vision hierarchy for rapid combat scanning under 150ms.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-display font-bold text-white">Vanguard Design System 2.0</h4>
                  <span className="text-xs font-mono text-slate-400">Design Tokens</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 font-body">
                  Cross-platform tokenized UI kit linking Figma design variables to React & Tailwind CSS. Reduced developer handoff friction by 45%.
                </p>
              </div>
            </div>
          </div>

          {/* Core Technical & Design Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Skills & Methodologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="font-display font-bold text-white block mb-1">Design & Prototyping</span>
                <p className="text-slate-300">
                  Figma, FigJam, ProtoPie, User Flows, Wireframing, Design Tokens, Micro-interactions, Accessibility (WCAG 2.1 AA)
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="font-display font-bold text-white block mb-1">Engineering (WMAD)</span>
                <p className="text-slate-300">
                  React, Tailwind CSS v4, Vite, JavaScript (ESNext), Mobile-First Responsive Design, REST APIs, Git & GitHub
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
          <a
            href={`mailto:${personalInfo.email}?subject=Interview%20Inquiry%20-%20Janssen%20Sombrio`}
            className="flex items-center gap-2 text-xs text-[#a855f7] hover:text-white transition font-mono"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Directly</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white text-[#05030a] font-display font-bold text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
