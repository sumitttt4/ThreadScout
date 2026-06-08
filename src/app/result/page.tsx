'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Download, RotateCcw, Clock, Target, TrendingUp, AlertTriangle, FileText, MessageCircle, Calendar, Shield, Printer
} from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { CopyButton } from '@/components/CopyButton';
import { getCurrentCampaign, getCampaignById } from '@/lib/storage';
import type { GeneratedCampaign } from '@/lib/types';

function exportTxt(c: GeneratedCampaign) {
  const text = `Campaign for ${c.input.productName}\n\nStrategy: ${c.strategy}\n\nSubreddits: ${c.subreddits.map(s => s.name).join(', ')}`;
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${c.input.productName.toLowerCase().replace(/\s+/g, '-')}-campaign.txt`;
  a.click();
}

function Section({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="report-container" style={{ padding: '32px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
        <Icon size={22} style={{ color: 'var(--accent)' }} />
        <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{title}</h3>
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

  if (!campaign) return <div style={{ padding: '120px', textAlign: 'center', color: 'var(--fg-muted)' }}>Loading...</div>;
  const c = campaign;

  return (
    <div className="container" style={{ padding: '64px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-label">Campaign Brief</span>
        <h1 style={{ fontSize: '2.5rem', marginTop: '12px' }}>Your 7-Day Reddit Campaign</h1>
        <p className="section-paragraph" style={{ marginTop: '12px' }}>
          Custom {c.campaignType} strategy for {c.input.productName}.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }} className="no-print">
          <button onClick={() => window.print()} className="btn btn-secondary"><Printer size={16} /> Print / PDF</button>
          <button onClick={() => exportTxt(c)} className="btn btn-secondary"><Download size={16} /> Export TXT</button>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          <div className="report-metric-box">
            <div className="report-metric-label">Goal</div>
            <div className="report-metric-value" style={{ fontSize: '1.05rem' }}>{c.input.goal}</div>
          </div>
          <div className="report-metric-box">
            <div className="report-metric-label">Type</div>
            <div className="report-metric-value" style={{ fontSize: '1.05rem', color: 'var(--accent)' }}>{c.campaignType}</div>
          </div>
          <div className="report-metric-box">
            <div className="report-metric-label">Risk</div>
            <div className="report-metric-value" style={{ fontSize: '1.05rem' }}>{c.riskLevel}</div>
          </div>
          <div className="report-metric-box">
            <div className="report-metric-label">First Post</div>
            <div className="report-metric-value" style={{ fontSize: '1.05rem' }}>{c.firstPostRecommendation}</div>
          </div>
        </div>

        {/* 1. Strategy */}
        <Section title="1. Campaign Strategy" icon={TrendingUp}>
          <p style={{ marginBottom: '12px' }}><strong style={{ color: 'var(--fg)' }}>Audience Summary:</strong> {c.audienceSummary}</p>
          <p style={{ marginBottom: '12px' }}><strong style={{ color: 'var(--fg)' }}>Positioning Angle:</strong> {c.positioningAngle}</p>
          <p><strong style={{ color: 'var(--fg)' }}>Why this fits:</strong> {c.strategy}</p>
        </Section>

        {/* 2. Subreddits */}
        <Section title="2. Recommended Subreddits" icon={Target}>
          <div style={{ overflowX: 'auto' }}>
            <table className="tracker-table" style={{ width: '100%', minWidth: '600px' }}>
              <thead><tr><th>Name</th><th>Fit Reason</th><th>Risk</th><th>Best Style</th><th>Avoid</th></tr></thead>
              <tbody>
                {c.subreddits.map(s => (
                  <tr key={s.name}>
                    <td style={{ fontWeight: 700, color: 'var(--accent)' }}>{s.name}</td>
                    <td>{s.fitReason}</td>
                    <td>{s.promotionRisk}</td>
                    <td>{s.bestPostStyle}</td>
                    <td style={{ color: 'var(--fg-muted)' }}>{s.whatToAvoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* 3. Post Titles */}
        <Section title="3. Post Titles" icon={FileText}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {c.postTitles.map((title, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontWeight: 500 }}>{title}</span>
                <CopyButton text={title} />
              </div>
            ))}
          </div>
        </Section>

        {/* 4. Full Post Drafts */}
        <Section title="4. Full Post Drafts" icon={FileText}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {c.postDrafts.map((draft, i) => (
              <div key={i} style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--bg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--fg)' }}>{draft.label} ({draft.subreddit})</strong>
                  <CopyButton text={draft.title + '\n\n' + draft.body} />
                </div>
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>{draft.title}</h4>
                <p style={{ whiteSpace: 'pre-wrap', color: 'var(--fg-muted)' }}>{draft.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Reply Templates */}
        <Section title="5. Reply Templates" icon={MessageCircle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {c.replyTemplates.map((r, i) => (
              <div key={i} style={{ padding: '16px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r.category}</strong>
                  <CopyButton text={r.reply} />
                </div>
                <p style={{ color: 'var(--fg-muted)' }}>{r.reply}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Soft CTAs */}
        <Section title="6. Soft CTAs" icon={MessageCircle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {c.softCtas.map((cta, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg)' }}>
                <span>{cta}</span>
                <CopyButton text={cta} />
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Mistakes to Avoid */}
        <Section title="7. Mistakes to Avoid" icon={AlertTriangle}>
          <ul style={{ paddingLeft: '20px', color: '#b91c1c', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {c.mistakesToAvoid.map((m, i) => <li key={i} style={{ fontSize: '0.98rem' }}>{m}</li>)}
          </ul>
        </Section>

        {/* 8. 7-Day Plan */}
        <Section title="8. 7-Day Plan" icon={Calendar}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {c.dayPlan.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '16px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, background: 'var(--accent)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>{d.day}</div>
                <div>
                  <strong style={{ color: 'var(--fg)' }}>{d.label}</strong>
                  <p style={{ marginTop: '4px', fontSize: '0.95rem' }}>{d.task}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 9. Tracker */}
        <Section title="9. Tracker" icon={TrendingUp}>
          <div style={{ overflowX: 'auto' }}>
            <table className="tracker-table" style={{ width: '100%', minWidth: '600px' }}>
              <thead><tr><th>Post</th><th>Subreddit</th><th>Status</th><th>Views</th><th>Comments</th><th>Signups</th></tr></thead>
              <tbody>
                {c.trackerRows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500 }}>{r.title}</td>
                    <td>{r.subreddit}</td>
                    <td><span className="status-badge status-watching">{r.status}</span></td>
                    <td>{r.views}</td>
                    <td>{r.comments}</td>
                    <td>{r.signups}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* 10. Copy Brief */}
        <Section title="10. Copy Campaign Brief" icon={FileText}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
            <CopyButton text={c.fullBriefText} label="Copy Full Brief" />
          </div>
          <pre style={{ padding: '24px', background: 'var(--fg)', color: 'var(--bg)', borderRadius: 'var(--radius-md)', whiteSpace: 'pre-wrap', fontSize: '0.85rem', overflowX: 'auto' }}>
            {c.fullBriefText}
          </pre>
        </Section>

        {/* Upgrade Blocks - Linear/Resend style: one highlighted, other muted */}
        <div className="no-print" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '64px' }}>
          <div className="pricing-card highlighted" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <span className="price-badge" style={{ color: 'white' }}>Upgrade Brief</span>
            <h3 style={{ marginBottom: '12px' }}>Unlock full Launch Pack</h3>
            <p style={{ marginBottom: '24px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>Get the full 7-day schedule, 6+ subreddits, and all drafts.</p>
            <Link href="/checkout?plan=launch-pack" className="btn btn-primary" style={{ width: '100%' }}>Get Launch Pack — $29</Link>
          </div>
          <div className="pricing-card" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <span className="price-badge">Manual Review</span>
            <h3 style={{ marginBottom: '12px' }}>Founder Review</h3>
            <p className="price-desc" style={{ marginBottom: '24px', fontSize: '0.95rem' }}>Get a manual expert review of your Reddit angles & comments.</p>
            <Link href="/checkout?plan=founder-review" className="btn btn-secondary" style={{ width: '100%' }}>Get reviewed — $49</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div style={{ padding: '120px', textAlign: 'center', color: 'var(--fg-muted)' }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
