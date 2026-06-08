import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://threadscout.com'),
  title: 'ThreadScout — Value-First Reddit Campaigns for SaaS Founders',
  description:
    'Plan where to post, what to say, and how to reply on Reddit without spam. ThreadScout builds value-first Reddit campaigns and drafts for SaaS founders.',
  keywords: [
    'reddit marketing',
    'reddit marketing tool',
    'reddit for saas',
    'subreddit target tool',
    'indie hackers marketing',
    'saas growth tools',
    'reddit promotion without ban',
    'reddit strategy planner',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'ThreadScout — Value-First Reddit Campaigns for SaaS Founders',
    description:
      'Plan where to post, what to say, and how to reply on Reddit without spam. ThreadScout builds value-first Reddit campaigns and drafts for SaaS founders.',
    url: 'https://threadscout.com',
    siteName: 'ThreadScout',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThreadScout — Value-First Reddit Campaigns for SaaS Founders',
    description:
      'Plan where to post, what to say, and how to reply on Reddit without spam. ThreadScout builds value-first Reddit campaigns and drafts for SaaS founders.',
    creator: '@threadscout',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'ThreadScout',
  'operatingSystem': 'All',
  'applicationCategory': 'BusinessApplication',
  'description': 'Value-first Reddit campaign planning tool for SaaS founders to locate target subreddits, generate native post drafts, and get reply comment templates.',
  'offers': {
    '@type': 'Offer',
    'price': '29.00',
    'priceCurrency': 'USD',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

