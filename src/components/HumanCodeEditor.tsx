import React, { useState } from 'react';
import {
  FileCode,
  FolderOpen,
  Folder,
  Play,
  Copy,
  Check,
  GitBranch,
  CheckCircle2,
  AlertCircle,
  Terminal,
  FileCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { REAL_CODE_FILES } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

type FileKey = keyof typeof REAL_CODE_FILES;

export const HumanCodeEditor: React.FC = () => {
  const [activeFileKey, setActiveFileKey] = useState<FileKey>('sla');
  const [copied, setCopied] = useState(false);
  const [activeBottomTab, setActiveBottomTab] = useState<'tests' | 'terminal' | 'git'>('tests');
  const [testRunning, setTestRunning] = useState(false);
  const [testOutput, setTestOutput] = useState<string[]>([
    '$ pytest backend/tests/ -v --cov=backend',
    'backend/tests/test_sla_engine.py::TestSLAEngine::test_countdown_accuracy PASSED [ 33%]',
    'backend/tests/test_sla_engine.py::TestSLAEngine::test_breach_detection_triggers PASSED [ 66%]',
    'backend/tests/test_sla_engine.py::TestSLAEngine::test_audit_snapshot_created PASSED [100%]',
    '================ 3 passed in 0.34s (84% coverage) ================'
  ]);

  const activeFile = REAL_CODE_FILES[activeFileKey];

  const handleCopy = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunTests = () => {
    sound.playClick(800);
    setTestRunning(true);
    setTestOutput(['$ python -m pytest backend/tests/ -v --cov=backend', 'Running test suite...']);

    setTimeout(() => {
      setTestOutput((prev) => [
        ...prev,
        'backend/tests/test_sla_engine.py::TestSLAEngine::test_countdown_accuracy PASSED [ 33%]',
      ]);
    }, 400);

    setTimeout(() => {
      setTestOutput((prev) => [
        ...prev,
        'backend/tests/test_sla_engine.py::TestSLAEngine::test_breach_detection_triggers PASSED [ 66%]',
      ]);
    }, 800);

    setTimeout(() => {
      setTestOutput((prev) => [
        ...prev,
        'backend/tests/test_sla_engine.py::TestSLAEngine::test_audit_snapshot_created PASSED [100%]',
        '================ 3 passed in 0.34s (84% coverage) ================',
        'STATUS: All healthcare HIPAA test assertions passed cleanly.'
      ]);
      setTestRunning(false);
      sound.playSuccess();
      try {
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
      } catch {
        // ignore
      }
    }, 1200);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0A0D14] shadow-[0_20px_60px_rgba(0,0,0,0.8)] font-sans">
      
      {/* VS Code Window Top Bar */}
      <div className="px-4 py-3 bg-[#0E131F] border-b border-slate-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            healthcare-erp &bull; {activeFile.path}
          </span>
        </div>

        {/* Git branch badge & copy button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>git:(main)</span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
            title="Copy current code file"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Workspace: File Tree on left, Code Pane on right */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
        
        {/* Left Sidebar: VS Code File Explorer */}
        <div className="md:col-span-4 bg-[#080B12] border-r border-slate-800/80 p-3 font-mono text-xs select-none space-y-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold uppercase tracking-wider px-1">
            <span>EXPLORER</span>
            <span className="text-slate-600">SANDHIYA-WORKSPACE</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-300 font-semibold px-1 py-0.5">
              <FolderOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>healthcare-erp</span>
            </div>

            <div className="pl-3 space-y-0.5 text-[11px]">
              {/* Backend Folder */}
              <div className="text-slate-400 flex items-center gap-1 py-0.5 font-medium">
                <Folder className="w-3 h-3 text-violet-400" /> backend/
              </div>
              <div className="pl-3 space-y-0.5">
                <button
                  onClick={() => {
                    sound.playClick(600);
                    setActiveFileKey('sla');
                  }}
                  className={`w-full text-left truncate px-2 py-1 rounded flex items-center gap-1.5 cursor-pointer transition-colors ${
                    activeFileKey === 'sla'
                      ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span>sla_service.py</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick(600);
                    setActiveFileKey('hipaa');
                  }}
                  className={`w-full text-left truncate px-2 py-1 rounded flex items-center gap-1.5 cursor-pointer transition-colors ${
                    activeFileKey === 'hipaa'
                      ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span>hipaa_views.py</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick(600);
                    setActiveFileKey('tests');
                  }}
                  className={`w-full text-left truncate px-2 py-1 rounded flex items-center gap-1.5 cursor-pointer transition-colors ${
                    activeFileKey === 'tests'
                      ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>test_sla_engine.py</span>
                </button>
              </div>

              {/* Frontend Folder */}
              <div className="text-slate-400 flex items-center gap-1 py-0.5 pt-1 font-medium">
                <Folder className="w-3 h-3 text-blue-400" /> frontend/
              </div>
              <div className="pl-3 space-y-0.5">
                <button
                  onClick={() => {
                    sound.playClick(600);
                    setActiveFileKey('react');
                  }}
                  className={`w-full text-left truncate px-2 py-1 rounded flex items-center gap-1.5 cursor-pointer transition-colors ${
                    activeFileKey === 'react'
                      ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>VoiceStream.tsx</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Real Developer Stats Pill */}
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] space-y-1.5 text-slate-400">
            <div className="flex items-center justify-between">
              <span>Environment:</span>
              <span className="text-emerald-400 font-semibold">Production HIPAA</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Code Coverage:</span>
              <span className="text-cyan-400 font-semibold">84% Tested</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Framework:</span>
              <span className="text-white">Django 5.0 + React 19</span>
            </div>
          </div>
        </div>

        {/* Right Pane: Code Editor + Breadcrumbs + Live Syntax */}
        <div className="md:col-span-8 flex flex-col bg-[#0A0D14]">
          
          {/* File Tabs */}
          <div className="px-3 pt-2 bg-[#080B12] border-b border-slate-800 flex items-center gap-1 overflow-x-auto scrollbar-none font-mono text-xs">
            {Object.entries(REAL_CODE_FILES).map(([key, file]) => (
              <button
                key={key}
                onClick={() => {
                  sound.playClick(650);
                  setActiveFileKey(key as FileKey);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x cursor-pointer ${
                  activeFileKey === key
                    ? 'bg-[#0A0D14] border-cyan-500/30 text-white font-medium'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>{file.filename}</span>
              </button>
            ))}
          </div>

          {/* Code Viewing Area with Line Numbers */}
          <div className="flex-1 p-4 overflow-y-auto max-h-[300px] font-mono text-xs leading-relaxed text-slate-200 bg-[#0A0D14]">
            <pre className="whitespace-pre-wrap font-mono">
              <code>{activeFile.code}</code>
            </pre>
          </div>

          {/* Integrated PyTest Terminal at Bottom of Editor */}
          <div className="border-t border-slate-800 bg-[#06080E] p-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveBottomTab('tests')}
                  className={`flex items-center gap-1.5 cursor-pointer ${
                    activeBottomTab === 'tests' ? 'text-cyan-300 font-semibold' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PyTest Suite</span>
                </button>

                <button
                  onClick={() => setActiveBottomTab('terminal')}
                  className={`flex items-center gap-1.5 cursor-pointer ${
                    activeBottomTab === 'terminal' ? 'text-cyan-300 font-semibold' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-slate-400" />
                  <span>Output</span>
                </button>
              </div>

              <button
                onClick={handleRunTests}
                disabled={testRunning}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-[11px] transition-colors cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>{testRunning ? 'Running Tests...' : 'Run PyTest'}</span>
              </button>
            </div>

            <div className="space-y-1 text-[11px] text-slate-300">
              {testOutput.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.includes('PASSED')
                      ? 'text-emerald-400 font-medium'
                      : line.includes('coverage')
                      ? 'text-cyan-300 font-bold'
                      : 'text-slate-400'
                  }
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Editor Status Bar */}
      <div className="px-3 py-1.5 bg-[#0E131F] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <CheckCircle2 className="w-3 h-3" /> 0 Errors
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <AlertCircle className="w-3 h-3 text-amber-400" /> 0 Warnings
          </span>
          <span className="text-cyan-400 font-medium hidden sm:inline">
            Python 3.12 (venv: healthcare-env)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>UTF-8</span>
          <span>Spaces: 4</span>
          <span className="text-slate-300 font-semibold">Ready</span>
        </div>
      </div>

    </div>
  );
};
