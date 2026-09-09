import { useState } from 'react';
import { NavPath } from '../types';
import { Download, Menu, X, User } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';

interface HeaderProps {
  currentPath: NavPath;
  onNavigate: (path: NavPath) => void;
  onOpenResume: () => void;
}

export default function Header({ currentPath, onNavigate, onOpenResume }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { path: NavPath; label: string }[] = [
    { path: 'about', label: 'About' },
    { path: 'experience', label: 'Experience' },
    { path: 'projects', label: 'Projects' },
    { path: 'certifications', label: 'Certifications' },
    { path: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (path: NavPath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-[#fff8f4]/95 backdrop-blur-md border-b border-[#dcbfc3]/30 shadow-[0_1px_8px_rgba(44,24,16,0.04)]">
      <div className="h-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand & Identity */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={() => handleNavClick('about')}
            className="group flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#82193a]/30 group-hover:border-[#82193a] transition-colors shadow-xs shrink-0 bg-[#ffe4c6]">
              <img
                src={PORTFOLIO_IMAGES.jenniferPortrait}
                alt="Jennifer Vesilica Rachel S"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-['Epilogue'] text-xs sm:text-sm md:text-base font-bold text-[#261907] tracking-tight leading-snug group-hover:text-[#82193a] transition-colors truncate max-w-[130px] min-[380px]:max-w-[180px] sm:max-w-none">
                Jennifer Vesilica Rachel S
              </span>
              <span className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] text-[#564145] uppercase tracking-wider truncate hidden min-[400px]:block">
                Software Engineer &amp; AI Innovator
              </span>
            </div>
          </button>

          {/* Status Pulse */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffebd5] border border-[#dcbfc3]/40 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#82193a] animate-pulse"></span>
            <span className="font-['Space_Grotesk'] text-xs text-[#564145] font-medium">
              Available for Opportunities
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 h-full">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all py-2 border-b-2 ${
                  isActive
                    ? 'text-[#610025] border-[#82193a] font-bold'
                    : 'text-[#564145] border-transparent hover:text-[#261907]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#82193a] text-[#ffffff] font-['Space_Grotesk'] text-xs font-semibold rounded-lg hover:bg-[#610025] transition-all border border-transparent shadow-[0_2px_4px_rgba(130,25,58,0.12)] cursor-pointer"
          >
            <Download size={14} />
            <span>Resume</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="hidden sm:flex w-8 h-8 rounded-full bg-[#610025] text-[#ffffff] items-center justify-center hover:opacity-90 transition-opacity"
            title="Candidate Profile"
          >
            <User size={16} />
          </button>

          {/* Mobile hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#ffebd5] text-[#261907] hover:bg-[#ffe4c6] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-20 bg-black/20 z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-40 lg:hidden bg-[#fff8f4] border-b border-[#dcbfc3]/40 px-4 py-3 shadow-lg flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg font-['Space_Grotesk'] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#ffe4c6] text-[#610025]'
                      : 'text-[#564145] hover:bg-[#ffebd5]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#82193a]"></span>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </header>
  );
}
