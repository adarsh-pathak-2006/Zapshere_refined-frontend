"use client";
import React from 'react';
import Link from 'next/link';

export default function GermanyLocation() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/inner/page-title-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', display: 'block', marginBottom: '15px' }}>🇩🇪 Deutschland</span>
            <h1 className="title wow fadeInUp" data-wow-delay="0ms">Digitale Marketing Agentur Deutschland</h1>
            <p className="wow fadeInUp" data-wow-delay="200ms" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', marginTop: '15px', maxWidth: '700px', margin: '15px auto 0' }}>
              KI-gestützte Wachstumsstrategien für Berlin, München, Hamburg, Frankfurt & bundesweit
            </p>
            <ul className="page-breadcrumb wow fadeInUp" data-wow-delay="300ms">
              <li><Link href="/">Home</Link></li>
              <li>Deutschland</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: 'rgba(252,219,102,0.05)', borderTop: '1px solid rgba(252,219,102,0.15)', borderBottom: '1px solid rgba(252,219,102,0.15)', padding: '40px 0' }}>
        <div className="auto-container">
          <div className="row text-center">
            {[
              { stat: '76M', label: 'German Internet Users' },
              { stat: '€30B+', label: 'DE Digital Ad Market' },
              { stat: '#3', label: 'EU Digital Economy' },
              { stat: 'DSGVO', label: 'GDPR Compliance Ready' },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                <div style={{ padding: '10px' }}>
                  <h3 style={{ color: '#fcdb66', fontSize: '42px', fontWeight: 800, margin: 0 }}>{item.stat}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', margin: '5px 0 0', fontSize: '15px' }}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 wow fadeInLeft">
              <img
                src="/images/country-de.png"
                alt="Digital Marketing Deutschland"
                style={{ borderRadius: '20px', width: '100%', border: '1px solid rgba(252,219,102,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
              />
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInRight">
              <div style={{ paddingLeft: '30px' }}>
                <div className="sec-title mb-4">
                  <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />DE Operationen</span>
                  <h2>KI-gestütztes Wachstum für deutsche Unternehmen</h2>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                  ZAPSHERE ist Ihre globale KI-Marketing-Agentur für den deutschen Markt. Wir helfen Unternehmen in Berlin, München, Hamburg, Frankfurt und bundesweit — mit maßgeschneiderten SEO, Google Ads, und Social-Media-Strategien für Google.de.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                  Germany&apos;s digital landscape demands precision — strict DSGVO/GDPR regulations, privacy-conscious consumers, and a highly competitive B2B environment. We navigate it all with expertise.
                </p>
                <div className="mt-4" style={{ background: 'rgba(252, 219, 102, 0.05)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                  <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>
                    🇩🇪 Germany is Europe&apos;s #1 economy — and ZAPSHERE helps German businesses harness the full power of AI-driven digital marketing.
                  </p>
                </div>
                <Link href="/contact" className="theme-btn-main mt-4" style={{ display: 'inline-block' }}>
                  <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                  <span className="theme-btn theme-bg theme-color-white">Strategie-Gespräch buchen</span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ZAPSHERE Germany */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Lokale Expertise</span>
            <h2>Warum deutsche Unternehmen uns wählen</h2>
          </div>
          <div className="row">
            {[
              { icon: 'fa-magnifying-glass-chart', title: 'Google.de Dominanz', desc: 'Tiefes Verständnis der deutschen Suchintentionen, E-E-A-T Qualitätsstandards, und Google.de Ranking-Strategien.' },
              { icon: 'fa-shield-halved', title: 'DSGVO / GDPR Konform', desc: 'Alle Kampagnen, Tracking-Setups und E-Mail-Flows sind vollständig DSGVO-konform — keine Kompromisse.' },
              { icon: 'fa-building-columns', title: 'XING & LinkedIn B2B', desc: 'XING-Strategien für den DACH B2B-Markt, kombiniert mit LinkedIn-Kampagnen für deutschsprachige Fachkräfte.' },
              { icon: 'fa-euro-sign', title: 'EUR Abrechnung', desc: 'Transparente Rechnungsstellung in Euro mit klarer Berichterstattung — keine versteckten Wechselkursgebühren.' },
              { icon: 'fa-language', title: 'Muttersprachliche Inhalte', desc: 'Deutschsprachige Texte und Creatives — kulturell authentisch, nicht einfach übersetzt.' },
              { icon: 'fa-clock', title: 'CET/CEST Support', desc: 'Ihr dediziertes DE-Team arbeitet in deutschen Geschäftszeiten für schnelle Reaktionen.' },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                <div className="premium-hover-card" style={{ background: 'rgba(255,255,255,0.02)', padding: '35px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0, fontSize: '15px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Germany Services Grid */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Maßgeschneiderte Lösungen</span>
            <h2>Unsere Leistungen für Deutschland</h2>
          </div>
          <div className="row justify-content-center">
            {[
              { href: '/de/seo-services', icon: 'fa-magnifying-glass', title: 'SEO Deutschland', desc: 'Google.de-Optimierung, technisches SEO, Content-Marketing und strategischer Linkaufbau für den deutschen Markt.' },
              { href: '/de/paid-advertising', icon: 'fa-bullseye', title: 'Google Ads DE', desc: 'DSGVO-konforme Google Ads Kampagnen mit präzisem Geo-Targeting für Berlin, München, Hamburg und bundesweit.' },
              { href: '/de/paid-advertising', icon: 'fa-share-nodes', title: 'Meta Ads DE', desc: 'DSGVO-konforme Meta-Werbung mit authentischen Creatives, die auf deutsche Verbrauchergewohnheiten ausgerichtet sind.' },
              { href: '/de/paid-advertising', icon: 'fa-linkedin', title: 'LinkedIn & XING', desc: 'B2B-Kampagnen für den DACH-Markt auf LinkedIn und XING — gezielt auf deutschsprachige Entscheidungsträger.' },
              { href: '/services/email-funnel-marketing', icon: 'fa-envelope-open-text', title: 'E-Mail-Marketing', desc: 'Umsatzstarke E-Mail-Kampagnen und Automations-Flows mit vollständiger DSGVO-Konformität.' },
              { href: '/de/social-media-marketing', icon: 'fa-hashtag', title: 'Social Media DE', desc: 'Deutschsprachiges Social-Media-Management mit kulturell authentischen Inhalten und CET/CEST-Betreuung.' },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay={`${(i + 1) * 0.1}s`}>
                <Link href={item.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.03)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '60px', height: '60px', background: 'rgba(252, 219, 102, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>{item.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-12 md:py-16 lg:py-[80px]" style={{ background: 'rgba(255,255,255,0.02)'}}>
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Abdeckung</span>
            <h2>Städte, in denen wir aktiv sind</h2>
          </div>
          <div className="row justify-content-center text-center">
            {['Berlin', 'München', 'Hamburg', 'Frankfurt', 'Köln', 'Stuttgart', 'Düsseldorf', 'Leipzig'].map((city, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-6 mb-4 wow fadeInUp" data-wow-delay={`${i * 0.05}s`}>
                <div className="premium-hover-card" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: '#fcdb66', fontSize: '20px', marginBottom: '10px', display: 'block' }}></i>
                  <h5 style={{ color: '#fff', margin: 0, fontSize: '18px' }}>{city}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 wow fadeInUp">
              <h2 style={{ color: '#fff', marginBottom: '20px' }}>Bereit, den deutschen Markt zu dominieren?</h2>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>Buchen Sie ein kostenloses 30-minütiges Strategiegespräch mit unseren deutschen Wachstumsexperten und erhalten Sie Ihre individuelle Roadmap.</p>
              <Link className="theme-btn-main" href="/contact">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Kostenloses Erstgespräch</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
