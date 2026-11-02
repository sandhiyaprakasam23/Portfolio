import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <span>// 03. PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Commercial Engineering &amp; Clinical Impact
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on software development in HIPAA-governed Healthcare IT environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#07090F] border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-[#0B1020]/80 space-y-6">
                
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-cyan-500/15 pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Current Role (Active)
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {exp.domain}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-slate-300 mt-2">
                      <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-cyan-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Operational impact badge */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/60 to-slate-900 border border-cyan-500/30 flex items-center gap-3 self-start lg:self-auto">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-display font-extrabold text-xl text-white">+25%</div>
                      <div className="text-[11px] font-mono text-cyan-300">Efficiency Boost</div>
                    </div>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Key Verified Deliverables &amp; Engineering Metrics
                  </h4>

                  <div className="space-y-3">
                    {exp.achievements.map((item, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-[#07090F]/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used Chips */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="block text-xs font-mono text-slate-400 mb-2.5">
                    Stack Applied on Healthcare Applications:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#07090F] text-slate-300 border border-slate-700/80 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
