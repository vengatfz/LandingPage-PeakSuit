import React from 'react';
import { SectionProps } from '../types';
import { Button } from './Button';
import { Network, Cpu, ShieldCheck } from 'lucide-react';

export const Hero: React.FC<SectionProps> = ({ openModal }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-20 lg:pt-32 lg:pb-28">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-brand-50 to-white opacity-50" />
      <div className="absolute top-20 right-20 -z-10 text-brand-100 opacity-40">
        <Network size={400} strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-8">
            <Cpu className="w-4 h-4" />
            <span>Enterprise-Grade AI Infrastructure</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            Stop Buying Chatbots. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 to-brand-600">
              Start Engineering Systems.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your fragmented tools are bleeding revenue. Peak Suit builds the invisible, intelligent infrastructure that unifies your data, automates complex workflows, and guarantees operational ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={openModal} withArrow>
              Audit My Infrastructure
            </Button>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium px-4">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              SOC2 Compliant Architecture
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};