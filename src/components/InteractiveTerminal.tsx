import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleMatrix?: () => void;
  onOpenResume?: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<TerminalProps> = ({
  isOpen,
  onClose,
  onToggleMatrix,
  onOpenResume,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial welcome message
  useEffect(() => {
    setHistory([
      {
        command: 'system.init',
        output: (
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">
              ⚡ SANDHIYA OS v2.4.0 (x86_64-pc-linux-gnu) - Senior Developer Workstation
            </p>
            <p className="text-slate-400">
              Session initialized for guest user. Type <span className="text-amber-400 font-semibold">'help'</span> to explore commands or <span className="text-emerald-400 font-semibold">'hire'</span> for immediate recruitment details.
            </p>
          </div>
        ),
      },
    ]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = input.trim();
    if (!rawCmd) return;

    sound.playClick(750);
    const cmd = rawCmd.toLowerCase();
    setPastCommands((prev) => [...prev, rawCmd]);
    setHistoryIndex(null);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-semibold mb-1">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-amber-300 font-mono">about</span> - Background &amp; experience summary</div>
              <div><span className="text-amber-300 font-mono">skills</span> - Full-stack technical capabilities</div>
              <div><span className="text-amber-300 font-mono">projects</span> - Live projects &amp; architectural work</div>
              <div><span className="text-amber-300 font-mono">experience</span> - Vesoftmetic Solution history</div>
              <div><span className="text-amber-300 font-mono">contact</span> - Email, WhatsApp, LinkedIn, GitHub</div>
              <div><span className="text-amber-300 font-mono">resume</span> - Preview / download resume PDF</div>
              <div><span className="text-amber-300 font-mono">hire</span> - Recruiter fast-track &amp; details</div>
              <div><span className="text-amber-300 font-mono">matrix</span> - Toggle cyber rain overlay</div>
              <div><span className="text-amber-300 font-mono">clear</span> - Clear terminal buffer</div>
              <div><span className="text-amber-300 font-mono">exit</span> - Minimize terminal</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="text-slate-300 leading-relaxed">{PERSONAL_INFO.summary}</p>
            <div className="flex gap-4 pt-1 text-slate-400 text-xs">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span className="text-emerald-400">⚡ {PERSONAL_INFO.availability}</span>
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">CORE TECHNICAL ARSENAL:</p>
            <div className="space-y-1.5">
              <div>
                <span className="text-violet-400 font-semibold">Backend:</span> Python, Django, Django REST Framework, RESTful APIs, JWT, RBAC, WebSockets
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Frontend:</span> React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, Responsive SPA
              </div>
              <div>
                <span className="text-emerald-400 font-semibold">Databases:</span> PostgreSQL, MySQL, Schema Architecture, Query Optimization
              </div>
              <div>
                <span className="text-amber-400 font-semibold">DevOps:</span> Git, GitHub, GitHub Actions (CI/CD), Postman, Vercel, Render, Netlify
              </div>
              <div>
                <span className="text-rose-400 font-semibold">Domain:</span> Healthcare IT, HIPAA Compliance, SLA Engines, Audio Streaming
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">PRODUCTION PROJECTS:</p>
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="border-l-2 border-cyan-500/40 pl-2 py-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-mono font-bold">[{idx + 1}] {p.title}</span>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 underline hover:text-cyan-300">
                      [Live Demo ↗]
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-violet-400 underline hover:text-violet-300">
                      [GitHub ↗]
                    </a>
                  )}
                </div>
                <p className="text-xs text-slate-400">{p.description}</p>
                <p className="text-[11px] text-slate-500 font-mono">Stack: {p.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-cyan-400 font-bold">{exp.role}</p>
                <p className="text-amber-300 text-xs font-mono">{exp.company} | {exp.location} ({exp.period})</p>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-400">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
      case 'cat contact.json':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">CONTACT CHANNELS:</p>
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 underline">{PERSONAL_INFO.email}</a></p>
            <p>💬 WhatsApp: <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">+91 6374403353</a></p>
            <p>📞 Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-300 underline">{PERSONAL_INFO.phone}</a></p>
            <p>🔗 LinkedIn: <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">sandhiyaprakasam-856552351</a></p>
            <p>🐙 GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-violet-400 underline">sandhiyaprakasam23</a></p>
          </div>
        );
        break;

      case 'resume':
      case 'cat resume.pdf':
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-emerald-400 font-bold">📄 ACCESSING RESUME: Sandhiya_Resume.pdf</p>
            <p className="text-slate-400">Verified Full Stack Developer Resume (HIPAA, Python, Django, React, PostgreSQL).</p>
            <div className="flex gap-3 pt-1">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Sandhiya_Resume.pdf"
                className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded text-xs hover:bg-cyan-500/30 transition-colors"
                onClick={() => sound.playSuccess()}
              >
                Download PDF
              </a>
              <button
                type="button"
                onClick={() => {
                  onOpenResume?.();
                  sound.playClick();
                }}
                className="px-3 py-1 bg-violet-500/20 text-violet-300 border border-violet-500/40 rounded text-xs hover:bg-violet-500/30 transition-colors"
              >
                Preview in Viewer
              </button>
            </div>
          </div>
        );
        break;

      case 'hire':
      case 'sudo hire-sandhiya':
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore
        }
        sound.playSuccess();
        output = (
          <div className="space-y-2 p-3 bg-cyan-950/40 border border-cyan-500/40 rounded-lg text-xs sm:text-sm">
            <p className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> RECRUITMENT FAST-TRACK ACTIVATED
            </p>
            <p className="text-slate-200">
              Candidate: <span className="text-cyan-300 font-semibold">{PERSONAL_INFO.name}</span>
            </p>
            <p className="text-slate-300">
              Status: <span className="text-emerald-400 font-semibold">Immediate Joiner</span> | Notice Period: <span className="text-amber-300">0 Days</span>
            </p>
            <p className="text-slate-300">
              Locations: Bengaluru, Chennai, or Global Remote
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-semibold text-xs transition-colors flex items-center gap-1"
              >
                Schedule via WhatsApp 💬
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Sandhiya%20P&body=Hi%20Sandhiya,%20we%20reviewed%20your%20portfolio%20and%20would%20like%20to%20schedule%20an%20interview.`}
                className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-semibold text-xs transition-colors"
              >
                Send Interview Invite ✉️
              </a>
            </div>
          </div>
        );
        break;

      case 'matrix':
        onToggleMatrix?.();
        output = <p className="text-emerald-400">Cyber matrix visual layer toggled.</p>;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case 'whoami':
        output = <p className="text-slate-300">visitor@sandhiya-workstation (Role: Tech Recruiter / Engineering Leader)</p>;
        break;

      case 'date':
      case 'uptime':
        output = (
          <p className="text-slate-400 font-mono">
            System time: {new Date().toLocaleString()} | Workstation uptime: 99.98% | Latency: 12ms
          </p>
        );
        break;

      default:
        output = (
          <p className="text-rose-400 text-xs sm:text-sm">
            Command not recognized: <span className="text-slate-200">'{cmd}'</span>. Type <span className="text-amber-400">'help'</span> for list of valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    sound.playKeypress();
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length === 0) return;
      const nextIdx = historyIndex === null ? pastCommands.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInput(pastCommands[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < pastCommands.length) {
        setHistoryIndex(nextIdx);
        setInput(pastCommands[nextIdx]);
      } else {
        setHistoryIndex(null);
        setInput('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-out shadow-2xl flex flex-col ${
        isMaximized
          ? 'inset-3 sm:inset-6'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[580px] h-[480px]'
      }`}
    >
      <div className="glass-panel-glow border border-cyan-500/30 rounded-xl overflow-hidden flex flex-col h-full bg-[#07090F]/95 backdrop-blur-2xl">
        {/* Terminal Header */}
        <div className="px-4 py-2.5 bg-[#0B1020]/90 border-b border-cyan-500/20 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs font-semibold text-slate-300 tracking-wide">
              sandhiya@workstation:~ (interactive-cli)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-3 scanline-effect">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400/80">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-slate-100">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'skills', 'hire', 'resume'..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
              autoFocus
            />
            <button type="submit" className="text-slate-500 hover:text-cyan-400 p-1">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Terminal Quick Bar */}
        <div className="px-3 py-1.5 bg-[#0B1020]/70 border-t border-cyan-500/10 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono text-slate-400 scrollbar-none">
          <span className="text-cyan-400/70 shrink-0">Quick:</span>
          {['help', 'skills', 'projects', 'hire', 'resume', 'clear'].map((quickCmd) => (
            <button
              key={quickCmd}
              type="button"
              onClick={() => {
                setInput(quickCmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 rounded bg-slate-800/60 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors shrink-0"
            >
              {quickCmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
