import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Agency USA | Instagram, TikTok & LinkedIn Management | ZAPSHERE',
  description: 'ZAPSHERE is a leading US social media agency managing Instagram, TikTok, LinkedIn, and Facebook for American brands — with culturally-resonant content and US-market influencer partnerships.',
  alternates: {
    languages: {
      'en-US': '/us/social-media-marketing',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
