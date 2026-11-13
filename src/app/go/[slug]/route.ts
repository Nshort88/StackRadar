import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    // If invalid slug, redirect back to home
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Target destination URL (can append sub-IDs, tracking campaign, or date)
  const targetUrl = product.affiliateUrl;

  // Optional: In a production setup, you can log this click to Supabase or Cloudflare analytics
  // console.log(`[Affiliate Click] ${slug} at ${new Date().toISOString()}`);

  // HTTP 307 Temporary Redirect with proper anti-crawl & affiliate headers
  return NextResponse.redirect(targetUrl, {
    status: 307,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
