import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import navFrame from "../assets/home hero assets/Nav Frame.svg";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [showNav, setShowNav] = useState(false);
  const links = ["Home", "Works", "About", "Contact"];

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: showNav ? 0 : "-100%",
        opacity: showNav ? 1 : 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center"
    >
      {/* SVG Nav Frame Container */}
      <div
        className="relative w-full aspect-[1440/84] flex items-center justify-center bg-no-repeat bg-top bg-contain pt-[0px] pb-[48px]"
        style={{ backgroundImage: `url("${navFrame}")` }}
      >
        {/* Navigation Links */}
        <nav className="flex gap-8 items-center z-10 -mb-4">
          {links.map((label) => {
            const isActive = label === active;
            return (
              <motion.a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setActive(label)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative py-1 text-black no-underline font-['Clarity_City',_'Inter',_sans-serif] text-[17px] transition-colors duration-200 hover:text-gray-600 ${isActive ? "font-bold" : "font-medium"
                  }`}
              >
                {label}

                {/* Animated Active Indicator Pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black rounded-full"
                  />
                )}
              </motion.a>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}