import React from 'react';
import Navbar from './components/Navbar';
import Hero from './assets/sections/Hero';
import Manifesto from './assets/sections/Manifesto';
import Works from './assets/sections/Works';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05030a] text-[#f1f5f9] relative selection:bg-[#7c3aed] selection:text-white">

      {/* Fixed Centered Pill Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Smooth Color Transition Bridge (Hero #05030a -> Manifesto #000000) */}
        <div className="relative w-full h-[120px] -mt-[60px] -mb-[60px] z-20 pointer-events-none bg-gradient-to-b from-transparent via-[#05030a]/80 to-[#000000]" />

        {/* Manifesto Section */}
        <Manifesto />

        {/* Works Section */}
        <Works />
      </main>

    </div>
  );
}