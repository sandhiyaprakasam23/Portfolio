import React, { useState } from 'react';
import {
  Mail,
  MessageSquare,
  Copy,
  Check,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please complete all required fields (Name, Email, Message).');
      return;
    }
    setFormError('');
    sound.playSuccess();
    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    } catch {
      // ignore
    }

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Sandhiya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name.trim() || !formData.message.trim()) {
      setFormError('Please enter at least your Name and Message to launch WhatsApp.');
      return;
    }
    setFormError('');
    sound.playSuccess();

    const text = encodeURIComponent(
      `Hi Sandhiya, my name is ${formData.name} (${formData.email || 'Recruiter'}).\n\n${formData.message}`
    );
    window.open(`https://wa.me/916374403353?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <span>// 06. GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Immediate joiner available for Full Stack, Python, Django, and React engineering opportunities in Bengaluru, Chennai, or Remote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct verified contact channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border border-cyan-500/25 space-y-6">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Direct Channels</span>
                <h3 className="font-display font-bold text-xl text-white mt-1">
                  Connect Directly
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Quickest response via Email or WhatsApp.
                </p>
              </div>

              {/* Email channel */}
              <div className="p-4 rounded-xl bg-[#07090F]/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Mail className="w-4 h-4" /> Email Address
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    {copiedEmail ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3 h-3" /> Copy
                      </span>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono font-semibold text-sm sm:text-base text-white hover:text-cyan-400 transition-colors block truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Phone / WhatsApp channel */}
              <div className="p-4 rounded-xl bg-[#07090F]/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <MessageSquare className="w-4 h-4" /> Phone &amp; WhatsApp
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                  >
                    {copiedPhone ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3 h-3" /> Copy
                      </span>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="font-mono font-semibold text-sm sm:text-base text-white hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-3 py-1 rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/50 text-xs font-mono transition-colors"
                  >
                    Chat WhatsApp ↗
                  </a>
                </div>
              </div>

              {/* LinkedIn & GitHub links */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3.5 rounded-xl bg-[#07090F]/80 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span className="font-mono text-xs font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3.5 rounded-xl bg-[#07090F]/80 border border-slate-800 hover:border-violet-500/40 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-violet-400" />
                    <span className="font-mono text-xs font-medium">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 transition-colors" />
                </a>
              </div>

              {/* Location notice */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.location} • Immediate Joiner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch / Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Fast-Track Dispatch</span>
                <h3 className="font-display font-bold text-xl text-white mt-1">
                  Send a Structured Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Dispatches directly to Sandhiya via your preferred client (Email or WhatsApp). No lost messages.
                </p>
              </div>

              {formError && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-mono">
                  ⚠️ {formError}
                </div>
              )}

              <form onSubmit={handleEmailSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Recruiter)"
                      className="w-full px-4 py-3 rounded-xl bg-[#07090F] border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#07090F] border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full Stack Developer Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090F] border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300">Message *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Sandhiya, I reviewed your developer portfolio and your experience in Healthcare IT and Python/Django..."
                    className="w-full px-4 py-3 rounded-xl bg-[#07090F] border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors resize-none"
                    required
                  />
                </div>

                {/* Dual dispatch action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
