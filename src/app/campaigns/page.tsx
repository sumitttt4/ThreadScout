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
      <div className="page-wrapper" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <p className="text-slate">Loading campaigns...</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper" style={{ padding: '64px 24px' }}>
      <FadeIn className="section-header" style={{ marginBottom: '48px' }}>
        <h2>Your Campaigns</h2>
        <p>All your generated Reddit campaign strategies in one place.</p>
      </FadeIn>

      {campaigns.length === 0 ? (
        <FadeIn style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
          <div className="report-card" style={{ textAlign: 'center', padding: '80px 48px', width: '100%', maxWidth: '640px' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'var(--orange-bg)', color: 'var(--orange-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
              border: '1px solid var(--orange-light)',
            }}>
              <FileText size={32} />
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.5rem', letterSpacing: '-0.02em' }}>No campaigns yet</h3>
            <p className="text-slate" style={{ marginBottom: '32px', maxWidth: '320px', margin: '0 auto 32px', lineHeight: 1.6 }}>
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
                className="report-card"
                style={{
                  padding: '28px 36px',
                  margin: 0,
                  maxWidth: '100%',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gray)';
                }}
              >
                <Link href={`/result?id=${c.id}`} style={{ display: 'flex', gap: '24px', alignItems: 'center', flex: 1, textDecoration: 'none', color: 'inherit' }}>
                  {/* Icon */}
                  <div style={{
                    width: 56, height: 56, borderRadius: 'var(--radius-md)',
                    background: 'var(--orange-light)', color: 'var(--orange-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Target size={24} />
                  </div>

                  {/* Details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.input.productName}
                    </h3>
                    <p className="text-slate" style={{ fontSize: '0.9rem', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.input.oneLiner}
                    </p>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className="risk-badge" style={{ background: 'var(--orange-bg)', color: 'var(--orange-primary)', fontSize: '0.75rem' }}>
                        {c.campaignType}
                      </span>
                      <span className={`risk-badge ${c.riskLevel === 'Low' ? 'risk-low' : c.riskLevel === 'High' ? '' : 'risk-med'}`}
                        style={c.riskLevel === 'High' ? { background: 'rgba(220,38,38,0.1)', color: 'var(--risk)' } : { fontSize: '0.75rem' }}>
                        {c.riskLevel} Risk
                      </span>
                      <span className="text-muted" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} />
                        {new Date(c.createdAt).toLocaleDateString()}
                      </span>
                      <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                        {c.subreddits.length} subreddits · {c.postDrafts.length} drafts
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight size={20} className="text-muted" style={{ flexShrink: 0 }} />
                </Link>

                {/* Delete */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(c.id); }}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--text-muted)', padding: '8px',
                    borderRadius: 'var(--radius-sm)', transition: 'all 0.2s',
                  }}
                  title="Delete campaign"
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--risk)'; (e.target as HTMLElement).style.background = 'rgba(220,38,38,0.05)'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-muted)'; (e.target as HTMLElement).style.background = 'none'; }}
                >
                  <Trash2 size={18} />
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
