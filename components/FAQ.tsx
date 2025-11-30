import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData: FAQItem[] = [
  {
    question: "How long does implementation typically take?",
    answer: "Unlike SaaS tools that take months to configure, our systems are modular. A typical audit-to-pilot timeline is 2-4 weeks, with full-scale ecosystem deployment taking 8-12 weeks depending on integration complexity."
  },
  {
    question: "Do you replace our existing workforce?",
    answer: "No. We replace 'drudgery'. Our systems are designed to handle high-volume, low-variance tasks (data entry, reconciliation, routing), freeing your human experts to focus on strategy, client relationships, and high-value decision making."
  },
  {
    question: "Is this compatible with legacy systems (SAP, Oracle, Mainframes)?",
    answer: "Yes. This is our specialty. We build middleware layers and RPA bridges that allow modern AI agents to interact securely with legacy databases without requiring a risky 'rip and replace' of your core tech stack."
  },
  {
    question: "What is the ROI guarantee?",
    answer: "We structure our contracts based on outcomes. During the Strategy Audit, we define clear success metrics (e.g., hours saved, error reduction). If our pilot doesn't hit the agreed KPIs, we don't proceed to full deployment."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Common Questions for Leadership
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};