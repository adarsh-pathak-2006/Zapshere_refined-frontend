import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Agency USA | #1 Google Rankings for American Businesses | Zapshere',
  description: 'Zapshere is a leading US SEO agency delivering page 1 Google.com rankings. Expert technical SEO, content marketing, and link building for businesses across New York, Los Angeles, Chicago, and nationwide.',
  alternates: {
    languages: {
      'en-US': '/us/seo-services',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
