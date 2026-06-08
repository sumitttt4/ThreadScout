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
    <div className="cta-section-wrapper-full" style={{ borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border)', boxShadow: '4px 4px 0 var(--border)', padding: '64px 24px', width: '100%' }}>
      <div className="cta-section" style={{ gap: '16px' }}>
        <span className="badge-low" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.15)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={14} /> Manual-first Reddit growth
        </span>
        <h3 style={{ color: 'white', fontSize: '1.8rem', margin: 0, textAlign: 'center' }}>{title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>{description}</p>
        <Link href="/generate" className="btn btn-primary btn-lg" style={{ marginTop: '8px' }}>
          Generate my campaign <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}

