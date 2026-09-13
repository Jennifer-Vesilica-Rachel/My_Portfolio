import { useState, useEffect, useRef } from 'react';
import { NavPath } from '../types';
import { Download, Menu, X, User } from 'lucide-react';
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
                Jennifer Vesilica Rachel S
              </span>
              <span className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] text-[#564145] uppercase tracking-wider truncate hidden min-[400px]:block transition-colors duration-200 group-hover:text-[#80552f]">
                Software Engineer &amp; AI Innovator
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
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="group inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#82193a] text-[#ffffff] font-['Space_Grotesk'] text-xs font-semibold rounded-lg hover:bg-[#610025] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-transparent shadow-[0_2px_4px_rgba(130,25,58,0.12)] cursor-pointer"
          >
            <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="hidden sm:flex w-8 h-8 rounded-full bg-[#610025] text-[#ffffff] items-center justify-center hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            title="Candidate Profile"
          >
            <User size={16} />
          </button>

          {/* Mobile hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#ffebd5] text-[#261907] hover:bg-[#ffe4c6] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
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
                  className={`w-full text-left px-3 py-2.5 rounded-lg font-['Space_Grotesk'] text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#ffe4c6] text-[#610025] translate-x-1'
                      : 'text-[#564145] hover:bg-[#ffebd5] hover:translate-x-1'
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
