import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import Starburst from './Starburst';

export default function Navbar({ name, onOpenResume, onHomeClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Focus & Skills', href: '#skills' },
    { label: 'UI Specimen', href: '#specimen' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    if (onHomeClick) onHomeClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-6 sm:top-8 inset-x-0 z-40 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto rounded-full px-3.5 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between border border-white/[0.15] backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300">
        
        {/* Brand Name / Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            if (onHomeClick) {
              e.preventDefault();
              onHomeClick();
            }
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#8b5cf6] group-hover:scale-110 transition-transform">
            <Starburst className="w-4 h-4 text-[#8b5cf6]" spin={true} />
          </div>
          <span className="font-display font-medium text-base sm:text-lg tracking-tight text-white group-hover:text-[#a855f7] transition-colors">
            {name}
            <span className="text-[#8b5cf6] ml-0.5">.</span>
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="px-3.5 py-1.5 text-xs font-display font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.08] hover:text-[#a855f7] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-bold bg-white text-[#05030a] hover:bg-slate-100 hover:shadow-lg hover:shadow-purple-500/20 transition-all shadow-md active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-bold bg-white text-[#05030a]"
          >
            <Download className="w-3 h-3 text-[#7c3aed]" />
            <span>CV</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/5 border border-white/15 text-white/80 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Floating Card) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 p-3 rounded-2xl border border-white/15 bg-[#080512]/95 backdrop-blur-2xl shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-display font-medium text-slate-300 hover:text-white hover:bg-white/10 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}