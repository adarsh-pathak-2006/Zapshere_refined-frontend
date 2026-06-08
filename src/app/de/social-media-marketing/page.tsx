"use client";
import React from 'react';
import Link from 'next/link';

export default function GermanySocialMedia() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Social Media Management",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Zapshere Germany",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "DE"
      }
    },
    "areaServed": "Germany",
    "url": "https://zapshere.com/de/social-media-marketing"
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
            <h1 className="title">Social Media Agentur Deutschland</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/de">Deutschland</Link></li>
              <li>Social Media</li>
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
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />DACH Community Growth</span>
                  <h2>Authentische Markenpräsenz auf Instagram, LinkedIn & TikTok</h2>
                </div>
                <div className="about-content">
                  <p>Social media management tailored for German audiences — GDPR-compliant content management, German-language community building, and XING & LinkedIn B2B strategies for the DACH market.</p>
                  <p>Building a brand in Germany requires profound cultural fluency. From tapping into the massive audiences of the German automotive and engineering sectors to understanding regional identity, strict privacy expectations, and direct communication styles, our social campaigns are meticulously crafted to resonate across the DACH region.</p>
                  
                  <div className="about-callout mt-4" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                      🚀 We deploy cross-platform strategies leveraging platforms unique to the German digital diet—like XING—ensuring maximum organic visibility and unshakeable community trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1"><img src="/images/about-1.jpg" alt="German Social Media Strategy" style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media in Germany */}
      <section className="services-section-two pt-100 pb-100" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />The Zapshere Difference</span>
            <h2>Social Media for German Audiences</h2>
          </div>
          
          <div className="row mt-5 justify-content-center">
            {/* Strategy 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon1.svg" alt="CET Timezones" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>CET/CEST Management</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Active community management aligned with German business hours, ensuring your brand responds in real-time to comments, DMs, and customer service inquiries.
                </p>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon2.svg" alt="Native Content" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>Native German Content</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Authentic, culturally fluent German-language content creation. We never rely on machine translations that instantly damage brand credibility in the DACH market.
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/service-icon2.png" alt="XING Strategy" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>XING B2B Strategy</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Dedicated B2B strategies on XING—Germany&apos;s leading professional network—and LinkedIn to target DACH decision-makers in the Mittelstand.
                </p>
              </div>
            </div>
            
            {/* Strategy 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/service-icon3.png" alt="Insta & TikTok" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>Instagram & TikTok</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Short-form video and visual strategies meticulously tuned to German consumer behavior, aesthetic preferences, and viral trends.
                </p>
              </div>
            </div>

            {/* Strategy 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon3.svg" alt="German Influencers" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>DACH Influencers</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  We scout and manage powerful German creators across automotive, engineering, outdoor, and sustainable lifestyle sectors to scale your brand&apos;s trust.
                </p>
              </div>
            </div>

            {/* Strategy 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".6s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon1.svg" alt="GDPR & Comms" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>GDPR & Crisis Comms</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  100% GDPR-compliant data handling with integrated crisis communication protocols aligned to German consumer expectations and regulatory sensitivities.
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
                <h2>Ready to Dominate German Feeds?</h2>
                <p className="mt-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our German social experts to audit your current presence and map out an organic growth roadmap.</p>
              </div>
              <Link className="theme-btn-main mt-4" href="/contact">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Get Your Free Social Audit</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
