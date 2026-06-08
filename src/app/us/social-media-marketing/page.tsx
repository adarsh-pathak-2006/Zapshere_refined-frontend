"use client";
import React from 'react';
import Link from 'next/link';

export default function UnitedStatesSocialMedia() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Social Media Management",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ZAPSHERE USA",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "areaServed": "United States",
    "url": "https://zapshere.com/us/social-media-marketing"
  };

  return (
    <>
      {/* Inject LocalBusiness Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Page Title / Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/main-home/banner-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Social Media Marketing Agency USA</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/us">United States</Link></li>
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
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />US Brand Growth</span>
                  <h2>Build America&apos;s Next Great Brand Online</h2>
                </div>
                <div className="about-content">
                  <p>Strategy, content creation, influencer partnerships, and community management for American brands targeting US audiences across Instagram, TikTok, LinkedIn, X, Facebook, and Pinterest.</p>
                  <p>Building a brand in the United States requires profound cultural fluency. From tapping into the massive audiences of American sports and national holidays to understanding regional identity and humor, our social campaigns are meticulously crafted to resonate from coast to coast.</p>
                  
                  <div className="about-callout mt-4" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                      🚀 We deploy cross-platform strategies leveraging platforms unique to the American digital diet, ensuring maximum organic visibility and community trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1"><img src="/images/us-social-service.png" alt="American Social Media Strategy" style={{ borderRadius: '20px', width: '100%', border: '1px solid rgba(252,219,102,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media in the US */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />The ZAPSHERE Difference</span>
            <h2>Social Media for American Audiences</h2>
          </div>
          
          <div className="row justify-content-center">
            {/* Strategy 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-clock" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>EST/PST Timezone Management</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Active community management and moderation with extended US hours coverage, ensuring your brand responds in real-time across both coasts.
                </p>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-users-viewfinder" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>American Cultural Fluency</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Content built around American sports seasons, pop culture trends, national holidays, and regional identities to build genuine, culturally relevant connections.
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-handshake" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>US Influencer Network</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  We scout and manage powerful American creators across beauty, fitness, tech, food, fashion, and lifestyle to scale your brand&apos;s trusted reach.
                </p>
              </div>
            </div>
            
            {/* Strategy 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-brands fa-pinterest" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>Pinterest Strategy</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Visual discovery and eCommerce optimization on Pinterest — a critical platform for American home, food, fashion, and lifestyle brands.
                </p>
              </div>
            </div>

            {/* Strategy 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-brands fa-x-twitter" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>X (Twitter) Marketing</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Real-time conversational marketing and trend-jacking on X, ideal for American news, sports, entertainment, finance, and tech brands.
                </p>
              </div>
            </div>

            {/* Strategy 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".6s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-house-chimney-window" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>Nextdoor Advertising</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Hyper-local community engagement and lead generation on Nextdoor, the perfect channel for local US service businesses and brick-and-mortar stores.
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
                <h2>Ready to Dominate American Feeds?</h2>
                <p className="mt-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our US social experts to audit your current presence and map out a viral growth roadmap.</p>
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
