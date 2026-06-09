import React from 'react';
import Image from 'next/image';

export default function HomeBelowFold({ formData, setFormData, handleChange, handleSubmit, isSubmitting, isSuccess }: any) {
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
                     <span className="sub-title theme-color-black"><Image loading="lazy" decoding="async" src="/images/sub-title-shape2.svg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />Why Choose Us?</span>
                     <h2 className="theme-color-black hero_title" style={{}}>Empowering Brands Through AI &amp; Data-Driven Digital Solutions</h2>
                 </div>
                 <ul className="icon-box-list wow fadeInUp" data-wow-delay=".3s" style={{}}>
                     <li style={{}}>
                       <div className="icon" style={{}}><Image loading="lazy" decoding="async" src="/images/icon1.svg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                       <div className="content">
                         <h4 className="title" style={{}}>AI-First Strategy</h4>
                         <p style={{}}>Every campaign is built on predictive data modelling and intelligent automation.</p>
                       </div>
                     </li>
                     <li style={{}}>
                       <div className="icon" style={{}}><Image loading="lazy" decoding="async" src="/images/icon2.svg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                       <div className="content">
                         <h4 className="title" style={{}}>Full-Funnel Approach</h4>
                         <p style={{}}>From first click to closed customer, we own and optimize your entire marketing funnel.</p>
                       </div>
                     </li>
                     <li style={{}}>
                       <div className="icon" style={{}}><Image loading="lazy" decoding="async" src="/images/icon3.svg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                       <div className="content">
                         <h4 className="title" style={{}}>Global &amp; Local Expertise</h4>
                         <p style={{}}>Deep knowledge of AU, US, and DE market dynamics and consumer behaviour.</p>
                       </div>
                     </li>
                     <li style={{}}>
                       <div className="icon" style={{}}><Image loading="lazy" decoding="async" src="/images/icon1.svg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                       <div className="content">
                         <h4 className="title" style={{}}>Transparent Reporting &amp; No Contracts</h4>
                         <p style={{}}>Real-time dashboards with no lock-in contracts — we earn your business every single month.</p>
                       </div>
                     </li>
                 </ul>
                 <a className="theme-btn-main header-style-btn theme-color-white2 wow fadeInUp" data-wow-delay=".5s" href="/contact">
                     <span className="theme-btn-arrow-left theme-bg"><i className="fa-solid fa-arrow-left"></i></span>
                     <span className="theme-btn theme-bg">Book Free Strategy Call</span>
                     <span className="theme-btn-arrow-right theme-bg"><i className="fa-solid fa-arrow-right"></i></span>
                 </a>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="choose-us-image-items">
                <div className="row g-4">
                    <div className="col-lg-5 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="choose-us-image">
                        <Image loading="lazy" decoding="async" src="/images/choose-us-1.jpg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className="counter-box-1">
                        <div className="check-icon">
                        <Image loading="lazy" decoding="async" src="/images/icon3.svg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className="count-box">
                        <h4 className="title"><span className="count-text" data-speed="3000" data-stop="97">0</span>%</h4>
                        <p>Client Retention</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="choose-us-image2">
                        <Image loading="lazy" decoding="async" src="/images/choose-us-2.jpg" alt="img" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                    </div>
                    </div>
                </div>
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
                <span className="sub-title"><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />How ZAPSHERE Works</span>
                <h2 className="hero_title">A Data-Driven Framework for <br />Predictable Growth</h2>
            </div>
            </div>
        </div>
        </div>
        <div className="row process-border">
        <div className="col-lg-4 col-md-6 col-sm-12">
            {/*  process box  */}
            <div className="process-single-box wow fadeInUp" data-wow-delay=".3s" style={{}}>
            <div className="process-thumb"><Image loading="lazy" decoding="async" src="/images/process-img1.jpg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            <div className="process-content">
                <h4 className="title">Discovery &amp; Audit</h4>
                <p>We deeply analyze your business data, audit current marketing performance, and build a predictive omni-channel strategy.</p>
            </div>
            <h3 className="process-number">01</h3>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            {/*  process box  */}
            <div className="process-single-box wow fadeInUp" data-wow-delay=".5s" style={{}}>
            <div className="process-thumb"><Image loading="lazy" decoding="async" src="/images/process-img2.jpg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            <div className="process-content">
                <h4 className="title">Launch &amp; Automate</h4>
                <p>Our experts launch full-funnel campaigns with intelligent ad bidding, SEO implementation, and CRM automation.</p>
            </div>
            <h3 className="process-number">02</h3>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            {/*  process box  */}
            <div className="process-single-box wow fadeInUp" data-wow-delay=".7s" style={{}}>
            <div className="process-thumb"><Image loading="lazy" decoding="async" src="/images/process-img3.jpg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            <div className="process-content">
                <h4 className="title">Scale &amp; Optimize</h4>
                <p>We continuously optimize budgets, scale winning strategies, and provide real-time attribution dashboards for full transparency.</p>
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
                <span className="sub-title"><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />Our Work</span>
                <h2 className="hero_title">Featured Case Studies</h2>
            </div>
            </div>
        </div>
        </div>
        <div className="row">
        {/*  Content Column  */}
        <div className="col-lg-12 col-md-12 col-sm-12">
            {/*  process box  */}
            <div className="pin-spacer" style={{}}><div className="work-single-box ks-project-panel wow fadeInUp" data-wow-delay=".3s" style={{}}>
            <div className="work-content">
                <h2 className="title">B2B SaaS <br /> Growth Strategy</h2>
                <p>We scaled their MRR by 300% in 12 months using a full-funnel LinkedIn Ads and SEO strategy.</p>
                <span className="work-date d-block">SaaS Industry</span>
                <a className="theme-btn-main header-style-btn" href="/about">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Click to See Details</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
            </div>
            <div className="work-img overlay-anim">
                <Image loading="lazy" decoding="async" src="/images/work-img1.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                <div className="work-shape">
                <Image loading="lazy" decoding="async" src="/images/work-bx-shape.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                </div>
            </div>
            <h3 className="wokr-number">01</h3>
            </div></div>
            {/*  process box  */}
            <div className="pin-spacer" style={{}}><div className="work-single-box ks-project-panel wow fadeInUp" data-wow-delay=".5s" style={{}}>
            <div className="work-content">
                <h2 className="title">eCommerce <br /> Market Expansion</h2>
                <p>Decreased CPA by 42% while successfully entering the US market with AI-optimized Meta advertising.</p>
                <span className="work-date d-block">eCommerce Industry</span>
                <a className="theme-btn-main header-style-btn" href="/about">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Click to See Details</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
            </div>
            <div className="work-img overlay-anim">
                <Image loading="lazy" decoding="async" src="/images/work-img2.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                <div className="work-shape"><Image loading="lazy" decoding="async" src="/images/work-bx-shape.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
            </div>
            <h3 className="wokr-number">02</h3>
            </div></div>
            {/*  process box  */}
            <div className="pin-spacer" style={{}}><div className="work-single-box ks-project-panel wow fadeInUp" data-wow-delay=".3s" style={{}}>
            <div className="work-content">
                <h2 className="title">Enterprise <br />Lead Generation</h2>
                <p>Implemented HubSpot marketing automation to increase sales qualified leads (SQLs) by 150%.</p>
                <span className="work-date d-block">Professional Services</span>
                <a className="theme-btn-main header-style-btn" href="/about">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Click to See Details</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
            </div>
            <div className="work-img overlay-anim">
                <Image loading="lazy" decoding="async" src="/images/work-img3.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
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

{/*  Industries We Serve Section  */}
<section id="industries" className="industries-section section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
    <style dangerouslySetInnerHTML={{ __html: `
        .industry-card:hover { transform: translateY(-5px); border-color: rgba(252, 219, 102, 0.3) !important; background: rgba(255,255,255,0.05) !important; }
    `}} />
    <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
            <span className="sub-title"><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />Industries We Serve</span>
            <h2 className="hero_title">Growth Strategies for Every Sector</h2>
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
<section id="testimonials" className="testimonial-section-two" style={{}}>
  <div className="container-fluid">
    <div className="row align-items-center flex-column-reverse flex-lg-row">
      <div className="col-lg-7 col-md-12 col-sm-12">
        <style dangerouslySetInnerHTML={{ __html: `
          .zs-testi-scroll {
              display: flex;
              gap: 30px;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              padding-bottom: 20px;
              scrollbar-width: thin;
              scrollbar-color: #fcdb66 rgba(255, 255, 255, 0.05);
          }
          .zs-testi-scroll::-webkit-scrollbar { height: 6px; }
          .zs-testi-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
          .zs-testi-scroll::-webkit-scrollbar-thumb { background: #fcdb66; border-radius: 10px; }
          .zs-testi-card {
              flex: 0 0 100%;
              scroll-snap-align: center;
          }
        ` }} />
        <div className="zs-testi-scroll">
            
            {/*  Slide 1  */}
            <div className="zs-testi-card">
              <div className="testimonial-single_box-two wow fadeInLeft" data-wow-delay=".1s">
                <div className="inner-single_box">
                  <div className="tesimonial-thumb"><Image loading="lazy" decoding="async" src="/images/autor-img.png" alt="author" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                  <div className="testi_content">
                    <figure className="testi_aroow"><Image loading="lazy" decoding="async" src="/images/testi-icon.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /><span className="top-title">SEO &amp; Growth</span></figure>
                    <p>"ZAPSHERE transformed our organic search presence. Within 6 months of launching our AI-guided SEO strategy, organic traffic in Australia grew by 180% and SQLs increased by 140%."</p>
                    <div className="testimonial-author">
                      <div className="testi-bio">
                        <h4 className="title-info">Sarah Jenkins</h4>
                        <p>Head of Growth — FinTech AU</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Slide 2  */}
            <div className="zs-testi-card">
              <div className="testimonial-single_box-two wow fadeInLeft" data-wow-delay=".2s">
                <div className="inner-single_box">
                  <div className="tesimonial-thumb"><Image loading="lazy" decoding="async" src="/images/autor-img.png" alt="author" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                  <div className="testi_content">
                    <figure className="testi_aroow"><Image loading="lazy" decoding="async" src="/images/testi-icon.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /><span className="top-title">Paid Ads ROI</span></figure>
                    <p>"Their paid ad management is second to none. The team optimized our global campaigns across Google and Meta, reducing our CPA by 35% while increasing overall sales volume."</p>
                    <div className="testimonial-author">
                      <div className="testi-bio">
                        <h4 className="title-info">Marcus Vance</h4>
                        <p>VP of Marketing — EduTech USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Slide 3  */}
            <div className="zs-testi-card">
              <div className="testimonial-single_box-two wow fadeInLeft" data-wow-delay=".3s">
                <div className="inner-single_box">
                  <div className="tesimonial-thumb"><Image loading="lazy" decoding="async" src="/images/autor-img.png" alt="author" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
                  <div className="testi_content">
                    <figure className="testi_aroow"><Image loading="lazy" decoding="async" src="/images/testi-icon.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /><span className="top-title">Funnel Automation</span></figure>
                    <p>"ZAPSHERE built our entire marketing automation funnel. Their integration of HubSpot with custom predictive lead scoring has halved our sales cycle length."</p>
                    <div className="testimonial-author">
                      <div className="testi-bio">
                        <h4 className="title-info">Dieter Becker</h4>
                        <p>COO — LogiTech DE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
      <div className="column-right col-lg-5 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
        <div className="sec-title">
          <span className="sub-title"><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />Testimonials</span>
          <h2 className="hero_title">Real Stories from Happy Customers</h2>
        </div>
        <div className="counter_box-testi">
          <div className="count-box"><span className="count-text" data-speed="3000" data-stop="8">0</span>.4x<Image loading="lazy" decoding="async" className="counter-icn" src="/images/autor-img.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
          <div className="count-autor"></div>
          <h6 className="counter-title">Average ROAS</h6>
        </div>
      </div>
    </div>
  </div>
  <div className="testi-sp bounce-animate3"><Image loading="lazy" decoding="async" src="/images/animat-shape.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
</section>
{/*  Team Section  */}
<section id="team" className="team-section">
    <div className="auto-container">
        <div className="sec-title">
        <div className="row g-4 our-team-intro align-items-center">
            <div className="col-lg-5 wow fadeInUp" style={{}}>
            <span className="sub-title"><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />Our Team</span>
            <h2 className="hero_title">Meet Professional <br />Team Members</h2>
            </div>
            <div className="team-culmn d-flex col-lg-7 wow fadeInUp" data-wow-delay="300ms" style={{}}>
            <p className="team-des">ZAPSHERE is a collective of world-class digital marketing specialists, data scientists, and creative engineers dedicated to empowering your business growth.</p>
            <a className="theme-btn-main" href="/about">
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">All Member</span>
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
                    <Image loading="lazy" decoding="async" className="team-img" src="/images/team01.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                </figure>
                <div className="social-links">
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-pinterest-p"></i></a>
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-instagram"></i></a>
                </div>
                <span className="share-icon fa fa-share-alt"></span>
                </div>
                <div className="info-box">
                <h4 className="name"><a href="/about">John D. Alexon</a></h4>
                <span className="designation">Web Developer</span>
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
                    <Image loading="lazy" decoding="async" className="team-img" src="/images/team02.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                </figure>
                <div className="social-links">
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-pinterest-p"></i></a>
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-instagram"></i></a>
                </div>
                <span className="share-icon fa fa-share-alt"></span>
                </div>
                <div className="info-box">
                <h4 className="name"><a href="/about">Anjelina Watson</a></h4>
                <span className="designation">Digital Marketer</span>
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
                    <Image loading="lazy" decoding="async" className="team-img" src="/images/team03.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />
                </figure>
                <div className="social-links">
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-pinterest-p"></i></a>
                    <a href="https://php.kodesolution.com/2026/zapshere-php/#"><i className="fab fa-instagram"></i></a>
                </div>
                <span className="share-icon fa fa-share-alt"></span>
                </div>
                <div className="info-box">
                <h4 className="name"><a href="/about">David T. Larner</a></h4>
                <span className="designation">SEO Specialist</span>
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
{/*  FAQ Section  */}
<section id="faq" className="faq-section section-padding pb-90" style={{}}>
  <div className="auto-container">
    <div className="sec-title text-center">
      <span className="sub-title"><Image loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />Common Queries</span>
      <h2 className="hero_title">Frequently Asked Questions</h2>
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
            <span className="sub-title" style={{ color: '#fcdb66' }}><Image loading="lazy" decoding="async" src="/images/sub-titls.svg" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} />Contact Us</span>
            <h2 className="hero_title" style={{ color: '#fff' }}>Get Your Free Marketing Audit</h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our team — no obligation, just clarity. We'll review your current digital footprint and map out a growth roadmap tailored to your goals.</p>
          <div className="contact-info">
            <p style={{ color: '#fff', fontSize: '18px' }}>hello@zapshere.com</p>
            <h4 className="info-title" style={{ color: '#fcdb66' }}>+61 (02) 8007 4500</h4>
          </div>
          <div className="shape bounce-animate"><Image loading="lazy" decoding="async" src="/images/dance-sp.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto" }} /></div>
        </div>
      </div>

      {/*  Form Column  */}
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="contact-forms wow fadeInRight">
          <h2 className="service-info__badge" style={{}}>Get Your Free Marketing Audit</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone No" required />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email *" required />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
              </div>
              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <button type="submit" className="theme-btn-main" disabled={isSubmitting}>
                  <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                  <span className="theme-btn theme-bg theme-color-white">
                    {isSubmitting ? 'Sending Request...' : isSuccess ? 'Request Sent!' : 'Book Free Strategy Call'}
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
