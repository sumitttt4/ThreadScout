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
    <div className="final-cta" style={{ margin: 0 }}>
      <span className="hero-badge" style={{ position: 'relative', marginBottom: 18, background: 'rgba(255,255,255,.08)', color: 'rgba(255,250,241,.84)', borderColor: 'rgba(255,255,255,.14)' }}>
        <ShieldCheck size={14} /> Manual-first Reddit growth
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href="/generate" className="btn btn-primary btn-lg" style={{ position: 'relative', zIndex: 1 }}>
        Generate my campaign <ArrowRight size={18} />
      </Link>
    </div>
  );
}
