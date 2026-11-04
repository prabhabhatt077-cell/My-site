import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SelectedWorks } from './components/SelectedWorks.tsx';
import { QualificationsTimeline } from './components/QualificationsTimeline.tsx';
import { SkillsAndProcess } from './components/SkillsAndProcess.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { ResumeExportModal } from './components/ResumeExportModal.tsx';
import { ReferenceModal } from './components/ReferenceModal.tsx';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isReferenceModalOpen, setIsReferenceModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenReferences = () => {
    setIsReferenceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#161616] font-sans-clean selection:bg-[#161616] selection:text-[#F8F5EE]">
      {/* Top Navigation */}
      <Navbar 
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Hero Section matching the editorial inspiration layout */}
        <Hero 
          onOpenResume={handleOpenResume}
          onOpenContact={handleOpenContact}
          onOpenReferences={handleOpenReferences}
        />

        {/* Selected Works / Core Competency Pillars (High-contrast dark band) */}
        <SelectedWorks />

        {/* Academic Milestones & Educational Timeline */}
        <QualificationsTimeline />

        {/* Skills, 4-Step Process & Quotes by Prabha */}
        <SkillsAndProcess />

        {/* Contact Footer & Monogram */}
        <ContactSection 
          onOpenResume={handleOpenResume}
          onOpenReferences={handleOpenReferences}
        />
      </main>

      {/* Interactive Resume Export / Print Modal */}
      <ResumeExportModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />

      {/* Reference & Internship Request Modal */}
      <ReferenceModal 
        isOpen={isReferenceModalOpen} 
        onClose={() => setIsReferenceModalOpen(false)} 
      />
    </div>
  );
}
