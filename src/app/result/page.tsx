'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Download, RotateCcw, Clock, Target, TrendingUp, AlertTriangle, FileText, MessageCircle, Calendar, Shield, Printer
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { CopyButton } from '@/components/CopyButton';
import { getCurrentCampaign, getCampaignById } from '@/lib/storage';
import type { GeneratedCampaign } from '@/lib/types';

function exportTxt(c: GeneratedCampaign) {
  const text = `Campaign for ${c.input.productName}\n\nStrategy: ${c.strategy}\n\nSubreddits: ${c.subreddits.map(s => s.name).join(', ')}`;
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${c.input.productName.toLowerCase().replace(/\\s+/g, '-')}-campaign.txt`;
  a.click();
}

function Section({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="report-card" style={{ padding: '32px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-soft)', paddingBottom: '16px' }}>
        <Icon size={24} className="text-orange" />
        <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ResultContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get('id');
  const [campaign, setCampaign] = useState<GeneratedCampaign | null>(null);

  useEffect(() => {
    let c = idParam ? getCampaignById(idParam) : getCurrentCampaign();
    setCampaign(c);
  }, [idParam]);

  if (!campaign) return <div style={{ padding: '120px', textAlign: 'center' }}>Loading...</div>;
  const c = campaign;

  return (
    <div className="page-wrapper" style={{ padding: '64px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Your 7-Day Reddit Campaign</h1>
        <p className="text-slate" style={{ fontSize: '1.1rem', marginTop: '16px' }}>
          Custom {c.campaignType} strategy for {c.input.productName}.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }} className="no-print">
          <button onClick={() => window.print()} className="btn btn-secondary"><Printer size={16} /> Print / PDF</button>
          <button onClick={() => exportTxt(c)} className="btn btn-secondary"><Download size={16} /> Export TXT</button>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          <div className="metric-box" style={{ background: 'white' }}>
            <div className="metric-label">Goal</div>
            <div className="metric-val" style={{ fontSize: '1.1rem' }}>{c.input.goal}</div>
          </div>
          <div className="metric-box" style={{ background: 'white' }}>
            <div className="metric-label">Type</div>
            <div className="metric-val" style={{ fontSize: '1.1rem', color: 'var(--orange-primary)' }}>{c.campaignType}</div>
          </div>
          <div className="metric-box" style={{ background: 'white' }}>
            <div className="metric-label">Risk</div>
            <div className="metric-val" style={{ fontSize: '1.1rem' }}>{c.riskLevel}</div>
          </div>
          <div className="metric-box" style={{ background: 'white' }}>
            <div className="metric-label">First Post</div>
            <div className="metric-val" style={{ fontSize: '1.1rem' }}>{c.firstPostRecommendation}</div>
          </div>
        </div>

        {/* 1. Strategy */}
        <Section title="1. Campaign Strategy" icon={TrendingUp}>
          <p><strong>Audience Summary:</strong> {c.audienceSummary}</p>
          <p><strong>Positioning Angle:</strong> {c.positioningAngle}</p>
          <p><strong>Why this fits:</strong> {c.strategy}</p>
        </Section>

        {/* 2. Subreddits */}
        <Section title="2. Recommended Subreddits" icon={Target}>
          <table className="tracker-table" style={{ width: '100%' }}>
            <thead><tr><th>Name</th><th>Fit Reason</th><th>Risk</th><th>Best Style</th><th>Avoid</th></tr></thead>
            <tbody>
              {c.subreddits.map(s => (
                <tr key={s.name}>
                  <td style={{ fontWeight: 600, color: 'var(--orange-primary)' }}>{s.name}</td>
                  <td>{s.fitReason}</td>
                  <td>{s.promotionRisk}</td>
                  <td>{s.bestPostStyle}</td>
                  <td className="text-muted">{s.whatToAvoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* 3. Post Titles */}
        <Section title="3. Post Titles" icon={FileText}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {c.postTitles.map((title, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                <span>{title}</span>
                <CopyButton text={title} />
              </div>
            ))}
          </div>
        </Section>

        {/* 4. Full Post Drafts */}
        <Section title="4. Full Post Drafts" icon={FileText}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {c.postDrafts.map((draft, i) => (
              <div key={i} style={{ padding: '24px', border: '1px solid var(--border-gray)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <strong>{draft.label} ({draft.subreddit})</strong>
                  <CopyButton text={draft.title + '\\n\\n' + draft.body} />
                </div>
                <h4 style={{ marginBottom: '12px' }}>{draft.title}</h4>
                <p style={{ whiteSpace: 'pre-wrap', color: 'var(--text-slate)' }}>{draft.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Reply Templates */}
        <Section title="5. Reply Templates" icon={MessageCircle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {c.replyTemplates.map((r, i) => (
              <div key={i} style={{ padding: '16px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--orange-primary)', textTransform: 'uppercase' }}>{r.category}</strong>
                  <CopyButton text={r.reply} />
                </div>
                <p className="text-slate">{r.reply}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Soft CTAs */}
        <Section title="6. Soft CTAs" icon={MessageCircle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {c.softCtas.map((cta, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-sm)' }}>
                <span>{cta}</span>
                <CopyButton text={cta} />
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Mistakes to Avoid */}
        <Section title="7. Mistakes to Avoid" icon={AlertTriangle}>
          <ul style={{ paddingLeft: '20px', color: 'var(--risk)' }}>
            {c.mistakesToAvoid.map((m, i) => <li key={i} style={{ marginBottom: '8px' }}>{m}</li>)}
          </ul>
        </Section>

        {/* 8. 7-Day Plan */}
        <Section title="8. 7-Day Plan" icon={Calendar}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {c.dayPlan.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '16px', background: 'var(--bg-surface)' }}>
                <div style={{ width: 40, height: 40, background: 'var(--orange-primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{d.day}</div>
                <div>
                  <strong>{d.label}</strong>
                  <p className="text-slate" style={{ marginTop: '4px' }}>{d.task}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 9. Tracker */}
        <Section title="9. Tracker" icon={TrendingUp}>
          <table className="tracker-table" style={{ width: '100%' }}>
            <thead><tr><th>Post</th><th>Subreddit</th><th>Status</th><th>Views</th><th>Comments</th><th>Signups</th></tr></thead>
            <tbody>
              {c.trackerRows.map((r, i) => (
                <tr key={i}>
                  <td>{r.title}</td><td>{r.subreddit}</td>
                  <td><span className="status-badge status-watching">{r.status}</span></td>
                  <td>{r.views}</td><td>{r.comments}</td><td>{r.signups}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* 10. Copy Brief */}
        <Section title="10. Copy Campaign Brief" icon={FileText}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
            <CopyButton text={c.fullBriefText} label="Copy Full Brief" />
          </div>
          <pre style={{ padding: '24px', background: 'var(--ink)', color: 'white', borderRadius: 'var(--radius-md)', whiteSpace: 'pre-wrap', fontSize: '0.85rem' }}>
            {c.fullBriefText}
          </pre>
        </Section>

        {/* Upgrade Blocks */}
        <div className="no-print" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '64px' }}>
          <div className="report-card" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px' }}>Need more subreddits?</h3>
            <p className="text-slate" style={{ marginBottom: '24px' }}>Unlock the full subreddit map and 10 more drafts.</p>
            <Link href="/checkout?plan=launch-pack" className="btn btn-primary" style={{ width: '100%' }}>Get Launch Pack — $19</Link>
          </div>
          <div className="report-card" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px' }}>Want a pro review?</h3>
            <p className="text-slate" style={{ marginBottom: '24px' }}>Get a manual founder review of your specific product.</p>
            <Link href="/checkout?plan=founder-review" className="btn btn-secondary" style={{ width: '100%' }}>Get Founder Review — $49</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div style={{ padding: '120px', textAlign: 'center' }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
