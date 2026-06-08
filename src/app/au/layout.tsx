import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Australia | SEO, Google Ads & Social | ZAPSHERE',
  description: 'ZAPSHERE is a leading Australian digital marketing agency offering SEO, Google Ads, Meta Ads, social media, and email marketing services. Serving businesses across Sydney, Melbourne, Brisbane & Perth.',
  alternates: {
    languages: {
      'en-AU': '/au',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
