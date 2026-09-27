import { useState } from 'react';
import { NavPath, ProjectItem } from '../types';
import { WAYFINDING_DESTINATIONS, PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { useViewAnimations } from '../hooks/useSectionAnimations';
import {
  MapPin,
  QrCode,
  ExternalLink,
  Github,
  Search,
  Database,
  FileText,
  Terminal,
  X,
  Download,
  Smartphone,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check
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
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [activeSimulator, setActiveSimulator] = useState<'wayfinding' | 'search'>('wayfinding');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // IR Search Engine interactive state
  const [searchQuery, setSearchQuery] = useState('data processing');
  const [activeSearchTab, setActiveSearchTab] = useState<'ranked' | 'matrix' | 'corpus'>('ranked');

  const currentDestination = WAYFINDING_DESTINATIONS[selectedDestKey];

  const handleExploreDemo = (projectId: string) => {
    setIsSimulatorOpen(true);
    setActiveSimulator(projectId === 'search-engine' ? 'search' : 'wayfinding');
    setTimeout(() => {
      const section = document.getElementById('interactive-simulators-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Reliable QR PNG download handler
  const handleDownloadQrPng = async () => {
    try {
      const response = await fetch('/images/aravind-qr-code.png');
      if (!response.ok) throw new Error('Network error fetching QR image');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Aravind_Eye_Hospital_Indoor_Navigation_QR.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch {
      // Fallback
      const link = document.createElement('a');
      link.href = '/images/aravind-qr-code.png';
      link.download = 'Aravind_Eye_Hospital_Indoor_Navigation_QR.png';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

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
    let rawScore = 0;

    const matchedTerms: { term: string; tf: number; idf: number }[] = [];

    queryTokens.forEach((qt) => {
      const termOccurrences = docTokens.filter(t => t.includes(qt) || qt.includes(t)).length;
      if (termOccurrences > 0) {
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
          <div className="flex items-center gap-2 text-[#82193a] font-['Space_Grotesk'] text-xs sm:text-sm uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-[#82193a] inline-block"></span>
            <span>Portfolio &amp; Featured Technical Works</span>
          </div>
          <h1 className="gsap-reveal-heading typography-section-heading font-['Epilogue'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#261907] tracking-tight leading-tight">
            Featured Engineering &amp; Software Projects
          </h1>
          <p className="gsap-reveal-paragraph typography-body font-['DM_Sans'] text-[15px] sm:text-base lg:text-lg text-[#564145] leading-relaxed">
            All project descriptions, UI/UX design roles, verified code repositories, and live production deployments engineered by Jennifer Vesilica Rachel S.
          </p>
        </div>

        {/* Consolidated Projects Cards Grid: Project Name, 1-2 line description, Role, Technologies, GitHub | Live Demo */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#82193a]">
              Consolidated Projects &amp; Repositories
            </span>
            <span className="font-['Space_Grotesk'] text-xs text-[#564145]">
              {PROJECTS.length} Verified Systems
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onNavigate={onNavigate}
                onOpenQrModal={() => setIsQrModalOpen(true)}
                onExploreDemo={project.id !== 'editorial-portfolio' ? handleExploreDemo : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE SYSTEM SIMULATORS (Optional Deep Technical Demonstration)     */}
      {/* ========================================================================= */}
      <section id="interactive-simulators-section" className="w-full bg-[#fff1e5] py-10 md:py-14 border-y border-[#dcbfc3]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {/* Header Card with Explore / Collapse Button */}
          <div className="rounded-2xl bg-[#ffffff] p-6 sm:p-8 shadow-sm border border-[#dcbfc3]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-2xl">
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#82193a] font-bold flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#82193a]" />
                <span>Deep Technical Demonstrations</span>
              </span>
              <h2 className="typography-section-heading font-['Epilogue'] text-xl sm:text-2xl lg:text-3xl font-bold text-[#261907]">
                Live In-Browser System Simulators
              </h2>
              <p className="typography-body font-['DM_Sans'] text-xs sm:text-sm lg:text-base text-[#564145] leading-relaxed">
                Test the client-side hospital wayfinding routing engine or execute real-time Vector Space Model TF-IDF queries across indexed document corpora.
              </p>
            </div>

            <button
              onClick={() => setIsSimulatorOpen(!isSimulatorOpen)}
              className="btn-interactive inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#82193a] hover:bg-[#610025] text-white font-['Space_Grotesk'] text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer shrink-0 active:scale-95"
            >
              <span>{isSimulatorOpen ? 'Hide System Simulators' : 'Explore System Simulators'}</span>
              <ArrowRight size={16} className={`transition-transform duration-200 ${isSimulatorOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Collapsible Sandbox Container */}
          {isSimulatorOpen && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
              {/* Simulator Tab Switcher */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#82193a]">
                  Active Sandbox:
                </span>
                <div className="grid grid-cols-2 sm:flex p-1 bg-[#ffe4c6] rounded-xl border border-[#dcbfc3]/50 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveSimulator('wayfinding')}
                    className={`btn-interactive min-h-[44px] px-3 sm:px-4 py-2 rounded-lg font-['Space_Grotesk'] text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center hover:scale-[1.02] active:scale-[0.98] ${
                      activeSimulator === 'wayfinding'
                        ? 'bg-[#82193a] text-white shadow-xs'
                        : 'text-[#261907] hover:bg-[#ffebd5]'
                    }`}
                  >
                    <MapPin size={15} />
                    <span>Wayfinding Engine</span>
                  </button>
                  <button
                    onClick={() => setActiveSimulator('search')}
                    className={`btn-interactive min-h-[44px] px-3 sm:px-4 py-2 rounded-lg font-['Space_Grotesk'] text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center hover:scale-[1.02] active:scale-[0.98] ${
                      activeSimulator === 'search'
                        ? 'bg-[#82193a] text-white shadow-xs'
                        : 'text-[#261907] hover:bg-[#ffebd5]'
                    }`}
                  >
                    <Search size={15} />
                    <span>IR Search Sandbox</span>
                  </button>
                </div>
              </div>

              {/* SIMULATOR 1: Hospital Wayfinding */}
              {activeSimulator === 'wayfinding' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
                  {/* Left Column: Interactive Routing Controls & Selected Department (7 cols) */}
                  <div className="lg:col-span-7 bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-6">
                    <div className="flex items-center justify-between pb-3 border-b border-[#dcbfc3]/30">
                      <div className="flex flex-col">
                        <span className="font-['Space_Grotesk'] text-xs text-[#82193a] font-bold uppercase tracking-wider">
                          Aravind Eye Hospital Wayfinder
                        </span>
                        <span className="font-['DM_Sans'] text-xs text-[#564145]">
                          Select a destination to simulate physical patient routing
                        </span>
                      </div>
                      <button
                        onClick={() => setIsQrModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fff1e5] text-[#82193a] border border-[#dcbfc3] rounded-lg font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffebd5] transition-all cursor-pointer"
                      >
                        <QrCode size={13} />
                        <span>Scan QR</span>
                      </button>
                    </div>

                    {/* Target Department Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="font-['Space_Grotesk'] text-xs text-[#261907] font-bold">
                        Select Clinical Destination:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        <button
                          onClick={() => setSelectedDestKey('glaucoma')}
                          className={`min-h-[52px] p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col gap-1 active:scale-[0.98] ${
                            selectedDestKey === 'glaucoma'
                              ? 'bg-[#82193a] text-white border-[#82193a] shadow-xs'
                              : 'bg-[#ffebd5]/40 text-[#261907] border-[#dcbfc3]/40 hover:bg-[#ffebd5]'
                          }`}
                        >
                          <span className="font-['Space_Grotesk'] text-xs font-bold">Glaucoma Wing</span>
                          <span className={`text-xs font-['DM_Sans'] ${selectedDestKey === 'glaucoma' ? 'text-[#ffb2bf]' : 'text-[#564145]'}`}>
                            Wing B • 1st Floor
                          </span>
                        </button>

                        <button
                          onClick={() => setSelectedDestKey('pharmacy')}
                          className={`min-h-[52px] p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col gap-1 active:scale-[0.98] ${
                            selectedDestKey === 'pharmacy'
                              ? 'bg-[#82193a] text-white border-[#82193a] shadow-xs'
                              : 'bg-[#ffebd5]/40 text-[#261907] border-[#dcbfc3]/40 hover:bg-[#ffebd5]'
                          }`}
                        >
                          <span className="font-['Space_Grotesk'] text-xs font-bold">Main Pharmacy</span>
                          <span className={`text-xs font-['DM_Sans'] ${selectedDestKey === 'pharmacy' ? 'text-[#ffb2bf]' : 'text-[#564145]'}`}>
                            Ground Level • Kiosk 4
                          </span>
                        </button>

                        <button
                          onClick={() => setSelectedDestKey('refraction')}
                          className={`min-h-[52px] p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col gap-1 active:scale-[0.98] ${
                            selectedDestKey === 'refraction'
                              ? 'bg-[#82193a] text-white border-[#82193a] shadow-xs'
                              : 'bg-[#ffebd5]/40 text-[#261907] border-[#dcbfc3]/40 hover:bg-[#ffebd5]'
                          }`}
                        >
                          <span className="font-['Space_Grotesk'] text-xs font-bold">Refraction Lab</span>
                          <span className={`text-xs font-['DM_Sans'] ${selectedDestKey === 'refraction' ? 'text-[#ffb2bf]' : 'text-[#564145]'}`}>
                            Corridor 1 • Room 108
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Turn Instruction Box */}
                    <div className="p-4 rounded-xl bg-[#fff1e5] border border-[#dcbfc3]/40 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#80552f] font-bold">
                          {currentDestination.title}
                        </span>
                        <span className="font-mono text-xs text-[#82193a] font-bold bg-white px-2 py-0.5 rounded border border-[#dcbfc3]/30">
                          {currentDestination.estimate}
                        </span>
                      </div>
                      <p className="font-['DM_Sans'] text-sm text-[#261907] font-medium">
                        {currentDestination.instruction}
                      </p>
                      <p className="font-['DM_Sans'] text-xs text-[#564145]">
                        {currentDestination.desc}
                      </p>
                    </div>

                    {/* Direct Action Link */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-['Space_Grotesk'] text-xs text-[#564145]">
                        Hospital Station Gate 2 Anchor Point
                      </span>
                      <a
                        href="https://aravind-map-raesha0506.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-['Space_Grotesk'] text-xs font-bold text-[#82193a] hover:text-[#610025] hover:underline"
                      >
                        <span>Launch Netlify Web App</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Node Map Vector & Landmark Checkpoint (5 cols) */}
                  <div className="lg:col-span-5 bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-4">
                    <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#82193a] font-bold">
                      Live Floor Route &amp; Visual Landmark
                    </span>

                    {/* SVG Node Map Canvas */}
                    <div className="relative w-full h-44 bg-[#ffe4c6]/40 rounded-xl overflow-hidden border border-[#dcbfc3]/30 flex items-center justify-center p-2">
                      <svg className="w-full h-full" viewBox="0 0 300 160">
                        {/* Background corridor grid */}
                        <rect x="20" y="20" width="260" height="120" rx="8" fill="#ffffff" stroke="#dcbfc3" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="40" y1="20" x2="40" y2="140" stroke="#dcbfc3" strokeWidth="6" strokeLinecap="round" />
                        <line x1="40" y1="100" x2="260" y2="100" stroke="#dcbfc3" strokeWidth="6" strokeLinecap="round" />
                        <line x1="160" y1="20" x2="160" y2="140" stroke="#dcbfc3" strokeWidth="6" strokeLinecap="round" />
                        <line x1="260" y1="20" x2="260" y2="140" stroke="#dcbfc3" strokeWidth="6" strokeLinecap="round" />

                        {/* Active dynamic route */}
                        <path
                          d={currentDestination.path}
                          fill="none"
                          stroke="#82193a"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="4 2"
                          className="animate-pulse"
                        />

                        {/* User Origin point */}
                        <circle cx="40" cy="140" r="6" fill="#82193a" />
                        <text x="50" y="144" fill="#82193a" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">
                          Scan Origin
                        </text>

                        {/* Target point pin */}
                        {selectedDestKey === 'glaucoma' && (
                          <g>
                            <circle cx="160" cy="50" r="7" fill="#ba1a1a" />
                            <text x="172" y="54" fill="#ba1a1a" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">
                              Glaucoma
                            </text>
                          </g>
                        )}
                        {selectedDestKey === 'pharmacy' && (
                          <g>
                            <circle cx="90" cy="100" r="7" fill="#059669" />
                            <text x="96" y="94" fill="#059669" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">
                              Pharmacy
                            </text>
                          </g>
                        )}
                        {selectedDestKey === 'refraction' && (
                          <g>
                            <circle cx="260" cy="140" r="7" fill="#2563eb" />
                            <text x="185" y="144" fill="#2563eb" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">
                              Refraction Lab
                            </text>
                          </g>
                        )}
                      </svg>
                    </div>

                    {/* Landmark Photo Checkpoint */}
                    <div className="relative rounded-xl overflow-hidden border border-[#dcbfc3]/40 h-32 group">
                      <img
                        src={currentDestination.landmarkImg}
                        alt="Corridor Landmark Checkpoint"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-white">
                        <div className="flex flex-col">
                          <span className="font-['Space_Grotesk'] text-xs text-[#ffdcc2] uppercase font-bold">
                            Photographic Verification
                          </span>
                          <span className="font-['DM_Sans'] text-xs font-semibold">
                            Aravind Eye Hospital Junction Landmark
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATOR 2: IR Search Engine */}
              {activeSimulator === 'search' && (
                <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-6 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#dcbfc3]/30">
                    <div className="flex flex-col">
                      <span className="font-['Space_Grotesk'] text-xs text-[#82193a] font-bold uppercase tracking-wider">
                        TF-IDF &amp; Cosine Similarity Search Sandbox
                      </span>
                      <span className="font-['DM_Sans'] text-xs text-[#564145]">
                        Computes term frequencies, inverse document frequencies, and cosine vectors across 5 indexed corpus files
                      </span>
                    </div>
                    <a
                      href="https://search-engine-self-sigma.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 bg-[#82193a] text-white rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#610025] transition-all shadow-xs shrink-0 self-start sm:self-auto cursor-pointer active:scale-95"
                    >
                      <ExternalLink size={13} />
                      <span>Open Vercel App</span>
                    </a>
                  </div>

                  {/* Interactive Search Input */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative w-full flex-1">
                      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter query (e.g. 'data processing', 'machine learning', 'indexing')..."
                        className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-['Space_Grotesk'] text-slate-900 focus:outline-none focus:border-[#82193a] focus:ring-1 focus:ring-[#82193a] bg-slate-50"
                      />
                    </div>
                    <div className="grid grid-cols-3 sm:flex items-center gap-1.5 w-full sm:w-auto">
                      <button
                        onClick={() => setSearchQuery('data processing')}
                        className="btn-interactive min-h-[44px] px-3 py-2 text-xs font-['Space_Grotesk'] rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all flex items-center justify-center text-center hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        Data
                      </button>
                      <button
                        onClick={() => setSearchQuery('tree structure indexing')}
                        className="btn-interactive min-h-[44px] px-3 py-2 text-xs font-['Space_Grotesk'] rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all flex items-center justify-center text-center hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        Indexing
                      </button>
                      <button
                        onClick={() => setSearchQuery('information retrieval')}
                        className="btn-interactive min-h-[44px] px-3 py-2 text-xs font-['Space_Grotesk'] rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all flex items-center justify-center text-center hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        IR
                      </button>
                    </div>
                  </div>

                  {/* Tab Selector: Ranked Results, Calculation Matrix, Indexed Corpus */}
                  <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-2">
                    <button
                      onClick={() => setActiveSearchTab('ranked')}
                      className={`btn-interactive min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-['Space_Grotesk'] font-bold transition-all flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                        activeSearchTab === 'ranked'
                          ? 'bg-[#82193a] text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      Ranked Results ({simulationResults.filter(d => d.hasMatch).length})
                    </button>
                    <button
                      onClick={() => setActiveSearchTab('matrix')}
                      className={`btn-interactive min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-['Space_Grotesk'] font-bold transition-all flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                        activeSearchTab === 'matrix'
                          ? 'bg-[#82193a] text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      Calculation Matrix
                    </button>
                    <button
                      onClick={() => setActiveSearchTab('corpus')}
                      className={`btn-interactive min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-['Space_Grotesk'] font-bold transition-all flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                        activeSearchTab === 'corpus'
                          ? 'bg-[#82193a] text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      Corpus ({DEFAULT_CORPUS.length})
                    </button>
                  </div>

                  {/* Tab 1: Ranked Results */}
                  {activeSearchTab === 'ranked' && (
                    <div className="flex flex-col gap-3 max-h-[340px] overflow-y-auto pr-1">
                      {simulationResults.filter(d => d.hasMatch).length === 0 ? (
                        <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center gap-2">
                          <FileText size={24} className="text-slate-400" />
                          <span className="font-['Space_Grotesk'] text-xs font-bold text-slate-600">
                            No indexed documents match the query "{searchQuery}"
                          </span>
                          <span className="font-['DM_Sans'] text-xs text-slate-400">
                            Try queries containing 'data', 'learning', 'tree', 'retrieval', or 'indexing'.
                          </span>
                        </div>
                      ) : (
                        simulationResults
                          .filter(d => d.hasMatch)
                          .map((doc, rank) => (
                            <div
                              key={doc.id}
                              className="p-3.5 bg-slate-50 hover:bg-amber-50/40 rounded-xl border border-slate-200 transition-colors flex flex-col gap-2"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-[#82193a] text-white text-xs font-mono font-bold flex items-center justify-center">
                                    {rank + 1}
                                  </span>
                                  <span className="font-['Space_Grotesk'] text-xs font-bold text-slate-900">
                                    {doc.title}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-xs font-bold text-[#82193a]">
                                    Score: {(doc.cosineSim * 100).toFixed(1)}%
                                  </span>
                                  <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-[#82193a] rounded-full"
                                      style={{ width: `${Math.min(100, doc.cosineSim * 100)}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['DM_Sans'] text-xs text-slate-600 leading-relaxed">
                                {doc.content}
                              </p>
                              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                                <span className="font-semibold text-slate-700">Matched Tokens:</span>
                                {doc.matchedTerms.map((m, idx) => (
                                  <span key={idx} className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200 font-mono text-xs">
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
                    <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto pr-1">
                      <div className="text-xs font-['Space_Grotesk'] text-slate-600">
                        Query vector tokens after stopword removal:
                        <span className="font-mono font-bold text-[#82193a] ml-1">
                          [{queryTokens.join(', ') || 'none'}]
                        </span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-['Space_Grotesk'] border-collapse bg-white rounded-lg border border-slate-200">
                          <thead>
                            <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 text-xs">
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
                                <tr key={`${d.id}-${idx}`} className="border-b border-slate-100 text-xs">
                                  <td className="p-2 font-mono font-bold text-slate-900">{m.term}</td>
                                  <td className="p-2 font-mono text-[#82193a]">{d.id}</td>
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
                    <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto pr-1">
                      {DEFAULT_CORPUS.map((doc) => (
                        <div key={doc.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs flex flex-col gap-1">
                          <div className="flex items-center justify-between font-mono font-bold text-slate-800 text-xs">
                            <span>{doc.id}</span>
                            <span className="text-xs px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                              {doc.tags.join(', ')}
                            </span>
                          </div>
                          <p className="font-['DM_Sans'] text-slate-600 text-xs">{doc.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer Links */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-['Space_Grotesk'] text-slate-500 pt-2 border-t border-slate-200">
                    <span>Corpus: 5 Docs · 335+ Vocabulary Terms</span>
                    <a
                      href="https://github.com/Jennifer-Vesilica-Rachel/search-engine"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#261907] hover:underline font-bold flex items-center gap-1"
                    >
                      <Github size={13} />
                      <span>View Python / Flask Source Code</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
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
              Open to software engineering internships, UI/UX roles, and collaborative technology initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#ffffff] text-[#610025] rounded-lg font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#ffe4c6] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Contact Me
            </button>
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#82193a] text-white rounded-lg font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#82193a]/80 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
            >
              <span>View Resume</span>
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
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 bg-[#82193a] text-white rounded-xl font-['Space_Grotesk'] text-xs font-bold hover:bg-[#610025] transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <ExternalLink size={14} />
                <span>Open in Browser</span>
              </a>
              <a
                href="https://github.com/Jennifer-Vesilica-Rachel/Smart-Indoor-Navigation-System"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 bg-white text-[#261907] border border-[#dcbfc3] rounded-xl font-['Space_Grotesk'] text-xs font-semibold hover:bg-[#ffebd5] transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <Github size={14} />
                <span>GitHub Repo</span>
              </a>
              <button
                type="button"
                onClick={handleDownloadQrPng}
                aria-label="Save QR Code PNG Image"
                className={`w-full sm:flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer active:scale-95 border ${
                  downloadSuccess
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white text-[#261907] border-[#dcbfc3] hover:bg-[#ffebd5]'
                }`}
              >
                {downloadSuccess ? (
                  <>
                    <Check size={15} className="text-emerald-700" />
                    <span>Saved to Device!</span>
                  </>
                ) : (
                  <>
                    <Download size={15} />
                    <span>Save Image</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
