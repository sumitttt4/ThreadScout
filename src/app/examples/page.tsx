import Link from 'next/link';
import { seoPages } from '@/data/seoPages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Examples — ThreadScout',
  description: 'Browse example Reddit campaign strategies by category.',
};

const kindLabel: Record<string, string> = {
  money: '💰 Strategy',
  subreddit: '📍 Subreddits',
  usecase: '🎯 Use Case',
  compare: '⚔️ Comparison',
  story: '📖 Story',
};

const kindColor: Record<string, string> = {
  money: 'var(--orange-bg)',
  subreddit: 'var(--orange-light)',
  usecase: 'var(--bg-cream)',
  compare: 'var(--border-soft)',
  story: 'var(--bg-warm)',
};

export default function ExamplesPage() {
  return (
    <div className="page-wrapper">
      <div className="section-header">
        <h2>Campaign examples</h2>
        <p>Browse real Reddit campaign strategies by category.</p>
      </div>

      <div className="grid-3">
        {seoPages.map((page) => (
          <Link href={page.route} key={page.route} style={{ display: 'flex' }}>
            <div
              className="feature-card"
              style={{ padding: '32px', width: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              <span
                className="risk-badge"
                style={{
                  background: kindColor[page.kind] || 'var(--bg-warm)',
                  color: 'var(--text-charcoal)',
                  marginBottom: '16px',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
              >
                {kindLabel[page.kind] || page.kind}
              </span>
              <h3 style={{ textTransform: 'capitalize', fontSize: '1.25rem', marginBottom: '8px' }}>{page.title}</h3>
              <p className="text-slate" style={{ fontSize: '0.95rem' }}>
                {page.metaDescription.slice(0, 100)}…
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
