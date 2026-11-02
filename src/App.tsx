import { useState, useEffect } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GitHubSection } from './components/GitHubSection';
import { EducationCertificationsSection } from './components/EducationCertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { MatrixRain } from './components/MatrixRain';
import { ResumeModal } from './components/ResumeModal';
import { Terminal, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';
import { sound } from './utils/soundEffects';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [matrixOpen, setMatrixOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape closes all modals
      if (e.key === 'Escape') {
        setTerminalOpen(false);
        setMatrixOpen(false);
        setResumeOpen(false);
      }
      // Ctrl+K or Cmd+K opens terminal
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
        sound.playClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090F] text-[#DCE4F0] relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-slate-900/50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-75 shadow-[0_0_10px_rgba(0,229,255,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 3D WebGL Particle & Geometry Universe */}
      <ThreeBackground />

      {/* Cyber Grid Background layer */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-40" />

      {/* Matrix Code Rain Overlay (toggleable) */}
      <MatrixRain active={matrixOpen} onClose={() => setMatrixOpen(false)} />

      {/* Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onToggleMatrix={() => setMatrixOpen((prev) => !prev)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubSection />
        <EducationCertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Interactive Developer CLI Terminal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onToggleMatrix={() => setMatrixOpen((prev) => !prev)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* In-App Resume PDF Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Action Dock (Desktop & Mobile) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            setTerminalOpen((prev) => !prev);
          }}
          className="p-3 rounded-2xl bg-[#0B1020]/90 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 shadow-xl backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2 font-mono text-xs group"
          title="Toggle Terminal (Ctrl + K)"
        >
          <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden md:inline text-slate-300">Terminal (Ctrl+K)</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </button>

        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playClick()}
          className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:border-emerald-400 shadow-xl backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2 font-mono text-xs"
          title="Direct WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden md:inline text-emerald-300">Chat WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default App;
