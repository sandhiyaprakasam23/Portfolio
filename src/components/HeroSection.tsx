import React from 'react';
import {
  FileDown,
  Terminal,
  ExternalLink,
  Shield,
  Zap,
  Layers,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { HumanCodeEditor } from './HumanCodeEditor';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTerminal,
  onOpenResume,
}) => {
  const handleDownloadResume = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-violet-500/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Developer Human Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Full-Time Roles &bull; Immediate Joiner (0 Days Notice)</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
              Hey, I'm <span className="gradient-text-cyan-violet">Sandhiya</span>.
            </h1>
            <p className="font-display font-semibold text-xl sm:text-2xl text-slate-200">
              Python Full Stack Developer &amp; Backend Specialist
            </p>
          </div>

          {/* Natural Human Bio */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            I engineer secure, HIPAA-compliant clinical systems with <strong className="text-white">Python, Django REST Framework</strong>, and <strong className="text-white">PostgreSQL</strong>, paired with clean, responsive frontends in <strong className="text-white">React.js</strong>.
          </p>

          {/* Credibility Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
              <Shield className="w-3.5 h-3.5 text-cyan-400" /> Healthcare IT &amp; HIPAA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
              <Zap className="w-3.5 h-3.5 text-violet-400" /> 15+ Production REST APIs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
              <Layers className="w-3.5 h-3.5 text-blue-400" /> React.js &amp; SPAs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> 80%+ Unit Test Coverage
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              onClick={() => sound.playClick()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore My Work</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={() => {
                handleDownloadResume();
                onOpenResume();
              }}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-400 font-medium text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume (PDF)</span>
            </button>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-4 py-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              className="px-3.5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 font-mono text-xs flex items-center gap-1.5 cursor-pointer"
              title="Open CLI Terminal (Ctrl + K)"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>CLI</span>
            </button>
          </div>

          {/* Quick Location & Direct Contact Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <span>📍 Bengaluru / Chennai (Relocation Ready)</span>
            <span className="text-slate-600">•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

        </div>

        {/* HUMAN DEVELOPER CODE WORKSPACE (Real VS Code with real tests) */}
        <div className="pt-2">
          <div className="text-center mb-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Real Production Code &bull; Click files to inspect &amp; run test suite
            </span>
          </div>

          <HumanCodeEditor />
        </div>

      </div>
    </section>
  );
};
