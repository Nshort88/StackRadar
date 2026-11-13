export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  count?: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'ai-tools',
    name: 'AI & Machine Learning',
    slug: 'ai-tools',
    description: 'Generative AI, writing assistants, voice synthesis, and autonomous agents.',
    icon: 'Sparkles',
  },
  {
    id: 'hosting-cloud',
    name: 'Cloud & Hosting',
    slug: 'hosting-cloud',
    description: 'Serverless deployment platforms, databases, and high-performance hosting.',
    icon: 'Server',
  },
  {
    id: 'marketing-seo',
    name: 'SEO & Marketing',
    slug: 'marketing-seo',
    description: 'Keyword research, backlinks, email marketing, and organic conversion growth.',
    icon: 'TrendingUp',
  },
  {
    id: 'security-vpn',
    name: 'VPN & Privacy',
    slug: 'security-vpn',
    description: 'Secure tunnels, encrypted vaults, password managers, and zero-trust tools.',
    icon: 'ShieldCheck',
  },
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    slug: 'developer-tools',
    description: 'AI code editors, Git workflows, issue trackers, and API development suites.',
    icon: 'Code2',
  },
];
