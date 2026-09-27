import { NavPath } from '../types';
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Bot,
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';

interface FlagshipProjectsSectionProps {
  onNavigate: (path: NavPath) => void;
}

export default function FlagshipProjectsSection({ onNavigate }: FlagshipProjectsSectionProps) {
  return (
    <section id="flagship-projects-section" className="w-full bg-[#fff1e5]/60 py-16 border-y border-[#dcbfc3]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Gateway Banner to Consolidated Projects Section */}
        <div className="rounded-3xl bg-[#ffffff] p-8 md:p-10 shadow-sm border border-[#dcbfc3]/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#82193a] uppercase font-bold tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#82193a]" />
              <span>Consolidated Technical Portfolio</span>
            </span>
            <h2 className="typography-section-heading font-['Epilogue'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#261907]">
              Featured Projects &amp; Live Systems
            </h2>
            <p className="typography-body font-['DM_Sans'] text-[15px] sm:text-base lg:text-lg text-[#564145] leading-relaxed">
              Explore production-deployed healthcare wayfinding systems and computational Information Retrieval search engines. All concise descriptions, UI/UX roles, tech stacks, GitHub repositories, and live demo deployments are consolidated in the dedicated Projects section.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-[#82193a] text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#610025] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm cursor-pointer shrink-0 text-center"
          >
            <span>Explore Projects Section</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Dual Internship Preview Modules */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold text-[#82193a]">
              Practical Engineering Experience
            </span>
            <button
              onClick={() => onNavigate('experience')}
              className="font-['Space_Grotesk'] text-xs font-semibold text-[#80552f] hover:text-[#82193a] hover:underline cursor-pointer"
            >
              View Complete Experience Log →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Aravind Eye Hospital */}
            <div className="gsap-card card-lift p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex flex-col justify-between gap-4 group hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs font-semibold">
                    Healthcare Tech Intern
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">Puducherry</span>
                </div>
                <h3 className="typography-project-title font-['Epilogue'] text-lg sm:text-xl lg:text-2xl text-[#261907] font-bold group-hover:text-[#82193a] transition-colors">
                  Aravind Eye Hospital
                </h3>
                <p className="typography-body font-['DM_Sans'] text-xs sm:text-sm lg:text-base text-[#564145] leading-relaxed">
                  Spearheaded front-end navigation logic, patient interaction studies, and digital orientation workflows across intensive multi-wing clinical facilities.
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] pt-3 border-t border-[#dcbfc3]/20">
                <span className="flex items-center gap-1.5 text-[#564145]">
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

            {/* Card 2: Upturne Software */}
            <div className="gsap-card card-lift p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex flex-col justify-between gap-4 group hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#ffe4c6] text-[#610025] font-['Space_Grotesk'] text-xs font-semibold">
                    AI Automation Intern
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">Pulsebay Coworking</span>
                </div>
                <h3 className="typography-project-title font-['Epilogue'] text-lg sm:text-xl lg:text-2xl text-[#261907] font-bold group-hover:text-[#82193a] transition-colors">
                  Upturne Software &amp; Services
                </h3>
                <p className="typography-body font-['DM_Sans'] text-xs sm:text-sm lg:text-base text-[#564145] leading-relaxed">
                  Designed autonomous data pipelines, generative AI workflows, and enterprise automation solutions utilizing modern cloud hooks and automated integrations.
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] pt-3 border-t border-[#dcbfc3]/20">
                <span className="flex items-center gap-1.5 text-[#564145]">
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
      </div>
    </section>
  );
}
