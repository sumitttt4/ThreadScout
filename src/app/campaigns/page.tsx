'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Trash2, Calendar, Target, FileText } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { getAllCampaigns, deleteCampaign } from '@/lib/storage';
import type { GeneratedCampaign } from '@/lib/types';

export default function DashboardPage() {
  const [campaigns, setCampaigns] = useState<GeneratedCampaign[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCampaigns(getAllCampaigns());
    setLoaded(true);
  }, []);

  const handleDelete = (id: string) => {
    if (!confirm('Delete this campaign? This cannot be undone.')) return;
    deleteCampaign(id);
    setCampaigns(getAllCampaigns());
  };

  if (!loaded) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center', color: 'var(--fg-muted)' }}>
        <p>Loading campaigns...</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '64px 24px' }}>
      <FadeIn className="section-header" style={{ marginBottom: '48px' }}>
        <h2>Your Campaigns</h2>
        <p>All your generated Reddit campaign strategies in one place.</p>
      </FadeIn>

      {campaigns.length === 0 ? (
        <FadeIn style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
          <div className="feature-card" style={{ textAlign: 'center', padding: '64px 32px', width: '100%', maxWidth: '600px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'var(--bg-subtle)', color: 'var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
              border: '1px solid var(--border)',
            }}>
              <FileText size={28} />
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.4rem' }}>No campaigns yet</h3>
            <p className="price-desc" style={{ marginBottom: '32px', maxWidth: '320px', margin: '0 auto 32px' }}>
              Generate your first Reddit campaign strategy to see it here.
            </p>
            <Link href="/generate" className="btn btn-primary btn-lg">
              Build my first campaign <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      ) : (
        <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '880px', margin: '0 auto' }}>
          {campaigns.map((c) => (
            <StaggerItem key={c.id}>
              <div
                className="feature-card"
                style={{
                  padding: '24px 32px',
                  margin: 0,
                  maxWidth: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '24px',
                  alignItems: 'center',
                  minHeight: 'auto',
                  cursor: 'pointer',
                }}
              >
                <Link href={`/result?id=${c.id}`} style={{ display: 'flex', gap: '24px', alignItems: 'center', flex: 1, textDecoration: 'none', color: 'inherit' }}>
                  {/* Icon */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-subtle)', color: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    border: '1px solid var(--border-subtle)',
                  }}>
                    <Target size={20} />
                  </div>

                  {/* Details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.input.productName}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--fg-muted)', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.input.oneLiner}
                    </p>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className="badge-low" style={{ fontSize: '0.75rem', background: 'var(--bg-subtle)', color: 'var(--fg)', border: '1px solid var(--border)' }}>
                        {c.campaignType}
                      </span>
                      <span className="badge-low" style={{ fontSize: '0.75rem', background: 'var(--bg-subtle)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                        {c.riskLevel} Risk
                      </span>
                      <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--fg-subtle)' }}>
                        <Calendar size={12} />
                        {new Date(c.createdAt).toLocaleDateString()}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--fg-subtle)' }}>
                        {c.subreddits.length} subreddits · {c.postDrafts.length} drafts
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight size={18} style={{ color: 'var(--fg-subtle)', flexShrink: 0 }} />
                </Link>

                {/* Delete */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(c.id); }}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--fg-subtle)', padding: '8px',
                    borderRadius: 'var(--radius-sm)', transition: 'all 0.2s',
                  }}
                  title="Delete campaign"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ef4444'; (e.currentTarget as HTMLElement).style.background = '#fef2f2'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-subtle)'; (e.currentTarget as HTMLElement).style.background = 'none'; }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </StaggerItem>
          ))}

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/generate" className="btn btn-primary">
              Generate Another Campaign <ArrowRight size={16} />
            </Link>
          </div>
        </StaggerContainer>
      )}
    </div>
  );
}
