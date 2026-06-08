import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paid Ads Agency | Google, Meta, LinkedIn & TikTok Advertising | ZAPSHERE',
  description: 'Expert paid advertising management across Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads. ZAPSHERE maximises your ROAS with data-driven targeting, creative testing, and smart bidding. Serving AU, US & Germany.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
