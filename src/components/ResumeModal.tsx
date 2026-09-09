import { useState } from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Github, Check, Copy, FileText } from 'lucide-react';
import { RESUME_DATA, PORTFOLIO_IMAGES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activePage, setActivePage] = useState<'both' | 'page1' | 'page2'>('both');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
JENNIFER VESILICA RACHEL S
Email: ${RESUME_DATA.header.email}
Phone: ${RESUME_DATA.header.phone}
Location: ${RESUME_DATA.header.location}
LinkedIn: ${RESUME_DATA.header.linkedin} (${RESUME_DATA.header.linkedinUrl})
GitHub: https://github.com/${RESUME_DATA.header.github}

Profile
${RESUME_DATA.profile}

EXPERIENCE
${RESUME_DATA.experience.map(exp => `
${exp.period}
${exp.location}
${exp.title}
${exp.bullets.map(b => `• ${b}`).join('\n')}
`).join('\n')}

PROJECT
${RESUME_DATA.projects.map(proj => `
${proj.period}
${proj.title}
${proj.bullets.map(b => `• ${b}`).join('\n')}
`).join('\n')}

EDUCATION
${RESUME_DATA.education.period}
${RESUME_DATA.education.location}
${RESUME_DATA.education.degree}
${RESUME_DATA.education.institutionSub} ${RESUME_DATA.education.details}
    `.trim();

    navigator.clipboard.writeText(textContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'resume-modal-backdrop') {
          onClose();
        }
      }}
    >
      <div
        className="relative max-w-4xl w-full bg-[#f1f3f5] rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh] border border-gray-300 print:max-h-none print:shadow-none print:border-none print:bg-white print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (hidden during print) */}
        <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1e293b] text-white border-b border-gray-700 flex items-center justify-between gap-2 sm:gap-3 print:hidden shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <span className="w-7 h-7 rounded bg-white/15 text-white flex items-center justify-center text-xs shrink-0">
              <FileText size={15} />
            </span>
            <div className="min-w-0">
              <h3 className="font-sans text-xs sm:text-sm font-semibold text-white leading-tight truncate max-w-[140px] xs:max-w-[220px] sm:max-w-none">
                Jennifer Vesilica Rachel S — Official Resume
              </h3>
              <p className="font-sans text-[10px] sm:text-[11px] text-gray-300 truncate hidden xs:block">
                Exact Document Replica • 2-Page Verified Folio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Page View Switcher */}
            <div className="hidden md:flex items-center bg-black/30 p-0.5 rounded border border-white/20 text-xs font-sans">
              <button
                onClick={() => setActivePage('both')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activePage === 'both' ? 'bg-white text-gray-900 font-semibold shadow-xs' : 'text-gray-300 hover:text-white'
                }`}
              >
                Both Pages
              </button>
              <button
                onClick={() => setActivePage('page1')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activePage === 'page1' ? 'bg-white text-gray-900 font-semibold shadow-xs' : 'text-gray-300 hover:text-white'
                }`}
              >
                Page 1
              </button>
              <button
                onClick={() => setActivePage('page2')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activePage === 'page2' ? 'bg-white text-gray-900 font-semibold shadow-xs' : 'text-gray-300 hover:text-white'
                }`}
              >
                Page 2
              </button>
            </div>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-medium border border-white/20 transition-colors cursor-pointer"
              title="Copy plain text content"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              title="Print or export to PDF"
            >
              <Printer size={14} />
              <span className="hidden xs:inline">Print / PDF</span>
              <span className="xs:hidden">Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer ml-0.5 sm:ml-1 shrink-0"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Document Pages Container */}
        <div className="overflow-y-auto p-2 sm:p-6 md:p-8 flex flex-col items-center gap-6 sm:gap-8 bg-[#525659]/80 print:p-0 print:bg-white print:overflow-visible">
          
          {/* ========================================================= */}
          {/* PAGE 1: Header, Profile, Experience, Project Part 1       */}
          {/* ========================================================= */}
          {(activePage === 'both' || activePage === 'page1') && (
            <div className="w-full max-w-[800px] min-h-[1050px] bg-white text-[#111827] shadow-2xl rounded-none border border-gray-300 flex flex-col font-serif print:shadow-none print:border-none print:w-full print:break-after-page">
              
              {/* Header Dark Blue Strip */}
              <div className="bg-[#1c2834] text-white px-4 sm:px-8 pt-5 sm:pt-7 pb-5 sm:pb-6 flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 text-center sm:text-left">
                <div className="flex flex-col gap-3.5 flex-1 min-w-0">
                  <h1 className="font-serif text-[22px] min-[400px]:text-[24px] sm:text-[28px] tracking-[0.05em] sm:tracking-[0.06em] font-normal text-white uppercase leading-tight sm:leading-none">
                    JENNIFER VESILICA RACHEL S
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[12px] font-sans text-gray-200 text-left">
                    {/* Left Contact Column */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-xs border border-white/60 flex items-center justify-center text-[10px] shrink-0">
                          <Mail size={10} />
                        </span>
                        <a href={`mailto:${RESUME_DATA.header.email}`} className="hover:underline truncate">
                          {RESUME_DATA.header.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-xs border border-white/60 flex items-center justify-center text-[10px] shrink-0">
                          <MapPin size={10} />
                        </span>
                        <span>{RESUME_DATA.header.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-xs border border-white/60 flex items-center justify-center text-[10px] shrink-0">
                          <Github size={10} />
                        </span>
                        <a
                          href={RESUME_DATA.header.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {RESUME_DATA.header.github}
                        </a>
                      </div>
                    </div>

                    {/* Right Contact Column */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-xs border border-white/60 flex items-center justify-center text-[10px] shrink-0">
                          <Phone size={10} />
                        </span>
                        <a href={`tel:${RESUME_DATA.header.phone.replace(/\s+/g, '')}`} className="hover:underline">
                          {RESUME_DATA.header.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-xs border border-white/60 flex items-center justify-center text-[10px] shrink-0">
                          <Linkedin size={10} />
                        </span>
                        <span>{RESUME_DATA.header.linkedin}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Candidate Portrait */}
                <div className="shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/50 bg-black/30 shadow-inner">
                    <img
                      src={PORTFOLIO_IMAGES.jenniferPortrait}
                      alt="Jennifer Vesilica Rachel S"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Page 1 Document Body */}
              <div className="px-4 sm:px-8 py-5 flex flex-col gap-5 text-[13px] leading-relaxed text-[#111827]">
                
                {/* ---------------- PROFILE ---------------- */}
                <div className="flex flex-col gap-2">
                  <div className="bg-[#eaedf0] py-1 text-center font-serif font-bold text-[14px] text-[#111827]">
                    Profile
                  </div>
                  <p className="text-[#202124] text-[13px] leading-[1.65] text-justify px-0.5 font-serif">
                    {RESUME_DATA.profile}
                  </p>
                </div>

                {/* ---------------- EXPERIENCE ---------------- */}
                <div className="flex flex-col gap-3">
                  <div className="bg-[#eaedf0] py-1 text-center font-serif font-bold text-[14px] text-[#111827]">
                    EXPERIENCE
                  </div>

                  <div className="flex flex-col gap-4 font-serif text-[12.5px] leading-snug">
                    {/* Role 1: Aravind Eye Hospital */}
                    <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 print:flex-row">
                      <div className="w-full sm:w-[170px] print:w-[170px] shrink-0 text-[#202124]">
                        <div className="font-semibold sm:font-normal">{RESUME_DATA.experience[0].period}</div>
                        <div className="text-xs sm:text-[12.5px] text-[#4b5563] sm:text-[#202124]">{RESUME_DATA.experience[0].location}</div>
                      </div>
                      <div className="flex-1 flex flex-col gap-1 text-[#202124]">
                        <div>
                          <strong className="font-bold uppercase tracking-wide">ARAVIND EYE HOSPITAL, PUDUCHERRY,</strong>{' '}
                          <span className="italic">Tech Intern</span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-[#202124]">
                          {RESUME_DATA.experience[0].bullets.map((b, i) => (
                            <li key={i} className="leading-snug">{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Role 2: Upturne Software & Services */}
                    <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 print:flex-row">
                      <div className="w-full sm:w-[170px] print:w-[170px] shrink-0 text-[#202124]">
                        <div className="font-semibold sm:font-normal">{RESUME_DATA.experience[1].period}</div>
                        <div className="text-xs sm:text-[12.5px] text-[#4b5563] sm:text-[#202124]">{RESUME_DATA.experience[1].location}</div>
                      </div>
                      <div className="flex-1 flex flex-col gap-1 text-[#202124]">
                        <div>
                          <strong className="font-bold uppercase tracking-wide">UPTURNE SOFTWARE &amp; SERVICES</strong>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-[#202124]">
                          {RESUME_DATA.experience[1].bullets.map((b, i) => (
                            <li key={i} className="leading-snug">{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Role 3: Zoho Corporation */}
                    <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 print:flex-row">
                      <div className="w-full sm:w-[170px] print:w-[170px] shrink-0 text-[#202124]">
                        <div className="font-semibold sm:font-normal">{RESUME_DATA.experience[2].period}</div>
                        <div className="text-xs sm:text-[12.5px] text-[#4b5563] sm:text-[#202124]">{RESUME_DATA.experience[2].location}</div>
                      </div>
                      <div className="flex-1 flex flex-col gap-1 text-[#202124]">
                        <div>
                          <strong className="font-bold">Zoho Corporation,</strong>{' '}
                          <span className="italic font-normal">Zoho Creator Student Trainee (Young Creators Program)</span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-[#202124]">
                          {RESUME_DATA.experience[2].bullets.map((b, i) => (
                            <li key={i} className="leading-snug">{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------------- PROJECT ---------------- */}
                <div className="flex flex-col gap-3">
                  <div className="bg-[#eaedf0] py-1 text-center font-serif font-bold text-[14px] text-[#111827]">
                    PROJECT
                  </div>

                  {/* Project 1: Shopify E-Commerce Website */}
                  <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 print:flex-row font-serif text-[12.5px] leading-snug">
                    <div className="w-full sm:w-[170px] print:w-[170px] shrink-0 text-[#202124]">
                      <div className="font-semibold sm:font-normal">{RESUME_DATA.projects[0].period}</div>
                    </div>
                    <div className="flex-1 flex flex-col gap-1 text-[#202124]">
                      <div>
                        <strong className="font-bold">{RESUME_DATA.projects[0].title}</strong>
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-[#202124]">
                        {RESUME_DATA.projects[0].bullets.map((b, i) => (
                          <li key={i} className="leading-snug">{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* PAGE 2: Project Part 2 & Education                        */}
          {/* ========================================================= */}
          {(activePage === 'both' || activePage === 'page2') && (
            <div className="w-full max-w-[800px] min-h-[1050px] bg-white text-[#111827] shadow-2xl rounded-none border border-gray-300 flex flex-col font-serif print:shadow-none print:border-none print:w-full">
              <div className="px-4 sm:px-8 py-6 sm:py-8 flex flex-col gap-6 text-[13px] leading-relaxed text-[#111827]">
                
                {/* Project 2 (Continuation of Project section from Page 1) */}
                <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 print:flex-row font-serif text-[12.5px] leading-snug pt-2">
                  <div className="w-full sm:w-[170px] print:w-[170px] shrink-0 text-[#202124]">
                    <div className="font-semibold sm:font-normal">{RESUME_DATA.projects[1].period}</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1 text-[#202124]">
                    <div>
                      <strong className="font-bold">{RESUME_DATA.projects[1].title}</strong>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-[#202124]">
                      {RESUME_DATA.projects[1].bullets.map((b, i) => (
                        <li key={i} className="leading-snug">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ---------------- EDUCATION ---------------- */}
                <div className="flex flex-col gap-3 mt-4">
                  <div className="bg-[#eaedf0] py-1 text-center font-serif font-bold text-[14px] text-[#111827]">
                    EDUCATION
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 print:flex-row font-serif text-[12.5px] leading-snug">
                    <div className="w-full sm:w-[170px] print:w-[170px] shrink-0 text-[#202124]">
                      <div className="font-semibold sm:font-normal">{RESUME_DATA.education.period}</div>
                      <div className="text-xs sm:text-[12.5px] text-[#4b5563] sm:text-[#202124]">{RESUME_DATA.education.location}</div>
                    </div>
                    <div className="flex-1 flex flex-col gap-1 text-[#202124]">
                      <div>
                        <strong className="font-bold">B.Tech in Information Science and Engineering,</strong>{' '}
                        <span className="italic">WOMEN'S ENGINEERING COLLEGE</span>
                      </div>
                      <p className="leading-relaxed text-justify mt-0.5">
                        <span className="font-normal">{RESUME_DATA.education.institutionSub}</span>{' '}
                        {RESUME_DATA.education.details}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
