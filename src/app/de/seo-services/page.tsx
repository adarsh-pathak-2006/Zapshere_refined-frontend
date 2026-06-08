"use client";
import React from 'react';
import Link from 'next/link';

export default function GermanySeoServices() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ZAPSHERE Germany",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "DE"
      }
    },
    "areaServed": "Germany",
    "url": "https://zapshere.com/de/seo-services"
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
            <h1 className="title">SEO Agentur Deutschland</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/de">Deutschland</Link></li>
              <li>SEO</li>
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
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Google.de Excellence</span>
                  <h2>Top-Rankings auf Google.de für Ihr Unternehmen</h2>
                </div>
                <div className="about-content">
                  <p>AI-gestützte Suchmaschinenoptimierung speziell für den deutschen Markt — technisches SEO, Content-Marketing und Linkbuilding für nachhaltige Sichtbarkeit auf Google.de.</p>
                  <p>German search behaviour differs significantly from English markets. German users often use longer, more descriptive compound keywords, and expect highly authoritative content. ZAPSHERE combines native linguistic expertise with advanced technical SEO to capture top positions on Google.de.</p>
                  
                  <div className="about-callout mt-4" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                      🚀 Our native German keyword researchers identify the exact terms your target audience uses, ensuring your content drives highly qualified, conversion-ready traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1"><img src="/images/about-1.jpg" alt="German SEO Strategy" style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Differently */}
      <section className="services-section-two pt-100 pb-100" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />The ZAPSHERE Difference</span>
            <h2>SEO Specific to the German Market</h2>
          </div>
          
          <div className="row mt-5 justify-content-center">
            {/* Strategy 1 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon1.svg" alt="German Keyword Research" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>German Keyword Research</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  We map out complex German compound keywords (e.g., &quot;Online-Marketing-Dienstleistungen&quot;) rather than relying on direct English translations, ensuring precise search intent matching.
                </p>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon2.svg" alt="GDPR Technical SEO" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>GDPR-Compliant Technical SEO</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Fully compliant tracking architecture with cookieless measurement, server-side GTM, and cookie banner integration that doesn&apos;t negatively impact your Core Web Vitals.
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/icon3.svg" alt="German Link Building" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>German Link Building</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  We build authoritative backlinks from recognised German publishers (SPIEGEL Online, Handelsblatt, CHIP.de, t3n, Gründerszene) to establish undeniable domain authority.
                </p>
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div className="service_single_item-2" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="service_icon mb-4">
                  <img src="/images/service-icon2.png" alt="Lokales SEO" style={{ width: '50px' }} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>Lokales SEO (City-Level)</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Google Business Profile optimization and high-quality local citation building on Das Örtliche, Gelbe Seiten, und Yelp.de to dominate regional search results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City-Level SEO Pages */}
      <section className="mission-section pt-100 pb-100">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 wow fadeInUp">
              <div className="mission-icon-box">
                <div className="sec-title mb-4">
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Local Coverage</span>
                  <h2>Major German Markets</h2>
                </div>
                <p className="mission-description" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>
                  Our location page architecture and local SEO strategies cover every major economic hub in the DACH region, ensuring your brand captures local search intent.
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 wow fadeInRight">
              <div className="row">
                {['Berlin', 'München', 'Hamburg', 'Frankfurt', 'Köln', 'Stuttgart', 'Düsseldorf', 'Leipzig'].map((city, i) => (
                  <div key={i} className="col-md-4 col-sm-6 mb-3">
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }} className="city-pill hover-zoom">
                      <h6 style={{ color: '#fff', margin: 0, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <i className="fa-solid fa-location-dot" style={{ color: '#fcdb66', fontSize: '12px' }}></i> {city}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                .city-pill:hover {
                  background: rgba(252, 219, 102, 0.1) !important;
                  border-color: rgba(252, 219, 102, 0.3) !important;
                  transform: translateY(-2px);
                }
              `}} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section pt-100 pb-100" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="auto-container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 wow fadeInUp">
              <div className="sec-title">
                <h2>Ready to Dominate Google.de?</h2>
                <p className="mt-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our German SEO experts to map out an organic growth strategy tailored exactly for your market.</p>
              </div>
              <Link className="theme-btn-main mt-4" href="/contact">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Get Your Free SEO Audit</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
