import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jsLogo from "../assets/home hero assets/JS LOGO.png";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [showNav, setShowNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navRef = useRef(null);
  const hoverTimer = useRef(null);
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const links = ["Home", "Works", "About", "Contact"];

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Smooth hover handlers with grace delay
  const handleMouseEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimer.current = setTimeout(() => {
      setIsHovered(false);
    }, 220);
  };

  // Sync active nav item with page scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 120) {
        setActive("Contact");
        return;
      }

      if (scrollY < 260) {
        setActive("Home");
        return;
      }

      const worksEl = document.getElementById("works");
      const aboutEl = document.getElementById("about");

      if (worksEl) {
        const worksRect = worksEl.getBoundingClientRect();
        if (worksRect.top <= 250) {
          setActive("Works");
          return;
        }
      }

      if (aboutEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        if (aboutRect.top <= 250 && aboutRect.bottom > 250) {
          setActive("About");
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Collapse when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsHovered(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Smooth scroll click handler
  const handleNavClick = (e, label) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(label);
    isClickScrolling.current = true;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const targetId = label.toLowerCase();
    const navOffset = 90;

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetId === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementPosition - navOffset),
          behavior: "smooth",
        });
      }
    }

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: showNav ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none select-none"
    >
      {/* Full-Screen Black Device Frame */}
      <div className="fixed inset-0 pointer-events-none z-40 border-[6px] border-black shadow-[0_0_24px_rgba(0,0,0,0.5)]">
        {/* Top-Left Inner Screen Concave Curve */}
        <svg
          className="absolute top-0 left-0 w-8 h-8 pointer-events-none fill-black"
          viewBox="0 0 32 32"
        >
          <path d="M 0 0 L 32 0 C 14 0, 0 14, 0 32 Z" />
        </svg>

        {/* Top-Right Inner Screen Concave Curve */}
        <svg
          className="absolute top-0 right-0 w-8 h-8 pointer-events-none fill-black"
          viewBox="0 0 32 32"
        >
          <path d="M 32 0 L 0 0 C 18 0, 32 14, 32 32 Z" />
        </svg>

        {/* Bottom-Left Inner Screen Concave Curve */}
        <svg
          className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none fill-black"
          viewBox="0 0 32 32"
        >
          <path d="M 0 32 L 32 32 C 14 32, 0 18, 0 0 Z" />
        </svg>

        {/* Bottom-Right Inner Screen Concave Curve */}
        <svg
          className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none fill-black"
          viewBox="0 0 32 32"
        >
          <path d="M 32 32 L 0 32 C 18 32, 32 18, 32 0 Z" />
        </svg>
      </div>

      {/* Main Teardrop Frame Container */}
      <div
        ref={navRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="pointer-events-auto relative flex flex-col items-center cursor-pointer group"
      >
        {/* Dynamic Notch Body - Black Frame */}
        <div
          className={`relative flex items-center bg-black border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.8)] transition-[padding,border-radius] duration-300 ease-out ${isHovered
            ? "px-4 pt-1 pb-2 rounded-b-[24px]"
            : "px-3 pt-1 pb-2.5 rounded-b-[28px]"
            }`}
        >
          {/* SVG Left Concave Flange */}
          <svg
            className="absolute -left-[22px] top-0 w-[23px] h-[22px] pointer-events-none fill-black"
            viewBox="0 0 23 22"
          >
            <path d="M 0 0 C 14 0, 23 6, 23 22 L 23 0 Z" />
          </svg>

          {/* SVG Right Concave Flange */}
          <svg
            className="absolute -right-[22px] top-0 w-[23px] h-[22px] pointer-events-none fill-black"
            viewBox="0 0 23 22"
          >
            <path d="M 23 0 C 9 0, 0 6, 0 22 L 0 0 Z" />
          </svg>

          {/* JS Logo */}
          <div
            onClick={() => setIsHovered((prev) => !prev)}
            className="relative flex items-center justify-center flex-shrink-0 cursor-pointer p-0.5 transition-transform duration-200 active:scale-95 hover:scale-105"
          >
            <img
              src={jsLogo}
              alt="JS Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain select-none pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Ultra-Smooth Hardware-Accelerated Reveal Container via CSS Grid */}
          <div
            className={`grid transition-[grid-template-rows,grid-template-columns] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
              }`}
          >
            <div className="overflow-hidden min-w-0">
              <div
                className={`flex items-center pl-1 transition-all duration-300 ease-out ${isHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-3 pointer-events-none"
                  }`}
              >
                {/* Thin light divider */}
                <div className="w-[1px] h-4 bg-white/20 mx-1.5 flex-shrink-0" />

                {/* Nav Links */}
                <div className="flex items-center gap-1 flex-shrink-0 pr-1">
                  {links.map((label) => {
                    const isActive = label === active;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={(e) => handleNavClick(e, label)}
                        className={`relative px-3 py-1 rounded-full text-[13px] font-['Clarity_City',_'Inter',_sans-serif] tracking-normal transition-colors duration-150 select-none cursor-pointer whitespace-nowrap outline-none focus:outline-none border-none bg-transparent ${isActive
                          ? "text-black font-semibold"
                          : "text-zinc-400 hover:text-white font-medium"
                          }`}
                      >
                        {/* Active Pill Highlight */}
                        {isActive && (
                          <motion.div
                            layoutId="notchBlackActivePill"
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 35,
                            }}
                            className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(255,255,255,0.2)] -z-0"
                          />
                        )}
                        <span className="relative z-10">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}