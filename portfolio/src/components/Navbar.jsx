import React, { useState, useEffect } from "react";
import navFrame from "../assets/home hero images/Nav Frame.svg";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [showNav, setShowNav] = useState(false);
  const links = ["Home", "Works", "About", "Contact"];

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
    >
      {/* SVG Nav Frame Container */}
      <div
        className="relative w-full aspect-[1440/84] flex items-center justify-center bg-no-repeat bg-top bg-contain pt-[0px] pb-[48px]"
        style={{ backgroundImage: `url("${navFrame}")` }}
      >
        {/* Navigation Links */}
        <nav className="flex gap-16 items-center z-10 -mb-4">
          {links.map((label) => {
            const isActive = label === active;
            return (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setActive(label)}
                className={`relative py-1 text-black no-underline font-['Clarity_City',_'Inter',_sans-serif] text-[17px] transition-all duration-300 hover:text-gray-600 ${isActive ? "font-bold" : "font-medium"
                  }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-black rounded-full transition-all duration-300 ease-out ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}