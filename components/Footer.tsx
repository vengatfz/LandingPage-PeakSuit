import React from 'react';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-900 p-2 rounded">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Peak Suit AI</span>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Peak Suit Agency. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-600 max-w-2xl mx-auto">
          Peak Suit AI Agency provides operational consulting and software development services. We are not a venture capital firm or financial advisor. Results vary based on organizational maturity and data quality.
        </div>
      </div>
    </footer>
  );
};