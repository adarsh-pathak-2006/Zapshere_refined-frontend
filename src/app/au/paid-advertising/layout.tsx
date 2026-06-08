import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Agency Australia | Meta & TikTok Ads Management | ZAPSHERE',
  description: 'Expert Google Ads and Meta Ads management for Australian businesses. ZAPSHERE maximises your ROAS across paid search and social — Sydney, Melbourne, Brisbane & nationwide.',
  alternates: {
    languages: {
      'en-AU': '/au/paid-advertising',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
