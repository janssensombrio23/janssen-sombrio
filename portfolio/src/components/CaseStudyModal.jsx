import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Clock, User, Wrench, Sparkles, AlertCircle, ArrowRight, Layers, Smartphone, Monitor, ShieldCheck, ChevronRight } from 'lucide-react';
import Starburst from './Starburst';
import PlaceholderImage from './PlaceholderImage';

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Support Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#090514] p-6 sm:p-10 shadow-2xl shadow-purple-500/20 text-white font-body"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#7c3aed]/25 to-[#2563eb]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#3b82f6]/20 to-[#9333ea]/15 blur-3xl" />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2.5 flex-wrap">
            <Starburst className="w-4 h-4 text-[#8b5cf6]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a855f7]">
              {project.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-mono text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
              {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors border border-white/10 active:scale-95"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="my-6">
          <div className="text-xs font-mono text-purple-300 mb-1 uppercase tracking-widest">
            {project.subtitle}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            {project.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Quick Metadata Bar (Role, Tools, Typography, Deliverables) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 text-xs font-body">
          <div>
            <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-1">ROLE</span>
            <span className="text-white font-display font-bold">{caseStudy.role}</span>
          </div>
          <div>
            <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-1">CLIENT</span>
            <span className="text-white font-medium">{caseStudy.client}</span>
          </div>
          <div>
            <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-1">TYPOGRAPHY</span>
            <span className="text-purple-300 font-mono text-[11px] block">{project.typography}</span>
          </div>
          <div>
            <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-1">TOOLS</span>
            <div className="flex gap-1.5 flex-wrap">
              {caseStudy.tools.map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-indigo-200 text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Image & Dual-Device Showcase Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 mb-8">
          {project.coverImage ? (
            <div className="relative aspect-[16/9] bg-black/60 group">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/40 to-transparent" />
            </div>
          ) : (
            <PlaceholderImage
              label="Hero Showcase"
              hint={`SCREENSHOT 1: Dual-Device Hero — ${project.caseStudy?.heroShowcase?.desktop ?? ''}`}
              index={1}
              aspect="aspect-[16/9]"
            />
          )}

          {/* Dual-Device Showcase Callout Overlay */}
          {caseStudy.heroShowcase && (
            <div className="p-4 rounded-b-2xl bg-[#090514]/95 border-t border-white/10 text-xs">
              <span className="font-mono text-purple-300 font-bold uppercase tracking-wider block mb-1">
                Hero Showcase Architecture:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
                <div className="flex items-start gap-2">
                  <Monitor className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Desktop View:</strong> {caseStudy.heroShowcase.desktop}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Smartphone className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Mobile View:</strong> {caseStudy.heroShowcase.mobile}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats Metrics Banner */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-10 text-center font-body">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl sm:text-3xl font-black font-display text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-mono mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Section 1: The UX Insight & Strategy (Friction Points) */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#0e081e] border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a855f7]">01 // DISCOVERY & STRATEGY</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
            The UX Insight & Strategy
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {caseStudy.problem}
          </p>

          {/* 3 Friction Points Grid */}
          {caseStudy.frictionPoints && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.frictionPoints.map((point, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-rose-400 font-mono text-xs mb-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Friction Point 0{idx + 1}</span>
                    </div>
                    <h4 className="font-display text-sm font-bold text-white mb-1.5">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-body">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 2: The Solution & Minimal Vector Workflow Flow */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#120a26] to-[#0a0618] border border-purple-500/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8b5cf6]">02 // ARCHITECTURE & SOLUTION</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
            Integrated Ecosystem Solution
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {caseStudy.solution}
          </p>

          {/* Workflow Diagram Banner */}
          {caseStudy.workflow && (
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-200">
              <span className="text-purple-400 font-bold uppercase tracking-wider text-[11px] shrink-0">
                Ecosystem Workflow:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {caseStudy.workflow.split(' → ').map((step, sIdx, arr) => (
                  <React.Fragment key={sIdx}>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-medium">
                      {step}
                    </span>
                    {sIdx < arr.length - 1 && (
                      <span className="text-purple-400 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mid-Content Screenshot Strip (projects with extra numbered slots, e.g. Ashen Spire) */}
        {caseStudy.screenshotSlots && caseStudy.screenshotSlots.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8b5cf6]">In-Context Screenshots</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.screenshotSlots.map((slot) => (
                <PlaceholderImage
                  key={slot.index}
                  label={slot.label}
                  hint={slot.hint}
                  index={slot.index}
                  aspect="aspect-[4/3]"
                />
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Core Features Engine */}
        {caseStudy.coreFeatures && (
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#0e081e] border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a855f7]">03 // CORE ENGINE</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
              {caseStudy.coreFeaturesTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {caseStudy.coreFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-mono text-purple-400 font-bold mb-2 block">
                    0{fIdx + 1}
                  </span>
                  <h4 className="font-display text-sm font-bold text-white mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-body">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Multi-User Interface Highlights (Card A, Card B, Card C) */}
        {caseStudy.highlights && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8b5cf6]">04 // INTERFACE HIGHLIGHTS</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
              Interface Highlights Showcase
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.highlights.map((item, hIdx) => (
                <div key={hIdx} className="rounded-2xl bg-[#0c071a] border border-white/10 flex flex-col overflow-hidden hover:border-purple-500/40 transition-colors">
                  {/* Screenshot Placeholder for this highlight card */}
                  <PlaceholderImage
                    label={item.title}
                    hint={item.desc}
                    index={hIdx + 2}
                    aspect="aspect-[4/3]"
                    compact
                  />
                  <div className="p-5 flex flex-col gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/15 border border-purple-500/30 text-purple-300 block w-max">
                      {item.card}
                    </span>
                    <h4 className="font-display text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: Design System, Tokens & Accessibility */}
        {caseStudy.designSystem && (
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#0c0819] border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">05 // DESIGN SYSTEM & WCAG AA</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
              Design System & Accessibility Architecture
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="font-display font-bold text-white block mb-1">Typography Pairing</span>
                <p className="leading-relaxed">{caseStudy.designSystem.typography}</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="font-display font-bold text-white block mb-1">WCAG AA Contrast Guarantee</span>
                <p className="leading-relaxed">{caseStudy.designSystem.accessibility}</p>
              </div>
            </div>

            {/* Adaptive Roles Grid */}
            {caseStudy.designSystem.roles && (
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">
                  Adaptive Role Views:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {caseStudy.designSystem.roles.map((r, rIdx) => (
                    <div key={rIdx} className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                      <span className="font-display text-xs font-bold text-purple-300 block mb-1">
                        {r.role}
                      </span>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-body">
                        {r.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section 6: Validated Impact & Outcomes */}
        {caseStudy.outcomes && (
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <h4 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
              Impact & User Evaluation Results
            </h4>
            <ul className="space-y-3 font-body text-sm">
              {caseStudy.outcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Section 7: Future Iterations & V2 Roadmap */}
        {caseStudy.nextSteps && (
          <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs font-body mb-8">
            <span className="font-mono text-purple-300 font-bold uppercase tracking-wider block mb-1">
              Next Steps (V2 Roadmap):
            </span>
            <p className="text-slate-300 leading-relaxed">
              {caseStudy.nextSteps}
            </p>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Esc to close preview
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-[#05030a] font-display font-bold text-xs hover:bg-slate-100 transition-all shadow-lg active:scale-95"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
}