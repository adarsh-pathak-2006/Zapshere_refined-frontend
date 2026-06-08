import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digitale Marketing Agentur Deutschland | SEO, Google Ads & Social Media | ZAPSHERE',
  description: 'ZAPSHERE ist Ihre KI-gestützte digitale Marketingagentur in Deutschland. Wir bieten SEO, Google Ads, Social-Media-Management und E-Mail-Marketing für Unternehmen in Berlin, München, Hamburg und Frankfurt.',
  alternates: {
    languages: {
      'de-DE': '/de',
      'en-DE': '/de',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
