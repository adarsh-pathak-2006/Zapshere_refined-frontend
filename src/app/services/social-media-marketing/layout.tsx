import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency | Instagram, LinkedIn, TikTok & More | ZAPSHERE',
  description: 'ZAPSHERE manages social media strategy, content creation, community management, and influencer campaigns across Instagram, LinkedIn, TikTok, and Facebook for businesses in AU, US & Germany.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
