import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy & Cookies | StackRadar',
  description: 'Learn how StackRadar collects, uses, and safeguards user information and cookie preferences.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8 text-slate-700 text-sm leading-relaxed">
      <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">Privacy Policy</h1>
      <p className="text-xs text-slate-500">Last updated: January 2026</p>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
        <p>
          StackRadar collects minimal information necessary to deliver our services. When you voluntarily submit your email address for our newsletter, we store it securely via our mailing partner to deliver software deals and comparisons.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">2. Cookies and Tracking Technologies</h2>
        <p>
          We use standard cookies to analyze website traffic, remember comparison preferences, and track outbound affiliate referrals so partner networks can credit legitimate sales.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">3. Affiliate Links Disclosure</h2>
        <p>
          Some links on StackRadar are affiliate links. If you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">4. Contact Information</h2>
        <p>
          For privacy inquiries or data removal requests, contact our privacy team at <span className="font-semibold text-brand-600">privacy@stackradar.com</span>.
        </p>
      </div>
    </div>
  );
}
