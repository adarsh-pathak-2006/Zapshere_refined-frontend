"use client";
import React from 'react';
import Link from 'next/link';

export default function UnitedStatesLocation() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/inner/page-title-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', display: 'block', marginBottom: '15px' }}>🇺🇸 United States</span>
            <h1 className="title wow fadeInUp" data-wow-delay="0ms">Digital Marketing Agency USA</h1>
            <p className="wow fadeInUp" data-wow-delay="200ms" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', marginTop: '15px', maxWidth: '700px', margin: '15px auto 0' }}>
              AI-powered growth strategies for New York, Los Angeles, Chicago, Houston & beyond
            </p>
            <ul className="page-breadcrumb wow fadeInUp" data-wow-delay="300ms">
              <li><Link href="/">Home</Link></li>
              <li>United States</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: 'rgba(252,219,102,0.05)', borderTop: '1px solid rgba(252,219,102,0.15)', borderBottom: '1px solid rgba(252,219,102,0.15)', padding: '40px 0' }}>
        <div className="auto-container">
          <div className="row text-center">
            {[
              { stat: '310M', label: 'US Internet Users' },
              { stat: '$270B', label: 'US Digital Ad Market' },
              { stat: '50', label: 'States We Cover' },
              { stat: '#1', label: 'Global Ad Spend Market' },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                <div style={{ padding: '10px' }}>
                  <h3 style={{ color: '#fcdb66', fontSize: '42px', fontWeight: 800, margin: 0 }}>{item.stat}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', margin: '5px 0 0', fontSize: '15px' }}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 wow fadeInLeft">
              <img
                src="/images/country-us.png"
                alt="Digital Marketing USA"
                style={{ borderRadius: '20px', width: '100%', border: '1px solid rgba(252,219,102,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
              />
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInRight">
              <div style={{ paddingLeft: '30px' }}>
                <div className="sec-title mb-4">
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />US Operations</span>
                  <h2>AI-Powered Growth for American Businesses</h2>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                  ZAPSHERE partners with American businesses across New York, Los Angeles, Chicago, Houston, and nationwide — delivering data-driven SEO, paid advertising, and marketing automation strategies built for the US market.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                  The American digital marketing landscape is the world&apos;s largest and most competitive. With 310M internet users, marketing in the US requires hyper-targeted strategies and sophisticated audience segmentation.
                </p>
                <div className="mt-4" style={{ background: 'rgba(252, 219, 102, 0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                  <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                    🇺🇸 The US digital advertising market is worth over $270 billion annually — and ZAPSHERE helps American businesses capture their share.
                  </p>
                </div>
                <Link href="/contact" className="theme-btn-main mt-4" style={{ display: 'inline-block' }}>
                  <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                  <span className="theme-btn theme-bg theme-color-white">Book US Strategy Call</span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ZAPSHERE USA */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Local Expertise</span>
            <h2>Built for the US Market</h2>
          </div>
          <div className="row">
            {[
              { icon: 'fa-magnifying-glass-chart', title: 'Google.com Mastery', desc: 'Deep understanding of US search intent, Google\'s local pack ranking, and E-E-A-T content quality standards.' },
              { icon: 'fa-shield-halved', title: 'CCPA & CAN-SPAM', desc: 'All campaigns and email flows are fully compliant with California Consumer Privacy Act and federal CAN-SPAM requirements.' },
              { icon: 'fa-map-pin', title: 'ZIP-Level Targeting', desc: 'We can target at the ZIP code level across all 50 states — from dense urban CBDs to rural markets.' },
              { icon: 'fa-dollar-sign', title: 'USD Billing', desc: 'Transparent invoicing in US Dollars with clear reporting aligned to US fiscal quarters and business cycles.' },
              { icon: 'fa-amazon', title: 'Amazon Advertising', desc: 'Full Amazon Sponsored Products, Brands, and DSP management for eCommerce brands selling in the US.' },
              { icon: 'fa-users', title: 'Cultural Fluency', desc: 'American English copy and creatives crafted by US market experts — no generic, culturally-flat content.' },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                <div className="premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', padding: '35px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0, fontSize: '15px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* US Services Grid */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Tailored Solutions</span>
            <h2>Our US Services</h2>
          </div>
          <div className="row justify-content-center">
            {[
              { href: '/us/seo-services', icon: 'fa-magnifying-glass', title: 'Local SEO USA', desc: 'Google Business Profile optimisation and US citation building targeting customers in your state or city.' },
              { href: '/us/paid-advertising', icon: 'fa-bullseye', title: 'Google Ads USA', desc: 'Smart Shopping, Local campaigns, and Performance Max targeting high-intent American audiences nationwide.' },
              { href: '/us/paid-advertising', icon: 'fa-share-nodes', title: 'Meta Ads USA', desc: 'Laser-focused Meta Ads targeting US demographics, ZIP codes, and specific interest groups across all 50 states.' },
              { href: '/us/paid-advertising', icon: 'fa-linkedin', title: 'LinkedIn Ads USA', desc: 'B2B campaigns reaching American C-suite executives, directors, and key decision-makers in every industry.' },
              { href: '/services/email-funnel-marketing', icon: 'fa-envelope-open-text', title: 'Email Marketing', desc: 'Revenue-generating email flows and campaigns built with strict CAN-SPAM Act compliance.' },
              { href: '/us/social-media-marketing', icon: 'fa-hashtag', title: 'Social Media USA', desc: 'US social media management with culturally-resonant American content and multi-timezone coverage.' },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay={`${(i + 1) * 0.1}s`}>
                <Link href={item.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.03)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>{item.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-12 md:py-16 lg:py-[80px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Coverage</span>
            <h2>Major Cities We Serve Across the USA</h2>
          </div>
          <div className="row justify-content-center text-center">
            {['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'San Francisco', 'Seattle', 'Miami'].map((city, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-6 mb-4 wow fadeInUp" data-wow-delay={`${i * 0.05}s`}>
                <div className="premium-hover-card" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: '#fcdb66', fontSize: '20px', marginBottom: '10px', display: 'block' }}></i>
                  <h5 style={{ color: '#fff', margin: 0, fontSize: '18px' }}>{city}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 wow fadeInUp">
              <h2 style={{ color: '#fff', marginBottom: '20px' }}>Ready to Dominate the US Market?</h2>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>Book a free 30-minute strategy call with our US growth experts to map out your digital roadmap for the year ahead.</p>
              <Link className="theme-btn-main" href="/contact">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Get Your Free Strategy Session</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
