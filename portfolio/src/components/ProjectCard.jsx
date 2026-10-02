import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import PlaceholderImage from './PlaceholderImage';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      onClick={() => onSelect(project)}
      className="w-full group relative rounded-2xl border border-white/[0.08] bg-[#0c0819]/75 hover:bg-[#130d26]/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-2xl hover:shadow-[#7c3aed]/15 cursor-pointer overflow-hidden"
    >
      {/* Subtle Top Purple & Blue Light Leak on Hover */}
      <div className="pointer-events-none absolute -top-24 right-0 w-56 h-56 rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-[#2563eb]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Project Image Container */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 mb-5">
          {project.coverImage ? (
            <>
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0819] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </>
          ) : (
            <PlaceholderImage
              label={project.title}
              hint={project.heroShowcaseHint || project.shortDescription}
              aspect="aspect-[16/10]"
              compact
            />
          )}
        </div>

        {/* Title (Poppins) */}
        <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-[#a855f7] transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-5 h-5 text-indigo-400/60 group-hover:text-[#a855f7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
        </h3>

        {/* Short description (Roboto) */}
        <p className="font-body text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>
      </div>
    </article>
  );
}