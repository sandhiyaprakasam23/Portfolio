import React from 'react';
import { GraduationCap, Award, Languages, Shield, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertificationsSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <span>// 05. EDUCATION &amp; CREDENTIALS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Academic Foundation &amp; Technical Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Formal Education</span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-sm font-mono text-slate-300">
                    {EDUCATION.institution} • <span className="text-amber-300">{EDUCATION.period}</span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {EDUCATION.description}
              </p>

              {/* Language Proficiency */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <Languages className="w-4 h-4 text-cyan-400" />
                  <span>Communication &amp; Languages</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {EDUCATION.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-3 rounded-xl bg-[#07090F]/70 border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-white">{lang.name}</span>
                      <span className="font-mono text-cyan-400">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Healthcare IT Domain Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-[#0B1020] border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Shield className="w-5 h-5" />
                <span>Specialized Domain: Healthcare IT &amp; HIPAA</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hands-on production background engineering hospital management systems, patient workflows, and HIPAA data access policies.
              </p>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border border-cyan-500/25 space-y-6">
              <div className="flex items-center gap-3 border-b border-cyan-500/15 pb-4">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-wider">Verified Training</span>
                  <h3 className="font-display font-bold text-xl text-white">
                    Technical Certifications (2024)
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#07090F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <h4 className="font-display font-semibold text-sm sm:text-base text-white">
                          {cert.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 pl-6 font-mono">
                        {cert.issuer}
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs font-mono text-slate-400 text-center">
                All credentials verified through structured software engineering programs.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
