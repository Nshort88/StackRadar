import React from 'react';
import Link from 'next/link';
import {
  Radar,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Flame,
  CheckCircle,
  Zap,
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { COMPARISONS } from '@/data/comparisons';
import { LiveCatalog } from '@/components/LiveCatalog';
import { NewsletterCapture } from '@/components/NewsletterCapture';

export default function HomePage() {
  const trendingTools = PRODUCTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Micro Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold tracking-wide uppercase shadow-2xs">
            <Sparkles size={13} className="text-brand-600 animate-spin" />
            <span>2026 Software Index • 100% Free Public Access</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Find the Best Software for Your Stack.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600">
              Zero Guesswork.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Unbiased speed benchmarks, transparent pricing matrices, and verified discount coupons. Compare alternatives side-by-side before you subscribe.
          </p>

          {/* Trust Metrics Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-500" />
              Rigorous Lab Testing
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={16} className="text-amber-500" />
              Verified Coupon Codes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={16} className="text-brand-500" />
              Zero Paywalled Reviews
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
              Live Software Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore & Filter Verified Tools
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Select any 2 tools to launch our instant head-to-head comparison engine.
          </p>
        </div>

        <LiveCatalog products={PRODUCTS} />
      </section>

      {/* Featured Comparisons Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              <Flame size={13} />
              High-Converting Matchups
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Torn between Jasper & Copy.ai, or Vercel & Railway?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Read our side-by-side spec teardowns with latency benchmarks, actual cost formulas, and clear verdict recommendations.
            </p>
          </div>
          <Link
            href="/compare"
            className="shrink-0 px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-brand-600/30 flex items-center gap-2"
          >
            Explore Head-to-Head Comparisons
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Trust & Editorial Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Editorial Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How StackRadar Makes Money While Remaining Unbiased
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-black">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900">Zero Paywalls for Readers</h3>
              <p>
                Our guides, benchmarks, and comparison matrix are 100% free for everyone. We do not charge subscriptions or gate information behind credit card forms.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900">Transparent Affiliate Links</h3>
              <p>
                When you click a link and subscribe to a tool, the software provider pays us a referral commission. This costs you nothing extra (and often unlocks discounted partner pricing).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-black">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900">Independent Testing</h3>
              <p>
                A high commission never buys a high review score. If a platform is sluggish, overpriced, or lacks customer support, we clearly disclose it in the Cons section.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Email Capture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterCapture />
      </section>
    </div>
  );
}
