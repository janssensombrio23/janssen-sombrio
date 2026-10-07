import React, { useEffect, useRef, useState } from "react";

import bg1 from "../assets/home hero images/BG 1.png";
import bg2 from "../assets/home hero images/BG 2.png";
import bg3 from "../assets/home hero images/BG 3.png";
import portrait from "../assets/home hero images/Janssen PNG.png";
import nameText from "../assets/home hero images/Janssen Sombrio Text.png";
import jsLogo from "../assets/home hero images/JS LOGO.png";

export default function Hero() {
  const [stage, setStage] = useState(0);

  const portraitRef = useRef(null);

  // Cursor movement
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  /*
  ============================================================
  ANIMATION SEQUENCE
  ============================================================

  0  → Initial state
  1  → Background 2
  2  → Background 3
  3  → Logo + Let's Talk
  4  → Giant name
  5  → Portrait
  6  → Hero content
  ============================================================
  */

  useEffect(() => {
    const timers = [
      // Background transition
      setTimeout(() => setStage(1), 500),

      // Second background transition
      setTimeout(() => setStage(2), 1100),

      // Navbar appears separately at around 2400ms.
      // Header appears shortly AFTER navbar.
      setTimeout(() => setStage(3), 3200),

      // Giant name
      setTimeout(() => setStage(4), 3800),

      // Portrait
      setTimeout(() => setStage(5), 4400),

      // Hero content
      setTimeout(() => setStage(6), 5100),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  /*
  ============================================================
  SMOOTH PORTRAIT MOVEMENT
  ============================================================
  */

  useEffect(() => {
    const animatePortrait = () => {
      const current = currentOffset.current;
      const target = targetOffset.current;

      // Smooth damping
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      if (portraitRef.current) {
        portraitRef.current.style.transform = `
          translate3d(
            calc(-50% + ${current.x}px),
            ${current.y}px,
            0
          )
        `;
      }

      animationFrame.current =
        requestAnimationFrame(animatePortrait);
    };

    animationFrame.current =
      requestAnimationFrame(animatePortrait);

    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  /*
  ============================================================
  CURSOR INTERACTION
  ============================================================
  */

  const handleMouseMove = (e) => {
    if (!portraitRef.current || stage < 5) return;

    const rect =
      portraitRef.current.getBoundingClientRect();

    const centerX =
      rect.left + rect.width / 2;

    const centerY =
      rect.top + rect.height / 2;

    const distX =
      e.clientX - centerX;

    const distY =
      e.clientY - centerY;

    const distance =
      Math.sqrt(
        distX * distX +
        distY * distY
      );

    const interactionRadius = 500;

    // Prevent division by zero
    if (
      distance > 0 &&
      distance < interactionRadius
    ) {
      const force =
        (1 - distance / interactionRadius) * 10;

      targetOffset.current = {
        x: -(distX / distance) * force,
        y: -(distY / distance) * force,
      };
    } else {
      targetOffset.current = {
        x: 0,
        y: 0,
      };
    }
  };

  const handleMouseLeave = () => {
    targetOffset.current = {
      x: 0,
      y: 0,
    };
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        isolate

        w-full
        h-screen
        min-h-[800px]

        overflow-hidden

        flex
        flex-col
        items-center

        pt-[38px]
        pb-[40px]
        px-[48px]

        bg-[#05030a]

        font-['Clarity_City','Inter',sans-serif]
      "
    >

      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      {/* Background 1 */}
      <div
        className="
          absolute
          inset-0

          bg-cover
          bg-center

          blur-[6px]
          brightness-75
          scale-105

          -z-30

          opacity-100

          transition-opacity
          duration-[1400ms]
          ease-out
        "
        style={{
          backgroundImage: `url("${bg1}")`,
        }}
      />

      {/* Background 2 */}
      <div
        className={`
          absolute
          inset-0

          bg-cover
          bg-center

          blur-[6px]
          brightness-75
          scale-105

          -z-30

          transition-opacity
          duration-[1400ms]
          ease-out

          ${
            stage >= 1
              ? "opacity-100"
              : "opacity-0"
          }
        `}
        style={{
          backgroundImage: `url("${bg2}")`,
        }}
      />

      {/* Background 3 */}
      <div
        className={`
          absolute
          inset-0

          bg-cover
          bg-center

          blur-[6px]
          brightness-75
          scale-105

          -z-30

          transition-opacity
          duration-[1400ms]
          ease-out

          ${
            stage >= 2
              ? "opacity-100"
              : "opacity-0"
          }
        `}
        style={{
          backgroundImage: `url("${bg3}")`,
        }}
      />


      {/* ========================================================
          LOGO + LET'S TALK HEADER
          
          Appears AFTER the separate Navbar.
      ======================================================== */}

      <header
        className={`
          relative

          w-full
          max-w-[1440px]
          h-[64px]

          flex
          justify-between
          items-center

          z-40

          transition-all
          duration-[1100ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            stage >= 3
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6"
          }
        `}
      >

        {/* ======================================================
            LOGO
        ====================================================== */}

        <div
          className="
            cursor-pointer

            flex
            items-center

            h-[64px]

            transition-transform
            duration-300

            hover:scale-105
          "
        >
          <img
            src={jsLogo}
            alt="JS Logo"
            className="
              h-[78px]
              w-auto
              object-contain
            "
          />
        </div>


        {/* ======================================================
            LET'S TALK BUTTON
        ====================================================== */}

        <button
          className="
            w-[138.45px]
            h-[47.9px]

            bg-white

            border-[1.1px]
            border-white

            shadow-[0px_0px_16px_rgba(0,0,0,0.16)]

            rounded-[29.69px]

            flex
            justify-center
            items-center

            gap-[12.85px]

            px-[22px]

            transition-all
            duration-300

            hover:bg-gray-100
            hover:scale-[1.03]
          "
        >
          <span
            className="
              font-medium

              text-[15.4px]
              leading-[20px]

              text-black
            "
          >
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
        </button>

      </header>


      {/* ========================================================
          PORTRAIT
      ======================================================== */}

      <div
        ref={portraitRef}
        className={`
          absolute

          bottom-0
          left-1/2

          w-[28vw]
          max-w-[450px]

          z-0

          pointer-events-none

          will-change-transform

          transition-opacity
          duration-[1200ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            stage >= 5
              ? "opacity-100"
              : "opacity-0"
          }
        `}
        style={{
          transform:
            "translate3d(-50%, 0, 0)",
        }}
      >
        <img
          src={portrait}
          alt="Janssen Sombrio"
          className="
            w-full
            h-auto

            object-contain
            object-bottom

            drop-shadow-2xl
          "
        />
      </div>


      {/* ========================================================
          BOTTOM GRADIENT
      ======================================================== */}

      <div
        className="
          absolute

          bottom-0
          left-0

          w-full
          h-[242px]

          bg-gradient-to-b
          from-transparent
          to-[rgba(0,0,0,0.88)]

          z-10

          pointer-events-none
        "
      />


      {/* ========================================================
          GIANT NAME
      ======================================================== */}

      <div
        className={`
          absolute

          bottom-[6%]

          w-full

          flex
          flex-col
          items-center

          z-20

          pointer-events-none

          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            stage >= 4
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >

        <img
          src={nameText}
          alt="Janssen Sombrio"
          className="
            w-[110vw]
            object-contain
          "
        />

        <p
          className="
            text-white/80

            text-xs
            md:text-sm

            font-medium

            tracking-[0.25em]

            uppercase

            mt-1

            drop-shadow-md
          "
        >
          UI/UX Designer • Front-end Developer
        </p>

      </div>


      {/* ========================================================
          FOREGROUND CONTENT
      ======================================================== */}

      <div
        className={`
          relative

          z-30

          w-full
          max-w-[1440px]

          flex
          justify-between
          items-center

          mt-[8vh]

          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            stage >= 6
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
      >

        {/* ======================================================
            LEFT SIDE
        ====================================================== */}

        <div
          className="
            max-w-md
            text-white
          "
        >

          <h1
            className="
              text-3xl
              md:text-[2.75rem]

              font-bold
              leading-tight

              mb-3
            "
          >
            UI/UX Designer &
            <br />
            Front-end Developer
          </h1>

          <p
            className="
              text-gray-200

              text-base
              md:text-lg

              mb-6
            "
          >
            Intuitive designs that are not complicated.
          </p>

          <button
            className="
              bg-white
              text-black

              px-6
              py-2.5

              rounded-full

              font-medium
              text-sm

              flex
              items-center
              gap-2

              transition-all
              duration-300

              hover:bg-gray-200
              hover:scale-[1.03]
            "
          >
            Case Studies ↗
          </button>

        </div>


        {/* ======================================================
            RIGHT SIDE
        ====================================================== */}

        <div
          className="
            max-w-md

            text-right
            text-white

            flex
            flex-col
            items-end
          "
        >

          <p
            className="
              text-gray-200

              text-sm
              md:text-base

              mb-6

              leading-relaxed

              drop-shadow-sm
            "
          >
            Hi, I'm Janssen! — a UI/UX Designer and
            Front-End Developer focused on creating
            clean, intuitive web experiences.
            Transforming complex ideas into simple,
            accessible interfaces backed by responsive,
            production-ready code.
          </p>


          {/* ====================================================
              LINKS
          ==================================================== */}

          <div
            className="
              flex
              flex-wrap
              justify-end
              gap-3
            "
          >

            <a
              href="#"
              className="
                border
                border-white/50

                rounded-full

                px-5
                py-2

                text-xs
                md:text-sm

                hover:bg-white
                hover:text-black

                transition-all
                duration-300

                flex
                items-center
                gap-2

                backdrop-blur-sm
              "
            >
              Figma
            </a>

            <a
              href="#"
              className="
                border
                border-white/50

                rounded-full

                px-5
                py-2

                text-xs
                md:text-sm

                hover:bg-white
                hover:text-black

                transition-all
                duration-300

                flex
                items-center
                gap-2

                backdrop-blur-sm
              "
            >
              Github
            </a>

            <a
              href="#"
              className="
                border
                border-white/50

                rounded-full

                px-5
                py-2

                text-xs
                md:text-sm

                hover:bg-white
                hover:text-black

                transition-all
                duration-300

                flex
                items-center
                gap-2

                backdrop-blur-sm
              "
            >
              Download CV ↓
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}