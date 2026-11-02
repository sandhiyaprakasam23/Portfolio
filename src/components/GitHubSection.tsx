import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { GithubIcon } from './BrandIcons';

export const GitHubSection: React.FC = () => {
  const featuredRepos = [
    {
      name: "VioceText",
      description: "Real-time multilingual speech-to-text platform using Python, TypeScript, persistent WebSockets, and Gemini API with database-backed session history.",
      language: "Python & TypeScript",
      stars: "Active",
      url: "https://github.com/sandhiyaprakasam23/VioceText",
      tags: ["WebSocket", "Gemini API", "Speech-to-Text", "TypeScript", "Python"],
    },
    {
      name: "healthcare-hipaa-api",
      description: "HIPAA-compliant RESTful API backend with Django REST Framework, JWT role-based access control (RBAC), and encrypted patient schema.",
      language: "Python / Django",
      stars: "Healthcare IT",
      url: "https://github.com/sandhiyaprakasam23",
      tags: ["Django REST", "PostgreSQL", "JWT", "RBAC", "HIPAA"],
    },
    {
      name: "sla-realestate-engine",
      description: "Rule-based SLA countdown engine with breach detection, append-only audit log, and PostgreSQL cutover migration ledger.",
      language: "Python / Django",
      stars: "ERP System",
      url: "https://github.com/sandhiyaprakasam23",
      tags: ["Python", "SLA Engine", "PostgreSQL", "Audit Ledger"],
    }
  ];

  return (
    <section className="relative py-20 bg-[#0B1020]/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 tracking-widest uppercase mb-1">
              <GithubIcon className="w-4 h-4" />
              <span>// OPEN SOURCE &amp; REPOSITORIES</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              GitHub Repositories &amp; Source Code
            </h2>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-violet-500/30 hover:border-violet-400 text-xs sm:text-sm font-mono transition-all self-start sm:self-auto cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-violet-400" />
            <span>Visit @sandhiyaprakasam23</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#07090F]/80 border border-slate-800 hover:border-violet-500/40 hover:bg-[#0B1020] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-sm text-white hover:text-cyan-300 transition-colors"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {repo.stars}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-medium">{repo.language}</span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 flex items-center gap-1"
                >
                  <span>View Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
