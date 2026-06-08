import React from 'react';
import { Metadata } from 'next';
import ServicePageTemplate, { ServicePageProps } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Media Management Services | ZAPSHERE',
  description: 'Build an engaged audience and strong brand identity across Instagram, TikTok, LinkedIn, and Facebook with ZAPSHERE\'s social media management services.',
  alternates: {
    canonical: 'https://www.zapshere.com/services/social-media-marketing'
  }
};

const socialMediaData: ServicePageProps = {
  hero: {
    title: 'Brand-Building Social Media Management',
    breadcrumb: 'Social Media Marketing',
    bgImage: '/images/main-home/banner-bg.png',
  },
  problem: {
    title: 'The Struggle to Stand Out Organically',
    description: [
      'The organic social landscape is saturated. Simply posting generic graphics a few times a week no longer builds an audience or drives meaningful engagement.',
      'Brands struggle to keep up with rapidly changing trends, platform algorithms, and the high-volume demand for authentic, short-form video content.'
    ]
  },
  solution: {
    title: 'Culturally Relevant, Community-Led Content',
    description: [
      'We don\'t just post; we build communities. Our social media strategies are deeply rooted in understanding the cultural nuances of your target demographic across AU, US, and EU markets.',
      'We blend high-quality aesthetic curation with authentic, trend-driven video content to build a loyal following that naturally converts into customers.'
    ],
    callout: 'On average, our clients see a 120% increase in social engagement and a 40% growth in follower base within the first 6 months.'
  },
  benefits: {
    title: 'The Value of Organic Social Presence',
    items: [
      {
        icon: 'fa-users',
        title: 'Community Building',
        desc: 'Transform passive followers into brand advocates who defend your brand and refer new customers.'
      },
      {
        icon: 'fa-eye',
        title: 'Brand Awareness',
        desc: 'Stay top-of-mind with your audience through consistent, high-value, and entertaining content.'
      },
      {
        icon: 'fa-handshake',
        title: 'Social Trust',
        desc: 'A vibrant, active social profile serves as critical social proof for potential customers researching your business.'
      }
    ]
  },
  process: {
    title: 'Our Social Media Methodology',
    steps: [
      {
        num: '01',
        title: 'Brand Voice & Strategy',
        desc: 'We define your visual identity, tone of voice, content pillars, and platform-specific goals.'
      },
      {
        num: '02',
        title: 'Content Creation',
        desc: 'Our team produces monthly batches of graphics, carousels, Reels, and TikToks.'
      },
      {
        num: '03',
        title: 'Publishing & Community',
        desc: 'We handle all scheduling, posting, and active community management (replying to comments/DMs).'
      },
      {
        num: '04',
        title: 'Influencer Collaboration',
        desc: 'We identify and partner with micro and macro-influencers to expand your brand reach.'
      }
    ]
  },
  deliverables: {
    title: 'What\'s Included in Our Social Management',
    items: [
      {
        icon: 'fa-calendar-days',
        title: 'Content Calendars',
        desc: 'Detailed monthly plans outlining every post, caption, and hashtag strategy.'
      },
      {
        icon: 'fa-clapperboard',
        title: 'Short-Form Video',
        desc: 'Scripting, editing, and optimization of Reels, TikToks, and YouTube Shorts.'
      },
      {
        icon: 'fa-comments',
        title: 'Community Management',
        desc: 'Proactive engagement with followers, industry peers, and prompt customer service responses.'
      },
      {
        icon: 'fa-hashtag',
        title: 'Trend Monitoring',
        desc: 'Real-time monitoring of social trends to insert your brand into relevant cultural conversations.'
      },
      {
        icon: 'fa-handshake-angle',
        title: 'Influencer Outreach',
        desc: 'Sourcing, negotiating, and managing campaigns with content creators.'
      },
      {
        icon: 'fa-chart-area',
        title: 'Performance Analytics',
        desc: 'Monthly reports detailing reach, engagement rates, follower growth, and click-throughs.'
      }
    ]
  },
  techStack: {
    title: 'Our Social Technology Stack',
    tools: [
      { name: 'Sprout Social', icon: 'fa-hubspot' },
      { name: 'Later', icon: 'fa-instagram' },
      { name: 'Canva Pro', icon: 'fa-pen-nib' },
      { name: 'CapCut', icon: 'fa-video' },
      { name: 'TikTok Creator', icon: 'fa-tiktok' },
      { name: 'LinkedIn Sales', icon: 'fa-linkedin' }
    ]
  },
  results: {
    title: 'Expected Outcomes',
    metrics: [
      { value: '120%', label: 'Increase in Engagement Rate' },
      { value: '40%', label: 'Average Follower Growth (6 Mo)' },
      { value: '3×', label: 'More Website Clicks from Social' },
      { value: '24/7', label: 'Brand Monitoring & Response' }
    ]
  },
  faqs: [
    {
      question: 'Which social platforms do you manage?',
      answer: 'We manage Instagram, TikTok, LinkedIn, Facebook, X (Twitter), and Pinterest. We recommend focusing only on the 2-3 platforms where your target audience is most active.'
    },
    {
      question: 'Do you create the videos and images?',
      answer: 'Yes. We provide end-to-end content creation. For physical products, you can ship them to our studio. For service businesses, we use a mix of stock, graphics, and remotely directed video content from your team.'
    },
    {
      question: 'How do you handle negative comments?',
      answer: 'During onboarding, we develop a Crisis Management and FAQ protocol with you. We handle standard customer service inquiries and immediately escalate sensitive issues to your team.'
    }
  ],
  cta: {
    title: 'Ready to Build Your Community?',
    desc: 'Let us take over your social media so you can focus on running your business. Schedule a discovery call today.',
    buttonText: 'Book a Strategy Call'
  }
};

export default function SocialMediaPage() {
  return <ServicePageTemplate data={socialMediaData} />;
}
