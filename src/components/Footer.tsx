import Link from 'next/link';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="header-logo" style={{ color: 'white' }}>
              <span className="logo-mark"><MessageCircle size={21} /></span>
              <span>ThreadScout</span>
            </Link>
            <p>Value-first Reddit campaign planning for SaaS founders who want useful conversations before product links.</p>
            <div className="hero-trust" style={{ marginTop: 18 }}>
              <span className="trust-pill" style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,250,241,.82)', borderColor: 'rgba(255,255,255,.12)' }}><ShieldCheck size={14} /> No auto-posting</span>
              <span className="trust-pill" style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,250,241,.82)', borderColor: 'rgba(255,255,255,.12)' }}><ShieldCheck size={14} /> Manual-first</span>
            </div>
          </div>
          <div>
            <h4>Product</h4>
            <Link href="/generate">Generate</Link>
            <Link href="/dashboard">Campaigns</Link>
            <Link href="/examples">Examples</Link>
            <Link href="/#pricing">Pricing</Link>
          </div>
          <div>
            <h4>Guides</h4>
            <Link href="/reddit-marketing-tool">Reddit marketing tool</Link>
            <Link href="/reddit-marketing-for-saas">Reddit for SaaS</Link>
            <Link href="/best-subreddits-for-saas-founders">Best subreddits</Link>
            <Link href="/reddit-self-promotion-guide">Self-promotion guide</Link>
          </div>
          <div>
            <h4>Trust</h4>
            <Link href="/how-to-promote-your-saas-on-reddit">Promote without spam</Link>
            <Link href="/reddit-launch-checklist">Launch checklist</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright {new Date().getFullYear()} ThreadScout.</span>
          <span>Built for manual, respectful Reddit growth.</span>
        </div>
      </div>
    </footer>
  );
}
