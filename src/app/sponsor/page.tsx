import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  TrendingUp,
  Users,
  Eye,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sponsor Your Software & Reach 50,000+ Buyers | StackRadar',
  description: 'Get your SaaS or AI product in front of high-intent founders, developers, and agency decision-makers looking to purchase software.',
};

export default function SponsorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
          <DollarSign size={13} className="text-emerald-600" />
          Founder & Partner Placements
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Put Your Software in Front of Ready-to-Buy Decision Makers
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          StackRadar visitors are not casual browsers—they are comparing pricing, evaluating alternatives, and getting ready to subscribe.
        </p>
      </div>

      {/* Traffic & Audience Proof Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 text-center space-y-1 shadow-sm">
          <Eye size={24} className="mx-auto text-brand-600 mb-2" />
          <span className="text-3xl font-black text-slate-900 block">45,000+</span>
          <span className="text-xs text-slate-500 font-medium">Monthly High-Intent Pageviews</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 text-center space-y-1 shadow-sm">
          <Users size={24} className="mx-auto text-brand-600 mb-2" />
          <span className="text-3xl font-black text-slate-900 block">8,400+</span>
          <span className="text-xs text-slate-500 font-medium">Weekly Deals Newsletter Subscribers</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 text-center space-y-1 shadow-sm">
          <TrendingUp size={24} className="mx-auto text-brand-600 mb-2" />
          <span className="text-3xl font-black text-slate-900 block">12.4%</span>
          <span className="text-xs text-slate-500 font-medium">Average Outbound Click-Through Rate</span>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1: Fast-Track Listing */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Standard</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Fast-Track Listing</h3>
              <p className="text-xs text-slate-600 mt-1">Permanent indexing with a dedicated review page.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-900">$49</span>
              <span className="text-xs text-slate-400">one-time</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                Permanent dedicated review page
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                Direct dofollow backlink to your site
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                Indexed in search within 48 hours
              </li>
            </ul>
          </div>
          <a
            href="mailto:sponsor@stackradar.com?subject=Standard%20Tool%20Listing%20($49)"
            className="w-full mt-6 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-xl transition-colors text-center block"
          >
            Submit Tool ($49)
          </a>
        </div>

        {/* Tier 2: Featured Spotlight (Most Popular) */}
        <div className="bg-white rounded-3xl border-2 border-brand-500 p-6 flex flex-col justify-between shadow-xl relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
            Most Popular
          </span>
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Premium</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Featured Spotlight</h3>
              <p className="text-xs text-slate-600 mt-1">Pinned to the top of homepage & category page.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-900">$149</span>
              <span className="text-xs text-slate-400">/month</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
                All Standard listing perks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
                Pinned top-3 on Homepage grid
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
                Custom &quot;Featured&quot; or &quot;Verified&quot; golden badge
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
                1x Newsletter dedicated showcase blast
              </li>
            </ul>
          </div>
          <a
            href="mailto:sponsor@stackradar.com?subject=Featured%20Spotlight%20Placement%20($149/mo)"
            className="w-full mt-6 py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center block"
          >
            Claim Spotlight ($149/mo)
          </a>
        </div>

        {/* Tier 3: Category Takeover */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Exclusive</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Category Takeover</h3>
              <p className="text-xs text-slate-600 mt-1">Dominate your specific software category.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-900">$299</span>
              <span className="text-xs text-slate-400">/quarter</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                Exclusive #1 sticky slot in your category
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                Featured in all head-to-head comparisons
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                Quarterly performance click report
              </li>
            </ul>
          </div>
          <a
            href="mailto:sponsor@stackradar.com?subject=Category%20Takeover%20Inquiry%20($299)"
            className="w-full mt-6 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors text-center block"
          >
            Book Category ($299)
          </a>
        </div>
      </div>
    </div>
  );
}
