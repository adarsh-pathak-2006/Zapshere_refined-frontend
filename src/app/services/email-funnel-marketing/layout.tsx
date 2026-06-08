import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Marketing & Funnel Strategy Agency | AI Automation | Zapshere',
  description: 'Zapshere designs and automates email marketing sequences, sales funnels, and lead nurturing campaigns that convert prospects into customers — serving businesses in Australia, USA, and Germany.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
