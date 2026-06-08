"use client";
import React from 'react';
import Link from 'next/link';

export default function GermanyPaidAds() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Paid Advertising Management",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Zapshere Germany",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "DE"
      }
    },
    "areaServed": "Germany",
    "url": "https://zapshere.com/de/paid-advertising"
  };

  return (
    <>
      {/* Inject LocalBusiness Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Page Title / Hero Section */}
      <section className="page-title" style={{ backgroundImage: "url('/images/main-home/banner-bg.png')" }}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Google Ads & Meta Ads Agentur Deutschland</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/de">Deutschland</Link></li>
              <li>Paid Ads</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-section pt-100 pb-100">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />DSGVO-konform</span>
                  <h2>GDPR-konforme Werbung mit maximalem ROAS</h2>
                </div>
                <div className="about-content">
                  <p>Professional paid advertising management for German businesses — fully GDPR-compliant Google Ads, Meta Ads, LinkedIn, and TikTok campaigns targeting German-speaking audiences.</p>
                  <p>Germany&apos;s paid advertising landscape presents unique challenges. Strict GDPR enforcement means audience data is more limited than in the US or AU, making creative excellence and targeting intelligence even more critical. German consumers are also known to be more sceptical of advertising, which requires authenticity and trust signals in every ad we deploy.</p>
                  
                  <div className="about-callout mt-4" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                      🇩🇪 Germany&apos;s digital advertising market is worth over €10 billion annually — with Google holding 95% of the German search market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1"><img src="/images/about-2.jpg" alt="German Paid Ads Strategy" style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zapshere Paid Ads */}
      <section className="services-section-two pt-100 pb-100" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />The Zapshere Difference</span>
            <h2>Paid Advertising in Germany</h2>
          </div>
          
          <div className="row mt-5 justify-content-center">
            {/* Strategy 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon1.svg" alt="DSGVO Compliance" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>GDPR-Compliant Setup</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Flawless campaign setup with proper consent management (Consent Mode V2) and strict audience data restrictions complying fully with German law.
                </p>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon2.svg" alt="German Native Copy" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>Native German Creative</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  High-converting German-language ad creative and copy. We rely on native nuance—not machine translation—to establish immediate credibility and trust.
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon3.svg" alt="Google.de Search" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>Google.de Campaigns</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Performance-driven search campaigns explicitly targeting unique German intent signals, compound keywords, and high-value local search queries.
                </p>
              </div>
            </div>
            
            {/* Strategy 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/service-icon2.png" alt="XING Ads" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>XING B2B Advertising</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Targeting Germany&apos;s dominant professional network to reach decision-makers across the Mittelstand and DAX-listed enterprises.
                </p>
              </div>
            </div>

            {/* Strategy 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/service-icon3.png" alt="Trusted Shops" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>Trusted Shops Integration</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Seamless integration of Trusted Shops and other critical German trust signals into your eCommerce ads to dramatically boost conversion rates.
                </p>
              </div>
            </div>

            {/* Strategy 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".6s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon1.svg" alt="DACH Seasonal Ads" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>DACH Seasonal Planning</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Campaign scaling mapped to German retail cycles, including Oktoberfest, Black Friday DE, and regional public holidays (Feiertage).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section pt-100 pb-100">
        <div className="auto-container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 wow fadeInUp">
              <div className="sec-title">
                <h2>Ready to Maximize Your DACH Ad Spend?</h2>
                <p className="mt-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our German market ad experts to audit your campaigns and ensure full GDPR compliance.</p>
              </div>
              <Link className="theme-btn-main mt-4" href="/contact">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Get Your Free Ads Audit</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
