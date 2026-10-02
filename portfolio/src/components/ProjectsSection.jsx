import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Starburst from './Starburst';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsSection({ projects, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const carouselRef = useRef(null);

  const categories = [
    { id: 'All', label: 'All Projects (4)' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'front-end', label: 'Front-End Development' }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.track === activeFilter);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="min-h-screen flex flex-col justify-center py-20 sm:py-24 relative scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Crafted Systems<span className="text-white/40">.</span>
            </h2>
            <p className="mt-2 font-body text-base text-slate-300 max-w-2xl">
              End-to-end UX research, multi-user flow architectures, and WCAG AA design systems built for educational institutions, hospitality hubs, and municipal LGU workspaces.
            </p>
          </div>

          {/* Filter & Carousel Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Filter Capsule Group */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              {categories.map((cat) => {
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white shadow-md shadow-purple-500/25 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Carousel Arrow Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:border-[#8b5cf6]/50 hover:bg-white/10 transition active:scale-95 shadow-lg"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:border-[#8b5cf6]/50 hover:bg-white/10 transition active:scale-95 shadow-lg"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scroll-smooth"
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="w-[85vw] sm:w-[380px] md:w-[420px] lg:w-[440px] shrink-0 snap-start flex"
            >
              <ProjectCard
                project={project}
                onSelect={onSelectProject}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-white/10 rounded-2xl bg-white/[0.02]">
            <p className="font-body text-slate-400 text-sm">No projects found in this category.</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-3 text-xs text-[#a855f7] underline underline-offset-4"
            >
              Reset filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}