import { ProjectItem, NavPath } from '../types';
import { ExternalLink, Github, QrCode, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onNavigate?: (path: NavPath) => void;
  onOpenQrModal?: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onNavigate, onOpenQrModal }: ProjectCardProps) {
  return (
    <div
      id={`project-card-${project.id}`}
      className="gsap-card rounded-2xl bg-[#ffffff] p-5 sm:p-6 shadow-sm border border-[#dcbfc3]/50 flex flex-col justify-between gap-5 hover:shadow-md hover:border-[#dcbfc3] hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Top Header: Category Tag & Period */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#82193a] bg-[#fff1e5] px-2.5 py-1 rounded-md border border-[#dcbfc3]/30">
            {project.organizationTag}
          </span>
          <span className="font-['Space_Grotesk'] text-xs text-[#564145] font-medium">
            {project.period}
          </span>
        </div>

        {/* Project Name */}
        <h3 className="typography-project-title font-['Epilogue'] text-lg sm:text-xl lg:text-[22px] font-bold text-[#261907] group-hover:text-[#82193a] transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Headline Metric Highlight */}
        {project.metricHighlight && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ffe4c6]/70 border border-[#dcbfc3]/50 text-[#610025] font-['Space_Grotesk'] text-xs font-bold">
            <Sparkles size={14} className="shrink-0 text-[#82193a]" />
            <span className="truncate">{project.metricHighlight}</span>
          </div>
        )}

        {/* 1–2 Line Description */}
        <p className="typography-body font-['DM_Sans'] text-xs sm:text-sm text-[#564145] leading-relaxed line-clamp-2">
          {project.shortDescription || project.description}
        </p>

        {/* Strongest 3–4 Key Features / Metrics (High Signal, Reduced Density) */}
        {project.bullets && project.bullets.length > 0 && (
          <div className="flex flex-col gap-2 pt-2 border-t border-[#dcbfc3]/30">
            <span className="font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider text-[#261907]">
              Key Highlights &amp; Metrics:
            </span>
            <ul className="flex flex-col gap-1.5 text-xs text-[#564145] font-['DM_Sans']">
              {project.bullets.slice(0, 4).map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-snug">
                  <CheckCircle2 size={13} className="text-[#82193a] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Structured Metadata: Role & Technologies */}
      <div className="flex flex-col gap-2.5 pt-3 border-t border-[#dcbfc3]/30">
        <div className="flex items-center gap-2 text-xs font-['Space_Grotesk']">
          <span className="font-bold text-[#261907] uppercase tracking-wider text-xs shrink-0">
            Role:
          </span>
          <span className="text-[#82193a] font-semibold bg-[#ffe4c6]/60 px-2 py-0.5 rounded text-xs truncate">
            {project.role || 'UI/UX & Developer'}
          </span>
        </div>

        {/* Technologies: React, Tailwind, etc. */}
        <div className="flex flex-col gap-1.5">
          <span className="font-bold text-[#261907] font-['Space_Grotesk'] text-xs uppercase tracking-wider">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded bg-[#fff8f4] text-[#564145] font-['Space_Grotesk'] text-xs font-medium border border-[#dcbfc3]/40"
              >
                {tech}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="px-1.5 py-0.5 rounded bg-transparent text-[#80552f] font-['Space_Grotesk'] text-xs font-bold">
                +{project.tags.length - 5} more
              </span>
            )}
          </div>
        </div>

        <div className="text-[11px] font-['DM_Sans'] text-[#80552f] italic">
          Full architecture &amp; implementation specs available in GitHub repository.
        </div>
      </div>

      {/* Bottom Footer: GitHub | Live Demo */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-[#dcbfc3]/30">
        <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
          {project.githubUrl && (
            <a
              id={`github-link-${project.id}`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repository for ${project.title}`}
              className="btn-interactive inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#ffffff] hover:bg-[#ffebd5] text-[#261907] hover:text-[#82193a] border border-[#dcbfc3] font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              id={`live-demo-link-${project.id}`}
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo for ${project.title}`}
              className="btn-interactive inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#82193a] hover:bg-[#610025] text-white font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Optional QR Code Scan Modal Button */}
        {project.qrCodeUrl && onOpenQrModal && (
          <button
            id={`qr-modal-btn-${project.id}`}
            onClick={() => onOpenQrModal(project)}
            title="Scan QR Code"
            aria-label="Scan QR Code"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#fff1e5] hover:bg-[#ffe4c6] text-[#82193a] border border-[#dcbfc3]/50 transition-colors cursor-pointer active:scale-95 shrink-0"
          >
            <QrCode size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
