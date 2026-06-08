import React from 'react';
import { Metadata } from 'next';
import ServicePageTemplate, { ServicePageProps } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Data Analytics & Marketing Reporting | ZAPSHERE',
  description: 'Transform raw marketing data into actionable business intelligence. We build custom dashboards and ensure perfect tracking attribution across all channels.',
  alternates: {
    canonical: 'https://www.zapshere.com/services/analytics-reporting'
  }
};

const analyticsData: ServicePageProps = {
  hero: {
    title: 'Marketing Analytics & Clear Revenue Attribution',
    breadcrumb: 'Analytics & Reporting',
    bgImage: '/images/main-home/banner-bg.png',
  },
  problem: {
    title: 'The "Dark Funnel" Tracking Problem',
    description: [
      'Modern customer journeys are complex, spanning multiple devices, platforms, and weeks of research. With increasing privacy regulations (iOS 14+, cookie deprecation), tracking marketing ROI has never been harder.',
      'Without proper server-side tracking and unified dashboards, businesses are flying blind—unable to determine which campaigns are actually driving pipeline and revenue.'
    ]
  },
  solution: {
    title: 'Single Source of Truth Dashboards',
    description: [
      'We eliminate the guesswork from your marketing. Our analytics engineers implement robust, privacy-compliant tracking architecture that accurately attributes conversions across all touchpoints.',
      'We transform fragmented data sets from Google, Meta, your CRM, and your website into beautiful, real-time dashboards that tell a clear story about your business growth.'
    ],
    callout: 'Companies that implement full-funnel attribution tracking reduce their wasted ad spend by an average of 22% within the first month.'
  },
  benefits: {
    title: 'Why Data Architecture Matters',
    items: [
      {
        icon: 'fa-magnifying-glass-dollar',
        title: 'True ROI Measurement',
        desc: 'Stop relying on inflated platform metrics. Know exactly how much revenue every channel is actually generating.'
      },
      {
        icon: 'fa-shield-check',
        title: 'Privacy Compliant',
        desc: 'Future-proof your data collection against cookie deprecation with robust Server-Side Tagging.'
      },
      {
        icon: 'fa-gauge-high',
        title: 'Agile Decision Making',
        desc: 'Real-time dashboards allow leadership teams to make rapid budget reallocation decisions with confidence.'
      }
    ]
  },
  process: {
    title: 'Our Analytics Implementation Process',
    steps: [
      {
        num: '01',
        title: 'Data Audit',
        desc: 'We audit your current GA4, Tag Manager, and CRM setup to identify tracking gaps and broken events.'
      },
      {
        num: '02',
        title: 'Tracking Architecture',
        desc: 'We map out a custom measurement plan, defining every micro and macro conversion point to track.'
      },
      {
        num: '03',
        title: 'Server-Side Setup',
        desc: 'We deploy Google Tag Manager (Server-Side) and Conversions APIs (CAPI) to ensure data accuracy.'
      },
      {
        num: '04',
        title: 'Dashboard Creation',
        desc: 'We build custom Looker Studio or Tableau dashboards tailored to your specific KPIs and leadership needs.'
      }
    ]
  },
  deliverables: {
    title: 'What\'s Included in Analytics Services',
    items: [
      {
        icon: 'fa-chart-pie',
        title: 'GA4 Implementation',
        desc: 'Complete setup, event configuration, and cross-domain tracking in Google Analytics 4.'
      },
      {
        icon: 'fa-server',
        title: 'Server-Side Tagging',
        desc: 'Implementation of sGTM and Meta/TikTok Conversions API for resilient tracking.'
      },
      {
        icon: 'fa-desktop',
        title: 'Custom Dashboards',
        desc: 'Live, interactive reporting dashboards merging data from ads, website, and CRM.'
      },
      {
        icon: 'fa-funnel-dollar',
        title: 'CRM Closed-Loop Tracking',
        desc: 'Connecting marketing data to CRM deals (HubSpot/Salesforce) for offline conversion tracking.'
      },
      {
        icon: 'fa-bug-slash',
        title: 'Tracking Troubleshooting',
        desc: 'Fixing duplicate conversions, cross-domain issues, and payment gateway drop-offs.'
      },
      {
        icon: 'fa-chalkboard-user',
        title: 'Data Consulting',
        desc: 'Monthly strategic reviews to translate the data into actionable marketing strategies.'
      }
    ]
  },
  techStack: {
    title: 'Our Analytics Technology Stack',
    tools: [
      { name: 'Google Analytics 4', icon: 'fa-chart-pie' },
      { name: 'Google Tag Manager', icon: 'fa-tags' },
      { name: 'Looker Studio', icon: 'fa-chart-simple' },
      { name: 'Tableau', icon: 'fa-chart-line' },
      { name: 'HubSpot CRM', icon: 'fa-hubspot' },
      { name: 'Supermetrics', icon: 'fa-database' }
    ]
  },
  results: {
    title: 'Expected Outcomes',
    metrics: [
      { value: '100%', label: 'Data Accuracy Confidence' },
      { value: '22%', label: 'Reduction in Wasted Spend' },
      { value: '24/7', label: 'Real-Time Data Access' },
      { value: '1st', label: 'Party Data Ownership' }
    ]
  },
  faqs: [
    {
      question: 'What is the difference between client-side and server-side tracking?',
      answer: 'Client-side tracking relies on the user\'s browser (cookies) to send data, which is heavily blocked by ad blockers and Apple\'s iOS updates. Server-side tracking routes data through your own secure cloud server first, bypassing ad blockers, increasing data accuracy, and vastly improving site speed.'
    },
    {
      question: 'Can you fix my current Google Analytics 4 setup?',
      answer: 'Yes. Over 80% of the GA4 accounts we audit are tracking incorrectly. We can perform a full audit, fix duplicate events, configure proper cross-domain tracking, and build custom explorations for you.'
    },
    {
      question: 'How do you handle B2B offline conversions?',
      answer: 'We implement "closed-loop reporting" by integrating your ad platforms with your CRM (like HubSpot or Salesforce). When a lead eventually closes offline months later, that revenue data is sent back to Google/Meta to optimize the bidding algorithm.'
    }
  ],
  cta: {
    title: 'Stop Flying Blind with Your Marketing',
    desc: 'Schedule an analytics audit and let us build a single source of truth for your business data.',
    buttonText: 'Request Analytics Audit'
  }
};

export default function AnalyticsReportingPage() {
  return <ServicePageTemplate data={analyticsData} />;
}
