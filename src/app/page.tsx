"use client";
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";
import { supabase } from '@/lib/supabase';

const AboutSection = dynamic(() => import("@/components/home/AboutSection"));
const MissionSection = dynamic(() => import("@/components/home/MissionSection"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const QuoteBanner = dynamic(() => import("@/components/home/QuoteBanner"));
const TestimonialFeatured = dynamic(() => import("@/components/home/TestimonialFeatured"));
const HomeBelowFold = dynamic(() => import("@/components/home/HomeBelowFold"));
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('leads').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        source: 'Homepage Form'
      }]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ZAPSHERE",
    "url": "https://www.zapshere.com",
    "logo": "https://www.zapshere.com/logo.png",
    "description": "AI-powered digital marketing agency serving Australia, United States, and Germany.",
    "address": [
      { "@type": "PostalAddress", "addressCountry": "AU" },
      { "@type": "PostalAddress", "addressCountry": "US" },
      { "@type": "PostalAddress", "addressCountry": "DE" }
    ],
    "serviceType": ["SEO", "Paid Advertising", "Social Media Marketing", "Marketing Analytics"],
    "areaServed": ["AU", "US", "DE"],
    "sameAs": [
      "https://www.linkedin.com/company/zapshere",
      "https://twitter.com/zapshere",
      "https://www.facebook.com/zapshere"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ZAPSHERE",
    "url": "https://www.zapshere.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.zapshere.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What digital marketing services does ZAPSHERE offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ZAPSHERE offers AI-powered SEO, Google Ads management, social media marketing, and analytics across Australia, the United States, and Germany."
        }
      },
      {
        "@type": "Question",
        "name": "How does ZAPSHERE use AI in digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use AI tools for keyword research, ad optimisation, content strategy, predictive analytics, and competitor analysis — delivering faster results with data-backed decisions."
        }
      },
      {
        "@type": "Question",
        "name": "Which countries does ZAPSHERE serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ZAPSHERE currently serves clients in Australia, the United States, and Germany, with market-specific strategies for each region."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with ZAPSHERE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us through our website for a free digital marketing audit. Our team will assess your current performance and recommend a tailored strategy."
        }
      },
      {
        "@type": "Question",
        "name": "What makes ZAPSHERE different from other digital marketing agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ZAPSHERE combines AI-powered tools with human expertise, serving three distinct markets (AU, US, DE) with localised strategies and measurable ROI focus."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />


<section id="home" className="banner-section d-flex align-items-lg-center" style={{ position: 'relative', paddingBottom: '80px' }}>
    <div className="container-fluid">
        <div className="row hero_upper d-flex align-items-lg-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="content-box" style={{ marginTop: '160px' }}>
            <h1 className="title hero_title tv_hero_title hero_title_1">
                AI-Powered Growth<br/>
                <span style={{ color: '#fcdb66' }}>Marketing & Automation</span><br/>
                Built for Your Business
            </h1>
            <p className="hero-subheadline wow fadeInUp" data-wow-delay=".2s" style={{}}>From SEO, GEO and AEO to AI calling agents and full workflow automation — ZAPSHERE helps ambitious businesses in Australia, the United States, and Germany grow smarter, move faster, and scale without the chaos.</p>
            
            <div className="btn-box d-flex align-items-center gap-4 wow fadeInUp" data-wow-delay=".3s" style={{ marginTop: '30px', flexWrap: 'wrap' }}>
                <a className="theme-btn-main" href="/contact">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                    <span className="theme-btn theme-bg theme-color-white">Get Your Free Marketing Audit</span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
                <a href="#process" className="play-btn d-flex align-items-center gap-3 text-white" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '18px' }}>
                    <div className="icon-box d-flex justify-content-center align-items-center theme-bg" style={{ width: '50px', height: '50px', borderRadius: '50%', color: '#000' }}>
                        <i className="fa-solid fa-play"></i>
                    </div>
                    See How It Works
                </a>
            </div>

            <div className="trust-indicators wow fadeInUp" data-wow-delay=".4s" style={{ marginTop: '30px', display: 'flex', gap: '15px', alignItems: 'center', opacity: 0.8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}><i className="fa-brands fa-google" style={{ color: '#fcdb66', marginRight: '5px' }}></i> Google Partner</span>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>·</span>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}><i className="fa-brands fa-meta" style={{ color: '#fcdb66', marginRight: '5px' }}></i> Meta Business Partner</span>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>·</span>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}><i className="fa-solid fa-users" style={{ color: '#fcdb66', marginRight: '5px' }}></i> 500+ Clients Worldwide</span>
            </div>

            <div className="hero-stats wow fadeInUp" data-wow-delay=".5s" style={{ display: 'flex', gap: '40px', marginTop: '40px', flexWrap: 'wrap' }}>
                <div className="stat-item">
                    <h3 style={{ fontSize: '42px', fontWeight: 800, color: '#fcdb66', margin: 0 }}>500+</h3>
                    <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, opacity: 0.8, fontWeight: 600 }}>Clients Worldwide</p>
                </div>
                <div className="stat-item">
                    <h3 style={{ fontSize: '42px', fontWeight: 800, color: '#fcdb66', margin: 0 }}>3x</h3>
                    <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, opacity: 0.8, fontWeight: 600 }}>Average ROI Increase</p>
                </div>
                <div className="stat-item">
                    <h3 style={{ fontSize: '42px', fontWeight: 800, color: '#fcdb66', margin: 0 }}>97%</h3>
                    <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, opacity: 0.8, fontWeight: 600 }}>Client Retention Rate</p>
                </div>
            </div>

            </div>
        </div>
        </div>
    </div>

    <div className="email-link"><a href="mailto:hello@zapshere.com" className="email-link">hello@zapshere.com</a></div>
    <div className="email-line"><img loading="lazy" decoding="async" src="/images/line.png" alt="line shape" /></div>
    <div className="follow-us">
        <p className="follow-title">FOLLOW US -</p>
        <div className="social-links">
        <a href="javascript:void(0)" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="javascript:void(0)" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="javascript:void(0)" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="javascript:void(0)" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
    <div className="hero-img bounce-animate4">
      <Image src="/images/hero-img2.png" alt="ZAPSHERE AI digital marketing agency hero — growth dashboard showing SEO, paid ads and automation results for Australia USA and Germany clients" priority={true} width={800} height={800} style={{ width: '100%', height: 'auto' }} />
    </div>

    <div className="ticker-wrapper" style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%', background: '#fcdb66', padding: '15px 0', position: 'absolute', bottom: 0, left: 0, zIndex: 10 }}>
        <div className="ticker-track" style={{ display: 'inline-block', animation: 'ticker 30s linear infinite' }}>
            <style>{`
            @keyframes ticker {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            `}</style>
            {[...Array(2)].map((_, i) => (
            <span key={i} style={{ color: '#000', fontWeight: 800, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px', paddingRight: '50px' }}>
                AI Digital Marketing &nbsp;·&nbsp; SEO & GEO Optimisation &nbsp;·&nbsp; Answer Engine Optimisation (AEO) &nbsp;·&nbsp; Paid Advertising &nbsp;·&nbsp; Social Media Marketing &nbsp;·&nbsp; Email Automation &nbsp;·&nbsp; AI Calling Agents &nbsp;·&nbsp; Workflow Automation &nbsp;·&nbsp; Analytics & Reporting &nbsp;·&nbsp; CRM Integration &nbsp;·&nbsp;
            </span>
            ))}
        </div>
    </div>
</section>

<AboutSection />
<MissionSection />
<ServicesSection />
<QuoteBanner />
<TestimonialFeatured />

<HomeBelowFold 
  formData={formData} 
  setFormData={setFormData} 
  handleChange={handleChange} 
  handleSubmit={handleSubmit} 
  isSubmitting={isSubmitting} 
  isSuccess={isSuccess} 
/>
</>
  );
}
