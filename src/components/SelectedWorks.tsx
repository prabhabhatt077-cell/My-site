import React, { useState } from 'react';
import { ArrowRight, BookOpen, Layers, Monitor, Award, X, Check } from 'lucide-react';
import { FOCUS_PILLARS, FocusPillar } from '../utils/portfolioData.ts';

interface SelectedWorksProps {
  onSelectPillar?: (pillar: FocusPillar) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = () => {
  const [activeModalPillar, setActiveModalPillar] = useState<FocusPillar | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'banking':
        return <BookOpen className="w-5 h-5 text-[#D1B89D]" />;
      case 'management':
        return <Layers className="w-5 h-5 text-[#D1B89D]" />;
      case 'digital':
        return <Monitor className="w-5 h-5 text-[#D1B89D]" />;
      case 'growth':
      default:
        return <Award className="w-5 h-5 text-[#D1B89D]" />;
    }
  };

  return (
    <section id="pillars" className="bg-[#121212] text-[#F4EFE5] py-16 md:py-24 border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (mirroring the reference image's 'SELECTED WORKS' banner) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#2A2A2A] gap-4">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#9C9484] font-medium block">
              ACADEMIC FOUNDATION &amp; INTERNSHIP SCOPE
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl text-[#F4EFE5] font-normal tracking-wide mt-1">
              Core Competency Pillars
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C2B8A3] hover:text-white transition-colors cursor-pointer">
            <span>Prepared for Corporate Banking</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* 4 Sleek Cards Grid (mirroring the 4 cards in the inspiration photo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {FOCUS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => setActiveModalPillar(pillar)}
              className="group relative flex flex-col justify-between bg-[#1A1A1A] hover:bg-[#202020] border border-[#2B2B2B] hover:border-[#444] rounded-lg p-6 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* Card Header with index number and icon */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#282828]">
                  <span className="font-serif-luxury text-lg text-[#888] group-hover:text-[#D1B89D] transition-colors">
                    {pillar.number}
                  </span>
                  <div className="p-2 rounded bg-[#242424] group-hover:bg-[#2B2722] transition-colors">
                    {getIcon(pillar.id)}
                  </div>
                </div>

                {/* Category & Title */}
                <div className="pt-5 space-y-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#A89F8F] font-medium block">
                    {pillar.category}
                  </span>
                  <h3 className="font-serif-luxury text-xl text-[#F4EFE5] group-hover:text-white font-medium leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#9E988B] leading-relaxed pt-2 line-clamp-3">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Competency Bullets */}
              <div className="pt-6 border-t border-[#262626] mt-6">
                <div className="space-y-1.5 mb-4">
                  {pillar.keyCompetencies.slice(0, 2).map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-[#BBB]">
                      <span className="w-1 h-1 rounded-full bg-[#A27B5C]" />
                      <span className="truncate">{comp}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#A27B5C] group-hover:text-[#D1B89D] font-medium pt-2">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Kicker */}
        <div className="mt-12 p-6 bg-[#181818] border border-[#2B2B2B] rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#A27B5C] font-semibold">
              ACADEMIC INSTITUTION
            </span>
            <p className="text-sm text-[#DDD]">
              Bachelor of Business Administration (BBA) · Far Western University · Class of 2030
            </p>
          </div>
          <div className="text-xs text-[#999] md:text-right">
            <span>Specialization focus: Banking, Accounting &amp; Organizational Governance</span>
          </div>
        </div>

      </div>

      {/* Modal for viewing detailed pillar competencies */}
      {activeModalPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-[#1A1A1A] border border-[#3E3830] text-[#F4EFE5] rounded-xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#282828] text-[#999] hover:text-white transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#A27B5C] font-medium mb-2">
              <span>{activeModalPillar.category}</span>
              <span>·</span>
              <span>Pillar {activeModalPillar.number}</span>
            </div>

            <h3 className="font-serif-luxury text-2xl md:text-3xl font-medium text-white mb-4">
              {activeModalPillar.title}
            </h3>

            <p className="text-sm text-[#CCC] leading-relaxed mb-6">
              {activeModalPillar.description}
            </p>

            <div className="border-t border-[#2A2A2A] pt-4 mb-6">
              <h4 className="text-xs tracking-wider uppercase text-[#A89F8F] font-semibold mb-3">
                Key Internship Competencies:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalPillar.keyCompetencies.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#DDD]">
                    <Check className="w-4 h-4 text-[#A27B5C] shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#242424] p-4 rounded-lg border border-[#333]">
              <span className="block text-[11px] uppercase tracking-wider text-[#A27B5C] font-semibold mb-1">
                Value to Employer / Bank
              </span>
              <p className="text-xs text-[#BBB] leading-relaxed">
                {activeModalPillar.relevance}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveModalPillar(null)}
                className="px-4 py-2 text-xs uppercase tracking-wider bg-[#F4EFE5] text-[#121212] font-semibold rounded hover:bg-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
