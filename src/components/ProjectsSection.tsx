import React, { useState } from 'react';
import { Eye, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/soundEffects';
import { GithubIcon } from './BrandIcons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const displayedProjects = filter === 'featured'
    ? PROJECTS.filter((p) => p.featured)
    : PROJECTS;

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#07090F]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
              <span>// 04. FEATURED PROJECTS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Production Systems &amp; Engineering Demos
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              Deployed applications, real-time WebSocket pipelines, and HIPAA-compliant architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#0B1020] p-1.5 rounded-xl border border-slate-800 self-start md:self-auto font-mono text-xs">
            <button
              onClick={() => {
                sound.playClick();
                setFilter('all');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setFilter('featured');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'featured'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Top Highlights
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl bg-[#0B1020]/70 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
                project.featured
                  ? 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10'
                  : 'border-slate-800 hover:border-violet-500/40 hover:shadow-xl'
              }`}
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
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Live Application
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

                {/* Problem Solved (Human Senior Developer Touch) */}
                {project.problemSolved && (
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-cyan-500/15 text-xs text-slate-300 space-y-1">
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
                  <span>Inspect Architecture</span>
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
                      onClick={() => sound.playClick(750)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
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
