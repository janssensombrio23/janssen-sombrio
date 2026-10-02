import React from 'react';

export default function Starburst({ className = "w-6 h-6", spin = false }) {
  // 16 radiating rays matching the Host Grotesk reference design
  const rays = Array.from({ length: 16 }, (_, i) => i * 22.5);

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${spin ? 'animate-spin-slow' : ''}`}
      aria-hidden="true"
    >
      {rays.map((angle, index) => (
        <line
          key={index}
          x1="50"
          y1="50"
          x2="50"
          y2="8"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}
