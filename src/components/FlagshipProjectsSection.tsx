import { useState } from 'react';
import { NavPath } from '../types';
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Search,
  ExternalLink,
  Github,
  QrCode,
  Navigation,
  Eye,
  Building2,
  Bot,
  X,
  Layers,
  Sparkles
} from 'lucide-react';

interface FlagshipProjectsSectionProps {
  onNavigate: (path: NavPath) => void;
}

export default function FlagshipProjectsSection({ onNavigate }: FlagshipProjectsSectionProps) {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#fff1e5]/60 py-16 border-y border-[#dcbfc3]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase font-bold tracking-widest flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#82193a]" />
              <span>Verified Works · Prioritized Engineering Systems</span>
            </span>
            <h2 className="gsap-reveal-heading font-['Epilogue'] text-2xl md:text-3xl font-extrabold text-[#261907]">
              Flagship Projects &amp; Measurable Outcomes
            </h2>
            <p className="gsap-reveal-paragraph font-['DM_Sans'] text-sm text-[#564145] max-w-2xl">
              Production-deployed software applications and Information Retrieval architectures with verified, substantiated performance metrics.
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 font-['Space_Grotesk'] text-xs text-[#82193a] hover:text-[#610025] uppercase tracking-wider font-bold transition-colors cursor-pointer shrink-0"
          >
            <span>Explore All Projects</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* FLAGSHIP 01: IR Search Engine v2 (TOP PROMINENCE) */}
        <div className="gsap-card rounded-3xl bg-[#ffffff] p-6 md:p-8 shadow-lg border border-[#dcbfc3]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-xl transition-all duration-300">
          {/* Visual Technical Column: Inverted Index & Cosine Similarity Matrix (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-5 sm:p-6 text-white aspect-[4/3] lg:aspect-auto lg:h-[390px] shadow-sm flex flex-col justify-between border border-[#334155]">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-[#2563eb] text-white font-['Space_Grotesk'] text-xs font-semibold tracking-wider uppercase shadow">
                IR Flagship 01
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-blue-200 font-semibold">
                Live on Vercel
              </span>
            </div>

            {/* Vector Matrix Inspection Visual */}
            <div className="flex flex-col gap-2.5 my-auto py-2">
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] text-blue-300 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Search size={14} className="text-blue-400" />
                  <span>Inverted Index &amp; VSM Cosine</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">&lt;50ms latency</span>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex flex-col gap-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-300 pb-1.5 border-b border-white/10">
                  <span className="text-blue-300 font-semibold">Formula:</span>
                  <span className="text-slate-200">sim(q, d) = (q · d) / (|q| · |d|)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Indexed Corpus:</span>
                  <span className="text-emerald-300 font-semibold">100+ Unique Tokens</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">TF Weighting:</span>
                  <span className="text-slate-200">term_count / total_tokens</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">IDF Weighting:</span>
                  <span className="text-slate-200">log(N / df + 1)</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/10 text-xs">
                  <span className="text-amber-300 font-bold">Top Rank:</span>
                  <span className="text-emerald-400 font-bold">Cosine Sim = 0.942</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-white flex items-center justify-between text-xs font-['Space_Grotesk']">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Code size={14} className="text-blue-400" />
                <span>Python 3 · Flask Backend</span>
              </div>
              <span className="text-blue-200 font-medium">Deterministic Scoring</span>
            </div>
          </div>

          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-[#2563eb] font-['Space_Grotesk'] text-xs font-bold uppercase border border-blue-200">
                Primary Verified Work
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#dcbfc3]"></span>
              <span className="font-['Space_Grotesk'] text-xs text-[#564145]">
                Information Retrieval &amp; NLP Systems
              </span>
            </div>

            <h3 className="font-['Epilogue'] text-xl md:text-2xl font-bold text-[#261907] leading-tight">
              IR Search Engine v2 (Inverted Index &amp; TF-IDF Vector Model)
            </h3>

            <p className="font-['DM_Sans'] text-sm text-[#564145] leading-relaxed">
              A high-performance Information Retrieval search engine engineered with Python and Flask. Indexes document corpora into an Inverted Index structure, evaluating queries via Vector Space Model (VSM) and Cosine Similarity with interactive computational transparency matrices.
            </p>

            {/* Substantiated Measurable Metrics */}
            <div className="grid grid-cols-1 min-[440px]:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#f0f7ff] border border-blue-100">
              <div className="flex flex-col">
                <span className="font-['Epilogue'] text-lg font-bold text-[#2563eb]">&lt; 50ms</span>
                <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Query Response Latency</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Epilogue'] text-lg font-bold text-[#1e40af]">100+ Tokens</span>
                <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Corpus Inverted Index</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Epilogue'] text-lg font-bold text-[#047857]">Dynamic .txt</span>
                <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Real-Time Ingestion</span>
              </div>
            </div>

            {/* Substantiated Outcomes Bullet List */}
            <ul className="flex flex-col gap-1.5 text-xs font-['DM_Sans'] text-[#564145]">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#2563eb] shrink-0 mt-0.5" />
                <span>Inverted Index data structure pre-computes vocabulary postings to minimize search lookups.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#2563eb] shrink-0 mt-0.5" />
                <span>Vector Space Model (VSM) calculates exact Cosine Similarity relevance vectors per document.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#2563eb] shrink-0 mt-0.5" />
                <span>Supports on-the-fly custom .txt uploads with automated normalization, stopword filtering, and live re-indexing.</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://search-engine-self-sigma.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2563eb] text-white font-['Space_Grotesk'] text-xs font-bold hover:bg-[#1d4ed8] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
              >
                <ExternalLink size={13} />
                <span>Live Demo</span>
              </a>
              <a
                href="https://github.com/Jennifer-Vesilica-Rachel/search-engine"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#ffffff] text-[#261907] border border-[#dcbfc3] font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffebd5] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
              >
                <Github size={13} />
                <span>GitHub Repository</span>
              </a>
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#eff6ff] text-[#2563eb] border border-blue-200 font-['Space_Grotesk'] text-xs font-bold hover:bg-blue-100 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ml-auto"
              >
                <Search size={13} />
                <span>Interactive Sandbox</span>
              </button>
            </div>
          </div>
        </div>

        {/* FLAGSHIP 02: Smart Indoor Navigation System */}
        <div className="gsap-card rounded-3xl bg-[#ffffff] p-6 md:p-8 shadow-lg border border-[#dcbfc3]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-xl transition-all duration-300">
          {/* Visual Schematic Column (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#261907] via-[#3a131f] to-[#18130f] p-5 sm:p-6 text-white aspect-[4/3] lg:aspect-auto lg:h-[390px] shadow-sm flex flex-col justify-between border border-[#dcbfc3]/40">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-[#82193a] text-white font-['Space_Grotesk'] text-xs font-semibold tracking-wider uppercase shadow">
                Hospital Deployment
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-[#ffdcc2] font-semibold">
                Aravind Eye Hospital
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
              <span className="font-['Space_Grotesk'] text-xs text-[#ffdcc2] font-semibold">&lt; 1.5s 4G Load</span>
            </div>
          </div>

          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#ffebd5] text-[#82193a] font-['Space_Grotesk'] text-xs font-bold uppercase">
                Clinical Healthcare Flagship
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
              Engineered to resolve patient disorientation in high-volume, multi-floor hospital wings. Patients scan localized QR markers at ground entrances and elevator corridors to immediately retrieve floor paths, step-by-step turn guidance, and department cues without needing to download external app bundles.
            </p>

            {/* Substantiated Measurable Hospital Metrics */}
            <div className="grid grid-cols-1 min-[440px]:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
              <div className="flex flex-col">
                <span className="font-['Epilogue'] text-lg font-bold text-[#82193a]">4 Wings</span>
                <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Clinical Destinations Mapped</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Epilogue'] text-lg font-bold text-[#80552f]">0s Install</span>
                <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">&lt; 1.5s 4G Mobile Load</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Epilogue'] text-lg font-bold text-[#610025]">100%</span>
                <span className="font-['Space_Grotesk'] text-[11px] text-[#564145]">Client-Side Path Routing</span>
              </div>
            </div>

            {/* QR Code & Tags Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3.5 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/30">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white p-1 rounded-lg border border-[#dcbfc3]/50 shadow-xs shrink-0">
                  <img
                    src="/images/aravind-qr-code.svg"
                    alt="Aravind Navigation QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Epilogue'] text-xs font-bold text-[#261907] flex items-center gap-1.5">
                    <QrCode size={13} className="text-[#82193a]" />
                    <span>Physical Scan Placard</span>
                  </span>
                  <span className="font-['DM_Sans'] text-[11px] text-[#564145]">
                    Scan with your phone to open mobile wayfinding instantly
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['React.js', 'Tailwind', 'QR Routing', 'Netlify', 'PWA'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-white font-['Space_Grotesk'] text-xs text-[#261907] border border-[#dcbfc3]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://aravind-map-raesha0506.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#82193a] text-white font-['Space_Grotesk'] text-xs font-bold hover:bg-[#610025] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
              >
                <ExternalLink size={13} />
                <span>Live Demo</span>
              </a>
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#ffffff] text-[#82193a] border border-[#dcbfc3] font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffebd5] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
              >
                <QrCode size={13} />
                <span>Scan QR Code</span>
              </button>
              <a
                href="https://github.com/Jennifer-Vesilica-Rachel/Smart-Indoor-Navigation-System"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#ffffff] text-[#261907] border border-[#dcbfc3] font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffebd5] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
              >
                <Github size={13} />
                <span>GitHub Repository</span>
              </a>
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#ffebd5] text-[#82193a] font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#ffe4c6] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ml-auto"
              >
                <Eye size={14} />
                <span>Interactive Simulator</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dual Internship Preview Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Aravind */}
          <div className="gsap-card p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex flex-col justify-between gap-4 group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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
          <div className="gsap-card p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex flex-col justify-between gap-4 group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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

      {/* QR Code Modal for Easy Scanning */}
      {isQrModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-[#dcbfc3]/50 shadow-2xl flex flex-col items-center gap-4 text-center">
            <div className="flex items-center justify-between w-full">
              <span className="px-2.5 py-0.5 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs font-semibold">
                Live Scan Target
              </span>
              <button
                onClick={() => setIsQrModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#fff1e5] hover:bg-[#ffe4c6] flex items-center justify-center text-[#261907] transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="w-52 h-52 bg-white p-2 rounded-2xl border border-[#dcbfc3]/60 shadow-inner flex items-center justify-center">
              <img
                src="/images/aravind-qr-code.svg"
                alt="Aravind Navigation QR Placard"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-['Epilogue'] text-base font-bold text-[#261907]">
                Smart Indoor Navigation Placard
              </h4>
              <p className="font-['DM_Sans'] text-xs text-[#564145]">
                Point your smartphone camera at this code to test the live hospital wayfinding demo immediately without any installation.
              </p>
            </div>
            <a
              href="https://aravind-map-raesha0506.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#82193a] text-white font-['Space_Grotesk'] text-xs font-bold hover:bg-[#610025] transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} />
              <span>Open Directly in Browser</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
