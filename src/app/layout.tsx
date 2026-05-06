import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ThreadScout — Value-First Reddit Campaigns for SaaS Founders',
  description:
    'Plan where to post, what to say, and how to reply on Reddit — without spam. ThreadScout builds value-first Reddit campaigns for SaaS founders.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
