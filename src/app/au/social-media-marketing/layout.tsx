import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Agency Australia | Instagram, TikTok & LinkedIn Management | Zapshere',
  description: 'Zapshere is a leading Australian social media agency managing Instagram, TikTok, LinkedIn, and Facebook for brands across Sydney, Melbourne, Brisbane, and Perth.',
  alternates: {
    languages: {
      'en-AU': '/au/social-media-marketing',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
