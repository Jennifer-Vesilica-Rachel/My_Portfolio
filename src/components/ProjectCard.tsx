import { ProjectItem, NavPath } from '../types';
import { ExternalLink, Github, QrCode, Sparkles, Play } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onNavigate?: (path: NavPath) => void;
  onOpenQrModal?: (project: ProjectItem) => void;
  onExploreDemo?: (projectId: string) => void;
}

export default function ProjectCard({
  project,
  onNavigate,
  onOpenQrModal,
  onExploreDemo
}: ProjectCardProps) {
  return (
    <article
      id={`project-card-${project.id}`}
      className="gsap-card rounded-2xl bg-[#ffffff] p-5 sm:p-7 shadow-sm border border-[#dcbfc3]/50 flex flex-col justify-between gap-6 hover:shadow-md hover:border-[#dcbfc3] hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* 1. Header & Project Identity */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#82193a] bg-[#fff1e5] px-3 py-1 rounded-md border border-[#dcbfc3]/40">
            {project.organizationTag}
          </span>
          <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#564145] font-medium">
            {project.period}
          </span>
        </div>

        <h3 className="typography-project-title font-['Epilogue'] text-xl sm:text-2xl font-bold text-[#261907] group-hover:text-[#82193a] transition-colors leading-snug">
          {project.title}
        </h3>

        {project.metricHighlight && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ffe4c6]/70 border border-[#dcbfc3]/50 text-[#610025] font-['Space_Grotesk'] text-xs sm:text-sm font-bold">
            <Sparkles size={15} className="shrink-0 text-[#82193a]" />
            <span className="truncate">{project.metricHighlight}</span>
          </div>
        )}

        {/* 2. Structured Recruiter Flow: Role → Problem → Solution → Result */}
        <div className="flex flex-col gap-3 pt-3 pb-1 border-t border-[#dcbfc3]/30">
          {/* Role */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm sm:text-base">
            <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#82193a] shrink-0 sm:w-20">
              Role:
            </span>
            <span className="font-['DM_Sans'] font-semibold text-[#261907]">
              {project.role}
            </span>
          </div>

          {/* Problem */}
          {project.problem && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 text-sm sm:text-base">
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#80552f] shrink-0 sm:w-20">
                Problem:
              </span>
              <p className="font-['DM_Sans'] text-[#443336] leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 text-sm sm:text-base">
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#261907] shrink-0 sm:w-20">
                Solution:
              </span>
              <p className="font-['DM_Sans'] text-[#443336] leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* Result */}
          {project.result && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 text-sm sm:text-base pt-1">
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#059669] shrink-0 sm:w-20">
                Result:
              </span>
              <div className="font-['DM_Sans'] text-[#064e3b] font-medium bg-[#ecfdf5] p-3 rounded-xl border border-[#a7f3d0] leading-relaxed w-full">
                {project.result}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Tech Stack & Primary Actions */}
      <div className="flex flex-col gap-4 pt-3 border-t border-[#dcbfc3]/30">
        {/* Technologies */}
        <div className="flex flex-col gap-1.5">
          <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#261907]">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-[#fff8f4] text-[#422c2f] font-['Space_Grotesk'] text-xs sm:text-sm font-medium border border-[#dcbfc3]/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls: Live Demo, GitHub & Interactive Simulator */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-[#dcbfc3]/30">
          <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
            {project.liveDemoUrl && (
              <a
                id={`live-demo-link-${project.id}`}
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live production demo for ${project.title}`}
                className="btn-interactive inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#82193a] hover:bg-[#610025] text-white font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                id={`github-link-${project.id}`}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.title}`}
                className="btn-interactive inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#ffffff] hover:bg-[#ffebd5] text-[#261907] hover:text-[#82193a] border border-[#dcbfc3] font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
            )}

            {onExploreDemo && (
              <button
                type="button"
                onClick={() => onExploreDemo(project.id)}
                aria-label={`Explore interactive system simulator for ${project.title}`}
                className="btn-interactive inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#fff1e5] hover:bg-[#ffe4c6] text-[#82193a] border border-[#dcbfc3]/50 font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer"
              >
                <Play size={14} className="fill-[#82193a]" />
                <span>Explore Demo</span>
              </button>
            )}
          </div>

          {project.qrCodeUrl && onOpenQrModal && (
            <button
              id={`qr-modal-btn-${project.id}`}
              onClick={() => onOpenQrModal(project)}
              title="Scan QR Code"
              aria-label="Scan QR Code for mobile wayfinding"
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#fff1e5] hover:bg-[#ffe4c6] text-[#82193a] border border-[#dcbfc3]/50 transition-colors cursor-pointer active:scale-95 shrink-0"
            >
              <QrCode size={18} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
