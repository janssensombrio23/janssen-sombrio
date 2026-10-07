import React, { useState } from 'react';
import { projectsData, personalInfo } from './data/projects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SpecimenLab from './components/SpecimenLab';
import AboutSection from './components/AboutSection';
import CaseStudyPage from './components/CaseStudyPage';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import WormGradients from './components/WormGradients';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05030a] text-[#f1f5f9] relative selection:bg-[#7c3aed] selection:text-white">
      
      {/* Moving Worm-Like Gradients (Blue, Purple & Black) */}
      <WormGradients />

      {/* Analog Film Grain Texture Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-5 opacity-35 bg-grain" 
        aria-hidden="true" 
      />


      {/* Fixed Centered Pill Navbar */}
      <Navbar />

      {/* Conditional Rendering: Full-Page Case Study or Main Portfolio Landing */}
      {selectedProject ? (
        <main className="relative z-10">
          <CaseStudyPage 
            project={selectedProject} 
            onBack={() => {
              setSelectedProject(null);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }} 
            onSelectProject={setSelectedProject}
            allProjects={projectsData}
          />
        </main>
      ) : (
        <main className="relative z-10">
          {/* Hero Section — includes embedded navbar */}
          <Hero personalInfo={personalInfo} onOpenResume={() => setIsResumeOpen(true)} />

          {/* Selected Work & Case Studies */}
          <ProjectsSection 
            projects={projectsData} 
            onSelectProject={setSelectedProject} 
          />

          {/* Interactive Host Grotesk Specimen & Design Lab */}
          <SpecimenLab />

          {/* Focus, Skills, Education & Design Philosophy */}
          <AboutSection />
        </main>
      )}

      {/* Footer & Closing CTA */}
      <div className="relative z-10">
        <Footer 
          name={personalInfo.name} 
          email={personalInfo.email} 
          github={personalInfo.github} 
          linkedin={personalInfo.linkedin} 
          figma={personalInfo.figma} 
        />
      </div>

      {/* Printable / Downloadable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        personalInfo={personalInfo}
      />

    </div>
  );
}