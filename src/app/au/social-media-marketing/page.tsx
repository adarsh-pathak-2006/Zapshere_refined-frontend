"use client";
import React from 'react';
import Link from 'next/link';

export default function AustraliaSocialMedia() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Social Media Management",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ZAPSHERE Australia",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    },
    "areaServed": "Australia",
    "url": "https://zapshere.com/au/social-media-marketing"
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
            <h1 className="title">Social Media Agency Australia</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/au">Australia</Link></li>
              <li>Social Media</li>
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
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />AU Community Growth</span>
                  <h2>Grow Your Brand Across Every Platform</h2>
                </div>
                <div className="about-content">
                  <p>Australian social media management with culturally-resonant content, localised community building, and platform-specific strategies for brands targeting Australian consumers.</p>
                  <p>Australian audiences have distinct social media preferences. Instagram and TikTok dominate among 18–35 year olds, LinkedIn is growing rapidly among Australian professionals, and Facebook remains powerful for local community engagement and marketplace activity. At ZAPSHERE, we tailor your content and strategy specifically to the Australian social landscape.</p>
                  
                  <div className="about-callout mt-4" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                      📱 Brands that tap into authentic Australian cultural relevance see significantly higher engagement rates and lower customer acquisition costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1"><img src="/images/au-social-service.png" alt="AU Social Media Strategy" style={{ borderRadius: '20px', width: '100%', border: '1px solid rgba(252,219,102,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media in Australia — Our Approach */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />The ZAPSHERE Approach</span>
            <h2>Social Media in Australia</h2>
          </div>
          
          <div className="row justify-content-center">
            {/* Strategy 1 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-clock" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>AEST Timezone Coverage</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Active community management aligned with Australian waking hours. We provide active engagement, response handling, and moderation from 7am to 10pm AEST.
                </p>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-users-viewfinder" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>Cultural Relevance</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Content that naturally resonates with Australian audiences — tapping into local sport, lifestyle, humour, and major national events without feeling forced or artificial.
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-handshake" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>AU Influencer Partnerships</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  We scout, vet, and manage Australian creator partnerships ranging from highly engaged local nano-creators to large-scale national macro-influencers.
                </p>
              </div>
            </div>
            
            {/* Strategy 4 */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-chart-line" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>Localised Algorithm Strategy</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Platform strategies perfectly aligned to Australian algorithm distribution patterns, geographic trends, and peak local engagement times across Sydney, Melbourne, Brisbane, and Perth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 wow fadeInUp">
              <div className="sec-title">
                <h2>Ready to Grow Your Australian Audience?</h2>
                <p className="mt-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our AU social experts to audit your current presence and map out an organic growth roadmap.</p>
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
