import { useState } from 'react';
import { ProjectItem, NavPath } from '../types';
import { ExternalLink, Github, QrCode, X, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onNavigate?: (path: NavPath) => void;
  onOpenQrModal?: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onNavigate, onOpenQrModal }: ProjectCardProps) {
  return (
    <div
      id={`project-card-${project.id}`}
      className="gsap-card rounded-2xl bg-[#ffffff] p-6 shadow-sm border border-[#dcbfc3]/50 flex flex-col justify-between gap-5 hover:shadow-md hover:border-[#dcbfc3] hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Top Header: Category Tag & Role Badge */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#82193a] bg-[#fff1e5] px-2.5 py-1 rounded-md border border-[#dcbfc3]/30">
            {project.organizationTag}
          </span>
          <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#564145] font-medium">
            {project.period}
          </span>
        </div>

        {/* Project Name (20–24px) */}
        <h3 className="typography-project-title font-['Epilogue'] text-lg sm:text-xl lg:text-[22px] font-bold text-[#261907] group-hover:text-[#82193a] transition-colors leading-snug">
          {project.title}
        </h3>

        {/* 1–2 Line Description */}
        <p className="typography-body font-['DM_Sans'] text-sm sm:text-base text-[#564145] leading-relaxed line-clamp-2">
          {project.shortDescription || project.description}
        </p>
      </div>

      {/* Structured Metadata: Role & Technologies */}
      <div className="flex flex-col gap-2.5 pt-3 border-t border-[#dcbfc3]/30">
        {/* Role: UI/UX / Developer */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-['Space_Grotesk']">
          <span className="font-bold text-[#261907] uppercase tracking-wider text-xs shrink-0">
            Role:
          </span>
          <span className="text-[#82193a] font-semibold bg-[#ffe4c6]/60 px-2 py-0.5 rounded text-xs sm:text-sm truncate">
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
                className="px-2.5 py-0.5 rounded bg-[#fff8f4] text-[#564145] font-['Space_Grotesk'] text-xs sm:text-sm font-medium border border-[#dcbfc3]/40"
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
      </div>

      {/* Bottom Footer: GitHub | Live Demo */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#dcbfc3]/30">
        <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
          {project.githubUrl && (
            <a
              id={`github-link-${project.id}`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repository for ${project.title}`}
              className="btn-interactive inline-flex items-center justify-center gap-1.5 min-h-[42px] px-3.5 py-2 rounded-xl bg-[#ffffff] hover:bg-[#ffebd5] text-[#261907] hover:text-[#82193a] border border-[#dcbfc3] font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-2xs"
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
              className="btn-interactive inline-flex items-center justify-center gap-1.5 min-h-[42px] px-4 py-2 rounded-xl bg-[#82193a] hover:bg-[#610025] text-white font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-xs"
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Optional QR Code Scan Modal Button for mobile-first projects like Aravind Wayfinding */}
        {project.qrCodeUrl && onOpenQrModal && (
          <button
            id={`qr-modal-btn-${project.id}`}
            onClick={() => onOpenQrModal(project)}
            title="Scan QR Code"
            className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-[#fff1e5] hover:bg-[#ffe4c6] text-[#82193a] border border-[#dcbfc3]/50 transition-colors cursor-pointer active:scale-95 shrink-0"
          >
            <QrCode size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
