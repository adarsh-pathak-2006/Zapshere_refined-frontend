import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="service-sp-right bounce-animate4">
          <Image src="/images/service-sp.png" alt="img" width={200} height={200} style={{ width: "auto", height: "auto" }} />
      </div>
      <div className="auto-container">
          <div className="sec-title text-center wow fadeInUp">
              <span className="sub-title"><Image src="/images/sub-title-shape.svg" alt="" width={20} height={20} style={{ marginRight: '10px' }} />Our Services</span>
              <h2 className="hero_title">Result-Driven Digital Marketing Services</h2>
              <p>We build custom digital marketing engines that scale lead generation, maximize ad spend ROAS, and automate lead nurturing.</p>
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
              padding: 35px 30px;
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
              width: 60px; height: 60px;
              background: rgba(252, 219, 102, 0.1);
              border-radius: 14px;
              display: flex; align-items: center; justify-content: center;
              margin-bottom: 22px;
              transition: background 0.3s ease;
            }
            .zs-service-card:hover .zs-svc-icon {
              background: rgba(252, 219, 102, 0.18);
            }
            .zs-service-card .zs-svc-icon img { width: 30px; height: 30px; }
            .zs-service-card h4 {
              font-size: 20px; font-weight: 700; color: #fff;
              margin-bottom: 12px; font-family: 'Plus Jakarta Sans', sans-serif;
            }
            .zs-service-card h4 a { color: #fff; text-decoration: none; }
            .zs-service-card h4 a:hover { color: #fcdb66; }
            .zs-service-card p {
              color: rgba(255, 255, 255, 0.6); font-size: 15px;
              line-height: 1.7; margin-bottom: 20px;
            }
            .zs-service-card .zs-svc-link {
              color: #fcdb66; font-size: 14px; font-weight: 600;
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
              <div className="zs-svc-icon"><Image src="/images/service-icon1.png" alt="SEO" width={30} height={30} /></div>
              <h4><a href="/services/seo-content-marketing">SEO &amp; Content Marketing</a></h4>
              <p>Dominate organic search rankings with AI-enhanced keyword strategies, technical SEO audits, and conversion-focused content.</p>
              <a href="/services/seo-content-marketing" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            {/*  Card 2  */}
            <div className="zs-service-card wow fadeInUp" data-wow-delay=".2s">
              <div className="zs-svc-icon"><Image src="/images/service-icon2.png" alt="Ads" width={30} height={30} /></div>
              <h4><a href="/services/paid-advertising">Paid Advertising</a></h4>
              <p>Google, Meta, LinkedIn, and TikTok ads managed by certified specialists with AI-optimised bidding and creative testing.</p>
              <a href="/services/paid-advertising" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            {/*  Card 3  */}
            <div className="zs-service-card wow fadeInUp" data-wow-delay=".3s">
              <div className="zs-svc-icon"><Image src="/images/service-icon3.png" alt="Social" width={30} height={30} /></div>
              <h4><a href="/services/social-media-marketing">Social Media Marketing</a></h4>
              <p>Brand-building and community management across Instagram, LinkedIn, Facebook, TikTok, and emerging platforms.</p>
              <a href="/services/social-media-marketing" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            {/*  Card 4  */}
            <div className="zs-service-card wow fadeInUp" data-wow-delay=".1s">
              <div className="zs-svc-icon"><Image src="/images/service-icon1.png" alt="Email" width={30} height={30} /></div>
              <h4><a href="/services/email-funnel-marketing">Email &amp; Funnel Marketing</a></h4>
              <p>Automated email sequences, lead nurturing funnels, and lifecycle marketing that converts subscribers into customers.</p>
              <a href="/services/email-funnel-marketing" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            {/*  Card 5  */}
            <div className="zs-service-card wow fadeInUp" data-wow-delay=".2s">
              <div className="zs-svc-icon"><Image src="/images/service-icon2.png" alt="Analytics" width={30} height={30} /></div>
              <h4><a href="/services/analytics-reporting">Analytics &amp; Reporting</a></h4>
              <p>Custom dashboards, attribution modelling, and actionable monthly reports that connect marketing to revenue.</p>
              <a href="/services/analytics-reporting" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            {/*  Card 6  */}
            <div className="zs-service-card wow fadeInUp" data-wow-delay=".3s">
              <div className="zs-svc-icon"><Image src="/images/service-icon3.png" alt="Automation" width={30} height={30} /></div>
              <h4><a href="/services">Marketing Automation</a></h4>
              <p>End-to-end marketing automation with AI tools, CRM integrations, and intelligent workflow design.</p>
              <a href="/services" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          {/*  CTA under grid  */}
          <div className="text-center wow fadeInUp mt-5" data-wow-delay=".4s" style={{ marginTop: '50px' }}>
            <a className="theme-btn-main border-style-btn" href="/contact">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Book Strategy Call</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
            </a>
          </div>
      </div>
      <div className="service-bg-blur"></div>
    </section>
  )
}
