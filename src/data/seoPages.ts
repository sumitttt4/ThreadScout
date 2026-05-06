export type SeoPage = {
  slug: string;
  route: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  audience: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  sections: { title: string; content: string[] }[];
  examplePostTitles: string[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
  ctaTitle: string;
  ctaDescription: string;
  kind: 'money' | 'subreddit' | 'usecase' | 'compare' | 'story';
};

const baseSections = [
  {
    title: 'Practical advice',
    content: [
      'Start with a useful discussion post before links.',
      'Tailor your angle per subreddit rules and culture.',
      'Reply within the first 60 minutes after posting.',
    ],
  },
  {
    title: 'Common mistakes',
    content: [
      'Posting the same pitch everywhere.',
      'Dropping links without context.',
      'Ignoring comments after posting.',
    ],
  },
];

const mk = (route: string, kind: SeoPage['kind']): SeoPage => ({
  slug: route.split('/').filter(Boolean).pop() || 'home',
  route,
  title: route.slice(1).replaceAll('-', ' '),
  metaTitle: `${route.slice(1).replaceAll('-', ' ')} | ThreadScout`,
  metaDescription:
    'Value-first Reddit campaigns for SaaS founders. Plan where to post, what to say, and how to reply without spam.',
  h1: route.slice(1).replaceAll('-', ' '),
  intro:
    'This page gives a practical, founder-first playbook for Reddit campaigns that build trust before promotion.',
  audience: 'SaaS founders, indie hackers, and solo builders.',
  primaryKeyword: route.slice(1),
  secondaryKeywords: [
    'reddit marketing for saas',
    'value-first reddit strategy',
  ],
  sections: baseSections,
  examplePostTitles: [
    'Founder here—can I get feedback before launch?',
    'What would you change in this onboarding flow?',
    "Drop your startup, I'll share one growth idea.",
  ],
  faqs: [
    {
      q: 'Can I promote directly?',
      a: 'Lead with value first, then share your product when relevant.',
    },
    {
      q: 'Does ThreadScout auto-post?',
      a: 'No. ThreadScout is manual-first and does not automate Reddit actions.',
    },
  ],
  relatedLinks: [
    { label: 'Reddit marketing tool', href: '/reddit-marketing-tool' },
    {
      label: 'Reddit campaign generator',
      href: '/reddit-campaign-generator',
    },
  ],
  ctaTitle: 'Build your Reddit campaign in minutes.',
  ctaDescription:
    'Get subreddit ideas, post angles, reply templates, risk notes, and a 7-day plan for your SaaS.',
  kind,
});

export const seoPages: SeoPage[] = [
  ...[
    '/reddit-marketing-tool',
    '/reddit-marketing-for-saas',
    '/how-to-promote-your-saas-on-reddit',
    '/how-to-launch-a-product-on-reddit',
    '/how-to-get-customers-from-reddit',
    '/reddit-campaign-generator',
    '/reddit-post-generator-for-saas',
    '/reddit-self-promotion-guide',
    '/reddit-launch-checklist',
    '/reddit-growth-strategy',
  ].map((r) => mk(r, 'money')),
  ...[
    '/best-subreddits-for-saas-founders',
    '/best-subreddits-for-startups',
    '/best-subreddits-for-indie-hackers',
    '/best-subreddits-for-side-projects',
    '/best-subreddits-for-product-launches',
    '/best-subreddits-for-ai-startups',
    '/best-subreddits-for-landing-page-feedback',
    '/best-subreddits-for-entrepreneurs',
    '/best-subreddits-for-saas-feedback',
    '/best-subreddits-for-startup-feedback',
  ].map((r) => mk(r, 'subreddit')),
  ...[
    '/use-cases/get-beta-users-from-reddit',
    '/use-cases/get-feedback-from-reddit',
    '/use-cases/launch-saas-on-reddit',
    '/use-cases/find-saas-customers-on-reddit',
    '/use-cases/validate-startup-idea-on-reddit',
    '/use-cases/get-waitlist-users-from-reddit',
    '/use-cases/reddit-for-founder-led-growth',
    '/use-cases/reddit-for-indie-hackers',
  ].map((r) => mk(r, 'usecase')),
  ...[
    '/compare/mediafast-alternative',
    '/compare/replydaddy-alternative',
    '/compare/threadscout-vs-mediafast',
    '/compare/threadscout-vs-replydaddy',
    '/alternatives/best-reddit-marketing-tools',
  ].map((r) => mk(r, 'compare')),
  mk('/story/how-i-got-reddit-views-without-spamming', 'story'),
];

export const subredditRows = [
  ['r/SaaS', 'B2B SaaS feedback', 'Medium', 'Founder story + lessons', 'Direct promo in title', 'Founder here—can I get feedback on onboarding?'],
  ['r/SideProject', 'Early builds and launches', 'Medium', 'Build-in-public update', 'Copy-paste pitches', 'Shipping this week—what would you improve first?'],
  ['r/micro_saas', 'Bootstrapped SaaS', 'Low-Medium', 'Transparent milestone post', 'Aggressive CTA', 'What pricing model would you test first?'],
  ['r/startups', 'Go-to-market discussion', 'Medium', 'Ask-first strategy thread', 'No context self-promo', 'What channel worked best for your first 100 users?'],
  ['r/Entrepreneur', 'General business ops', 'Medium', 'Story + request for critique', 'Overhype claims', 'What is wrong with this offer positioning?'],
  ['r/EntrepreneurRideAlong', 'Execution logs', 'Medium', 'Weekly progress recap', 'Vanity metrics only', 'Week 2 update: what should I fix next?'],
  ['r/IndieHackers', 'Indie founder audience', 'Low-Medium', 'Build log + insights', 'Hard selling', 'Built this for solopreneurs—does this pain feel real?'],
  ['r/ProductManagement', 'Product feedback', 'Low-Medium', 'Problem framing post', 'Salesy language', 'PMs: where does this onboarding break?'],
  ['r/webdev', 'Developer audience', 'Medium', 'Technical problem/solution', 'Marketing spin', 'Dev feedback: is this UX too confusing?'],
  ['r/design_critiques', 'Design reviews', 'Low', 'Before/after critique request', 'Dropping unrelated links', 'Which hero communicates value better?'],
  ['r/landingpage', 'Landing page feedback', 'Medium', 'Roast my page', 'No clear ask', 'What one change would improve conversion?'],
  ['r/marketing', 'Distribution strategy', 'Medium', 'Channel experiment post', 'Bold unverified claims', 'Tried Reddit as a channel—what would you test next?'],
  ['r/smallbusiness', 'Small business growth', 'Medium', 'Founder challenge post', 'Irrelevant SaaS jargon', 'How would you position this to non-technical buyers?'],
  ['r/artificial', 'AI tool audience', 'Medium', 'Use-case exploration', 'AI hype spam', 'Is this AI workflow useful or gimmicky?'],
  ['r/LocalLLaMA', 'LLM-native users', 'Low-Medium', 'Technical breakdown', 'Shallow copy', 'Would this model stack handle this use case?'],
  ['r/AI_Agents', 'Agent builders', 'Medium', 'Agent workflow post', 'Vague promise', 'What agent workflow should I validate first?'],
];

export const sitemapRoutes = seoPages.map((p) => p.route);
