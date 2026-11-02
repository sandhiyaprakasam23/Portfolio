import React from 'react';
import { X, ExternalLink, CheckCircle2, Server, Layers, Cpu } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { GithubIcon } from './BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0B1020] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-[#07090F]/90 border-b border-cyan-500/20 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              {project.liveUrl && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Production
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 transition-all"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4 text-violet-400" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Overview &amp; Architecture
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              {project.longDescription}
            </p>
          </div>

          {/* Key Deliverables & Engineering highlights */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Server className="w-4 h-4" /> Technical Specifications
            </h4>
            <div className="space-y-2">
              {project.architecturePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics & Impact */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Measurable Impact &amp; Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 font-mono">
                  ⚡ {m}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technologies &amp; Libraries Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#07090F] text-slate-300 border border-slate-700/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
