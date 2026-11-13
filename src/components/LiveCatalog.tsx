'use client';

import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from './ProductCard';
import { ComparisonTray } from './ComparisonTray';

interface LiveCatalogProps {
  products: Product[];
  initialCategory?: string;
}

export const LiveCatalog: React.FC<LiveCatalogProps> = ({
  products,
  initialCategory = 'all',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [pricingFilter, setPricingFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'price-asc'>('rating');
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);

  // Toggle tool into comparison list (max 2)
  const handleToggleCompare = (product: Product) => {
    setComparedProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 2) {
        // Replace the 2nd one
        return [prev[0], product];
      }
      return [...prev, product];
    });
  };

  const handleRemoveCompare = (productId: string) => {
    setComparedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearCompare = () => {
    setComparedProducts([]);
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }

        // Pricing filter
        if (pricingFilter === 'free' && !p.pricing.freeTier) {
          return false;
        }
        if (pricingFilter === 'paid' && p.pricing.freeTier) {
          return false;
        }

        // Search query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchesName = p.name.toLowerCase().includes(q);
          const matchesTagline = p.tagline.toLowerCase().includes(q);
          const matchesTags = p.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchesName && !matchesTagline && !matchesTags) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
        if (sortBy === 'price-asc') {
          const numA = parseFloat(a.pricing.startingPrice.replace(/[^0-9.]/g, '')) || 0;
          const numB = parseFloat(b.pricing.startingPrice.replace(/[^0-9.]/g, '')) || 0;
          return numA - numB;
        }
        return 0;
      });
  }, [products, selectedCategory, pricingFilter, searchQuery, sortBy]);

  return (
    <div className="space-y-8">
      {/* Search & Quick Filters Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools by name, category, or feature (e.g. 'Postgres', 'SEO', 'AI Writing')..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all text-slate-900 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200/60 rounded px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Pricing Filter Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setPricingFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                pricingFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Pricing
            </button>
            <button
              onClick={() => setPricingFilter('free')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                pricingFilter === 'free'
                  ? 'bg-white text-emerald-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Free Tier Only
            </button>
            <button
              onClick={() => setPricingFilter('paid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                pricingFilter === 'paid'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Paid / Premium
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <ArrowUpDown size={15} className="text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="rating">Top Rated First</option>
              <option value="reviews">Most Reviewed</option>
              <option value="price-asc">Lowest Price First</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div id="categories" className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Categories ({products.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-brand-700 text-brand-100' : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>
          Showing <strong className="text-slate-800">{filteredProducts.length}</strong> verified software tools
        </span>
        {searchQuery && (
          <span>
            Filtering by &quot;{searchQuery}&quot;
          </span>
        )}
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isCompared={comparedProducts.some((p) => p.id === product.id)}
              onToggleCompare={handleToggleCompare}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <Filter size={32} className="mx-auto text-slate-300 mb-3" />
          <h3 className="text-base font-bold text-slate-800 mb-1">No matching tools found</h3>
          <p className="text-xs text-slate-500 mb-4">
            Try adjusting your search keywords or resetting the filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setPricingFilter('all');
            }}
            className="text-xs font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 px-3 py-2 rounded-lg transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Persistent Floating Comparison Tray */}
      <ComparisonTray
        selectedProducts={comparedProducts}
        onRemove={handleRemoveCompare}
        onClear={handleClearCompare}
      />
    </div>
  );
};
