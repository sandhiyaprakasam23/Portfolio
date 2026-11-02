import React, { useState, useEffect } from 'react';
import {
  Code2,
  FolderOpen,
  Folder,
  Layers,
  Shield,
  Zap,
  Database,
  ExternalLink,
  FileDown,
  Terminal,
  Sparkles,
  Cpu,
  Copy,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CODE_SNIPPETS } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface HolographicDeskProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const HolographicDeskImage2: React.FC<HolographicDeskProps> = ({
  onOpenTerminal,
  onOpenResume,
}) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'python' | 'react' | 'sql'>('python');
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [activePipelineStep, setActivePipelineStep] = useState(3); // 3 = Develop
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    setIsTyping(true);
    let index = 0;
    const full = CODE_SNIPPETS[activeCodeTab];
    setDisplayedCode('');

    const interval = setInterval(() => {
      index += 4;
      if (index >= full.length) {
        setDisplayedCode(full);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setDisplayedCode(full.slice(0, index));
      }
    }, 14);

    return () => clearInterval(interval);
  }, [activeCodeTab]);

  // Automatic cycle for pipeline steps to make it feel alive
  useEffect(() => {
    const pipelineTimer = setInterval(() => {
      setActivePipelineStep((prev) => (prev % 5) + 1);
    }, 3500);
    return () => clearInterval(pipelineTimer);
  }, []);

  const handleCopyCode = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(CODE_SNIPPETS[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    sound.playSuccess();
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-[#060810] via-[#090D1A] to-[#04060A] border border-cyan-500/40 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(0,229,255,0.2)] p-4 sm:p-8 select-none">
      
      {/* BACKGROUND: Cinematic Night Studio with City Skyline Silhouette (Image 2 style) */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        {/* City skyline windows */}
        <div className="absolute bottom-32 left-0 right-0 h-48 flex items-end justify-between gap-1 opacity-40">
          {[12, 28, 45, 18, 60, 35, 75, 50, 90, 40, 65, 80, 55, 30, 70, 85, 40, 60, 95, 35, 50, 75, 45, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-cyan-950 border-t border-cyan-500/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        {/* Atmospheric Cyan Volumetric Fog */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      {/* TOP HOLOGRAPHIC HEADER STATUS */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-cyan-500/25 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 -ml-4" />
          </div>
          <span className="text-cyan-300 font-bold tracking-wider">
            SANDHIYA.DEV // HOLOGRAPHIC CODING STATION v2.4
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Holographic HUD Active
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-400 font-bold">100% ONLINE</span>
        </div>
      </div>

      {/* FLOATING HOLOGRAPHIC SCREENS STAGE (Image 2 style) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch min-h-[480px]">
        
        {/* ======================================================== */}
        {/* SCREEN 1 (LEFT): FLOATING HOLOGRAPHIC FILE EXPLORER */}
        {/* ======================================================== */}
        <div className="lg:col-span-3 rounded-2xl bg-[#070B16]/80 backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_25px_rgba(0,229,255,0.15),inset_0_0_15px_rgba(0,229,255,0.05)] p-4 flex flex-col justify-between font-mono text-xs transform hover:scale-[1.02] transition-transform duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-3">
              <span className="text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FolderOpen className="w-4 h-4 text-cyan-400" /> EXPLORER
              </span>
              <span className="text-[10px] text-slate-400">repo:main</span>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="text-slate-300 font-semibold flex items-center gap-1">
                <Folder className="w-3.5 h-3.5 text-cyan-400" /> healthcare-erp/
              </div>

              <div className="pl-3 space-y-1 text-slate-400">
                <div className="flex items-center gap-1 text-violet-300">
                  <Folder className="w-3 h-3 text-violet-400" /> backend/
                </div>
                <div className="pl-3 space-y-1">
                  <button
                    onClick={() => {
                      sound.playClick(600);
                      setActiveCodeTab('python');
                    }}
                    className={`w-full text-left truncate px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                      activeCodeTab === 'python'
                        ? 'bg-cyan-500/25 text-cyan-200 border-l-2 border-cyan-400 font-semibold shadow-sm'
                        : 'hover:text-slate-200'
                    }`}
                  >
                    📄 sla_engine.py
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick(600);
                      setActiveCodeTab('python');
                    }}
                    className="w-full text-left truncate px-1.5 py-0.5 rounded hover:text-slate-200 cursor-pointer"
                  >
                    📄 views_hipaa.py
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick(600);
                      setActiveCodeTab('python');
                    }}
                    className="w-full text-left truncate px-1.5 py-0.5 rounded hover:text-slate-200 cursor-pointer"
                  >
                    📄 serializers.py
                  </button>
                </div>

                <div className="flex items-center gap-1 text-blue-300 pt-1">
                  <Folder className="w-3 h-3 text-blue-400" /> frontend/
                </div>
                <div className="pl-3 space-y-1">
                  <button
                    onClick={() => {
                      sound.playClick(600);
                      setActiveCodeTab('react');
                    }}
                    className={`w-full text-left truncate px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                      activeCodeTab === 'react'
                        ? 'bg-cyan-500/25 text-cyan-200 border-l-2 border-cyan-400 font-semibold shadow-sm'
                        : 'hover:text-slate-200'
                    }`}
                  >
                    📄 VoiceStream.tsx
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick(600);
                      setActiveCodeTab('react');
                    }}
                    className="w-full text-left truncate px-1.5 py-0.5 rounded hover:text-slate-200 cursor-pointer"
                  >
                    📄 Dashboard.tsx
                  </button>
                </div>

                <div className="flex items-center gap-1 text-emerald-300 pt-1">
                  <Folder className="w-3 h-3 text-emerald-400" /> database/
                </div>
                <div className="pl-3 space-y-1">
                  <button
                    onClick={() => {
                      sound.playClick(600);
                      setActiveCodeTab('sql');
                    }}
                    className={`w-full text-left truncate px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                      activeCodeTab === 'sql'
                        ? 'bg-cyan-500/25 text-cyan-200 border-l-2 border-cyan-400 font-semibold shadow-sm'
                        : 'hover:text-slate-200'
                    }`}
                  >
                    📄 schema_audit.sql
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-cyan-500/20 text-[10px] text-slate-400 space-y-1">
            <div className="flex justify-between text-slate-300">
              <span>Stack:</span>
              <span className="text-cyan-400">Django + React</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Tests:</span>
              <span className="text-emerald-400">80%+ PASSING</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SCREEN 2 (CENTER): GIANT HOLOGRAPHIC PORTAL (Image 2 style) */}
        {/* ======================================================== */}
        <div className="lg:col-span-6 rounded-2xl bg-[#090E1F]/85 backdrop-blur-2xl border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(0,229,255,0.3),inset_0_0_30px_rgba(0,229,255,0.1)] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          
          {/* Subtle Rotating 3D Holographic Globe in Background of Screen (Image 2 style) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-52 h-52 pointer-events-none opacity-20">
            <div className="w-full h-full rounded-full border-2 border-dashed border-cyan-400 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-4 rounded-full border border-violet-400/60 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 blur-xl opacity-40" />
          </div>

          {/* Central Holographic Screen Header */}
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>FULL STACK ENGINEER &bull; IMMEDIATE JOINER</span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                <span className="gradient-text-cyan-violet">SANDHIYA</span>
              </h3>
              <p className="font-display font-semibold text-lg text-cyan-300">
                WE DESIGN DIGITAL EXPERIENCES
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-md">
                Building intelligent, scalable and beautifully engineered web platforms with Python, Django REST, React.js, and HIPAA-compliant data architectures.
              </p>
            </div>

            {/* 4 Feature Badges (Image 2 style) */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2.5 rounded-xl bg-[#060A14]/70 border border-cyan-500/30 flex items-center gap-2 text-xs font-mono text-slate-200">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Healthcare IT (HIPAA)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#060A14]/70 border border-violet-500/30 flex items-center gap-2 text-xs font-mono text-slate-200">
                <Zap className="w-4 h-4 text-violet-400 shrink-0" />
                <span>15+ REST APIs (DRF)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#060A14]/70 border border-blue-500/30 flex items-center gap-2 text-xs font-mono text-slate-200">
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>React.js &amp; SPAs</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#060A14]/70 border border-emerald-500/30 flex items-center gap-2 text-xs font-mono text-slate-200">
                <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>10k+ Records (SQL)</span>
              </div>
            </div>
          </div>

          {/* Action CTAs inside Center Hologram */}
          <div className="relative z-10 pt-6 mt-4 border-t border-cyan-500/25 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={() => sound.playClick()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Explore Projects</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => {
                handleDownload();
                onOpenResume();
              }}
              className="px-4 py-2.5 rounded-xl bg-[#060A14] hover:bg-slate-800 text-slate-200 border border-cyan-500/40 text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              className="px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 font-mono text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-violet-400" />
              <span>Terminal</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SCREEN 3 (RIGHT): FLOATING NEON CODE STREAM (Image 2 style) */}
        {/* ======================================================== */}
        <div className="lg:col-span-3 rounded-2xl bg-[#070B16]/80 backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_25px_rgba(0,229,255,0.15),inset_0_0_15px_rgba(0,229,255,0.05)] p-4 flex flex-col justify-between font-mono text-xs transform hover:scale-[1.02] transition-transform duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2">
              <span className="text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-400" /> LIVE SOURCE
              </span>
              <button
                onClick={handleCopyCode}
                className="text-slate-400 hover:text-cyan-300 p-1"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Language tabs */}
            <div className="flex items-center gap-1.5 pb-2 text-[10px]">
              {(['python', 'react', 'sql'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    sound.playClick(600);
                    setActiveCodeTab(tab);
                  }}
                  className={`px-2 py-0.5 rounded cursor-pointer uppercase ${
                    activeCodeTab === tab
                      ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Glowing Code stream pane */}
            <div className="h-[280px] overflow-y-auto text-[11px] leading-relaxed text-cyan-200 font-mono scanline-effect p-2 rounded-lg bg-[#040710]/90 border border-slate-900">
              <pre className="whitespace-pre-wrap">
                <code>{displayedCode}</code>
                {isTyping && <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-cyan-400 animate-pulse align-middle" />}
              </pre>
            </div>
          </div>

          <div className="pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[10px] text-slate-400">
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              SYNTAX COMPILED
            </span>
            <span>UTF-8</span>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* BOTTOM FLOATING PROCESS PIPELINE STRIP (Image 2 style) */}
      {/* ======================================================== */}
      <div className="relative z-10 mt-6 pt-5 border-t border-cyan-500/30">
        <div className="flex items-center justify-between mb-3 text-xs font-mono">
          <span className="text-cyan-400 font-bold tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" /> FULL LIFECYCLE DEVELOPMENT PIPELINE
          </span>
          <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
            STEP {activePipelineStep} OF 5 ACTIVE
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 font-mono text-xs">
          {[
            { step: 1, label: 'RESEARCH', desc: 'Clinical Specs & HIPAA' },
            { step: 2, label: 'PLAN', desc: 'DB Schemas & SLAs' },
            { step: 3, label: 'DESIGN', desc: 'Django REST & APIs' },
            { step: 4, label: 'DEVELOP', desc: 'React.js & WebSockets' },
            { step: 5, label: 'LAUNCH', desc: 'CI/CD & Live Cloud' },
          ].map((item) => {
            const isCurrent = activePipelineStep === item.step;
            return (
              <div
                key={item.step}
                className={`p-3 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,229,255,0.4)] scale-105'
                    : 'bg-[#070B16]/70 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold ${isCurrent ? 'text-cyan-300' : 'text-slate-500'}`}>
                    0{item.step}
                  </span>
                  {isCurrent && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                </div>
                <span className={`font-bold text-xs ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-400 truncate mt-0.5">
                  {item.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* DESK ENVIRONMENT: ILLUMINATED MECHANICAL RGB KEYBOARD & LAPTOP (Image 2 style) */}
      {/* ======================================================== */}
      <div className="relative z-10 mt-6 pt-5 border-t border-slate-800/80 flex flex-col items-center">
        
        {/* Subtle Cyber Desk Lamp & Horizon Glow */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2.5 px-2">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            WORKSTATION DESK PERIPHERALS: MECHANICAL RGB KEYBOARD &amp; LAPTOP
          </span>
          <span className="text-emerald-400 font-semibold">ALL SYSTEMS SYNCHRONIZED</span>
        </div>

        {/* Realistic Illuminated Keyboard Bar */}
        <div className="w-full max-w-3xl p-3 rounded-2xl bg-[#030509] border border-cyan-500/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,255,0.15)] flex flex-col gap-1.5">
          <div className="flex justify-between gap-1">
            {['ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'DEL'].map((k) => (
              <span key={k} className="flex-1 py-1 text-center font-mono text-[9px] bg-slate-900/80 text-slate-500 rounded border border-slate-800">
                {k}
              </span>
            ))}
          </div>
          <div className="flex justify-between gap-1">
            {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BKSP'].map((k) => (
              <span key={k} className="flex-1 py-1 text-center font-mono text-[9px] bg-slate-900/80 text-slate-400 rounded border border-slate-800">
                {k}
              </span>
            ))}
          </div>
          <div className="flex justify-between gap-1">
            {['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k) => (
              <span key={k} className="flex-1 py-1 text-center font-mono text-[9px] bg-slate-900/90 text-cyan-400 rounded border border-cyan-500/30 shadow-[0_0_6px_rgba(0,229,255,0.2)]">
                {k}
              </span>
            ))}
          </div>
          <div className="flex justify-between gap-1">
            {['CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER'].map((k) => (
              <span key={k} className="flex-1 py-1 text-center font-mono text-[9px] bg-slate-900/90 text-cyan-300 rounded border border-cyan-500/30">
                {k}
              </span>
            ))}
          </div>
          <div className="flex justify-between gap-1">
            {['CTRL', 'PY', 'DJANGO', 'SPACEBAR (PRESS TO CODE)', 'REACT', 'SQL', 'HIPAA'].map((k, i) => (
              <span
                key={k}
                className={`py-1 text-center font-mono text-[9px] font-bold rounded border ${
                  i === 3
                    ? 'flex-[4] bg-cyan-500/25 text-white border-cyan-400 shadow-[0_0_12px_rgba(0,229,255,0.6)] animate-pulse'
                    : 'flex-1 bg-slate-900/90 text-violet-300 border-slate-800'
                }`}
              >
                {k}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
