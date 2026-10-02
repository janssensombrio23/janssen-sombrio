import React from "react";
import { ImagePlus } from "lucide-react";

/**
 * PlaceholderImage — a branded, on-theme slot shown wherever a real screenshot
 * will be dropped in later.
 *
 * Props:
 *  label   – short descriptor (e.g. "Hero Showcase", "Card A — Booking Modal")
 *  hint    – one-line description of what the screenshot will show
 *  index   – numeric slot index (1, 2, 3…) for the badge
 *  aspect  – Tailwind aspect-ratio class, e.g. "aspect-[16/9]" (default)
 *  compact – if true, renders a slim version without the long hint text
 */
export default function PlaceholderImage({
  label = "Screenshot",
  hint = "",
  index,
  aspect = "aspect-[16/9]",
  compact = false,
}) {
  return (
    <div
      className={`relative w-full ${aspect} rounded-xl overflow-hidden bg-gradient-to-br from-[#130d26] via-[#0c0819] to-[#07051a] border border-dashed border-white/20 flex flex-col items-center justify-center gap-3 group select-none`}
      aria-label={`Placeholder for: ${label}`}
    >
      {/* Subtle animated grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Corner accent glows */}
      <div className="pointer-events-none absolute top-0 left-0 w-32 h-32 rounded-full bg-[#7c3aed]/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#2563eb]/20 blur-3xl translate-x-1/2 translate-y-1/2" />
      {/* Icon + Badge */}
      <div className="relative flex items-center gap-2.5">
        {index !== undefined && (
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/30 text-purple-300">
            SLOT {String(index).padStart(2, "0")}
          </span>
        )}
        <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
          <ImagePlus className="w-5 h-5 text-purple-400" />
        </div>
      </div>
      {/* Label */}
      <div className="relative text-center px-4">
        <p className="font-display font-bold text-sm text-white/70">{label}</p>
        {!compact && hint && (
          <p className="font-body text-[11px] text-slate-500 leading-relaxed mt-1 max-w-[260px]">
            {hint}
          </p>
        )}
      </div>
      {/* "Replace me" nudge */}
      <span className="relative text-[10px] font-mono text-white/25 uppercase tracking-widest border border-white/10 px-3 py-0.5 rounded-full">
        Image Pending
      </span>
    </div>
  );
}
