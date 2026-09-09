import { useState } from 'react';
import { NavPath } from '../types';
import { WAYFINDING_DESTINATIONS, PROJECTS } from '../data/portfolioData';
import {
  CheckCircle2,
  MapPin,
  QrCode,
  ArrowDown,
  ArrowRight,
  ExternalLink,
  PhoneCall,
  FolderOpen,
  Archive,
  Eye,
  Sliders,
  Sparkles,
  Layers,
  BarChart,
  Code2,
  ShoppingBag,
  Compass
} from 'lucide-react';

interface ProjectsViewProps {
  onNavigate: (path: NavPath) => void;
  onOpenResume: () => void;
}

export default function ProjectsView({ onNavigate, onOpenResume }: ProjectsViewProps) {
  const [filter, setFilter] = useState<'all' | 'healthcare' | 'fullstack' | 'analytics'>('all');
  const [selectedDestKey, setSelectedDestKey] = useState<'glaucoma' | 'pharmacy' | 'refraction'>('glaucoma');

  const currentDestination = WAYFINDING_DESTINATIONS[selectedDestKey];

  const filteredProjects = filter === 'all'
    ? PROJECTS.filter((p) => p.id !== 'indoor-nav') // Flagship is already showcased in deep dive
    : PROJECTS.filter((p) => p.category === filter && p.id !== 'indoor-nav');

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      {/* Top Section Intro */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-8">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2 text-[#82193a] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-[#82193a] inline-block"></span>
            <span>Portfolio &amp; Selected Technical Works</span>
          </div>
          <h2 className="font-['Epilogue'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#261907] tracking-tight leading-tight">
            Featured Engineering &amp; Software Projects
          </h2>
          <p className="font-['DM_Sans'] text-base md:text-lg text-[#564145] leading-relaxed">
            Case studies of real-world deployed solutions, healthcare navigation systems, and data-driven computational workflows engineered by Jennifer Vesilica Rachel S.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2" id="filter-controls">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full font-['Space_Grotesk'] text-xs tracking-wider uppercase transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#610025] text-white shadow-sm font-bold'
                : 'bg-[#ffebd5] text-[#261907] hover:bg-[#ffe4c6]'
            }`}
          >
            All Works (4)
          </button>
          <button
            onClick={() => setFilter('healthcare')}
            className={`px-4 py-1.5 rounded-full font-['Space_Grotesk'] text-xs tracking-wider uppercase transition-all cursor-pointer ${
              filter === 'healthcare'
                ? 'bg-[#610025] text-white shadow-sm font-bold'
                : 'bg-[#ffebd5] text-[#261907] hover:bg-[#ffe4c6]'
            }`}
          >
            Healthcare Tech
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-1.5 rounded-full font-['Space_Grotesk'] text-xs tracking-wider uppercase transition-all cursor-pointer ${
              filter === 'fullstack'
                ? 'bg-[#610025] text-white shadow-sm font-bold'
                : 'bg-[#ffebd5] text-[#261907] hover:bg-[#ffe4c6]'
            }`}
          >
            Full-Stack Systems
          </button>
          <button
            onClick={() => setFilter('analytics')}
            className={`px-4 py-1.5 rounded-full font-['Space_Grotesk'] text-xs tracking-wider uppercase transition-all cursor-pointer ${
              filter === 'analytics'
                ? 'bg-[#610025] text-white shadow-sm font-bold'
                : 'bg-[#ffebd5] text-[#261907] hover:bg-[#ffe4c6]'
            }`}
          >
            Data &amp; Analytics
          </button>
        </div>
      </section>

      {/* Deep Dive Flagship Project Showcase */}
      {(filter === 'all' || filter === 'healthcare' || filter === 'fullstack') && (
        <section className="w-full bg-[#fff1e5] py-12 md:py-16 border-y border-[#dcbfc3]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#82193a] text-white font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold">
                    Flagship Case Study
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#80552f] tracking-wider font-bold">
                    ARAVIND EYE HOSPITAL • JUNE – JULY 2025
                  </span>
                </div>
                <h3 className="font-['Epilogue'] text-2xl md:text-3xl font-bold text-[#261907] tracking-tight">
                  Smart Indoor Navigation System
                </h3>
                <p className="font-['DM_Sans'] text-sm md:text-base text-[#564145] max-w-2xl leading-relaxed">
                  A zero-friction, QR-anchored web application providing immediate spatial guidance, bilingual routing, and photographic checkpoints to alleviate patient wayfinding fatigue in high-throughput clinical pavilions.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-center">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ffebd5] rounded-lg border border-[#dcbfc3]/40">
                  <CheckCircle2 size={16} className="text-[#82193a]" />
                  <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">
                    Deployed &amp; Staff-Tested
                  </span>
                </div>
                <a
                  href="#prototype-sandbox"
                  className="px-4 py-2 bg-[#82193a] text-white rounded-lg font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#610025] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Interactive Simulator Below</span>
                  <ArrowDown size={14} />
                </a>
              </div>
            </div>

            {/* Flagship Content Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
              {/* Column 1: Context, Problem & Deployed Architecture (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* Problem & Solution Split Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[#82193a]">
                      <span className="font-['Epilogue'] text-sm font-bold text-[#261907]">
                        The Hospital Dilemma
                      </span>
                    </div>
                    <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                      Daily outpatients navigate multi-story wings between refractometry, slit-lamp clinics, diagnostics labs, and pharmacy kiosks. Overreliance on verbal directions led to repeated reception counter queues, lost elderly visitors, and elevated clinical staff interruptions.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[#80552f]">
                      <span className="font-['Epilogue'] text-sm font-bold text-[#261907]">
                        Engineered Intervention
                      </span>
                    </div>
                    <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                      Designed physical QR-encoded placards stationed at triage thresholds. Scanning launches an ultra-light, zero-install React application rendering interactive node maps with photographic visual landmarks, clear distance estimations, and intuitive orientation indicators.
                    </p>
                  </div>
                </div>

                {/* Architecture & Stack */}
                <div className="p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#82193a] font-bold">
                      System Architecture &amp; Stack
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#564145]">
                      Continuous Netlify CI/CD Pipeline
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-[#fff1e5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                      <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Core Engine</span>
                      <span className="font-['Epilogue'] text-sm font-bold text-[#261907]">React.js</span>
                      <span className="font-['Space_Grotesk'] text-[11px] text-[#80552f]">State-Driven Pins</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#fff1e5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                      <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Design System</span>
                      <span className="font-['Epilogue'] text-sm font-bold text-[#261907]">Tailwind CSS</span>
                      <span className="font-['Space_Grotesk'] text-[11px] text-[#80552f]">High Contrast UI</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#fff1e5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                      <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Anchor Gateway</span>
                      <span className="font-['Epilogue'] text-sm font-bold text-[#261907]">QR Nodes</span>
                      <span className="font-['Space_Grotesk'] text-[11px] text-[#80552f]">Entry Matrix</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#fff1e5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                      <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Prototyping</span>
                      <span className="font-['Epilogue'] text-sm font-bold text-[#261907]">Bolt.new</span>
                      <span className="font-['Space_Grotesk'] text-[11px] text-[#80552f]">Rapid Iteration</span>
                    </div>
                  </div>

                  {/* Feedback documentation */}
                  <div className="pt-2 flex flex-col gap-2">
                    <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#261907] font-bold">
                      User Testing Feedback Cycles
                    </span>
                    <div className="flex flex-col gap-2">
                      <div className="p-3 rounded-xl bg-[#ffebd5] flex flex-col gap-1 border border-[#dcbfc3]/20">
                        <span className="font-['Epilogue'] text-xs font-bold text-[#261907]">
                          Ophthalmology Reception Staff • Iteration 1
                        </span>
                        <p className="font-['DM_Sans'] text-xs text-[#564145]">
                          Initial floor maps relied heavily on abstract schematics. Patients struggled without physical cues. Iterated to include actual corner photography for every hallway junction.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-[#ffebd5] flex flex-col gap-1 border border-[#dcbfc3]/20">
                        <span className="font-['Epilogue'] text-xs font-bold text-[#261907]">
                          Low-Vision Senior Visitors • Iteration 2
                        </span>
                        <p className="font-['DM_Sans'] text-xs text-[#564145]">
                          Enlarged touch targets to minimum 48px, elevated color contrast ratio past 7.5:1, and added Tamil/English bilingual toggles for immediate patient comprehension.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Interactive Prototype Simulator (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4" id="prototype-sandbox">
                <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#dcbfc3]/30">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fdc394]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#82193a]"></span>
                      <span className="font-['Space_Grotesk'] text-xs text-[#564145] ml-1 font-mono">
                        aravind-nav.netlify.app
                      </span>
                    </div>
                    <span className="font-['Space_Grotesk'] text-xs text-[#82193a] font-bold">
                      Live Simulation
                    </span>
                  </div>

                  {/* Device Simulation Shell */}
                  <div className="rounded-xl bg-[#ffebd5] p-4 flex flex-col gap-4 border border-[#dcbfc3]/30">
                    {/* Header inside device */}
                    <div className="flex items-center justify-between bg-[#ffffff] p-3 rounded-lg shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#82193a] animate-pulse"></span>
                        <span className="font-['Epilogue'] text-xs font-bold text-[#261907]">
                          Aravind Wayfinder
                        </span>
                      </div>
                      <span className="font-['Space_Grotesk'] text-[11px] px-2 py-0.5 rounded bg-[#ffe4c6] text-[#261907] font-semibold">
                        Gate 2 Placed
                      </span>
                    </div>

                    {/* Interactive Destination Picker */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Space_Grotesk'] text-xs text-[#564145] font-bold">
                        Select Target Department:
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        <button
                          onClick={() => setSelectedDestKey('glaucoma')}
                          className={`py-2 px-2 rounded font-['Space_Grotesk'] text-xs text-center transition-all cursor-pointer ${
                            selectedDestKey === 'glaucoma'
                              ? 'bg-[#82193a] text-white font-bold shadow-xs'
                              : 'bg-[#ffffff] text-[#261907] hover:bg-[#ffe4c6]'
                          }`}
                        >
                          Glaucoma Wing
                        </button>
                        <button
                          onClick={() => setSelectedDestKey('pharmacy')}
                          className={`py-2 px-2 rounded font-['Space_Grotesk'] text-xs text-center transition-all cursor-pointer ${
                            selectedDestKey === 'pharmacy'
                              ? 'bg-[#82193a] text-white font-bold shadow-xs'
                              : 'bg-[#ffffff] text-[#261907] hover:bg-[#ffe4c6]'
                          }`}
                        >
                          Main Pharmacy
                        </button>
                        <button
                          onClick={() => setSelectedDestKey('refraction')}
                          className={`py-2 px-2 rounded font-['Space_Grotesk'] text-xs text-center transition-all cursor-pointer ${
                            selectedDestKey === 'refraction'
                              ? 'bg-[#82193a] text-white font-bold shadow-xs'
                              : 'bg-[#ffffff] text-[#261907] hover:bg-[#ffe4c6]'
                          }`}
                        >
                          Refraction Lab
                        </button>
                      </div>
                    </div>

                    {/* Simulated SVG Map */}
                    <div className="relative w-full h-56 rounded-xl bg-[#ffe4c6] overflow-hidden flex flex-col justify-between p-3 shadow-inner border border-[#dcbfc3]/40">
                      <svg
                        className="absolute inset-0 w-full h-full text-[#dcbfc3]/50"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 300 200"
                      >
                        <path
                          d="M20 30 H280 V170 H20 Z"
                          stroke="currentColor"
                          strokeDasharray="4 4"
                          strokeWidth="2"
                        />
                        <path
                          d="M80 30 V170 M160 30 V170 M230 30 V170"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path d="M20 100 H280" stroke="currentColor" strokeWidth="1.5" />
                        {/* Animated Route Line */}
                        <path
                          d={currentDestination.path}
                          stroke="#82193A"
                          strokeDasharray="6 6"
                          strokeLinecap="round"
                          strokeWidth="4"
                          className="animate-pulse"
                        />
                      </svg>

                      {/* Header overlay */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 bg-[#ffffff]/95 px-2.5 py-1 rounded shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-[#82193a] animate-ping"></span>
                          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#82193a]">
                            Anchor: South Entry
                          </span>
                        </div>
                        <span className="font-['Space_Grotesk'] text-xs bg-[#82193a] text-white px-2.5 py-1 rounded font-bold">
                          {currentDestination.estimate}
                        </span>
                      </div>

                      {/* Waypoint Destination Box */}
                      <div className="relative z-10 bg-[#ffffff] p-2.5 rounded-lg shadow-md flex items-center gap-3 border border-[#dcbfc3]/40">
                        <div className="w-10 h-10 rounded bg-[#ffebd5] flex items-center justify-center text-[#82193a] shrink-0">
                          <MapPin size={20} />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-['Epilogue'] text-xs font-bold text-[#261907] truncate">
                            {currentDestination.title}
                          </span>
                          <span className="font-['DM_Sans'] text-[11px] text-[#564145] truncate">
                            {currentDestination.instruction}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Landmark Verification Drawer */}
                    <div className="p-3 rounded-lg bg-[#ffffff] flex flex-col gap-1 shadow-xs border border-[#dcbfc3]/30">
                      <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#80552f] font-bold">
                        Physical Landmark Verification
                      </span>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="w-12 h-12 rounded-lg bg-[#ffebd5] text-[#82193a] flex items-center justify-center shrink-0 border border-[#dcbfc3]/40 shadow-xs">
                          <Compass size={22} />
                        </div>
                        <p className="font-['DM_Sans'] text-xs text-[#564145] leading-snug">
                          {currentDestination.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[#564145] font-['Space_Grotesk'] text-xs px-1">
                    <span className="flex items-center gap-1.5">
                      <QrCode size={15} className="text-[#82193a]" />
                      <span>Tested on Android / iOS WebKit</span>
                    </span>
                    <span className="font-semibold text-[#82193a]">100% Client-Side Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technical Project Explorations Mosaic Grid */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col gap-2 mb-8">
          <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase tracking-widest font-bold">
            Technical Implementations
          </span>
          <h3 className="font-['Epilogue'] text-2xl md:text-3xl font-extrabold text-[#261907] tracking-tight">
            Systems, Analytics &amp; Applied Computation
          </h3>
          <p className="font-['DM_Sans'] text-sm md:text-base text-[#564145] max-w-xl">
            Expanding beyond front-end applications into quantitative hospital performance analysis, clinical record audit tracking, and automated process pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card: Shopify E-Commerce Website (Resume Featured Project) */}
          <div className="flex flex-col bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#dcbfc3]/40 group">
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <ShoppingBag size={12} className="text-[#82193a]" />
                  <span>E-Commerce • Shopify</span>
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#80552f] font-mono">06/2026 – 07/2026</span>
              </div>

              <h4 className="font-['Epilogue'] text-lg font-bold text-[#261907] group-hover:text-[#82193a] transition-colors">
                Shopify E-Commerce Website
              </h4>

              <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                Designed and developed a responsive Shopify e-commerce storefront. Customized collections architecture, catalog filtering, and conversion-focused navigation with cross-device performance optimization.
              </p>

              {/* Resume bullet points */}
              <ul className="space-y-1 text-xs text-[#564145] font-['DM_Sans'] pt-1">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#82193a] font-bold">•</span>
                  <span>Designed and developed a responsive Shopify e-commerce website.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#82193a] font-bold">•</span>
                  <span>Customized store layout, product collections, and intuitive navigation.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#82193a] font-bold">•</span>
                  <span>Implemented user-friendly shopping and product browsing features.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#82193a] font-bold">•</span>
                  <span>Optimized the website for mobile responsiveness and improved user experience.</span>
                </li>
              </ul>

              {/* Mini Interactive Preview Box */}
              <div className="mt-2 p-3.5 rounded-xl bg-[#fff1e5] flex flex-col gap-2 border border-[#dcbfc3]/30">
                <div className="flex items-center justify-between text-[#261907] font-['Space_Grotesk'] text-xs">
                  <span className="font-bold">Storefront UX Architecture</span>
                  <span className="text-[#82193a] font-mono font-bold">Mobile Responsive</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-['Space_Grotesk']">
                  <div className="p-2 rounded bg-[#ffffff] border border-[#dcbfc3]/20 flex flex-col items-center text-center">
                    <span className="text-[#82193a] font-bold">Catalog</span>
                    <span className="text-[10px] text-[#564145]">Filtered Grid</span>
                  </div>
                  <div className="p-2 rounded bg-[#ffffff] border border-[#dcbfc3]/20 flex flex-col items-center text-center">
                    <span className="text-[#80552f] font-bold">Cart Flow</span>
                    <span className="text-[10px] text-[#564145]">Seamless Step</span>
                  </div>
                  <div className="p-2 rounded bg-[#ffffff] border border-[#dcbfc3]/20 flex flex-col items-center text-center">
                    <span className="text-[#261907] font-bold">Speed</span>
                    <span className="text-[10px] text-[#564145]">Optimized</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#fff1e5] flex items-center justify-between border-t border-[#dcbfc3]/30">
              <div className="flex items-center gap-1.5 flex-wrap font-['Space_Grotesk'] text-[11px] text-[#564145]">
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Shopify</span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Storefront Design</span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Mobile UX</span>
              </div>
              <ArrowRight size={18} className="text-[#82193a] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 1: Call Center Analytics Engine */}
          <div className="flex flex-col bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#dcbfc3]/40 group">
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-[#ffebd5] text-[#564145] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                  Aravind Hospital • Ops
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#80552f] font-mono">June 2025</span>
              </div>

              <h4 className="font-['Epilogue'] text-lg font-bold text-[#261907] group-hover:text-[#82193a] transition-colors">
                Hospital Call Center Analytics Engine
              </h4>

              <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                Exploratory data analysis across inpatient and outpatient appointment helpline records. Isolated recurring midday call spike bottlenecks and proposed staffing reallocation models that curtailed unanswered inquiries.
              </p>

              {/* Peak Hour Distribution Visual Chart */}
              <div className="mt-2 p-3.5 rounded-xl bg-[#fff1e5] flex flex-col gap-2 border border-[#dcbfc3]/30">
                <div className="flex items-center justify-between text-[#261907] font-['Space_Grotesk'] text-xs">
                  <span className="font-bold">Call Influx vs Staff Capacity</span>
                  <span className="text-[#82193a] font-mono font-extrabold">-28% Missed Calls</span>
                </div>
                <div className="h-28 w-full flex items-end justify-between gap-1.5 pt-4">
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#dcbfc3]/70 rounded-t h-8"></div>
                    <span className="text-[9px] font-mono text-[#564145]">08h</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#dcbfc3]/70 rounded-t h-12"></div>
                    <span className="text-[9px] font-mono text-[#564145]">10h</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#82193a] rounded-t h-20 transition-all group-hover:bg-[#610025]"></div>
                    <span className="text-[9px] font-mono text-[#82193a] font-bold">12h</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#82193a] rounded-t h-24 transition-all group-hover:bg-[#610025]"></div>
                    <span className="text-[9px] font-mono text-[#82193a] font-bold">14h</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#dcbfc3]/70 rounded-t h-14"></div>
                    <span className="text-[9px] font-mono text-[#564145]">16h</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#dcbfc3]/70 rounded-t h-6"></div>
                    <span className="text-[9px] font-mono text-[#564145]">18h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#fff1e5] flex items-center justify-between border-t border-[#dcbfc3]/30">
              <div className="flex items-center gap-1.5 flex-wrap font-['Space_Grotesk'] text-[11px] text-[#564145]">
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Python</span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Pandas</span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Power BI</span>
              </div>
              <ArrowRight size={18} className="text-[#82193a] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Medical Record (MR) Tracking */}
          <div className="flex flex-col bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#dcbfc3]/40 group">
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-[#ffebd5] text-[#564145] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                  Hospital Systems
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#80552f] font-mono">July 2025</span>
              </div>

              <h4 className="font-['Epilogue'] text-lg font-bold text-[#261907] group-hover:text-[#82193a] transition-colors">
                Medical Record (MR) Tracking &amp; Audit Pipeline
              </h4>

              <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                Investigated physical and digital patient folder transit patterns across ophthalmology specialty clinics. Pinpointed manual entry anomalies, establishing strict audit checkpoint routines to avert misplaced charts.
              </p>

              {/* Visual Workflow Diagram */}
              <div className="mt-2 p-3.5 rounded-xl bg-[#fff1e5] flex flex-col gap-2 border border-[#dcbfc3]/30">
                <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">
                  Audit Checkpoint Verification Workflow
                </span>
                <div className="flex items-center justify-between gap-1 pt-1">
                  <div className="flex flex-col items-center text-center">
                    <span className="w-8 h-8 rounded-full bg-[#ffffff] flex items-center justify-center text-[#82193a] shadow-xs">
                      <FolderOpen size={16} />
                    </span>
                    <span className="text-[10px] font-['Space_Grotesk'] text-[#564145] mt-1">Registry Out</span>
                  </div>
                  <ArrowRight size={14} className="text-[#dcbfc3]" />
                  <div className="flex flex-col items-center text-center">
                    <span className="w-8 h-8 rounded-full bg-[#82193a] flex items-center justify-center text-white shadow-xs">
                      <QrCode size={16} />
                    </span>
                    <span className="text-[10px] font-['Space_Grotesk'] text-[#82193a] font-bold mt-1">Clinic Scan</span>
                  </div>
                  <ArrowRight size={14} className="text-[#dcbfc3]" />
                  <div className="flex flex-col items-center text-center">
                    <span className="w-8 h-8 rounded-full bg-[#ffffff] flex items-center justify-center text-[#82193a] shadow-xs">
                      <Archive size={16} />
                    </span>
                    <span className="text-[10px] font-['Space_Grotesk'] text-[#564145] mt-1">Central Vault</span>
                  </div>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] font-['Space_Grotesk'] text-[#80552f]">
                  <span>Location Traceability:</span>
                  <span className="font-bold text-[#82193a]">99.4% Verified</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#fff1e5] flex items-center justify-between border-t border-[#dcbfc3]/30">
              <div className="flex items-center gap-1.5 flex-wrap font-['Space_Grotesk'] text-[11px] text-[#564145]">
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">SQL</span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Data Audit</span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Python</span>
              </div>
              <ArrowRight size={18} className="text-[#82193a] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Zoho Creator Operations Dashboard */}
          <div className="flex flex-col bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#dcbfc3]/40 group">
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-[#ffebd5] text-[#564145] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                  Young Creators Program
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#80552f] font-mono">Dec 2023</span>
              </div>

              <h4 className="font-['Epilogue'] text-lg font-bold text-[#261907] group-hover:text-[#82193a] transition-colors">
                Custom Low-Code Operations Dashboard
              </h4>

              <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                Engineered automated departmental workflow engines and student evaluation portals utilizing Zoho Creator. Configured custom business logic, automated email dispatch triggers, and responsive tabular analytics.
              </p>

              {/* Workflow rule snapshot */}
              <div className="mt-2 p-3.5 rounded-xl bg-[#fff1e5] flex flex-col gap-2 border border-[#dcbfc3]/30">
                <div className="flex items-center justify-between text-[#261907] font-['Space_Grotesk'] text-xs">
                  <span className="font-bold">Workflow Rule Simulator</span>
                  <span className="px-2 py-0.5 rounded bg-[#ffdcc2] font-mono text-[10px] text-[#2e1500] font-bold">
                    Automated Trigger
                  </span>
                </div>
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between p-2 rounded bg-[#ffffff] text-[11px] border border-[#dcbfc3]/20">
                    <span className="font-mono text-[#261907]">on_user_submit()</span>
                    <span className="text-[#82193a] font-bold font-['Space_Grotesk']">Generate UID</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#ffffff] text-[11px] border border-[#dcbfc3]/20">
                    <span className="font-mono text-[#261907]">send_webhook()</span>
                    <span className="text-[#80552f] font-bold font-['Space_Grotesk']">Status 200 OK</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#fff1e5] flex items-center justify-between border-t border-[#dcbfc3]/30">
              <div className="flex items-center gap-1.5 flex-wrap font-['Space_Grotesk'] text-[11px] text-[#564145]">
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Zoho Creator</span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Deluge</span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#dcbfc3]/30">Workflows</span>
              </div>
              <ArrowRight size={18} className="text-[#82193a] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Competencies & Toolchain Strip */}
      <section className="w-full bg-[#ffe4c6]/60 py-12 border-y border-[#dcbfc3]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#82193a] font-bold">
                01 / Programming
              </span>
              <span className="font-['Epilogue'] text-base font-bold text-[#261907]">Core Languages</span>
              <p className="font-['DM_Sans'] text-xs text-[#564145]">
                Python, Java, Structured Query Language (SQL), R statistical language.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#82193a] font-bold">
                02 / Frameworks
              </span>
              <span className="font-['Epilogue'] text-base font-bold text-[#261907]">Data &amp; Modeling</span>
              <p className="font-['DM_Sans'] text-xs text-[#564145]">
                Pandas, NumPy, Matplotlib, Scikit-learn, React.js ecosystem, Tailwind CSS.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#82193a] font-bold">
                03 / Analytics &amp; Tools
              </span>
              <span className="font-['Epilogue'] text-base font-bold text-[#261907]">Intelligence Platforms</span>
              <p className="font-['DM_Sans'] text-xs text-[#564145]">
                Power BI, Microsoft Excel data models, PowerPoint technical reports.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#82193a] font-bold">
                04 / Environments
              </span>
              <span className="font-['Epilogue'] text-base font-bold text-[#261907]">Developer Tooling</span>
              <p className="font-['DM_Sans'] text-xs text-[#564145]">
                MySQL Server, Eclipse IDE, RStudio, IDLE, Netlify CI, Git version control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Collaboration */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#610025] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div className="flex flex-col gap-2 max-w-xl z-10">
            <span className="font-['Space_Grotesk'] text-xs text-[#ffd9de] uppercase tracking-widest font-bold">
              Institutional Engineering Inquiries
            </span>
            <h3 className="font-['Epilogue'] text-2xl md:text-3xl font-bold text-white">
              Interested in discussing system design or healthcare informatics?
            </h3>
            <p className="font-['DM_Sans'] text-sm text-[#ffb2bf] leading-relaxed">
              Open to software engineering internships, AI systems research assistantships, and collaborative technology initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#ffffff] text-[#610025] rounded-lg font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#ffe4c6] transition-all shadow-sm cursor-pointer"
            >
              Initiate Dialogue
            </button>
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#82193a] text-white rounded-lg font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#82193a]/80 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
            >
              <span>Curriculum Vitae</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
