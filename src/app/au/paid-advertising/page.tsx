"use client";
import React from 'react';
import Link from 'next/link';

export default function AustraliaPaidAds() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Paid Advertising Management",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Zapshere Australia",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    },
    "areaServed": "Australia",
    "url": "https://zapshere.com/au/paid-advertising"
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
            <h1 className="title">Google Ads & Meta Ads Agency Australia</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/au">Australia</Link></li>
              <li>Paid Ads</li>
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
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Maximum ROAS</span>
                  <h2>Performance Marketing for Australian Businesses</h2>
                </div>
                <div className="about-content">
                  <p>Certified Google Partners managing paid advertising campaigns across Google, Meta, LinkedIn, and TikTok for Australian businesses — targeting AUD budgets for AU audiences.</p>
                  <p>Managing paid advertising in Australia requires a deep understanding of Australian audiences, seasonal buying behaviour like EOFY or Boxing Day, and platform preferences. Australian users engage differently with ads on Meta and TikTok compared to US audiences — and our campaigns are built from the ground up to reflect this.</p>
                  
                  <div className="about-callout mt-4" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                      🎯 We own the entire funnel — from targeting specific LGAs and postcodes to managing strict ATO-compliant billing in Australian Dollars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1"><img src="/images/au-paid-ads-service.png" alt="AU Paid Ads Strategy" style={{ borderRadius: '20px', width: '100%', border: '1px solid rgba(252,219,102,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zapshere Paid Ads */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />The Zapshere Difference</span>
            <h2>Paid Ads for the Australian Market</h2>
          </div>
          
          <div className="row justify-content-center">
            {/* Strategy 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-dollar-sign" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>AUD Budget Management</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Transparent budget management and reporting in Australian dollars (AUD). No hidden conversion fees or complex cross-border ad account setups.
                </p>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-bullseye" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>Hyper-Local Targeting</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Precise Australian audience targeting down to specific states, territories, LGAs, postcodes, and local demographics across Sydney, Melbourne, and beyond.
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-solid fa-calendar-days" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>Seasonal AU Campaigns</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Campaign planning explicitly aligned with Australian retail cycles — maximizing ROI during EOFY, Boxing Day sales, AFL Grand Final, and Click Frenzy.
                </p>
              </div>
            </div>
            
            {/* Strategy 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-brands fa-google" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>AU Google Shopping</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Optimized Google Merchant Center setups for Australian eCommerce stores, ensuring correct AU pricing, local shipping rules, and GST compliance.
                </p>
              </div>
            </div>

            {/* Strategy 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fa-brands fa-tiktok" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>TikTok for Gen Z</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  Culturally relevant TikTok ad campaigns designed specifically to capture the attention of Australian Gen Z and Millennial demographics.
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
                <h2>Ready to Maximize Your Australian Ad Spend?</h2>
                <p className="mt-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our certified ad experts to audit your current campaigns and uncover hidden ROI.</p>
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
