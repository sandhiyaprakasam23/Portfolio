import React from 'react';
import { METRICS } from '../data/portfolioData';

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-12 border-y border-cyan-500/15 bg-[#0B1020]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="group relative p-4 rounded-xl bg-[#07090F]/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-cyan-400 transition-colors">
                  {metric.value}
                </span>
                <span className="font-mono text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {metric.detail}
                </span>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
