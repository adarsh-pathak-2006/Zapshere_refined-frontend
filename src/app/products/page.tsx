import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Marketing Products & Tools | Automation, Analytics & Growth | Zapshere',
  description: 'Discover Zapshere\'s suite of marketing technology products — including AI campaign automation, SEO intelligence tools, and real-time analytics dashboards designed for scaling businesses.',
  alternates: {
    canonical: 'https://www.zapshere.com/products'
  }
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Title */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/inner/page-title-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title wow fadeInUp" data-wow-delay="0ms">Proprietary AI Marketing Products for Faster, Smarter Growth</h1>
            <ul className="page-breadcrumb wow fadeInUp" data-wow-delay="200ms">
              <li><Link href="/">Home</Link></li>
              <li>Products</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="services-details section-padding" style={{ paddingBottom: '0px' }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center wow fadeInUp" data-wow-delay="0ms">
              <span className="sub-title" style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', display: 'block' }}>
                <i className="fa-solid fa-angle-right"></i> Our Technology <i className="fa-solid fa-angle-left"></i>
              </span>
              <h2>Technology That Works While You Sleep</h2>
              <p className="mt-4" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                Zapshere offers proprietary marketing technology products built to automate growth, unify data, and accelerate decision-making across your entire marketing operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines - Grid using Theme Style */}
      <section className="services-section section-padding" style={{ paddingBottom: '60px' }}>
        <div className="auto-container">
          <div className="row justify-content-center">
            
            {/* Product 1 */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '40px 30px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '70px', height: '70px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '28px' }}>
                  <i className="fa-solid fa-brain"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '22px' }}>Nexus Intelligence™</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Our AI-powered marketing brain — analyses your campaigns 24/7, identifies opportunities, alerts anomalies, and auto-optimises bids and budgets in real time.
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="200ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '40px 30px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '70px', height: '70px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '28px' }}>
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '22px' }}>Nexus SEO Suite™</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
                  End-to-end SEO management platform with keyword tracking, competitor intelligence, content gap analysis, and automated technical SEO audits.
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="300ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '40px 30px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '70px', height: '70px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '28px' }}>
                  <i className="fa-solid fa-satellite-dish"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '22px' }}>Nexus Dashboard™</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Unified marketing analytics dashboard connecting all channels — ads, SEO, email, social — into one real-time view of your marketing ROI.
                </p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="400ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '40px 30px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '70px', height: '70px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '28px' }}>
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '22px' }}>Nexus Funnel Builder™</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Visual funnel builder with AI-recommended content, email sequences, and conversion checkpoints tailored to your buyer personas.
                </p>
              </div>
            </div>

            {/* Product 5 */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="500ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '40px 30px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '70px', height: '70px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '28px' }}>
                  <i className="fa-solid fa-robot"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '22px' }}>Nexus Automator™</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Automate repetitive marketing tasks — reporting, ad scheduling, content publishing, lead scoring, and CRM updates — without writing a line of code.
                </p>
              </div>
            </div>

            {/* Product 6 */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="600ms">
              <div className="service-card premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '40px 30px', height: '100%' }}>
                <div className="icon-box mb-4" style={{ width: '70px', height: '70px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcdb66', fontSize: '28px' }}>
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '22px' }}>Nexus Local™</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Multi-location marketing automation tool for managing SEO, ads, and content across Australian, American, and German markets simultaneously.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section mapped to Theme aesthetics */}
      <section className="pricing-section section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="auto-container">
          <div className="row mb-5 text-center wow fadeInUp">
            <div className="col-12">
              <span className="sub-title" style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', display: 'block' }}>
                <i className="fa-solid fa-angle-right"></i> Investment <i className="fa-solid fa-angle-left"></i>
              </span>
              <h2>Product Pricing Tiers</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            
            {/* Starter Tier */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="pricing-card text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '50px 30px', transition: 'all 0.3s ease', height: '100%' }}>
                <h3 className="mb-2" style={{ fontSize: '28px', color: '#fff' }}>Starter</h3>
                <p style={{ color: '#fcdb66', fontSize: '16px', marginBottom: '30px' }}>For growing businesses</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0' }}></div>
                <ul className="text-start" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 2.2, listStyle: 'none', padding: 0 }}>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Access to Nexus Dashboard™</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Access to Nexus SEO Suite™</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Up to 3 connected marketing channels</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Monthly automated reports</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Email support</li>
                </ul>
                <Link href="/contact" className="theme-btn-main mt-4 d-block" style={{ width: '100%', textAlign: 'center' }}>
                  <span className="theme-btn theme-bg theme-color-white" style={{ display: 'block', padding: '15px' }}>Get Started</span>
                </Link>
              </div>
            </div>

            {/* Growth Tier (Highlighted) */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="300ms">
              <div className="pricing-card text-center position-relative" style={{ background: 'linear-gradient(180deg, rgba(252,219,102,0.1) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(252,219,102,0.3)', borderRadius: '15px', padding: '50px 30px', transition: 'all 0.3s ease', height: '100%', transform: 'scale(1.05)', zIndex: 1 }}>
                <div className="badge position-absolute" style={{ top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#fcdb66', color: '#000', padding: '8px 20px', borderRadius: '30px', fontWeight: 'bold', fontSize: '14px' }}>Most Popular</div>
                <h3 className="mb-2" style={{ fontSize: '28px', color: '#fff' }}>Growth</h3>
                <p style={{ color: '#fcdb66', fontSize: '16px', marginBottom: '30px' }}>For scaling teams</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0' }}></div>
                <ul className="text-start" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 2.2, listStyle: 'none', padding: 0 }}>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Full Nexus Intelligence™ access</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Full Nexus Automator™ access</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Unlimited channels & users</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Weekly reporting + Account Manager</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Multi-country campaign management</li>
                </ul>
                <Link href="/contact" className="theme-btn-main mt-4 d-block" style={{ width: '100%', textAlign: 'center' }}>
                  <span className="theme-btn theme-bg theme-color-white" style={{ display: 'block', padding: '15px', background: '#fcdb66', color: '#000' }}>Get Started</span>
                </Link>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="500ms">
              <div className="pricing-card text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', padding: '50px 30px', transition: 'all 0.3s ease', height: '100%' }}>
                <h3 className="mb-2" style={{ fontSize: '28px', color: '#fff' }}>Enterprise</h3>
                <p style={{ color: '#fcdb66', fontSize: '16px', marginBottom: '30px' }}>For global brands</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0' }}></div>
                <ul className="text-start" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 2.2, listStyle: 'none', padding: 0 }}>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Custom AI model training on your data</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> API access and white-label options</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> SLA-backed support</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Dedicated strategy team</li>
                  <li><i className="fa-solid fa-check text-success me-2"></i> Bespoke integrations with tech stack</li>
                </ul>
                <Link href="/contact" className="theme-btn-main mt-4 d-block" style={{ width: '100%', textAlign: 'center' }}>
                  <span className="theme-btn theme-bg theme-color-white" style={{ display: 'block', padding: '15px' }}>Contact Sales</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-[80px] cta-section text-center section-padding" style={{  }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 wow fadeInUp">
              <h2 className="mb-3">Ready to Automate Your Growth?</h2>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>Schedule a demo to see our proprietary AI technology in action.</p>
              <Link href="/contact" className="theme-btn-main">
                <span className="theme-btn theme-bg theme-color-white" style={{ padding: '15px 40px', fontSize: '18px' }}>Request a Demo</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
