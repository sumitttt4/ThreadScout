/* ─── Shared Types ─── */

export interface CampaignInput {
  productName: string;
  productUrl?: string;
  oneLiner: string;
  description?: string;
  category: string;
  audience: string;
  stage: 'idea' | 'mvp' | 'launched' | 'has-users' | 'has-revenue';
  goal: 'feedback' | 'beta-users' | 'traffic' | 'customers' | 'waitlist' | 'affiliates';
  painPoint?: string;
  proof?: string;
  founderAngle: 'building-in-public' | 'revenue-story' | 'lessons-learned' | 'free-help' | 'product-feedback';
  tone: 'helpful' | 'honest' | 'founder-story' | 'technical' | 'spicy';
  email: string;
}

export interface SubredditTarget {
  name: string;
  fitReason: string;
  promotionRisk: 'Low' | 'Medium' | 'High';
  bestPostStyle: string;
  whatToAvoid: string;
  suggestedTitle: string;
}

export interface PostDraft {
  label: string;
  subreddit: string;
  title: string;
  body: string;
  softCta: string;
}

export interface ReplyTemplate {
  category: 'helpful' | 'soft-cta' | 'link-request' | 'negative' | 'follow-up';
  scenario: string;
  reply: string;
}

export interface DayAction {
  day: number;
  label: string;
  task: string;
  subreddit?: string;
}

export interface RiskNote {
  rule: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

export interface TrackerRow {
  title: string;
  subreddit: string;
  status: 'planned' | 'posted' | 'watching';
  views: string;
  comments: string;
  clicks: string;
  signups: string;
}

export interface GeneratedCampaign {
  id: string;
  createdAt: string;
  input: CampaignInput;
  campaignType: string;
  campaignReason: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  firstPostRecommendation: string;
  audienceSummary: string;
  positioningAngle: string;
  strategy: string;
  subreddits: SubredditTarget[];
  postTitles: string[];
  postDrafts: PostDraft[];
  replyTemplates: ReplyTemplate[];
  softCtas: string[];
  mistakesToAvoid: string[];
  dayPlan: DayAction[];
  riskNotes: RiskNote[];
  trackerRows: TrackerRow[];
  fullBriefText: string;
}

export interface StoredCampaigns {
  campaigns: GeneratedCampaign[];
}
