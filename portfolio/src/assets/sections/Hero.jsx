import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import bg1 from "../home hero assets/BG 1.png";
import bg2 from "../home hero assets/BG 2.png";
import bg3 from "../home hero assets/BG 3.png";
import portrait from "../home hero assets/Janssen PNG.png";
import nameText from "../home hero assets/Janssen Sombrio Text.png";
import jsLogo from "../home hero assets/JS LOGO.png";

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

  // Shared Spring Transition Config
  const springConfig = { type: "spring", stiffness: 80, damping: 18 };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate w-full h-screen min-h-[800px] overflow-hidden flex flex-col items-center pt-[38px] pb-[40px] px-[48px] bg-[#05030a] font-['Clarity_City','Inter',sans-serif]"
    >
      {/* ========================================================
          BACKGROUND CROSSFADE
      ======================================================== */}
      <motion.div
        initial={{ opacity: 1 }}
        className="absolute inset-0 bg-cover bg-center blur-[6px] brightness-75 scale-105 -z-30"
        style={{ backgroundImage: `url("${bg1}")` }}
      />

      <motion.div
        animate={{ opacity: stage >= 1 ? 1 : 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center blur-[6px] brightness-75 scale-105 -z-30"
        style={{ backgroundImage: `url("${bg2}")` }}
      />

      <motion.div
        animate={{ opacity: stage >= 2 ? 1 : 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center blur-[6px] brightness-75 scale-105 -z-30"
        style={{ backgroundImage: `url("${bg3}")` }}
      />

      {/* ========================================================
          HEADER (LOGO & LET'S TALK)
      ======================================================== */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{
          opacity: stage >= 3 ? 1 : 0,
          y: stage >= 3 ? 0 : -24,
        }}
        transition={springConfig}
        className="relative w-full max-w-[1440px] h-[64px] flex justify-between items-center z-40"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex items-center h-[64px]"
        >
          <img
            src={jsLogo}
            alt="JS Logo"
            className="h-[78px] w-auto object-contain"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.04, backgroundColor: "#f3f4f6" }}
          whileTap={{ scale: 0.96 }}
          className="w-[138.45px] h-[47.9px] bg-white border-[1.1px] border-white shadow-[0px_0px_16px_rgba(0,0,0,0.16)] rounded-[29.69px] flex justify-center items-center gap-[12.85px] px-[22px]"
        >
          <span className="font-medium text-[15.4px] leading-[20px] text-black">
            Let's Talk
          </span>
          <svg
            width="8.4"
            height="8.4"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L9 1M9 1H1M9 1V9"
              stroke="black"
              strokeWidth="1.64"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.header>

      {/* ========================================================
              PORTRAIT
          ======================================================== */}
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

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-[242px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.88)] z-10 pointer-events-none" />

      {/* ========================================================
          GIANT NAME
      ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: stage >= 4 ? 1 : 0,
          y: stage >= 4 ? 0 : 40,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[6%] w-full flex flex-col items-center z-20 pointer-events-none"
      >
        <img
          src={nameText}
          alt="Janssen Sombrio"
          className="w-[110vw] object-contain"
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

      {/* ========================================================
          FOREGROUND CONTENT
      ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{
          opacity: stage >= 6 ? 1 : 0,
          y: stage >= 6 ? 0 : 32,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 w-full max-w-[1440px] flex justify-between items-center mt-[8vh]"
      >
        {/* LEFT SIDE */}
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
            className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg"
          >
            Case Studies ↗
          </motion.button>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-md text-right text-white flex flex-col items-end">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: stage >= 6 ? 1 : 0, x: stage >= 6 ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed drop-shadow-sm"
          >
            Hi, I'm Janssen! — a UI/UX Designer and Front-End Developer focused on
            creating clean, intuitive web experiences. Transforming complex ideas
            into simple, accessible interfaces backed by responsive,
            production-ready code.
          </motion.p>

          {/* CHIP LINKS */}
          <div className="flex flex-wrap justify-end gap-3">
            {["Figma", "Github", "Download CV ↓"].map((link, idx) => (
              <motion.a
                key={link}
                href="#"
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
                className="border border-white/50 rounded-full px-5 py-2 text-xs md:text-sm backdrop-blur-sm transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}