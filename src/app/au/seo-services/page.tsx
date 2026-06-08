"use client";
import React from 'react';
import Link from 'next/link';

export default function AustraliaSeoServices() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ZAPSHERE Australia",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    },
    "areaServed": "Australia",
    "url": "https://zapshere.com/au/seo-services"
  };

  return (
    <>
      {/* Inject LocalBusiness Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Page Title / Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/inner/page-title-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">SEO Agency Australia</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/au">Australia</Link></li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />AU Search Excellence</span>
                  <h2>Dominate Google.com.au Rankings</h2>
                </div>
                <div className="about-content">
                  <p>Expert search engine optimisation built specifically for Australian search intent, Google.com.au algorithms, and the competitive landscape across Sydney, Melbourne, Brisbane, and Perth.</p>
                  <p>Australian SEO requires a different approach from global campaigns. Google.com.au has its own SERP features, local algorithm signals, and Australian-specific ranking factors. Our team at ZAPSHERE has spent years mastering the nuances of the Australian search ecosystem.</p>
                  
                  <div className="about-callout mt-4" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                      🇦🇺 We build hyper-localised strategies that connect your brand with high-intent Australian buyers at the exact moment they search.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1"><img src="/images/au-seo-service.png" alt="Australian SEO Strategy" style={{ borderRadius: '20px', width: '100%', border: '1px solid rgba(252,219,102,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Differently */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />The ZAPSHERE Difference</span>
            <h2>SEO for Australia</h2>
          </div>
          
          <div className="row justify-content-center">
            {/* Service 1 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-map-location-dot" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>Google My Business & Local Pack</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  For businesses serving local Australian markets, appearing in the Maps 3-pack is critical. We optimise your Google Business Profile, build Australian citations (Yellow Pages AU, True Local, Yelp AU), and implement local schema markup.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-link" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>Australian Link Building</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  We build high-authority backlinks from Australian publications, industry directories, news sites (news.com.au, The Australian, AFR), and niche blogs — signals that tell Google.com.au your business is a trusted Australian authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City-Level SEO Pages */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 wow fadeInUp">
              <div className="mission-icon-box">
                <div className="sec-title mb-4">
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Local Coverage</span>
                  <h2>City-Level SEO Campaigns</h2>
                </div>
                <p className="mission-description" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>
                  We don&apos;t just target generic national keywords. We build dedicated, hyper-localised campaigns targeting suburb-level search intent with custom content, reviews, and structured data for every major Australian hub.
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 wow fadeInRight">
              <div className="row text-center">
                {['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Gold Coast', 'Hobart'].map((city, i) => (
                  <div key={i} className="col-md-3 col-sm-4 col-6 mb-3">
                    <div className="premium-hover-card" style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                      <h6 style={{ color: '#fff', margin: 0, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <i className="fa-solid fa-location-dot" style={{ color: '#fcdb66', fontSize: '12px' }}></i> {city}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 wow fadeInUp">
              <div className="sec-title">
                <h2>Ready to Own the Australian SERPs?</h2>
                <p className="mt-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our local SEO experts to map out an organic growth strategy tailored exactly for your Australian market.</p>
              </div>
              <Link className="theme-btn-main mt-4" href="/contact">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Get Your Free AU SEO Audit</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
