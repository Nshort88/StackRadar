import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, ArrowRight, Sparkles, Check, ChevronRight } from 'lucide-react';
import { COMPARISONS } from '@/data/comparisons';
import { PRODUCTS } from '@/data/products';
import { StarRating } from '@/components/StarRating';

export const metadata: Metadata = {
  title: 'Software Head-to-Head Comparisons & Benchmarks | StackRadar',
  description: 'Unbiased side-by-side software comparisons. Compare specs, pricing, real-world performance, and winner verdicts before buying.',
};

export default function CompareIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 px-3 py-1 rounded-full border border-brand-200">
          <Scale size={13} className="text-brand-600" />
          Direct Head-to-Head Matchups
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Compare Before You Subscribe
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Torn between two software platforms? Our lab benchmarks contrast pricing, features, speed, and real-world trade-offs so you invest in the right tool.
        </p>
      </div>

      {/* Featured Comparisons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMPARISONS.map((comp) => {
          const toolA = PRODUCTS.find((p) => p.id === comp.toolAId);
          const toolB = PRODUCTS.find((p) => p.id === comp.toolBId);
          const winner = PRODUCTS.find((p) => p.id === comp.winnerId);

          if (!toolA || !toolB) return null;

          return (
            <div
              key={comp.slug}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-brand-500/40 transition-all duration-300"
            >
              <div>
                {/* Matchup Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-slate-900 text-sm">
                      {toolA.name}
                    </span>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      VS
                    </span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {toolB.name}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {comp.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {comp.summary}
                </p>

                {/* Verdict Badge */}
                {winner && (
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 font-medium mb-4 flex items-center gap-2">
                    <Sparkles size={14} className="text-amber-500 shrink-0" />
                    <span>
                      Winner: <strong>{winner.name}</strong>
                    </span>
                  </div>
                )}
              </div>

              <Link
                href={`/compare/${comp.slug}`}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                View Full Comparison <ArrowRight size={13} />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Instant Custom Comparison Matrix */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Want to compare any two tools on our site?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Just click the &quot;Compare&quot; button on any software card from the homepage, and our floating tray will generate a side-by-side spec comparison for you.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold bg-white text-slate-900 border border-slate-300 hover:border-slate-400 px-5 py-3 rounded-xl shadow-xs transition-all"
        >
          Browse All Software <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
