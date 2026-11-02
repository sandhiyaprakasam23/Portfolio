import React from 'react';
import { X, Download, ExternalLink, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0B1020] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-5 py-4 bg-[#07090F]/90 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg flex items-center gap-2">
                Sandhiya_Resume.pdf
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Verified Candidate
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Python Full Stack Developer • 1+ Year Exp • Immediate Joiner
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Sandhiya_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
              title="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Info Banner */}
        <div className="px-5 py-2.5 bg-cyan-950/20 border-b border-cyan-500/15 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Healthcare IT &amp; HIPAA-compliant Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> 80%+ Test Coverage
            </span>
            <span className="flex items-center gap-1 text-cyan-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> 15+ REST APIs
            </span>
            <span className="flex items-center gap-1 text-violet-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Notice: 0 Days
            </span>
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <div className="flex-1 bg-slate-900/60 p-2 min-h-[460px] overflow-hidden">
          <iframe
            src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Sandhiya P Resume"
            className="w-full h-full rounded-lg border border-slate-800 min-h-[460px]"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#07090F] border-t border-cyan-500/10 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-slate-400">
            Direct Contact: <strong className="text-slate-200">{PERSONAL_INFO.email}</strong> • <strong className="text-slate-200">{PERSONAL_INFO.phone}</strong>
          </span>
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Connect on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
