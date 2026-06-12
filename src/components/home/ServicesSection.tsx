import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="service-sp-right bounce-animate4">
          <Image src="/images/service-sp.png" alt="img" width={200} height={200} style={{ width: "auto", height: "auto" }} />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-title text-center wow fadeInUp">
                <span className="sub-title" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}>
                  <Image src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ marginRight: '12px' }} />
                  Our Services
                </span>
                <h2 className="hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>Transforming Your Business With AI-Driven Digital Solutions</h2>
                <p>We build custom marketing engines that scale your lead generation, maximise ad spend ROAS, and automate your growth — so results keep coming even while you sleep.</p>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
              .zs-services-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 30px;
              }
              @media (max-width: 991.98px) {
                .zs-services-grid { grid-template-columns: repeat(2, 1fr); }
              }
              @media (max-width: 575.98px) {
                .zs-services-grid { grid-template-columns: 1fr; }
              }
              .zs-service-card {
                background: rgba(255, 255, 255, 0.04);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 16px;
                padding: 40px 30px;
                transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                height: 100%;
              }
              .zs-service-card::before {
                content: '';
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 3px;
                background: linear-gradient(90deg, transparent, #fcdb66, transparent);
                opacity: 0;
                transition: opacity 0.35s ease;
              }
              .zs-service-card:hover {
                transform: translateY(-6px);
                background: rgba(255, 255, 255, 0.07);
                border-color: rgba(252, 219, 102, 0.25);
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
              }
              .zs-service-card:hover::before { opacity: 1; }
              .zs-service-card .zs-svc-icon {
                width: 70px; height: 70px;
                background: rgba(252, 219, 102, 0.1);
                border-radius: 14px;
                display: flex; align-items: center; justify-content: center;
                margin-bottom: 30px;
                transition: background 0.3s ease;
              }
              .zs-service-card:hover .zs-svc-icon {
                background: rgba(252, 219, 102, 0.18);
              }
              .zs-service-card .zs-svc-icon img { width: 35px; height: 35px; }
              .zs-service-card h4 {
                font-size: 22px; font-weight: 700; color: #fff;
                margin-bottom: 20px; font-family: 'Plus Jakarta Sans', sans-serif;
              }
              .zs-service-card h4 a { color: #fff; text-decoration: none; }
              .zs-service-card h4 a:hover { color: #fcdb66; }
              .zs-service-card .zs-svc-link {
                color: #fcdb66; font-size: 15px; font-weight: 600;
                text-decoration: none; display: inline-flex;
                align-items: center; gap: 8px;
                transition: gap 0.3s ease;
                margin-top: auto;
              }
              .zs-service-card .zs-svc-link:hover { gap: 12px; }
            ` }} />

            <div className="zs-services-grid">
              {/*  Card 1  */}
              <div className="zs-service-card wow fadeInUp" data-wow-delay=".1s">
                <div className="zs-svc-icon"><Image src="/images/service-icon1.png" alt="SEO GEO and AEO optimisation service — AI search visibility for Google ChatGPT and Perplexity" width={35} height={35} /></div>
                <h4><a href="/services/seo-geo-aeo">SEO, GEO &amp; AEO Optimisation</a></h4>
                <a href="/services/seo-geo-aeo" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              {/*  Card 2  */}
              <div className="zs-service-card wow fadeInUp" data-wow-delay=".2s">
                <div className="zs-svc-icon"><Image src="/images/service-icon2.png" alt="Paid advertising service — Google Ads Meta LinkedIn and TikTok campaign management" width={35} height={35} /></div>
                <h4><a href="/services/paid-advertising">Paid Advertising (Google, Meta &amp; More)</a></h4>
                <a href="/services/paid-advertising" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              {/*  Card 3  */}
              <div className="zs-service-card wow fadeInUp" data-wow-delay=".3s">
                <div className="zs-svc-icon"><Image src="/images/service-icon3.png" alt="Marketing automation service — email automation AI calling agent and CRM workflow integration" width={35} height={35} /></div>
                <h4><a href="/services/marketing-automation">Marketing Automation &amp; AI Tools</a></h4>
                <a href="/services/marketing-automation" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>

            {/*  CTA under grid  */}
            <div className="text-center wow fadeInUp mt-5" data-wow-delay=".4s" style={{ marginTop: '50px' }}>
              <a className="theme-btn-main border-style-btn" href="/services">
                  <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                  <span className="theme-btn theme-bg theme-color-white">All Services</span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="service-bg-blur"></div>
    </section>
  )
}
