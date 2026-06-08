import Link from 'next/link';
import { seoPages } from '@/data/seoPages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Examples — ThreadScout',
  description: 'Browse example Reddit campaign strategies by category.',
};

const kindLabel: Record<string, string> = {
  money: 'Strategy',
  subreddit: 'Subreddits',
  usecase: 'Use Case',
  compare: 'Comparison',
  story: 'Story',
};

export default function ExamplesPage() {
  return (
    <div className="container" style={{ padding: '64px 24px' }}>
      <div className="section-header">
        <span className="section-label">Examples</span>
        <h2>Campaign playbooks</h2>
        <p className="section-paragraph">Browse real Reddit campaign strategies by category.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="grid-3">
        {seoPages.map((page) => (
          <Link href={page.route} key={page.route} style={{ display: 'flex', textDecoration: 'none' }}>
            <div
              className="feature-card"
              style={{ padding: '32px', width: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '220px' }}
            >
              <span
                className="badge-low"
                style={{
                  background: 'var(--bg-subtle)',
                  color: 'var(--fg)',
                  border: '1px solid var(--border)',
                  marginBottom: '16px',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
              >
                {kindLabel[page.kind] || page.kind}
              </span>
              <h3 style={{ textTransform: 'capitalize', fontSize: '1.25rem', marginBottom: '8px' }}>{page.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--fg-muted)', flexGrow: 1 }}>
                {page.metaDescription.slice(0, 100)}…
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
