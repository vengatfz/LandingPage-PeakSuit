import React, { useEffect } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-brand-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Book Your Strategic Audit
            </h3>
            <p className="text-slate-600">
              Speak with a senior systems architect. No sales fluff, just engineering feasibility.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-700">Receive a preliminary <strong>Process Vulnerability Assessment</strong>.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-700">Identify <strong>2-3 high-leverage automation opportunities</strong> immediately.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-700">Clear roadmap for <strong>30% OPEX reduction</strong> within Q1.</p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('This would connect to a calendar API (e.g., Cal.com or Calendly).'); }}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Size</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all">
                <option>50-200 Employees</option>
                <option>201-500 Employees</option>
                <option>500-1000 Employees</option>
                <option>1000+ Employees</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full bg-brand-900 text-white font-bold py-4 rounded-lg hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20"
            >
              Confirm Availability
            </button>
          </form>
          
          <p className="mt-4 text-xs text-center text-slate-500">
            Limited slots available for non-client consultations this month.
          </p>
        </div>
      </div>
    </div>
  );
};