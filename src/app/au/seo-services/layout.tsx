import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Agency Australia | #1 Google Rankings in Sydney, Melbourne & Brisbane | ZAPSHERE',
  description: 'ZAPSHERE is Australia\'s trusted SEO agency delivering page 1 rankings on Google.com.au. Expert technical SEO, content marketing, and link building for businesses across Sydney, Melbourne, Brisbane & Perth.',
  alternates: {
    languages: {
      'en-AU': '/au/seo-services',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
