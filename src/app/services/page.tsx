import React from 'react';
import { Metadata } from 'next';
import ServicePageTemplate, { ServicePageProps } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Full-Service Digital Marketing Solutions | ZAPSHERE',
  description: 'Explore ZAPSHERE\'s suite of AI-powered digital marketing services. From SEO and Paid Ads to Email Funnels and Advanced Analytics.',
  alternates: {
    canonical: 'https://www.zapshere.com/services'
  }
};

const servicesHubData: ServicePageProps = {
  hero: {
    title: 'Comprehensive Digital Marketing Powered by AI',
    breadcrumb: 'All Services',
    bgImage: '/images/inner/page-title-bg.png',
  },
  problem: {
    title: 'The Fragmented Marketing Problem',
    description: [
      'Many businesses struggle because their marketing efforts are disjointed. Their SEO agency doesn\'t talk to their paid ads team, and their email marketing is disconnected from their social media strategy.',
      'This fragmentation leads to inconsistent brand messaging, wasted budgets, and missed opportunities to convert prospects at different stages of the buying journey.'
    ]
  },
  solution: {
    title: 'A Unified Ecosystem for Growth',
    description: [
      'At ZAPSHERE, we don\'t offer cookie-cutter, siloed services. We build unified, full-funnel marketing ecosystems that align with your brand, your audience, and your revenue goals.',
      'By integrating search, social, paid media, and automated email nurturing into one cohesive strategy, we ensure every channel supports the others—amplifying your total ROI.'
    ],
    callout: 'Clients who utilize our integrated multi-channel approach see a 2.5× higher customer lifetime value (LTV) compared to single-channel campaigns.'
  },
  benefits: {
    title: 'Why Choose an Integrated Agency?',
    items: [
      {
        icon: 'fa-layer-group',
        title: 'Unified Strategy',
        desc: 'One cohesive game plan across all channels ensures consistent messaging and maximizes brand impact.'
      },
      {
        icon: 'fa-bolt',
        title: 'Agile Resource Allocation',
        desc: 'We dynamically shift your budget to the channels performing best in real-time, rather than being locked into rigid silos.'
      },
      {
        icon: 'fa-chart-pie',
        title: 'Holistic Attribution',
        desc: 'Clear, transparent reporting that shows exactly how each channel contributes to the final sale.'
      }
    ]
  },
  process: {
    title: 'Our Engagement Framework',
    steps: [
      {
        num: '01',
        title: 'Discovery & Audit',
        desc: 'We deeply analyze your business model, competitors, historical data, and current marketing infrastructure.'
      },
      {
        num: '02',
        title: 'Strategy Formulation',
        desc: 'We architect a custom, multi-channel growth plan designed specifically to hit your revenue targets.'
      },
      {
        num: '03',
        title: 'Execution & Launch',
        desc: 'Our specialized teams build, configure, and launch the campaigns across search, social, and email.'
      },
      {
        num: '04',
        title: 'Scale & Optimize',
        desc: 'Continuous A/B testing, data analysis, and aggressive scaling of profitable campaigns.'
      }
    ]
  },
  deliverables: {
    title: 'Explore Our Core Capabilities',
    items: [
      {
        icon: 'fa-magnifying-glass',
        title: 'SEO & Content Marketing',
        desc: 'Build compounding organic visibility and establish industry authority through AI-enhanced content.',
        link: '/services/seo-content-marketing'
      },
      {
        icon: 'fa-bullseye',
        title: 'Paid Advertising',
        desc: 'Scale revenue rapidly with data-driven media buying on Google, Meta, TikTok, and LinkedIn.',
        link: '/services/paid-advertising'
      },
      {
        icon: 'fa-hashtag',
        title: 'Social Media Management',
        desc: 'Cultivate an engaged, loyal community through culturally relevant short-form video and curation.',
        link: '/services/social-media-marketing'
      },
      {
        icon: 'fa-envelope-open-text',
        title: 'Email & Funnel Automation',
        desc: 'Maximize customer lifetime value and convert leads on autopilot with behavioral email flows.',
        link: '/services/email-funnel-marketing'
      },
      {
        icon: 'fa-chart-simple',
        title: 'Analytics & Reporting',
        desc: 'Eliminate the guesswork with robust server-side tracking and custom live data dashboards.',
        link: '/services/analytics-reporting'
      },
      {
        icon: 'fa-pen-nib',
        title: 'Creative & Design',
        desc: 'High-converting ad creatives, landing pages, and branding that stops the scroll.'
      }
    ]
  },
  techStack: {
    title: 'Enterprise-Grade Technology',
    tools: [
      { name: 'Google Marketing Platform', icon: 'fa-google' },
      { name: 'Meta Business Manager', icon: 'fa-meta' },
      { name: 'HubSpot', icon: 'fa-hubspot' },
      { name: 'Klaviyo', icon: 'fa-envelope' },
      { name: 'Ahrefs', icon: 'fa-searchengin' },
      { name: 'Tableau', icon: 'fa-chart-line' }
    ]
  },
  results: {
    title: 'Agency Impact',
    metrics: [
      { value: '$150M+', label: 'Revenue Generated for Clients' },
      { value: '500+', label: 'Successful Campaigns Launched' },
      { value: '98%', label: 'Client Retention Rate' },
      { value: '3.5×', label: 'Average Blended ROAS' }
    ]
  },
  faqs: [
    {
      question: 'Do I need to hire you for all services?',
      answer: 'Not necessarily. While our integrated approach yields the best results, we often start by taking over the 1 or 2 channels that represent the biggest bottleneck for your business, and expand from there as we prove ROI.'
    },
    {
      question: 'What size businesses do you work with?',
      answer: 'We partner with ambitious startups, established eCommerce brands, and enterprise B2B companies. Our ideal clients have a proven product-market fit and are looking for a strategic partner to help them scale aggressively.'
    },
    {
      question: 'How do you communicate and report results?',
      answer: 'You will be assigned a dedicated Account Director who acts as your strategic partner. We provide live 24/7 reporting dashboards, weekly asynchronous updates, and comprehensive monthly strategy reviews.'
    }
  ],
  cta: {
    title: 'Ready for a Custom Growth Strategy?',
    desc: 'Book a discovery call to discuss your business goals, and we\'ll build a custom roadmap to achieve them.',
    buttonText: 'Request a Marketing Audit'
  }
};

export default function ServicesHubPage() {
  return <ServicePageTemplate data={servicesHubData} />;
}
