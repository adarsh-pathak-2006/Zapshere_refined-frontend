import React from 'react';

export default function QuoteBanner() {
  return (
    <section className="quote-banner-section wow fadeInUp" style={{ margin: '20px 0 60px 0', position: 'relative', zIndex: 10 }}>
      <div className="auto-container">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(252,219,102,0.05) 100%)', 
          border: '1px solid rgba(252, 219, 102, 0.2)', 
          borderRadius: '24px', 
          padding: '50px 60px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(252,219,102,0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative glow elements */}
          <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '50%', height: '200%', background: 'radial-gradient(ellipse at center, rgba(252,219,102,0.15) 0%, transparent 70%)', transform: 'rotate(-45deg)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-50%', right: '-20%', width: '50%', height: '200%', background: 'radial-gradient(ellipse at center, rgba(0,123,255,0.1) 0%, transparent 70%)', transform: 'rotate(-45deg)', pointerEvents: 'none' }}></div>
          
          <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
            <div className="col-lg-8 col-md-12 text-center text-lg-start">
              <span style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px', background: '#fcdb66', color: '#111', marginBottom: '15px' }}>Free Strategy Audit</span>
              <h3 style={{ margin: 0, color: '#fff', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, lineHeight: 1.3 }}>Let's grow your business together. <br/> Get a free digital roadmap today.</h3>
            </div>
            <div className="col-lg-4 col-md-12 text-center text-lg-end mt-4 mt-lg-0">
              <a className="theme-btn-main" href="/contact" style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Claim Your Audit</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
