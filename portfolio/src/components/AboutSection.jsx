import React from 'react';
import { skillsData, philosophyPoints } from '../data/projects';
import Starburst from './Starburst';
import { GraduationCap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20 sm:py-24 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Focus & Expertise<span className="text-white/40">.</span>
            </h2>
            <p className="mt-2 font-body text-base text-slate-300 max-w-xl">
              Grounded in academic rigor from BSIT WMAD at Bulacan State University and tested through hands-on design and code systems.
            </p>
          </div>

          {/* Education Highlight Card */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-[#8b5cf6] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="text-xs font-body">
              <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider">Candidate for Graduation</span>
              <h4 className="font-display text-sm font-medium text-white">BSIT — Web & Mobile Dev</h4>
              <p className="text-slate-300">Bulacan State University (BulSU) • 2026</p>
            </div>
          </div>
        </div>

        {/* 4 Core Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 font-body">
          {skillsData.map((group, idx) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0819]/75 hover:bg-[#130d26] backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-[#8b5cf6]/50 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#8b5cf6] font-medium">0{idx + 1}</span>
                  <Starburst className="w-4 h-4 text-purple-400/30 group-hover:text-[#8b5cf6] transition-colors" />
                </div>
                <h3 className="font-display text-lg font-medium text-white mb-2 group-hover:text-[#a855f7] transition-colors">
                  {group.category}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-body">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-indigo-200/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Grid */}
        <div id="philosophy" className="pt-16 border-t border-white/10">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a855f7] block mb-2">
              Guiding Principles
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-medium text-white">
              Design Philosophy<span className="text-white/40">.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPoints.map((point) => (
              <div
                key={point.number}
                className="p-7 rounded-2xl border border-white/[0.08] bg-[#090514]/70 hover:bg-[#100922] transition-all hover:border-[#8b5cf6]/40 flex gap-5 font-body"
              >
                <span className="font-mono text-xl font-medium text-[#8b5cf6] shrink-0">
                  {point.number}
                </span>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-medium text-white mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-body">
                    {point.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}