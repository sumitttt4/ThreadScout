import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const links = [
  { href: '/examples', label: 'Examples' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/dashboard', label: 'Campaigns' },
];

export function Header() {
  return (
    <div className="header-wrap">
      <header className="header">
        <Link href="/" className="header-logo" aria-label="ThreadScout home">
          <span className="logo-mark"><MessageCircle size={21} /></span>
          <span>ThreadScout</span>
        </Link>
        <nav className="header-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
          <Link href="/generate" className="header-cta">Build campaign</Link>
        </nav>
      </header>
    </div>
  );
}
