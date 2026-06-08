import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency USA | SEO, Google Ads & Social Media | Zapshere',
  description: 'Zapshere is a leading US digital marketing agency offering SEO, Google Ads, Meta advertising, social media, and email marketing. Serving businesses across New York, Los Angeles, Chicago & nationwide.',
  alternates: {
    languages: {
      'en-US': '/us',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
