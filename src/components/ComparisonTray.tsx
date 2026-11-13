'use client';

import React from 'react';
import Link from 'next/link';
import { Scale, X, ArrowRight } from 'lucide-react';
import { Product } from '@/data/products';

interface ComparisonTrayProps {
  selectedProducts: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
}

export const ComparisonTray: React.FC<ComparisonTrayProps> = ({
  selectedProducts,
  onRemove,
  onClear,
}) => {
  if (selectedProducts.length === 0) return null;

  const compareUrl =
    selectedProducts.length >= 2
      ? `/compare/${selectedProducts[0].slug}-vs-${selectedProducts[1].slug}`
      : `/compare`;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shrink-0">
            <Scale size={20} />
          </div>
          <div>
            <div className="text-xs font-medium text-slate-400">
              Comparing Tools ({selectedProducts.length}/2)
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              {selectedProducts.map((p) => (
                <span
                  key={p.id}
                  className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-800 text-slate-200 px-2 py-0.5 rounded-md border border-slate-700"
                >
                  {p.name}
                  <button
                    onClick={() => onRemove(p.id)}
                    className="hover:text-rose-400"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
              {selectedProducts.length === 1 && (
                <span className="text-xs text-slate-500 italic">
                  Select 1 more tool...
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClear}
            className="text-xs text-slate-400 hover:text-white px-2 py-1"
          >
            Clear
          </button>

          {selectedProducts.length >= 2 ? (
            <Link
              href={compareUrl}
              className="text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white px-3.5 py-2 rounded-xl flex items-center gap-1 shadow-md shadow-brand-500/30 transition-all"
            >
              Compare <ArrowRight size={13} />
            </Link>
          ) : (
            <button
              disabled
              className="text-xs font-semibold bg-slate-800 text-slate-500 px-3 py-2 rounded-xl cursor-not-allowed"
            >
              Pick 2nd
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
