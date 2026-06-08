'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { LoadingScreen } from '@/components/LoadingScreen';
import { saveDraft, loadDraft, clearDraft, setCurrentCampaign, saveCampaign } from '@/lib/storage';
import { generateCampaign } from '@/lib/campaignGenerator';
import type { CampaignInput } from '@/lib/types';

export default function GeneratePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const [input, setInput] = useState<Partial<CampaignInput>>({
    productName: '', productUrl: '', oneLiner: '', description: '', category: '',
    audience: '', stage: 'idea', goal: 'feedback', painPoint: '',
    proof: '', founderAngle: 'building-in-public', tone: 'helpful', email: ''
  });

  useEffect(() => {
    const draft = loadDraft();
    if (draft) setInput(prev => ({ ...prev, ...draft }));
  }, []);

  const saveCurrentDraft = useCallback(() => {
    saveDraft(input);
  }, [input]);

  useEffect(() => {
    const timeout = setTimeout(saveCurrentDraft, 500);
    return () => clearTimeout(timeout);
  }, [saveCurrentDraft]);

  const updateInput = (key: keyof CampaignInput, value: string) => {
    setInput(prev => ({ ...prev, [key]: value }));
  };

  const isStep1Valid = !!(input.productName && input.oneLiner);
  const isStep2Valid = !!(input.audience && input.goal);
  const isStep3Valid = !!(input.email);

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep3Valid) return;

    setIsGenerating(true);
    setError('');

    try {
      const campaign = generateCampaign(input as CampaignInput);
      setCurrentCampaign(campaign);
      saveCampaign(campaign);
      clearDraft();

      await new Promise((r) => setTimeout(r, 2000)); // Simulate loading
      router.push(`/result?id=${campaign.id}`);
    } catch (err: any) {
      setIsGenerating(false);
      setError(err.message || 'Generation failed');
    }
  };

  if (isGenerating) return <LoadingScreen productName={input.productName || 'your product'} />;

  return (
    <div className="container" style={{ padding: '64px 24px' }}>
      <FadeIn className="section-header" style={{ marginBottom: '48px' }}>
        <h2>Build your campaign</h2>
        <p>Tell us what you're building, and we'll generate your custom Reddit strategy.</p>
      </FadeIn>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <FadeIn className="form-card" style={{ padding: '40px' }}>
          
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ flex: 1, height: '4px', borderRadius: '2px', background: s <= step ? 'var(--accent)' : 'var(--border)' }} />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span className="text-muted" style={{ fontWeight: 500 }}>Step {step} of 3</span>
            {step > 1 && <button onClick={prevStep} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', fontWeight: 500 }}>← Back</button>}
          </div>

          {error && (
            <div className="report-mistake" style={{ marginBottom: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <AlertTriangle size={16} /> {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <h3>1. Product Details</h3>
                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label>Product Name *</label>
                  <input type="text" className="form-input" value={input.productName || ''} onChange={e => updateInput('productName', e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>One-line Description *</label>
                  <input type="text" className="form-input" value={input.oneLiner || ''} onChange={e => updateInput('oneLiner', e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Longer Description (What does it do?)</label>
                  <textarea className="form-input" value={input.description || ''} onChange={e => updateInput('description', e.target.value)} rows={3} />
                </div>
                <div className="form-group">
                  <label>Product URL</label>
                  <input type="url" className="form-input" value={input.productUrl || ''} onChange={e => updateInput('productUrl', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input type="text" className="form-input" placeholder="e.g. Developer Tool, AI, Marketing" value={input.category || ''} onChange={e => updateInput('category', e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }} onClick={nextStep} disabled={!isStep1Valid}>
                  Next: Audience & Goal <ArrowRight size={16} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3>2. Audience and Goal</h3>
                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label>Target Customer *</label>
                  <input type="text" className="form-input" value={input.audience || ''} onChange={e => updateInput('audience', e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Product Stage</label>
                  <select className="form-input" value={input.stage || 'idea'} onChange={e => updateInput('stage', e.target.value as any)}>
                    <option value="idea">Idea</option>
                    <option value="mvp">MVP</option>
                    <option value="launched">Launched</option>
                    <option value="has-users">Has Users</option>
                    <option value="has-revenue">Has Revenue</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Main Goal *</label>
                  <select className="form-input" value={input.goal || 'feedback'} onChange={e => updateInput('goal', e.target.value as any)}>
                    <option value="feedback">Feedback</option>
                    <option value="beta-users">Beta Users</option>
                    <option value="traffic">Traffic</option>
                    <option value="customers">Customers</option>
                    <option value="waitlist">Waitlist</option>
                    <option value="affiliates">Affiliates</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Primary Pain Point</label>
                  <input type="text" className="form-input" value={input.painPoint || ''} onChange={e => updateInput('painPoint', e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }} onClick={nextStep} disabled={!isStep2Valid}>
                  Next: Proof & Tone <ArrowRight size={16} />
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3>3. Proof & Tone</h3>
                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label>Proof or Milestone (optional)</label>
                  <input type="text" className="form-input" placeholder="e.g. $1k MRR, 500 users" value={input.proof || ''} onChange={e => updateInput('proof', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Founder Angle</label>
                  <select className="form-input" value={input.founderAngle || 'building-in-public'} onChange={e => updateInput('founderAngle', e.target.value as any)}>
                    <option value="building-in-public">Building in public</option>
                    <option value="revenue-story">Revenue story</option>
                    <option value="lessons-learned">Lessons learned</option>
                    <option value="free-help">Free help</option>
                    <option value="product-feedback">Product feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tone</label>
                  <select className="form-input" value={input.tone || 'helpful'} onChange={e => updateInput('tone', e.target.value as any)}>
                    <option value="helpful">Helpful</option>
                    <option value="honest">Honest</option>
                    <option value="founder-story">Founder Story</option>
                    <option value="technical">Technical</option>
                    <option value="spicy">Spicy</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Email *</label>
                  <input type="email" className="form-input" value={input.email || ''} onChange={e => updateInput('email', e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px', height: '52px', fontSize: '1.1rem' }} disabled={!isStep3Valid}>
                  Build my campaign <ArrowRight size={18} />
                </button>
              </div>
            )}
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
