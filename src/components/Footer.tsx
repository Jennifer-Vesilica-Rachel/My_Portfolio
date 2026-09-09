import { NavPath } from '../types';
import { MapPin, Mail, Linkedin, Github, Terminal } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: NavPath) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (path: NavPath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#fff1e5] border-t border-[#dcbfc3]/30 mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#dcbfc3]/20">
          {/* Col 1: Bio */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ffe4c6] border border-[#dcbfc3]/40 font-['Epilogue'] font-bold text-sm text-[#610025]">
                JR
              </span>
              <span className="font-['Epilogue'] text-base font-bold text-[#261907]">
                Jennifer Vesilica Rachel S
              </span>
            </div>
            <p className="font-['DM_Sans'] text-sm text-[#564145] max-w-md leading-relaxed">
              Aspiring software engineer, AI researcher, and builder focused on resilient systems, tactile user experiences, and thoughtful computation.
            </p>
            <div className="flex items-center gap-1.5 text-[#564145] text-xs font-['Space_Grotesk'] mt-1">
              <MapPin size={15} className="text-[#82193a]" />
              <span>Puducherry (Pondicherry), India</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase tracking-widest font-bold">
              Navigation
            </span>
            <div className="flex flex-col gap-1.5 font-['DM_Sans'] text-sm text-[#564145]">
              <button
                onClick={() => handleNav('about')}
                className="text-left hover:text-[#82193a] transition-colors"
              >
                About Biography
              </button>
              <button
                onClick={() => handleNav('experience')}
                className="text-left hover:text-[#82193a] transition-colors"
              >
                Professional History
              </button>
              <button
                onClick={() => handleNav('projects')}
                className="text-left hover:text-[#82193a] transition-colors"
              >
                Technical Showcase
              </button>
              <button
                onClick={() => handleNav('certifications')}
                className="text-left hover:text-[#82193a] transition-colors"
              >
                Credentials &amp; Honors
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="text-left hover:text-[#82193a] transition-colors"
              >
                Direct Inquiries
              </button>
            </div>
          </div>

          {/* Col 3: Direct Connectivity */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase tracking-widest font-bold">
              Direct Connectivity
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:jennifersagaidasse@gmail.com"
                className="inline-flex items-center gap-3 p-2.5 rounded-xl bg-[#fff8f4] border border-[#dcbfc3]/30 hover:border-[#82193a] hover:bg-[#ffebd5] transition-all group"
              >
                <span className="w-8 h-8 rounded-lg bg-[#ffe4c6] flex items-center justify-center text-[#82193a] shrink-0">
                  <Mail size={16} />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase">
                    Electronic Mail
                  </span>
                  <span className="font-['DM_Sans'] text-xs text-[#261907] font-medium truncate">
                    jennifersagaidasse@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded-xl bg-[#fff8f4] border border-[#dcbfc3]/30 hover:border-[#82193a] hover:bg-[#ffebd5] transition-all group"
              >
                <span className="w-8 h-8 rounded-lg bg-[#ffe4c6] flex items-center justify-center text-[#82193a] shrink-0">
                  <Linkedin size={16} />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase">
                    Professional Network
                  </span>
                  <span className="font-['DM_Sans'] text-xs text-[#261907] font-medium truncate">
                    LinkedIn / Jennifer Vesilica Rachel S
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/Jennifer-Vesilica-Rachel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded-xl bg-[#fff8f4] border border-[#dcbfc3]/30 hover:border-[#82193a] hover:bg-[#ffebd5] transition-all group"
              >
                <span className="w-8 h-8 rounded-lg bg-[#ffe4c6] flex items-center justify-center text-[#82193a] shrink-0">
                  <Github size={16} />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase">
                    GitHub Profile
                  </span>
                  <span className="font-['DM_Sans'] text-xs text-[#261907] font-medium truncate">
                    Jennifer-Vesilica-Rachel
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Colophon bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-['Space_Grotesk'] text-[#564145]">
          <p>© 2026 Jennifer Vesilica Rachel S. Engineered with Warm Modern Editorial standards.</p>
          <p className="flex items-center gap-1 text-[#80552f]">
            <Terminal size={14} />
            <span>Designed for high-impact innovation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
