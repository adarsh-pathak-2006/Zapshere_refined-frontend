import React from 'react';
import Link from 'next/link';

export interface ServicePageProps {
  hero: {
    title: string;
    breadcrumb: string;
    bgImage?: string;
  };
  problem: {
    title: string;
    description: string[];
  };
  solution: {
    title: string;
    description: string[];
    callout: string;
  };
  benefits: {
    title: string;
    items: { icon: string; title: string; desc: string }[];
  };
  process: {
    title: string;
    steps: { num: string; title: string; desc: string }[];
  };
  deliverables: {
    title: string;
    items: { icon: string; title: string; desc: string; link?: string }[];
  };
  techStack: {
    title: string;
    tools: { name: string; icon: string }[];
  };
  results: {
    title: string;
    metrics: { value: string; label: string }[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    desc: string;
    buttonText: string;
  };
}

export default function ServicePageTemplate({ data }: { data: ServicePageProps }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.hero.title,
    "provider": { "@type": "Organization", "name": "ZAPSHERE" },
    "serviceType": data.hero.breadcrumb,
    "areaServed": ["AU", "US", "DE"],
    "description": data.problem.description[0] || "AI-powered digital marketing services by ZAPSHERE.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AUD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {data.faqs && data.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {/* 1. Hero Section */}
      <section className="page-title" style={{ backgroundImage: `url('${data.hero.bgImage || '/images/main-home/banner-bg.png'}')` }}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">{data.hero.title}</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li>{data.hero.breadcrumb}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2 & 3. Problem Statement & Solution Overview */}
      <section className="about-section pt-100 pb-100">
        <div className="auto-container">
          <div className="row">
            {/* Problem */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-0 wow fadeInLeft">
              <div className="inner-column" style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                <div className="sec-title mb-4">
                  <span className="sub-title" style={{ color: '#ff4a4a' }}>The Challenge</span>
                  <h2>{data.problem.title}</h2>
                </div>
                <div className="about-content">
                  {data.problem.description.map((p, i) => <p key={i} style={{ color: 'rgba(255,255,255,0.7)' }}>{p}</p>)}
                </div>
              </div>
            </div>
            
            {/* Solution */}
            <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <div className="inner-column" style={{ background: 'rgba(252, 219, 102, 0.05)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(252, 219, 102, 0.2)', height: '100%' }}>
                <div className="sec-title mb-4">
                  <span className="sub-title" style={{ color: '#fcdb66' }}>Our Approach</span>
                  <h2>{data.solution.title}</h2>
                </div>
                <div className="about-content">
                  {data.solution.description.map((p, i) => <p key={i} style={{ color: 'rgba(255,255,255,0.8)' }}>{p}</p>)}
                  <div className="about-callout mt-4" style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #fcdb66' }}>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>🎯 {data.solution.callout}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Benefits */}
      <section className="services-section pt-0 pb-100">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title"><img loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" />Why It Matters</span>
            <h2>{data.benefits.title}</h2>
          </div>
          <div className="row mt-5">
            {data.benefits.items.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                <div className="premium-hover-card" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', height: '100%' }}>
                  <i className={`fa-solid ${item.icon}`} style={{ fontSize: '40px', color: '#fcdb66', marginBottom: '20px' }}></i>
                  <h4 style={{ fontSize: '22px', marginBottom: '15px' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
             <Link href="/contact" className="theme-btn-main">
                <span className="theme-btn theme-bg theme-color-white">Schedule Discovery Call</span>
             </Link>
          </div>
        </div>
      </section>

      {/* 5. Process Framework */}
      <section className="process-section section-padding fix" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title"><img loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" />How We Do It</span>
            <h2 className="hero_title">{data.process.title}</h2>
          </div>
          <div className="row process-border mt-5">
            {data.process.steps.map((step, i) => (
              <div key={i} className={`col-lg-${12 / data.process.steps.length} col-md-6 col-sm-12 mb-4`}>
                <div className="process-single-box wow fadeInUp" data-wow-delay={`${0.2 * (i + 1)}s`}>
                  <div className="process-content" style={{ marginTop: '0', paddingTop: '40px' }}>
                    <h4 className="title" style={{ fontSize: '20px' }}>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                  <h3 className="process-number">{step.num}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Deliverables */}
      <section className="services-section-two pt-100 pb-100">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title"><img loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" />What You Get</span>
            <h2>{data.deliverables.title}</h2>
          </div>
          <div className="row mt-5">
            {data.deliverables.items.map((item, i) => {
              const cardContent = (
                <div className="service_single_item-2 premium-hover-card" style={{ height: '100%', background: 'rgba(0,0,0,0.3)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="service_icon mb-4">
                    <i className={`fa-solid ${item.icon}`} style={{ fontSize: '36px', color: '#fff' }}></i>
                  </div>
                  <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '20px' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                </div>
              );

              return (
                <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                  {item.link ? (
                    <Link href={item.link} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 & 8. Results & Tech Stack */}
      <section className="results-tech-section pt-100 pb-100" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 wow fadeInLeft">
              <div className="sec-title">
                <span className="sub-title"><img loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" />Expected Outcomes</span>
                <h2>{data.results.title}</h2>
              </div>
              <div className="row mt-4">
                {data.results.metrics.map((metric, i) => (
                  <div key={i} className="col-6 mb-4">
                    <h3 style={{ fontSize: '48px', color: '#fcdb66', fontWeight: 800 }}>{metric.value}</h3>
                    <p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-5 offset-lg-1 wow fadeInRight">
              <div style={{ background: 'rgba(0,0,0,0.5)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ marginBottom: '30px' }}>{data.techStack.title}</h4>
                <div className="row">
                  {data.techStack.tools.map((tool, i) => (
                    <div key={i} className="col-6 mb-4 d-flex align-items-center">
                      <i className={`fa-brands ${tool.icon} fa-solid`} style={{ fontSize: '24px', marginRight: '15px', color: 'rgba(255,255,255,0.8)' }}></i>
                      <span style={{ fontWeight: 500 }}>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Case Studies (Reusable from Homepage) */}
      <section className="works-section section-padding pt-100 pb-100">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title"><img loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" />Proven Success</span>
            <h2>Featured Case Studies</h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp">
              <div className="work-single-box premium-hover-card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '15px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img loading="lazy" decoding="async" src="/images/case-study-saas.png" alt="B2B SaaS" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: '#fcdb66', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase' }}>SaaS Industry</span>
                  <h4 className="mt-2 mb-3">B2B SaaS Growth Strategy</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 0 }}>Scaled MRR by 300% in 12 months using a full-funnel LinkedIn Ads and SEO strategy.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="work-single-box premium-hover-card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '15px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img loading="lazy" decoding="async" src="/images/case-study-ecommerce.png" alt="eCommerce" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: '#fcdb66', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase' }}>eCommerce</span>
                  <h4 className="mt-2 mb-3">Market Expansion</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 0 }}>Decreased CPA by 42% while successfully entering the US market with Meta Ads.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div className="work-single-box premium-hover-card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '15px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img loading="lazy" decoding="async" src="/images/case-study-enterprise.png" alt="Enterprise" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: '#fcdb66', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase' }}>Enterprise</span>
                  <h4 className="mt-2 mb-3">Lead Generation</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 0 }}>Implemented HubSpot marketing automation to increase SQLs by 150%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className="faq-section pt-50 pb-100">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title"><img loading="lazy" decoding="async" src="/images/sub-title-shape.svg" alt="" />Common Queries</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 col-md-10 col-sm-12">
              {data.faqs.map((faq, i) => (
                <details key={i} className="faq-item" style={{ marginBottom: '20px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <summary className="faq-header" style={{ cursor: 'pointer', outline: 'none' }}>
                    <h4 style={{ display: 'inline-block', margin: 0 }}>{faq.question}</h4>
                  </summary>
                  <div className="faq-content" style={{ marginTop: '15px' }}>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA Section */}
      <section id="contact" className="contact-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="contact-right-warp">
                <div className="sec-title style_color">
                  <span className="sub-title"><img loading="lazy" decoding="async" src="/images/sub-titls.svg" alt="" />Next Steps</span>
                  <h2 className="hero_title" style={{ color: '#fff' }}>{data.cta.title}</h2>
                </div>
                <p>{data.cta.desc}</p>
                <div className="contact-info">
                  <p>hello@zapshere.com</p>
                  <h4 className="info-title">+61 (02) 8007 4500</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-forms wow fadeInRight">
                <h2 className="service-info__badge">{data.cta.buttonText}</h2>
                <form id="contact-form">
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="name" placeholder="Full Name" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <input type="text" name="company" placeholder="Company Name" required />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea name="message" placeholder="Tell us about your project goals..."></textarea>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <button className="theme-btn-main header-style-btn border-0" type="submit">
                        <span className="theme-btn theme-bg theme-color-white">{data.cta.buttonText}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
