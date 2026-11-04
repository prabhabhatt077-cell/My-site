import React, { useRef, useState } from 'react';
import { X, Printer, Download, Copy, Check, Sparkles, MapPin, Mail, Phone, Calendar, Building, Award } from 'lucide-react';
import { PROFILE_INFO, QUALIFICATIONS, SKILL_CATEGORIES } from '../utils/portfolioData.ts';

interface ResumeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeExportModal: React.FC<ResumeExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlainTextResume = () => {
    const text = `
PRABHA BHATT
BBA Student | Fresher
Phone: ${PROFILE_INFO.phone}
Email: ${PROFILE_INFO.email}
Address: ${PROFILE_INFO.address}

CAREER OBJECTIVE
${PROFILE_INFO.careerObjective}

EDUCATIONAL QUALIFICATIONS
- Bachelor of Business Administration (BBA)
  Institution: Far Western University
  Level: First Semester | Expected Graduation: 2030

- Higher Secondary Education (+2)
  Institution: Aadarsh Vidya Niketan
  Stream: Management | Completion Year: 2082

- Secondary Education (SEE)
  Institution: Purna Secondary School

COMPUTER SKILLS
- Diploma in Computer (PDICA)
- MS Word, MS Excel, MS PowerPoint, Internet & Email Operations

PERSONAL SKILLS
- Leadership
- Time Management
- Willingness to Learn

LANGUAGES
- Nepali (Native)
- English (Working Professional)

HOBBIES & INTERESTS
- Dancing
- Writing Quotes

WORK EXPERIENCE
${PROFILE_INFO.workExperience}

REFERENCES
${PROFILE_INFO.referencesStatus}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="bg-white text-[#111] rounded-xl max-w-4xl w-full my-8 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Controls Toolbar (Hidden in Print) */}
        <div className="no-print bg-[#161616] text-[#F8F5EE] px-6 py-4 flex items-center justify-between border-b border-[#333]">
          <div className="flex items-center gap-3">
            <span className="font-serif-luxury text-base font-semibold tracking-wide">
              Executive Resume Preview
            </span>
            <span className="text-[11px] bg-[#333] px-2 py-0.5 rounded text-[#DDD]">
              A4 Format / PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlainTextResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#262626] hover:bg-[#333] rounded text-[#DDD] transition-colors cursor-pointer"
              title="Copy plain text CV to clipboard"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold bg-[#F8F5EE] hover:bg-white text-[#161616] rounded transition-colors cursor-pointer shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#AAA] hover:text-white rounded hover:bg-[#262626] transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content (Optimized for both screen inspection and paper print) */}
        <div className="overflow-y-auto p-6 md:p-10 bg-[#FAFAFA] flex justify-center">
          <div className="bg-white p-8 md:p-12 shadow-sm border border-[#E5E5E5] rounded-lg max-w-[800px] w-full text-[#222] font-sans">
            
            {/* Header / Contact Details */}
            <div className="border-b-2 border-[#161616] pb-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif-luxury font-bold tracking-tight text-[#111] uppercase">
                    {PROFILE_INFO.name}
                  </h1>
                  <p className="text-sm font-semibold tracking-wider text-[#A27B5C] uppercase mt-1">
                    BBA Student · Fresher | Banking &amp; Management Aspirant
                  </p>
                </div>

                <div className="text-xs text-[#555] space-y-1 md:text-right">
                  <div className="flex items-center md:justify-end gap-1.5">
                    <Phone className="w-3 h-3 text-[#A27B5C]" />
                    <span>{PROFILE_INFO.phone}</span>
                  </div>
                  <div className="flex items-center md:justify-end gap-1.5">
                    <Mail className="w-3 h-3 text-[#A27B5C]" />
                    <span>{PROFILE_INFO.email}</span>
                  </div>
                  <div className="flex items-center md:justify-end gap-1.5">
                    <MapPin className="w-3 h-3 text-[#A27B5C]" />
                    <span>{PROFILE_INFO.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="mb-6 resume-section">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#161616] border-b border-[#CCC] pb-1 mb-2.5">
                Career Objective
              </h2>
              <p className="text-xs leading-relaxed text-[#444] text-justify">
                {PROFILE_INFO.careerObjective}
              </p>
            </div>

            {/* Educational Qualifications */}
            <div className="mb-6 resume-section">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#161616] border-b border-[#CCC] pb-1 mb-3">
                Educational Qualifications
              </h2>
              
              <div className="space-y-4">
                {QUALIFICATIONS.map((item) => (
                  <div key={item.id} className="text-xs">
                    <div className="flex justify-between items-baseline font-semibold text-[#111]">
                      <span>{item.degree}</span>
                      <span className="text-[#666] font-normal">{item.timeline}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-[#555] mt-0.5">
                      <span>{item.institution}</span>
                      <span className="italic text-[11px]">{item.levelOrStream}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Computer & Technical Skills */}
            <div className="mb-6 resume-section">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#161616] border-b border-[#CCC] pb-1 mb-2.5">
                Computer &amp; Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#444]">
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-[#111]">· Diploma in Computer (PDICA):</span>
                  <span>Professional Diploma in Computer Application</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-[#111]">· MS Office Suite:</span>
                  <span>Word (Drafting), Excel (Spreadsheets), PowerPoint</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-[#111]">· Digital Operations:</span>
                  <span>Internet Research, Professional Emailing, Document Management</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-[#111]">· Data Accuracy:</span>
                  <span>Precision Entry, Ledger Verification Basics</span>
                </div>
              </div>
            </div>

            {/* Personal Skills & Competencies */}
            <div className="mb-6 resume-section">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#161616] border-b border-[#CCC] pb-1 mb-2.5">
                Personal Skills &amp; Competencies
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#444]">
                <span><strong>Leadership:</strong> Proactive initiative and team representation</span>
                <span><strong>Time Management:</strong> Punctual, organized deadline adherence</span>
                <span><strong>Willingness to Learn:</strong> Adaptable, receptive to mentorship</span>
              </div>
            </div>

            {/* Languages, Hobbies & Work Experience */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 resume-section">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#161616] border-b border-[#CCC] pb-1 mb-2">
                  Languages
                </h2>
                <p className="text-xs text-[#444]">
                  Nepali (Native / Fluent)<br />
                  English (Professional Working)
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#161616] border-b border-[#CCC] pb-1 mb-2">
                  Hobbies &amp; Interests
                </h2>
                <p className="text-xs text-[#444]">
                  Dancing<br />
                  Writing Quotes
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#161616] border-b border-[#CCC] pb-1 mb-2">
                  Work Experience
                </h2>
                <p className="text-xs text-[#444]">
                  <strong>Fresher:</strong> Seeking practical internship in banking or corporate sector.
                </p>
              </div>
            </div>

            {/* References */}
            <div className="pt-2 border-t border-[#E5E5E5] flex justify-between items-center text-xs text-[#777] resume-section">
              <span><strong>References:</strong> Available upon request</span>
              <span>Far Western University · Kanchanpur, Nepal</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
