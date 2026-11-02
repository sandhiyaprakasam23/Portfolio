import React, { useState } from 'react';
import {
  Code2,
  Server,
  Layers,
  Database,
  Cloud,
  CheckCircle2,
  ShieldCheck,
  Radio,
  Lock,
  GitBranch,
  PlayCircle,
  Send,
  Globe,
  Zap,
  Sparkles,
  FileText,
  FolderTree,
  Gauge,
  Smartphone,
  Palette,
  HardDrive,
  FileCode,
  Cpu,
  Network
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Backend & APIs',
    'Languages',
    'Frontend',
    'Databases',
    'DevOps & Tools',
    'Methodologies',
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  // Dynamic icon resolver
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Radio': return <Radio className="w-5 h-5" />;
      case 'Lock': return <Lock className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'PlayCircle': return <PlayCircle className="w-5 h-5" />;
      case 'Send': return <Send className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'FolderTree': return <FolderTree className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#0B1020]/30 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
              <span>// 02. TECHNICAL SKILLS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Enterprise Tech Stack &amp; Tooling
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              Verified skills applied in real-world healthcare IT, SLA tracking, and live streaming applications.
            </p>
          </div>

          {/* Interactive Ecosystem summary pill */}
          <div className="px-4 py-2 rounded-xl bg-[#0B1020] border border-cyan-500/30 text-xs font-mono text-slate-300 self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>25+ Enterprise Technologies &amp; Standards</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick(700);
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 border border-cyan-400'
                  : 'bg-[#0B1020] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill: SkillItem, idx) => (
            <div
              key={idx}
              className="group relative p-5 rounded-2xl bg-[#07090F]/80 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-[#0B1020]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                    {renderIcon(skill.icon)}
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{skill.category}</span>
                <span className="text-cyan-400/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  Production Verified →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Stack Architecture Blueprint / Flow banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#07090F] via-[#0B1020] to-[#07090F] border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">System Architecture</span>
              <h4 className="font-display font-bold text-xl text-white mt-1">
                Unified Full Stack Engineering Pipeline
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Seamless data lifecycle from React frontend to Django REST microservices, secured by JWT and persisted in PostgreSQL.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/20 space-y-1">
                <span className="text-cyan-400 font-bold">01. FRONTEND</span>
                <p className="text-slate-300">React.js + TypeScript + Tailwind</p>
                <p className="text-[11px] text-slate-500">SPA, WebSocket listeners, real-time UI state</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-violet-500/20 space-y-1">
                <span className="text-violet-400 font-bold">02. BACKEND API</span>
                <p className="text-slate-300">Django + DRF + Celery/WS</p>
                <p className="text-[11px] text-slate-500">HIPAA controls, JWT/RBAC, 15+ REST endpoints</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-emerald-500/20 space-y-1">
                <span className="text-emerald-400 font-bold">03. DATA &amp; CI/CD</span>
                <p className="text-slate-300">PostgreSQL + GitHub Actions</p>
                <p className="text-[11px] text-slate-500">10k+ records, 80%+ test coverage, automated deploys</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
