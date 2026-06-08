import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const links = [
  { href: '/examples', label: 'Examples' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/campaigns', label: 'Campaigns' },
];

export function Header() {
  return (
    <div className="header-wrap">
      <div className="container" style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <header className="header">
          <Link href="/" className="header-logo" aria-label="ThreadScout home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="logo-mark" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" fill="var(--accent)" />
                <path d="M30 35 C30 26.7 39 20 50 20 C61 20 70 26.7 70 35 C70 43.3 61 50 50 50 C46.7 50 43.6 49.3 41 48 L32 53 C31.5 53.3 30.8 53 30.8 52.3 L30.8 46.5 C30.3 45.4 30 44.2 30 43 Z" fill="#ffffff" stroke="var(--border)" strokeWidth="4" strokeLinejoin="round" />
                <circle cx="48" cy="34" r="6" fill="none" stroke="var(--accent)" strokeWidth="4" />
                <line x1="53" y1="39" x2="59" y2="45" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            <span style={{ fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--fg)' }}>ThreadScout</span>
          </Link>
          <nav className="header-nav" aria-label="Primary navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
            <Link href="/generate" className="header-cta" style={{ textDecoration: 'none' }}>Build campaign</Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
