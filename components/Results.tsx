import React from 'react';
import { TrendingUp, Clock, Zap } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  {
    value: "$4.2M",
    label: "Annualized OpEx Saved",
    subLabel: "Average per enterprise client"
  },
  {
    value: "68%",
    label: "Process Latency Reduction",
    subLabel: "Across logistics workflows"
  },
  {
    value: "0.01%",
    label: "Error Rate",
    subLabel: "In automated financial reconciliation"
  }
];

export const Results: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-slate-700 pb-12 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-brand-400 mb-2 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-400">
                {stat.subLabel}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Corporate Logos using text for demo purposes */}
            <span className="text-2xl font-bold font-serif">NEXUS<span className="font-light">LOGISTICS</span></span>
            <span className="text-2xl font-bold tracking-widest">AEROCORP</span>
            <span className="text-2xl font-extrabold italic">VENTURA<span className="text-brand-400">FINANCE</span></span>
            <span className="text-2xl font-bold">STRATOS<span className="font-thin">HEALTH</span></span>
            <span className="text-xl font-bold border-2 border-white px-2 py-1">GLOBAL<span className="bg-white text-slate-900 px-1 ml-1">MFG</span></span>
        </div>
      </div>
    </section>
  );
};