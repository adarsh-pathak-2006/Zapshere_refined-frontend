import React from 'react';
import { Metadata } from 'next';
import ServicePageTemplate, { ServicePageProps } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'SEO & Content Marketing Services | ZAPSHERE',
  description: 'AI-enhanced SEO and content marketing services. Dominate search results across Google US, UK, AU and DE.',
  alternates: {
    canonical: 'https://www.zapshere.com/services/seo-content-marketing'
  }
};

const seoData: ServicePageProps = {
  hero: {
    title: 'AI-Driven SEO & Content Marketing That Delivers Page 1 Rankings',
    breadcrumb: 'SEO & Content Marketing',
    bgImage: '/images/main-home/banner-bg.png',
  },
  problem: {
    title: 'The Organic Visibility Challenge',
    description: [
      'As search algorithms become more sophisticated and AI overviews dominate the SERPs, traditional SEO tactics are no longer enough to secure page 1 rankings.',
      'Brands face the challenge of creating content that satisfies user intent while adhering to complex technical SEO requirements, all while out-pacing competitors with larger budgets.'
    ]
  },
  solution: {
    title: 'Intelligent, Scalable Organic Growth',
    description: [
      'Our approach to SEO and content marketing combines deep technical expertise with AI-assisted content strategy to build compounding digital authority.',
      'We focus on high-intent keywords that drive actual revenue, building an organic marketing engine that scales with your business.'
    ],
    callout: 'Clients average a 3.2× increase in organic traffic within 6 months and a 68% improvement in high-intent keyword rankings.'
  },
  benefits: {
    title: 'Why Invest in Technical & Content SEO?',
    items: [
      {
        icon: 'fa-chart-line',
        title: 'Compounding ROI',
        desc: 'Unlike paid ads, the content and authority you build through SEO continues to drive traffic and leads long after the initial investment.'
      },
      {
        icon: 'fa-magnifying-glass-chart',
        title: 'High-Intent Traffic',
        desc: 'Capture users actively searching for your solutions, resulting in higher conversion rates and shorter sales cycles.'
      },
      {
        icon: 'fa-shield-halved',
        title: 'Brand Authority',
        desc: 'Ranking at the top of Google signals trust and industry leadership, enhancing your brand equity.'
      }
    ]
  },
  process: {
    title: 'Our Proven SEO Framework',
    steps: [
      {
        num: '01',
        title: 'Technical Audit & Foundation',
        desc: 'We resolve crawlability, indexing, and Core Web Vitals issues to ensure search engines can understand and rank your site.'
      },
      {
        num: '02',
        title: 'AI Keyword Strategy',
        desc: 'We map out a comprehensive keyword universe, targeting low-competition, high-intent phrases that drive revenue.'
      },
      {
        num: '03',
        title: 'Content & On-Page SEO',
        desc: 'We optimize existing pages and deploy high-quality, AI-enhanced content designed to rank and convert.'
      },
      {
        num: '04',
        title: 'Link Building & Authority',
        desc: 'We acquire high-authority backlinks to boost your domain rating and outrank established competitors.'
      }
    ]
  },
  deliverables: {
    title: 'What\'s Included in Our SEO Service',
    items: [
      {
        icon: 'fa-code',
        title: 'Technical SEO Audits',
        desc: 'Comprehensive crawling and fixing of site architecture, speed, mobile usability, and schema markup.'
      },
      {
        icon: 'fa-pen-nib',
        title: 'Content Strategy & Creation',
        desc: 'Production of high-ranking blog posts, landing pages, and pillar content.'
      },
      {
        icon: 'fa-link',
        title: 'Digital PR & Link Building',
        desc: 'Strategic outreach to acquire high-DR backlinks from trusted industry publications.'
      },
      {
        icon: 'fa-map-location-dot',
        title: 'Local SEO Management',
        desc: 'Optimisation of Google Business Profiles and local citations for map pack dominance.'
      },
      {
        icon: 'fa-file-lines',
        title: 'On-Page Optimisation',
        desc: 'Data-driven updates to meta tags, headings, internal linking, and content structure.'
      },
      {
        icon: 'fa-chart-pie',
        title: 'Custom Reporting',
        desc: 'Live dashboards tracking keyword rankings, organic traffic, and conversion attribution.'
      }
    ]
  },
  techStack: {
    title: 'Our SEO Technology Stack',
    tools: [
      { name: 'Ahrefs', icon: 'fa-searchengin' },
      { name: 'SEMrush', icon: 'fa-searchengin' },
      { name: 'Screaming Frog', icon: 'fa-spider' },
      { name: 'Google Search Console', icon: 'fa-google' },
      { name: 'Surfer SEO', icon: 'fa-pen-to-square' },
      { name: 'Looker Studio', icon: 'fa-chart-simple' }
    ]
  },
  results: {
    title: 'Expected Outcomes',
    metrics: [
      { value: '3.2×', label: 'Average Organic Traffic Growth' },
      { value: '68%', label: 'Improvement in Keyword Rankings' },
      { value: '45%', label: 'Increase in Organic Conversions' },
      { value: '1.5s', label: 'Average Page Load Speed Achieved' }
    ]
  },
  faqs: [
    {
      question: 'How long does it take to see results from SEO?',
      answer: 'While technical fixes can yield quick wins within weeks, significant organic growth typically takes 3 to 6 months depending on your industry\'s competitiveness and your website\'s current authority.'
    },
    {
      question: 'Do you use AI to write content?',
      answer: 'We use AI to accelerate research, outline structures, and identify content gaps. However, all our content is human-edited, fact-checked, and enriched with expert insights to ensure it meets Google\'s E-E-A-T guidelines.'
    },
    {
      question: 'How do you acquire backlinks?',
      answer: 'We focus on "white-hat" link building strategies, including digital PR, guest posting on high-DR industry sites, broken link building, and creating highly linkable data-driven assets.'
    }
  ],
  cta: {
    title: 'Ready to Dominate Search?',
    desc: 'Schedule a free consultation and let us build a custom SEO strategy that drives real business growth.',
    buttonText: 'Request an SEO Audit'
  }
};

export default function SeoContentMarketingPage() {
  return <ServicePageTemplate data={seoData} />;
}
