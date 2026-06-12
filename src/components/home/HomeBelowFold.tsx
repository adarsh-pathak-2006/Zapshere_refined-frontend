import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialSlider from './TestimonialSlider';
import { supabase, BlogPost } from '@/lib/supabase';

export default function HomeBelowFold({ formData, setFormData, handleChange, handleSubmit, isSubmitting, isSuccess }: any) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug, excerpt, thumbnail_url, created_at')
          .order('created_at', { ascending: false })
          .limit(3);

        if (!error && data) setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoadingBlogs(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <>
      {/*  Why Choose Us Section  */}
<section id="why-choose-us" className="why-choose-us-section-1 section-padding theme-color1-bg bg-cover" style={{ backgroundImage: `url('/images/main-home/choose-us-shape.jpg')` }}>
    <div className="wcu-sp-right">
        <Image loading="lazy" decoding="async" src="/images/wcu-sp1.png" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} />
    </div>
    <div className="auto-container">
        <div className="row g-4">
            <div className="col-xl-6">
                <div className="why-choose-us-content-1">
                 <div className="sec-title">
                     <span className="sub-title theme-color-black" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}><Image loading="lazy" decoding="async" src="/images/sub-title-shape2.svg" alt="" width={24} height={24} style={{ marginRight: '12px' }} />Why Choose Us?</span>
                     <h2 className="theme-color-black hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>Here's Why Brands Trust ZAPSHERE to Grow Their Business</h2>
                     <p className="theme-color-black mt-3 mb-4" style={{ fontSize: '18px', lineHeight: 1.6, opacity: 0.9 }}>We're not just another digital marketing agency. We combine AI-powered tools with genuine human expertise, full-funnel strategy, and a no-lock-in promise — so you always feel in control of your growth.</p>
                 </div>
                 <ul className="icon-box-list wow fadeInUp" data-wow-delay=".3s" style={{ display: 'flex', gap: '30px', padding: 0, margin: 0, listStyle: 'none' }}>
                     <li style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                       <div className="icon" style={{ width: '60px', height: '60px' }}><Image loading="lazy" decoding="async" src="/images/icon1.svg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                       <div className="content">
                         <h4 className="title" style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>AI-First, Human-Hearted Strategy</h4>
                         <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.6 }}>Every campaign we run is powered by predictive data models and intelligent automation — but always shaped by experienced humans who understand your market, your customers, and your goals inside out.</p>
                       </div>
                     </li>
                     <li style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                       <div className="icon" style={{ width: '60px', height: '60px' }}><Image loading="lazy" decoding="async" src="/images/icon2.svg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                       <div className="content">
                         <h4 className="title" style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>Full-Funnel, No Lock-In Contracts</h4>
                         <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.6 }}>From first click to closed customer, we own and optimise your entire marketing funnel with real-time dashboards and honest reporting. And because we don't believe in lock-in contracts, we earn your business every single month.</p>
                       </div>
                     </li>
                 </ul>
                </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay=".4s">
                <div className="choose-us-image-wrapper" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                    <Image loading="lazy" decoding="async" src="/images/choose-us-ai-new.png" alt="ZAPSHERE AI-powered digital marketing dashboard and growth strategy interface" width={800} height={800} style={{ width: "100%", height: "auto", display: 'block' }} />
                </div>
            </div>
        </div>
    </div>
</section>
{/*  End Why Choose Us Section  */}<section id="process" className="process-section section-padding fix" style={{}}>
    <div className="auto-container">
        <div className="row justify-content-center">
        {/*  Content Column  */}
        <div className="col-lg-7 col-sm-12 wow fadeInUp" style={{}}>
            <div className="inner-column">
            <div className="sec-title text-center">
                <span className="sub-title" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ marginRight: '12px' }} />Creative Services</span>
                <h2 className="hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>Follow Our Simple 3-Step Framework for Predictable Growth</h2>
            </div>
            </div>
        </div>
        </div>
        <div className="row process-border">
        <div className="col-lg-4 col-md-6 col-sm-12">
            {/*  process box  */}
            <div className="process-single-box wow fadeInUp" data-wow-delay=".3s" style={{}}>
            <div className="process-thumb"><Image loading="lazy" decoding="async" src="/images/process-1-new.png" alt="ZAPSHERE discovery and marketing audit step — analysing business goals and competitor landscape" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            <div className="process-content">
                <h4 className="title">Discovery &amp; Audit</h4>
                <p>We start with a deep dive into your business — auditing your current marketing performance, analysing competitors, and mapping your ideal customers across your target markets in Australia, the US, or Germany.</p>
            </div>
            <h3 className="process-number">01</h3>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            {/*  process box  */}
            <div className="process-single-box wow fadeInUp" data-wow-delay=".5s" style={{}}>
            <div className="process-thumb"><Image loading="lazy" decoding="async" src="/images/process-2-new.png" alt="ZAPSHERE launch and automate step — setting up AI campaigns email automation and calling agent" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            <div className="process-content">
                <h4 className="title">Launch &amp; Automate</h4>
                <p>Our specialists launch your campaigns across every relevant channel — SEO, paid ads, social media, email funnels, and AI automation workflows — with smart bidding, creative testing, and CRM integration from day one.</p>
            </div>
            <h3 className="process-number">02</h3>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            {/*  process box  */}
            <div className="process-single-box wow fadeInUp" data-wow-delay=".7s" style={{}}>
            <div className="process-thumb"><Image loading="lazy" decoding="async" src="/images/process-3-new.png" alt="ZAPSHERE scale and optimise step — real-time analytics dashboard and monthly performance reporting" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            <div className="process-content">
                <h4 className="title">Scale &amp; Optimise</h4>
                <p>We continuously optimise based on real data — scaling what works, cutting what doesn't, and surfacing new growth opportunities every month. You get full transparency dashboards and plain-English reports. Always.</p>
            </div>
            <h3 className="process-number">03</h3>
            </div>
        </div>
        </div>
    </div>
    <div className="process-shape bounce-animate3"><Image loading="lazy" decoding="async" src="/images/2.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
    <div className="process-shape2 bounce-animate4"><Image loading="lazy" decoding="async" src="/images/about-sp.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
</section><section id="works" className="work-section ks-project-area section-padding pb-90">
    <div className="auto-container">
        <div className="row">
        {/*  Content Column  */}
        <div className="col-lg-12 wow fadeInUp" style={{}}>
            <div className="inner-column">
            <div className="sec-title text-center">
                <span className="sub-title" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ marginRight: '12px' }} />WORKS</span>
            </div>
            </div>
        </div>
        </div>
        <div className="row">
        {/*  Content Column  */}
        <div className="col-lg-12 col-md-12 col-sm-12">
            {/*  project box 1  */}
            <div className="pin-spacer" style={{}}><div className="work-single-box ks-project-panel wow fadeInUp" data-wow-delay=".3s" style={{}}>
            <div className="work-content">
                <h2 className="title">B2B SaaS <br /> Growth Strategy</h2>
                <p>ZAPSHERE scaled a Sydney-based B2B SaaS company's MRR by 300% in 12 months using a full-funnel LinkedIn Ads and SEO authority strategy combined with an automated lead nurturing email sequence.</p>
                <div className="d-flex align-items-center gap-3 mb-4 mt-3">
                  <span className="work-date d-block" style={{ color: '#fcdb66', margin: 0, fontWeight: 700 }}>March 2025</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                  <span className="work-date d-block" style={{ margin: 0 }}>SaaS Industry</span>
                </div>
                <a className="theme-btn-main header-style-btn" href="/about">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Click to See Details</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
            </div>
            <div className="work-img overlay-anim" style={{ flexShrink: 0, maxWidth: '400px', marginLeft: 'auto' }}>
                <Image loading="lazy" decoding="async" src="/images/work-img1-new.png" alt="B2B SaaS digital marketing case study — 300% MRR growth with LinkedIn Ads SEO and email automation" width={800} height={800} style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }} />
                <div className="work-shape">
                <Image loading="lazy" decoding="async" src="/images/work-bx-shape.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                </div>
            </div>
            <h3 className="wokr-number">01</h3>
            </div></div>
            {/*  project box 2  */}
            <div className="pin-spacer" style={{}}><div className="work-single-box ks-project-panel wow fadeInUp" data-wow-delay=".5s" style={{}}>
            <div className="work-content">
                <h2 className="title">eCommerce <br /> Market Expansion</h2>
                <p>We helped an Australian eCommerce brand enter the US market with AI optimised Meta advertising — decreasing their cost per acquisition by 42% while successfully scaling to 300 million new potential customers.</p>
                <div className="d-flex align-items-center gap-3 mb-4 mt-3">
                  <span className="work-date d-block" style={{ color: '#fcdb66', margin: 0, fontWeight: 700 }}>August 2024</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                  <span className="work-date d-block" style={{ margin: 0 }}>eCommerce Industry</span>
                </div>
                <a className="theme-btn-main header-style-btn" href="/about">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Click to See Details</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
            </div>
            <div className="work-img overlay-anim" style={{ flexShrink: 0, maxWidth: '400px', marginLeft: 'auto' }}>
                <Image loading="lazy" decoding="async" src="/images/work-img2-new.png" alt="eCommerce US market expansion case study — 42% CPA reduction using Meta advertising and AI creative testing" width={800} height={800} style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }} />
                <div className="work-shape"><Image loading="lazy" decoding="async" src="/images/work-bx-shape.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            </div>
            <h3 className="wokr-number">02</h3>
            </div></div>
            {/*  project box 3  */}
            <div className="pin-spacer" style={{}}><div className="work-single-box ks-project-panel wow fadeInUp" data-wow-delay=".3s" style={{}}>
            <div className="work-content">
                <h2 className="title">Enterprise <br /> Lead Generation</h2>
                <p>A Berlin-based professional services firm needed more qualified leads. We implemented HubSpot automation, an AI calling agent for lead qualification, and an AEO content strategy — increasing SQLs by 150% in 4 months.</p>
                <div className="d-flex align-items-center gap-3 mb-4 mt-3">
                  <span className="work-date d-block" style={{ color: '#fcdb66', margin: 0, fontWeight: 700 }}>January 2025</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                  <span className="work-date d-block" style={{ margin: 0 }}>Professional Services</span>
                </div>
                <a className="theme-btn-main header-style-btn" href="/about">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Click to See Details</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
            </div>
            <div className="work-img overlay-anim" style={{ flexShrink: 0, maxWidth: '400px', marginLeft: 'auto' }}>
                <Image loading="lazy" decoding="async" src="/images/work-img3-new.png" alt="Enterprise lead generation case study Berlin — 150% SQL increase with HubSpot automation AEO content and AI calling agent" width={800} height={800} style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }} />
                <div className="work-shape"><Image loading="lazy" decoding="async" src="/images/work-bx-shape.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            </div>
            <h3 className="wokr-number">03</h3>
            </div></div>
        </div>
        </div>
    </div>
    <div className="work-shapes"><Image loading="lazy" decoding="async" src="/images/work-shape.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
    <div className="work-bg-blur"></div>
</section>

{/*  Testimonial Section  */}
<section id="testimonial" className="testimonial-section-two section-padding pb-0" style={{}}>
  <div className="auto-container">
    <div className="row">
      <div className="column-left col-lg-7 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
        <TestimonialSlider />
      </div>
      <div className="column-right col-lg-5 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
        <div className="sec-title" style={{ position: "sticky", top: "120px" }}>
          <span className="sub-title" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ marginRight: '12px' }} />Testimonial</span>
          <h2 className="hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>What Our Happy Clients Say About Us</h2>
          <div className="counter_box-testi mt-5">
            <div className="count-box"><span className="count-text" data-speed="3000" data-stop="500">500</span></div>
            <div className="count-autor">
              <span className="sub-title-2">(5k+) Customer Reviews</span>
              <p>300+ Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  Industries We Serve Section  */}
<section id="industries" className="industries-section section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
    <style dangerouslySetInnerHTML={{ __html: `
        .industry-card:hover { transform: translateY(-5px); border-color: rgba(252, 219, 102, 0.3) !important; background: rgba(255,255,255,0.05) !important; }
    `}} />
    <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
            <span className="sub-title" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ marginRight: '12px' }} />Industries We Serve</span>
            <h2 className="hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>Growth Strategies for Every Sector</h2>
        </div>
        <div className="row mt-5">
            {[
                { name: 'B2B SaaS', icon: 'fa-cloud', desc: 'Accelerate product-led growth and enterprise sales pipelines.' },
                { name: 'eCommerce', icon: 'fa-cart-shopping', desc: 'Scale ROAS and maximize customer lifetime value.' },
                { name: 'Healthcare', icon: 'fa-heart-pulse', desc: 'Patient acquisition with strict compliance and trust.' },
                { name: 'Real Estate', icon: 'fa-building', desc: 'High-intent lead generation for agencies and developers.' },
                { name: 'Finance', icon: 'fa-chart-line', desc: 'Authority building and secure customer acquisition.' },
                { name: 'Education', icon: 'fa-graduation-cap', desc: 'Enrollment growth through targeted digital campaigns.' }
            ].map((industry, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', transition: 'all 0.3s ease', height: '100%' }} className="industry-card">
                        <i className={`fa-solid ${industry.icon}`} style={{ fontSize: '40px', color: '#fcdb66', marginBottom: '20px' }}></i>
                        <h4 style={{ fontSize: '22px', marginBottom: '15px' }}>{industry.name}</h4>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '15px', lineHeight: '1.6' }}>{industry.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
{/*  End Industries Section  */}

{/*  Client Logos Marquee Section  */}
<section className="client-logos-section section-padding pb-0" style={{ background: 'transparent' }}>
    <div className="auto-container">
        <div className="sec-title text-center mb-4">
            <span className="sub-title" style={{ fontSize: '14px', letterSpacing: '2px', opacity: 0.6, textTransform: 'uppercase' }}>Trusted By Innovative Brands Worldwide</span>
        </div>
    </div>
    <div className="marquee-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '40px 0', background: 'rgba(255,255,255,0.01)' }}>
        <div className="marquee">
            <div className="marquee-group" style={{ gap: '40px' }}>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>TechCorp</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>GlobalFinance</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>HealthPlus</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>EcoEnergy</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>SaaSPlatform</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>RetailGiant</h3>
            </div>
            <div aria-hidden="true" className="marquee-group" style={{ gap: '40px' }}>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>TechCorp</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>GlobalFinance</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>HealthPlus</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>EcoEnergy</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>SaaSPlatform</h3>
                <h3 style={{ opacity: 0.5, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>RetailGiant</h3>
            </div>
        </div>
    </div>
</section>

{/*  Team Section  */}
<section id="team" className="team-section">
    <div className="auto-container">
        <div className="sec-title">
        <div className="row g-4 our-team-intro align-items-center" style={{ marginBottom: '50px' }}>
            <div className="col-lg-5 wow fadeInUp" style={{}}>
            <span className="sub-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}>
                <Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ width: "24px", height: "auto" }} />
                Our Team
            </span>
            <h2 className="hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, margin: 0 }}>Meet the People <br />Behind Your Growth</h2>
            </div>
            <div className="team-culmn d-flex col-lg-7 wow fadeInUp" data-wow-delay="300ms" style={{ gap: '30px', alignItems: 'center' }}>
            <p className="team-des" style={{ margin: 0, fontSize: '18px', lineHeight: 1.6, opacity: 0.8, maxWidth: '500px' }}>ZAPSHERE is a collective of world-class digital marketing specialists, data scientists, and creative engineers dedicated to empowering your business growth.</p>
            <a className="theme-btn-main" href="/about" style={{ flexShrink: 0 }}>
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">All Members</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
            </a>
            </div>
        </div>
        </div>
        
        <div className="row">
        {/*  Team Block  */}
        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".3s" style={{}}>
            <div className="team-single-box">
            <div className="inner-box">
                <div className="image-box">
                <figure className="image1">
                    <Image loading="lazy" decoding="async" className="team-bg" src="/images/team-bg01.jpg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                </figure>
                <figure className="image2">
                    <Image loading="lazy" decoding="async" className="team-img" src="/images/team01-new.png" alt="John D. Alexon — Head of SEO and GEO Strategy at ZAPSHERE digital marketing agency" width={800} height={800} style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }} />
                </figure>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <span className="share-icon fa fa-share-alt"></span>
                </div>
                <div className="info-box">
                <h4 className="name"><a href="/about">John D. Alexon</a></h4>
                <span className="designation">Head of SEO & GEO Strategy</span>
                <div className="zapshere-hover-bx hover-bx"></div>
                <div className="zapshere-hover-bx hover-bx2"></div>
                <div className="zapshere-hover-bx hover-bx3"></div>
                <div className="zapshere-hover-bx hover-bx4"></div>
                </div>
            </div>
            </div>
        </div>

        {/*  Team Block  */}
        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s" style={{}}>
            <div className="team-single-box">
            <div className="inner-box">
                <div className="image-box">
                <figure className="image1">
                    <Image loading="lazy" decoding="async" className="team-bg" src="/images/team-bg01.jpg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                </figure>
                <figure className="image2">
                    <Image loading="lazy" decoding="async" className="team-img" src="/images/team02-new.png" alt="Anjelina Watson — Head of Paid Media and Social Media Marketing at ZAPSHERE" width={800} height={800} style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }} />
                </figure>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <span className="share-icon fa fa-share-alt"></span>
                </div>
                <div className="info-box">
                <h4 className="name"><a href="/about">Anjelina Watson</a></h4>
                <span className="designation">Head of Paid Media & Social</span>
                <div className="zapshere-hover-bx hover-bx"></div>
                <div className="zapshere-hover-bx hover-bx2"></div>
                <div className="zapshere-hover-bx hover-bx3"></div>
                <div className="zapshere-hover-bx hover-bx4"></div>
                </div>
            </div>
            </div>
        </div>

        {/*  Team Block  */}
        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".7s" style={{}}>
            <div className="team-single-box mb-0">
            <div className="inner-box">
                <div className="image-box">
                <figure className="image1">
                    <Image loading="lazy" decoding="async" className="team-bg" src="/images/team-bg01.jpg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                </figure>
                <figure className="image2">
                    <Image loading="lazy" decoding="async" className="team-img" src="/images/team03-new.png" alt="David T. Larner — Lead Automation Engineer and AI systems specialist at ZAPSHERE" width={800} height={800} style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }} />
                </figure>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <span className="share-icon fa fa-share-alt"></span>
                </div>
                <div className="info-box">
                <h4 className="name"><a href="/about">David T. Larner</a></h4>
                <span className="designation">Lead Automation Engineer</span>
                <div className="zapshere-hover-bx hover-bx"></div>
                <div className="zapshere-hover-bx hover-bx2"></div>
                <div className="zapshere-hover-bx hover-bx3"></div>
                <div className="zapshere-hover-bx hover-bx4"></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
{/* End Team Section  */}

{/*  Achievements Section  */}
<section id="achievements" className="achievements-section section-padding pb-90" style={{}}>
  <div className="auto-container">
    <div className="row g-5 align-items-center">
      {/* Left Column: Image */}
      <div className="col-lg-5 wow fadeInLeft">
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <Image loading="lazy" decoding="async" src="/images/awards-new.png" alt="ZAPSHERE industry awards and recognition — AI digital marketing agency achievements" width={800} height={800} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          {/* Subtle overlay glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)' }}></div>
        </div>
      </div>
      
      {/* Right Column: Text & Award Grid */}
      <div className="col-lg-7 wow fadeInRight" data-wow-delay=".2s">
        <div className="sec-title mb-4">
          <span className="sub-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}>
            <Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ width: "24px", height: "auto" }} />
            Achievements
          </span>
          <h2 className="hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, margin: 0, marginBottom: '20px' }}>A Legacy of Results, Innovation and Industry Recognition</h2>
          <p className="sec-descrption" style={{ margin: 0, fontSize: '18px', lineHeight: 1.6, opacity: 0.8 }}>ZAPSHERE has been recognised globally for delivering measurable growth, pioneering AI-first marketing strategies, and building lasting partnerships with ambitious brands.</p>
        </div>

        {/* Awards Grid */}
        <div className="row g-4 mt-2">
          {/* Award 1 */}
          <div className="col-md-6">
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '25px', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '40px', fontWeight: 900, color: 'rgba(252, 219, 102, 0.1)', position: 'absolute', top: 10, right: 20, lineHeight: 1 }}>01</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '1px', fontSize: '14px' }}>2023</span>
                <h4 style={{ fontSize: '18px', color: '#fff', margin: 0, lineHeight: 1.4, fontWeight: 700 }}>Google Premier Partner — Top 3% Globally</h4>
              </div>
            </div>
          </div>
          {/* Award 2 */}
          <div className="col-md-6">
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '25px', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '40px', fontWeight: 900, color: 'rgba(252, 219, 102, 0.1)', position: 'absolute', top: 10, right: 20, lineHeight: 1 }}>02</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '1px', fontSize: '14px' }}>2024</span>
                <h4 style={{ fontSize: '18px', color: '#fff', margin: 0, lineHeight: 1.4, fontWeight: 700 }}>Meta Business Partner — Creative Excellence</h4>
              </div>
            </div>
          </div>
          {/* Award 3 */}
          <div className="col-md-6">
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '25px', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '40px', fontWeight: 900, color: 'rgba(252, 219, 102, 0.1)', position: 'absolute', top: 10, right: 20, lineHeight: 1 }}>03</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '1px', fontSize: '14px' }}>2025</span>
                <h4 style={{ fontSize: '18px', color: '#fff', margin: 0, lineHeight: 1.4, fontWeight: 700 }}>Best AI Marketing Agency — AU/DE Market Awards</h4>
              </div>
            </div>
          </div>
          {/* Award 4 */}
          <div className="col-md-6">
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '25px', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '40px', fontWeight: 900, color: 'rgba(252, 219, 102, 0.1)', position: 'absolute', top: 10, right: 20, lineHeight: 1 }}>04</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '1px', fontSize: '14px' }}>2025</span>
                <h4 style={{ fontSize: '18px', color: '#fff', margin: 0, lineHeight: 1.4, fontWeight: 700 }}>Clutch Global Top Digital Agency</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/*  Blog Section  */}
<section id="blog" className="blog-section section-padding pb-90" style={{}}>
  <div className="auto-container">
    <div className="sec-title text-center mb-5">
      <span className="sub-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}>
        <Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ width: "24px", height: "auto" }} />
        Latest Blog
      </span>
      <h2 className="hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, margin: 0 }}>Read Our Recent Blog Posts for Growth Insights</h2>
    </div>

    <div className="row g-4 mt-4">
      {loadingBlogs ? (
        <div className="text-center" style={{ color: '#fff', fontSize: '20px', padding: '50px 0', width: '100%' }}>
          <i className="fa-solid fa-circle-notch fa-spin" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Loading Insights...
        </div>
      ) : blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div key={blog.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(index + 1) * 0.1}s`}>
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <Image loading="lazy" decoding="async" src={blog.thumbnail_url || '/images/blog-aeo.png'} alt={blog.title} width={800} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: '#fcdb66', color: '#111', padding: '6px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{blog.excerpt || 'Digital Marketing'}</div>
              </div>
              <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-regular fa-calendar" style={{ color: '#fcdb66' }}></i> {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <h4 style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.4, color: '#fff', marginBottom: '20px' }}>
                  <Link href={`/blog/${blog.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{blog.title}</Link>
                </h4>
                <div style={{ marginTop: 'auto' }}>
                  <Link href={`/blog/${blog.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#fcdb66', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', width: '100%' }}>No blogs found.</div>
      )}
    </div>
  </div>
</section>

{/*  FAQ Section  */}
<section id="faq" className="faq-section section-padding pb-90" style={{}}>
  <div className="auto-container">
    <div className="sec-title text-center">
      <span className="sub-title" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={24} height={24} style={{ marginRight: '12px' }} />Common Queries</span>
      <h2 className="hero_title" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>Frequently Asked Questions</h2>
    </div>
    
    <div className="row justify-content-center mt-5">
      <div className="col-lg-8 col-md-10 col-sm-12">
        <div className="accordion-container">
          
          {/*  FAQ Item 1  */}
          <details className="faq-item" style={{ marginBottom: '20px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <summary className="faq-header" style={{ cursor: 'pointer', outline: 'none' }}>
              <h4 style={{ display: 'inline-block', margin: 0 }}>What is ZAPSHERE?</h4>
            </summary>
            <div className="faq-content" style={{ marginTop: '15px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>ZAPSHERE is a full-service AI-powered digital marketing agency helping businesses in Australia, the United States, and Germany grow through SEO, paid advertising, social media, email marketing, and advanced analytics.</p>
            </div>
          </details>

          {/*  FAQ Item 2  */}
          <details className="faq-item" style={{ marginBottom: '20px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <summary className="faq-header" style={{ cursor: 'pointer', outline: 'none' }}>
              <h4 style={{ display: 'inline-block', margin: 0 }}>What industries does ZAPSHERE serve?</h4>
            </summary>
            <div className="faq-content" style={{ marginTop: '15px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>We work with businesses across eCommerce, SaaS, healthcare, real estate, finance, education, hospitality, and professional services sectors.</p>
            </div>
          </details>

          {/*  FAQ Item 3  */}
          <details className="faq-item" style={{ marginBottom: '20px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <summary className="faq-header" style={{ cursor: 'pointer', outline: 'none' }}>
              <h4 style={{ display: 'inline-block', margin: 0 }}>Do you offer services globally?</h4>
            </summary>
            <div className="faq-content" style={{ marginTop: '15px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>Yes. ZAPSHERE operates across Australia, the United States, and Germany with localised strategies tailored to each market's unique digital landscape, consumer behaviour, and platform preferences.</p>
            </div>
          </details>

          {/*  FAQ Item 4  */}
          <details className="faq-item" style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <summary className="faq-header" style={{ cursor: 'pointer', outline: 'none' }}>
              <h4 style={{ display: 'inline-block', margin: 0 }}>How quickly can I see results?</h4>
            </summary>
            <div className="faq-content" style={{ marginTop: '15px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>Paid media campaigns can deliver results within the first 2–4 weeks. SEO and content marketing typically show meaningful traction within 3–6 months, with compounding growth over time.</p>
            </div>
          </details>

        </div>
      </div>
    </div>
  </div>
  
  <div className="service-bg-blur" style={{}}></div>
</section>
{/*  Contact Section  */}
<section id="contact" className="contact-section">
  <div className="auto-container">
    <div className="row">
      {/*  Info Column  */}
      <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
        <div className="contact-right-warp">
          <div className="sec-title style_color">
            <span className="sub-title" style={{ color: '#fcdb66', fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}><Image loading="lazy" decoding="async" src="/images/sub-titls.svg" alt="" width={24} height={24} style={{ marginRight: '12px' }} />Contact Us</span>
            <h2 className="hero_title" style={{ color: '#fff', fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>Feel Free to Ask Anything — <br />Just Reach Out to Our Team</h2>
          </div>
          <div className="contact-info">
            <p style={{ color: '#fff', fontSize: '18px' }}>hello@zapshere.com</p>
            <h4 className="info-title" style={{ color: '#fcdb66' }}>+61 (02) 8007 4500</h4>
          </div>
        </div>
      </div>

      {/*  Form Column  */}
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="contact-forms wow fadeInRight">
          <h2 className="service-info__badge" style={{}}>Get Your Free Marketing Audit</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input type="text" name="name" value={formData.name || ''} onChange={handleChange} placeholder="Your Name *" required />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input type="email" name="email" value={formData.email || ''} onChange={handleChange} placeholder="Your Email *" required />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input type="text" name="subject" value={formData.subject || ''} onChange={handleChange} placeholder="Subject *" required />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <style dangerouslySetInnerHTML={{ __html: `
                    #contact-budget option { background: #111; color: #fff; }
                `}} />
                <select id="contact-budget" name="budget" value={formData.budget || ''} onChange={handleChange} required style={{ width: '100%', height: '60px', padding: '15px 30px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '30px', fontSize: '16px', outline: 'none', appearance: 'none', WebkitAppearance: 'none' }}>
                    <option value="" disabled hidden>Your Budget *</option>
                    <option value="Under $2,000/month">Under $2,000/month</option>
                    <option value="$2,000 – $5,000/month">$2,000 – $5,000/month</option>
                    <option value="$5,000 – $15,000/month">$5,000 – $15,000/month</option>
                    <option value="$15,000+/month">$15,000+/month</option>
                </select>
                {/* Custom dropdown arrow */}
                <i className="fa-solid fa-chevron-down" style={{ position: 'absolute', right: '35px', top: '22px', color: 'rgba(255,255,255,0.5)', pointerEvents: 'none' }}></i>
              </div>
              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <textarea name="message" value={formData.message || ''} onChange={handleChange} placeholder="Tell us about your project... *" required></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <button type="submit" className="theme-btn-main" disabled={isSubmitting}>
                  <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                  <span className="theme-btn theme-bg theme-color-white">
                    {isSubmitting ? 'Sending Request...' : isSuccess ? 'Request Sent!' : 'Send Message'}
                  </span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
                {isSuccess && (
                  <p className="mt-3" style={{ color: '#fcdb66', fontWeight: 'bold' }}>
                    <i className="fa-solid fa-check-circle me-2"></i> Your message has been successfully sent!
                  </p>
                )}
              </div>
            </div>
          </form>
          <div className="contact-sps bounce-animate3"><Image loading="lazy" decoding="async" src="/images/contact-sp.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-sp rotate"><Image loading="lazy" decoding="async" src="/images/sp-contact.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
</section>

    </>
  );
}
