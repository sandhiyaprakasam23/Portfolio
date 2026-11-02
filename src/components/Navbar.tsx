import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Menu, X, FileText, Binary } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface NavbarProps {
  onOpenTerminal: () => void;
  onToggleMatrix: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onToggleMatrix,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(sound.isAudioEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const next = sound.toggleAudio();
    setAudioEnabled(next);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090F]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => sound.playClick(800)}
          className="group flex items-center gap-3 text-white"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B1020] border border-cyan-500/40 shadow-[0_0_15px_rgba(0,229,255,0.25)] group-hover:border-cyan-400 transition-colors">
            <span className="font-mono font-bold text-lg text-cyan-400 group-hover:scale-110 transition-transform">
              S
            </span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              SANDHIYA P
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 -mt-1 tracking-widest uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0B1020]/70 border border-slate-800 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => sound.playClick(650)}
              className="px-3 py-1 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Quick Tools & CTAs */}
        <div className="hidden md:flex items-center gap-2">
          {/* Audio SFX Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            title={audioEnabled ? "Disable SFX" : "Enable Cyber SFX"}
            className={`p-2 rounded-xl border transition-all ${
              audioEnabled
                ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.3)]'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Matrix Rain Toggle */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onToggleMatrix();
            }}
            title="Toggle Matrix Code Rain"
            className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
          >
            <Binary className="w-4 h-4" />
          </button>

          {/* Interactive Terminal */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/15 font-mono text-xs transition-all shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
          </button>

          {/* Resume Modal Button */}
          <button
            type="button"
            onClick={() => {
              sound.playSuccess();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            className="p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400"
            title="Open CLI"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090F]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-5 space-y-4 animate-fadeIn">
          <div className="flex flex-col gap-2 font-mono text-sm">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-slate-300 hover:text-cyan-400 transition-colors border-b border-slate-800/50"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download Resume</span>
            </button>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm"
            >
              <span>Connect on WhatsApp 💬</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
