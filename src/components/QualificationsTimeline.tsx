import React from 'react';
import { GraduationCap, BookOpen, Calendar, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { QUALIFICATIONS } from '../utils/portfolioData.ts';

export const QualificationsTimeline: React.FC = () => {
  return (
    <section id="qualifications" className="py-16 md:py-24 border-b border-[#E7E2D6] bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E7E2D6] gap-4">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C8474] font-medium block">
              ACADEMIC CREDENTIALS &amp; MILESTONES
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl text-[#161616] font-normal tracking-wide mt-1">
              Educational Qualifications
            </h2>
          </div>
          <div className="text-xs text-[#6C665A] max-w-sm">
            <p>
              A consistent academic record in Management with continuous pursuit of technical computer proficiency and business administration principles.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {QUALIFICATIONS.map((item, index) => {
            const isOngoing = item.status === 'ongoing';

            return (
              <div 
                key={item.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-xl border transition-all duration-300 ${
                  isOngoing 
                    ? 'bg-[#F2ECE1] border-[#CFC6B4] shadow-xs' 
                    : 'bg-[#FAF8F3] border-[#E5DFD1]'
                }`}
              >
                <div>
                  {/* Top Status & Index */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#DCD5C5] text-xs">
                    <span className="font-serif-luxury text-base text-[#8C8474] font-medium">
                      0{index + 1}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium ${
                      isOngoing 
                        ? 'bg-[#161616] text-[#F8F5EE]' 
                        : 'bg-[#E3DDCF] text-[#4A453D]'
                    }`}>
                      {isOngoing ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B887]" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-[#5A5448]" />
                          <span>Completed</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <div className="pt-5 space-y-2">
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#161616] leading-snug">
                      {item.degree}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D4F]">
                      <Building className="w-3.5 h-3.5" />
                      <span>{item.institution}</span>
                    </div>

                    <p className="text-xs text-[#5C564C] font-medium pt-1">
                      {item.levelOrStream}
                    </p>
                  </div>

                  {/* Timeline Badge */}
                  <div className="flex items-center gap-2 mt-4 text-[11px] text-[#7C7566] tracking-wide">
                    <Calendar className="w-3.5 h-3.5 text-[#A27B5C]" />
                    <span>{item.timeline}</span>
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-[#DCD5C5] space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#554F44] leading-relaxed">
                        <span className="text-[#A27B5C] font-bold text-xs">·</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer seal */}
                <div className="pt-6 mt-6 border-t border-[#DCD5C5] flex items-center justify-between text-[11px] text-[#8C8474]">
                  <span>Nepal Academic Curriculum</span>
                  <span className="font-serif-luxury uppercase tracking-wider text-[#161616]">
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Diploma Spotlight Bar */}
        <div className="mt-8 p-6 bg-[#EFECE4] border border-[#D5CDBD] rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#161616] text-[#F8F5EE] rounded-lg shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6 text-[#E5B887]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest uppercase text-[#8C8474] font-semibold">
                  Technical Certification
                </span>
                <span className="text-[10px] bg-[#DCD5C5] px-1.5 py-0.5 rounded text-[#333] font-medium">
                  Verified Diploma
                </span>
              </div>
              <h4 className="font-serif-luxury text-lg font-medium text-[#161616] mt-0.5">
                Diploma in Computer (PDICA)
              </h4>
              <p className="text-xs text-[#5C564C] mt-1 max-w-xl">
                Certified in Professional Diploma in Computer Applications covering advanced spreadsheet modeling (MS Excel), formal document generation (MS Word), presentation design (MS PowerPoint), database basics, and internet communications.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-semibold text-[#161616] bg-[#FAF8F3] px-3.5 py-2 rounded border border-[#CFC6B4]">
              Immediate Office Utility
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
