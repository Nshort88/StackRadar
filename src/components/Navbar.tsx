'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Radar, Sparkles, Scale, DollarSign, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      {/* Top micro-bar for FTC compliance and credibility */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
          <ShieldCheck size={12} />
          Editorial Independence Verified
        </span>
        <span className="hidden sm:inline text-slate-500">•</span>
        <span className="hidden sm:inline text-slate-400">
          We may earn affiliate commissions on verified purchases at zero cost to you.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Radar className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
              StackRadar
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded border border-brand-200">
                PRO
              </span>
            </span>
            <span className="text-[11px] text-slate-500 block -mt-0.5 font-medium">
              Curated Software Deals & Comparisons
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 rounded-lg transition-colors"
          >
            All Software
          </Link>
          <Link
            href="/#categories"
            className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 rounded-lg transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/compare"
            className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Scale size={14} className="text-brand-600" />
            Head-to-Head
          </Link>
          <Link
            href="/deals"
            className="px-3 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors flex items-center gap-1"
          >
            <Sparkles size={14} />
            Exclusive Deals
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/sponsor"
            className="text-xs font-semibold text-slate-700 hover:text-slate-950 px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-1"
          >
            <DollarSign size={13} className="text-emerald-600" />
            Sponsor a Tool
          </Link>
          <Link
            href="/#newsletter"
            className="text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white px-3.5 py-2 rounded-lg shadow-sm shadow-brand-600/20 transition-all flex items-center gap-1"
          >
            Get Deal Alerts
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 rounded-lg hover:bg-slate-100"
          >
            All Software
          </Link>
          <Link
            href="/#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 rounded-lg hover:bg-slate-100"
          >
            Categories
          </Link>
          <Link
            href="/compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 rounded-lg hover:bg-slate-100"
          >
            Head-to-Head Comparisons
          </Link>
          <Link
            href="/deals"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-amber-700 rounded-lg hover:bg-amber-50"
          >
            Exclusive Deals
          </Link>
          <Link
            href="/sponsor"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-emerald-700 rounded-lg hover:bg-emerald-50"
          >
            Sponsor / Submit Your Tool ($49)
          </Link>
        </div>
      )}
    </header>
  );
};
