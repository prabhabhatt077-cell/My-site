import React, { useState } from 'react';
import { Download, Mail, Phone, Menu, X, FileText } from 'lucide-react';
import { PROFILE_INFO } from '../utils/portfolioData.ts';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5EE]/90 backdrop-blur-md border-b border-[#E7E2D6] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); scrollTo('top'); }}
          className="font-serif-luxury text-lg md:text-xl font-bold tracking-tight text-[#161616] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          {PROFILE_INFO.name}
        </a>

        {/* Zone 2: Clean 4-5 Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#555047]">
          <button 
            onClick={() => scrollTo('about')} 
            className="hover:text-[#161616] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            About & Objective
          </button>
          <button 
            onClick={() => scrollTo('pillars')} 
            className="hover:text-[#161616] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Core Pillars
          </button>
          <button 
            onClick={() => scrollTo('qualifications')} 
            className="hover:text-[#161616] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Education
          </button>
          <button 
            onClick={() => scrollTo('skills')} 
            className="hover:text-[#161616] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Skills & Quotes
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="hover:text-[#161616] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Export CV & Contact) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#161616] bg-transparent border border-[#CDC6B7] rounded-md hover:bg-[#EFECE4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Preview and Export CV (PDF / Print Ready)"
            aria-label="Export Resume CV"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CV</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#F8F5EE] bg-[#161616] rounded-md hover:bg-[#2C2C2C] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            aria-label="Contact for Internship"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-xs border border-[#CDC6B7] rounded text-[#161616]"
            aria-label="Export CV"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#161616] rounded hover:bg-[#EDE8DE]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7E2D6] bg-[#F8F5EE] px-6 py-4 space-y-3">
          <button 
            onClick={() => scrollTo('about')} 
            className="block w-full text-left py-2 text-sm font-medium text-[#161616]"
          >
            About & Objective
          </button>
          <button 
            onClick={() => scrollTo('pillars')} 
            className="block w-full text-left py-2 text-sm font-medium text-[#161616]"
          >
            Core Pillars
          </button>
          <button 
            onClick={() => scrollTo('qualifications')} 
            className="block w-full text-left py-2 text-sm font-medium text-[#161616]"
          >
            Education & Background
          </button>
          <button 
            onClick={() => scrollTo('skills')} 
            className="block w-full text-left py-2 text-sm font-medium text-[#161616]"
          >
            Skills, PDICA & Quotes
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="block w-full text-left py-2 text-sm font-medium text-[#161616]"
          >
            Contact Information
          </button>
          <div className="pt-3 border-t border-[#E7E2D6] flex gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="flex-1 py-2 text-xs font-medium text-center border border-[#161616] text-[#161616] rounded"
            >
              Export CV
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="flex-1 py-2 text-xs font-medium text-center bg-[#161616] text-[#F8F5EE] rounded"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
