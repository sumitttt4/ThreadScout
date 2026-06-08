import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="header-logo" style={{ textDecoration: 'none' }}>
                <span className="logo-mark"><MessageCircle size={21} /></span>
                <span>ThreadScout</span>
              </Link>
              <p>Value-first Reddit campaign planning for SaaS founders who want useful conversations before product links.</p>
            </div>
            <div className="footer-links-group">
              <div className="footer-col">
                <h4>Product</h4>
                <Link href="/generate">Generate</Link>
                <Link href="/campaigns">Campaigns</Link>
                <Link href="/examples">Examples</Link>
                <Link href="/#pricing">Pricing</Link>
              </div>
              <div className="footer-col">
                <h4>Guides</h4>
                <Link href="/reddit-marketing-tool">Reddit marketing tool</Link>
                <Link href="/reddit-marketing-for-saas">Reddit for SaaS</Link>
                <Link href="/best-subreddits-for-saas-founders">Best subreddits</Link>
                <Link href="/reddit-self-promotion-guide">Self-promotion guide</Link>
              </div>
              <div className="footer-col">
                <h4>Trust</h4>
                <Link href="/how-to-promote-your-saas-on-reddit">Promote without spam</Link>
                <Link href="/reddit-launch-checklist">Launch checklist</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/privacy">Privacy</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '12px' }}>
              <span>Copyright &copy; {new Date().getFullYear()} ThreadScout. All rights reserved.</span>
              <span>Built for manual, respectful Reddit growth.</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.45)', marginTop: '8px', lineHeight: '1.4', margin: 0 }}>
              Disclaimer: ThreadScout is an independent campaign planning toolkit and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Reddit, Inc. or any of its subsidiaries or affiliates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
