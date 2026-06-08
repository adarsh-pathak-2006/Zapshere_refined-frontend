import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing for Every Industry | eCommerce, SaaS, Health & More | ZAPSHERE',
  description: 'ZAPSHERE serves eCommerce, SaaS, healthcare, real estate, finance, hospitality, and education sectors with tailored digital marketing strategies across Australia, USA, and Germany.',
  alternates: {
    canonical: 'https://www.zapshere.com/industries'
  }
};

export default function IndustriesPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/inner/page-title-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title wow fadeInUp" data-wow-delay="0ms">Bespoke Growth Strategies Built for Your Industry</h1>
            <ul className="page-breadcrumb wow fadeInUp" data-wow-delay="200ms">
              <li><Link href="/">Home</Link></li>
              <li>Industries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. The Cost of Generic Marketing */}
      <section className="about-section pt-100 pb-100">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-0 wow fadeInLeft">
              <img src="/images/generic_vs_bespoke.png" alt="Generic vs Bespoke Marketing" style={{ borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <div className="inner-column" style={{ paddingLeft: '30px' }}>
                <div className="sec-title mb-4">
                  <span className="sub-title" style={{ color: '#ff4a4a' }}>The Generic Trap</span>
                  <h2>Why "One-Size-Fits-All" Marketing Fails</h2>
                </div>
                <div className="about-content">
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                    Marketing a high-ticket B2B SaaS platform is fundamentally different from selling direct-to-consumer apparel. The buyer journey, the decision-makers, the compliance regulations, and the platform algorithms change entirely.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                    At ZAPSHERE, we don't force your business into a generic template. We architect highly targeted, industry-specific marketing ecosystems that respect your unique sales cycles and audience behaviors.
                  </p>
                  <div className="about-callout mt-4" style={{ background: 'rgba(252, 219, 102, 0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                      Businesses that implement industry-specific marketing funnels see an average 40% higher conversion rate than those using generic campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: SaaS */}
      <section className="industry-deep-dive pt-100 pb-100" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 order-lg-2 wow fadeInRight">
              <img src="/images/industry_saas.png" alt="SaaS Marketing" style={{ borderRadius: '15px', width: '100%' }} />
            </div>
            <div className="col-lg-6 col-md-12 order-lg-1 wow fadeInLeft">
              <div className="sec-title">
                <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />B2B & Technology</span>
                <h2>SaaS & Software Marketing</h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '30px' }}>
                We understand Product-Led Growth (PLG) and Sales-Led motions. We build marketing engines that generate highly qualified MQLs, reduce Customer Acquisition Cost (CAC), and drive compounding Monthly Recurring Revenue (MRR).
              </p>
              <ul className="list-style-two" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Account-Based Marketing (ABM) on LinkedIn</li>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> High-intent Google Search campaigns</li>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Technical SEO and thought-leadership content</li>
              </ul>
              <Link href="/contact" className="theme-btn-main mt-4">
                <span className="theme-btn theme-bg theme-color-white">Scale Your MRR</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deep Dive: eCommerce */}
      <section className="industry-deep-dive pt-100 pb-100">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 wow fadeInLeft">
              <img src="/images/industry_ecommerce.png" alt="eCommerce Marketing" style={{ borderRadius: '15px', width: '100%' }} />
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInRight">
              <div className="sec-title">
                <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Retail & DTC</span>
                <h2>eCommerce & Retail</h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '30px' }}>
                In the hyper-competitive eCommerce landscape, margins matter. We optimize the entire shopping funnel—from initial scroll-stopping ad creatives on Meta and TikTok, to advanced cart-abandonment email sequences.
              </p>
              <ul className="list-style-two" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Google Performance Max & Shopping Feeds</li>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Dynamic Product Retargeting on Meta</li>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Klaviyo email automation for lifetime value (LTV)</li>
              </ul>
              <Link href="/contact" className="theme-btn-main mt-4">
                <span className="theme-btn theme-bg theme-color-white">Maximize Your ROAS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep Dive: Healthcare */}
      <section className="industry-deep-dive pt-100 pb-100" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 order-lg-2 wow fadeInRight">
              <img src="/images/industry_healthcare.png" alt="Healthcare Marketing" style={{ borderRadius: '15px', width: '100%' }} />
            </div>
            <div className="col-lg-6 col-md-12 order-lg-1 wow fadeInLeft">
              <div className="sec-title">
                <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Medical & Wellness</span>
                <h2>Healthcare Providers</h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '30px' }}>
                Healthcare marketing requires a delicate balance of trust, authority, and strict regulatory compliance (HIPAA, AHPRA, GDPR). We help clinics, telehealth platforms, and practitioners acquire new patients ethically and effectively.
              </p>
              <ul className="list-style-two" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Local SEO & Google Business Profile dominance</li>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Compliant Search Ads capturing active patient intent</li>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Reputation management and automated review generation</li>
              </ul>
              <Link href="/contact" className="theme-btn-main mt-4">
                <span className="theme-btn theme-bg theme-color-white">Grow Your Practice</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Deep Dive: Finance */}
      <section className="industry-deep-dive pt-100 pb-100">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 wow fadeInLeft">
              <img src="/images/industry_finance.png" alt="Finance Marketing" style={{ borderRadius: '15px', width: '100%' }} />
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInRight">
              <div className="sec-title">
                <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Fintech & Wealth</span>
                <h2>Finance & Financial Services</h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '30px' }}>
                Trust is the ultimate currency in finance. We build authority-driven marketing ecosystems for wealth managers, fintech startups, and accounting firms, generating high-net-worth leads while navigating strict ad platform policies.
              </p>
              <ul className="list-style-two" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Long-form SEO pillar content for financial literacy</li>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> B2B networking and lead generation on LinkedIn</li>
                <li style={{ marginBottom: '15px' }}><i className="fa-solid fa-check" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Secure, compliant lead capture funnels</li>
              </ul>
              <Link href="/contact" className="theme-btn-main mt-4">
                <span className="theme-btn theme-bg theme-color-white">Acquire High-Value Clients</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Secondary Industries Grid */}
      <section className="services-section section-padding pt-100 pb-100" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />More Verticals</span>
            <h2>Other Industries We Empower</h2>
          </div>
          <div className="row justify-content-center">
            
            {/* Real Estate */}
            <div className="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '30px 20px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '24px' }}>
                  <i className="fa-solid fa-building"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '20px' }}>Real Estate</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '15px', marginBottom: '0' }}>
                  Geo-targeted property ads, suburb-level SEO, and lead nurture funnels for agencies and developers.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay="200ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '30px 20px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '24px' }}>
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '20px' }}>Education</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '15px', marginBottom: '0' }}>
                  Student acquisition campaigns and enrolment funnel optimisation for universities and RTOs.
                </p>
              </div>
            </div>

            {/* Hospitality */}
            <div className="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay="300ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '30px 20px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '24px' }}>
                  <i className="fa-solid fa-utensils"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '20px' }}>Hospitality</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '15px', marginBottom: '0' }}>
                  Seasonal campaign management and local discovery optimisation for hotels and restaurants.
                </p>
              </div>
            </div>

            {/* Professional Services */}
            <div className="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay="400ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '30px 20px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '24px' }}>
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '20px' }}>Professional Services</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '15px', marginBottom: '0' }}>
                  Lead generation and authority-building content for law firms and B2B consultancies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Cross-Industry Tech Stack */}
      <section className="tech-stack-section pt-100 pb-100">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-5 wow fadeInLeft">
              <div className="sec-title">
                <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Core Engine</span>
                <h2>Different Industries, One Powerful AI Engine</h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                While our strategies are highly bespoke, they are all powered by our proprietary <strong>Nexus Intelligence™</strong> suite. This ensures that whether you are selling software or sneakers, your campaigns benefit from world-class machine learning, automated bid optimization, and real-time data attribution.
              </p>
            </div>
            <div className="col-lg-6 offset-lg-1 wow fadeInRight">
              <div className="row">
                <div className="col-6 mb-4">
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <i className="fa-brands fa-google" style={{ fontSize: '40px', color: '#fff', marginBottom: '15px' }}></i>
                    <h5>Google Ecosystem</h5>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <i className="fa-brands fa-meta" style={{ fontSize: '40px', color: '#fff', marginBottom: '15px' }}></i>
                    <h5>Meta Business</h5>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <i className="fa-brands fa-hubspot" style={{ fontSize: '40px', color: '#fff', marginBottom: '15px' }}></i>
                    <h5>HubSpot CRM</h5>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <i className="fa-solid fa-chart-line" style={{ fontSize: '40px', color: '#fff', marginBottom: '15px' }}></i>
                    <h5>Looker Studio</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-12 md:py-16 lg:py-[80px] cta-section text-center section-padding" style={{background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 wow fadeInUp">
              <h2 className="mb-3">Ready to Dominate Your Vertical?</h2>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>Partner with ZAPSHERE to build a custom marketing ecosystem tailored for your exact industry.</p>
              <Link href="/contact" className="theme-btn-main">
                <span className="theme-btn theme-bg theme-color-white" style={{ padding: '15px 40px', fontSize: '18px' }}>Discuss Your Strategy</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
