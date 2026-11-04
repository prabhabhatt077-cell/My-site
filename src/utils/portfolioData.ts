export interface Qualification {
  id: string;
  degree: string;
  institution: string;
  levelOrStream: string;
  timeline: string;
  status: 'ongoing' | 'completed';
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  category: 'technical' | 'personal' | 'language';
  skills: { name: string; level: string; note?: string }[];
}

export interface FocusPillar {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  keyCompetencies: string[];
  relevance: string;
}

export interface QuoteItem {
  id: number;
  quote: string;
  context: string;
  theme: string;
}

export const PROFILE_INFO = {
  name: "PRABHA BHATT",
  title: "BBA Student · Fresher",
  headline: "Aspiring Banking & Business Administration Professional",
  phone: "9812345678",
  formattedPhone: "+977 9812345678",
  email: "Prabhabhatt077@gmail.com",
  address: "Mahendranagar, Kanchanpur, Nepal",
  avatarUrl: "/assets/aistudio/IMG-20260521-WA0056_7bdc24ac.jpg",
  careerObjective:
    "Motivated and enthusiastic first-semester BBA student seeking an internship opportunity in a reputable bank or company. Eager to gain practical knowledge, develop professional skills, and apply academic learning in a real-world working environment. Committed to learning, teamwork, and personal growth.",
  workExperience:
    "Fresher – Currently seeking an opportunity to gain practical workplace experience through an internship.",
  referencesStatus: "Available upon request",
  hobbies: [
    { name: "Writing Quotes", description: "Expressing thoughts on perseverance, personal growth, and leadership." },
    { name: "Dancing", description: "Creative rhythm, discipline, and cultural appreciation." }
  ]
};

export const QUALIFICATIONS: Qualification[] = [
  {
    id: "bba",
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Far Western University",
    levelOrStream: "First Semester · Management & Banking Focus",
    timeline: "Expected Graduation: 2030",
    status: "ongoing",
    highlights: [
      "Currently enrolled in foundational business administration and managerial economics",
      "Actively developing core competencies in financial principles, organizational management, and business communication",
      "Seeking practical banking / enterprise internship to complement rigorous academic training"
    ]
  },
  {
    id: "plus2",
    degree: "Higher Secondary Education (+2)",
    institution: "Aadarsh Vidya Niketan",
    levelOrStream: "Stream: Management",
    timeline: "Completion Year: 2082 (B.S.)",
    status: "completed",
    highlights: [
      "Specialized in Business Studies, Principles of Accounting, and Economics",
      "Built strong foundation in double-entry bookkeeping and business mathematics",
      "Demonstrated exemplary discipline and academic consistency"
    ]
  },
  {
    id: "see",
    degree: "Secondary Education (SEE)",
    institution: "Purna Secondary School",
    levelOrStream: "General Secondary Curriculum",
    timeline: "Completed",
    status: "completed",
    highlights: [
      "Graduated with solid academic standing across sciences, mathematics, and social studies",
      "Participated actively in extracurricular events, leadership activities, and school programs"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Computer & Technical Skills",
    category: "technical",
    skills: [
      { name: "Diploma in Computer (PDICA)", level: "Certified Diploma", note: "Professional Diploma in Computer Applications" },
      { name: "MS Excel & Spreadsheets", level: "Intermediate", note: "Financial tables, data sorting, arithmetic functions" },
      { name: "MS Word & Document Drafting", level: "Proficient", note: "Formal business correspondence, reports, formatting" },
      { name: "MS PowerPoint Presentations", level: "Proficient", note: "Executive presentations and academic showcases" },
      { name: "Email & Internet Operations", level: "Proficient", note: "Digital communication, research, workflow tools" }
    ]
  },
  {
    title: "Personal & Professional Skills",
    category: "personal",
    skills: [
      { name: "Leadership", level: "Core Strength", note: "Guiding team initiatives and encouraging accountability" },
      { name: "Time Management", level: "Core Strength", note: "Prioritizing deliverables and managing academic schedules" },
      { name: "Willingness to Learn", level: "Core Strength", note: "Fast learner eager to absorb banking and corporate workflows" },
      { name: "Teamwork & Collaboration", level: "High", note: "Fostering positive, constructive workplace relationships" },
      { name: "Professional Ethics", level: "High", note: "Confidentiality, honesty, and diligence in financial contexts" }
    ]
  },
  {
    title: "Languages",
    category: "language",
    skills: [
      { name: "Nepali", level: "Native / Fluent", note: "Mother tongue, fluent oral and written communication" },
      { name: "English", level: "Professional Working", note: "Academic and business correspondence" }
    ]
  }
];

export const FOCUS_PILLARS: FocusPillar[] = [
  {
    id: "banking",
    number: "01",
    title: "Banking & Financial Foundations",
    category: "FINANCIAL SECTOR",
    description: "Deep interest in retail banking operations, customer deposit processing, and financial accounting principles.",
    keyCompetencies: ["Cash & Ledger Management", "Financial Statement Basics", "Banking Customer Service", "Transaction Accuracy"],
    relevance: "Directly prepared to support branch operations, account opening verification, and ledger record-keeping as an intern."
  },
  {
    id: "management",
    number: "02",
    title: "Business Management & Administration",
    category: "ORGANIZATIONAL EXCELLENCE",
    description: "Understanding organizational structures, office workflows, and executive coordination.",
    keyCompetencies: ["Office Operations", "Document Filing & Archiving", "Cross-department Coordination", "Meeting Support"],
    relevance: "Ready to assist corporate teams in daily administrative tasks and streamline routine document pipelines."
  },
  {
    id: "digital",
    number: "03",
    title: "Computer Applications (PDICA)",
    category: "OFFICE AUTOMATION",
    description: "Hands-on certification in professional computer applications, data entry, and digital office management.",
    keyCompetencies: ["Spreadsheet Modeling", "Report Formatting", "Digital File Systems", "Data Entry Speed & Precision"],
    relevance: "Certified diploma ensures immediate operational readiness without basic software training requirements."
  },
  {
    id: "growth",
    number: "04",
    title: "Leadership & Continuous Learning",
    category: "PROFESSIONAL DISCIPLINE",
    description: "Commitment to proactive initiative, active listening, and high ethical standards in everyday interactions.",
    keyCompetencies: ["Adaptive Problem Solving", "Time Discipline", "Team Collaboration", "Empathetic Communication"],
    relevance: "Enthusiastic mindset and hunger for professional mentorship makes for an ideal high-potential intern."
  }
];

export const PRABHA_QUOTES: QuoteItem[] = [
  {
    id: 1,
    quote: "True learning does not end at the classroom door; it begins the moment you apply knowledge with patience, humility, and purpose.",
    context: "On Academic & Practical Growth",
    theme: "Learning"
  },
  {
    id: 2,
    quote: "Discipline is the quiet bridge between aspiring to achieve something great and turning that dream into everyday reality.",
    context: "On Consistency & Time Management",
    theme: "Discipline"
  },
  {
    id: 3,
    quote: "A great leader is first an attentive listener who respects every voice before making a decision that serves the whole team.",
    context: "On Leadership & Integrity",
    theme: "Leadership"
  },
  {
    id: 4,
    quote: "Every new beginning holds unlimited potential when approached with courage, dedication, and a willingness to learn.",
    context: "On Stepping into Professional Life",
    theme: "Initiative"
  }
];

export function formatNepalPhoneNumber(rawPhone: string): string {
  const cleaned = rawPhone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `+977 ${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  return rawPhone;
}

export function buildMailtoUrl(email: string, subject: string, body: string): string {
  const encSubject = encodeURIComponent(subject);
  const encBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encSubject}&body=${encBody}`;
}

export function getInternshipReadinessScore(): { score: number; label: string; verifiedItems: number } {
  return {
    score: 100,
    label: "Internship Ready",
    verifiedItems: 6
  };
}
