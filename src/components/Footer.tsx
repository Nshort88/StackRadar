import React from 'react';
import Link from 'next/link';
import { Radar, Shield, ExternalLink, Heart } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Radar className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">StackRadar</span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              The premier destination for transparent software evaluations, benchmark performance tests, and verified discount coupons.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
              <Shield size={14} className="text-emerald-500" />
              100% Unbiased Editorial Testing
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Explore Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Comparisons */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Trending Comparisons
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/compare/jasper-ai-vs-copy-ai" className="hover:text-white transition-colors">
                  Jasper AI vs Copy.ai
                </Link>
              </li>
              <li>
                <Link href="/compare/vercel-vs-railway" className="hover:text-white transition-colors">
                  Vercel vs Railway
                </Link>
              </li>
              <li>
                <Link href="/compare/semrush-vs-surfer-seo" className="hover:text-white transition-colors">
                  Semrush vs Surfer SEO
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1">
                  View All Comparisons →
                </Link>
              </li>
            </ul>
          </div>

          {/* Monetization / Founders */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              For Founders & Partners
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/sponsor" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
                  Sponsor Your Software ($49) <ExternalLink size={11} />
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="hover:text-white transition-colors">
                  Submit a Tool for Review
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy & Cookies
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal FTC Affiliate Disclosure Notice (Crucial for Amazon / Google / FTC guidelines) */}
        <div className="border-t border-slate-800/80 pt-8 mt-8 text-[11px] text-slate-400 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <p className="font-semibold text-slate-300 mb-1">
            FTC & Affiliate Disclosure Statement:
          </p>
          <p>
            StackRadar is a participant in various affiliate marketing programs. Some of the outbound links on this site are affiliate links, which means that when you click through and finalize a purchase, we may earn an affiliate commission at absolutely no extra cost to you. These commissions help maintain our research laboratory, zero-cost public database, and benchmarking infrastructure. Our editorial scores and recommendations are formulated strictly independently of commercial relationships.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} StackRadar Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for maximum speed with 0-server-cost architecture <Heart size={12} className="text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
