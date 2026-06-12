import React from 'react';

export default function QuoteBanner() {
  return (
    <section className="quote-banner-section wow fadeInUp" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '50px 0', margin: '60px 0' }}>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="d-flex align-items-center flex-wrap gap-4">
              <span style={{ padding: '8px 16px', borderRadius: '30px', fontWeight: 800, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1.5px', background: 'rgba(252, 219, 102, 0.1)', color: '#fcdb66', border: '1px solid rgba(252, 219, 102, 0.3)' }}>Free</span>
              <h3 style={{ margin: 0, color: '#fff', fontSize: '26px', fontWeight: 700, lineHeight: 1.4 }}>Let's grow your business together — get a free strategy audit today</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 text-lg-end mt-4 mt-lg-0">
            <a className="theme-btn-main border-style-btn" href="/contact">
              <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
              <span className="theme-btn theme-bg theme-color-white">Get Free Quote</span>
              <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
