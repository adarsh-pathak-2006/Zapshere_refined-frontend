"use client";
import React from 'react';
import Link from 'next/link';

export default function AustraliaLocation() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/inner/page-title-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', display: 'block', marginBottom: '15px' }}>🇦🇺 Australia</span>
            <h1 className="title wow fadeInUp" data-wow-delay="0ms">Digital Marketing Agency Australia</h1>
            <p className="wow fadeInUp" data-wow-delay="200ms" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', marginTop: '15px', maxWidth: '700px', margin: '15px auto 0' }}>
              AI-powered growth strategies for Sydney, Melbourne, Brisbane, Perth & Adelaide
            </p>
            <ul className="page-breadcrumb wow fadeInUp" data-wow-delay="300ms">
              <li><Link href="/">Home</Link></li>
              <li>Australia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: 'rgba(252,219,102,0.05)', borderTop: '1px solid rgba(252,219,102,0.15)', borderBottom: '1px solid rgba(252,219,102,0.15)', padding: '40px 0' }}>
        <div className="auto-container">
          <div className="row text-center">
            {[
              { stat: '21.9M', label: 'Australian Internet Users' },
              { stat: '88%', label: 'Internet Penetration Rate' },
              { stat: '#6', label: 'Global Ad Spend Market' },
              { stat: 'AEST', label: 'Local Timezone Coverage' },
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
                src="/images/country-au.png"
                alt="Digital Marketing Australia"
                style={{ borderRadius: '20px', width: '100%', border: '1px solid rgba(252,219,102,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
              />
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInRight">
              <div style={{ paddingLeft: '30px' }}>
                <div className="sec-title mb-4">
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />AU Operations</span>
                  <h2>AI-Powered Growth for Australian Businesses</h2>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                  Zapshere is Australia&apos;s leading AI-powered digital marketing agency. We help Australian businesses across Sydney, Melbourne, Brisbane, Perth, and Adelaide dominate Google AU, grow on social, and scale their revenue online.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                  Australia&apos;s digital landscape is unique — from the dominance of Google.com.au to the strict ACCC regulatory environment. We understand the nuances of marketing down under.
                </p>
                <div className="mt-4" style={{ background: 'rgba(252, 219, 102, 0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                  <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                    🇦🇺 Australia is one of the world&apos;s top digital economies — the opportunity for digital growth is enormous.
                  </p>
                </div>
                <Link href="/contact" className="theme-btn-main mt-4" style={{ display: 'inline-block' }}>
                  <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                  <span className="theme-btn theme-bg theme-color-white">Book AU Strategy Call</span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zapshere Australia */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Local Expertise</span>
            <h2>Why Australian Brands Choose Us</h2>
          </div>
          <div className="row">
            {[
              { icon: 'fa-magnifying-glass-chart', title: 'Google.com.au Mastery', desc: 'Deep understanding of Australian search behaviour, EOFY trends, Click Frenzy, and Google.com.au ranking patterns.' },
              { icon: 'fa-shield-halved', title: 'ACCC Compliance', desc: 'All ad claims, testimonials, and pricing statements are crafted to fully comply with Australian Competition & Consumer Commission guidelines.' },
              { icon: 'fa-clock', title: 'AEST Timezone Support', desc: 'Your dedicated AU team works in Australian business hours — no waiting for offshore offices to wake up.' },
              { icon: 'fa-dollar-sign', title: 'AUD Billing & Reporting', desc: 'Transparent invoicing in Australian Dollars with GST included. No hidden currency conversion surprises.' },
              { icon: 'fa-mobile-screen', title: 'Mobile-First Strategy', desc: 'Australia has one of the highest mobile internet usage rates globally. Our campaigns are built mobile-first.' },
              { icon: 'fa-users', title: 'Cultural Fluency', desc: 'Creatives and copy crafted by people who understand the Australian tone — no generic, culturally-flat content.' },
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

      {/* Australian Services Grid */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Tailored Solutions</span>
            <h2>Our Australian Services</h2>
          </div>
          <div className="row justify-content-center">
            {[
              { href: '/au/seo-services', icon: 'fa-magnifying-glass', title: 'Local SEO AU', desc: 'Google Business Profile optimisation and Australian citation building targeting customers in your city or suburb.' },
              { href: '/au/paid-advertising', icon: 'fa-bullseye', title: 'Google Ads AU', desc: 'Smart Shopping, Local campaigns, and Performance Max targeting high-intent AU audiences across all devices.' },
              { href: '/au/paid-advertising', icon: 'fa-share-nodes', title: 'Meta Ads AU', desc: 'Laser-focused Meta Ads targeting Australian demographics, postcodes, suburbs, and specific interest groups.' },
              { href: '/au/paid-advertising', icon: 'fa-linkedin', title: 'LinkedIn Ads AU', desc: 'B2B campaigns reaching Australian executives, professionals, and decision-makers in their industries.' },
              { href: '/services/email-funnel-marketing', icon: 'fa-envelope-open-text', title: 'Email Marketing', desc: 'Revenue-generating email flows built with strict adherence to the Australian Spam Act 2003 compliance.' },
              { href: '/au/social-media-marketing', icon: 'fa-hashtag', title: 'Social Media AU', desc: 'Australian social media management with culturally-resonant content and AEST timezone community coverage.' },
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
            <h2>Cities We Serve Across Australia</h2>
          </div>
          <div className="row justify-content-center text-center">
            {['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle'].map((city, i) => (
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
              <h2 style={{ color: '#fff', marginBottom: '20px' }}>Ready to Dominate the Australian Market?</h2>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>Book a free 30-minute strategy call with our AU growth experts to map out your digital roadmap for the year ahead.</p>
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
