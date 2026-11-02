import React, { useState } from 'react';
import {
  FileDown,
  Terminal,
  Send,
  ExternalLink,
  Shield,
  Zap,
  Layers,
  Sparkles,
  Monitor,
  Box,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { Workstation3D } from './Workstation3D';
import { HolographicDeskImage2 } from './HolographicDeskImage2';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTerminal,
  onOpenResume,
}) => {
  // Default to Style 2 (Image 2 - Holographic Desk Studio) as requested by user
  const [workstationMode, setWorkstationMode] = useState<'hologram2' | 'isometric1'>('hologram2');

  const handleDownloadResume = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Developer Identity Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-8">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,229,255,0.2)] animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>OPEN TO WORK • IMMEDIATE JOINER • BENGALURU &amp; CHENNAI &amp; REMOTE</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <p className="font-mono text-xs sm:text-sm text-cyan-400 tracking-widest uppercase">
              &lt;SENIOR WORKSTATION /&gt; HELLO, I'M
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white">
              <span className="gradient-text-cyan-violet">SANDHIYA</span>
            </h1>
            <h2 className="font-display font-semibold text-lg sm:text-2xl text-slate-200">
              Python Full Stack Developer <span className="text-cyan-400">|</span> Software Engineer
            </h2>
          </div>

          {/* Punchy Narrative Quote */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            "{PERSONAL_INFO.tagline}"
          </p>

          {/* Key Strengths Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0B1020]/90 border border-cyan-500/30 text-xs font-mono text-slate-200 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-cyan-400" /> HIPAA Healthcare IT
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0B1020]/90 border border-violet-500/30 text-xs font-mono text-slate-200 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-violet-400" /> Django REST &amp; WebSockets
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0B1020]/90 border border-blue-500/30 text-xs font-mono text-slate-200 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-blue-400" /> React &amp; TypeScript
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0B1020]/90 border border-emerald-500/30 text-xs font-mono text-slate-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> PostgreSQL &amp; MySQL
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              onClick={() => sound.playClick()}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Featured Projects</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={() => {
                handleDownloadResume();
                onOpenResume();
              }}
              className="px-5 py-3.5 rounded-xl bg-[#0B1020] hover:bg-slate-800 text-slate-200 border border-cyan-500/30 hover:border-cyan-400 font-medium text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>View &amp; Download Resume</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              className="px-4 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-violet-500/40 font-mono text-xs transition-all flex items-center gap-2 cursor-pointer"
              title="Launch Terminal (Ctrl + K)"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Interactive CLI</span>
            </button>
          </div>

          {/* Direct channels */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Send className="w-3.5 h-3.5" /> {PERSONAL_INFO.email}
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp: +91 6374403353
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              github.com/sandhiyaprakasam23
            </a>
          </div>

        </div>

        {/* WORKSTATION VIEW SWITCHER (Allows toggling between Image 2 Holographic Desk and Image 1 Isometric Station) */}
        <div className="flex items-center justify-center gap-3 mb-6 font-mono text-xs">
          <span className="text-slate-400">Workstation View:</span>
          <button
            onClick={() => {
              sound.playClick(750);
              setWorkstationMode('hologram2');
            }}
            className={`px-3.5 py-1.5 rounded-xl border flex items-center gap-1.5 cursor-pointer transition-all ${
              workstationMode === 'hologram2'
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5 text-cyan-400" />
            <span>Style 2: Holographic Studio (Image 2)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick(650);
              setWorkstationMode('isometric1');
            }}
            className={`px-3.5 py-1.5 rounded-xl border flex items-center gap-1.5 cursor-pointer transition-all ${
              workstationMode === 'isometric1'
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5 text-violet-400" />
            <span>Style 1: Isometric Space Station (Image 1)</span>
          </button>
        </div>

        {/* ACTIVE WORKSTATION COMPONENT */}
        <div className="mt-2">
          {workstationMode === 'hologram2' ? (
            <HolographicDeskImage2
              onOpenTerminal={onOpenTerminal}
              onOpenResume={onOpenResume}
            />
          ) : (
            <Workstation3D />
          )}
        </div>

      </div>
    </section>
  );
};
