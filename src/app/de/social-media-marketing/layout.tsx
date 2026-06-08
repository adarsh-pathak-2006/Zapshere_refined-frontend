import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Agentur Deutschland | Instagram, LinkedIn & TikTok | Zapshere',
  description: 'Social media management tailored for German audiences — GDPR-compliant content management, German-language community building, and XING & LinkedIn B2B strategies for the DACH market.',
  alternates: {
    languages: {
      'de-DE': '/de/social-media-marketing',
      'en-DE': '/de/social-media-marketing',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
