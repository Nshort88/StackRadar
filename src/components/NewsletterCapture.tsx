'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const NewsletterCapture = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'You are on the VIP deals list!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div id="newsletter" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-indigo-900 to-slate-950 p-8 sm:p-12 text-white shadow-xl">
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-2xl mx-auto text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full border border-brand-500/30">
          <Sparkles size={12} className="text-amber-400" />
          Weekly Software Deals Digest
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Never pay full price for software again.
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
          Get exclusive founder discount codes, Black Friday early access, and unbiased head-to-head performance benchmarks every Tuesday. Zero spam, unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-semibold animate-in fade-in">
            <CheckCircle2 size={18} />
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full pl-10 pr-4 py-3 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/15 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-3 text-sm font-bold bg-white text-slate-950 hover:bg-slate-100 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : 'Get Deals'}
              <Send size={14} />
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-xs text-rose-400">{message}</p>
        )}

        <p className="text-[11px] text-slate-400">
          Join 8,400+ developers, marketers, and startup founders saving thousands monthly.
        </p>
      </div>
    </div>
  );
};
