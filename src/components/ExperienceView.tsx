import { NavPath } from '../types';
import { EXPERIENCES } from '../data/portfolioData';
import {
  QrCode,
  TrendingUp,
  Award,
  FileCheck2,
  MapPin,
  CheckCircle2,
  Quote,
  Medal,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Map,
  PhoneCall,
  FolderLock,
  LineChart,
  Sparkles,
  ArrowDown,
  Zap,
  Clock,
  Check,
  Building2,
  Laptop
} from 'lucide-react';

interface ExperienceViewProps {
  onNavigate: (path: NavPath) => void;
  onOpenCertificate: (id: string) => void;
}

export default function ExperienceView({ onNavigate, onOpenCertificate }: ExperienceViewProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      {/* Subtle Ambient Glow Overlay */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 right-10 w-96 h-96 bg-gradient-to-br from-[#ffd9de]/25 via-[#fdc394]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-tr from-[#f9dec0]/40 to-transparent rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Section Heading */}
          <div className="flex flex-col gap-2 mb-8 md:mb-12">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-[#ffd9de] text-[#610025] font-['Space_Grotesk'] text-xs uppercase tracking-widest rounded-full font-bold">
                Engineering Chronicle
              </span>
              <span className="w-8 h-px bg-[#dcbfc3]/60"></span>
              <span className="font-['Space_Grotesk'] text-xs text-[#564145] tracking-wider">
                Verified Records &amp; Clinical Impact
              </span>
            </div>

            <h1 className="font-['Epilogue'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#261907] tracking-tight leading-tight mt-1">
              Work Experience &amp; Professional Internships
            </h1>

            <p className="font-['DM_Sans'] text-base md:text-lg text-[#564145] max-w-3xl leading-relaxed">
              Practical engineering practice rooted in healthcare wayfinding architectures, data analytics, and autonomous workflow automation across Pondicherry.
            </p>
          </div>

          {/* Quick Executive Summary Ribbon / Bento Metric Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="flex flex-col p-5 rounded-xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/30 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#82193a] font-bold">
                  Deployments
                </span>
                <QrCode size={20} className="text-[#82193a]" />
              </div>
              <span className="font-['Epilogue'] text-3xl font-extrabold text-[#261907] mt-2">100%</span>
              <span className="font-['DM_Sans'] text-xs text-[#564145]">Live QR Indoor Hospital Wayfinding</span>
            </div>

            <div className="flex flex-col p-5 rounded-xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/30 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#80552f] font-bold">
                  Efficiency Lift
                </span>
                <TrendingUp size={20} className="text-[#80552f]" />
              </div>
              <span className="font-['Epilogue'] text-3xl font-extrabold text-[#261907] mt-2">-34%</span>
              <span className="font-['DM_Sans'] text-xs text-[#564145]">Wayfinding Inquiries &amp; MR File Delays</span>
            </div>

            <div className="flex flex-col p-5 rounded-xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/30 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#3f281f] font-bold">
                  Verified Hours
                </span>
                <Award size={20} className="text-[#3f281f]" />
              </div>
              <span className="font-['Epilogue'] text-3xl font-extrabold text-[#261907] mt-2">320+</span>
              <span className="font-['DM_Sans'] text-xs text-[#564145]">Supervised Clinical &amp; Tech Hours</span>
            </div>

            <div className="flex flex-col p-5 rounded-xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/30 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#82193a] font-bold">
                  Credentials
                </span>
                <FileCheck2 size={20} className="text-[#82193a]" />
              </div>
              <span className="font-['Epilogue'] text-3xl font-extrabold text-[#261907] mt-2">2</span>
              <span className="font-['DM_Sans'] text-xs text-[#564145]">Signed Institutional Seals Attached</span>
            </div>
          </div>

          {/* Main Layout: Asymmetric Timeline & Editorial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Sticky Blueprint & Perspective Anchor */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
              {/* Field Methodology Box */}
              <div className="p-6 rounded-xl bg-[#ffebd5] shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#82193a]">
                  <Sparkles size={20} />
                  <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                    Field Methodology
                  </span>
                </div>
                <p className="font-['DM_Sans'] text-sm text-[#261907] leading-relaxed">
                  My engineering roles merge fast prototyping with operational precision. Whether restructuring clinical workflows at ophthalmological institutes or setting up AI pipelines inside fast-moving software houses, every release is measured by verified user clarity.
                </p>

                <div className="flex flex-col gap-2 pt-2 border-t border-[#dcbfc3]/30">
                  <div className="flex items-center justify-between font-['Space_Grotesk'] text-xs text-[#564145]">
                    <span>Frontend Systems (React, Tailwind)</span>
                    <span className="font-bold text-[#82193a]">90%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f9dec0] overflow-hidden">
                    <div className="h-full bg-[#82193a] rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-['Space_Grotesk'] text-xs text-[#564145]">
                    <span>Data Diagnostics (Python, SQL, Sheets)</span>
                    <span className="font-bold text-[#80552f]">85%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f9dec0] overflow-hidden">
                    <div className="h-full bg-[#80552f] rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-['Space_Grotesk'] text-xs text-[#564145]">
                    <span>Autonomous &amp; Low-Code Workflows</span>
                    <span className="font-bold text-[#3f281f]">80%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f9dec0] overflow-hidden">
                    <div className="h-full bg-[#573e34] rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#ffffff] flex items-start gap-2.5 border border-[#dcbfc3]/40 mt-1">
                  <CheckCircle2 size={18} className="text-[#82193a] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">
                      Institutional Validation
                    </span>
                    <span className="font-['DM_Sans'] text-xs text-[#564145]">
                      All positions verified via official physical completion letters authenticated by governing trusts.
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Navigation / Filters */}
              <div className="p-5 rounded-xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/30 flex flex-col gap-2.5">
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#564145] font-bold">
                  Timeline Quick Jump
                </span>
                <button
                  onClick={() => scrollToSection('upturne-role')}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#ffebd5] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#80552f]"></span>
                    <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#261907]">
                      Upturne Software &amp; Services
                    </span>
                  </div>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">2026</span>
                </button>

                <button
                  onClick={() => scrollToSection('aravind-role')}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#ffebd5] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#82193a]"></span>
                    <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#261907]">
                      Aravind Eye Hospital
                    </span>
                  </div>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">2025</span>
                </button>

                <button
                  onClick={() => scrollToSection('impact-matrix')}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#ffebd5] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3f281f]"></span>
                    <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#261907]">
                      Technology &amp; Impact Matrix
                    </span>
                  </div>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">Review</span>
                </button>
              </div>
            </div>

            {/* Right Column: Chronological Interactive Experience Stream */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* EXPERIENCE 1: Upturne Software & Services */}
              <article
                id="upturne-role"
                className="relative rounded-2xl bg-[#ffffff] shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col gap-5 border border-[#dcbfc3]/40"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#dcbfc3]/30">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                      Internship
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#564145] font-mono">
                      14 June 2026 – 13 July 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#564145] text-xs font-['Space_Grotesk']">
                    <MapPin size={15} className="text-[#80552f]" />
                    <span>Pulsebay Coworking, South Boulevard, Puducherry</span>
                  </div>
                </div>

                {/* Role Title & Button */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-['Epilogue'] text-xl md:text-2xl font-bold text-[#261907] tracking-tight">
                      Web Development &amp; AI Automation Intern
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="font-['Epilogue'] text-base text-[#80552f] font-semibold">
                        Upturne Software &amp; Services
                      </span>
                      <span className="text-[#dcbfc3]">•</span>
                      <span className="font-['DM_Sans'] text-xs text-[#564145]">
                        On-premise Technical Immersion
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCertificate('upturne-cert')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ffebd5] text-[#82193a] hover:bg-[#82193a] hover:text-white font-['Space_Grotesk'] text-xs font-semibold transition-all self-start shadow-xs cursor-pointer"
                  >
                    <Award size={16} />
                    <span>View Certificate</span>
                  </button>
                </div>

                {/* Focus Banner */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                  <div className="md:col-span-8 flex flex-col justify-center gap-1">
                    <span className="font-['Space_Grotesk'] text-xs uppercase text-[#80552f] tracking-wider font-bold">
                      Focus &amp; Scope
                    </span>
                    <p className="font-['DM_Sans'] text-sm text-[#261907] leading-relaxed">
                      Spearheaded modern web application architectures and workflow automations inside active development cycles. Collaborated in fast-paced hackathons addressing real-time software bottlenecks and algorithmic task execution.
                    </p>
                  </div>
                  <div className="md:col-span-4 flex flex-col items-center justify-center p-3 bg-[#ffebd5] rounded-lg text-center border border-[#dcbfc3]/20">
                    <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase">Issued By</span>
                    <span className="font-['Epilogue'] text-sm font-bold text-[#261907] mt-1">Sophas Samuel S</span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#80552f]">Founder &amp; CEO, Upturne</span>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold uppercase tracking-wider">
                    Key Deliverables &amp; Engineering Engagements
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-start gap-2.5 font-['DM_Sans'] text-xs md:text-sm text-[#261907]">
                      <CheckCircle2 size={18} className="text-[#80552f] shrink-0 mt-0.5" />
                      <span><strong>Full-Lifecycle Web Engineering:</strong> Built responsive client modules, integrated RESTful APIs, and maintained clean software repositories under production review workflows.</span>
                    </li>
                    <li className="flex items-start gap-2.5 font-['DM_Sans'] text-xs md:text-sm text-[#261907]">
                      <CheckCircle2 size={18} className="text-[#80552f] shrink-0 mt-0.5" />
                      <span><strong>AI Automation Pipelines:</strong> Explored generative scripting and autonomous triggers to streamline repetitive data intake and internal notification systems.</span>
                    </li>
                    <li className="flex items-start gap-2.5 font-['DM_Sans'] text-xs md:text-sm text-[#261907]">
                      <CheckCircle2 size={18} className="text-[#80552f] shrink-0 mt-0.5" />
                      <span><strong>Hackathon Problem Solving:</strong> Represented the team in time-bound sprint competitions, translating operational challenges into working UI prototypes within 48-hour delivery windows.</span>
                    </li>
                  </ul>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-xl bg-[#ffe4c6]/50 border border-[#dcbfc3]/30 flex items-start gap-3">
                  <Quote size={24} className="text-[#82193a] shrink-0" />
                  <p className="font-['DM_Sans'] text-xs md:text-sm text-[#261907] italic leading-relaxed">
                    "Throughout the internship period, she demonstrated a willingness to learn and gain practical experience. We appreciate your participation, efforts, and contributions during the internship."
                    <span className="block not-italic font-['Space_Grotesk'] text-xs text-[#564145] mt-1">
                      — Sophas Samuel S, Founder &amp; CEO (Upturne Software &amp; Services)
                    </span>
                  </p>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {['AI Automations', 'Web Applications', 'Workflow Design', 'Rapid Prototyping', 'Hackathons'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded bg-[#ffebd5] text-[#564145] font-['Space_Grotesk'] text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>

              {/* EXPERIENCE 2: Aravind Eye Hospital */}
              <article
                id="aravind-role"
                className="relative rounded-2xl bg-[#ffffff] shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col gap-5 border border-[#dcbfc3]/40"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#dcbfc3]/30">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded bg-[#ffd9de] text-[#610025] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                      Clinical Tech Internship
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#564145] font-mono">
                      16 June 2025 – 15 July 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#564145] text-xs font-['Space_Grotesk']">
                    <MapPin size={15} className="text-[#82193a]" />
                    <span>Cuddalore Main Road, Thavalakuppam, Pondicherry</span>
                  </div>
                </div>

                {/* Role Title & Button */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-['Epilogue'] text-xl md:text-2xl font-bold text-[#261907] tracking-tight">
                      Tech Intern &amp; Smart Systems Project Lead
                    </h2>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-['Epilogue'] text-base text-[#82193a] font-bold">
                        Aravind Eye Hospital &amp; Postgraduate Institute of Ophthalmology
                      </span>
                      <span className="text-[#dcbfc3]">•</span>
                      <span className="font-['DM_Sans'] text-xs text-[#564145]">
                        Run by Govel Trust
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCertificate('aravind-cert')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ffebd5] text-[#82193a] hover:bg-[#82193a] hover:text-white font-['Space_Grotesk'] text-xs font-semibold transition-all self-start shadow-xs cursor-pointer"
                  >
                    <Medal size={16} />
                    <span>View Certificate</span>
                  </button>
                </div>

                {/* Flagship Callout */}
                <div className="p-5 rounded-xl bg-[#ffe4c6] flex flex-col gap-2 border border-[#dcbfc3]/40">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#610025] text-white font-['Space_Grotesk'] text-xs font-bold">
                      <Sparkles size={14} />
                      Flagship Project
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs font-mono text-[#564145]">
                      Deployment: Netlify &amp; Bolt
                    </span>
                  </div>
                  <h3 className="font-['Epilogue'] text-base font-bold text-[#261907]">
                    "Enhancing Patient Experience through QR based Smart Navigation &amp; Support Analysis"
                  </h3>
                  <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145] leading-relaxed">
                    Devised an end-to-end tactile wayfinding system for outpatient departments across multiple hospital wings. Patients scan localized QR checkpoints to view interactive indoor maps with visual cues, avoiding high-congestion inquiry desks.
                  </p>
                </div>

                {/* Informatics 4-Quadrant Grid */}
                <div className="flex flex-col gap-3">
                  <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold uppercase tracking-wider">
                    Informatics, Systems Analysis &amp; Data Operations
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#fff1e5] flex flex-col gap-1.5 border border-[#dcbfc3]/30">
                      <div className="flex items-center gap-2 text-[#82193a]">
                        <Map size={18} />
                        <span className="font-['Space_Grotesk'] text-xs font-bold">Indoor Navigation Web App</span>
                      </div>
                      <p className="font-['DM_Sans'] text-xs text-[#261907] leading-relaxed">
                        Engineered using React.js and Tailwind CSS. Implemented clickable map pins, high-definition corridor reference photos, and multi-language support. Placed physical posters across primary hospital entry thresholds.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#fff1e5] flex flex-col gap-1.5 border border-[#dcbfc3]/30">
                      <div className="flex items-center gap-2 text-[#80552f]">
                        <PhoneCall size={18} />
                        <span className="font-['Space_Grotesk'] text-xs font-bold">Call Center Optimization</span>
                      </div>
                      <p className="font-['DM_Sans'] text-xs text-[#261907] leading-relaxed">
                        Analyzed operational logs to uncover peak-hour calling surges. Formulated staff reallocation proposals that lowered abandoned inquiries and streamlined appointment scheduling.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#fff1e5] flex flex-col gap-1.5 border border-[#dcbfc3]/30">
                      <div className="flex items-center gap-2 text-[#3f281f]">
                        <FolderLock size={18} />
                        <span className="font-['Space_Grotesk'] text-xs font-bold">Medical Record (MR) Auditing</span>
                      </div>
                      <p className="font-['DM_Sans'] text-xs text-[#261907] leading-relaxed">
                        Investigated physical paper and digital patient record misplacement pathways. Proposed automated barcoding checkpoints to eliminate manual entry blunders between clinical wings.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#fff1e5] flex flex-col gap-1.5 border border-[#dcbfc3]/30">
                      <div className="flex items-center gap-2 text-[#82193a]">
                        <LineChart size={18} />
                        <span className="font-['Space_Grotesk'] text-xs font-bold">Executive Reporting in Python</span>
                      </div>
                      <p className="font-['DM_Sans'] text-xs text-[#261907] leading-relaxed">
                        Synthesized patient flow statistics, waiting room intervals, and department loads into automated charts using Python (Pandas, Matplotlib), Google Sheets, and Excel for administrative officers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CMO Commendation Quote */}
                <div className="p-4 rounded-xl bg-[#ffe4c6]/50 border border-[#dcbfc3]/30 flex items-start gap-3">
                  <Medal size={24} className="text-[#82193a] shrink-0" />
                  <p className="font-['DM_Sans'] text-xs md:text-sm text-[#261907] italic leading-relaxed">
                    "During the internship period, she observed various clinical and administrative functions across multiple departments and gained insights into the hospital's operations. Her performance was commendable. We found her to be sincere, attentive, and eager to learn."
                    <span className="block not-italic font-['Space_Grotesk'] text-xs text-[#564145] mt-1">
                      — Dr. R. Venkatesh, Chief Medical Officer (Aravind Eye Hospital, Pondicherry)
                    </span>
                  </p>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {['React.js', 'Tailwind CSS', 'Python', 'Google Sheets & Excel', 'Netlify', 'Bolt', 'Healthcare Informatics'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded bg-[#ffebd5] text-[#564145] font-['Space_Grotesk'] text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>

              {/* EXPERIENCE 3: Zoho Creator Training */}
              <article className="relative rounded-2xl bg-[#ffffff] shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col gap-4 border border-[#dcbfc3]/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#dcbfc3]/30">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded bg-[#f9dec0] text-[#564145] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                      Student Technical Training
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#564145] font-mono">
                      December 2023
                    </span>
                  </div>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">
                    Women's Engineering College, Puducherry
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h2 className="font-['Epilogue'] text-xl font-bold text-[#261907] tracking-tight">
                    Zoho Creator Student Training (Young Creators Program)
                  </h2>
                  <span className="font-['DM_Sans'] text-xs text-[#80552f] font-semibold">
                    Zoho Corporation Partnership
                  </span>
                </div>

                <p className="font-['DM_Sans'] text-xs md:text-sm text-[#261907] leading-relaxed">
                  Completed intensive hands-on low-code engineering curriculum. Designed structured schema, custom business logic rules, interactive forms, and automated relational dashboards.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {['Deluge Scripting', 'Workflow Automation', 'Low-Code Architecture', 'Custom Reporting'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded bg-[#ffebd5] text-[#564145] font-['Space_Grotesk'] text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>

          {/* Section: Comparative Diagnostics Matrix */}
          <section id="impact-matrix" className="mt-16 md:mt-24 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#82193a] font-bold">
                  Comparative Diagnostics
                </span>
                <span className="w-12 h-px bg-[#dcbfc3]/60"></span>
              </div>
              <h2 className="font-['Epilogue'] text-2xl md:text-3xl font-extrabold text-[#261907]">
                Technology Stack vs. Measurable Hospital/Enterprise Outcomes
              </h2>
              <p className="font-['DM_Sans'] text-sm text-[#564145] max-w-2xl">
                A comprehensive mapping of analytical tools, code stacks, and real-world system upgrades realized during tenures.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl bg-[#ffffff] shadow-md border border-[#dcbfc3]/40">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#ffebd5] text-[#261907] font-['Space_Grotesk'] text-xs uppercase tracking-wider border-b border-[#dcbfc3]/40">
                    <th className="p-4">Institution</th>
                    <th className="p-4">Core Stack</th>
                    <th className="p-4">Operational Problem</th>
                    <th className="p-4">Engineered Solution</th>
                    <th className="p-4">Outcome Metric</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dcbfc3]/20 font-['DM_Sans'] text-xs md:text-sm text-[#261907]">
                  <tr className="hover:bg-[#fff1e5]/60 transition-colors">
                    <td className="p-4 font-bold text-[#82193a]">Aravind Eye Hospital</td>
                    <td className="p-4 font-mono font-['Space_Grotesk'] text-xs text-[#564145]">React.js, Tailwind CSS, Bolt</td>
                    <td className="p-4 text-[#564145]">Severe corridor congestion &amp; repetitive desk inquiries from elderly patients</td>
                    <td className="p-4">QR code responsive mobile portal with mapped visual landmarks</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#ffd9de] text-[#610025] font-['Space_Grotesk'] text-xs font-bold">
                        <ArrowDown size={13} /> High Desk Relief
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#fff1e5]/60 transition-colors bg-[#fff1e5]/30">
                    <td className="p-4 font-bold text-[#82193a]">Aravind Eye Hospital</td>
                    <td className="p-4 font-mono font-['Space_Grotesk'] text-xs text-[#564145]">Python, Pandas, Sheets</td>
                    <td className="p-4 text-[#564145]">Peak-hour missed call spikes during telephone appointment bookings</td>
                    <td className="p-4">Data-driven call volume analytics &amp; shift-load rescheduling models</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#ffdcc2] text-[#80552f] font-['Space_Grotesk'] text-xs font-bold">
                        <Zap size={13} /> Reduced Missed Calls
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#fff1e5]/60 transition-colors">
                    <td className="p-4 font-bold text-[#80552f]">Upturne Software</td>
                    <td className="p-4 font-mono font-['Space_Grotesk'] text-xs text-[#564145]">AI Workflows, Web APIs</td>
                    <td className="p-4 text-[#564145]">Manual intake bottlenecks for business process pipelines</td>
                    <td className="p-4">Autonomous scripting triggers and rapid hackathon prototypes</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#f9dec0] text-[#261907] font-['Space_Grotesk'] text-xs font-bold">
                        <Clock size={13} /> Automated Hand-offs
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#fff1e5]/60 transition-colors bg-[#fff1e5]/30">
                    <td className="p-4 font-bold text-[#3f281f]">Zoho Program</td>
                    <td className="p-4 font-mono font-['Space_Grotesk'] text-xs text-[#564145]">Deluge, Zoho Creator</td>
                    <td className="p-4 text-[#564145]">Disorganized manual paperwork in administrative functions</td>
                    <td className="p-4">Custom relational forms and dashboard tracking rules</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#ffdbce] text-[#3f281f] font-['Space_Grotesk'] text-xs font-bold">
                        <Check size={13} /> Low-Code Efficiency
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Field Locations & Facilities Photo Gallery */}
          <section className="mt-16 md:mt-24 p-6 md:p-8 rounded-3xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase tracking-widest font-bold">
                  Field Locations &amp; Facilities
                </span>
                <h2 className="font-['Epilogue'] text-xl md:text-2xl font-bold text-[#261907]">
                  Where Innovation Occurred
                </h2>
                <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145]">
                  Puducherry healthcare hubs and high-energy collaborative innovation studios.
                </p>
              </div>
              <div className="flex items-center gap-2 font-['Space_Grotesk'] text-xs font-bold text-[#261907]">
                <MapPin size={18} className="text-[#82193a]" />
                <span>Puducherry (UT), India</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location 1: Aravind Eye Hospital */}
              <div className="flex flex-col rounded-2xl overflow-hidden bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 p-6 gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#dcbfc3]/30">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#ffebd5] text-[#82193a] flex items-center justify-center shrink-0 shadow-xs">
                      <Building2 size={20} />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-['Space_Grotesk'] text-[11px] font-bold text-[#82193a] uppercase tracking-wider">
                        Healthcare Technology Hub
                      </span>
                      <span className="font-['Epilogue'] text-base font-bold text-[#261907]">
                        Aravind Eye Hospital &amp; Research
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs font-bold shrink-0">
                    Live Pilot
                  </span>
                </div>

                <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145] leading-relaxed">
                  Where the QR smart indoor wayfinding system was piloted across clinical wings, serving high-volume outpatient clinics and eliminating cross-departmental confusion.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-[#fff1e5] border border-[#dcbfc3]/30 flex flex-col">
                    <span className="font-['Space_Grotesk'] text-[10px] text-[#82193a] uppercase font-bold">Location</span>
                    <span className="font-['DM_Sans'] text-xs font-semibold text-[#261907]">Thavalakuppam, Pondicherry</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#fff1e5] border border-[#dcbfc3]/30 flex flex-col">
                    <span className="font-['Space_Grotesk'] text-[10px] text-[#82193a] uppercase font-bold">Domain Focus</span>
                    <span className="font-['DM_Sans'] text-xs font-semibold text-[#261907]">Wayfinding &amp; Records</span>
                  </div>
                </div>
              </div>

              {/* Location 2: Pulsebay Coworking / Upturne */}
              <div className="flex flex-col rounded-2xl overflow-hidden bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 p-6 gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#dcbfc3]/30">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#ffe4c6] text-[#80552f] flex items-center justify-center shrink-0 shadow-xs">
                      <Laptop size={20} />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-['Space_Grotesk'] text-[11px] font-bold text-[#80552f] uppercase tracking-wider">
                        Innovation Studio &amp; HQ
                      </span>
                      <span className="font-['Epilogue'] text-base font-bold text-[#261907]">
                        Pulsebay Coworking · Upturne HQ
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#ffebd5] text-[#82193a] font-['Space_Grotesk'] text-xs font-bold shrink-0">
                    Incubator
                  </span>
                </div>

                <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145] leading-relaxed">
                  Site of AI automation sprints, full-stack product building, real-world development workflows, and competitive hackathon innovation with software engineering mentors.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-[#fff1e5] border border-[#dcbfc3]/30 flex flex-col">
                    <span className="font-['Space_Grotesk'] text-[10px] text-[#80552f] uppercase font-bold">Location</span>
                    <span className="font-['DM_Sans'] text-xs font-semibold text-[#261907]">South Boulevard, Puducherry</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#fff1e5] border border-[#dcbfc3]/30 flex flex-col">
                    <span className="font-['Space_Grotesk'] text-[10px] text-[#80552f] uppercase font-bold">Domain Focus</span>
                    <span className="font-['DM_Sans'] text-xs font-semibold text-[#261907]">AI Automation &amp; Web Apps</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Action Footer */}
          <section className="mt-16 md:mt-24 p-8 md:p-12 rounded-3xl bg-[#610025] text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#ffd9de] font-bold">
                Next Steps
              </span>
              <h2 className="font-['Epilogue'] text-2xl md:text-3xl font-bold text-white">
                Ready to collaborate on high-impact software?
              </h2>
              <p className="font-['DM_Sans'] text-sm text-[#ffb2bf] leading-relaxed">
                Seeking software engineering roles, research fellowships, and AI product apprenticeships.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="mailto:jennifersagaidasse@gmail.com"
                className="px-5 py-3 rounded-lg bg-[#ffffff] text-[#610025] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#ffe4c6] transition-all shadow-md flex items-center gap-2"
              >
                <Mail size={16} />
                <span>Initiate Dialogue</span>
              </a>
              <a
                href="https://github.com/Jennifer-Vesilica-Rachel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-[#261907] text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#3a2814] transition-all flex items-center gap-2 border border-white/20"
              >
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-[#82193a] text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#82193a]/80 transition-all flex items-center gap-2 border border-white/20"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
