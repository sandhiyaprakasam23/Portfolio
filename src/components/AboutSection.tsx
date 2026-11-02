import React from 'react';
import { ShieldCheck, Cpu, CheckCircle2, MapPin, Clock, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <span>// 01. ABOUT ME</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Architecting Robust Backends &amp; Reactive Frontends
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Bridging complex clinical workflows, secure RESTful API design, and intuitive user experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="font-display font-semibold text-xl text-white flex items-center gap-2">
                <span className="text-cyan-400">⚡</span> Engineering Philosophy
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a <strong className="text-white">Python Full Stack Developer</strong> with 1+ year of commercial experience developing secure, scalable web applications using <span className="text-cyan-300 font-medium">Python, Django, Django REST Framework, React.js, MySQL, and PostgreSQL</span>.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                In my current role in <strong className="text-emerald-300">Healthcare IT</strong> at Vesoftmetic Solution, I have architected and maintained full-stack clinical applications serving hospital environments under strict <strong className="text-cyan-300">HIPAA compliance</strong>. I design database schemas that handle 10,000+ sensitive records with rock-solid data integrity and build RESTful APIs consumed across diverse platforms.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Self-transitioned from a background in Commerce into Full Stack Software Engineering through structured, disciplined technical immersion. This non-traditional path gives me a sharp sense of <strong className="text-amber-300">business ROI, SLA tracking, and operational efficiency</strong> (+25% improved workflows), combined with technical rigor in unit testing (80%+ coverage) and CI/CD pipelines.
              </p>

              {/* Status Pills */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Immediate Joiner (0 Days Notice)</span>
                </div>
              </div>
            </div>

            {/* Core Competencies highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0B1020]/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>HIPAA &amp; Security Mindset</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deeply versed in JWT authentication, role-based access control (RBAC), data encryption, and immutable audit logging.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1020]/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Clean API Engineering</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Authored and documented 15+ RESTful APIs with Django REST Framework, rate-limiting, and Postman collections.
                </p>
              </div>
            </div>
          </div>

          {/* Right card: Technical DNA & Quick Radar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel-glow p-6 sm:p-7 rounded-2xl border border-cyan-500/25 space-y-6">
              <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4">
                <div>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Profile Manifest</span>
                  <h4 className="font-display font-bold text-lg text-white">Full Stack Engineering DNA</h4>
                </div>
                <Award className="w-6 h-6 text-cyan-400" />
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Python &amp; Django Ecosystem</span>
                    <span className="text-cyan-400">Primary Core</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>REST API Architecture &amp; DRF</span>
                    <span className="text-cyan-400">Production Ready</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>React.js &amp; Frontend SPAs</span>
                    <span className="text-cyan-400">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>PostgreSQL &amp; MySQL Schemas</span>
                    <span className="text-cyan-400">10k+ Records</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>CI/CD, Git, GitHub Actions &amp; Testing</span>
                    <span className="text-cyan-400">80%+ Coverage</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full w-[86%]" />
                  </div>
                </div>
              </div>

              {/* Quick checks */}
              <div className="pt-2 border-t border-cyan-500/15 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Immediate availability for interviews &amp; onboarding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Comfortable in fast-paced Agile / Scrum sprints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Native Tamil speaker, professional English proficiency</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
