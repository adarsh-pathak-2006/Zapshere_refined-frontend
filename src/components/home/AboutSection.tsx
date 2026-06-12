import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="large-container">
          <div className="row">
          <div className="image-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column" style={{ position: 'relative', paddingRight: '10%' }}>
              <figure className="image-1 about-style-img-1" style={{ position: 'relative', zIndex: 1, margin: 0 }}>
                <Image src="/images/about-1.jpg" alt="ZAPSHERE team working on AI digital marketing strategy for clients in Australia USA and Germany" className="wow img-custom-anim-left" width={800} height={800} style={{ width: "100%", height: "auto", borderRadius: '15px' }} />
              </figure>
              <figure className="image-2 about-style-img-2 wow fadeInRight" data-wow-delay="300ms" style={{ position: 'absolute', bottom: '-10%', right: '0%', width: '60%', zIndex: 2, border: '15px solid #0a0a0a', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', margin: 0 }}>
                <Image src="/images/about-2.png" alt="ZAPSHERE automation dashboard showing email funnel workflow and AI calling agent setup" width={800} height={800} style={{ width: "100%", height: "auto", borderRadius: '10px' }} />
              </figure>
              </div>
          </div>
          <div className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
              <div className="sec-title">
                  <span className="sub-title">
                    <Image src="/images/sub-title-shape.svg" alt="" width={20} height={20} style={{ marginRight: '10px' }} /> About Company
                  </span>
                  <h2 className="hero_title" style={{ whiteSpace: 'pre-wrap' }}>Reimagining Business Growth With AI-Powered Digital Marketing</h2>
              </div>
              <div className="about-icon-box">
                  <div className="about-count">
                    <span className="count-text" data-speed="3000" data-stop="12">12</span>
                    <h6 className="counter-title">Years of Experience</h6>
                  </div>
                  <div className="about-content">
                    <p>ZAPSHERE is a dynamic AI-powered digital marketing and automation agency dedicated to empowering businesses in Australia, the United States, and Germany through innovative, results-driven strategies. We combine human creativity with machine-speed intelligence — so your marketing works harder, smarter, and faster.</p>
                    <a className="theme-btn-main border-style-btn" href="/about">
                        <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                        <span className="theme-btn theme-bg theme-color-white">More Details</span>
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
