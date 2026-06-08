import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Agentur Deutschland | #1 Google.de Rankings | Berlin, München, Hamburg | Zapshere',
  description: 'Zapshere bietet professionelle SEO-Dienstleistungen für Unternehmen in Deutschland. Wir verbessern Ihre Google.de Rankings durch technisches SEO, Content-Marketing und strategischen Linkaufbau in Berlin, München und Hamburg.',
  alternates: {
    languages: {
      'de-DE': '/de/seo-services',
      'en-DE': '/de/seo-services',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
