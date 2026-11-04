import React, { useState } from 'react';
import { 
  Laptop, 
  Clock, 
  Compass, 
  FileSpreadsheet, 
  CheckCircle, 
  Quote, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Music,
  Heart
} from 'lucide-react';
import { SKILL_CATEGORIES, PRABHA_QUOTES, PROFILE_INFO } from '../utils/portfolioData.ts';

export const SkillsAndProcess: React.FC = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  const nextQuote = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % PRABHA_QUOTES.length);
  };

  const prevQuote = () => {
    setActiveQuoteIndex((prev) => (prev - 1 + PRABHA_QUOTES.length) % PRABHA_QUOTES.length);
  };

  const currentQuote = PRABHA_QUOTES[activeQuoteIndex];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#E7E2D6] bg-[#F4EFE5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-[#E0D9C8]">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C8474] font-medium block">
            PRACTICAL MASTERY &amp; PHILOSOPHY
          </span>
          <h2 className="font-serif-luxury text-3xl md:text-4xl text-[#161616] font-normal tracking-wide mt-1">
            Skills, Work Process &amp; Creative Mindset
          </h2>
        </div>

        {/* 3-Column Layout directly mirroring the inspiration photo's bottom grid */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1 (4 cols): SKILLS & DIPLOMA (Services equivalent) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E0D9C8]">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#8C8474]">
                KEY SKILLS
              </span>
            </div>

            {/* Computer Skills (PDICA) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#161616]">
                <Laptop className="w-4 h-4 text-[#A27B5C]" />
                <span>Computer Skills (PDICA)</span>
              </div>
              <div className="space-y-2 pl-6 text-xs text-[#4A453D]">
                <div className="p-2.5 bg-[#EAE5D9] rounded border border-[#DAD3C2]">
                  <span className="font-semibold text-[#161616] block">Diploma in Computer (PDICA)</span>
                  <span className="text-[11px] text-[#666]">Professional Diploma in Computer Application</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#E0D9C8]">
                  <span>MS Excel &amp; Financial Spreadsheets</span>
                  <span className="text-[10px] uppercase font-semibold text-[#8C6D4F]">Formulas &amp; Tables</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#E0D9C8]">
                  <span>MS Word Document Processing</span>
                  <span className="text-[10px] uppercase font-semibold text-[#8C6D4F]">Formal Reports</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#E0D9C8]">
                  <span>MS PowerPoint Presentations</span>
                  <span className="text-[10px] uppercase font-semibold text-[#8C6D4F]">Slide Decks</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Internet Research &amp; Email Ops</span>
                  <span className="text-[10px] uppercase font-semibold text-[#8C6D4F]">Proficient</span>
                </div>
              </div>
            </div>

            {/* Personal Skills */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#161616]">
                <Clock className="w-4 h-4 text-[#A27B5C]" />
                <span>Personal Strengths</span>
              </div>
              <div className="space-y-1.5 pl-6 text-xs text-[#4A453D]">
                <div className="flex items-center gap-2 py-1 border-b border-[#E0D9C8]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#A27B5C]" />
                  <span className="font-medium text-[#161616]">Leadership:</span>
                  <span>Proactive initiative &amp; team guidance</span>
                </div>
                <div className="flex items-center gap-2 py-1 border-b border-[#E0D9C8]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#A27B5C]" />
                  <span className="font-medium text-[#161616]">Time Management:</span>
                  <span>Punctual, organized deliverables</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#A27B5C]" />
                  <span className="font-medium text-[#161616]">Willingness to Learn:</span>
                  <span>Fast learner &amp; adaptive mindset</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs py-2 px-3 bg-[#EAE5D9] rounded border border-[#DAD3C2]">
                <span className="font-semibold text-[#161616]">Languages:</span>
                <span className="text-[#555]">Nepali (Native) · English (Working)</span>
              </div>
            </div>

          </div>

          {/* Column 2 (4 cols): MY WORK PROCESS (Process equivalent) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E0D9C8]">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#8C8474]">
                WORK ETHIC &amp; PROCESS
              </span>
            </div>

            <div className="space-y-5">
              
              <div className="flex items-start gap-4">
                <span className="font-serif-luxury text-2xl font-light text-[#A27B5C] shrink-0">
                  01
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#161616]">
                    UNDERSTAND &amp; OBSERVE
                  </h4>
                  <p className="text-xs text-[#554F44] leading-relaxed">
                    Carefully studying banking policies, accounting rules, and project guidelines before diving in.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif-luxury text-2xl font-light text-[#A27B5C] shrink-0">
                  02
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#161616]">
                    STRUCTURE &amp; VALIDATE
                  </h4>
                  <p className="text-xs text-[#554F44] leading-relaxed">
                    Organizing numbers in spreadsheets, verifying document inputs, and structuring tasks for accuracy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif-luxury text-2xl font-light text-[#A27B5C] shrink-0">
                  03
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#161616]">
                    EXECUTE WITH DISCIPLINE
                  </h4>
                  <p className="text-xs text-[#554F44] leading-relaxed">
                    Applying time management, meeting strict turnaround times, and maintaining high ethical discretion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif-luxury text-2xl font-light text-[#A27B5C] shrink-0">
                  04
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#161616]">
                    REFINE &amp; GROW
                  </h4>
                  <p className="text-xs text-[#554F44] leading-relaxed">
                    Eagerly welcoming feedback from senior officers and continuously upgrading professional capabilities.
                  </p>
                </div>
              </div>

            </div>

            {/* Hobbies & Creative Interests callout */}
            <div className="pt-4 border-t border-[#E0D9C8]">
              <span className="text-[10px] tracking-widest uppercase text-[#8C8474] font-semibold block mb-2">
                HOBBIES &amp; CREATIVE EXPRESSION
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-[#FAF8F3] border border-[#DDD5C5] rounded flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#A27B5C] shrink-0" />
                  <div>
                    <span className="font-medium text-[#161616] block">Dancing</span>
                    <span className="text-[10px] text-[#777]">Rhythm &amp; Grace</span>
                  </div>
                </div>
                <div className="p-2.5 bg-[#FAF8F3] border border-[#DDD5C5] rounded flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A27B5C] shrink-0" />
                  <div>
                    <span className="font-medium text-[#161616] block">Writing Quotes</span>
                    <span className="text-[10px] text-[#777]">Reflective Writing</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Column 3 (4 cols): EDITORIAL QUOTE CARD (Directly mirroring the quote photo card in inspiration image!) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#E0D9C8] mb-4">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#8C8474]">
                ORIGINAL REFLECTIONS
              </span>
              <span className="text-[10px] text-[#8C6D4F] uppercase tracking-wider font-semibold">
                Quotes by Prabha
              </span>
            </div>

            {/* Dark Editorial Quote Box with photo background and monogram */}
            <div className="relative flex-1 bg-[#141414] text-[#F4EFE5] rounded-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between shadow-lg border border-[#2B2B2B]">
              
              {/* Subtle top quotation mark icon */}
              <div className="flex items-center justify-between text-[#A27B5C]">
                <Quote className="w-8 h-8 opacity-80" />
                <span className="text-[10px] tracking-widest uppercase text-[#9C9484]">
                  Thought 0{currentQuote.id} / 04
                </span>
              </div>

              {/* Quote Content */}
              <div className="my-6 space-y-3">
                <p className="font-serif-luxury text-base md:text-lg leading-relaxed text-[#F4EFE5] italic">
                  &ldquo;{currentQuote.quote}&rdquo;
                </p>
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#A27B5C] font-semibold block">
                    {currentQuote.context}
                  </span>
                </div>
              </div>

              {/* Card Footer with Monogram P.B., Avatar & Navigation Controls */}
              <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#A27B5C]/60 bg-[#222] shrink-0">
                    <img 
                      src={PROFILE_INFO.avatarUrl} 
                      alt="Prabha Bhatt" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 65%' }}
                    />
                  </div>
                  <div>
                    <span className="font-serif-luxury text-lg font-bold tracking-widest text-[#F4EFE5] block">
                      P.B.
                    </span>
                    <span className="block text-[9px] uppercase tracking-widest text-[#888]">
                      Prabha Bhatt
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevQuote}
                    className="p-1.5 rounded bg-[#222] hover:bg-[#333] text-[#DDD] transition-colors cursor-pointer"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextQuote}
                    className="p-1.5 rounded bg-[#222] hover:bg-[#333] text-[#DDD] transition-colors cursor-pointer"
                    aria-label="Next quote"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
