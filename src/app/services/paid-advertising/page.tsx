import React from 'react';
import { Metadata } from 'next';
import ServicePageTemplate, { ServicePageProps } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Paid Advertising Services | Google & Meta Ads | Zapshere',
  description: 'Maximize your ROAS with Zapshere\'s expert paid advertising management. We run high-converting campaigns across Google, Meta, TikTok, and LinkedIn.',
  alternates: {
    canonical: 'https://www.zapshere.com/services/paid-advertising'
  }
};

const paidAdsData: ServicePageProps = {
  hero: {
    title: 'Scalable Paid Advertising That Maximizes ROAS',
    breadcrumb: 'Paid Advertising',
    bgImage: '/images/main-home/banner-bg.png',
  },
  problem: {
    title: 'The Rising Cost of Customer Acquisition',
    description: [
      'Digital advertising costs are at an all-time high. Without a highly targeted, data-driven approach, businesses risk burning through their marketing budgets on unqualified clicks.',
      'Many brands struggle with poorly structured campaigns, weak ad creatives, and fragmented attribution tracking that makes it impossible to know which ads are actually driving revenue.'
    ]
  },
  solution: {
    title: 'Data-Driven, Multi-Channel Media Buying',
    description: [
      'We treat your ad spend like an investment portfolio. Our certified media buyers utilize advanced targeting, AI-driven bidding algorithms, and compelling creatives to acquire customers at the lowest possible CPA.',
      'From capturing bottom-of-funnel intent on Google Search to generating demand on Meta and TikTok, we build full-funnel advertising ecosystems.'
    ],
    callout: 'Our clients see an average 45% reduction in CPA and a 2.5x increase in ROAS within the first 90 days of campaign restructuring.'
  },
  benefits: {
    title: 'Why Choose Zapshere for Paid Media?',
    items: [
      {
        icon: 'fa-bullseye',
        title: 'Precision Targeting',
        desc: 'Reach your exact ideal customer profile (ICP) using advanced audience segmentation and first-party data.'
      },
      {
        icon: 'fa-stopwatch',
        title: 'Immediate Results',
        desc: 'Unlike SEO, paid advertising can start generating highly qualified leads and sales within 24 hours of launch.'
      },
      {
        icon: 'fa-scale-balanced',
        title: 'Infinite Scalability',
        desc: 'Once we find a profitable CPA, we aggressively scale campaigns to maximize your market share and revenue.'
      }
    ]
  },
  process: {
    title: 'Our Media Buying Process',
    steps: [
      {
        num: '01',
        title: 'Account Audit & Strategy',
        desc: 'We audit your historical ad accounts, identify wasted spend, and develop a cross-channel strategy.'
      },
      {
        num: '02',
        title: 'Tracking & Attribution',
        desc: 'We implement robust server-side tracking (CAPI) to ensure every conversion is accurately attributed.'
      },
      {
        num: '03',
        title: 'Creative Development',
        desc: 'Our design team produces high-converting ad creatives, copy, and video assets tailored to each platform.'
      },
      {
        num: '04',
        title: 'Optimization & Scaling',
        desc: 'Continuous A/B testing, bid adjustments, and budget reallocation to maximize overall ROAS.'
      }
    ]
  },
  deliverables: {
    title: 'What\'s Included in Our Ads Management',
    items: [
      {
        icon: 'fa-google',
        title: 'Google Ads Management',
        desc: 'Search, Performance Max, Display, and YouTube campaigns designed to capture high intent.'
      },
      {
        icon: 'fa-meta',
        title: 'Meta Ads (Facebook & IG)',
        desc: 'Full-funnel demand generation and retargeting using dynamic product ads and video.'
      },
      {
        icon: 'fa-tiktok',
        title: 'TikTok Advertising',
        desc: 'Engaging, native-style UGC campaigns that convert younger, highly active demographics.'
      },
      {
        icon: 'fa-linkedin',
        title: 'LinkedIn B2B Ads',
        desc: 'Account-based marketing (ABM) and lead generation campaigns targeting key decision-makers.'
      },
      {
        icon: 'fa-video',
        title: 'Ad Creative Production',
        desc: 'Continuous testing of new statics, carousels, and short-form video creatives.'
      },
      {
        icon: 'fa-chart-line',
        title: 'ROAS Reporting',
        desc: 'Transparent, real-time dashboards showing exactly how much revenue every ad dollar generates.'
      }
    ]
  },
  techStack: {
    title: 'Our Advertising Technology Stack',
    tools: [
      { name: 'Google Ads', icon: 'fa-google' },
      { name: 'Meta Business', icon: 'fa-meta' },
      { name: 'TikTok Ads', icon: 'fa-tiktok' },
      { name: 'LinkedIn Campaign', icon: 'fa-linkedin' },
      { name: 'Google Analytics 4', icon: 'fa-chart-pie' },
      { name: 'Looker Studio', icon: 'fa-chart-simple' }
    ]
  },
  results: {
    title: 'Expected Outcomes',
    metrics: [
      { value: '45%', label: 'Average Reduction in CPA' },
      { value: '2.5×', label: 'Average Increase in ROAS' },
      { value: '30%', label: 'Higher Conversion Rates' },
      { value: '100%', label: 'Transparent Attribution' }
    ]
  },
  faqs: [
    {
      question: 'What is the minimum ad spend you manage?',
      answer: 'To ensure we can gather enough data for machine learning optimization and deliver a strong ROI, we typically recommend a minimum monthly ad spend of $5,000 USD (or equivalent).'
    },
    {
      question: 'Do you create the ads for us?',
      answer: 'Yes! We have an in-house creative team that designs static images, carousels, ad copy, and edits short-form video (UGC) specifically optimized for performance marketing.'
    },
    {
      question: 'Which platforms should I advertise on?',
      answer: 'It depends on your business. B2B companies often see the best results on Google Search and LinkedIn. eCommerce brands usually thrive on Meta (Instagram/Facebook) and Google Performance Max. We will recommend the best mix during our discovery call.'
    }
  ],
  cta: {
    title: 'Ready to Scale Your Revenue?',
    desc: 'Book a free strategy session and let us audit your current ad accounts for wasted spend.',
    buttonText: 'Get a Free Ad Audit'
  }
};

export default function PaidAdvertisingPage() {
  return <ServicePageTemplate data={paidAdsData} />;
}
