import { seoPages, subredditRows } from '@/data/seoPages';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SeoCtaCard } from '@/components/SeoCtaCard';

/* ── Static generation ── */
export function generateStaticParams() {
  return seoPages.map((p) => ({
    slug: p.route.slice(1).split('/'),
  }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = '/' + slug.join('/');
  const page = seoPages.find((p) => p.route === route);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: { title: page.metaTitle, description: page.metaDescription },
  };
}

/* ── Page component ── */
export default async function SeoPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const route = '/' + slug.join('/');
  const page = seoPages.find((p) => p.route === route);
  if (!page) notFound();

  return (
    <div className="page-wrapper">
      <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Hero */}
        <div style={{ paddingBottom: '32px', borderBottom: '1px solid var(--border-soft)' }}>
          <span className="risk-badge risk-low" style={{ marginBottom: '16px', display: 'inline-block' }}>{page.primaryKeyword}</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', lineHeight: '1.1' }}>{page.h1}</h1>
          <p className="text-slate" style={{ fontSize: '1.25rem', marginBottom: '24px' }}>{page.intro}</p>
          <div className="report-mistake" style={{ display: 'inline-block', padding: '12px 16px', color: 'var(--text-charcoal)', border: '1px solid var(--orange-light)', background: 'var(--orange-bg)' }}>
            <strong style={{ color: 'var(--orange-primary)' }}>Audience:</strong>{' '}
            {page.audience}
          </div>
        </div>

        {/* Sections */}
        {page.sections.map((sec) => (
          <div className="report-card" style={{ padding: '40px', maxWidth: '100%', margin: '0' }} key={sec.title}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>{sec.title}</h2>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {sec.content.map((c) => (
                <li key={c} className="text-slate" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>{c}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Example posts */}
        <div className="report-card" style={{ padding: '40px', maxWidth: '100%', margin: '0' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Example Reddit post angles</h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {page.examplePostTitles.map((t) => (
              <li key={t} className="text-slate italic" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>"{t}"</li>
            ))}
          </ul>
        </div>

        {/* Subreddit table */}
        {page.kind === 'subreddit' && (
          <div className="report-card" style={{ padding: '40px', maxWidth: '100%', margin: '0', overflowX: 'auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Best subreddits</h2>
            <table className="tracker-table" style={{ minWidth: '800px' }}>
              <thead>
                <tr>
                  <th>Subreddit</th>
                  <th>Best for</th>
                  <th>Promotion risk</th>
                  <th>Best post type</th>
                  <th>What to avoid</th>
                  <th>Example post title</th>
                </tr>
              </thead>
              <tbody>
                {subredditRows.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, i) => (
                      <td key={i}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Use-case action plan */}
        {page.kind === 'usecase' && (
          <div className="report-card" style={{ padding: '40px', maxWidth: '100%', margin: '0' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>7-day action plan</h2>
            <ul style={{ listStyle: 'decimal', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="text-slate" style={{ fontSize: '1.05rem' }}><strong>Day 1:</strong> Choose one subreddit and ask one useful question.</li>
              <li className="text-slate" style={{ fontSize: '1.05rem' }}><strong>Day 2:</strong> Reply to every comment with specifics.</li>
              <li className="text-slate" style={{ fontSize: '1.05rem' }}><strong>Day 3:</strong> Post a follow-up with lessons learned.</li>
              <li className="text-slate" style={{ fontSize: '1.05rem' }}><strong>Day 4–7:</strong> Iterate message, not spam volume.</li>
            </ul>
          </div>
        )}

        {/* Comparison table */}
        {page.kind === 'compare' && (
          <div className="report-card" style={{ padding: '40px', maxWidth: '100%', margin: '0', overflowX: 'auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Comparison</h2>
            <table className="tracker-table" style={{ minWidth: '600px' }}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>ThreadScout</th>
                  <th>Alternative</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Best for',
                  'Main workflow',
                  'Founder campaign planning',
                  'Subreddit strategy',
                  'Post generation',
                  'Reply generation',
                  'Rules/risk guidance',
                  'Tracking',
                  'Pricing positioning',
                ].map((f) => (
                  <tr key={f}>
                    <td style={{ fontWeight: '600' }}>{f}</td>
                    <td>SaaS-founder-specific campaign builder</td>
                    <td className="text-muted">Appears focused on broader Reddit workflows</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Founder story */}
        {page.kind === 'story' && (
          <div className="report-card" style={{ padding: '40px', maxWidth: '100%', margin: '0' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Founder story</h2>
            <p className="report-quote">
              I tried Reddit manually. Direct pitching was weaker. Value-first
              posts got more comments and views. The winning format was
              "Drop your startup, I'll help." That became ThreadScout.
            </p>
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: '32px', marginBottom: '32px' }}>
          <SeoCtaCard
            title={page.ctaTitle}
            description={page.ctaDescription}
          />
        </div>

        {/* FAQ */}
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {page.faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{f.q}</h4>
                <p className="text-slate" style={{ fontSize: '1rem' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div className="report-card" style={{ padding: '40px', maxWidth: '100%', margin: '32px 0 0 0' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Related guides</h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
            {page.relatedLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover-text text-orange"
                  style={{ fontWeight: 600, fontSize: '1.05rem' }}
                >
                  {l.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
