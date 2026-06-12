import React from 'react';
import Image from 'next/image';

export default function TestimonialFeatured() {
  return (
    <section className="testimonial-featured-section section-padding pb-0" style={{ background: '#0a0a0a', position: 'relative' }}>

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
