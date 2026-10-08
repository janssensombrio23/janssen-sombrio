import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Code,
    Palette,
    Zap,
    Atom,
    Triangle,
    Server,
    Wind,
    Database,
    GitBranch,
    Globe,
    Flame,
    PenTool,
} from "lucide-react";

export default function Works() {
    const projects = [
        {
            type: "lengthwise-right", // Type 1: Lengthwise split, image on right
            category: "FULL-STACK APP / PWA",
            year: "2026",
            title: "TALE-KNOW",
            description:
                "A gamified Progressive Web App (LMS) designed for DepEd MATATAG Curriculum TLE students and teachers. Boosts engagement through TLE strand-specific mini-games, XP/coin rewards, and real-time leaderboards while offering offline-first access and automated competency reporting.",
            roles: ["UI/UX DESIGN", "FRONT-END DEV", "PWA", "GAMIFICATION", "RESPONSIVE DESIGN"],
        },
        {
            type: "crosswise-bottom", // Type 2: Crosswise split, image on bottom
            category: "FULL-STACK APPS",
            year: "2025",
            title: "BOOKIFY",
            description:
                "Bookify is a web-based booking marketplace that connects guests, hosts, and administrators in a single ecosystem. It enables travelers to discover, book, and manage accommodations, local experiences, and services while offering hosts tools to set availability, manage listings, and track earnings. Built to replace scattered communication and booking methods, the platform features integrated e-wallet payments via PayPal, real-time messaging, a daily check-in and review points/rewards system, and automated administrative analytics with report export capabilities.",
            roles: [
                "FULL-STACK DEVELOPER",
                "REACT & FIRESTORE ARCHITECTURE",
                "END-TO-END FRONTEND & API INTEGRATION",
                "E-WALLET & PAYPAL PAYMENT INTEGRATION",
                "ADMIN DASHBOARD & REPORT GENERATION",
            ],
        },
        {
            type: "lengthwise-left", // Type 3: Lengthwise split, image on left
            category: "MOBILE GAME UI / FRONT-END DESIGN",
            year: "2026",
            title: "ASHEN SPIRE",
            description:
                "Ashen Spire is a 2D dark fantasy action-adventure mobile game featuring a minimal, atmospheric user interface designed to maximize viewport real estate and eliminate HUD clutter. Built with custom vector-pixel components, the project solves touch-screen control ergonomics and typography legibility on smaller screens through low-profile virtual controls, ergonomic thumb placements, and high-contrast accessibility tokens.",
            roles: [
                "UI/UX DESIGN",
                "GAME UI DESIGN",
                "VECTOR PIXEL ASSET CREATION",
                "FRONT-END LANDING PAGE",
            ],
        },
        {
            type: "crosswise-top", // Type 4: Crosswise split, image on top
            category: "UI/UX & WEB APP",
            year: "2026",
            title: "THE RIVERVIEW",
            description:
                "Comprehensive venue booking ecosystem featuring interactive spatial floor plans, direct calendar availability tracking, and high-conversion client proposal interfaces.",
            roles: ["UI/UX DESIGNER", "Figma Prototype & Design System"],
        },
        {
            type: "lengthwise-right", // Type 1 (Additional): Lengthwise split, image on right
            category: "COMMERCIAL & ENTERPRISE",
            year: "2025",
            title: "THE INSPECTION NEST",
            description:
                "Commercial property inspection platform replacing static paper audits with interactive, consumer-ready digital inspection reports and automated scheduling workflows.",
            roles: ["FULL-STACK DEVELOPER", "End-to-End Frontend & API Integration"],
        },
        {
            type: "crosswise-bottom", // Type 2 (Additional): Crosswise split, image on bottom
            category: "WORDPRESS & CMS",
            year: "2025",
            title: "THE DIGITAL ROOM",
            description:
                "Commercial web application for an Australian IT consultancy, delivering a high-performance marketing platform with dynamic service catalogs and headless CMS integration.",
            roles: ["FRONTEND DEVELOPER", "Production Client Deployment in Australia"],
        },
    ];

    const techStack = [
        { name: "HTML", icon: Code },
        { name: "CSS", icon: Palette },
        { name: "JavaScript", icon: Zap },
        { name: "React", icon: Atom },
        { name: "Next.js", icon: Triangle },
        { name: "Node.js", icon: Server },
        { name: "Tailwind CSS", icon: Wind },
        { name: "Supabase", icon: Database },
        { name: "GitHub", icon: GitBranch },
        { name: "Vercel", icon: Globe },
        { name: "Firebase", icon: Flame },
        { name: "Figma", icon: PenTool },
    ];

    const workflowSteps = [
        {
            num: "01",
            title: "DISCOVER & SCOPE",
            desc: "Aligning on project goals, data contracts, and user journeys upfront — eliminating ambiguity before writing expensive architectural code.",
        },
        {
            num: "02",
            title: "UI ARCHITECTURE & DESIGN",
            desc: "Building accessible, scalable design systems in Next.js and React with TypeScript, Tailwind CSS, and fluid motion that looks polished across every device.",
        },
        {
            num: "03",
            title: "BACKEND & DATA INTEGRITY",
            desc: "Engineering secure REST/GraphQL APIs, relational PostgreSQL / Supabase data models, Row Level Security, and resilient server-side business logic.",
        },
        {
            num: "04",
            title: "TESTING, PERFORMANCE & DEPLOY",
            desc: "Enforcing type safety, running unit tests with Jest, optimizing Core Web Vitals, and deploying production-ready code with automated CI/CD.",
        },
    ];

    const experiences = [
        {
            role: "Subcommittee Member",
            org: "ALLIANCE OF STUDENTS IN INFORMATION AND COMPUTING SCIENCES (ASICS)",
            period: "OCT 2025 – PRESENT",
            desc: "Collaborated with officers to plan, organize, and support student activities and administrative tasks for the College of Information and Computing Sciences.",
        },
        {
            role: "President",
            org: "BULSUAN BUSTOS CHORALE",
            period: "SEPT 2024 – PRESENT",
            desc: "Led operations and stakeholder communications while designing digital posters, printed programs, and branded visual templates to ensure a consistent public image.",
        },
        {
            role: "Creative Subcommittee Member",
            org: "SOCIO-CULTURAL AFFAIRS COMMITTEE – BULSU BUSTOS LSC",
            period: "AUG 2025 – APR 2026",
            desc: "Developed reusable design templates and digital graphics by applying core visual hierarchy and typography principles for campus platforms.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    // Smooth Scroll Setup using Framer Motion Spring physics
    const scrollTargetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollTargetRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        damping: 25,
        stiffness: 120,
        mass: 0.2,
    });

    const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);

    // Helper function to render text section cleanly across layout types
    const renderCardText = (proj, isCrosswise = false) => (
        <div className={`flex flex-col justify-between items-start w-full h-full flex-shrink-0 ${
            isCrosswise ? "p-[28px] lg:px-[44px] lg:py-[32px] gap-[12px]" : "p-[36px] lg:p-[52px] gap-[12px]"
        }`}>
            <div className="flex flex-row justify-between items-center w-full">
                <span className="font-['Clarity_City',_sans-serif] font-semibold text-[14px] tracking-[0.06em] uppercase text-[#636363]">
                    {proj.category}
                </span>
                <span className="font-['Clarity_City',_sans-serif] font-semibold text-[14px] text-[#636363]">
                    {proj.year}
                </span>
            </div>

            <h3 className={`font-['Montserrat',_sans-serif] font-bold text-black w-full ${
                isCrosswise ? "text-[38px] lg:text-[48px] leading-[42px] lg:leading-[50px] mt-1" : "text-[44px] lg:text-[58px] leading-[48px] lg:leading-[60px]"
            }`}>
                {proj.title}
            </h3>

            <p className="font-['Clarity_City',_sans-serif] font-medium text-[16px] lg:text-[17px] leading-[24px] lg:leading-[26px] text-[#555555] w-full my-2">
                {proj.description}
            </p>

            <div className="flex flex-row flex-wrap items-start gap-[8px] w-full my-1">
                {proj.roles.map((role, rIdx) => (
                    <div
                        key={rIdx}
                        className="flex flex-row items-center px-[12px] py-[6px] bg-[#F3F3F3] rounded-[8px]"
                    >
                        <span className="font-['Inter',_sans-serif] font-medium text-[11px] lg:text-[12px] text-[#636363]">
                            {role}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex flex-row justify-between items-center w-full pt-2">
                <a
                    href="#demo"
                    className="flex flex-row justify-center items-center px-[24px] py-[12px] gap-[6px] bg-black text-white rounded-full text-[14px] font-['Inter',_sans-serif] font-semibold hover:bg-gray-800 transition-colors"
                >
                    DEMO ↗
                </a>
                <a
                    href="#casestudy"
                    className="flex flex-row justify-center items-center px-[24px] py-[12px] gap-[6px] border border-[#555555] rounded-full text-[#555555] text-[14px] font-['Montserrat',_sans-serif] font-semibold hover:text-black hover:border-black transition-colors"
                >
                    CASE STUDY ➔
                </a>
            </div>
        </div>
    );

    return (
        <section
            id="works"
            className="relative z-20 w-full bg-[#FAF8F5] text-[#1A1A1A] rounded-t-[48px] md:rounded-t-[64px] flex flex-col items-center py-[80px] md:py-[112px] px-[24px] md:px-[64px] lg:px-[96px] gap-[120px] shadow-[0_-24px_48px_rgba(0,0,0,0.25)] font-['Inter',_sans-serif]"
        >
            {/* ==================== FEATURED PROJECTS HEADER ==================== */}
            <div className="w-full max-w-[1300px] flex flex-col gap-[48px]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6"
                >
                    <h2 className="font-['Montserrat',_sans-serif] font-medium text-[52px] md:text-[80px] leading-[1] uppercase tracking-tight text-black">
                        FEATURED
                        <br />
                        _PROJECTS
                    </h2>
                    <p className="max-w-[340px] text-[16px] leading-[26px] text-[#666666]">
                        A selection of web applications and platforms showing the problems
                        solved, technical decisions made, and verifiable outcomes delivered.
                    </p>
                </motion.div>
            </div>

            {/* ==================== PINNED HORIZONTAL SCROLL SECTION ==================== */}
            <div ref={scrollTargetRef} className="relative w-screen -mx-[24px] md:-mx-[64px] lg:-mx-[96px] h-[400vh]">
                <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex gap-[48px] pl-[24px] md:pl-[64px] lg:pl-[calc(max(24px,(100vw-1300px)/2))] will-change-transform transform-gpu translate-z-0 backface-hidden"
                    >
                        {projects.map((proj, idx) => (
                            <div
                                key={idx}
                                className="relative flex-shrink-0 w-[90vw] max-w-[1340px] h-[840px] flex items-center justify-center"
                            >
                                <div className="relative z-10 w-full h-[800px] bg-white rounded-[32px] lg:rounded-t-[64px] lg:rounded-b-[32px] shadow-[0px_16px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                                    {/* TYPE 1: Lengthwise Split - Image Right */}
                                    {proj.type === "lengthwise-right" && (
                                        <div className="flex flex-col lg:flex-row w-full h-full">
                                            <div className="w-full lg:w-[calc(100%-660px)] h-full">
                                                {renderCardText(proj, false)}
                                            </div>
                                            <div className="w-full lg:w-[660px] h-[360px] lg:h-full bg-gradient-to-br from-[#F5F2EC] to-[#EAE5DC] flex items-center justify-center text-gray-400 font-medium text-xl flex-shrink-0">
                                                Project Image (Lengthwise Right)
                                            </div>
                                        </div>
                                    )}

                                    {/* TYPE 2: Crosswise Split - Image Bottom */}
                                    {proj.type === "crosswise-bottom" && (
                                        <div className="flex flex-col w-full h-full">
                                            <div className="flex-1 min-h-0 w-full">
                                                {renderCardText(proj, true)}
                                            </div>
                                            <div className="w-full h-[320px] lg:h-[360px] bg-gradient-to-br from-[#F5F2EC] to-[#EAE5DC] flex items-center justify-center text-gray-400 font-medium text-xl flex-shrink-0 border-t border-[#E8E3D8]">
                                                Project Image (Crosswise Bottom)
                                            </div>
                                        </div>
                                    )}

                                    {/* TYPE 3: Lengthwise Split - Image Left */}
                                    {proj.type === "lengthwise-left" && (
                                        <div className="flex flex-col lg:flex-row w-full h-full">
                                            <div className="w-full lg:w-[660px] h-[360px] lg:h-full bg-gradient-to-br from-[#F5F2EC] to-[#EAE5DC] flex items-center justify-center text-gray-400 font-medium text-xl flex-shrink-0">
                                                Project Image (Lengthwise Left)
                                            </div>
                                            <div className="w-full lg:w-[calc(100%-660px)] h-full">
                                                {renderCardText(proj, false)}
                                            </div>
                                        </div>
                                    )}

                                    {/* TYPE 4: Crosswise Split - Image Top */}
                                    {proj.type === "crosswise-top" && (
                                        <div className="flex flex-col w-full h-full">
                                            <div className="w-full h-[320px] lg:h-[360px] bg-gradient-to-br from-[#F5F2EC] to-[#EAE5DC] flex items-center justify-center text-gray-400 font-medium text-xl flex-shrink-0 border-b border-[#E8E3D8]">
                                                Project Image (Crosswise Top)
                                            </div>
                                            <div className="flex-1 min-h-0 w-full">
                                                {renderCardText(proj, true)}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* End Card: MORE WORKS ARE COMING */}
                        <div className="relative flex-shrink-0 w-[85vw] max-w-[620px] h-[840px] flex items-center justify-center">
                            <div className="relative flex flex-col justify-between items-start w-full h-[800px] bg-[#121212] text-white p-[48px] lg:p-[64px] rounded-[32px] lg:rounded-t-[64px] lg:rounded-b-[32px] shadow-[0px_16px_40px_rgba(0,0,0,0.2)] overflow-hidden">
                                {/* Dot Grid Pattern */}
                                <div
                                    className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{
                                        backgroundImage: `radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)`,
                                        backgroundSize: "20px 20px",
                                    }}
                                />

                                <h3 className="relative z-10 font-['Montserrat',_sans-serif] font-extrabold text-[54px] lg:text-[72px] leading-[0.95] tracking-tight uppercase">
                                    MORE
                                    <br />
                                    WORKS
                                    <br />
                                    ARE COMING
                                </h3>

                                <div className="relative z-10 flex flex-col gap-6 w-full">
                                    <span className="font-['Montserrat',_sans-serif] font-medium text-[12px] tracking-[2px] uppercase text-[#888888]">
                                        SEE MORE OF MY WORKS
                                    </span>

                                    <a
                                        href="#all-projects"
                                        className="inline-flex items-center justify-center px-[32px] py-[16px] bg-white text-black text-[13px] font-bold tracking-wider rounded-full hover:bg-gray-200 transition-colors w-fit"
                                    >
                                        VIEW ALL PROJECTS ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ==================== TECH STACK SECTION ==================== */}
            <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-between items-start gap-[48px] md:gap-[80px] pt-[64px] border-t border-[#E3DFD7]">
                <div className="flex flex-col gap-[12px] max-w-[340px] md:sticky md:top-[120px] h-fit">
                    <span className="font-['Montserrat',_sans-serif] font-medium text-[11px] tracking-[1.5px] uppercase text-[#888888]">
                        TO BUILD & DEPLOY
                    </span>
                    <h3 className="font-['Montserrat',_sans-serif] font-semibold text-[32px] md:text-[36px] tracking-tight text-black">
                        TECH STACK
                    </h3>
                    <p className="text-[16px] leading-[26px] text-[#666666] mt-2">
                        A production-backed stack covering frontend interfaces, application logic, and relational data layers — taking web features from initial requirements to scalable, maintainable deployment.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[820px]"
                >
                    {techStack.map((tech, idx) => {
                        const IconComponent = tech.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -4, backgroundColor: "#FFFFFF" }}
                                className="flex items-center gap-[20px] p-[28px] bg-[#F3EFE8] rounded-[24px] border border-transparent hover:border-[#E5E0D5] transition-all"
                            >
                                <IconComponent className="w-9 h-9 text-[#1A1A1A] flex-shrink-0" />
                                <span className="font-['Montserrat',_sans-serif] font-bold text-[20px] md:text-[22px] text-[#1A1A1A]">
                                    {tech.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* ==================== WORKFLOW SECTION ==================== */}
            <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-between items-start gap-[48px] md:gap-[80px] pt-[64px] border-t border-[#E3DFD7]">
                <div className="flex flex-col gap-[12px] max-w-[340px] md:sticky md:top-[120px] h-fit">
                    <span className="font-['Montserrat',_sans-serif] font-medium text-[11px] tracking-[1.5px] uppercase text-[#888888]">
                        THE DEV PROCESS
                    </span>
                    <h3 className="font-['Montserrat',_sans-serif] font-semibold text-[32px] md:text-[36px] tracking-tight text-black">
                        WORKFLOW
                    </h3>
                    <p className="text-[16px] leading-[26px] text-[#666666] mt-2">
                        A practical development workflow: clarifying requirements, engineering maintainable code, and testing rigorously before considering the work complete.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="flex flex-col w-full max-w-[820px]"
                >
                    {workflowSteps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex items-start justify-between py-[52px] border-b border-[#E3DFD7] first:border-t"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-12 max-w-[760px]">
                                <span className="font-['Montserrat',_sans-serif] font-bold text-[18px] text-[#888888] tracking-wider pt-1">
                                    {step.num}
                                </span>
                                <div className="flex flex-col gap-4">
                                    <h4 className="font-['Montserrat',_sans-serif] font-bold text-[26px] md:text-[30px] tracking-[0.5px] text-black uppercase leading-tight">
                                        {step.title}
                                    </h4>
                                    <p className="text-[19px] leading-[32px] text-[#4A4A4A]">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* ==================== EXPERIENCE SECTION ==================== */}
            <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-between items-start gap-[48px] md:gap-[80px] pt-[64px] border-t border-[#E3DFD7]">
                <div className="flex flex-col gap-[12px] max-w-[340px] md:sticky md:top-[120px] h-fit">
                    <span className="font-['Montserrat',_sans-serif] font-medium text-[11px] tracking-[1.5px] uppercase text-[#888888]">
                        CAREER &
                    </span>
                    <h3 className="font-['Montserrat',_sans-serif] font-semibold text-[32px] md:text-[36px] tracking-tight text-black">
                        EXPERIENCE
                    </h3>
                    <p className="text-[16px] leading-[26px] text-[#666666] mt-2">
                        From enterprise platforms to client-facing products: roles, companies, and the tech behind the work.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="flex flex-col w-full max-w-[820px]"
                >
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col gap-5 py-[52px] border-b border-[#E3DFD7] first:border-t"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <span className="bg-[#2B2B2B] text-white text-[12px] font-bold tracking-wider uppercase px-[16px] py-[7px] rounded-full">
                                    {exp.role}
                                </span>
                                <span className="font-['Montserrat',_sans-serif] font-semibold text-[14px] text-[#888888] tracking-wider">
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="font-['Montserrat',_sans-serif] font-bold text-[28px] md:text-[32px] tracking-[0.2px] text-black leading-tight">
                                {exp.org}
                            </h4>

                            <p className="text-[19px] leading-[32px] text-[#4A4A4A]">
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}