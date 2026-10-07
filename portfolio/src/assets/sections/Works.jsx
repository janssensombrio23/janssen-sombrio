import React from "react";
import { motion } from "framer-motion";
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
            category: "FULL-STACK APPS",
            year: "2025",
            title: "THE INSPECTION NEST",
            description:
                "Commercial property inspection platform replacing static paper audits with interactive, consumer-ready digital inspection reports and automated scheduling workflows.",
            roles: ["FULL-STACK DEVELOPER", "End-to-End Frontend & API Integration"],
        },
        {
            category: "WORDPRESS & CMS",
            year: "2025",
            title: "THE DIGITAL ROOM",
            description:
                "Commercial web application for an Australian IT consultancy, delivering a high-performance marketing platform with dynamic service catalogs and headless CMS integration.",
            roles: ["FRONTEND DEVELOPER", "Production Client Deployment in Australia"],
        },
        {
            category: "FULL-STACK APPS",
            year: "2024 – 2025",
            title: "PORTFOLIO V1",
            description:
                "First iteration of personal developer portfolio built with Next.js and TypeScript, featuring interactive project showcases, custom chat interaction, and responsive design systems.",
            roles: ["SOLO DEVELOPER", "First-Gen Developer Portfolio"],
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
            title: "DISCOVER & WIREFRAME",
            desc: "Aligning on project goals and mapping out intuitive user journeys. Structuring clean layouts before visual design begins to eliminate ambiguity.",
        },
        {
            num: "02",
            title: "UI/UX & PROTOTYPING",
            desc: "Crafting high-fidelity mockups and interactive prototypes in Figma. Establishing cohesive design systems that look polished across every device.",
        },
        {
            num: "03",
            title: "FRONT-END DEVELOPMENT",
            desc: "Translating design systems into clean, maintainable code. Building responsive interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.",
        },
        {
            num: "04",
            title: "TESTING & REFINEMENT",
            desc: "Ensuring cross-browser compatibility, optimizing layouts for mobile and desktop, and refining interactions for a seamless, accessible user experience.",
        },
    ];

    const experiences = [
        {
            role: "Subcommittee Member",
            org: "ALLIANCE OF STUDENTS IN INFORMATION AND COMPUTING SCIENCES (ASICS)",
            period: "Oct 2025 – Present",
            desc: "Collaborated with officers to plan, organize, and support student activities and administrative tasks for the College of Information and Computing Sciences.",
        },
        {
            role: "President",
            org: "BULSUAN BUSTOS CHORALE",
            period: "Sept 2024 – Present",
            desc: "Led operations and stakeholder communications while designing digital posters, printed programs, and branded visual templates to ensure a consistent public image.",
        },
        {
            role: "Creative Subcommittee Member",
            org: "SOCIO-CULTURAL AFFAIRS COMMITTEE – BULSU BUSTOS LSC",
            period: "Aug 2025 – Apr 2026",
            desc: "Developed reusable design templates and digital graphics by applying core visual hierarchy and typography principles for campus platforms.",
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section className="relative z-20 w-full bg-[#FFFFFF] text-black rounded-t-[64px] flex flex-col items-center py-[52px] px-[32px] md:px-[95px] gap-[112px] shadow-[0_-24px_48px_rgba(0,0,0,0.35)]">
            {/* Works & Featured Projects Container */}
            <div className="w-full max-w-[1250px] flex flex-col gap-[48px]">
                {/* Header Title & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6"
                >
                    <h2 className="font-['Montserrat',_sans-serif] font-medium text-[60px] md:text-[87px] leading-[1] uppercase tracking-tighter text-black">
                        FEATURED
                        <br />
                        _PROJECTS
                    </h2>
                    <p className="max-w-[297px] font-['Clarity_City',_sans-serif] font-medium text-[16px] leading-[24px] text-[#636363]">
                        A selection of web applications and platforms showing the problems
                        solved, technical decisions made, and verifiable outcomes delivered.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full"
                >
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="flex flex-col justify-between bg-white rounded-[24px] md:rounded-t-[64px] shadow-[0_0_16px_rgba(0,0,0,0.16)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
                        >
                            {/* Project Image Mockup Placeholder */}
                            <div className="w-full h-[260px] bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-400 font-medium text-sm">
                                Project Image
                            </div>

                            {/* Project Content */}
                            <div className="flex flex-col justify-between p-[24px] gap-[16px]">
                                <div className="flex justify-between items-center text-[12px] uppercase tracking-wider text-[#636363] font-['Clarity_City',_sans-serif]">
                                    <span>{proj.category}</span>
                                    <span>{proj.year}</span>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <h3 className="font-['Montserrat',_sans-serif] font-normal text-[24px] leading-[29px] text-black">
                                        {proj.title}
                                    </h3>
                                    <p className="font-['Clarity_City',_sans-serif] font-medium text-[15px] leading-[22px] text-[#636363]">
                                        {proj.description}
                                    </p>
                                </div>

                                {/* Role tags */}
                                <div className="flex flex-wrap gap-[6px] pt-2">
                                    {proj.roles.map((role, rIdx) => (
                                        <span
                                            key={rIdx}
                                            className="bg-[#F3F3F3] text-[#636363] text-[10px] px-[9px] py-[4px] rounded-[5px]"
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>

                                {/* Card Actions */}
                                <div className="flex justify-between items-center pt-4 border-t border-[#EFEFEF]">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#demo"
                                        className="bg-black text-white text-[12px] px-[14px] py-[7px] rounded-[22px] hover:bg-gray-800 transition-colors"
                                    >
                                        DEMO ↗
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ x: 3 }}
                                        href="#casestudy"
                                        className="text-[#555] font-['Montserrat',_sans-serif] font-medium text-[12px] flex items-center gap-1 hover:text-black transition-colors"
                                    >
                                        CASE STUDY ➔
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <div className="flex justify-center w-full pt-6">
                    <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href="#all-projects"
                        className="bg-black text-white px-[29px] py-[14px] rounded-[29px] shadow-[0_4px_8px_rgba(0,0,0,0.24)] text-[13px] font-medium tracking-wide hover:bg-gray-800 transition-all"
                    >
                        VIEW ALL PROJECTS ↗
                    </motion.a>
                </div>
            </div>

            {/* Tech Stack Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[1250px] flex flex-col md:flex-row justify-between py-[48px] gap-12 border-t border-[#E8E8E8]"
            >
                <div className="flex flex-col gap-[20px] max-w-[420px]">
                    <span className="font-['Montserrat',_sans-serif] font-normal text-[13px] tracking-[1px] text-[#636363]">
                        TECHNOLOGIES &
                    </span>
                    <h3 className="font-['Montserrat',_sans-serif] font-medium text-[36px] tracking-tight text-[#2C2C2C]">
                        TECH STACK
                    </h3>
                    <p className="font-['Montserrat',_sans-serif] font-normal text-[16px] leading-[24px] text-[#636363]">
                        A streamlined stack dedicated to crafting clean user interfaces,
                        taking projects from initial visual design to scalable front-end
                        deployment.
                    </p>
                </div>

                {/* Grid of Tech Items */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[720px]"
                >
                    {techStack.map((tech, idx) => {
                        const IconComponent = tech.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -4, backgroundColor: "#F3F4F6" }}
                                className="flex items-center gap-[14px] p-4 bg-gray-50 rounded-xl border border-gray-100 transition-colors"
                            >
                                <IconComponent className="w-6 h-6 text-[#2C2C2C]" />
                                <span className="font-['Montserrat',_sans-serif] font-medium text-[17px] text-[#2C2C2C]">
                                    {tech.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Workflow Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[1250px] flex flex-col md:flex-row justify-between py-[48px] gap-12 border-t border-[#E8E8E8]"
            >
                <div className="flex flex-col gap-[20px] max-w-[420px]">
                    <span className="font-['Montserrat',_sans-serif] font-normal text-[13px] tracking-[1px] text-[#636363]">
                        DESIGN &
                    </span>
                    <h3 className="font-['Montserrat',_sans-serif] font-medium text-[36px] tracking-tight text-[#2C2C2C]">
                        WORKFLOW
                    </h3>
                    <p className="font-['Montserrat',_sans-serif] font-normal text-[16px] leading-[24px] text-[#636363]">
                        A streamlined process bridging the gap between user-centered design
                        and responsive front-end execution.
                    </p>
                </div>

                {/* Workflow Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col w-full max-w-[720px]"
                >
                    {workflowSteps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ x: 6 }}
                            className="flex justify-between items-center py-[28px] border-b border-[#E8E8E8] transition-transform"
                        >
                            <div className="flex flex-col gap-2 max-w-[480px]">
                                <h4 className="font-['Montserrat',_sans-serif] font-semibold text-[17px] tracking-[0.5px] text-[#2C2C2C]">
                                    {step.title}
                                </h4>
                                <p className="font-['Montserrat',_sans-serif] font-normal text-[14px] leading-[22px] text-[#636363]">
                                    {step.desc}
                                </p>
                            </div>
                            <div className="w-[48px] h-[48px] bg-[#2C2C2C] text-white rounded-full flex items-center justify-center font-semibold text-[14px]">
                                {step.num}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Leadership & Creative Experience Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[1250px] flex flex-col md:flex-row justify-between py-[48px] gap-12 border-t border-[#E8E8E8]"
            >
                <div className="flex flex-col gap-[20px] max-w-[420px]">
                    <span className="font-['Montserrat',_sans-serif] font-normal text-[13px] tracking-[1px] text-[#636363]">
                        LEADERSHIP &
                    </span>
                    <h3 className="font-['Montserrat',_sans-serif] font-medium text-[36px] tracking-tight text-[#2C2C2C]">
                        CREATIVE EXPERIENCE
                    </h3>
                    <p className="font-['Montserrat',_sans-serif] font-normal text-[16px] leading-[24px] text-[#636363]">
                        Applying design principles, communication, and leadership to execute
                        high-profile student initiatives.
                    </p>
                </div>

                {/* Experiences List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col w-full max-w-[720px]"
                >
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ x: 6 }}
                            className="flex justify-between items-start py-[28px] border-b border-[#E8E8E8] transition-transform"
                        >
                            <div className="flex flex-col gap-2 max-w-[580px]">
                                <span className="font-['Montserrat',_sans-serif] font-medium text-[13px] tracking-[0.5px] text-[#636363]">
                                    {exp.role}
                                </span>
                                <h4 className="font-['Montserrat',_sans-serif] font-semibold text-[17px] tracking-[0.5px] text-[#2C2C2C]">
                                    {exp.org}
                                </h4>
                                <span className="font-['Montserrat',_sans-serif] font-medium text-[13px] tracking-[0.5px] text-[#636363]">
                                    {exp.period}
                                </span>
                                <p className="font-['Montserrat',_sans-serif] font-normal text-[14px] leading-[22px] text-[#636363] mt-2">
                                    {exp.desc}
                                </p>
                            </div>
                            <div className="w-[48px] h-[48px] bg-[#2C2C2C] text-white rounded-full flex items-center justify-center font-semibold text-[14px]">
                                0{idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}