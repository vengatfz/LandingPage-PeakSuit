import React from 'react';
import { Lock, Shield, Database, Fingerprint } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Your Data Never Leaves Your Control.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We understand that for the enterprise, AI is an existential security risk if mishandled. Peak Suit architectures are built on a "Zero-Trust" foundation. We prioritize data sovereignty and compliance above all else.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-brand-700 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">VPC Deployment</h4>
                  <p className="text-sm text-slate-500">Systems run on your private cloud.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-700 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">SOC2 & GDPR</h4>
                  <p className="text-sm text-slate-500">Compliance baked into code.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-6 h-6 text-brand-700 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">No Model Training</h4>
                  <p className="text-sm text-slate-500">Your data never trains public models.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fingerprint className="w-6 h-6 text-brand-700 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">RBAC Controls</h4>
                  <p className="text-sm text-slate-500">Granular role-based access.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-slate-900 rounded-2xl p-8 shadow-2xl">
              <div className="absolute top-0 right-0 p-4">
                 <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
              </div>
              <div className="mt-4 space-y-4 font-mono text-sm text-green-400">
                <p>$ <span className="text-blue-400">sys_audit</span> --target=production_db</p>
                <p className="text-slate-400">Initiating handshake protocol...</p>
                <p className="text-slate-400">[✓] Encryption: AES-256 Verified</p>
                <p className="text-slate-400">[✓] Data Residency: Local (US-East)</p>
                <p className="text-slate-400">[✓] PII Redaction: Active</p>
                <p className="text-slate-400">[✓] External Access: Blocked</p>
                <p className="animate-pulse">_ System Secure. Ready for integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};