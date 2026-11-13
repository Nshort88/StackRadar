import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | StackRadar',
  description: 'Terms and conditions for browsing and utilizing StackRadar software evaluation services.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8 text-slate-700 text-sm leading-relaxed">
      <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">Terms of Service</h1>
      <p className="text-xs text-slate-500">Last updated: January 2026</p>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
        <p>
          By accessing or using StackRadar, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">2. Software Evaluations & Accuracy</h2>
        <p>
          Pricing, feature matrices, and software specifications are subject to change by respective software providers without prior notice. While we strive to maintain 100% current data, users are encouraged to verify final pricing on the vendor&apos;s checkout page.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">3. Limitation of Liability</h2>
        <p>
          StackRadar shall not be held liable for any damages resulting from the use or inability to use any third-party software products reviewed or linked on our platform.
        </p>
      </div>
    </div>
  );
}
