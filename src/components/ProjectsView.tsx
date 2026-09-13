import { useState } from 'react';
import { motion } from 'motion/react';
import { NavPath } from '../types';
import { WAYFINDING_DESTINATIONS } from '../data/portfolioData';
import { useViewAnimations } from '../hooks/useSectionAnimations';
import {
  CheckCircle2,
  MapPin,
  QrCode,
  ArrowDown,
  ArrowRight,
  ExternalLink,
  PhoneCall,
  Eye,
  Sliders,
  Sparkles,
  Layers,
  BarChart,
  Code2,
  Compass,
  Github,
  Search,
  Database,
  FileText,
  Binary,
  Cpu,
  Terminal,
  RefreshCw,
  BookOpen,
  X,
  Download,
  Smartphone
} from 'lucide-react';

interface ProjectsViewProps {
  onNavigate: (path: NavPath) => void;
  onOpenResume: () => void;
}

// Sample corpus based on the real IR Search Engine repository
const DEFAULT_CORPUS = [
  {
    id: 'd1.txt',
    title: 'Document 1 — Machine Learning & Big Data Processing',
    content: 'Machine learning algorithms and predictive analytics enable automated pattern discovery across big data processing workflows and distributed databases.',
    tags: ['machine learning', 'data processing', 'analytics']
  },
  {
    id: 'd2.txt',
    title: 'Document 2 — Data Science & Computational Statistics',
    content: 'Data science workflows rely on rigorous statistical modeling, hypothesis testing, computational linguistics, and exploratory data analysis.',
    tags: ['data science', 'statistics', 'linguistics']
  },
  {
    id: 'd3.txt',
    title: 'Document 3 — Tree Structure & Hierarchical Indexing',
    content: 'Tree structure data organization, hierarchical indexing, binary search trees, and graph traversal algorithms optimize spatial search performance.',
    tags: ['tree structure', 'indexing', 'algorithms']
  },
  {
    id: 'd4.txt',
    title: 'Document 4 — Information Retrieval & TF-IDF Weighting',
    content: 'Information retrieval systems employ inverted indexes, term frequency, inverse document frequency weighting, and vector space cosine similarity scoring.',
    tags: ['information retrieval', 'tf-idf', 'vector space']
  },
  {
    id: 'd5.txt',
    title: 'Document 5 — Newbie Book & Programming Foundations',
    content: 'Newbie book on modern programming foundations, exploring Python syntax, algorithm design, data structures, and responsive web development.',
    tags: ['newbie book', 'python', 'programming']
  }
];

const STOPWORDS = new Set(['and', 'or', 'the', 'a', 'an', 'in', 'on', 'of', 'for', 'to', 'is', 'at', 'by', 'with', 'across']);

export default function ProjectsView({ onNavigate, onOpenResume }: ProjectsViewProps) {
  const containerRef = useViewAnimations();
  const [selectedDestKey, setSelectedDestKey] = useState<'glaucoma' | 'pharmacy' | 'refraction'>('glaucoma');
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // IR Search Engine interactive state
  const [searchQuery, setSearchQuery] = useState('data processing');
  const [activeSearchTab, setActiveSearchTab] = useState<'ranked' | 'matrix' | 'corpus'>('ranked');

  const currentDestination = WAYFINDING_DESTINATIONS[selectedDestKey];

  // Tokenize & compute lightweight TF-IDF and Cosine Similarity for simulator
  const queryTokens = searchQuery
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .split(/\s+/)
    .filter(t => t.length > 1 && !STOPWORDS.has(t));

  const simulationResults = DEFAULT_CORPUS.map((doc) => {
    const docTokens = doc.content
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .split(/\s+/)
      .filter(t => t.length > 1 && !STOPWORDS.has(t));

    const totalDocWords = docTokens.length || 1;
    let matchCount = 0;
    let rawScore = 0;

    const matchedTerms: { term: string; tf: number; idf: number }[] = [];

    queryTokens.forEach((qt) => {
      const termOccurrences = docTokens.filter(t => t.includes(qt) || qt.includes(t)).length;
      if (termOccurrences > 0) {
        matchCount += termOccurrences;
        // Document frequency across all 5 docs
        const docsWithTerm = DEFAULT_CORPUS.filter(d =>
          d.content.toLowerCase().includes(qt)
        ).length || 1;
        const idf = Math.log((5 / docsWithTerm) + 1);
        const tf = termOccurrences / totalDocWords;
        rawScore += tf * idf;
        matchedTerms.push({ term: qt, tf: parseFloat(tf.toFixed(3)), idf: parseFloat(idf.toFixed(3)) });
      }
    });

    // Normalize score to cosine similarity range (0 to 1)
    const cosineSim = queryTokens.length === 0
      ? 0
      : Math.min(1, parseFloat((rawScore * 5.2).toFixed(3)));

    return {
      ...doc,
      matchedTerms,
      cosineSim,
      hasMatch: cosineSim > 0
    };
  }).sort((a, b) => b.cosineSim - a.cosineSim);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      {/* Top Section Intro */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-8">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2 text-[#82193a] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-[#82193a] inline-block"></span>
            <span>Portfolio &amp; Featured Technical Works</span>
          </div>
          <h2 className="gsap-reveal-heading font-['Epilogue'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#261907] tracking-tight leading-tight">
            Featured Engineering &amp; Software Projects
          </h2>
          <p className="gsap-reveal-paragraph font-['DM_Sans'] text-base md:text-lg text-[#564145] leading-relaxed">
            Production-deployed software systems, Information Retrieval search architectures, and clinical informatics solutions engineered by Jennifer Vesilica Rachel S.
          </p>
        </div>

        {/* Quick Navigation Anchor Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#indoor-nav-project"
            className="px-4 py-2 rounded-full bg-[#82193a] text-white font-['Space_Grotesk'] text-xs tracking-wider uppercase font-bold shadow-xs hover:bg-[#610025] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <CheckCircle2 size={14} />
            <span>01 / Smart Indoor Navigation (Aravind Hospital)</span>
          </a>
          <a
            href="#search-engine-project"
            className="px-4 py-2 rounded-full bg-[#ffebd5] text-[#261907] font-['Space_Grotesk'] text-xs tracking-wider uppercase font-bold border border-[#dcbfc3]/40 hover:bg-[#ffe4c6] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Search size={14} className="text-[#82193a]" />
            <span>02 / IR Search Engine v2 (Inverted Index &amp; TF-IDF)</span>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROJECT 1: SMART INDOOR NAVIGATION SYSTEM (ARAVIND EYE HOSPITAL)          */}
      {/* ========================================================================= */}
      <section
        id="indoor-nav-project"
        className="gsap-card w-full bg-[#fff1e5] py-12 md:py-16 border-y border-[#dcbfc3]/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#82193a] text-white font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold">
                  Clinical Flagship 01
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#80552f] tracking-wider font-bold">
                  ARAVIND EYE HOSPITAL • JUNE – JULY 2025
                </span>
              </div>
              <h3 className="gsap-reveal-heading font-['Epilogue'] text-2xl md:text-3xl font-bold text-[#261907] tracking-tight">
                Smart Indoor Navigation System
              </h3>
              <p className="gsap-reveal-paragraph font-['DM_Sans'] text-sm md:text-base text-[#564145] max-w-2xl leading-relaxed">
                A zero-friction, QR-anchored web application providing immediate spatial guidance, bilingual routing, and photographic checkpoints to alleviate patient wayfinding fatigue in high-throughput clinical pavilions.
              </p>
            </div>

            {/* Action Buttons: Live Demo & GitHub & QR Scan */}
            <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-center">
              <a
                href="https://aravind-map-raesha0506.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#82193a] text-white rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#610025] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#ffffff] text-[#82193a] border border-[#dcbfc3] rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffebd5] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
              >
                <QrCode size={14} />
                <span>Scan QR Code</span>
              </button>
              <a
                href="https://github.com/Jennifer-Vesilica-Rachel/Smart-Indoor-Navigation-System"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#ffffff] text-[#261907] border border-[#dcbfc3] rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffebd5] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="#prototype-sandbox"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#ffebd5] text-[#80552f] rounded-xl font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#ffe4c6] hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#dcbfc3]/40"
              >
                <span>Interactive Simulator</span>
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

              {/* Physical Station QR Code Placard Card */}
              <div className="p-6 rounded-2xl bg-[#ffffff] shadow-sm border-2 border-[#82193a]/30 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fff1e5] rounded-full blur-2xl pointer-events-none"></div>

                {/* QR Code Container */}
                <div className="relative group shrink-0 flex flex-col items-center">
                  <div
                    onClick={() => setIsQrModalOpen(true)}
                    className="w-40 h-40 sm:w-44 sm:h-44 p-2.5 bg-[#ffffff] rounded-2xl border-2 border-[#82193a]/40 shadow-md flex items-center justify-center transition-transform duration-200 group-hover:scale-105 cursor-pointer"
                    title="Click to expand QR Code"
                  >
                    <img
                      src="/images/aravind-qr-code.svg"
                      alt="Aravind Smart Indoor Navigation QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsQrModalOpen(true)}
                    className="mt-2 text-[11px] font-['Space_Grotesk'] text-[#82193a] font-bold tracking-wider uppercase flex items-center gap-1.5 hover:underline cursor-pointer"
                  >
                    <QrCode size={13} />
                    <span>Click to Expand</span>
                  </button>
                </div>

                {/* Placard Information & Direct Actions */}
                <div className="flex flex-col gap-3 flex-1 text-center sm:text-left">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#82193a] text-white font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
                        Live Hospital QR
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#f0fdf4] text-[#166534] border border-green-200 font-['Space_Grotesk'] text-[11px] font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span>Active Deployment</span>
                      </span>
                    </div>
                    <h4 className="font-['Epilogue'] text-lg sm:text-xl font-bold text-[#261907]">
                      Scan to Launch Indoor Navigation
                    </h4>
                    <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                      Point your smartphone camera at this QR code to load the live turn-by-turn hospital navigation system. Replicates the physical entry placards deployed at Aravind Eye Hospital.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/40 flex flex-col gap-1 text-left">
                    <div className="flex items-center justify-between text-[11px] font-['Space_Grotesk'] text-[#80552f] font-semibold">
                      <span>Production URL:</span>
                      <span className="text-[#82193a] font-bold">Netlify Live</span>
                    </div>
                    <a
                      href="https://aravind-map-raesha0506.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-[#82193a] font-bold hover:underline break-all"
                    >
                      https://aravind-map-raesha0506.netlify.app
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                    <a
                      href="https://aravind-map-raesha0506.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#82193a] text-white rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#610025] transition-all shadow-xs"
                    >
                      <ExternalLink size={13} />
                      <span>Open Web App</span>
                    </a>
                    <a
                      href="/images/aravind-qr-code.png"
                      download="Aravind_Eye_Hospital_Indoor_Navigation_QR.png"
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-[#261907] border border-[#dcbfc3] rounded-xl font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#ffebd5] transition-all shadow-xs"
                    >
                      <Download size={13} />
                      <span>Download QR</span>
                    </a>
                    <a
                      href="https://github.com/Jennifer-Vesilica-Rachel/Smart-Indoor-Navigation-System"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-[#261907] border border-[#dcbfc3] rounded-xl font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#ffebd5] transition-all shadow-xs"
                    >
                      <Github size={13} />
                      <span>GitHub Repo</span>
                    </a>
                  </div>
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
                        Dialed up color contrast ratios, enlarged touch target buttons to &gt;48px, and embedded bilingual Tamil and English textual indicators for effortless orientation.
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
                      aravind-map-raesha0506.netlify.app
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
                        className={`py-2 px-1 text-center rounded-lg text-xs font-['Space_Grotesk'] transition-all cursor-pointer ${
                          selectedDestKey === 'glaucoma'
                            ? 'bg-[#82193a] text-white font-bold shadow-xs'
                            : 'bg-[#ffffff] text-[#261907] hover:bg-[#ffe4c6]'
                        }`}
                      >
                        Glaucoma
                      </button>
                      <button
                        onClick={() => setSelectedDestKey('pharmacy')}
                        className={`py-2 px-1 text-center rounded-lg text-xs font-['Space_Grotesk'] transition-all cursor-pointer ${
                          selectedDestKey === 'pharmacy'
                            ? 'bg-[#82193a] text-white font-bold shadow-xs'
                            : 'bg-[#ffffff] text-[#261907] hover:bg-[#ffe4c6]'
                        }`}
                      >
                        Pharmacy
                      </button>
                      <button
                        onClick={() => setSelectedDestKey('refraction')}
                        className={`py-2 px-1 text-center rounded-lg text-xs font-['Space_Grotesk'] transition-all cursor-pointer ${
                          selectedDestKey === 'refraction'
                            ? 'bg-[#82193a] text-white font-bold shadow-xs'
                            : 'bg-[#ffffff] text-[#261907] hover:bg-[#ffe4c6]'
                        }`}
                      >
                        Refraction
                      </button>
                    </div>
                  </div>

                  {/* Route Information Card */}
                  <div className="p-3.5 rounded-lg bg-[#ffffff] flex flex-col gap-2 border border-[#dcbfc3]/30">
                    <div className="flex items-center justify-between">
                      <span className="font-['Epilogue'] text-sm font-bold text-[#261907]">
                        {currentDestination.title}
                      </span>
                      <span className="font-['Space_Grotesk'] text-xs px-2 py-0.5 rounded bg-[#ffdcc2] text-[#2e1500] font-mono font-bold">
                        {currentDestination.estimate}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-[#564145] font-['DM_Sans']">
                      <MapPin size={14} className="text-[#82193a] shrink-0 mt-0.5" />
                      <span>{currentDestination.instruction}</span>
                    </div>

                    <p className="text-[11px] text-[#80552f] font-['DM_Sans'] italic bg-[#fff1e5] p-2 rounded">
                      &quot;{currentDestination.desc}&quot;
                    </p>
                  </div>

                  {/* Floor SVG Path Visualizer */}
                  <div className="bg-[#ffffff] p-3 rounded-lg flex flex-col gap-1.5 border border-[#dcbfc3]/30">
                    <div className="flex items-center justify-between text-[11px] font-['Space_Grotesk'] text-[#564145]">
                      <span>Hospital Floor Path Visualizer</span>
                      <span className="text-[#82193a] font-bold">Interactive Vector Map</span>
                    </div>
                    <div className="h-28 w-full bg-[#fff1e5] rounded-md relative overflow-hidden flex items-center justify-center border border-[#dcbfc3]/30">
                      <svg className="w-full h-full" viewBox="0 0 300 150">
                        {/* Floor grid */}
                        <line x1="30" y1="30" x2="270" y2="30" stroke="#ffdcc2" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="30" y1="75" x2="270" y2="75" stroke="#ffdcc2" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="30" y1="120" x2="270" y2="120" stroke="#ffdcc2" strokeWidth="1" strokeDasharray="3 3" />

                        {/* Room blocks */}
                        <rect x="20" y="20" width="40" height="30" rx="3" fill="#ffffff" stroke="#dcbfc3" strokeWidth="1" />
                        <text x="40" y="38" fontSize="8" fill="#564145" textAnchor="middle" fontFamily="sans-serif">Triage</text>

                        <rect x="240" y="20" width="45" height="30" rx="3" fill="#ffffff" stroke="#dcbfc3" strokeWidth="1" />
                        <text x="262" y="38" fontSize="8" fill="#564145" textAnchor="middle" fontFamily="sans-serif">Clinic</text>

                        {/* Dynamic Path */}
                        <path
                          d={currentDestination.path}
                          fill="none"
                          stroke="#82193a"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="4 2"
                          className="animate-pulse"
                        />

                        {/* Start Node */}
                        <circle cx="40" cy="140" r="5" fill="#80552f" />
                        <text x="40" y="130" fontSize="8" fill="#80552f" textAnchor="middle" fontWeight="bold">QR Scan</text>

                        {/* End Node */}
                        <circle cx="260" cy="140" r="6" fill="#ba1a1a" />
                        <circle cx="260" cy="140" r="3" fill="#ffffff" />
                        <text x="260" y="130" fontSize="8" fill="#ba1a1a" textAnchor="middle" fontWeight="bold">Target</text>
                      </svg>
                    </div>
                  </div>

                  {/* Real Landmark Photo */}
                  <div className="flex flex-col gap-1">
                    <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] font-bold">
                      Physical Landmark Corner Checkpoint:
                    </span>
                    <div className="h-28 w-full rounded-lg overflow-hidden relative border border-[#dcbfc3]/40">
                      <img
                        src={currentDestination.landmarkImg}
                        alt="Hospital Landmark"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                        <span className="text-white text-[10px] font-['Space_Grotesk'] font-semibold">
                          Follow signage toward Room 108 corridor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#564145] font-['Space_Grotesk'] text-xs px-1">
                  <span className="flex items-center gap-1.5">
                    <QrCode size={15} className="text-[#82193a]" />
                    <span>Tested on Android / iOS WebKit</span>
                  </span>
                  <a
                    href="https://aravind-map-raesha0506.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#82193a] hover:underline flex items-center gap-1"
                  >
                    <span>Launch Netlify App</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROJECT 2: IR SEARCH ENGINE V2 (INVERTED INDEX & TF-IDF)                  */}
      {/* ========================================================================= */}
      <section
        id="search-engine-project"
        className="gsap-card w-full bg-[#ffffff] py-12 md:py-16 border-b border-[#dcbfc3]/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#2563eb] text-white font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold">
                  Open Source Project 02
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#80552f] tracking-wider font-bold">
                  PYTHON • FLASK • VERCEL • 2024 – 2025
                </span>
              </div>
              <h3 className="gsap-reveal-heading font-['Epilogue'] text-2xl md:text-3xl font-bold text-[#261907] tracking-tight">
                IR Search Engine v2 (Inverted Index &amp; TF-IDF)
              </h3>
              <p className="gsap-reveal-paragraph font-['DM_Sans'] text-sm md:text-base text-[#564145] max-w-2xl leading-relaxed">
                A computational Information Retrieval (IR) demo search engine built with Python and Flask. Indexes document corpora using an Inverted Index and TF-IDF weighting, ranking search queries via Vector Space Model Cosine Similarity with transparent intermediate calculation tables.
              </p>
            </div>

            {/* Action Buttons: Live Demo & GitHub */}
            <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-center">
              <a
                href="https://search-engine-self-sigma.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2563eb] text-white rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#1d4ed8] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
              <a
                href="https://github.com/Jennifer-Vesilica-Rachel/search-engine"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#ffffff] text-[#261907] border border-[#dcbfc3] rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffebd5] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
              >
                <Github size={14} />
                <span>GitHub Repo</span>
              </a>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f0fdf4] text-[#166534] rounded-xl border border-green-200 font-['Space_Grotesk'] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Vercel Deployed</span>
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            {/* Left Column: Theory, Math & System Design (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Problem vs Mathematical Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-[#fff1e5] border border-[#dcbfc3]/40">
                <div className="flex flex-col gap-2">
                  <span className="font-['Epilogue'] text-sm font-bold text-[#261907] flex items-center gap-1.5">
                    <Binary size={16} className="text-[#82193a]" />
                    <span>The IR Challenge</span>
                  </span>
                  <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                    Keyword search often fails because term frequency alone ignores overall corpus rarity. Naive substring matches cannot measure semantic relevance or rank documents objectively against complex multi-word queries.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-['Epilogue'] text-sm font-bold text-[#261907] flex items-center gap-1.5">
                    <Cpu size={16} className="text-[#2563eb]" />
                    <span>Vector Space Solution</span>
                  </span>
                  <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                    Constructs an Inverted Index mapping tokenized vocabulary to document postings. Computes Term Frequency (TF) and Inverse Document Frequency (IDF), ranking query relevance using geometric Vector Cosine Similarity.
                  </p>
                </div>
              </div>

              {/* Core Features & Architectural Highlights */}
              <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#dcbfc3]/40 shadow-sm flex flex-col gap-4">
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#82193a] font-bold">
                  Key Algorithmic &amp; Architectural Components
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#fff1e5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                    <div className="flex items-center gap-2 text-[#261907]">
                      <Database size={15} className="text-[#82193a]" />
                      <span className="font-['Epilogue'] text-xs font-bold">Inverted Index</span>
                    </div>
                    <p className="font-['DM_Sans'] text-[11px] text-[#564145]">
                      Maps 335+ unique terms directly to postings lists for $O(1)$ token retrieval.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#fff1e5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                    <div className="flex items-center gap-2 text-[#261907]">
                      <BarChart size={15} className="text-[#2563eb]" />
                      <span className="font-['Epilogue'] text-xs font-bold">TF-IDF Weighting</span>
                    </div>
                    <p className="font-['DM_Sans'] text-[11px] text-[#564145]">
                      Penalizes ubiquitous stopwords while rewarding highly specific domain vocabulary.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#fff1e5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                    <div className="flex items-center gap-2 text-[#261907]">
                      <Compass size={15} className="text-[#059669]" />
                      <span className="font-['Epilogue'] text-xs font-bold">Cosine Similarity</span>
                    </div>
                    <p className="font-['DM_Sans'] text-[11px] text-[#564145]">
                      Calculates dot-product angles between query vectors and document vectors.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#fff1e5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                    <div className="flex items-center gap-2 text-[#261907]">
                      <FileText size={15} className="text-[#d97706]" />
                      <span className="font-['Epilogue'] text-xs font-bold">Custom .txt Ingestion</span>
                    </div>
                    <p className="font-['DM_Sans'] text-[11px] text-[#564145]">
                      Supports uploading external text files to re-index and expand document corpora.
                    </p>
                  </div>
                </div>

                {/* Technical Stack Tags */}
                <div className="pt-2 border-t border-[#dcbfc3]/20 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#ffebd5] text-[#261907] font-['Space_Grotesk'] text-xs font-semibold">
                    Python 3
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#ffebd5] text-[#261907] font-['Space_Grotesk'] text-xs font-semibold">
                    Flask Web Server
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#ffebd5] text-[#261907] font-['Space_Grotesk'] text-xs font-semibold">
                    Vercel Serverless
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#ffebd5] text-[#261907] font-['Space_Grotesk'] text-xs font-semibold">
                    Information Retrieval (IR)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#ffebd5] text-[#261907] font-['Space_Grotesk'] text-xs font-semibold">
                    HTML5 / CSS3 / JS
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Search Engine Simulator (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-4">
                {/* Browser bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#dcbfc3]/30">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#564145] ml-1 font-mono">
                      search-engine-self-sigma.vercel.app
                    </span>
                  </div>
                  <a
                    href="https://search-engine-self-sigma.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="font-['Space_Grotesk'] text-xs text-[#2563eb] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>Open Live Engine</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Interactive Sandbox UI */}
                <div className="rounded-xl bg-[#f8fafc] p-4 flex flex-col gap-4 border border-slate-200">
                  {/* Search bar inside simulator */}
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter search query..."
                        className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-['DM_Sans'] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563eb] shadow-xs"
                      />
                      <button
                        onClick={() => setSearchQuery(searchQuery)}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#2563eb] text-white rounded-lg text-xs font-['Space_Grotesk'] font-bold hover:bg-[#1d4ed8] transition-colors cursor-pointer"
                      >
                        Search
                      </button>
                    </div>

                    {/* Quick Suggestions from actual app */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] font-['Space_Grotesk'] text-slate-500 font-semibold">Try Queries:</span>
                      {['data processing', 'tree structure', 'machine learning', 'data science', 'newbie book'].map((q) => (
                        <button
                          key={q}
                          onClick={() => setSearchQuery(q)}
                          className={`px-2 py-0.5 rounded-md text-[11px] font-['Space_Grotesk'] transition-all cursor-pointer ${
                            searchQuery.toLowerCase() === q
                              ? 'bg-[#2563eb] text-white font-bold'
                              : 'bg-slate-200/80 text-slate-700 hover:bg-slate-300'
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tabs: Ranked Results vs Matrix vs Corpus */}
                  <div className="flex items-center gap-1 border-b border-slate-200 pb-2">
                    <button
                      onClick={() => setActiveSearchTab('ranked')}
                      className={`px-3 py-1 rounded-md text-xs font-['Space_Grotesk'] transition-colors cursor-pointer ${
                        activeSearchTab === 'ranked'
                          ? 'bg-slate-900 text-white font-bold'
                          : 'text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Ranked Results ({simulationResults.filter(r => r.hasMatch).length})
                    </button>
                    <button
                      onClick={() => setActiveSearchTab('matrix')}
                      className={`px-3 py-1 rounded-md text-xs font-['Space_Grotesk'] transition-colors cursor-pointer ${
                        activeSearchTab === 'matrix'
                          ? 'bg-slate-900 text-white font-bold'
                          : 'text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Calculation Matrix
                    </button>
                    <button
                      onClick={() => setActiveSearchTab('corpus')}
                      className={`px-3 py-1 rounded-md text-xs font-['Space_Grotesk'] transition-colors cursor-pointer ${
                        activeSearchTab === 'corpus'
                          ? 'bg-slate-900 text-white font-bold'
                          : 'text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Indexed Corpus (5)
                    </button>
                  </div>

                  {/* Tab 1: Ranked Results */}
                  {activeSearchTab === 'ranked' && (
                    <div className="flex flex-col gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                      {simulationResults.filter(r => r.hasMatch).length === 0 ? (
                        <div className="p-6 text-center text-xs text-slate-500 bg-white rounded-xl border border-slate-200">
                          No matching terms found in indexed documents. Try &quot;data processing&quot; or &quot;machine learning&quot;.
                        </div>
                      ) : (
                        simulationResults
                          .filter(r => r.hasMatch)
                          .map((doc, rank) => (
                            <div
                              key={doc.id}
                              className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col gap-1.5"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-[11px] font-bold font-mono flex items-center justify-center">
                                    #{rank + 1}
                                  </span>
                                  <span className="font-['Epilogue'] text-xs font-bold text-slate-900">
                                    {doc.id}
                                  </span>
                                </div>
                                <span className="font-mono text-xs font-bold text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                                  Score: {doc.cosineSim}
                                </span>
                              </div>

                              <p className="font-['DM_Sans'] text-xs text-slate-600 leading-relaxed">
                                {doc.content}
                              </p>

                              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] font-['Space_Grotesk'] text-slate-500">
                                <span className="font-semibold text-slate-700">Matched Tokens:</span>
                                {doc.matchedTerms.map((m, idx) => (
                                  <span key={idx} className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-mono">
                                    {m.term} (TF: {m.tf})
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))
                      )}
                    </div>
                  )}

                  {/* Tab 2: Calculation Matrix */}
                  {activeSearchTab === 'matrix' && (
                    <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-1">
                      <div className="text-[11px] font-['Space_Grotesk'] text-slate-600">
                        Query vector tokens after stopword removal:
                        <span className="font-mono font-bold text-[#2563eb] ml-1">
                          [{queryTokens.join(', ') || 'none'}]
                        </span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-['Space_Grotesk'] border-collapse bg-white rounded-lg border border-slate-200">
                          <thead>
                            <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 text-[11px]">
                              <th className="p-2">Term</th>
                              <th className="p-2">Document</th>
                              <th className="p-2">TF</th>
                              <th className="p-2">IDF</th>
                              <th className="p-2">TF × IDF</th>
                            </tr>
                          </thead>
                          <tbody>
                            {simulationResults.flatMap(d =>
                              d.matchedTerms.map((m, idx) => (
                                <tr key={`${d.id}-${idx}`} className="border-b border-slate-100 text-[11px]">
                                  <td className="p-2 font-mono font-bold text-slate-900">{m.term}</td>
                                  <td className="p-2 font-mono text-[#2563eb]">{d.id}</td>
                                  <td className="p-2 font-mono text-slate-600">{m.tf}</td>
                                  <td className="p-2 font-mono text-slate-600">{m.idf}</td>
                                  <td className="p-2 font-mono font-bold text-[#059669]">
                                    {(m.tf * m.idf).toFixed(3)}
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Indexed Corpus */}
                  {activeSearchTab === 'corpus' && (
                    <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-1">
                      {DEFAULT_CORPUS.map((doc) => (
                        <div key={doc.id} className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs flex flex-col gap-1">
                          <div className="flex items-center justify-between font-mono font-bold text-slate-800 text-[11px]">
                            <span>{doc.id}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                              {doc.tags.join(', ')}
                            </span>
                          </div>
                          <p className="font-['DM_Sans'] text-slate-600 text-[11px]">{doc.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Launch card */}
                  <a
                    href="https://search-engine-self-sigma.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between hover:bg-[#2563eb] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Terminal size={15} className="text-emerald-400" />
                      <span className="font-['Space_Grotesk'] text-xs font-bold">
                        Try Custom Document Ingestion &amp; Live Querying on Vercel
                      </span>
                    </div>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="flex items-center justify-between text-slate-500 font-['Space_Grotesk'] text-xs px-1">
                  <span>Corpus: 5 Docs · 335+ Vocabulary Terms</span>
                  <a
                    href="https://github.com/Jennifer-Vesilica-Rachel/search-engine"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#261907] hover:underline font-bold flex items-center gap-1"
                  >
                    <Github size={12} />
                    <span>View Python / Flask Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Competencies & Toolchain Strip */}
      <section
        className="gsap-card w-full bg-[#ffe4c6]/60 py-12 border-y border-[#dcbfc3]/30"
      >
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
              <span className="font-['Epilogue'] text-base font-bold text-[#261907]">Data &amp; Web Stack</span>
              <p className="font-['DM_Sans'] text-xs text-[#564145]">
                Flask, React.js, Tailwind CSS, Pandas, NumPy, Scikit-learn, Information Retrieval.
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
                04 / Deployment
              </span>
              <span className="font-['Epilogue'] text-base font-bold text-[#261907]">Cloud &amp; CI/CD</span>
              <p className="font-['DM_Sans'] text-xs text-[#564145]">
                Vercel, Netlify CI, Git / GitHub version control, MySQL Server, Eclipse IDE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Collaboration */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="gsap-card bg-[#610025] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col gap-2 max-w-xl z-10">
            <span className="font-['Space_Grotesk'] text-xs text-[#ffd9de] uppercase tracking-widest font-bold">
              Institutional Engineering Inquiries
            </span>
            <h3 className="gsap-reveal-heading font-['Epilogue'] text-2xl md:text-3xl font-bold text-white">
              Interested in discussing system design or healthcare informatics?
            </h3>
            <p className="gsap-reveal-paragraph font-['DM_Sans'] text-sm text-[#ffb2bf] leading-relaxed">
              Open to software engineering internships, AI systems research assistantships, and collaborative technology initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#ffffff] text-[#610025] rounded-lg font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#ffe4c6] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Initiate Dialogue
            </button>
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#82193a] text-white rounded-lg font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#82193a]/80 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
            >
              <span>Curriculum Vitae</span>
            </button>
          </div>
        </div>
      </section>

      {/* QR Code Expanded Modal */}
      {isQrModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsQrModalOpen(false)}
        >
          <div
            className="bg-[#ffffff] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#dcbfc3] flex flex-col items-center text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsQrModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#564145] hover:bg-[#ffebd5] hover:text-[#261907] transition-colors cursor-pointer"
              aria-label="Close QR Modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col items-center gap-1.5 mb-5">
              <span className="px-3 py-1 rounded-full bg-[#fff1e5] text-[#82193a] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider border border-[#dcbfc3]/40">
                Aravind Eye Hospital
              </span>
              <h3 className="font-['Epilogue'] text-2xl font-bold text-[#261907]">
                Live Wayfinding QR Code
              </h3>
              <p className="font-['DM_Sans'] text-xs text-[#564145] max-w-xs">
                Scan with any smartphone camera to launch the zero-install indoor navigation system instantly.
              </p>
            </div>

            {/* QR Code Frame */}
            <div className="p-4 bg-white rounded-2xl border-2 border-[#82193a] shadow-inner mb-5 relative group">
              <img
                src="/images/aravind-qr-code.svg"
                alt="Aravind Navigation QR Code"
                className="w-56 h-56 object-contain"
              />
            </div>

            {/* Target URL */}
            <div className="w-full p-3 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/40 flex flex-col gap-1 mb-5 text-left">
              <div className="flex items-center justify-between text-[11px] font-['Space_Grotesk'] text-[#80552f] font-semibold">
                <span className="flex items-center gap-1">
                  <Smartphone size={13} className="text-[#82193a]" />
                  <span>Encoded Destination</span>
                </span>
                <span className="text-green-700 font-bold">Online</span>
              </div>
              <a
                href="https://aravind-map-raesha0506.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-[#82193a] font-bold hover:underline break-all"
              >
                https://aravind-map-raesha0506.netlify.app
              </a>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
              <a
                href="https://aravind-map-raesha0506.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#82193a] text-white rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#610025] transition-all shadow-xs"
              >
                <ExternalLink size={14} />
                <span>Open in Browser</span>
              </a>
              <a
                href="https://github.com/Jennifer-Vesilica-Rachel/Smart-Indoor-Navigation-System"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-[#261907] border border-[#dcbfc3] rounded-xl font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#ffebd5] transition-all shadow-xs"
              >
                <Github size={14} />
                <span>GitHub Repo</span>
              </a>
              <a
                href="/images/aravind-qr-code.png"
                download="Aravind_Eye_Hospital_Indoor_Navigation_QR.png"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-[#261907] border border-[#dcbfc3] rounded-xl font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#ffebd5] transition-all shadow-xs"
              >
                <Download size={14} />
                <span>Save Image</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
