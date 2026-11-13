import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Tag, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { StarRating } from '@/components/StarRating';

export const metadata: Metadata = {
  title: 'Exclusive Software Coupons & Verified Discounts | StackRadar',
  description: 'Verified active software promo codes, student discounts, and extended free trials for SaaS, AI tools, hosting, and developer utilities.',
};

export default function DealsPage() {
  const deals = PRODUCTS.filter((p) => p.dealText || p.pricing.freeTier);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
          <Tag size={13} className="text-amber-600" />
          Verified Active Discounts
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Exclusive Software Deals & Free Trials
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Every coupon code and extended trial on this page is tested weekly by our team. Click through to automatically apply coupon codes at checkout.
        </p>
      </div>

      {/* Deals List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-amber-400/50 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                  <span className="text-xs text-slate-500 font-medium">{product.tagline}</span>
                </div>
                <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-1 rounded-md">
                  {product.pricing.startingPrice}/mo
                </span>
              </div>

              {/* Deal callout badge */}
              <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 text-amber-900 text-xs font-semibold flex items-start gap-2">
                <Sparkles size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-amber-950">Active Promotion:</span>
                  {product.dealText || 'Free tier available'}
                </div>
              </div>

              <div className="pt-2">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2">
              <Link
                href={`/tool/${product.slug}`}
                className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 py-2.5 px-3 rounded-xl transition-all"
              >
                Review
              </Link>
              <a
                href={`/go/${product.slug}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-1 py-2.5 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                Activate Deal <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
