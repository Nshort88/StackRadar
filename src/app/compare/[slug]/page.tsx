import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ExternalLink,
  Check,
  X,
  Sparkles,
  Scale,
  Award,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { COMPARISONS } from '@/data/comparisons';
import { StarRating } from '@/components/StarRating';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPARISONS.map((comp) => ({
    slug: comp.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const parts = slug.split('-vs-');
  if (parts.length !== 2) return {};

  const [slugA, slugB] = parts;
  const toolA = PRODUCTS.find((p) => p.slug === slugA);
  const toolB = PRODUCTS.find((p) => p.slug === slugB);

  if (!toolA || !toolB) return {};

  return {
    title: `${toolA.name} vs ${toolB.name} (2026 Comparison): Pricing, Features & Speed | StackRadar`,
    description: `Deciding between ${toolA.name} and ${toolB.name}? Compare benchmark scores, pros & cons, features, and pricing side-by-side to find the right choice.`,
  };
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const parts = slug.split('-vs-');

  if (parts.length !== 2) {
    notFound();
  }

  const [slugA, slugB] = parts;
  const toolA = PRODUCTS.find((p) => p.slug === slugA);
  const toolB = PRODUCTS.find((p) => p.slug === slugB);

  if (!toolA || !toolB) {
    notFound();
  }

  // Look up custom comparison metadata if exists
  const preset = COMPARISONS.find(
    (c) =>
      (c.toolAId === toolA.id && c.toolBId === toolB.id) ||
      (c.toolAId === toolB.id && c.toolBId === toolA.id)
  );

  // Union of all spec keys
  const allSpecKeys = Array.from(
    new Set([...Object.keys(toolA.specs), ...Object.keys(toolB.specs)])
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-800">
          Home
        </Link>
        <ChevronRight size={12} />
        <Link href="/compare" className="hover:text-slate-800">
          Comparisons
        </Link>
        <ChevronRight size={12} />
        <span className="text-slate-900 font-medium">
          {toolA.name} vs {toolB.name}
        </span>
      </nav>

      {/* Header Matchup Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm text-center max-w-4xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 px-3 py-1 rounded-full border border-brand-200">
          <Scale size={13} />
          Head-to-Head Comparison
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          {toolA.name} <span className="text-brand-600 font-normal">vs</span> {toolB.name}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          {preset?.summary ||
            `A comprehensive side-by-side analysis contrasting performance, pricing, pros, and usability to determine which tool is best for your workflow.`}
        </p>

        {preset?.verdict && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 font-medium max-w-2xl mx-auto text-left flex items-start gap-3">
            <Sparkles size={20} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-950 mb-0.5">
                Our Bottom-Line Verdict:
              </strong>
              {preset.verdict}
            </div>
          </div>
        )}
      </div>

      {/* Side-by-Side Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tool A */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                Option 1
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">{toolA.name}</h2>
              <p className="text-xs text-slate-600 mt-1">{toolA.tagline}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-slate-900">
                {toolA.pricing.startingPrice}
              </span>
              <span className="text-xs text-slate-500 block">/{toolA.pricing.billingCycle}</span>
            </div>
          </div>

          <StarRating rating={toolA.rating} reviewCount={toolA.reviewCount} />

          {/* Outbound CTA */}
          <a
            href={`/go/${toolA.slug}`}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            Try {toolA.name} <ExternalLink size={13} />
          </a>

          {/* Pros */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Strengths
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {toolA.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tool B */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Option 2
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">{toolB.name}</h2>
              <p className="text-xs text-slate-600 mt-1">{toolB.tagline}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-slate-900">
                {toolB.pricing.startingPrice}
              </span>
              <span className="text-xs text-slate-500 block">/{toolB.pricing.billingCycle}</span>
            </div>
          </div>

          <StarRating rating={toolB.rating} reviewCount={toolB.reviewCount} />

          {/* Outbound CTA */}
          <a
            href={`/go/${toolB.slug}`}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full py-3 px-4 bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            Try {toolB.name} <ExternalLink size={13} />
          </a>

          {/* Pros */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Strengths
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {toolB.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Side-by-Side Specs Matrix Table */}
      <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-200/80 bg-slate-50/70">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Zap size={18} className="text-brand-600" />
            Side-by-Side Technical Comparison
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/50 text-slate-500">
                <th className="py-3 px-6 font-bold uppercase tracking-wider w-1/3">
                  Feature / Specification
                </th>
                <th className="py-3 px-6 font-bold uppercase tracking-wider w-1/3 text-slate-900">
                  {toolA.name}
                </th>
                <th className="py-3 px-6 font-bold uppercase tracking-wider w-1/3 text-slate-900">
                  {toolB.name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-6 font-medium text-slate-500">Starting Price</td>
                <td className="py-3 px-6 font-bold text-slate-900">
                  {toolA.pricing.startingPrice} / {toolA.pricing.billingCycle}
                </td>
                <td className="py-3 px-6 font-bold text-slate-900">
                  {toolB.pricing.startingPrice} / {toolB.pricing.billingCycle}
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-6 font-medium text-slate-500">Free Tier</td>
                <td className="py-3 px-6">
                  {toolA.pricing.freeTier ? (
                    <span className="text-emerald-700 font-bold">Yes (Free Plan)</span>
                  ) : (
                    <span className="text-slate-400">Paid Only</span>
                  )}
                </td>
                <td className="py-3 px-6">
                  {toolB.pricing.freeTier ? (
                    <span className="text-emerald-700 font-bold">Yes (Free Plan)</span>
                  ) : (
                    <span className="text-slate-400">Paid Only</span>
                  )}
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-6 font-medium text-slate-500">Overall Rating</td>
                <td className="py-3 px-6 font-bold text-slate-900">
                  {toolA.rating} / 5.0 ({toolA.reviewCount.toLocaleString()} reviews)
                </td>
                <td className="py-3 px-6 font-bold text-slate-900">
                  {toolB.rating} / 5.0 ({toolB.reviewCount.toLocaleString()} reviews)
                </td>
              </tr>

              {/* Lab Scores */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-6 font-medium text-slate-500">Usability Score</td>
                <td className="py-3 px-6 font-semibold">{toolA.editorialScore.usability} / 10</td>
                <td className="py-3 px-6 font-semibold">{toolB.editorialScore.usability} / 10</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-6 font-medium text-slate-500">Performance Speed</td>
                <td className="py-3 px-6 font-semibold">{toolA.editorialScore.speed} / 10</td>
                <td className="py-3 px-6 font-semibold">{toolB.editorialScore.speed} / 10</td>
              </tr>

              {/* Dynamic Specs */}
              {allSpecKeys.map((key) => (
                <tr key={key} className="hover:bg-slate-50/50">
                  <td className="py-3 px-6 font-medium text-slate-500">{key}</td>
                  <td className="py-3 px-6 text-slate-800">{toolA.specs[key] || '—'}</td>
                  <td className="py-3 px-6 text-slate-800">{toolB.specs[key] || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
