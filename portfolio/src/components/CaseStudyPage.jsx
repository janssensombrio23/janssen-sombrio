import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Clock, User, Wrench, Sparkles, AlertCircle, ArrowRight, Layers, Smartphone, Monitor, ShieldCheck, ChevronRight } from 'lucide-react';
import Starburst from './Starburst';
import PlaceholderImage from './PlaceholderImage';

export default function CaseStudyPage({ project, onBack, onSelectProject, allProjects }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  if (!project) return null;

  const { caseStudy } = project;

  // Next / Previous project navigation
  const currentIndex = allProjects?.findIndex(p => p.id === project.id) ?? -1;
  const nextProject = allProjects && currentIndex >= 0 ? allProjects[(currentIndex + 1) % allProjects.length] : null;
  const prevProject = allProjects && currentIndex >= 0 ? allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length] : null;

  return (
    <article className="min-h-screen pt-14 pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative text-white font-body animate-in fade-in duration-300">
      
      {/* Ambient Radial Background Aura */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#7c3aed]/15 via-[#2563eb]/10 to-transparent blur-[160px] -z-10" />

      {/* Top Navigation & Back Button */}
      <div className="flex items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10 active:scale-95 text-xs font-display font-medium group"
        >
          <ArrowLeft className="w-4 h-4 text-[#8b5cf6] group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/10 hidden sm:inline">
            Case Study • {project.year}
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">
            {project.subtitle}
          </span>
          <span className="text-white/20">•</span>
          <span className="text-xs font-mono text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
            {project.client}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
          {project.title}
        </h1>

        <p className="font-body text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>
      </header>

      {/* Quick Metadata Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 mb-12 text-xs">
        <div>
          <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-1">ROLE</span>
          <span className="text-white font-display font-medium text-sm">{caseStudy.role}</span>
        </div>
        <div>
          <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-1">CLIENT</span>
          <span className="text-white font-medium text-sm">{caseStudy.client}</span>
        </div>
        <div>
          <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-1">TYPOGRAPHY</span>
          <span className="text-purple-300 font-mono text-[11px] block">{project.typography}</span>
        </div>
        <div>
          <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-1">TOOLS</span>
          <div className="flex gap-1.5 flex-wrap mt-0.5">
            {caseStudy.tools.map((t, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-indigo-200 text-[11px]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Showcase Views (Desktop / Mobile Preview) */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-[#8b5cf6] text-white shadow-md shadow-purple-500/25'
                : 'bg-white/[0.04] text-slate-300 hover:text-white'
            }`}
          >
            Desktop Interface
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
              activeTab === 'mobile'
                ? 'bg-[#8b5cf6] text-white shadow-md shadow-purple-500/25'
                : 'bg-white/[0.04] text-slate-300 hover:text-white'
            }`}
          >
            Mobile & Modal View
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0c0819] overflow-hidden p-2">
          {activeTab === 'overview' ? (
            <PlaceholderImage
              label={`${project.title} — Primary Desktop Workspace`}
              hint={caseStudy.heroShowcase?.desktop || "Full Desktop Screen Workflow"}
              aspect="aspect-[16/9]"
            />
          ) : (
            <PlaceholderImage
              label={`${project.title} — Mobile Experience & Interactions`}
              hint={caseStudy.heroShowcase?.mobile || "Mobile Responsive & Modal Views"}
              aspect="aspect-[16/9]"
            />
          )}
        </div>
      </div>

      {/* Section 1: The Problem & Friction Points */}
      <section className="mb-14 p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400">01 // Problem & Context</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">
          The Operational Bottleneck
        </h2>
        <p className="text-slate-300 text-base leading-relaxed mb-8">
          {caseStudy.problem}
        </p>

        {caseStudy.frictionPoints && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudy.frictionPoints.map((point, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs font-mono font-medium mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-sm font-medium text-white mb-1.5">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-body">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Section 2: The Solution & Architecture */}
      <section className="mb-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#120b24] to-[#0a0614] border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8b5cf6]">02 // Solution & Architecture</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">
          System Architecture & UX Strategy
        </h2>
        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {caseStudy.solution}
        </p>

        {caseStudy.workflow && (
          <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-purple-400 font-medium uppercase tracking-wider text-[11px] shrink-0">
              User Journey Flow:
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-200 flex-wrap">
              {caseStudy.workflow.split('→').map((step, sIdx) => (
                <React.Fragment key={sIdx}>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {step.trim()}
                  </span>
                  {sIdx < caseStudy.workflow.split('→').length - 1 && (
                    <span className="text-purple-400">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Section 3: Core Features */}
      {caseStudy.coreFeatures && (
        <section className="mb-14">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-6">
            {caseStudy.coreFeaturesTitle || "Key Modules & Workflows"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.coreFeatures.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="text-xs font-mono text-purple-400 mb-2 block">
                  MODULE 0{idx + 1}
                </span>
                <h3 className="font-display text-base font-medium text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-body">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 4: Interface Highlights */}
      {caseStudy.highlights && (
        <section className="mb-14">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-6">
            Interface Details & Screen Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.highlights.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-[#0c0819] overflow-hidden">
                <div className="p-4 border-b border-white/[0.06]">
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                    {item.card}
                  </span>
                  <h3 className="font-display text-base font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 5: Design System, Tokens & Accessibility */}
      {caseStudy.designSystem && (
        <section className="mb-14 p-8 sm:p-10 rounded-2xl bg-[#0c0819] border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">03 // Design System & Accessibility</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">
            Design Tokens & WCAG AA Compliance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="font-display font-medium text-white block mb-1 text-sm">Typography Pairing</span>
              <p className="leading-relaxed">{caseStudy.designSystem.typography}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="font-display font-medium text-white block mb-1 text-sm">WCAG AA Contrast Guarantee</span>
              <p className="leading-relaxed">{caseStudy.designSystem.accessibility}</p>
            </div>
          </div>

          {caseStudy.designSystem.roles && (
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">
                Adaptive Role Views:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseStudy.designSystem.roles.map((r, rIdx) => (
                  <div key={rIdx} className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <span className="font-display text-xs font-medium text-purple-300 block mb-1">
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
        </section>
      )}

      {/* Section 6: Validated Impact & Outcomes */}
      {caseStudy.outcomes && (
        <section className="mb-14 p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10">
          <h2 className="font-display text-xl sm:text-2xl font-medium text-white mb-5 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#8b5cf6]" />
            Impact & User Evaluation Results
          </h2>
          <ul className="space-y-3.5 font-body text-sm">
            {caseStudy.outcomes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Section 7: Future Iterations & V2 Roadmap */}
      {caseStudy.nextSteps && (
        <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs font-body mb-14">
          <span className="font-mono text-purple-300 font-medium uppercase tracking-wider block mb-1.5 text-sm">
            Next Steps (V2 Roadmap):
          </span>
          <p className="text-slate-300 leading-relaxed text-sm">
            {caseStudy.nextSteps}
          </p>
        </div>
      )}

      {/* Bottom Page Navigation Between Case Studies */}
      <footer className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10 text-xs font-display font-medium"
        >
          <ArrowLeft className="w-4 h-4 text-[#8b5cf6]" />
          <span>Back to All Projects</span>
        </button>

        {nextProject && (
          <button
            onClick={() => onSelectProject(nextProject)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#05030a] font-display font-medium text-xs hover:bg-slate-100 transition-all shadow-lg active:scale-95 group"
          >
            <span>Next Study: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4 text-[#7c3aed] group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </footer>

    </article>
  );
}
