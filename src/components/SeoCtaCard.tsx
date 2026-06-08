import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function SeoCtaCard({
  title = 'Build your Reddit campaign in minutes.',
  description = 'Get subreddit ideas, post angles, reply templates, risk notes, and a 7-day plan for your SaaS.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', padding: '48px 32px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
      <span className="tag-badge">[ MANUAL-FIRST REDDIT GROWTH ]</span>
      <h3 style={{ fontSize: '1.6rem', margin: 0, color: 'var(--fg)' }}>{title}</h3>
      <p style={{ color: 'var(--fg-muted)', fontSize: '1.02rem', maxWidth: '580px', margin: 0 }}>{description}</p>
      <Link href="/generate" className="btn btn-primary" style={{ background: 'var(--accent)', borderColor: 'var(--accent)', color: 'white', marginTop: '8px' }}>
        Generate my campaign <ArrowRight size={16} />
      </Link>
    </div>
  );
}

