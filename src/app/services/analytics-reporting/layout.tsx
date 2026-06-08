import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Analytics & Reporting Agency | Real-Time Dashboards | Zapshere',
  description: 'Zapshere provides custom marketing analytics dashboards, GA4 setup, attribution modelling, and monthly performance reporting to help businesses in AU, US & Germany make smarter data-driven decisions.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
