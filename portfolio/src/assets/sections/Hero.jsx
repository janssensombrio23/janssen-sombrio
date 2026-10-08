import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import bg1 from "../home hero assets/BG 1.png";
import bg2 from "../home hero assets/BG 2.png";
import bg3 from "../home hero assets/BG 3.png";
import portrait from "../home hero assets/Janssen PNG.png";
import nameText from "../home hero assets/Janssen Sombrio Text.png";

export default function Hero() {
  const [stage, setStage] = useState(0);

  const portraitRef = useRef(null);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  // Timed Stage Sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1100),
      setTimeout(() => setStage(3), 3200),
      setTimeout(() => setStage(4), 3800),
      setTimeout(() => setStage(5), 4400),
      setTimeout(() => setStage(6), 5100),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Smooth Portrait Parallax Damping
  useEffect(() => {
    const animatePortrait = () => {
      const current = currentOffset.current;
      const target = targetOffset.current;

      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate3d(calc(-50% + ${current.x}px), ${current.y}px, 0)`;
      }

      animationFrame.current = requestAnimationFrame(animatePortrait);
    };

    animationFrame.current = requestAnimationFrame(animatePortrait);
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  // Cursor Interaction
  const handleMouseMove = (e) => {
    if (!portraitRef.current || stage < 5) return;

    const rect = portraitRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    const interactionRadius = 500;

    if (distance > 0 && distance < interactionRadius) {
      const force = (1 - distance / interactionRadius) * 10;
      targetOffset.current = {
        x: -(distX / distance) * force,
        y: -(distY / distance) * force,
      };
    } else {
      targetOffset.current = { x: 0, y: 0 };
    }
  };

  const handleMouseLeave = () => {
    targetOffset.current = { x: 0, y: 0 };
  };

  const chipLinks = [
    { label: "Figma", href: "#" },
    { label: "Github", href: "#" },
    { label: "Download CV ↓", href: "#" },
  ];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate w-full h-screen min-h-[800px] overflow-hidden flex flex-col justify-between pt-24 pb-12 px-8 md:px-16 bg-[#05030a] font-['Clarity_City','Inter',sans-serif] select-none"
    >
      {/* 1. BACKGROUND CROSSFADE LAYERS */}
      <div className="absolute inset-0 -z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 1 }}
          className="absolute inset-0 bg-cover bg-center blur-[6px] brightness-75 scale-105"
          style={{ backgroundImage: `url("${bg1}")` }}
        />
        <motion.div
          animate={{ opacity: stage >= 1 ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center blur-[6px] brightness-75 scale-105"
          style={{ backgroundImage: `url("${bg2}")` }}
        />
        <motion.div
          animate={{ opacity: stage >= 2 ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center blur-[6px] brightness-75 scale-105"
          style={{ backgroundImage: `url("${bg3}")` }}
        />
      </div>

      {/* 2. CENTER PORTRAIT */}
      <motion.div
        ref={portraitRef}
        initial={{ opacity: 0, y: 40, x: "-50%" }}
        animate={{
          opacity: stage >= 5 ? 1 : 0,
          y: stage >= 5 ? 0 : 40,
          x: "-50%",
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 w-[28vw] max-w-[450px] z-0 pointer-events-none will-change-transform"
      >
        <img
          src={portrait}
          alt="Janssen Sombrio"
          className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
        />
      </motion.div>

      {/* 3. ATMOSPHERIC BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-[260px] bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* 4. LARGE TYPOGRAPHY BACKGROUND (NAME TEXT) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: stage >= 4 ? 1 : 0,
          y: stage >= 4 ? 0 : 40,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[6%] inset-x-0 flex flex-col items-center z-20 pointer-events-none"
      >
        <img
          src={nameText}
          alt="Janssen Sombrio"
          className="w-[90vw] max-w-[1800px] object-contain"
        />
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{
            opacity: stage >= 4 ? 0.8 : 0,
            letterSpacing: stage >= 4 ? "0.25em" : "0.1em",
          }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white/80 text-xs md:text-sm font-medium uppercase mt-1 drop-shadow-md"
        >
          UI/UX Designer • Front-end Developer
        </motion.p>
      </motion.div>

      {/* 5. FOREGROUND CONTENT GRID */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{
          opacity: stage >= 6 ? 1 : 0,
          y: stage >= 6 ? 0 : 32,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-4"
      >
        {/* Left Column */}
        <div className="max-w-md text-white">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: stage >= 6 ? 1 : 0, x: stage >= 6 ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-[2.75rem] font-bold leading-tight mb-3"
          >
            UI/UX Designer &<br />
            Front-end Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: stage >= 6 ? 1 : 0, x: stage >= 6 ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-base md:text-lg mb-6"
          >
            Intuitive designs that are not complicated.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#e5e7eb" }}
            whileTap={{ scale: 0.96 }}
            className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg cursor-pointer"
          >
            Case Studies ↗
          </motion.button>
        </div>

        {/* Right Column */}
        <div className="max-w-md text-left md:text-right text-white flex flex-col items-start md:items-end">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: stage >= 6 ? 1 : 0, x: stage >= 6 ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed drop-shadow-sm"
          >
            Hi, I'm Janssen! — a UI/UX Designer and Front-End Developer focused on
            creating clean, intuitive web experiences.
          </motion.p>

          {/* Social / External Action Chips */}
          <div className="flex flex-wrap justify-start md:justify-end gap-3">
            {chipLinks.map((chip, idx) => (
              <motion.a
                key={chip.label}
                href={chip.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{
                  opacity: stage >= 6 ? 1 : 0,
                  y: stage >= 6 ? 0 : 12,
                }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#000000",
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/50 rounded-full px-5 py-2 text-xs md:text-sm backdrop-blur-sm transition-colors text-white"
              >
                {chip.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}