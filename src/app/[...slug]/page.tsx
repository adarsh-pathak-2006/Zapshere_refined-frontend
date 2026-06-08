import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

// Central SEO Dictionary (Ensuring Zapshere branding everywhere)
const seoData: Record<string, any> = {
  // Services
  '/services': { title: 'Our Services | Zapshere Digital Marketing', desc: 'Explore Zapshere\'s AI-driven marketing services.', canonical: '/services' },
  '/services/seo-content-marketing': { title: 'SEO & Content Marketing | Zapshere', desc: 'Dominate search rankings with AI-guided SEO and content marketing.', canonical: '/services/seo-content-marketing' },
  '/services/paid-advertising': { title: 'Paid Advertising | Zapshere', desc: 'Maximize ROI with data-driven Google, Meta, and TikTok Ads.', canonical: '/services/paid-advertising' },
  '/services/social-media-marketing': { title: 'Social Media Marketing | Zapshere', desc: 'Build an engaged community with our social media strategies.', canonical: '/services/social-media-marketing' },
  '/services/email-funnel-marketing': { title: 'Email & Funnel Marketing | Zapshere', desc: 'Convert leads into loyal customers with automated email funnels.', canonical: '/services/email-funnel-marketing' },
  '/services/analytics-reporting': { title: 'Analytics & Reporting | Zapshere', desc: 'Make informed decisions with advanced data analytics.', canonical: '/services/analytics-reporting' },
  '/products': { title: 'Products & Tools | Zapshere', desc: 'AI marketing products and tools by Zapshere.', canonical: '/products' },
  '/industries': { title: 'Industries We Serve | Zapshere', desc: 'Tailored digital marketing for your specific industry.', canonical: '/industries' },

  // AU Market
  '/au': { title: 'Zapshere Australia | Digital Marketing Agency', desc: 'Leading digital marketing agency in Australia.', canonical: '/au', hreflang: 'en-AU' },
  '/au/seo-services': { title: 'SEO Services Australia | Zapshere', desc: 'Top-tier SEO services across Australia.', canonical: '/au/seo-services', hreflang: 'en-AU' },
  '/au/paid-advertising': { title: 'Paid Advertising Australia | Zapshere', desc: 'High-converting paid ads in Australia.', canonical: '/au/paid-advertising', hreflang: 'en-AU' },
  '/au/social-media-marketing': { title: 'Social Media Agency Australia | Zapshere', desc: 'Social media management for Australian businesses.', canonical: '/au/social-media-marketing', hreflang: 'en-AU' },
  '/au/email-funnel-marketing': { title: 'Email Marketing Australia | Zapshere', desc: 'Automated email marketing in Australia.', canonical: '/au/email-funnel-marketing', hreflang: 'en-AU' },
  '/au/sydney': { title: 'Digital Marketing Agency Sydney | Zapshere', desc: 'Grow your Sydney business with Zapshere.', canonical: '/au/sydney', hreflang: 'en-AU' },
  '/au/melbourne': { title: 'Digital Marketing Agency Melbourne | Zapshere', desc: 'Grow your Melbourne business with Zapshere.', canonical: '/au/melbourne', hreflang: 'en-AU' },
  '/au/brisbane': { title: 'Digital Marketing Agency Brisbane | Zapshere', desc: 'Grow your Brisbane business with Zapshere.', canonical: '/au/brisbane', hreflang: 'en-AU' },
  '/au/perth': { title: 'Digital Marketing Agency Perth | Zapshere', desc: 'Grow your Perth business with Zapshere.', canonical: '/au/perth', hreflang: 'en-AU' },
  '/au/adelaide': { title: 'Digital Marketing Agency Adelaide | Zapshere', desc: 'Grow your Adelaide business with Zapshere.', canonical: '/au/adelaide', hreflang: 'en-AU' },

  // US Market
  '/us': { title: 'Zapshere USA | Digital Marketing Agency', desc: 'Leading digital marketing agency in the US.', canonical: '/us', hreflang: 'en-US' },
  '/us/seo-services': { title: 'SEO Services USA | Zapshere', desc: 'Top-tier SEO services across the US.', canonical: '/us/seo-services', hreflang: 'en-US' },
  '/us/paid-advertising': { title: 'Paid Advertising USA | Zapshere', desc: 'High-converting paid ads in the US.', canonical: '/us/paid-advertising', hreflang: 'en-US' },
  '/us/social-media-marketing': { title: 'Social Media Agency USA | Zapshere', desc: 'Social media management for US businesses.', canonical: '/us/social-media-marketing', hreflang: 'en-US' },
  '/us/new-york': { title: 'Digital Marketing Agency New York | Zapshere', desc: 'Grow your NYC business with Zapshere.', canonical: '/us/new-york', hreflang: 'en-US' },
  '/us/los-angeles': { title: 'Digital Marketing Agency Los Angeles | Zapshere', desc: 'Grow your LA business with Zapshere.', canonical: '/us/los-angeles', hreflang: 'en-US' },
  '/us/chicago': { title: 'Digital Marketing Agency Chicago | Zapshere', desc: 'Grow your Chicago business with Zapshere.', canonical: '/us/chicago', hreflang: 'en-US' },
  '/us/houston': { title: 'Digital Marketing Agency Houston | Zapshere', desc: 'Grow your Houston business with Zapshere.', canonical: '/us/houston', hreflang: 'en-US' },
  '/us/miami': { title: 'Digital Marketing Agency Miami | Zapshere', desc: 'Grow your Miami business with Zapshere.', canonical: '/us/miami', hreflang: 'en-US' },

  // DE Market
  '/de': { title: 'Zapshere Deutschland | Digital Marketing Agentur', desc: 'Führende Digital Marketing Agentur in Deutschland.', canonical: '/de', hreflang: 'de-DE' },
  '/de/seo-dienstleistungen': { title: 'SEO Dienstleistungen | Zapshere', desc: 'Erfolgreiches SEO für den deutschen Markt.', canonical: '/de/seo-dienstleistungen', hreflang: 'de-DE' },
  '/de/google-ads': { title: 'Google Ads Agentur | Zapshere', desc: 'Maximale ROI mit Google Ads in Deutschland.', canonical: '/de/google-ads', hreflang: 'de-DE' },
  '/de/social-media': { title: 'Social Media Marketing | Zapshere', desc: 'Community Building im DACH-Raum.', canonical: '/de/social-media', hreflang: 'de-DE' },
  '/de/berlin': { title: 'Digital Marketing Agentur Berlin | Zapshere', desc: 'Wachsen Sie in Berlin mit Zapshere.', canonical: '/de/berlin', hreflang: 'de-DE' },
  '/de/muenchen': { title: 'Digital Marketing Agentur München | Zapshere', desc: 'Wachsen Sie in München mit Zapshere.', canonical: '/de/muenchen', hreflang: 'de-DE' },
  '/de/hamburg': { title: 'Digital Marketing Agentur Hamburg | Zapshere', desc: 'Wachsen Sie in Hamburg mit Zapshere.', canonical: '/de/hamburg', hreflang: 'de-DE' },
  '/de/frankfurt': { title: 'Digital Marketing Agentur Frankfurt | Zapshere', desc: 'Wachsen Sie in Frankfurt mit Zapshere.', canonical: '/de/frankfurt', hreflang: 'de-DE' },

  // Utility Pages
  '/blog': { title: 'Digital Marketing Blog | Zapshere', desc: 'Insights and trends from Zapshere.', canonical: '/blog' },
  '/case-studies': { title: 'Case Studies & Results | Zapshere', desc: 'See how we drive ROI for our clients.', canonical: '/case-studies' },
  '/about': { title: 'About Zapshere | Our Mission & Team', desc: 'Learn more about Zapshere, the AI-powered digital agency.', canonical: '/about' },
  '/contact': { title: 'Contact Us | Zapshere', desc: 'Get in touch with Zapshere today.', canonical: '/contact' },
  '/privacy-policy': { title: 'Privacy Policy | Zapshere', desc: 'Zapshere Privacy Policy.', canonical: '/privacy-policy' }
};

// Generate Dynamic SEO Metadata for every route
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const path = '/' + resolvedParams.slug.join('/');
  const data = seoData[path];

  if (!data) return { title: 'Zapshere' };

  return {
    title: data.title,
    description: data.desc,
    alternates: {
      canonical: `https://www.zapshere.com${data.canonical}`,
      languages: data.hreflang ? { [data.hreflang]: `https://www.zapshere.com${data.canonical}` } : undefined
    }
  };
}

// Generate the Generic Internal Page Template
export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const path = '/' + resolvedParams.slug.join('/');
  const data = seoData[path];

  if (!data) {
    notFound();
  }

  const mainTitle = data.title.split('|')[0].trim();

  return (
    <>
      {/* Page Title */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/main-home/banner-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">{mainTitle}</h1>
            <ul className="page-breadcrumb">
              <li><a href="/">Home</a></li>
              <li>{mainTitle}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="services-details section-padding">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="mt-4">{mainTitle}</h2>
              <p className="text-muted mt-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>{data.desc}</p>
              
              <div className="content mt-5 text-start">
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.8 }}>
                      Welcome to Zapshere's <strong>{mainTitle}</strong>. We combine cutting-edge AI technology with data-driven strategy to deliver measurable results. Our team is dedicated to pushing the boundaries of digital growth.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.8 }}>
                      Whether you're looking to scale your organic presence, maximize your paid ad returns, or build automated conversion funnels, Zapshere provides the architecture and execution needed to dominate your market.
                  </p>
              </div>
              
              <div className="mt-5 mb-5">
                  <a href="/contact" className="theme-btn-main">
                      <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                      <span className="theme-btn theme-bg theme-color-white">Book a Strategy Call</span>
                      <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
