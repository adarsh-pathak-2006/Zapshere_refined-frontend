import React from 'react';
import { Metadata } from 'next';
import ServicePageTemplate, { ServicePageProps } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Email Marketing & Automated Funnels | ZAPSHERE',
  description: 'Nurture leads and drive repeat purchases with ZAPSHERE\'s automated email marketing and high-converting sales funnels.',
  alternates: {
    canonical: 'https://www.zapshere.com/services/email-funnel-marketing'
  }
};

const emailFunnelsData: ServicePageProps = {
  hero: {
    title: 'Automated Email Funnels That Convert on Autopilot',
    breadcrumb: 'Email & Funnel Marketing',
    bgImage: '/images/main-home/banner-bg.png',
  },
  problem: {
    title: 'The "Leaky" Sales Funnel Problem',
    description: [
      'Most businesses spend heavily on acquiring traffic (via SEO or Paid Ads), but over 95% of visitors leave without purchasing or inquiring. Without a structured follow-up system, that ad spend is wasted.',
      'Brands struggle to implement automated nurturing sequences that effectively educate prospects, overcome objections, and drive them back to the point of sale.'
    ]
  },
  solution: {
    title: 'Behavioural Automation & Segmentation',
    description: [
      'We build sophisticated, automated email marketing systems and conversion funnels that trigger based on user behaviour—delivering the right message at the exact right moment.',
      'From complex B2B lead nurturing sequences to dynamic eCommerce cart abandonment flows, we maximize the lifetime value (LTV) of every lead you capture.'
    ],
    callout: 'Our automated email sequences generate an average 35% increase in lead-to-customer conversion rates and a 20% bump in repeat purchases.'
  },
  benefits: {
    title: 'The Power of Email Automation',
    items: [
      {
        icon: 'fa-envelope-open-text',
        title: 'Highest ROI Channel',
        desc: 'Email marketing consistently delivers the highest ROI of any digital channel, averaging $36 for every $1 spent.'
      },
      {
        icon: 'fa-robot',
        title: '24/7 Sales Engine',
        desc: 'Once built, automated funnels educate leads and close sales around the clock without manual intervention.'
      },
      {
        icon: 'fa-filter',
        title: 'Owned Audience',
        desc: 'Unlike social media followers, you own your email list. You are immune to sudden algorithmic changes.'
      }
    ]
  },
  process: {
    title: 'Our Funnel Architecture Process',
    steps: [
      {
        num: '01',
        title: 'Funnel Mapping',
        desc: 'We map out the entire customer journey, identifying drop-off points and opportunities for automation.'
      },
      {
        num: '02',
        title: 'Lead Magnet Creation',
        desc: 'We design high-value opt-in incentives (eBooks, webinars, discounts) to aggressively grow your list.'
      },
      {
        num: '03',
        title: 'Copywriting & Design',
        desc: 'Our copywriters craft persuasive email sequences, while designers build beautiful, responsive templates.'
      },
      {
        num: '04',
        title: 'Implementation & Testing',
        desc: 'We build the flows in your CRM, implement behavioral triggers, and rigorously A/B test subject lines.'
      }
    ]
  },
  deliverables: {
    title: 'What\'s Included in Our Email Service',
    items: [
      {
        icon: 'fa-sitemap',
        title: 'Core Automation Flows',
        desc: 'Welcome series, abandoned cart, browse abandonment, post-purchase, and win-back sequences.'
      },
      {
        icon: 'fa-pen-clip',
        title: 'Direct Response Copy',
        desc: 'Persuasive, psychology-driven email copywriting designed to maximize click-through rates.'
      },
      {
        icon: 'fa-desktop',
        title: 'Landing Page Design',
        desc: 'High-converting squeeze pages and opt-in forms integrated directly with your CRM.'
      },
      {
        icon: 'fa-users-gear',
        title: 'List Segmentation',
        desc: 'Advanced audience grouping based on purchase history, engagement levels, and demographics.'
      },
      {
        icon: 'fa-vial',
        title: 'A/B Testing Program',
        desc: 'Continuous split-testing of subject lines, send times, and call-to-action buttons.'
      },
      {
        icon: 'fa-broom',
        title: 'List Hygiene & Deliverability',
        desc: 'Regular scrubbing of unengaged subscribers to maintain 99%+ inbox deliverability rates.'
      }
    ]
  },
  techStack: {
    title: 'Our CRM & Email Technology Stack',
    tools: [
      { name: 'Klaviyo', icon: 'fa-envelope' },
      { name: 'HubSpot', icon: 'fa-hubspot' },
      { name: 'ActiveCampaign', icon: 'fa-envelope-open' },
      { name: 'Mailchimp', icon: 'fa-mailchimp' },
      { name: 'Unbounce', icon: 'fa-pager' },
      { name: 'Zapier', icon: 'fa-bolt' }
    ]
  },
  results: {
    title: 'Expected Outcomes',
    metrics: [
      { value: '35%', label: 'Increase in Lead Conversion' },
      { value: '20%', label: 'Boost in Repeat Purchases' },
      { value: '45%', label: 'Average Email Open Rate' },
      { value: '10%', label: 'Average Click-Through Rate' }
    ]
  },
  faqs: [
    {
      question: 'Which email platforms do you support?',
      answer: 'We are certified partners and experts in Klaviyo (for eCommerce), HubSpot (for B2B/Enterprise), and ActiveCampaign. We can migrate you to the best platform or work within your existing setup.'
    },
    {
      question: 'Do you help with lead generation to grow the list?',
      answer: 'Yes! Email marketing is useless without subscribers. We design Lead Magnets (guides, templates, quizzes) and run Paid Advertising campaigns specifically to drive targeted email opt-ins.'
    },
    {
      question: 'How do you prevent emails from going to spam?',
      answer: 'We ensure your domain authentication (SPF, DKIM, DMARC) is perfectly configured. We also implement aggressive sunset policies to remove inactive subscribers, which signals to Gmail and Outlook that your emails are wanted.'
    }
  ],
  cta: {
    title: 'Stop Losing Revenue to a Leaky Funnel',
    desc: 'Let us build an automated sales engine that nurtures your leads while you sleep.',
    buttonText: 'Map Out My Funnel'
  }
};

export default function EmailFunnelMarketingPage() {
  return <ServicePageTemplate data={emailFunnelsData} />;
}
