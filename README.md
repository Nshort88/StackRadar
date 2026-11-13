# StackRadar — $0 Cost Software Affiliate & Comparison Engine

StackRadar is a production-ready, high-converting software comparison and affiliate hub built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It is designed to run completely on **$0/month free tier cloud infrastructure** while generating revenue through two distinct cashflow streams:

1. **High-Ticket SaaS Affiliate Commissions** (20%–50% recurring MRR per sale).
2. **Direct Founder Sponsorships & Fast-Track Listings** ($49–$299 one-time or monthly payments).

---

## 🚀 Quick Start (Run Locally)

```bash
cd /Users/nickolasshort/.gemini/antigravity/scratch/stackradar
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💰 How This Platform Makes Money

### Stream 1: Affiliate Commissions (Automatic)
* In `src/data/products.ts`, each software tool has an `affiliateUrl`.
* Visitors click **"Claim Deal"** or **"Visit Official Website"**, which routes through `/go/[slug]`.
* The server performs an instant HTTP 307 redirect with `rel="sponsored nofollow"` and anti-crawler headers (protecting your SEO).
* When a visitor purchases a subscription, you receive payout via the partner network.

**Commission Examples Included in the Default Catalog:**
* **Semrush:** $200 per new subscription sale.
* **Jasper AI:** 30% recurring monthly commission for life.
* **NordVPN:** 40%–100% of first month + 30% renewals.
* **Supabase / Vercel / Railway / Cursor:** Generous referral / usage credits.

### Stream 2: Direct Founder Sponsorships (Upfront Cash)
Software founders want exposure for their newly launched apps:
* **Fast-Track Listing ($49):** Guaranteed review published within 48 hours.
* **Featured Spotlight ($149/mo):** Pinned to the top of the homepage grid with a golden "Featured" badge.
* **Category Takeover ($299/quarter):** Exclusive sticky banner in a high-traffic category.

Founders can submit through the `/sponsor` page directly.

---

## ⚡ $0 Infrastructure Architecture

| Layer | Service | Monthly Cost | Free Tier Limits |
| :--- | :--- | :--- | :--- |
| **Hosting & CDN** | **Vercel** or **Cloudflare Pages** | **$0.00** | 100 GB bandwidth, unlimited deployments |
| **Data Engine** | Next.js SSG / Typed Collections | **$0.00** | Infinite reads, 0ms latency, no SQL bills |
| **SSL & DNS** | Cloudflare / Vercel SSL | **$0.00** | Automatic TLS certs & DDoS mitigation |
| **Lead Capture** | `/api/newsletter` + Resend / MailerLite | **$0.00** | Up to 1,000–3,000 free subscriber emails |
| **Payment Rail** | Stripe Payment Links | **$0.00** | Zero monthly fee; only 2.9% + 30¢ when you get paid |

---

## 📂 Key Code Structure

* `src/data/products.ts`: Add, remove, or edit software products, pricing, pros/cons, and affiliate tracking links.
* `src/data/categories.ts`: Software categories (AI, Hosting, SEO, VPN, Dev Tools).
* `src/data/comparisons.ts`: Head-to-head comparison pairings (e.g. Jasper vs Copy.ai).
* `src/app/go/[slug]/route.ts`: Smart affiliate link cloaker & click handler.
* `src/app/tool/[slug]/page.tsx`: Deep SEO review pages equipped with **Schema.org JSON-LD structured data** (causes Google to display star ratings in search snippets).
* `src/app/compare/[slug]/page.tsx`: Side-by-side spec & feature comparison tables.
* `src/app/sponsor/page.tsx`: Sponsor pricing and submission portal for SaaS founders.
* `src/components/LiveCatalog.tsx`: Instant client-side search, category filters, and comparison selection.

---

## 🌐 Deploy to Production in 2 Minutes ($0)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of StackRadar"
   # Create a repo on GitHub and push
   git remote add origin https://github.com/YOUR_USERNAME/stackradar.git
   git push -u origin main
   ```
2. **Deploy on Vercel**:
   * Go to [vercel.com](https://vercel.com) (free account).
   * Click **"Add New Project"** and select your `stackradar` repository.
   * Click **Deploy**. Your site will be live on a global CDN with free HTTPS in under 60 seconds.
