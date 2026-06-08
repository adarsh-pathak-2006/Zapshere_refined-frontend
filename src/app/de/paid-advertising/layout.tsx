import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Agentur Deutschland | DSGVO-konform | Meta & TikTok Werbung | Zapshere',
  description: 'Professional paid advertising management for German businesses — fully GDPR-compliant Google Ads, Meta Ads, LinkedIn, and TikTok campaigns targeting German-speaking audiences.',
  alternates: {
    languages: {
      'de-DE': '/de/paid-advertising',
      'en-DE': '/de/paid-advertising',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
