import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO & Content Marketing Services | Rank #1 on Google | ZAPSHERE',
  description: 'ZAPSHERE delivers expert SEO and content marketing services — technical SEO audits, keyword strategy, link building, and conversion-focused content. Dominate Google in AU, US & Germany.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
