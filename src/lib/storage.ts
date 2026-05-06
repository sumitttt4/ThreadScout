import type { CampaignInput, GeneratedCampaign } from './types';

const DRAFT_KEY = 'threadscout_draft';
const CAMPAIGNS_KEY = 'threadscout_campaigns';
const CURRENT_KEY = 'threadscout_current';

/* ─── Draft (in-progress form data) ─── */

export function saveDraft(data: Partial<CampaignInput>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
}

export function loadDraft(): Partial<CampaignInput> | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearDraft() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(DRAFT_KEY);
}

/* ─── Current campaign (just generated) ─── */

export function setCurrentCampaign(campaign: GeneratedCampaign) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CURRENT_KEY, JSON.stringify(campaign));
}

export function getCurrentCampaign(): GeneratedCampaign | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(CURRENT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/* ─── Campaign history ─── */

export function saveCampaign(campaign: GeneratedCampaign) {
  if (typeof window === 'undefined') return;
  const existing = getAllCampaigns();
  // Prevent duplicates
  const filtered = existing.filter((c) => c.id !== campaign.id);
  filtered.unshift(campaign);
  // Keep last 50
  const trimmed = filtered.slice(0, 50);
  localStorage.setItem(CAMPAIGNS_KEY, JSON.stringify(trimmed));
}

export function getAllCampaigns(): GeneratedCampaign[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(CAMPAIGNS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function getCampaignById(id: string): GeneratedCampaign | null {
  const campaigns = getAllCampaigns();
  return campaigns.find((c) => c.id === id) || null;
}

export function deleteCampaign(id: string) {
  if (typeof window === 'undefined') return;
  const campaigns = getAllCampaigns().filter((c) => c.id !== id);
  localStorage.setItem(CAMPAIGNS_KEY, JSON.stringify(campaigns));
}
