import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="large-container">
          <div className="row">
          <div className="image-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column">
              <figure className="image-1 about-style-img-1">
                <Image src="/images/about-1.jpg" alt="About ZAPSHERE" className="wow img-custom-anim-left" width={800} height={800} style={{ width: "100%", height: "auto" }} />
              </figure>
              </div>
          </div>
          <div className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
              <div className="sec-title">
                  <span className="sub-title">
                    <Image src="/images/sub-title-shape.svg" alt="" width={20} height={20} style={{ marginRight: '10px' }} /> Who We Are
                  </span>
                  <h2 className="hero_title" style={{ whiteSpace: 'pre-wrap' }}>Smarter Campaigns. Better ROI.</h2>
              </div>
              <div className="about-icon-box">
                  <div className="about-count">
                    <span className="count-text" data-speed="3000" data-stop="500">500</span>
                    <span className="plus">+</span>
                    <h6 className="counter-title">Clients Worldwide</h6>
                  </div>
                  <div className="about-content">
                    <p>ZAPSHERE is a performance-first digital marketing agency that harnesses the power of artificial intelligence to deliver smarter campaigns, deeper insights, and stronger results. We partner with startups, SMBs, and enterprise brands across Australia, the United States, and Germany to build marketing ecosystems that grow.</p>
                    <p>Our cross-functional team of SEO strategists, paid media specialists, creative technologists, and data scientists work as an extension of your business — accountable to outcomes, not just deliverables.</p>
                    <div className="about-callout">
                      <p>💡 ZAPSHERE is not just an agency — we're your growth intelligence layer, combining human creativity with machine-speed data analysis.</p>
                    </div>
                    <a className="theme-btn-main border-style-btn" href="/services">
                        <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                        <span className="theme-btn theme-bg theme-color-white">Our Services</span>
                        <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                    </a>
                  </div>
              </div>
          </div>
          </div>
      </div>
      </div>
      <div className="bg-blur d-none d-lg-block"></div>
      <div className="bg-blur2 d-none d-lg-block"></div>
      <div className="about-shape rotate">
        <Image src="/images/icon-rt.png" alt="" width={100} height={100} style={{ width: "auto", height: "auto" }} />
      </div>
      <div className="about-shape2 bounce-animate4">
        <Image src="/images/about-sp.png" alt="" width={100} height={100} style={{ width: "auto", height: "auto" }} />
      </div>
    </section>
  )
}
