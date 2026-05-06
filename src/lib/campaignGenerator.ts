import type {
  CampaignInput,
  GeneratedCampaign,
  SubredditTarget,
  PostDraft,
  ReplyTemplate,
  DayAction,
  RiskNote,
  TrackerRow,
} from './types';

function generateId(): string {
  return `ts_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

const SUBREDDIT_POOL: SubredditTarget[] = [
  { name: 'r/SaaS', fitReason: 'B2B SaaS feedback', promotionRisk: 'Medium', bestPostStyle: 'Founder story', whatToAvoid: 'Promo', suggestedTitle: 'My SaaS journey' },
  { name: 'r/SideProject', fitReason: 'Early builds', promotionRisk: 'Medium', bestPostStyle: 'Build update', whatToAvoid: 'Pitches', suggestedTitle: 'Building my side project' },
  { name: 'r/micro_saas', fitReason: 'Bootstrapped SaaS', promotionRisk: 'Low', bestPostStyle: 'Milestone', whatToAvoid: 'Aggressive CTA', suggestedTitle: 'Hit my first milestone' },
  { name: 'r/startups', fitReason: 'Go-to-market', promotionRisk: 'Medium', bestPostStyle: 'Ask-first', whatToAvoid: 'Self-promo', suggestedTitle: 'Startup lessons' },
  { name: 'r/Entrepreneur', fitReason: 'General business', promotionRisk: 'Medium', bestPostStyle: 'Story', whatToAvoid: 'Hype', suggestedTitle: 'Entrepreneurial challenges' },
  { name: 'r/IndieHackers', fitReason: 'Indie founders', promotionRisk: 'Low', bestPostStyle: 'Build log', whatToAvoid: 'Hard selling', suggestedTitle: 'Indie hacking' },
  { name: 'r/ProductManagement', fitReason: 'Product feedback', promotionRisk: 'Low', bestPostStyle: 'Problem framing', whatToAvoid: 'Sales', suggestedTitle: 'PM advice' },
  { name: 'r/webdev', fitReason: 'Developer audience', promotionRisk: 'Medium', bestPostStyle: 'Technical', whatToAvoid: 'Marketing', suggestedTitle: 'Technical deep dive' },
  { name: 'r/design_critiques', fitReason: 'Design reviews', promotionRisk: 'Low', bestPostStyle: 'Critique request', whatToAvoid: 'Dropping links', suggestedTitle: 'Roast my design' },
  { name: 'r/landingpage', fitReason: 'Landing pages', promotionRisk: 'Medium', bestPostStyle: 'Roast my page', whatToAvoid: 'No ask', suggestedTitle: 'Landing page feedback' },
  { name: 'r/marketing', fitReason: 'Distribution', promotionRisk: 'Medium', bestPostStyle: 'Channel experiment', whatToAvoid: 'Unverified claims', suggestedTitle: 'Marketing test' },
  { name: 'r/artificial', fitReason: 'AI tools', promotionRisk: 'Medium', bestPostStyle: 'Use-case', whatToAvoid: 'AI hype', suggestedTitle: 'AI use cases' },
  { name: 'r/AI_Agents', fitReason: 'AI Agents', promotionRisk: 'Medium', bestPostStyle: 'Technical breakdown', whatToAvoid: 'Shallow copy', suggestedTitle: 'Building AI agents' },
  { name: 'r/LocalLLaMA', fitReason: 'LLM users', promotionRisk: 'Low', bestPostStyle: 'Technical breakdown', whatToAvoid: 'Shallow copy', suggestedTitle: 'LLM experiments' },
];

function selectSubreddits(input: CampaignInput): SubredditTarget[] {
  const lowered = `${input.category} ${input.audience} ${input.oneLiner}`.toLowerCase();
  
  const scored = SUBREDDIT_POOL.map((sub) => {
    let score = 0;
    const nameL = sub.name.toLowerCase();
    
    if (lowered.includes('ai') || lowered.includes('llm')) {
      if (nameL.includes('artificial') || nameL.includes('llama') || nameL.includes('ai_agents')) score += 3;
    }
    if (lowered.includes('design') || lowered.includes('brand')) {
      if (nameL.includes('design') || nameL.includes('landingpage')) score += 3;
    }
    if (lowered.includes('dev') || lowered.includes('code')) {
      if (nameL.includes('webdev')) score += 3;
    }
    if (lowered.includes('saas')) {
      if (nameL.includes('saas') || nameL.includes('startup')) score += 2;
    }
    if (lowered.includes('marketing')) {
      if (nameL.includes('marketing')) score += 3;
    }
    
    if (nameL.includes('sideproject') || nameL.includes('saas') || nameL.includes('startup')) score += 1;
    
    return { sub, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 6).map((s) => s.sub);
}

function buildTitles(input: CampaignInput): string[] {
  return [
    `I built ${input.productName} for ${input.audience.toLowerCase()} — roast it.`,
    `Been working on ${input.productName}. What would you change?`,
    `How I use ${input.productName} to solve ${input.painPoint || 'this problem'}.`,
    `Sharing the raw numbers behind my new tool, ${input.productName}.`,
    `Free audit for ${input.audience.toLowerCase()} — drop your project below.`
  ];
}

function buildDrafts(input: CampaignInput, subreddits: SubredditTarget[]): PostDraft[] {
  return [
    {
      label: 'Free Audit Post',
      subreddit: subreddits[0]?.name || 'r/SideProject',
      title: `Free help for ${input.audience.toLowerCase()} — drop your project below.`,
      body: `Hey everyone, I've been building ${input.productName} (${input.oneLiner}) and I want to test my assumptions.\n\nDrop your project in the comments and I'll give you free advice regarding ${input.painPoint || 'your setup'}.\n\nNo catch, just trying to learn.`,
      softCta: `I'm building ${input.productName} to automate this, happy to share early access if relevant.`
    },
    {
      label: 'Founder Lesson Post',
      subreddit: subreddits[1]?.name || 'r/SaaS',
      title: `What I learned building ${input.productName} for ${input.audience.toLowerCase()}.`,
      body: `I recently launched ${input.productName}. It's a tool for ${input.oneLiner}.\n\nHere are 3 things I learned:\n1. Building is easy, distribution is hard.\n2. Talk to users earlier.\n3. Focus on one niche.\n\nHappy to answer questions!`,
      softCta: `If you're interested, you can follow the journey.`
    },
    {
      label: 'Feedback Request',
      subreddit: subreddits[2]?.name || 'r/startups',
      title: `Roast my new tool for ${input.audience.toLowerCase()}.`,
      body: `I just built ${input.productName}. It solves ${input.painPoint || 'a big pain point'}.\n\nI need brutal honesty. What sucks about it? What would you change?\n\nLink in comments. I'll reply to everyone.`,
      softCta: `Looking for blunt feedback.`
    }
  ];
}

function buildReplies(input: CampaignInput): ReplyTemplate[] {
  const categories: ('helpful' | 'soft-cta' | 'link-request' | 'negative' | 'follow-up')[] = [
    'helpful', 'soft-cta', 'link-request', 'negative', 'follow-up'
  ];
  
  const replies: ReplyTemplate[] = [];
  
  for (let i = 0; i < 20; i++) {
    const category = categories[i % categories.length];
    replies.push({
      category,
      scenario: `Scenario ${i + 1} (${category})`,
      reply: `This is a generated reply for ${category} situations related to ${input.productName}. Let me know what you think!`
    });
  }
  
  return replies;
}

export function generateCampaign(input: CampaignInput): GeneratedCampaign {
  const subreddits = selectSubreddits(input);
  
  let campaignType = 'Value-First Launch';
  if (input.goal === 'feedback' || input.founderAngle === 'product-feedback') campaignType = 'Product Feedback';
  else if (input.founderAngle === 'free-help') campaignType = 'Free Audit';
  else if (input.founderAngle === 'revenue-story') campaignType = 'Founder Story';
  else if (input.goal === 'waitlist' || input.goal === 'beta-users') campaignType = 'Waitlist/Beta';
  else if (input.tone === 'spicy') campaignType = 'Roast/Feedback';

  return {
    id: generateId(),
    createdAt: new Date().toISOString(),
    input,
    campaignType,
    campaignReason: `Selected based on your goal of ${input.goal} and tone.`,
    riskLevel: 'Medium',
    firstPostRecommendation: 'Start with a free help post to build goodwill.',
    audienceSummary: `Targeting ${input.audience} with ${input.productName}.`,
    positioningAngle: `Positioning as a founder sharing lessons learned.`,
    strategy: `Your goal is ${input.goal}. We'll use a ${campaignType} strategy across ${subreddits.length} subreddits.`,
    subreddits,
    postTitles: buildTitles(input),
    postDrafts: buildDrafts(input, subreddits),
    replyTemplates: buildReplies(input),
    softCtas: [
      `I'm building ${input.productName} around this workflow.`,
      `If you need help with this, I'm building a tool to automate it.`,
      `Happy to share early access to ${input.productName} if it helps.`,
      `I'm solving this exact problem with ${input.productName}.`,
      `Let me know if you want to beta test ${input.productName}.`
    ],
    mistakesToAvoid: [
      'Do not start with a product link.',
      'Do not sound like an ad.',
      'Keep paragraphs short.',
      'No hype language.'
    ],
    dayPlan: [
      { day: 1, label: 'Scout', task: 'Browse target subreddits.' },
      { day: 2, label: 'First Post', task: 'Post Draft 1.' },
      { day: 3, label: 'Engage', task: 'Reply to all comments.' },
      { day: 4, label: 'Second Post', task: 'Post Draft 2.' },
      { day: 5, label: 'Expand', task: 'Comment on other posts.' },
      { day: 6, label: 'Third Post', task: 'Post Draft 3.' },
      { day: 7, label: 'Review', task: 'Analyze results.' }
    ],
    riskNotes: [
      { rule: 'No direct links', description: 'Reddit hates spam.', severity: 'high' }
    ],
    trackerRows: [
      { title: 'Draft 1', subreddit: subreddits[0]?.name || 'r/SideProject', status: 'planned', views: '-', comments: '-', clicks: '-', signups: '-' },
      { title: 'Draft 2', subreddit: subreddits[1]?.name || 'r/SaaS', status: 'planned', views: '-', comments: '-', clicks: '-', signups: '-' }
    ],
    fullBriefText: `Campaign brief for ${input.productName}...`
  };
}
