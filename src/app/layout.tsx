import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'StackRadar — The Independent Software Benchmark & Comparison Platform',
  description: 'Unbiased software comparisons, pricing breakdowns, and verified promo codes for AI tools, cloud hosting, SEO suites, and developer productivity.',
  keywords: [
    'software comparison',
    'saas reviews',
    'ai tools',
    'software discounts',
    'hosting comparisons',
    'best developer tools',
  ],
  authors: [{ name: 'StackRadar Editorial Team' }],
  metadataBase: new URL('https://stackradar.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stackradar.com',
    siteName: 'StackRadar',
    title: 'StackRadar — Smart Software Decisions, Zero Guesswork',
    description: 'Compare software platforms side-by-side with verified benchmark data, honest pros/cons, and exclusive discount codes.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
