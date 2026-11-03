import React from 'react';
import { ShieldCheck, Cpu, CheckCircle2, MapPin, Clock, Award, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <span>// 01. ABOUT ME</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Engineering with Production Discipline &amp; Craft
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            How a self-transitioned developer from Commerce built production systems handling 10,000+ sensitive healthcare records.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Human Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1020]/70 border border-slate-800 space-y-4">
              <h3 className="font-display font-semibold text-xl text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" /> My Journey &amp; Engineering Mindset
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a <strong className="text-white">Python Full Stack Developer</strong> with 1+ year of commercial experience developing secure, scalable web applications using <span className="text-cyan-300 font-medium">Python, Django, Django REST Framework, React.js, MySQL, and PostgreSQL</span>.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I originally graduated with a <strong className="text-white">Bachelor of Commerce</strong>. But while studying business and financial ledgers, I became fascinated by how software actually automates and scales these systems. I committed to rigorous full-time technical training, fell in love with Python's clarity and Django's robustness, and earned my way into commercial engineering.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                In my current role at <strong className="text-emerald-300">Vesoftmetic Solution</strong>, I build clinical web applications in Healthcare IT. I spend my days designing <strong className="text-cyan-300">HIPAA-compliant RESTful APIs</strong>, optimizing relational database schemas handling 10,000+ sensitive patient records, and enforcing role-based access control (RBAC).
              </p>

              {/* Status and Location row */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Immediate Joiner (0 Days Notice)</span>
                </div>
              </div>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#07090F]/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero-Compromise Security</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Healthcare IT taught me that data security is not an afterthought. I implement strict JWT tokens, RBAC permissions, and immutable audit logs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#07090F]/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Automated Testing First</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  I write unit tests (80%+ coverage) and integrate GitHub Actions CI/CD pipelines because software should never break unexpectedly in production.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Everyday Toolkit & Engineering Principles */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1020]/70 border border-cyan-500/20 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Engineering Blueprint</span>
                  <h4 className="font-display font-bold text-lg text-white">How I Work Daily</h4>
                </div>
                <Award className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Working Principles */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Clean API Contracts:</strong> Design REST endpoints with clear request/response models, validated payloads, and Postman documentation.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Schema Normalization:</strong> Index foreign keys, write idempotent migration checkpoints, and prevent duplicate data pollution.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Empathetic Frontend UI:</strong> Build React SPAs that load fast, handle network errors gracefully, and respect users' time.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Agile &amp; Team Mindset:</strong> Active participant in sprint standups, PR code reviews, and cross-functional communication.
                  </div>
                </div>
              </div>

              {/* Communication Languages */}
              <div className="pt-3 border-t border-slate-800 text-xs font-mono space-y-1.5">
                <span className="text-slate-400">Languages:</span>
                <div className="flex gap-2 text-slate-200">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">Tamil (Native)</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">English (Professional)</span>
                </div>
              </div>
            </div>

            {/* Quick Education Card */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-1">
              <span className="text-slate-400 uppercase">Degree:</span>
              <p className="text-white font-semibold">{EDUCATION.degree} &bull; {EDUCATION.institution} ({EDUCATION.period})</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
