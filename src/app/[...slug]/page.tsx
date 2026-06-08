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
  
  const title = `${page.metaTitle} | ThreadScout`;
  const description = page.metaDescription;

  return {
    title,
    description,
    keywords: [
      page.primaryKeyword,
      'reddit marketing campaign',
      'subreddit strategy',
      'saas reddit promotion',
    ],
    openGraph: {
      title,
      description,
      url: `https://threadscout.com${route}`,
      siteName: 'ThreadScout',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
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
    <div className="container" style={{ padding: '64px 24px' }}>
      <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        {/* Hero */}
        <div style={{ paddingBottom: '32px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span className="badge-low" style={{ marginBottom: '16px', display: 'inline-block', background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--accent)' }}>
            {page.primaryKeyword}
          </span>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '16px', lineHeight: '1.1' }}>{page.h1}</h1>
          <p className="section-paragraph" style={{ fontSize: '1.2rem', marginBottom: '24px' }}>{page.intro}</p>
          <div style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-subtle)', fontSize: '0.95rem' }}>
            <strong style={{ color: 'var(--accent)' }}>Audience:</strong>{' '}
            {page.audience}
          </div>
        </div>

        {/* Sections */}
        {page.sections.map((sec) => (
          <div className="report-container" style={{ padding: '40px', margin: '0' }} key={sec.title}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>{sec.title}</h2>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {sec.content.map((c) => (
                <li key={c} style={{ color: 'var(--fg-muted)', fontSize: '1.02rem', lineHeight: '1.6' }}>{c}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Example posts */}
        <div className="report-container" style={{ padding: '40px', margin: '0' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>Example Reddit post angles</h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {page.examplePostTitles.map((t) => (
              <li key={t} style={{ color: 'var(--fg-muted)', fontStyle: 'italic', fontSize: '1.02rem', lineHeight: '1.6' }}>"{t}"</li>
            ))}
          </ul>
        </div>

        {/* Subreddit table */}
        {page.kind === 'subreddit' && (
          <div className="report-container" style={{ padding: '40px', margin: '0', overflowX: 'auto' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>Best subreddits</h2>
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
                      <td key={i} style={i === 0 ? { fontWeight: 700, color: 'var(--accent)' } : {}}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Use-case action plan */}
        {page.kind === 'usecase' && (
          <div className="report-container" style={{ padding: '40px', margin: '0' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>7-day action plan</h2>
            <ul style={{ listStyle: 'decimal', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: 'var(--fg-muted)', fontSize: '1.02rem' }}><strong>Day 1:</strong> Choose one subreddit and ask one useful question.</li>
              <li style={{ color: 'var(--fg-muted)', fontSize: '1.02rem' }}><strong>Day 2:</strong> Reply to every comment with specifics.</li>
              <li style={{ color: 'var(--fg-muted)', fontSize: '1.02rem' }}><strong>Day 3:</strong> Post a follow-up with lessons learned.</li>
              <li style={{ color: 'var(--fg-muted)', fontSize: '1.02rem' }}><strong>Day 4–7:</strong> Iterate message, not spam volume.</li>
            </ul>
          </div>
        )}

        {/* Comparison table */}
        {page.kind === 'compare' && (
          <div className="report-container" style={{ padding: '40px', margin: '0', overflowX: 'auto' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>Comparison</h2>
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
                    <td style={{ fontWeight: '700' }}>{f}</td>
                    <td style={{ color: 'var(--accent)', fontWeight: 500 }}>SaaS-founder-specific campaign builder</td>
                    <td style={{ color: 'var(--fg-subtle)' }}>Appears focused on broader Reddit workflows</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Founder story */}
        {page.kind === 'story' && (
          <div className="report-container" style={{ padding: '40px', margin: '0' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>Founder story</h2>
            <p className="report-quote-box" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              &ldquo;I tried Reddit manually. Direct pitching was weaker. Value-first
              posts got more comments and views. The winning format was
              'Drop your startup, I'll help.' That became ThreadScout.&rdquo;
            </p>
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: '16px', marginBottom: '16px' }}>
          <SeoCtaCard
            title={page.ctaTitle}
            description={page.ctaDescription}
          />
        </div>

        {/* FAQ */}
        <div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {page.faqs.map((f) => (
              <div className="faq-item-new" key={f.q} style={{ cursor: 'default' }}>
                <div className="faq-item-head">
                  <h4 style={{ fontSize: '1.05rem', margin: 0 }}>{f.q}</h4>
                </div>
                <div style={{ marginTop: '8px' }}>
                  <p style={{ color: 'var(--fg-muted)', fontSize: '0.98rem' }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div className="report-container" style={{ padding: '40px', margin: '32px 0 0 0' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>Related guides</h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
            {page.relatedLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover-text"
                  style={{ fontWeight: 700, fontSize: '1.02rem', color: 'var(--accent)', textDecoration: 'none' }}
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
