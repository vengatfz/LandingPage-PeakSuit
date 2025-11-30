import React from 'react';
import { SectionProps } from '../types';
import { Button } from './Button';
import { Search, Cog, Server, Check } from 'lucide-react';

export const OfferStack: React.FC<SectionProps> = ({ openModal }) => {
  const offers = [
    {
      icon: Search,
      title: "Deep-Dive Systems Audit",
      description: "We deconstruct your current operational friction. You get a forensic map of inefficiencies and a verified roadmap for AI integration.",
      features: ["Process Mining & Bottleneck Analysis", "Data Governance Readiness Check", "ROI Projection Model"],
      audience: "For COOs & CTOs needing clarity."
    },
    {
      icon: Cog,
      title: "Core Operational Automation",
      description: "Deployment of proprietary agentic workflows that handle 80% of repetitive cognitive load in finance, HR, or supply chain.",
      features: ["Custom Agentic Workflow Development", "Legacy ERP/CRM Integration", "Human-in-the-Loop Safeguards"],
      audience: "For Dept Heads needing immediate scale."
    },
    {
      icon: Server,
      title: "The Sovereign Ecosystem",
      description: "A complete, private AI infrastructure hosted on your VPC. Full ownership, zero data leakage, and fine-tuned models trained on your IP.",
      features: ["Private LLM Fine-Tuning", "Air-Gapped Deployment Options", "Continuous Learning Pipelines"],
      audience: "For Enterprise needing competitive moats."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="solutions">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Beyond "Tools." We Build Competitive Advantage.
          </h2>
          <p className="text-lg text-slate-600">
            Most agencies sell you a subscription. We architect assets that you own, control, and capitalize on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center mb-6">
                <offer.icon className="w-7 h-7 text-brand-700" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {offer.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                {offer.description}
              </p>

              <div className="bg-slate-50 rounded-lg p-4 mb-8">
                <ul className="space-y-3">
                  {offer.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-slate-700">
                      <Check className="w-4 h-4 text-brand-600 mt-0.5 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-t border-slate-100 pt-4">
                {offer.audience}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button onClick={openModal}>
            Discuss Implementation
          </Button>
        </div>
      </div>
    </section>
  );
};