'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  showNumber?: boolean;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  showNumber = true,
  reviewCount,
  size = 'md',
}) => {
  const starSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;

  return (
    <div className="flex items-center gap-1.5 text-amber-500">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          const isFilled = i < fullStars || (i === fullStars && hasHalfStar);
          return (
            <Star
              key={i}
              size={starSize}
              className={isFilled ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
            />
          );
        })}
      </div>
      {showNumber && (
        <span className="font-semibold text-slate-800 text-xs">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className="text-slate-400 text-xs font-normal">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
};
