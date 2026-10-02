import React, { useEffect, useState } from 'react';

export default function WormGradients() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;
    const handleMouseMove = (e) => {
      // Gentle normalized coordinate offset (-25px to +25px)
      const x = (e.clientX / window.innerWidth - 0.5) * 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setMousePos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Container with subtle mouse parallax */}
      <div 
        className="relative w-full h-full transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
        }}
      >
        {/* Worm 1: The Cyan-Blue-Purple Luminary (Upper Right / Center) */}
        <div className="absolute top-[8%] right-[2%] md:right-[12%] animate-worm-1">
          <div 
            className="w-[520px] sm:w-[680px] md:w-[860px] h-[220px] sm:h-[280px] md:h-[340px] rounded-full blur-[80px] md:blur-[115px] opacity-75"
            style={{
              background: 'linear-gradient(115deg, rgba(37, 99, 235, 0.5) 0%, rgba(99, 102, 241, 0.55) 28%, rgba(124, 58, 237, 0.6) 55%, rgba(168, 85, 247, 0.5) 80%, rgba(6, 182, 212, 0.4) 100%)'
            }}
          />
        </div>

        {/* Worm 2: The Deep Violet & Indigo Serpent (Mid-Left / Work Section) */}
        <div className="absolute top-[38%] left-[-8%] md:left-[5%] animate-worm-2">
          <div 
            className="w-[480px] sm:w-[620px] md:w-[780px] h-[200px] sm:h-[260px] md:h-[320px] rounded-full blur-[85px] md:blur-[120px] opacity-65"
            style={{
              background: 'linear-gradient(225deg, rgba(147, 51, 234, 0.45) 0%, rgba(79, 70, 229, 0.55) 32%, rgba(37, 99, 235, 0.5) 68%, rgba(15, 23, 42, 0.8) 100%)'
            }}
          />
        </div>

        {/* Worm 3: The Electric Blue-Violet Undulator (Lower Right / Footer Section) */}
        <div className="absolute bottom-[10%] right-[-5%] md:right-[10%] animate-worm-3">
          <div 
            className="w-[500px] sm:w-[650px] md:w-[820px] h-[210px] sm:h-[270px] md:h-[330px] rounded-full blur-[85px] md:blur-[120px] opacity-70"
            style={{
              background: 'linear-gradient(85deg, rgba(14, 165, 233, 0.4) 0%, rgba(59, 130, 246, 0.55) 35%, rgba(139, 92, 246, 0.6) 72%, rgba(124, 58, 237, 0.45) 100%)'
            }}
          />
        </div>

        {/* Ambient Void Black Backdrop Overlay for Depth & Contrast */}
        <div className="absolute inset-0 bg-[#05030a]/40" />
      </div>
    </div>
  );
}
