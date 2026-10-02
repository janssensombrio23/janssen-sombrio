// src/data/projects.js

export const personalInfo = {
  name: "Janssen Sombrio",
  role: "UI/UX Designer & Front-end developer",
  subtitle: "Web & Mobile Applications Development (BSIT WMAD)",
  bio: "Crafting intuitive digital experiences through rigorous user research, wireframing, high-fidelity design systems, and responsive web & mobile engineering.",
  location: "Bulacan, Philippines",
  status: "Available for Q3/Q4 2026 Roles & Projects",
  email: "janssensombrio@gmail.com",
  github: "https://github.com/janssensombrio",
  linkedin: "https://linkedin.com/in/janssensombrio",
  figma: "https://figma.com/@janssensombrio"
};

export const projectsData = [
  {
    id: "gpts-guidance-mis",
    title: "GPTS: Guidance Office MIS",
    subtitle: "Guidance for Parents, Teachers, and Students",
    category: "EdTech & Management Information System",
    track: "ui-ux",
    type: "Web Portal & Multi-Role MIS",
    year: "2025",
    tags: ["Figma", "EdTech MIS", "Multi-User Flows", "Design Systems", "WCAG AA"],
    shortDescription: "A centralized management information system connecting students, teachers, parents, and guidance counselors into a proactive support network.",
    coverImage: null, // TODO: replace with real screenshot path when ready
    client: "School Guidance Office",
    role: "Lead UI/UX Designer (Solo Redesign)",
    tools: ["Figma"],
    typography: "SF Pro (Display & Headlines) + Inter (Body & Data Tables)",
    stats: [
      { label: "Target Ecosystem", value: "4 Roles" },
      { label: "Contrast Standard", value: "WCAG AA" },
      { label: "Sectioning", value: "Algorithmic" }
    ],
    caseStudy: {
      client: "School Guidance Office",
      role: "Lead UI/UX Designer (Solo Redesign)",
      timeline: "Comprehensive Redesign",
      tools: ["Figma"],
      typography: {
        display: "SF Pro (Display & Headlines)",
        body: "Inter (Body & Data Tables)"
      },
      deliverables: [
        "High-Fidelity UI Design",
        "Multi-User Flow Specs",
        "Design System & Token Sheet",
        "Interactive Sectioning Prototype"
      ],
      heroShowcase: {
        desktop: "Guidance Counselor Dashboard showing high-level stats (active cases, pending appointment requests, upcoming sectioning status).",
        mobile: "Student/Parent Portal showing an upcoming appointment confirmation card."
      },
      problem: "School guidance offices often rely on fragmented channels—paper forms, disparate grade spreadsheets, and unrecorded messaging.",
      frictionPoints: [
        {
          title: "Information Silos",
          desc: "Teachers lacked a direct, confidential way to flag behavioral concerns alongside academic marks."
        },
        {
          title: "Manual Sectioning Overhead",
          desc: "Grouping students into balanced classes required weeks of cross-referencing grades and behavioral notes manually to avoid classroom conflicts."
        },
        {
          title: "Communication Gaps",
          desc: "Parents were often the last to know when a student's performance dropped, while students lacked a private, low-friction channel to request counseling."
        }
      ],
      solution: "GPTS unifies all four user roles (Teachers, Counselors, Parents, Students) into an integrated ecosystem, balancing real-time data transparency with strict student privacy protocols.",
      workflow: "Teacher Entry → Counselor Flag → Parent Notification → Student Booking",
      coreFeaturesTitle: "Data-Driven Student Sectioning",
      coreFeatures: [
        {
          title: "Algorithmic Sorting",
          desc: "Guidance counselors filter and group students using weighted parameters (academic performance averages paired with behavior risk indicators)."
        },
        {
          title: "Conflict Prevention",
          desc: "Automated visual status tags flag potential classroom friction before section lists are finalized."
        },
        {
          title: "Batch Placement",
          desc: "Counselor-driven UI controls allow real-time balancing of class sizes and academic distributions."
        }
      ],
      designSystem: {
        typography: "SF Pro brings modern visual hierarchy to dashboard headers, while Inter ensures high legibility across dense data tables, student logs, and mobile feeds.",
        accessibility: "Color tokens guarantee minimum contrast of 4.5:1 for body text and 3:1 for UI components. Primary slate (#1E293B) and deep teal (#0F766E) deliver a calm, trustworthy aesthetic.",
        roles: [
          { role: "Counselor View", detail: "High-density data tables, analytics, and private appointment logs." },
          { role: "Teacher View", detail: "Quick-entry behavioral logs and class grade submissions." },
          { role: "Student & Parent View", detail: "Clean, simplified feed featuring office announcements, scheduled appointments, and academic progress cards." }
        ]
      },
      highlights: [
        {
          card: "Card A — Confidential Booking",
          title: "Student Appointment Modal",
          desc: "Close-up UI card of the student interface showing a private, low-friction appointment booking modal with counselor scheduling."
        },
        {
          card: "Card B — Teacher Quick-Log",
          title: "Slide-Over Behavioral Drawer",
          desc: "Slide-over drawer interface showing how a teacher submits an academic or behavioral note confidentially."
        },
        {
          card: "Card C — Parent Mobile View",
          title: "Parent Progress & Feed",
          desc: "Compact mobile screen showing real-time grade updates, guidance office announcements, and scheduled consultations."
        }
      ],
      outcomes: [
        "Streamlined administrative workflows, significantly reducing manual student sectioning preparation time",
        "Enabled counselors and parents to spot academic drops or behavioral shifts early through synchronized teacher logs",
        "Unified 4 distinct user roles under a single WCAG AA compliant design system"
      ],
      nextSteps: "Designing an offline-first SMS notification system for parents without smartphone access, alongside automated section-balancing recommendations for V2."
    }
  },
  {
    id: "arbee-riverview-hospitality",
    title: "ARBEE: The Riverview",
    subtitle: "Leisure & Hospitality Management System",
    category: "Mobile Product & Hospitality Management",
    track: "ui-ux",
    type: "Guest Mobile Experience",
    year: "2025",
    tags: ["Figma", "Mobile UI", "Hospitality", "QR Check-in", "Payment Gateway"],
    shortDescription: "A mobile-first guest reservation and facility management platform designed to replace manual social media inquiries with seamless booking, digital verification, and real-time support.",
    coverImage: null, // TODO: replace with real screenshot path when ready
    client: "The Riverview (Leisure & Hospitality Hub)",
    role: "Lead UI/UX Designer (Guest Mobile Experience)",
    tools: ["Figma"],
    typography: "Poppins (Headlines & UI Labels) + Inter (Body & Data Tags)",
    stats: [
      { label: "Booking Steps", value: "4-Step Flow" },
      { label: "Payment Support", value: "GCash/Maya" },
      { label: "Check-in Method", value: "QR Code" }
    ],
    caseStudy: {
      client: "The Riverview (Leisure & Hospitality Hub)",
      role: "Lead UI/UX Designer (Guest Mobile Experience)",
      timeline: "Mobile Experience Architecture",
      tools: ["Figma"],
      typography: {
        display: "Poppins (Headlines & UI Labels)",
        body: "Inter (Body & Data Tags)"
      },
      deliverables: [
        "High-Fidelity Guest Mobile App UI",
        "End-to-End Reservation Specs",
        "Design System & Token Sheet",
        "QR Code Verification Flow"
      ],
      heroShowcase: {
        desktop: "Home & Explore Dashboard showing personalized guest greetings ('Welcome back, Jennie!'), quick-category access badges (Billiards, Basketball, Events, KTV, Lost & Found), and active promo banners.",
        mobile: "Active Reservation Summary Modal featuring an itemized pricing breakdown, GCash/Maya/PayPal down-payment status, and an automated check-in QR Code."
      },
      problem: "The Riverview—a multi-facility venue offering KTV suites, billiard tables, sports courts, and event spaces—relied entirely on manual Facebook Messenger inquiries to handle guest bookings.",
      frictionPoints: [
        {
          title: "Unstructured Booking Overhead",
          desc: "Managing reservations manually via messaging led to long customer response times, error-prone tracking, and potential double-booking conflicts."
        },
        {
          title: "Verification & Check-in Bottlenecks",
          desc: "On-site clerks lacked a fast, secure method to confirm online down payments and verify guest identity upon arrival."
        },
        {
          title: "Misplaced Items Friction",
          desc: "Guests frequently left belongings behind during group events, requiring unstructured manual messaging and staff coordination to resolve."
        }
      ],
      solution: "ARBEE unifies the guest journey into an intuitive mobile app—digitizing multi-facility reservations, integrating automated down-payments with QR verification, and embedding a dedicated Lost & Found support module.",
      workflow: "Guest Exploration → Multi-Option Reservation → Integrated Payment Gateway → QR Code Check-in & Support",
      coreFeaturesTitle: "Multi-Facility Reservation & Payment Flow",
      coreFeatures: [
        {
          title: "Categorized Facility Exploration",
          desc: "Guests filter amenities by activity (Solo Regular Billiards, VIP KTV Rooms, Indoor/Outdoor Courts) with real-time rate cards and capacity specs."
        },
        {
          title: "Timeslot & Duration Control",
          desc: "Flexible date pickers paired with custom hourly duration controls."
        },
        {
          title: "Integrated Down-Payment Gateway",
          desc: "Built-in support for GCash, Maya, and PayPal with automated 50% down-payment calculation."
        },
        {
          title: "QR Reservation Tracker",
          desc: "Instant booking confirmation with a generated QR code for fast, scan-and-go check-in at the front desk."
        }
      ],
      designSystem: {
        typography: "Poppins delivers a modern, high-end resort feel to app titles and category buttons, while Inter provides high legibility across dense pricing cards, timestamp logs, and profile details.",
        accessibility: "Color tokens guarantee minimum contrast of 4.5:1 for body text and 3:1 for active UI components. Deep navy teal (#004B6E) paired with crisp white cards (#FFFFFF) and warm status accents delivers an inviting, professional look.",
        roles: [
          { role: "Secure Guest Verification", detail: "Step-by-step progress bars guiding users through phone/email OTP verification and valid ID photo uploads." },
          { role: "Categorized Status Badges", detail: "Clear visual indicators for booking states (Pending, Confirmed, Ongoing, Unclaimed)." }
        ]
      },
      highlights: [
        {
          card: "Card A — Lost & Found Support",
          title: "Dedicated Community Feed",
          desc: "Displays found items (e.g., Brown Wallet) complete with photo galleries, 'Found At' location tags, date/time logs, and a direct 'Claim Item' CTA."
        },
        {
          card: "Card B — Active Tracker & History",
          title: "Tabbed Guest Dashboard",
          desc: "Showcases confirmed bookings, real-time status updates, receipt downloads, and direct personnel contact options."
        }
      ],
      outcomes: [
        "Consolidating customer logs and payment records into a single interface significantly reduced manual tracking errors and prevented facility overuse during peak hours",
        "Evaluation feedback from owners and staff highlighted that the interface 'feels organized and looks familiar even for first-time users'",
        "Eliminated double-booking conflicts by automating real-time timeslot locks upon down-payment"
      ],
      nextSteps: "Designing an automated notification banner for overdue room checkouts and an offline view mode for guest reservation receipts (V2)."
    }
  },
  {
    id: "barrio-secretary-workspace",
    title: "Barrio: Secretary Workspace",
    subtitle: "Information and Service Management System",
    category: "Civic GovTech & Administrative Portal",
    track: "front-end",
    type: "Desktop Admin Workspace",
    year: "2025",
    tags: ["React", "GovTech UI", "Clearance Engine", "Census Data", "KP Blotter"],
    shortDescription: "A centralized administrative desktop portal empowering barangay secretaries to manage resident records, automate document issuance, track Katarungang Pambarangay cases, and streamline LGU operations.",
    coverImage: null, // TODO: replace with real screenshot path when ready
    client: "Barangay Caingin LGU & Academic System Analysis & Design Project",
    role: "Front-End Developer & UI/UX Designer",
    tools: ["React", "Tailwind CSS", "Figma"],
    typography: "SF Pro (Display & Headlines) + Inter (Body & Data Tables)",
    stats: [
      { label: "Workspace Layout", value: "Single Screen" },
      { label: "Document Preview", value: "Real-Time PDF" },
      { label: "Mediation Tracking", value: "KP Blotter" }
    ],
    caseStudy: {
      client: "Barangay Caingin LGU & Academic System Analysis & Design Project",
      role: "Front-End Developer & UI/UX Designer",
      timeline: "Administrative Workspace Design",
      tools: ["React", "Tailwind CSS", "Figma"],
      typography: {
        display: "SF Pro (Display & Headlines)",
        body: "Inter (Body & Data Tables)"
      },
      deliverables: [
        "High-Fidelity UI Design",
        "Desktop Admin Specs",
        "Design System & Token Sheet",
        "Live Document Preview Engine Specs"
      ],
      heroShowcase: {
        desktop: "Barangay Secretary Dashboard showing high-level stats (Document Requests Queue, Active KP Cases, Total Residents, and Pick Ups Today).",
        mobile: "A high-contrast document clearance preview card (Certificate of Residency / Indigency) rendering in real time."
      },
      problem: "Local Barangay offices in the Philippines face heavy administrative overhead—relying on physical logbooks, manual resident record cross-checking, and paper-based document issuance.",
      frictionPoints: [
        {
          title: "Information Overload & Manual Records",
          desc: "Secretaries spent significant time manually searching paper records or disconnected spreadsheets to verify resident identity and household data."
        },
        {
          title: "Inefficient Clearance Issuance",
          desc: "Processing certificates (Residency, Indigency, Business Permits) required manual typing of details for every request, creating long wait times and queue bottlenecks."
        },
        {
          title: "Fragmented Blotter & Hearing Tracking",
          desc: "Katarungang Pambarangay (dispute) cases, hearing schedules, and Certificate to File Action (CFA) documents were tracked manually, risking missed mediation sessions and lost documentation."
        }
      ],
      solution: "Barrio unifies barangay operations into an integrated ecosystem. The Secretary Workspace provides high-density data management, automated clearance preview generation, and end-to-end case tracking—balancing rapid data retrieval with clean visual hierarchy.",
      workflow: "Resident Request → Secretary Verification & Record Search → Automated PDF Preview & Payment → Document Pickup & Audit Logging",
      coreFeaturesTitle: "Data-Dense Record & Clearance Issuance Engine",
      coreFeatures: [
        {
          title: "Automated Data Matching",
          desc: "Selecting a verified resident automatically populates official form fields, including reference codes, age, address, and purpose."
        },
        {
          title: "Real-Time Document Preview",
          desc: "A dynamic PDF template renders directly alongside input fields, allowing secretaries to inspect signatures, seals, and formatting before printing or generating."
        },
        {
          title: "Filtered Resident Census",
          desc: "Filterable tables allow administrative staff to query residents by Purok, Age, Civil Status, and Households within seconds."
        }
      ],
      designSystem: {
        typography: "SF Pro brings modern authority to desktop headers and dashboard metrics, while Inter ensures high legibility across dense resident tables, audit logs, and status queues.",
        accessibility: "Color tokens guarantee minimum contrast of 4.5:1 for body text and 3:1 for UI components. Clean administrative slate (#1E293B) paired with high-contrast primary blue (#2563EB) and functional semantic badges (#22C55E Success, #F59E0B Pending, #EF4444 Destructive) deliver a calm, trustworthy civic software aesthetic.",
        roles: [
          { role: "Dashboard View", detail: "Quick-action shortcuts, document request queues, active case widgets, and resident census summaries." },
          { role: "Resident & Household Registry", detail: "High-density data grids with pagination, quick-filters, and inline edit controls." },
          { role: "KP Blotter Tracker", detail: "Dedicated management interface for dispute cases, hearing minutes modals, and CFA queue generation." }
        ]
      },
      highlights: [
        {
          card: "Card A — KP Hearing Minutes Modal",
          title: "Dispute Hearing Interface",
          desc: "Close-up UI modal card showing the hearing record interface with structured toggles for Attendance, Issues Discussed, Proceedings, and Agreements Reached."
        },
        {
          card: "Card B — Data Import & Household Census",
          title: "Batch CSV Import Tool",
          desc: "Desktop view of the drag-and-drop CSV import modal for batch-updating resident data and household records."
        },
        {
          card: "Card C — System Audit Log & Security Trail",
          title: "Municipal Compliance Audit",
          desc: "Compact data table showing timestamped action logs (Approve, Update, Login, Delete) with IP and device tracking for municipal compliance."
        }
      ],
      outcomes: [
        "Streamlined the certificate issuance pipeline to a single workspace screen, significantly reducing processing and wait times for barangay residents",
        "Eliminated manual record loss by digitizing household census records and linking blotter hearing histories directly to resident IDs",
        "Designed high-density administrative desktop views allowing secretaries to manage hundreds of daily records without cognitive fatigue"
      ],
      nextSteps: "Designing a front-end UI design system component library in Figma (auto-layout specs) and implementing a lightweight offline-first local database sync for offices with unstable internet connectivity (V2)."
    }
  },
  {
    id: "ashen-spire-game-ui",
    title: "Ashen Spire",
    subtitle: "2D Dark Fantasy Action-Adventure Mobile Game UI",
    category: "Game UI & Web Landing Page",
    track: "front-end",
    type: "Mobile Game UI & Web",
    year: "2025",
    tags: ["Figma", "Game UI", "Pixel Art", "Touch Controls", "Web Landing Page"],
    shortDescription: "A minimal, atmospheric mobile UI system and web landing page designed to optimize screen real estate, eliminate HUD clutter, and deliver intuitive touch controls for a dark fantasy action-adventure game.",
    coverImage: null, // TODO: replace with real screenshot path when ready
    client: "Personal Mobile Game Development Project",
    role: "Lead UI/UX & Game UI Designer (Solo Concept & Asset Creation)",
    tools: ["Figma"],
    typography: "Gameplay (Display & Headlines) + PlayMeGames (Body & Game UI Labels)",
    stats: [
      { label: "Viewport Unobstructed", value: "80%+" },
      { label: "Pixel Components", value: "Custom Kit" },
      { label: "Contrast Ratio", value: "4.5:1 AA" }
    ],
    caseStudy: {
      client: "Personal Mobile Game Development Project",
      role: "Lead UI/UX & Game UI Designer (Solo Concept & Asset Creation)",
      timeline: "Solo Concept & Asset Creation",
      tools: ["Figma"],
      typography: {
        display: "Gameplay (Display & Headlines)",
        body: "PlayMeGames (Body & Game UI Labels)"
      },
      deliverables: [
        "High-Fidelity Mobile Game UI",
        "Interactive Touch Controls",
        "Custom Pixel UI Asset Sheet",
        "Web Landing Page"
      ],
      heroShowcase: {
        desktop: "Official Ashen Spire promotional website landing page showcasing hero game artwork, story teaser, and download CTAs.",
        mobile: "Ashen Spire Title & Home Screen featuring minimal dark fantasy typography, pixel-art background visuals, and clean primary action buttons ('Start Game')."
      },
      problem: "Mobile action-adventure games often suffer from 'screen sprawl'—overwhelming players with complex HUDs, oversized virtual joysticks, cluttered inventory cards, and unreadable text on smaller screens. The primary design challenge was balancing atmospheric dark fantasy aesthetics with a minimal, unobtrusive mobile interface.",
      frictionPoints: [
        {
          title: "HUD Clutter vs. Immersion",
          desc: "Standard mobile action games cover up to 30% of the active combat viewport with static UI elements, pulling players out of the dark fantasy experience."
        },
        {
          title: "Touch Control Ergonomics",
          desc: "Virtual joysticks and action buttons are frequently misaligned with natural thumb placement or lack clear visual feedback states (focused, pressed, selected)."
        },
        {
          title: "Mobile Typography Legibility",
          desc: "Stylized retro pixel fonts often break at smaller mobile render scales, making game menus and dialog boxes difficult to read."
        }
      ],
      solution: "A minimal pixel-art UI framework that prioritizes active gameplay area. By using vector-grouped pixel structures directly in Figma, custom pixelated buttons, and high-contrast color tokens, the interface stays lightweight, intuitive, and visually balanced without cluttering the screen.",
      workflow: "Safe Combat Viewport (Center 70%) → Low-Opacity Touch Controls (Bottom Corners) → Micro-HUD Anchors (Top Screen Edge)",
      screenshotSlots: [
        {
          index: 2,
          label: "Control Layout & Ergonomics Diagram",
          hint: "Minimal vector flow mapping thumb movement zones and screen clearance—viewport zones, touch control placement, and micro-HUD anchors."
        },
        {
          index: 3,
          label: "Main Menu & In-Game UI Viewport",
          hint: "Full mobile screen layout showing the Ashen Spire Title/Main Menu screen alongside the active gameplay HUD—highlighting the low-profile virtual controls, health/stamina indicators, and pause overlay."
        },
        {
          index: 4,
          label: "Design Tokens & Custom Pixel Asset Sheet",
          hint: "UI spec sheet displaying the pixel-art component set: typography scales, HEX color swatches (#1E232A, #2A2421, #3A322C, #D68C45, #EA630A), pixelated button variants, input boxes, cards, and UI navigation icons."
        }
      ],
      coreFeaturesTitle: "Minimalist Game Interface & Touch Controls",
      coreFeatures: [
        {
          title: "Minimal Touch Joystick & Action Buttons",
          desc: "Formed using precision pixel grids in Figma, featuring clear border states (warm amber #D68C45 for active states/highlights, deep obsidian #1E232A for default backgrounds)."
        },
        {
          title: "Clean Menu Hierarchy",
          desc: "Settings, pause overlays, and modal cards use dark slate containers (#2A2421 / #3A322C) with high-contrast white text borders to keep controls instantly distinguishable."
        },
        {
          title: "Promotional Landing Page",
          desc: "A modern, responsive web landing page bridging the game's dark fantasy aesthetic with clean marketing layout principles, featuring game trailers, lore cards, and direct app store links."
        }
      ],
      designSystem: {
        typography: "Gameplay font brings bold, retro arcade authority to headers and title cards, while PlayMeGames provides clean pixel-grid legibility for menu options, input labels, and body text.",
        accessibility: "Color tokens guarantee minimum contrast of 4.5:1 for menu text. Deep obsidian (#1E232A) and dark slate (#2A2421 / #3A322C) form the foundational layer, complemented by warm parchment amber (#D68C45) and vibrant orange (#EA630A) for active state affordance.",
        roles: [
          { role: "Game HUD", detail: "Low-profile virtual controls anchored to thumb zones, micro-HUD health/stamina bars at top screen edge, leaving 80%+ viewport clear." },
          { role: "Menu System", detail: "Dark slate containers with high-contrast text for Settings, Pause Overlays, and modal cards." },
          { role: "Web Landing Page", detail: "Responsive marketing page with hero game artwork, story teaser, lore cards, and download CTAs." }
        ]
      },
      highlights: [
        {
          card: "Card A — Pause & Settings Modal",
          title: "Minimalist Pause Overlay",
          desc: "Close-up view of the minimalist pause overlay showing audio sliders, control sensitivity toggles, and quit/resume buttons built with pixelated card containers."
        },
        {
          card: "Card B — Touch Control Affordance & States",
          title: "Virtual Joystick & Button States",
          desc: "Detailed view of the virtual joystick and action button cluster, illustrating rest states versus active press highlights using the amber/orange palette."
        },
        {
          card: "Card C — Web Landing Page Hero",
          title: "Marketing Website & UI Kit Preview",
          desc: "Desktop view of the game's marketing website landing page showcasing the responsive layout, download section, and embedded UI style."
        }
      ],
      outcomes: [
        "Reduced screen occlusion during gameplay, leaving over 80% of the viewport unobstructed for active combat and world exploration",
        "Created a complete, reusable Figma pixel-art UI kit enabling rapid prototyping of new game menus, inventory grids, and HUD updates",
        "Achieved WCAG AA 4.5:1 minimum contrast across all menu text and interactive states using the obsidian/amber palette"
      ],
      nextSteps: "Implementing responsive HUD scaling for various mobile aspect ratios (16:9 to 21:9), designing dynamic health/stamina status animations, and refining the desktop web landing page into a live React/Tailwind landing template (V2)."
    }
  }
];

export const skillsData = [
  {
    category: "UI & Product Design",
    description: "Architecting frictionless user journeys and high-craft visual interfaces.",
    skills: ["Figma (Auto-layout, Components)", "High-Fidelity Prototyping", "Design Systems & Token Sheets", "Multi-User Workflow Specs", "Visual Hierarchy", "Micro-interactions"]
  },
  {
    category: "UX Research & Strategy",
    description: "Validating user needs through qualitative inquiries and field evaluations.",
    skills: ["Stakeholder Discovery", "Contextual Inquiries", "User Journey Mapping", "Information Architecture", "Friction Point Analysis", "Accessibility (WCAG 2.1 AA)"]
  },
  {
    category: "Frontend & Mobile Engineering",
    description: "Translating pixel-perfect designs into resilient, production-ready code.",
    skills: ["React & Vite", "Tailwind CSS v4", "JavaScript ESNext", "Responsive & Mobile-First", "REST API Integration", "Git & GitHub"]
  },
  {
    category: "Civic & Enterprise Workspaces",
    description: "Designing high-density dashboards, audit logs, and transaction engines.",
    skills: ["Desktop Admin Workspaces", "Data-Dense Tables & Grids", "Real-time Document Previews", "Role-Based Access Control", "Census & Inventory Systems", "QR Verification Flows"]
  }
];

export const philosophyPoints = [
  {
    number: "01",
    title: "Typography First",
    summary: "Type is the voice of interface design. Precision kerning, balanced line-heights, and clear typographic hierarchy turn raw data into intuitive comprehension."
  },
  {
    number: "02",
    title: "Aesthetic Rigor & Atmosphere",
    summary: "Form and function are not opposing forces. Moody lighting, tactile grain, and cohesive palettes give software an unforgettable soul without sacrificing speed."
  },
  {
    number: "03",
    title: "Code-Aware Design",
    summary: "As a BSIT Web & Mobile Applications Development student, every wireframe and component I design is built with DOM architecture, performance budgets, and CSS flexibility in mind."
  },
  {
    number: "04",
    title: "Obsessive Accessibility",
    summary: "Exceptional design belongs to every user. Ensuring AA contrast standards, keyboard navigability, and generous touch targets is fundamental to every screen."
  }
];