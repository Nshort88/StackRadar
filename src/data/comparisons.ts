export interface ComparisonPair {
  slug: string;
  toolAId: string;
  toolBId: string;
  title: string;
  verdict: string;
  winnerId: string;
  summary: string;
}

export const COMPARISONS: ComparisonPair[] = [
  {
    slug: 'jasper-ai-vs-copy-ai',
    toolAId: 'jasper-ai',
    toolBId: 'copy-ai',
    title: 'Jasper AI vs Copy.ai (2026 Comparison): Which AI Writer Wins?',
    verdict: 'Jasper wins for structured brand voice & enterprise marketing campaigns, while Copy.ai wins for automated sales outreach and zero-cost free plan starters.',
    winnerId: 'jasper-ai',
    summary: 'Both Jasper and Copy.ai are market titans in generative content. If you are producing long-form SEO articles with SurferSEO integration or require strict brand voice guidelines across a team, Jasper is the superior investment. If your primary goal is automated SDR sales workflows, cold outbound prospecting, or you need a generous free tier, Copy.ai is the better fit.',
  },
  {
    slug: 'vercel-vs-railway',
    toolAId: 'vercel',
    toolBId: 'railway',
    title: 'Vercel vs Railway: Frontend Cloud vs Full-Stack Infrastructure',
    verdict: 'Vercel is undefeated for Next.js, Edge CDN, and frontend static assets. Railway is the champion for stateful backends, background worker daemons, and 1-click Postgres/Redis databases.',
    winnerId: 'vercel',
    summary: 'The choice between Vercel and Railway often comes down to architecture: use Vercel for your frontend presentation layer and serverless Next.js routes, and connect it to Railway for persistent background jobs, Docker containers, and long-running database servers.',
  },
  {
    slug: 'semrush-vs-surfer-seo',
    toolAId: 'semrush',
    toolBId: 'surfer-seo',
    title: 'Semrush vs Surfer SEO: Comprehensive Suite vs On-Page Content Specialist',
    verdict: 'Semrush is the complete all-in-one SEO and competitor intelligence platform. Surfer SEO is the focused specialist for writing and grading articles to rank on page 1.',
    winnerId: 'semrush',
    summary: 'These two tools actually complement each other: use Semrush to find high-volume, low-competition keywords and analyze what your rivals are ranking for; then import those keywords into Surfer SEO to write articles with exact NLP term guidelines.',
  },
];
