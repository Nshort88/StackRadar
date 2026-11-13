import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ExternalLink,
  Check,
  X,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Scale,
  Award,
  ChevronRight,
} from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { StarRating } from '@/components/StarRating';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} Review (2026): Pricing, Pros & Cons, and Benchmark Tests | StackRadar`,
    description: `Is ${product.name} worth it in 2026? Read our detailed, unbiased review analyzing features, speed, actual pricing, and alternatives.`,
    openGraph: {
      title: `${product.name} Review & Pricing Breakdown`,
      description: product.description,
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === product.category);
  const alternatives = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  // JSON-LD Structured Data for Google rich search results (Stars in SERPs)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    operatingSystem: 'All',
    applicationCategory: 'BusinessApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      price: product.pricing.startingPrice.replace(/[^0-9.]/g, '') || '0',
      priceCurrency: 'USD',
    },
    review: {
      '@type': 'Review',
      author: {
        '@type': 'Organization',
        name: 'StackRadar Editorial Team',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: product.rating,
      },
      reviewBody: product.description,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800">
            Home
          </Link>
          <ChevronRight size={12} />
          {category && (
            <>
              <Link href={`/category/${category.slug}`} className="hover:text-slate-800">
                {category.name}
              </Link>
              <ChevronRight size={12} />
            </>
          )}
          <span className="text-slate-900 font-medium">{product.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                {product.badge && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    <Sparkles size={12} className="text-amber-500 fill-amber-500" />
                    {product.badge}
                  </span>
                )}
                {category && (
                  <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200/60">
                    {category.name}
                  </span>
                )}
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {product.pricing.pricingModel}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {product.tagline}
              </p>

              <div className="flex items-center gap-4 pt-1">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="lg" />
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck size={14} /> Verified in 2026
                </span>
              </div>
            </div>

            {/* Price & Primary CTA Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shrink-0 lg:w-80 shadow-xs">
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Pricing Overview
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">
                    {product.pricing.startingPrice}
                  </span>
                  <span className="text-sm text-slate-500 font-medium">
                    /{product.pricing.billingCycle}
                  </span>
                </div>
                {product.pricing.freeTier ? (
                  <div className="text-xs text-emerald-700 font-medium bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                    ✓ Includes permanent free tier
                  </div>
                ) : product.pricing.freeTrialDays ? (
                  <div className="text-xs text-brand-700 font-medium bg-brand-50 p-2 rounded-lg border border-brand-200">
                    ✓ {product.pricing.freeTrialDays}-day risk-free trial available
                  </div>
                ) : null}

                {product.dealText && (
                  <div className="text-xs text-amber-800 font-semibold bg-amber-50 p-2 rounded-lg border border-amber-200">
                    🔥 {product.dealText}
                  </div>
                )}
              </div>

              <a
                href={`/go/${product.slug}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full text-center py-3.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-600/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                Visit Official Website
                <ExternalLink size={15} />
              </a>
              <span className="text-[10px] text-center text-slate-400 mt-2">
                External partner link • No added fees
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Review Content & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Review Body (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Award size={20} className="text-brand-600" />
                Editorial Verdict & Summary
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>

              {/* Editorial Scorecards */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Lab Benchmark Scores (Out of 10)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <span className="text-xs text-slate-500 block">Usability</span>
                    <span className="text-xl font-extrabold text-slate-900">
                      {product.editorialScore.usability}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <span className="text-xs text-slate-500 block">Performance</span>
                    <span className="text-xl font-extrabold text-slate-900">
                      {product.editorialScore.speed}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <span className="text-xs text-slate-500 block">Value</span>
                    <span className="text-xl font-extrabold text-slate-900">
                      {product.editorialScore.value}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <span className="text-xs text-slate-500 block">Support</span>
                    <span className="text-xl font-extrabold text-slate-900">
                      {product.editorialScore.support}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Pros and Cons (Crucial for high Google SEO rating) */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-900">
                Pros & Cons: What Users Need to Know
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pros */}
                <div className="bg-emerald-50/50 rounded-2xl border border-emerald-200/80 p-5 space-y-3">
                  <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-1.5">
                    <Check size={16} className="text-emerald-600" />
                    What We Like
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    {product.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-rose-50/40 rounded-2xl border border-rose-200/70 p-5 space-y-3">
                  <h3 className="text-sm font-bold text-rose-900 flex items-center gap-1.5">
                    <X size={16} className="text-rose-600" />
                    Potential Drawbacks
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    {product.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <X size={14} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Features List */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feat, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 font-medium flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Tech Specs & Alternatives */}
          <div className="space-y-6">
            {/* Tech Specs Table */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Technical Specifications
              </h3>
              <dl className="divide-y divide-slate-100 text-xs">
                {Object.entries(product.specs).map(([label, value]) => (
                  <div key={label} className="py-2.5 flex items-start justify-between gap-3">
                    <dt className="text-slate-500 font-medium">{label}</dt>
                    <dd className="text-slate-900 font-semibold text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Alternatives / Competitors Widget */}
            {alternatives.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Scale size={15} className="text-brand-600" />
                  Popular Alternatives
                </h3>
                <div className="space-y-3">
                  {alternatives.map((alt) => (
                    <div
                      key={alt.id}
                      className="p-3 rounded-xl border border-slate-100 hover:border-slate-300 bg-slate-50/60 transition-all flex items-center justify-between"
                    >
                      <div>
                        <Link
                          href={`/tool/${alt.slug}`}
                          className="text-xs font-bold text-slate-900 hover:text-brand-600 block"
                        >
                          {alt.name}
                        </Link>
                        <span className="text-[11px] text-slate-500">
                          From {alt.pricing.startingPrice}/mo
                        </span>
                      </div>
                      <Link
                        href={`/compare/${product.slug}-vs-${alt.slug}`}
                        className="text-[11px] font-semibold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-2.5 py-1 rounded-md transition-colors"
                      >
                        Compare
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
