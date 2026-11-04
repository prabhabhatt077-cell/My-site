import React, { useState } from 'react';
import { X, Mail, Phone, Send, CheckCircle2, ShieldCheck, Building, UserCheck } from 'lucide-react';
import { PROFILE_INFO, buildMailtoUrl } from '../utils/portfolioData.ts';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceModal: React.FC<ReferenceModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    organization: '',
    requesterName: '',
    roleTitle: '',
    email: '',
    messageType: 'internship', // 'internship' | 'reference'
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto draft with filled details
    const subject = formData.messageType === 'internship' 
      ? `Internship Opportunity: ${formData.organization} - Prabha Bhatt`
      : `Reference Request: ${formData.organization} - Prabha Bhatt`;

    const body = `
Hello Prabha,

I would like to connect regarding ${formData.messageType === 'internship' ? 'an internship opportunity' : 'academic references'}.

From: ${formData.requesterName} (${formData.roleTitle})
Organization: ${formData.organization}
Email: ${formData.email}

Additional Notes:
${formData.notes || 'Looking forward to reviewing your academic background and discussing opportunities.'}

Best regards,
${formData.requesterName}
    `.trim();

    window.open(buildMailtoUrl(PROFILE_INFO.email, subject, body), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FAF8F3] text-[#161616] border border-[#DDD5C5] rounded-xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EAE5D9] text-[#777] hover:text-[#161616] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-medium text-[#161616]">
              Request Prepared
            </h3>
            <p className="text-xs text-[#555] max-w-sm mx-auto leading-relaxed">
              Your inquiry has been formulated. You can also reach Prabha directly via email or phone:
            </p>
            <div className="p-3 bg-[#EFECE4] rounded border border-[#D5CDBD] text-xs space-y-1">
              <p><strong>Email:</strong> {PROFILE_INFO.email}</p>
              <p><strong>Phone:</strong> {PROFILE_INFO.phone}</p>
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#161616] text-[#F8F5EE] rounded cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8C6D4F] font-semibold mb-1">
              <UserCheck className="w-4 h-4" />
              <span>Verified Background</span>
            </div>

            <h3 className="font-serif-luxury text-2xl font-medium text-[#161616] mb-2">
              Request References &amp; Connect
            </h3>

            <p className="text-xs text-[#5C564C] leading-relaxed mb-5">
              Prabha Bhatt is currently enrolled in the BBA Program at Far Western University. Academic and character references from university faculty and secondary school administrators are available upon request.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#444] mb-1">
                  Inquiry Purpose
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, messageType: 'internship' })}
                    className={`py-2 px-3 rounded text-center font-medium border transition-colors cursor-pointer ${
                      formData.messageType === 'internship'
                        ? 'bg-[#161616] text-[#F8F5EE] border-[#161616]'
                        : 'bg-white text-[#555] border-[#DDD]'
                    }`}
                  >
                    Internship Placement
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, messageType: 'reference' })}
                    className={`py-2 px-3 rounded text-center font-medium border transition-colors cursor-pointer ${
                      formData.messageType === 'reference'
                        ? 'bg-[#161616] text-[#F8F5EE] border-[#161616]'
                        : 'bg-white text-[#555] border-[#DDD]'
                    }`}
                  >
                    Academic Reference
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#444] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.requesterName}
                    onChange={(e) => setFormData({ ...formData, requesterName: e.target.value })}
                    placeholder="e.g. Branch Manager"
                    className="w-full px-3 py-2 bg-white border border-[#DDD] rounded text-xs focus:outline-none focus:border-[#161616]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#444] mb-1">
                    Bank / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Nepal Bank / Nabil Bank"
                    className="w-full px-3 py-2 bg-white border border-[#DDD] rounded text-xs focus:outline-none focus:border-[#161616]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#444] mb-1">
                  Official Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@bank.com.np"
                  className="w-full px-3 py-2 bg-white border border-[#DDD] rounded text-xs focus:outline-none focus:border-[#161616]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#444] mb-1">
                  Brief Note or Role Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Internship schedule, branch location, or reference requirements..."
                  className="w-full px-3 py-2 bg-white border border-[#DDD] rounded text-xs focus:outline-none focus:border-[#161616]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-[#CCC] rounded text-[#555] hover:bg-[#EFECE4] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#161616] text-[#F8F5EE] font-semibold rounded hover:bg-[#2C2C2C] transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
