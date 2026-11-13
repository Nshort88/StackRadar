'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Check, Sparkles, Scale, ArrowRight } from 'lucide-react';
import { Product } from '@/data/products';
import { StarRating } from './StarRating';

interface ProductCardProps {
  product: Product;
  isCompared?: boolean;
  onToggleCompare?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isCompared = false,
  onToggleCompare,
}) => {
  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-brand-500/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Top Header: Badge, Category, Compare Checkbox */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            {product.badge && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/70 shadow-2xs">
                <Sparkles size={11} className="fill-amber-500 text-amber-500" />
                {product.badge}
              </span>
            )}
            <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
              {product.pricing.pricingModel}
            </span>
          </div>

          {/* Quick Compare Button */}
          {onToggleCompare && (
            <button
              onClick={() => onToggleCompare(product)}
              className={`text-xs flex items-center gap-1 px-2 py-1 rounded-md border transition-all ${
                isCompared
                  ? 'bg-brand-600 text-white border-brand-600 font-semibold'
                  : 'text-slate-500 border-slate-200 hover:text-slate-800 hover:border-slate-300'
              }`}
              title="Select for comparison"
            >
              <Scale size={12} />
              {isCompared ? 'Comparing' : 'Compare'}
            </button>
          )}
        </div>

        {/* Title, Tagline & Star Rating */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <Link
              href={`/tool/${product.slug}`}
              className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors"
            >
              {product.name}
            </Link>
          </div>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2.5">
            {product.tagline}
          </p>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        </div>

        {/* Exclusive Deal Callout Banner */}
        {product.dealText && (
          <div className="mb-4 p-2.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold flex items-center gap-1.5">
            <span className="flex-shrink-0 text-emerald-600 font-bold">PROMO:</span>
            <span className="truncate">{product.dealText}</span>
          </div>
        )}

        {/* Top Pros / Highlights */}
        <div className="space-y-1.5 mb-6 text-xs text-slate-600">
          {product.pros.slice(0, 3).map((pro, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{pro}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pricing & CTAs */}
      <div className="pt-4 border-t border-slate-100 mt-auto">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-xs text-slate-400 block">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-slate-900">
                {product.pricing.startingPrice}
              </span>
              <span className="text-xs text-slate-500">
                /{product.pricing.billingCycle}
              </span>
            </div>
          </div>
          {product.pricing.freeTier && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
              Free Plan Available
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/tool/${product.slug}`}
            className="flex items-center justify-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 py-2.5 px-3 rounded-xl transition-all"
          >
            Review <ArrowRight size={13} />
          </Link>
          <a
            href={`/go/${product.slug}`}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-1 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 py-2.5 px-3 rounded-xl shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all"
          >
            Claim Deal <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
