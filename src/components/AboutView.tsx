import { useState } from 'react';
import { NavPath } from '../types';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';
import {
  ArrowRight,
  Briefcase,
  Mail,
  GraduationCap,
  Code,
  BarChart3,
  Paintbrush,
  CheckCircle2,
  BrainCircuit,
  Users,
  Shuffle,
  Award,
  Eye,
  Building2,
  Bot,
  Compass,
  QrCode,
  ShieldCheck,
  Navigation,
  Github
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (path: NavPath) => void;
  onOpenCertificate: (id: string) => void;
}

export default function AboutView({ onNavigate, onOpenCertificate }: AboutViewProps) {
  const [techFilter, setTechFilter] = useState<'all' | 'lang' | 'framework' | 'tools'>('all');
  const [activeCompetency, setActiveCompetency] = useState<'dev' | 'data' | 'ux'>('dev');

  const techPills = [
    { name: 'Python', category: 'lang', color: '#82193a' },
    { name: 'Java', category: 'lang', color: '#80552f' },
    { name: 'SQL / MySQL', category: 'lang', color: '#82193a' },
    { name: 'R Statistics', category: 'lang', color: '#3f281f' },
    { name: 'React.js', category: 'framework', color: '#80552f' },
    { name: 'Tailwind CSS', category: 'framework', color: '#610025' },
    { name: 'Pandas & NumPy', category: 'framework', color: '#82193a' },
    { name: 'Scikit-Learn (ML)', category: 'framework', color: '#80552f' },
    { name: 'Microsoft Power BI', category: 'tools', color: '#610025' },
    { name: 'Advanced MS Excel', category: 'tools', color: '#80552f' },
    { name: 'Bolt / Low-Code AI', category: 'tools', color: '#3f281f' },
    { name: 'Netlify & Git CI/CD', category: 'tools', color: '#82193a' },
    { name: 'Zoho Creator Platform', category: 'tools', color: '#80552f' },
  ];

  const filteredPills = techFilter === 'all'
    ? techPills
    : techPills.filter((p) => p.category === techFilter);

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      {/* Warm Ambient Glow Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 right-[-5%] w-[480px] h-[480px] rounded-full bg-[#fdc394]/25 blur-3xl pointer-events-none"></div>
        <div className="absolute top-96 left-[-10%] w-[520px] h-[520px] rounded-full bg-[#ffd9de]/20 blur-3xl pointer-events-none"></div>

        {/* Editorial Hero Stage */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16">
          {/* Breadcrumb & Issue Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#ffebd5] font-['Space_Grotesk'] text-[11px] font-bold text-[#82193a] tracking-widest uppercase">
                Folio 2024–2026
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#82193a]"></span>
              <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase tracking-wider">
                Volume 03 · Bisque &amp; Atlas Red
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#564145] font-['Space_Grotesk'] text-xs">
              <CheckCircle2 size={15} className="text-[#82193a]" />
              <span>B.Tech ISE Candidate · Puducherry</span>
            </div>
          </div>

          {/* Main Asymmetric Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Main Typographic Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                  <span className="inline-block w-8 h-[2px] bg-[#82193a]"></span>
                  Human-Centric Engineering
                </span>
                <h1 className="font-['Epilogue'] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#261907] tracking-tight leading-[1.1] max-w-2xl">
                  Crafting Intelligent Web Experiences &amp; Human-Centric AI Solutions.
                </h1>
              </div>

              <p className="font-['DM_Sans'] text-base md:text-lg text-[#564145] max-w-xl leading-relaxed">
                I am <strong className="text-[#261907] font-semibold">Jennifer Vesilica Rachel S</strong> — currently pursuing a Bachelor of Technology in Information Science and Engineering, with strong interests in software development, data analytics, and intelligent systems. Eager to apply technical skills and hands-on project experience to real-world problems.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-2.5 sm:gap-3 pt-2">
                <button
                  onClick={() => onNavigate('projects')}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#82193a] text-white font-['Space_Grotesk'] text-sm font-semibold shadow-md hover:bg-[#610025] transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('experience')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#ffebd5] hover:bg-[#ffe4c6] text-[#610025] font-['Space_Grotesk'] text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Briefcase size={17} />
                  <span>View Experience</span>
                </button>

                <a
                  href="https://github.com/Jennifer-Vesilica-Rachel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#ffffff] border border-[#dcbfc3]/40 hover:bg-[#ffe4c6] text-[#261907] hover:text-[#82193a] font-['Space_Grotesk'] text-sm font-semibold transition-colors shadow-xs"
                >
                  <Github size={17} />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[#564145] hover:text-[#82193a] font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <Mail size={15} />
                </button>
              </div>

              {/* Quick Metrics Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/30 flex flex-col gap-1">
                  <span className="font-['Epilogue'] text-2xl font-bold text-[#82193a] leading-none">02+</span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">High-Impact Internships</span>
                  <p className="font-['DM_Sans'] text-xs text-[#564145]">Clinical workflow &amp; enterprise automated AI delivery</p>
                </div>

                <div className="p-4 rounded-xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/30 flex flex-col gap-1">
                  <span className="font-['Epilogue'] text-2xl font-bold text-[#80552f] leading-none">Full-Stack</span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">Resilient Interfaces</span>
                  <p className="font-['DM_Sans'] text-xs text-[#564145]">React, responsive tailwind layouts &amp; modern databases</p>
                </div>

                <div className="p-4 rounded-xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/30 flex flex-col gap-1">
                  <span className="font-['Epilogue'] text-2xl font-bold text-[#610025] leading-none">Deployed</span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">Hospital Indoor Nav</span>
                  <p className="font-['DM_Sans'] text-xs text-[#564145]">QR-guided routing for Aravind Eye Hospital patients</p>
                </div>
              </div>
            </div>

            {/* Right Side Editorial Banner & Stamp Card (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden bg-[#ffe4c6] p-3 shadow-lg flex flex-col gap-3 border border-[#dcbfc3]/40">
                {/* Official Portrait Photo Banner */}
                <div className="relative w-full h-80 sm:h-96 lg:h-[370px] rounded-xl overflow-hidden shadow-inner bg-[#18130f] group">
                  <img
                    src={PORTFOLIO_IMAGES.jenniferPortrait}
                    alt="Jennifer Vesilica Rachel S - Software Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18130f]/95 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-700/85 text-white font-['Space_Grotesk'] text-xs font-semibold shadow-xs flex items-center gap-1.5 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Open to Roles</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-[#ffffff]">
                    <div className="flex flex-col">
                      <span className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-[#fdc394] font-bold">
                        Official Profile
                      </span>
                      <span className="font-['Epilogue'] text-base sm:text-lg font-bold">
                        Jennifer Vesilica Rachel S
                      </span>
                      <span className="font-['Space_Grotesk'] text-[11px] text-gray-300">
                        B.Tech (ISE) · PTU Puducherry
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#82193a]/90 text-white font-['Space_Grotesk'] text-[11px] font-semibold">
                      2023–2027
                    </span>
                  </div>
                </div>

                {/* Verified Credentials Summary */}
                <div className="rounded-xl bg-[#261907] text-white p-4 flex flex-col gap-2.5 border border-[#dcbfc3]/30 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-[#fdc394] font-bold">
                      Verified Engineering Pillars
                    </span>
                    <span className="flex items-center gap-1 text-[#ffdcc2] font-['Space_Grotesk'] text-xs">
                      <ShieldCheck size={14} />
                      <span>2 Tech Internships</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white font-['Space_Grotesk'] text-[11px] border border-white/10">
                      Full-Stack Architecture
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white font-['Space_Grotesk'] text-[11px] border border-white/10">
                      Clinical AI Systems
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white font-['Space_Grotesk'] text-[11px] border border-white/10">
                      Indoor Navigation
                    </span>
                  </div>
                </div>

                {/* Curator's Note Card */}
                <div className="bg-[#ffffff] rounded-xl p-4 flex flex-col gap-1.5 shadow-sm border border-[#dcbfc3]/30">
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase font-bold tracking-wider">
                      Curator's Note
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#564145]">Puducherry, IN</span>
                  </div>
                  <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed italic">
                    "Code should operate like finely typeset literature: structurally unflinching, visually respectful, and deeply attuned to human clarity."
                  </p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="w-2 h-2 rounded-full bg-[#82193a]"></span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-medium">
                      Currently seeking Summer &amp; Pre-Placement Internships
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tech Stack Pill Bar */}
          <div className="mt-12 bg-[#fff1e5] rounded-2xl p-6 shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase tracking-widest font-bold">
                  Technical Vocabulary
                </span>
                <h2 className="font-['Epilogue'] text-lg text-[#261907] font-bold">
                  Core Technologies &amp; Platforms
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1 bg-[#ffe4c6] p-1 rounded-lg">
                <button
                  onClick={() => setTechFilter('all')}
                  className={`px-3 py-1 rounded font-['Space_Grotesk'] text-xs transition-all ${
                    techFilter === 'all'
                      ? 'bg-[#82193a] text-white font-bold shadow-xs'
                      : 'text-[#261907] hover:bg-[#ffebd5]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setTechFilter('lang')}
                  className={`px-3 py-1 rounded font-['Space_Grotesk'] text-xs transition-all ${
                    techFilter === 'lang'
                      ? 'bg-[#82193a] text-white font-bold shadow-xs'
                      : 'text-[#261907] hover:bg-[#ffebd5]'
                  }`}
                >
                  Languages
                </button>
                <button
                  onClick={() => setTechFilter('framework')}
                  className={`px-3 py-1 rounded font-['Space_Grotesk'] text-xs transition-all ${
                    techFilter === 'framework'
                      ? 'bg-[#82193a] text-white font-bold shadow-xs'
                      : 'text-[#261907] hover:bg-[#ffebd5]'
                  }`}
                >
                  Frameworks &amp; ML
                </button>
                <button
                  onClick={() => setTechFilter('tools')}
                  className={`px-3 py-1 rounded font-['Space_Grotesk'] text-xs transition-all ${
                    techFilter === 'tools'
                      ? 'bg-[#82193a] text-white font-bold shadow-xs'
                      : 'text-[#261907] hover:bg-[#ffebd5]'
                  }`}
                >
                  Tools &amp; Cloud
                </button>
              </div>
            </div>

            {/* Pill Matrix */}
            <div className="flex flex-wrap gap-2">
              {filteredPills.map((pill) => (
                <span
                  key={pill.name}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] text-[#261907] font-['Space_Grotesk'] text-xs shadow-xs border border-[#dcbfc3]/40 hover:bg-[#82193a] hover:text-white transition-all cursor-default"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: pill.color }}
                  ></span>
                  {pill.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Deep Atlas Red Editorial Accent Band */}
      <section className="w-full bg-[#610025] text-white py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 flex flex-col gap-1.5">
            <span className="font-['Space_Grotesk'] text-xs tracking-widest uppercase text-[#ffb2bf]">
              Institutional Perspective
            </span>
            <h2 className="font-['Epilogue'] text-xl md:text-2xl font-bold text-white">
              Engineered with Rigor. Delivered with Human Intent.
            </h2>
            <p className="font-['DM_Sans'] text-sm text-[#f9dec0] max-w-xl leading-relaxed">
              Studying at Women's Engineering College, Puducherry has cultivated a design sensibility anchored in accessibility, patient navigation, and streamlined organizational tools.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm flex flex-col gap-1 text-white border border-white/15">
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#ffe4c6]">
                Affiliation Code
              </span>
              <span className="font-['Space_Grotesk'] text-sm font-bold">ISE — Cohort 2023–27</span>
              <span className="font-['DM_Sans'] text-xs text-[#f9dec0]">Puducherry, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Academic Foundation & Core Competencies */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 w-full">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2 text-[#82193a]">
            <GraduationCap size={20} />
            <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold">
              Academic Foundation
            </span>
          </div>
          <h2 className="font-['Epilogue'] text-2xl md:text-3xl font-extrabold text-[#261907]">
            Education &amp; Competency Spectrum
          </h2>
          <p className="font-['DM_Sans'] text-sm md:text-base text-[#564145] max-w-2xl">
            A deep-dive look into formal coursework, technical specialties, and the analytical habits that drive everyday problem-solving.
          </p>
        </div>

        {/* Split Grid: Education Card & Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Institutional Spotlight Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs font-semibold">
                  Degree Program
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#82193a] font-bold">2023 — 2027</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-['Epilogue'] text-lg text-[#261907] font-bold">
                  B.Tech in Information Science &amp; Engineering
                </h3>
                <span className="font-['DM_Sans'] text-sm text-[#82193a] font-semibold">
                  Women's Engineering College
                </span>
                <span className="font-['DM_Sans'] text-xs text-[#564145]">
                  Constituent College of Puducherry Technological University • Puducherry, India
                </span>
              </div>
              <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                Focused on programming, data structures, databases, machine learning, artificial intelligence, cloud computing, and full-stack development, with hands-on experience through labs, projects, and internships.
              </p>

              {/* Coursework badges */}
              <div className="flex flex-col gap-2 pt-2 border-t border-[#dcbfc3]/30">
                <span className="font-['Space_Grotesk'] text-[11px] text-[#261907] uppercase font-bold tracking-wider">
                  Key Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[#ffebd5] font-['Space_Grotesk'] text-[11px] text-[#564145]">
                    Data Structures &amp; OOP
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#ffebd5] font-['Space_Grotesk'] text-[11px] text-[#564145]">
                    Database Management (RDBMS)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#ffebd5] font-['Space_Grotesk'] text-[11px] text-[#564145]">
                    Applied AI &amp; Heuristics
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#ffebd5] font-['Space_Grotesk'] text-[11px] text-[#564145]">
                    Software Engineering
                  </span>
                </div>
              </div>
            </div>

            {/* Principles Box */}
            <div className="p-5 rounded-2xl bg-[#ffe4c6]/60 border border-[#dcbfc3]/40 flex flex-col gap-3">
              <span className="font-['Space_Grotesk'] text-xs text-[#80552f] font-bold uppercase tracking-wider">
                Operational Principles
              </span>
              <ul className="flex flex-col gap-2 text-xs font-['DM_Sans'] text-[#261907]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#82193a] shrink-0 mt-0.5" />
                  <span><strong>Clarity over Complexity:</strong> Readable code that teams can maintain effortlessly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#82193a] shrink-0 mt-0.5" />
                  <span><strong>Accessibility First:</strong> Designing for non-technical, elder, and low-vision users.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#82193a] shrink-0 mt-0.5" />
                  <span><strong>Data Verification:</strong> Clean pipelines before fancy modeling.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Competencies Interactive Matrix (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Competency Nav Switchers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 bg-[#fff1e5] p-1.5 rounded-xl border border-[#dcbfc3]/40">
              <button
                onClick={() => setActiveCompetency('dev')}
                className={`px-3 py-2 rounded-lg font-['Space_Grotesk'] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer w-full text-center ${
                  activeCompetency === 'dev'
                    ? 'bg-[#610025] text-white shadow-sm'
                    : 'text-[#261907] hover:bg-[#ffebd5]'
                }`}
              >
                <Code size={16} />
                <span>Software Development</span>
              </button>
              <button
                onClick={() => setActiveCompetency('data')}
                className={`px-3 py-2 rounded-lg font-['Space_Grotesk'] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer w-full text-center ${
                  activeCompetency === 'data'
                    ? 'bg-[#610025] text-white shadow-sm'
                    : 'text-[#261907] hover:bg-[#ffebd5]'
                }`}
              >
                <BarChart3 size={16} />
                <span>Data Analysis &amp; ML</span>
              </button>
              <button
                onClick={() => setActiveCompetency('ux')}
                className={`px-3 py-2 rounded-lg font-['Space_Grotesk'] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer w-full text-center ${
                  activeCompetency === 'ux'
                    ? 'bg-[#610025] text-white shadow-sm'
                    : 'text-[#261907] hover:bg-[#ffebd5]'
                }`}
              >
                <Paintbrush size={16} />
                <span>Human-Centered UI/UX</span>
              </button>
            </div>

            {/* Dynamic Content Panel */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#ffffff] shadow-md border border-[#dcbfc3]/40 flex flex-col gap-6">
              {activeCompetency === 'dev' && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="flex flex-col gap-1">
                    <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase font-bold tracking-wider">
                      Primary Track
                    </span>
                    <h3 className="font-['Epilogue'] text-xl font-bold text-[#261907]">
                      Full-Stack Architectures &amp; Enterprise Tooling
                    </h3>
                    <p className="font-['DM_Sans'] text-sm text-[#564145] leading-relaxed">
                      Synthesizing modern front-end engineering with dependable backend paradigms. Experienced in delivering modular single-page applications, custom business process automations, and clean programmatic APIs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">React.js &amp; Component Logic</span>
                        <span className="text-[#82193a] font-extrabold">88%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#82193a] rounded-full" style={{ width: '88%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">State management, hooks, and responsive lifecycle layout</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Python &amp; Algorithmic Scripting</span>
                        <span className="text-[#82193a] font-extrabold">92%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#82193a] rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Automation engines, data parsing, and test-driven methods</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Relational Databases (SQL / MySQL)</span>
                        <span className="text-[#82193a] font-extrabold">85%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#82193a] rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Entity-relationship schemas, joins, index optimizations</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Modern CSS &amp; Tailwind Architecture</span>
                        <span className="text-[#82193a] font-extrabold">94%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#82193a] rounded-full" style={{ width: '94%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Design systems, editorial rhythm, responsive flex/grid</span>
                    </div>
                  </div>
                </div>
              )}

              {activeCompetency === 'data' && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="flex flex-col gap-1">
                    <span className="font-['Space_Grotesk'] text-xs text-[#80552f] uppercase font-bold tracking-wider">
                      Analytical Track
                    </span>
                    <h3 className="font-['Epilogue'] text-xl font-bold text-[#261907]">
                      Data Modeling, Analytics &amp; Machine Learning
                    </h3>
                    <p className="font-['DM_Sans'] text-sm text-[#564145] leading-relaxed">
                      Transforming raw, unstructured telemetry and enterprise data into actionable visual stories. Proficient in exploratory data analysis (EDA), predictive regression, and classification pipelines.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Pandas &amp; NumPy Wrangling</span>
                        <span className="text-[#80552f] font-extrabold">90%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#80552f] rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Matrix computing, aggregation, imputation &amp; feature cleaning</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Power BI Business Intelligence</span>
                        <span className="text-[#80552f] font-extrabold">86%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#80552f] rounded-full" style={{ width: '86%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Executive KPIs, DAX formulations, visual report syndication</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Scikit-Learn Algorithms</span>
                        <span className="text-[#80552f] font-extrabold">80%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#80552f] rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Classification trees, linear models, hyperparameter tuning</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Statistical Computing (R)</span>
                        <span className="text-[#80552f] font-extrabold">78%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#80552f] rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Hypothesis testing, variance analysis, ggplot distributions</span>
                    </div>
                  </div>
                </div>
              )}

              {activeCompetency === 'ux' && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="flex flex-col gap-1">
                    <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase font-bold tracking-wider">
                      Human-Centered Track
                    </span>
                    <h3 className="font-['Epilogue'] text-xl font-bold text-[#261907]">
                      Tactile UX, Accessibility &amp; Information Ergonomics
                    </h3>
                    <p className="font-['DM_Sans'] text-sm text-[#564145] leading-relaxed">
                      Crafting interfaces that reduce cognitive friction for diverse user demographics. Grounded in hospital wayfinding research, physical-world QR deployments, and high-legibility typographic layouts.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Wayfinding &amp; Spatial UX</span>
                        <span className="text-[#82193a] font-extrabold">95%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#82193a] rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Tested in live multi-floor healthcare hospital facilities</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Warm Editorial UI Design</span>
                        <span className="text-[#82193a] font-extrabold">92%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#82193a] rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Print-grade typography, thoughtful whitespace, zero neon noise</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Micro-Interactions &amp; Feedback</span>
                        <span className="text-[#82193a] font-extrabold">87%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#82193a] rounded-full" style={{ width: '87%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">Subtle tactile state elevations, clear success confirmations</span>
                    </div>

                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                      <div className="flex justify-between items-center font-['Space_Grotesk'] text-xs text-[#261907]">
                        <span className="font-bold">Low-Vision &amp; Accessibility (a11y)</span>
                        <span className="text-[#82193a] font-extrabold">89%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ffe4c6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#82193a] rounded-full" style={{ width: '89%' }}></div>
                      </div>
                      <span className="font-['DM_Sans'] text-xs text-[#564145] mt-1">High-contrast tokens, tactile buttons, large tap boundaries</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Behavioral Soft Attributes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30 flex flex-col items-center text-center gap-1">
                <BrainCircuit size={22} className="text-[#82193a]" />
                <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">Problem-Solving</span>
                <span className="font-['DM_Sans'] text-[11px] text-[#564145]">Deconstructs deep edge-cases</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30 flex flex-col items-center text-center gap-1">
                <Users size={22} className="text-[#82193a]" />
                <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">Team Collaboration</span>
                <span className="font-['DM_Sans'] text-[11px] text-[#564145]">Cross-functional liaison</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30 flex flex-col items-center text-center gap-1">
                <Shuffle size={22} className="text-[#82193a]" />
                <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">Adaptability</span>
                <span className="font-['DM_Sans'] text-[11px] text-[#564145]">Rapid paradigm uptake</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30 flex flex-col items-center text-center gap-1">
                <Award size={22} className="text-[#82193a]" />
                <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">Engineering Poise</span>
                <span className="font-['DM_Sans'] text-[11px] text-[#564145]">Accountable execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Innovation Highlights */}
      <section className="w-full bg-[#fff1e5]/60 py-16 border-y border-[#dcbfc3]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase font-bold tracking-widest">
                Selected Works &amp; Real Engagements
              </span>
              <h2 className="font-['Epilogue'] text-2xl md:text-3xl font-extrabold text-[#261907]">
                Flagship Innovation Highlights
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 font-['Space_Grotesk'] text-xs text-[#82193a] hover:text-[#610025] uppercase tracking-wider font-bold transition-colors cursor-pointer"
            >
              <span>Explore All Projects</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Bento Flagship Card */}
          <div className="rounded-3xl bg-[#ffffff] p-6 md:p-8 shadow-lg border border-[#dcbfc3]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Schematic Column (5 cols) */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#261907] via-[#3a131f] to-[#18130f] p-5 sm:p-6 text-white aspect-[4/3] lg:aspect-auto lg:h-[380px] shadow-sm flex flex-col justify-between border border-[#dcbfc3]/40">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#82193a] text-white font-['Space_Grotesk'] text-xs font-semibold tracking-wider uppercase shadow">
                  Hospital Deployment
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#ffdcc2] font-semibold">
                  v2.4 Production Live
                </span>
              </div>

              {/* Wayfinding Route Flow Schematic */}
              <div className="flex flex-col gap-3 my-auto py-2">
                <div className="flex items-center gap-2 text-xs font-['Space_Grotesk'] text-[#fdc394] font-bold uppercase tracking-wider">
                  <Navigation size={14} className="text-[#fdc394]" />
                  <span>Physical Signage Scan-to-Route Path</span>
                </div>

                <div className="bg-white/10 rounded-xl p-3.5 border border-white/15 flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-xs font-['Space_Grotesk']">
                    <div className="w-6 h-6 rounded-full bg-[#82193a] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                      1
                    </div>
                    <span className="text-gray-200">Main Lobby Ground Floor QR Point</span>
                  </div>

                  <div className="w-0.5 h-2.5 bg-white/30 ml-3"></div>

                  <div className="flex items-center gap-3 text-xs font-['Space_Grotesk']">
                    <div className="w-6 h-6 rounded-full bg-[#80552f] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                      2
                    </div>
                    <span className="text-gray-200">Central Lift Bay · Ascend to Floor 1</span>
                  </div>

                  <div className="w-0.5 h-2.5 bg-white/30 ml-3"></div>

                  <div className="flex items-center gap-3 text-xs font-['Space_Grotesk']">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                      3
                    </div>
                    <span className="text-emerald-300 font-semibold">Retina Clinic &amp; Diagnostic Bay 104</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/15 text-white flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-['Space_Grotesk'] text-xs font-medium text-gray-300">
                  <QrCode size={15} className="text-[#ffdcc2]" />
                  <span>Zero Install · WebKit Native</span>
                </div>
                <span className="font-['Space_Grotesk'] text-xs text-[#ffdcc2] font-semibold">Offline Cached</span>
              </div>
            </div>

            {/* Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#ffebd5] text-[#82193a] font-['Space_Grotesk'] text-xs font-bold uppercase">
                  Flagship Engineering Work
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#dcbfc3]"></span>
                <span className="font-['Space_Grotesk'] text-xs text-[#564145]">
                  Aravind Eye Hospital Collaboration
                </span>
              </div>

              <h3 className="font-['Epilogue'] text-xl md:text-2xl font-bold text-[#261907] leading-tight">
                Smart Indoor Navigation System with Physical QR Guidance
              </h3>

              <p className="font-['DM_Sans'] text-sm text-[#564145] leading-relaxed">
                Engineered to resolve patient disorientation in high-volume, multi-floor hospital wings. Patients scan localized QR markers to immediately retrieve floor paths, step-by-step turn guidance, and department cues without needing to download external app bundles.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-1 min-[440px]:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
                <div className="flex flex-col">
                  <span className="font-['Epilogue'] text-lg font-bold text-[#82193a]">0s</span>
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">App Install Required</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Epilogue'] text-lg font-bold text-[#80552f]">Multi-Floor</span>
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Path Routing Logic</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Epilogue'] text-lg font-bold text-[#610025]">100%</span>
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Accessible Touch Target</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {['JavaScript', 'QR Architecture', 'SVG Vector Mapping', 'Tailwind CSS', 'Netlify Cloud'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-[#ffebd5] font-['Space_Grotesk'] text-xs text-[#261907]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#82193a] text-white font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#610025] transition-colors shadow-sm cursor-pointer"
                >
                  <Eye size={15} />
                  <span>Launch Live Simulator</span>
                </button>
                <button
                  onClick={() => onNavigate('experience')}
                  className="font-['Space_Grotesk'] text-xs text-[#261907] hover:text-[#82193a] font-semibold transition-colors cursor-pointer"
                >
                  Read Hospital Case Study →
                </button>
              </div>
            </div>
          </div>

          {/* Dual Preview Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Aravind */}
            <div className="p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex flex-col justify-between gap-4 group hover:shadow-md transition-all">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs font-semibold">
                    Healthcare Tech Intern
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">Puducherry</span>
                </div>
                <h3 className="font-['Epilogue'] text-lg text-[#261907] font-bold group-hover:text-[#82193a] transition-colors">
                  Aravind Eye Hospital
                </h3>
                <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                  Spearheaded front-end navigation logic, patient interaction studies, and digital orientation workflows across intensive multi-wing clinical facilities.
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] pt-2 border-t border-[#dcbfc3]/20">
                <span className="flex items-center gap-1 text-[#564145]">
                  <Building2 size={15} className="text-[#82193a]" />
                  <span>Clinical Digital Infrastructure</span>
                </span>
                <button
                  onClick={() => onNavigate('experience')}
                  className="text-[#82193a] font-bold hover:underline cursor-pointer"
                >
                  Full Log →
                </button>
              </div>
            </div>

            {/* Card 2: Upturne */}
            <div className="p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex flex-col justify-between gap-4 group hover:shadow-md transition-all">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#ffe4c6] text-[#610025] font-['Space_Grotesk'] text-xs font-semibold">
                    AI Automation Intern
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">Pulsebay Coworking</span>
                </div>
                <h3 className="font-['Epilogue'] text-lg text-[#261907] font-bold group-hover:text-[#82193a] transition-colors">
                  Upturne Software &amp; Services
                </h3>
                <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                  Designed autonomous data pipelines, low-code generative AI agents, and enterprise workflow accelerations utilizing modern cloud hooks and Bolt integrations.
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] pt-2 border-t border-[#dcbfc3]/20">
                <span className="flex items-center gap-1 text-[#564145]">
                  <Bot size={15} className="text-[#80552f]" />
                  <span>Enterprise AI Agent Workflows</span>
                </span>
                <button
                  onClick={() => onNavigate('experience')}
                  className="text-[#82193a] font-bold hover:underline cursor-pointer"
                >
                  Full Log →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout: Explore Credential Records */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="rounded-3xl bg-[#ffe4c6] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-md border border-[#dcbfc3]/50">
          <div className="flex flex-col gap-2 max-w-xl z-10">
            <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase font-bold tracking-widest">
              Verified Credentials &amp; Certifications
            </span>
            <h2 className="font-['Epilogue'] text-2xl md:text-3xl text-[#261907] font-bold">
              Ready to review verified technical honors and course completions?
            </h2>
            <p className="font-['DM_Sans'] text-sm text-[#564145] leading-relaxed">
              Explore institutional certifications from Zoho Young Creators Program, Aravind Eye Care System, Upturne Software, and machine learning accreditations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto z-10">
            <button
              onClick={() => onNavigate('certifications')}
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-[#82193a] text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#610025] transition-colors shadow-sm cursor-pointer"
            >
              Certifications Gallery
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-[#ffffff] text-[#261907] hover:bg-[#ffebd5] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer border border-[#dcbfc3]/50"
            >
              Initiate Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
