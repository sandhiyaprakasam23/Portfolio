import React, { useState } from 'react';
import { Eye, CheckCircle2, ArrowUpRight, Globe, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/soundEffects';
import { GithubIcon } from './BrandIcons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter out all projects with working live URLs
  const liveProjects = PROJECTS.filter((p) => Boolean(p.liveUrl));

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#07090F]/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
              <span>// 04. PRODUCTION WORK</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Verified Production Projects &amp; Live Demos
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Every project below is deployed live on cloud infrastructure (Vercel, Render, Netlify) or backed by production HIPAA architecture. Click any link to open the live application.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{liveProjects.length} Verified Live Applications</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TOP DEDICATED LIVE APPLICATIONS QUICK LAUNCHER HUB */}
        {/* ======================================================== */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0B1020] via-[#0D1429] to-[#07090F] border-2 border-cyan-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/15 pb-4">
            <div className="flex items-center gap-2.5 text-white font-display font-bold text-lg sm:text-xl">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span>Live Deployed Applications Matrix</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Direct access to live hosted applications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {liveProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-xl bg-[#07090F]/90 border border-slate-800 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    {project.tags.slice(0, 2).join(' • ')}
                  </span>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playSuccess()}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* COMPREHENSIVE CASE STUDY GRID (ALL 5 PROJECTS) */}
        {/* ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" /> All Engineering Projects &amp; Architecture Details
            </h3>
            <span className="font-mono text-xs text-slate-400">
              Showing {PROJECTS.length} Systems
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#0B1020]/70 border border-slate-800 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.previewGradient}`} />

                <div className="p-6 sm:p-8 space-y-5">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {project.category}
                        </span>
                        {project.liveUrl && (
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Live Production
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <span className="font-mono text-lg font-bold text-slate-600 group-hover:text-cyan-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem Solved */}
                  {project.problemSolved && (
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/15 text-xs text-slate-300 space-y-1">
                      <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
                        Problem Solved &amp; Architecture:
                      </span>
                      <p className="text-slate-300 leading-relaxed text-xs">
                        {project.problemSolved}
                      </p>
                    </div>
                  )}

                  {/* Key Metrics / Highlights */}
                  <div className="space-y-1.5 bg-[#07090F]/70 p-4 rounded-xl border border-slate-800/80">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#07090F] text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 sm:px-8 py-4 bg-[#07090F]/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick(650);
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Deep Dive Architecture</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-violet-400" />
                        <span>Code</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playSuccess()}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                      >
                        <span>Open Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
