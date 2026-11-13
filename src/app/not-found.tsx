import React from 'react';
import Link from 'next/link';
import { Radar, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto shadow-sm">
        <Radar size={32} />
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Page Not Found</h1>
      <p className="text-sm text-slate-600">
        The tool or comparison you are looking for has moved or does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-xl transition-all shadow-md"
      >
        <ArrowLeft size={14} /> Back to Software Catalog
      </Link>
    </div>
  );
}
