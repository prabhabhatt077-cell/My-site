import React from 'react';
import { ArrowDown, Download, Mail, Award, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../utils/portfolioData.ts';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenReferences: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact, onOpenReferences }) => {
  return (
    <section id="top" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden border-b border-[#E7E2D6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Editorial Kicker Bar (mirroring the reference image's top row) */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E2D6] text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#6C665A] font-medium">
          <div className="flex items-center gap-2">
            <span>BBA CANDIDATE · BANKING & MANAGEMENT</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#A27B5C]">✦</span>
            <span>2026</span>
          </div>
        </div>

        {/* Grand Editorial Headline: "PORTFOLIO" (inspired directly by the reference image) */}
        <div className="pt-6 pb-4 md:py-8 text-center select-none">
          <h1 className="font-serif-luxury text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.06em] text-[#161616] font-normal uppercase leading-none">
            PORTFOLIO
          </h1>
        </div>

        {/* 2-Column Split: Editorial Bio & Monogram (Left) + Authentic Photo of Prabha Bhatt (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4 md:pt-8">
          
          {/* Left Column (5 cols): Biography, Objective & Monogram Seal */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#8C8474] font-medium block">
                ACADEMIC & PROFESSIONAL PROFILE
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#161616] font-medium leading-tight">
                BBA Student &amp; Aspiring Banking Professional
              </h2>
            </div>

            {/* Career Objective Text */}
            <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-[#4A453D] font-normal">
              <p className="border-l-2 border-[#A27B5C] pl-4 italic font-serif-luxury text-[16px] text-[#2C2924]">
                &ldquo;Motivated and enthusiastic first-semester BBA student seeking an internship opportunity in a reputable bank or company. Eager to gain practical knowledge, develop professional skills, and apply academic learning in a real-world working environment.&rdquo;
              </p>
              <p className="text-xs md:text-sm text-[#5C564C]">
                Committed to continuous learning, teamwork, and high ethical conduct. Diploma certified in computer applications (PDICA) with foundational mastery in management accounting and office systems.
              </p>
            </div>

            {/* Quick Metadata Info */}
            <div className="pt-2 grid grid-cols-2 gap-4 text-xs text-[#5C564C] border-t border-[#E7E2D6]">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#8C8474]">Institution</span>
                <span className="font-medium text-[#161616]">Far Western University</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#8C8474]">Current Level</span>
                <span className="font-medium text-[#161616]">BBA 1st Semester</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#8C8474]">Location</span>
                <span className="font-medium text-[#161616]">Mahendranagar, Nepal</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#8C8474]">Internship Availability</span>
                <span className="font-medium text-[#161616]">Immediate / Active</span>
              </div>
            </div>

            {/* Circular Monogram Seal & Name (Directly mirroring the circular emblem in the reference image) */}
            <div className="pt-4 flex items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#8C8474]">Candidate</span>
                <h3 className="font-serif-luxury text-2xl md:text-3xl tracking-wide uppercase text-[#161616]">
                  {PROFILE_INFO.name}
                </h3>
              </div>

              {/* Monogram Seal */}
              <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                {/* SVG circular badge with rotating or styled text */}
                <div className="w-20 h-20 rounded-full border border-[#CDC6B7] flex items-center justify-center bg-[#F4EFE5] shadow-xs">
                  <div className="text-center">
                    <span className="font-serif-luxury text-xl font-bold tracking-widest text-[#161616] block">PB</span>
                    <span className="text-[7px] tracking-[0.2em] uppercase text-[#8C8474] block">EST. 2026</span>
                  </div>
                </div>
                {/* Subtle outer dashed orbit */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#CDC6B7]/60 pointer-events-none" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wide uppercase text-[#F8F5EE] bg-[#161616] rounded hover:bg-[#2C2C2C] transition-colors shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Export Executive CV</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wide uppercase text-[#161616] bg-transparent border border-[#CDC6B7] rounded hover:bg-[#EFECE4] transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Prabha</span>
              </button>

              <button
                onClick={onOpenReferences}
                className="text-xs text-[#6C665A] hover:text-[#161616] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Request References
              </button>
            </div>

          </div>

          {/* Right Column (7 cols): Editorial Framed Photo of Prabha Bhatt */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="relative p-2 md:p-3 bg-[#EFECE4] rounded-xl border border-[#DCD6C7] shadow-sm">
                
                {/* Inner Photo Container */}
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-[#E7E2D6]">
                  <img
                    src={PROFILE_INFO.avatarUrl}
                    alt="Prabha Bhatt - BBA Student and Aspiring Professional"
                    className="w-full h-full object-cover filter contrast-[1.03] transition-transform duration-700"
                    style={{ 
                      objectPosition: '44% 60%', 
                      transform: 'scale(1.95)', 
                      transformOrigin: '44% 58%' 
                    }}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // fallback to local path if needed
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('public/')) {
                        target.src = '/public/assets/aistudio/IMG-20260521-WA0056_7bdc24ac.jpg';
                      }
                    }}
                  />
                  
                  {/* Subtle soft vignette & gradient at bottom for caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-[#161616]/70 via-[#161616]/30 to-transparent text-white">
                    <p className="text-xs tracking-[0.2em] uppercase font-light text-[#EFECE4]">
                      Far Western University · Management Stream
                    </p>
                    <p className="font-serif-luxury text-lg md:text-xl font-normal text-white">
                      Prabha Bhatt
                    </p>
                  </div>
                </div>

                {/* Floating pill-free trust highlight */}
                <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 bg-[#F8F5EE] border border-[#CDC6B7] py-2.5 px-4 rounded-lg shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#161616] text-[#F8F5EE] flex items-center justify-center font-serif-luxury text-xs font-bold">
                    FW
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C8474] block">University</span>
                    <span className="text-xs font-semibold text-[#161616]">Far Western University, Nepal</span>
                  </div>
                </div>

                {/* Certification badge */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-[#F8F5EE] border border-[#CDC6B7] py-2 px-3 rounded-lg shadow-sm text-xs font-medium text-[#161616]">
                  <CheckCircle2 className="w-4 h-4 text-[#A27B5C]" />
                  <span>PDICA Computer Certified</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
