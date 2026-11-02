import React, { useState, useEffect } from 'react';
import {
  FileCode,
  Folder,
  FolderOpen,
  Cloud,
  CheckCircle2,
  Activity,
  Server,
  Zap,
  Play,
  Copy,
  Check,
  Sparkles,
  GitCommit,
  Layers,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEffects';

interface FileItem {
  id: string;
  name: string;
  type: 'python' | 'react' | 'sql' | 'config';
  path: string;
  code: string;
  lang: string;
}

const WORKSPACE_FILES: FileItem[] = [
  {
    id: 'sla_engine',
    name: 'sla_engine.py',
    type: 'python',
    path: 'backend/sla_engine.py',
    lang: 'Python / Django',
    code: `import datetime
from django.utils import timezone
from rest_framework import status
from .models import SLATicket, AuditLog
from .notifications import trigger_sla_alert

class SLAManagementEngine:
    """
    Real Estate ERP & Healthcare SLA Core
    Engineered by Sandhiya P
    """
    def __init__(self, ticket_id: str):
        self.ticket = SLATicket.objects.get(id=ticket_id)
        self.threshold_minutes = 60

    def evaluate_breach_risk(self) -> dict:
        elapsed = timezone.now() - self.ticket.created_at
        remaining_secs = max(0, 3600 - elapsed.total_seconds())
        is_critical = remaining_secs < 900  # <15 min

        if is_critical and not self.ticket.is_escalated:
            trigger_sla_alert(self.ticket)
            self.ticket.is_escalated = True
            self.ticket.save(update_fields=['is_escalated'])

        return {
            "ticket_id": str(self.ticket.id),
            "remaining_seconds": int(remaining_secs),
            "status": "CRITICAL_BREACH" if is_critical else "OPTIMAL",
            "sla_score": 99.8
        }`
  },
  {
    id: 'voice_stream',
    name: 'VoiceStream.tsx',
    type: 'react',
    path: 'frontend/VoiceStream.tsx',
    lang: 'TypeScript / React',
    code: `import React, { useState, useEffect, useRef } from 'react';

export const VoiceStreamEngine: React.FC = () => {
  const [active, setActive] = useState(true);
  const [transcript, setTranscript] = useState('Streaming live packets...');
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Persistent bidirectional WebSocket streaming
    const ws = new WebSocket('wss://api.voicetext.internal/v1/stream');
    socketRef.current = ws;

    ws.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      if (payload.text) {
        setTranscript((prev) => prev + ' ' + payload.text);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="telemetry-panel">
      <span className="live-pulse" />
      <p>{transcript}</p>
    </div>
  );
};`
  },
  {
    id: 'hipaa_views',
    name: 'views_hipaa.py',
    type: 'python',
    path: 'backend/views_hipaa.py',
    lang: 'Django REST Framework',
    code: `from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .permissions import IsHealthcarePractitioner
from .models import PatientRecord, AccessLedger

class HIPAAClinicalViewSet(ModelViewSet):
    """
    10,000+ Sensitive Patient Records Manager
    Strict RBAC & Audit Trails
    """
    permission_classes = [IsAuthenticated, IsHealthcarePractitioner]
    
    def get_queryset(self):
        user = self.request.user
        # Strict department tenant isolation
        return PatientRecord.objects.filter(
            facility_id=user.facility_id
        ).select_related('assigned_physician')

    def perform_create(self, serializer):
        instance = serializer.save()
        AccessLedger.objects.create(
            actor=self.request.user.id,
            action="PATIENT_RECORD_CREATE",
            target_id=instance.id,
            ip_address=self.request.META.get('REMOTE_ADDR')
        )`
  },
  {
    id: 'schema_audit',
    name: 'schema_audit.sql',
    type: 'sql',
    path: 'database/schema_audit.sql',
    lang: 'PostgreSQL 16',
    code: `-- PostgreSQL Schema: Append-Only Immutable Audit
CREATE TABLE IF NOT EXISTS system_event_ledger (
    audit_uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_timestamp TIMESTAMPTZ DEFAULT clock_timestamp(),
    actor_identity VARCHAR(64) NOT NULL,
    action_type VARCHAR(32) NOT NULL,
    payload_snapshot JSONB NOT NULL,
    integrity_checksum VARCHAR(128) NOT NULL
);

CREATE INDEX idx_audit_time ON system_event_ledger (event_timestamp DESC);
CREATE INDEX idx_audit_actor ON system_event_ledger (actor_identity);`
  }
];

export const Workstation3D: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<FileItem>(WORKSPACE_FILES[0]);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeKeyIndex, setActiveKeyIndex] = useState(0);

  // Mouse tilt tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Typewriter effect for active file
  useEffect(() => {
    setIsTyping(true);
    let index = 0;
    const full = selectedFile.code;
    setDisplayedCode('');

    const interval = setInterval(() => {
      index += 4;
      setActiveKeyIndex((prev) => (prev + 1) % 18);
      if (index >= full.length) {
        setDisplayedCode(full);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setDisplayedCode(full.slice(0, index));
      }
    }, 15);

    return () => clearInterval(interval);
  }, [selectedFile]);

  const handleCopy = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDeployClick = () => {
    sound.playSuccess();
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-6xl mx-auto py-8 transition-transform duration-300 ease-out select-none"
      style={{
        perspective: '1400px',
      }}
    >
      {/* 3D Isometric container with dynamic tilt */}
      <div
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${10 + mousePos.y}deg) rotateY(${-6 + mousePos.x}deg) translateZ(0)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow halo behind workstation */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/25 via-violet-600/20 to-blue-500/20 rounded-3xl blur-[80px] pointer-events-none opacity-80" />

        {/* Isometric base podium with glowing cyber neon border */}
        <div className="relative rounded-3xl p-4 sm:p-6 bg-[#07090F]/90 border border-cyan-500/30 shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(0,229,255,0.15)] backdrop-blur-2xl">
          
          {/* Top Holographic Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-cyan-500/20 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
              <span className="font-semibold text-slate-200 tracking-wide flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                SANDHIYA_DEV_STATION // {selectedFile.path}
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SYSTEM LIVE (60 FPS)
              </span>
              <button
                onClick={handleCopy}
                className="p-1 rounded text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                title="Copy active code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* MAIN 3-PANEL ISOMETRIC WORKSPACE (Left: System & Feed | Center: IDE | Right: Cloud & Deployments) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            
            {/* LEFT FLOATING WIDGET (Image 1 style: System Overview + Activity Feed) */}
            <div className="lg:col-span-3 space-y-4">
              
              {/* System Overview with SVG Radial Gauge */}
              <div className="p-4 rounded-2xl bg-[#0B1020]/80 border border-cyan-500/30 shadow-lg relative overflow-hidden group">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" /> System Overview
                  </span>
                  <span className="text-[10px] text-emerald-400">Active</span>
                </div>

                {/* SVG Radial Gauge */}
                <div className="flex items-center justify-around py-1">
                  <div className="relative flex items-center justify-center w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="38"
                        stroke="#1a233a"
                        strokeWidth="7"
                        fill="transparent"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="38"
                        stroke="url(#cyanVioletGrad)"
                        strokeWidth="7"
                        strokeDasharray="238.76"
                        strokeDashoffset="76"
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="cyanVioletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00E5FF" />
                          <stop offset="100%" stopColor="#8957FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="font-display font-extrabold text-xl text-white">68%</span>
                      <span className="text-[9px] font-mono text-cyan-300 uppercase">Load Balance</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[11px] font-mono">
                    <div className="flex items-center justify-between gap-3 text-slate-300">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        Uptime
                      </span>
                      <strong className="text-white">99.9%</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-violet-400" />
                        Memory
                      </span>
                      <strong className="text-slate-300">22%</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-slate-500">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                        Idle
                      </span>
                      <strong>10%</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Feed (Git Commits & HIPAA Audit) */}
              <div className="p-4 rounded-2xl bg-[#0B1020]/80 border border-slate-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-violet-400" /> Activity Feed
                  </span>
                  <span className="text-[10px] text-slate-500">Live</span>
                </div>

                <div className="space-y-2.5 text-[11px]">
                  <div className="space-y-0.5">
                    <div className="text-cyan-300 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      sandhiya pushed
                    </div>
                    <p className="text-slate-400 pl-2.5">feat: rule-based SLA countdown</p>
                    <span className="text-[10px] text-slate-500 pl-2.5">2m ago</span>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-emerald-300 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      sandhiya merged
                    </div>
                    <p className="text-slate-400 pl-2.5">fix: jwt rbac permission checks</p>
                    <span className="text-[10px] text-slate-500 pl-2.5">14m ago</span>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-violet-300 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      sandhiya deployed
                    </div>
                    <p className="text-slate-400 pl-2.5">VoiceText WebSocket stream v1.0</p>
                    <span className="text-[10px] text-slate-500 pl-2.5">1h ago</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CENTER PANE: THE MASTER IDE WORKSTATION (File Explorer + Code Window) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#07090F]/95 border border-cyan-500/30 overflow-hidden shadow-2xl flex flex-col h-[460px]">
              
              {/* Explorer Tabs Bar */}
              <div className="px-3 pt-2 bg-[#0B1020]/90 border-b border-slate-800 flex items-center gap-1 overflow-x-auto scrollbar-none font-mono text-xs">
                {WORKSPACE_FILES.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => {
                      sound.playClick(650);
                      setSelectedFile(file);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-all border-t border-x cursor-pointer ${
                      selectedFile.id === file.id
                        ? 'bg-[#07090F] border-cyan-500/40 text-cyan-300 font-semibold shadow-sm'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{file.name}</span>
                  </button>
                ))}
              </div>

              {/* Split Body: Mini File Tree + Editor */}
              <div className="flex-1 flex overflow-hidden">
                
                {/* Left Mini Explorer */}
                <div className="w-36 sm:w-44 bg-[#0B1020]/60 border-r border-slate-800/80 p-2.5 font-mono text-[11px] space-y-1.5 hidden sm:block shrink-0 overflow-y-auto">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                    EXPLORER
                  </div>

                  <div className="text-slate-400 flex items-center gap-1 font-semibold">
                    <FolderOpen className="w-3 h-3 text-cyan-400" /> project-drive
                  </div>

                  <div className="pl-3 space-y-1">
                    <div className="text-slate-400 flex items-center gap-1">
                      <Folder className="w-3 h-3 text-violet-400" /> backend
                    </div>
                    <div className="pl-3 space-y-0.5">
                      <button
                        onClick={() => setSelectedFile(WORKSPACE_FILES[0])}
                        className={`w-full text-left truncate px-1 py-0.5 rounded cursor-pointer ${
                          selectedFile.id === 'sla_engine' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        📄 sla_engine.py
                      </button>
                      <button
                        onClick={() => setSelectedFile(WORKSPACE_FILES[2])}
                        className={`w-full text-left truncate px-1 py-0.5 rounded cursor-pointer ${
                          selectedFile.id === 'hipaa_views' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        📄 views_hipaa.py
                      </button>
                    </div>

                    <div className="text-slate-400 flex items-center gap-1">
                      <Folder className="w-3 h-3 text-blue-400" /> frontend
                    </div>
                    <div className="pl-3 space-y-0.5">
                      <button
                        onClick={() => setSelectedFile(WORKSPACE_FILES[1])}
                        className={`w-full text-left truncate px-1 py-0.5 rounded cursor-pointer ${
                          selectedFile.id === 'voice_stream' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        📄 VoiceStream.tsx
                      </button>
                    </div>

                    <div className="text-slate-400 flex items-center gap-1">
                      <Folder className="w-3 h-3 text-emerald-400" /> database
                    </div>
                    <div className="pl-3 space-y-0.5">
                      <button
                        onClick={() => setSelectedFile(WORKSPACE_FILES[3])}
                        className={`w-full text-left truncate px-1 py-0.5 rounded cursor-pointer ${
                          selectedFile.id === 'schema_audit' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        📄 schema_audit.sql
                      </button>
                    </div>
                  </div>
                </div>

                {/* Editor Content Area */}
                <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto font-mono text-xs sm:text-[12px] leading-relaxed text-slate-200 scanline-effect bg-[#07090F]/90">
                  <pre className="whitespace-pre-wrap font-mono">
                    <code>{displayedCode}</code>
                    {isTyping && <span className="inline-block w-2 h-4 ml-0.5 bg-cyan-400 animate-pulse align-middle" />}
                  </pre>
                </div>
              </div>

              {/* Status bar */}
              <div className="px-3 py-1.5 bg-[#0B1020] border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Play className="w-3 h-3 text-emerald-400" />
                  <span className="text-cyan-300 font-semibold">{selectedFile.lang}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span>Spaces: 4</span>
                  <span className="text-emerald-400 font-semibold">ALL TESTS PASSING (80%+)</span>
                </div>
              </div>
            </div>

            {/* RIGHT FLOATING WIDGET (Image 1 style: Cloud Server + Deployments) */}
            <div className="lg:col-span-3 space-y-4">
              
              {/* Cloud Server Hologram */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0B1020] via-cyan-950/20 to-[#07090F] border border-cyan-500/30 shadow-lg relative overflow-hidden group">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <Cloud className="w-4 h-4 text-cyan-400" /> Cloud Server
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online
                  </span>
                </div>

                {/* 3D Server Blades Graphic */}
                <div className="p-3 rounded-xl bg-[#07090F]/80 border border-cyan-500/20 space-y-2">
                  <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-slate-800 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Server className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Node-US-East (Vercel)</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-slate-800 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Server className="w-3.5 h-3.5 text-violet-400" />
                      <span>API-Host (Render/Py)</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Deployments Card */}
              <div className="p-4 rounded-2xl bg-[#0B1020]/80 border border-slate-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" /> Deployments
                  </span>
                  <span className="text-[10px] text-slate-500">CI/CD</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                    <div>
                      <div className="text-white font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Production
                      </div>
                      <span className="text-[10px] text-slate-400">v2.4.0 • 2m ago</span>
                    </div>
                    <span className="text-emerald-400 text-xs font-bold">LIVE</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-800">
                    <div>
                      <div className="text-slate-300 font-medium">Staging (HIPAA Testbed)</div>
                      <span className="text-[10px] text-slate-500">v2.4.1-rc • 15m ago</span>
                    </div>
                    <span className="text-cyan-400 text-xs">READY</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleDeployClick}
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>+ Trigger Deployment</span>
                </button>
              </div>

            </div>

          </div>

          {/* BOTTOM TELEMETRY METRIC CARDS (Image 1 style: Requests 24h, Error Rate, Performance) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 mt-4 border-t border-cyan-500/20">
            
            {/* Metric 1: Requests */}
            <div className="p-4 rounded-2xl bg-[#0B1020]/80 border border-slate-800 space-y-2 font-mono">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Requests (24h)</span>
                <span className="text-cyan-400 font-bold">26.4k</span>
              </div>
              {/* SVG Sparkline wave */}
              <div className="h-10 w-full flex items-end">
                <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path
                    d="M 0,25 Q 15,5 30,18 T 60,8 T 85,15 T 100,5 L 100,30 L 0,30 Z"
                    fill="rgba(0, 229, 255, 0.15)"
                  />
                  <path
                    d="M 0,25 Q 15,5 30,18 T 60,8 T 85,15 T 100,5"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>00:00</span>
                <span>12:00</span>
                <span>24:00</span>
              </div>
            </div>

            {/* Metric 2: Error Rate */}
            <div className="p-4 rounded-2xl bg-[#0B1020]/80 border border-slate-800 space-y-2 font-mono">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Error Rate</span>
                <span className="text-emerald-400 font-bold">&lt; 0.01%</span>
              </div>
              <div className="h-10 w-full flex items-end">
                <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path
                    d="M 0,15 Q 20,22 40,12 T 70,18 T 100,8 L 100,30 L 0,30 Z"
                    fill="rgba(16, 185, 129, 0.15)"
                  />
                  <path
                    d="M 0,15 Q 20,22 40,12 T 70,18 T 100,8"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500">HIPAA Verified</span>
                <span className="text-emerald-400 font-semibold">-12.5% vs avg</span>
              </div>
            </div>

            {/* Metric 3: Performance Score */}
            <div className="p-4 rounded-2xl bg-[#0B1020]/80 border border-slate-800 space-y-2 font-mono">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Performance Score</span>
                <span className="text-cyan-400 font-bold">99.8%</span>
              </div>
              {/* Equalizer bars */}
              <div className="h-10 flex items-end gap-1.5 py-1">
                {[40, 65, 80, 95, 70, 85, 99, 60, 90, 75, 85, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-cyan-500 to-violet-500 rounded-t transition-all duration-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Latency: 12ms</span>
                <span className="text-cyan-400 font-semibold">+2.1% SLA gain</span>
              </div>
            </div>

          </div>

          {/* ILLUMINATED MECHANICAL KEYBOARD (Image 2 & 3 style) */}
          <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-2 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Zap className="w-3 h-3 text-amber-400" />
                MECHANICAL RGB KEYBOARD CONTROLLER
              </span>
              <span className="text-slate-500">PRESS KEYS OR TYPE COMMANDS</span>
            </div>

            {/* Keycaps row that illuminate as simulated typing occurs */}
            <div className="flex flex-wrap justify-center gap-1.5 max-w-2xl p-2 rounded-xl bg-[#05070B] border border-cyan-500/20 shadow-inner">
              {['ESC', 'TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'ENTER', 'CTRL', 'PY', 'SQL', 'TSX', 'REACT'].map((keyName, kIdx) => {
                const isActive = activeKeyIndex === kIdx;
                return (
                  <div
                    key={keyName}
                    className={`px-2.5 py-1.5 rounded-md font-mono text-[10px] font-bold transition-all duration-100 ${
                      isActive
                        ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(0,229,255,0.8)] scale-105'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300'
                    }`}
                  >
                    {keyName}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Workflow Pipeline (Image 2 style) */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
            <span className="text-cyan-400/80">PIPELINE:</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-800/70 text-slate-300">01. Research &amp; Clinical Specs</span>
              <span className="text-slate-600">➔</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/70 text-slate-300">02. Django REST &amp; HIPAA Schema</span>
              <span className="text-slate-600">➔</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/70 text-slate-300">03. React &amp; WebSocket Client</span>
              <span className="text-slate-600">➔</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/70 text-slate-300">04. CI/CD &amp; Automated Testing</span>
              <span className="text-slate-600">➔</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                05. Production Deploy 🚀
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
