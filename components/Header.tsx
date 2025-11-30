import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { SectionProps } from '../types';
import { Cpu, Menu, X } from 'lucide-react';

export const Header: React.FC<SectionProps> = ({ openModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-900 text-white p-1.5 rounded">
              <Cpu size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Peak Suit
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors">Solutions</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors">Case Studies</a>
            <Button variant="primary" onClick={openModal} className="py-2 px-6 text-sm">
              Book Strategy Session
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 shadow-lg flex flex-col gap-4">
          <a href="#solutions" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
          <a href="#" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
          <Button variant="primary" onClick={() => { openModal(); setIsMobileMenuOpen(false); }} fullWidth>
            Book Strategy Session
          </Button>
        </div>
      )}
    </nav>
  );
};