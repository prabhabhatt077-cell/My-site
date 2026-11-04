import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Download, Send } from 'lucide-react';
import { PROFILE_INFO, formatNepalPhoneNumber } from '../utils/portfolioData.ts';

interface ContactSectionProps {
  onOpenResume: () => void;
  onOpenReferences: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume, onOpenReferences }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <footer id="contact" className="bg-[#0D0D0D] text-[#EDE8DE] py-16 md:py-20 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 3-Column Footer Layout mirroring the bottom section of the reference image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1 (5 cols): Editorial Invitation Header */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#888] font-semibold block">
              OPPORTUNITIES &amp; COLLABORATION
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-white leading-tight">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="text-xs md:text-sm text-[#999] leading-relaxed max-w-md pt-2">
              Ready to bring dedication, fast learning, and positive energy to your banking operations or business team. Available for immediate internship placement in Nepal.
            </p>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#F4EFE5] text-[#111] rounded hover:bg-white transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CV (PDF)</span>
              </button>

              <button
                onClick={onOpenReferences}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-[#444] text-[#DDD] rounded hover:bg-[#222] transition-colors cursor-pointer"
              >
                <span>Request References</span>
              </button>
            </div>
          </div>

          {/* Column 2 (4 cols): Direct Contact Information */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#888] font-semibold block pb-2 border-b border-[#222]">
              DIRECT CONTACT
            </span>

            {/* Email */}
            <div className="space-y-1">
              <span className="text-[11px] text-[#777] uppercase tracking-wider block">Email Address</span>
              <div className="flex items-center justify-between group">
                <a 
                  href={`mailto:${PROFILE_INFO.email}?subject=Internship%20Inquiry%20-%20Prabha%20Bhatt`}
                  className="text-sm font-medium text-white hover:text-[#D1B89D] transition-colors underline-offset-4 hover:underline"
                >
                  {PROFILE_INFO.email}
                </a>
                <button
                  onClick={() => copyToClipboard(PROFILE_INFO.email, 'email')}
                  className="p-1.5 text-[#777] hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <span className="text-[11px] text-[#777] uppercase tracking-wider block">Phone (Nepal)</span>
              <div className="flex items-center justify-between group">
                <a 
                  href={`tel:${PROFILE_INFO.phone}`}
                  className="text-sm font-medium text-white hover:text-[#D1B89D] transition-colors"
                >
                  {PROFILE_INFO.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(PROFILE_INFO.phone, 'phone')}
                  className="p-1.5 text-[#777] hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <span className="text-[11px] text-[#777] uppercase tracking-wider block">Current Location</span>
              <div className="flex items-center gap-2 text-sm text-[#CCC]">
                <MapPin className="w-4 h-4 text-[#A27B5C] shrink-0" />
                <span>{PROFILE_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Column 3 (3 cols): Monogram & Credentials Seal */}
          <div className="md:col-span-3 flex flex-col justify-between h-full space-y-6 md:text-right">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#888] font-semibold block pb-2 border-b border-[#222]">
                STATUS &amp; MONOGRAM
              </span>
              <p className="text-xs text-[#AAA] mt-2">
                First Semester BBA Student
              </p>
              <p className="text-xs text-[#888]">
                Far Western University
              </p>
              <p className="text-[11px] text-[#A27B5C] font-medium mt-1">
                Open for Banking &amp; Corporate Internships
              </p>
            </div>

            {/* Giant Monogram 'PB' (mirroring 'AM' in reference photo) */}
            <div className="pt-4 flex md:justify-end">
              <div className="select-none">
                <span className="font-serif-luxury text-6xl sm:text-7xl font-bold tracking-widest text-[#2A2A2A] hover:text-[#383838] transition-colors">
                  PB
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Baseline Copyright & Disclaimers */}
        <div className="mt-16 pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#666] gap-4">
          <p>
            © {new Date().getFullYear()} {PROFILE_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Mahendranagar, Kanchanpur, Nepal</span>
            <span>·</span>
            <span>Far Western University</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
