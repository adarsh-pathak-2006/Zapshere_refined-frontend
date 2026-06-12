import React from 'react';
import Image from 'next/image';

export default function TestimonialFeatured() {
  return (
    <section className="testimonial-featured-section section-padding pb-0" style={{ background: '#0a0a0a', position: 'relative' }}>
      <div className="auto-container">
        <div className="row align-items-center mb-5 pb-4">
          {/* Left Side: Image */}
          <div className="col-lg-5 col-md-12 wow fadeInLeft">
            <div className="testimonial-img-wrapper" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Image 
                src="/images/testimonial-1.png" 
                alt="Sarah Mitchell CEO of Clearpath Solutions — ZAPSHERE client testimonial Australia" 
                width={800} height={800} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <div className="quote-icon" style={{ position: 'absolute', top: '30px', right: '30px', background: '#fcdb66', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-quote-right" style={{ color: '#000', fontSize: '24px' }}></i>
              </div>
            </div>
          </div>
          
          {/* Right Side: Content */}
          <div className="col-lg-7 col-md-12 mt-5 mt-lg-0 ps-lg-5 wow fadeInRight">
            <div className="testimonial-content" style={{ paddingLeft: '20px' }}>
              <h2 style={{ fontSize: '32px', lineHeight: 1.6, fontWeight: 600, color: '#fff', fontStyle: 'italic', marginBottom: '40px', fontFamily: 'var(--heading-font-family)' }}>
                "ZAPSHERE completely changed how we approach digital marketing. Their AI powered SEO strategy tripled our organic traffic in under six months — and their team actually speaks to you like a partner, not a vendor."
              </h2>
              <div className="client-info">
                <h4 style={{ color: '#fcdb66', fontSize: '24px', fontWeight: 700, marginBottom: '5px' }}>Sarah Mitchell</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>CEO, Clearpath Solutions — Sydney, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker 2 (orange background marquee) */}
      <div className="ticker-wrapper" style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%', background: '#ff7a00', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="ticker-track" style={{ display: 'inline-block', animation: 'ticker 20s linear infinite' }}>
              <style>{`
              @keyframes ticker {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
              }
              `}</style>
              {[...Array(6)].map((_, i) => (
              <span key={i} style={{ color: '#000', fontWeight: 800, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px', paddingRight: '50px' }}>
                  AI Digital Marketing Agency &nbsp;·&nbsp; ZAPSHERE &nbsp;·&nbsp; AI Digital Marketing Agency &nbsp;·&nbsp; ZAPSHERE &nbsp;·&nbsp;
              </span>
              ))}
          </div>
      </div>
    </section>
  );
}
