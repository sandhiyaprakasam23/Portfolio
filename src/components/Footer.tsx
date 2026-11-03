import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, MessageSquare, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07090F] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl text-white">
                Sandhiya
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Full Stack Engineer
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Python Full Stack Developer specializing in HIPAA-compliant healthcare systems, Django REST Framework, and reactive React applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Immediate Joining</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <div className="flex flex-col gap-1.5 font-mono text-xs text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Work Experience</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education &amp; Credentials</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Get In Touch</a>
            </div>
          </div>

          {/* Location & Local Time */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              Status &amp; Availability
            </h4>
            <div className="p-3.5 rounded-xl bg-[#0B1020] border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>LOCAL TIME:</span>
                <span className="text-cyan-400 font-bold">{timeStr || 'IST'}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>AVAILABILITY:</span>
                <span className="text-emerald-400 font-semibold">Immediate Joiner (0 Days)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>LOCATION:</span>
                <span className="text-slate-300">Bengaluru / Chennai / Remote</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenTerminal();
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-slate-900 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/10 text-xs font-mono transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Developer CLI</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playSuccess();
                  onOpenResume();
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-slate-900 border border-violet-500/20 text-violet-300 hover:bg-violet-500/10 text-xs font-mono transition-colors cursor-pointer"
              >
                Resume PDF
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <span>© {new Date().getFullYear()} Sandhiya. Handcrafted with React, TypeScript &amp; Python.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-[#0B1020] border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
