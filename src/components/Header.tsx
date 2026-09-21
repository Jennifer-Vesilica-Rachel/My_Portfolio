import { useState, useEffect, useRef } from 'react';
import { NavPath } from '../types';
import { Download, Menu, X, User, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';
import { gsap, prefersReducedMotion } from '../utils/gsapSetup';

interface HeaderProps {
  currentPath: NavPath;
  onNavigate: (path: NavPath) => void;
  onOpenResume: () => void;
}

export default function Header({ currentPath, onNavigate, onOpenResume }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const navItems: { path: NavPath; label: string }[] = [
    { path: 'about', label: 'About' },
    { path: 'experience', label: 'Experience' },
    { path: 'projects', label: 'Projects' },
    { path: 'certifications', label: 'Certifications' },
    { path: 'contact', label: 'Contact' },
  ];

  // GSAP Header entrance animation
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', clearProps: 'all' }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Track window scroll progress for minimal indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: NavPath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-40 bg-[#fff8f4]/95 backdrop-blur-md border-b border-[#dcbfc3]/30 shadow-[0_1px_8px_rgba(44,24,16,0.04)] transition-colors duration-200"
    >
      {/* Minimal Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#dcbfc3]/20 overflow-hidden pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#82193a] via-[#b83358] to-[#80552f] transition-all duration-150 ease-out origin-left"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="h-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand & Identity */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={() => handleNavClick('about')}
            className="group flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none min-w-0 cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#82193a]/30 group-hover:border-[#82193a] group-hover:scale-105 transition-all duration-300 shadow-xs shrink-0 bg-[#ffe4c6]">
              <img
                src={PORTFOLIO_IMAGES.jenniferPortrait}
                alt="Jennifer Vesilica Rachel S"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-['Epilogue'] text-xs sm:text-sm md:text-base font-bold text-[#261907] tracking-tight leading-snug group-hover:text-[#82193a] transition-colors duration-200 truncate max-w-[130px] min-[380px]:max-w-[180px] sm:max-w-none">
                Jennifer Vesilica Rachael
              </span>
              <span className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] text-[#564145] uppercase tracking-wider truncate hidden min-[400px]:block transition-colors duration-200 group-hover:text-[#80552f]">
                UI/UX Designer &amp; Developer
              </span>
            </div>
          </button>

          {/* Status Pulse */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffebd5] border border-[#dcbfc3]/40 shrink-0 hover:bg-[#ffe4c6] hover:border-[#82193a]/40 transition-all duration-300">
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
                className={`group relative font-['Space_Grotesk'] text-xs uppercase tracking-wider py-2 cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? 'text-[#610025] font-bold'
                    : 'text-[#564145] hover:text-[#261907]'
                }`}
              >
                <span className="relative z-10 block transition-transform duration-200 group-hover:-translate-y-0.5">
                  {item.label}
                </span>
                {/* Active & Hover Underline Indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#82193a] rounded-full transition-all duration-300 origin-left ${
                    isActive
                      ? 'w-full scale-x-100'
                      : 'w-full scale-x-0 group-hover:scale-x-100 opacity-70 group-hover:opacity-100'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* GitHub & LinkedIn Desktop Profile Icons */}
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href="https://github.com/Jennifer-Vesilica-Rachel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="w-8 h-8 rounded-lg bg-[#ffebd5] hover:bg-[#ffe4c6] text-[#261907] hover:text-[#82193a] flex items-center justify-center border border-[#dcbfc3]/40 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/jennifer-vesilica-rachel-s-211821305"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="w-8 h-8 rounded-lg bg-[#ffebd5] hover:bg-[#ffe4c6] text-[#261907] hover:text-[#82193a] flex items-center justify-center border border-[#dcbfc3]/40 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Linkedin size={15} />
            </a>
          </div>

          <button
            onClick={onOpenResume}
            className="group inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 min-h-[44px] bg-[#82193a] text-[#ffffff] font-['Space_Grotesk'] text-xs font-semibold rounded-xl hover:bg-[#610025] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-transparent shadow-[0_2px_4px_rgba(130,25,58,0.12)] cursor-pointer"
          >
            <Download size={15} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="hidden md:flex w-9 h-9 rounded-full bg-[#610025] text-[#ffffff] items-center justify-center hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            title="Candidate Profile"
          >
            <User size={16} />
          </button>

          {/* Mobile hamburger trigger with 44px min touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#ffebd5] text-[#261907] hover:bg-[#ffe4c6] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown with generous tap targets */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-20 bg-black/25 z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-40 lg:hidden bg-[#fff8f4] border-b border-[#dcbfc3]/40 px-4 py-4 shadow-xl flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left px-4 py-3 min-h-[48px] rounded-xl font-['Space_Grotesk'] text-sm uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer active:scale-[0.99] ${
                    isActive
                      ? 'bg-[#ffe4c6] text-[#610025] translate-x-1 font-bold'
                      : 'text-[#564145] hover:bg-[#ffebd5] hover:translate-x-1'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#82193a]"></span>}
                </button>
              );
            })}

            {/* Mobile Drawer Secondary Actions */}
            <div className="pt-3 mt-2 border-t border-[#dcbfc3]/30 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Jennifer-Vesilica-Rachel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-[#ffebd5] text-[#261907] flex items-center justify-center hover:bg-[#ffe4c6] active:scale-95 transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jennifer-vesilica-rachel-s-211821305"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-[#ffebd5] text-[#261907] flex items-center justify-center hover:bg-[#ffe4c6] active:scale-95 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 min-h-[44px] px-4 py-2.5 bg-[#82193a] text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <Download size={15} />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
