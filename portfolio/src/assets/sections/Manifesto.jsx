import React from "react";
import { motion } from "framer-motion";

export default function Manifesto() {
  // Container stagger variant for children elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Standard scroll fade-up variant
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="sticky top-0 h-screen min-h-[850px] w-full bg-black flex flex-col justify-center items-center py-[48px] px-[32px] overflow-hidden isolate z-10">

      {/* Top Gradient Blend overlay */}
      <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-b from-[#05030a] via-black/80 to-transparent z-10 pointer-events-none" />

      {/* 1. Graph Paper Background (80px Grid Lines) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.5) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1.5px, transparent 1.5px)
            `,
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* 2. Radial Center Highlight Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.84) 40%, rgba(255, 255, 255, 0.35) 70%, rgba(255, 255, 255, 0) 100%)"
        }}
      />

      {/* 3. Scaled-Up Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-20 w-full max-w-[1150px] flex flex-col justify-between items-center gap-[44px]"
      >

        {/* Main Headline */}
        <motion.h2
          variants={itemVariants}
          className="w-full text-center font-['Montserrat',_sans-serif] font-medium text-[38px] md:text-[56px] leading-[52px] md:leading-[76px] text-white"
        >
          Focused on creating clean, intuitive web experiences. Bridges the gap between design and code.
        </motion.h2>

        {/* Sub-description */}
        <motion.p
          variants={itemVariants}
          className="w-full max-w-[720px] text-center font-['Clarity_City',_'Inter',_sans-serif] font-medium text-[18px] leading-[26px] text-white/64"
        >
          Operating at the intersection of UI/UX design and front-end development, one transforms complex ideas into simple, accessible interfaces backed by responsive, production-ready code.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-[16px]"
        >
          {/* Figma Button */}
          <motion.a
            whileHover={{ scale: 1.04, backgroundColor: "#ffffff", color: "#000000", y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="#figma"
            className="h-[54px] px-[26px] border-[1.5px] border-white rounded-[32px] flex items-center gap-[14px] text-white font-['Clarity_City',_sans-serif] font-medium text-[16px] transition-colors duration-300 shadow-[0_0_16px_rgba(0,0,0,0.08)]"
          >
            <span>Figma</span>
            <svg width="14" height="21" viewBox="0 0 12 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18C4.65 18 6 16.65 6 15V12H3C1.35 12 0 13.35 0 15C0 16.65 1.35 18 3 18ZM0 9C0 7.35 1.35 6 3 6H6V12H3C1.35 12 0 10.65 0 9ZM0 3C0 1.35 1.35 0 3 0H6V6H3C1.35 6 0 4.65 0 3ZM6 0H9C10.65 0 12 1.35 12 3C12 4.65 10.65 6 9 6H6V0ZM12 9C12 10.65 10.65 12 9 12C7.35 12 6 10.65 6 9C6 7.35 7.35 6 9 6C10.65 6 12 7.35 12 9Z" />
            </svg>
          </motion.a>

          {/* GitHub Button */}
          <motion.a
            whileHover={{ scale: 1.04, backgroundColor: "#ffffff", color: "#000000", y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="#github"
            className="h-[54px] px-[26px] border-[1.5px] border-white rounded-[32px] flex items-center gap-[14px] text-white font-['Clarity_City',_sans-serif] font-medium text-[16px] transition-colors duration-300 shadow-[0_0_16px_rgba(0,0,0,0.08)]"
          >
            <span>Github</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </motion.a>

          {/* Download CV Button */}
          <motion.a
            whileHover={{ scale: 1.04, backgroundColor: "#ffffff", color: "#000000", y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="#download-cv"
            className="h-[54px] px-[26px] border-[1.5px] border-white rounded-[32px] flex items-center gap-[14px] text-white font-['Clarity_City',_sans-serif] font-medium text-[16px] transition-colors duration-300 shadow-[0_0_16px_rgba(0,0,0,0.08)]"
          >
            <span>Download CV</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scaled Key Metrics / Stats Row */}
        <motion.div
          variants={itemVariants}
          className="w-full flex justify-between items-center mt-4"
        >
          <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col items-center justify-center cursor-default"
          >
            <span className="font-['Montserrat',_sans-serif] font-bold text-[54px] leading-[72px] text-white">
              2026
            </span>
            <span className="font-['Clarity_City',_sans-serif] font-medium text-[18px] leading-[24px] text-white/64 uppercase tracking-wider">
              EXPECTED GRADUATION
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col items-center justify-center cursor-default"
          >
            <span className="font-['Montserrat',_sans-serif] font-bold text-[54px] leading-[72px] text-white">
              BSIT
            </span>
            <span className="font-['Clarity_City',_sans-serif] font-medium text-[18px] leading-[24px] text-white/64 uppercase tracking-wider">
              MAJORING IN WMAD (BULSU)
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col items-center justify-center cursor-default"
          >
            <span className="font-['Montserrat',_sans-serif] font-bold text-[54px] leading-[72px] text-white">
              BULACAN
            </span>
            <span className="font-['Clarity_City',_sans-serif] font-medium text-[18px] leading-[24px] text-white/64 uppercase tracking-wider">
              OPEN TO ONSITE IN MANILA
            </span>
          </motion.div>
        </motion.div>

      </motion.div>

    </section>
  );
}