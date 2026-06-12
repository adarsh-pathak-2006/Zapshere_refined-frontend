"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "ZAPSHERE delivered results we didn't think were possible. Their AI SEO strategy tripled our organic traffic in 5 months and the team was genuinely a pleasure to work with — always available, always honest.",
    name: "Sarah Mitchell",
    title: "CEO, Clearpath Solutions",
    image: "/images/testi-sarah.png",
    tag: "Organic Growth"
  },
  {
    id: 2,
    quote: "Our Google Ads ROAS went from 1.9x to 6.4x after ZAPSHERE rebuilt our entire paid media strategy. Their team knows exactly what they're doing — and they explain everything in plain language, which we loved.",
    name: "James Harrington",
    title: "CMO, Verda Health — USA",
    image: "/images/testi-james.png",
    tag: "Paid Media ROAS"
  },
  {
    id: 3,
    quote: "Entering the German market felt risky — until ZAPSHERE. They handled the GDPR compliance, the German-language content, and Meta ads that actually connected with local buyers. 12,000 leads in 90 days.",
    name: "Lena Bauer",
    title: "Founder, Möbel Direkt — Berlin",
    image: "/images/testi-lena.png",
    tag: "Market Expansion"
  }
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="testimonial-slider-container" 
      style={{ position: 'relative', width: '100%', minHeight: '350px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {testimonials.map((testi, i) => {
        const isActive = activeIndex === i;
        return (
          <div 
            key={testi.id}
            style={{
              position: isActive ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transform: isActive ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              padding: '40px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden'
            }}
          >
            {/* Background Glow / Accent */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: '#fcdb66', opacity: 0.05, filter: 'blur(40px)', borderRadius: '50%' }}></div>
            
            {/* Quote Icon Overlay */}
            <div style={{ position: 'absolute', top: '30px', right: '30px', opacity: 0.15, pointerEvents: 'none' }}>
              <Image src="/images/testi-icon.png" alt="Quote" width={80} height={80} style={{ width: '80px', height: 'auto' }} />
            </div>

            {/* Tag */}
            <div style={{ marginBottom: '25px' }}>
                <span style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(252, 219, 102, 0.1)', color: '#fcdb66', borderRadius: '30px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {testi.tag}
                </span>
            </div>

            {/* Quote Text */}
            <p style={{ fontSize: '20px', lineHeight: '1.7', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', marginBottom: '35px', fontWeight: 400 }}>
              "{testi.quote}"
            </p>

            {/* Author Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.1)' }}>
                <Image src={testi.image} alt={testi.name} width={150} height={150} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 4px 0', color: '#fff' }}>{testi.name}</h4>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{testi.title}</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Indicators */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '30px', justifyContent: 'flex-start' }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: activeIndex === i ? '30px' : '10px',
              height: '10px',
              borderRadius: '10px',
              background: activeIndex === i ? '#fcdb66' : 'rgba(255,255,255,0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
