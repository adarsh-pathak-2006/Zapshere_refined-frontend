"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('leads').insert([{
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.company ? `[Company: ${formData.company}]\n\n${formData.message}` : formData.message,
        source: 'Contact Page'
      }]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error("Error submitting form:", err);
      const errorText = err.message || (typeof err === 'object' ? JSON.stringify(err) : 'Something went wrong.');
      alert(`Submission Failed: ${errorText}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/inner/page-title-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title wow fadeInUp" data-wow-delay="0ms">Let's Build Your Growth Engine</h1>
            <ul className="page-breadcrumb wow fadeInUp" data-wow-delay="200ms">
              <li><Link href="/">Home</Link></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section pt-100 pb-100" style={{ background: '#0a0a0a' }}>
        <div className="auto-container">
          <div className="row">
            {/* Contact Info (Left Side) */}
            <div className="col-lg-5 col-md-12 col-sm-12 mb-5 mb-lg-0 wow fadeInLeft">
              <div className="contact-right-warp" style={{ padding: '0', background: 'transparent' }}>
                <div className="sec-title style_color mb-4">
                  <span className="sub-title" style={{ color: '#fcdb66' }}><img src="/images/sub-title-shape.svg" alt="" style={{ filter: 'brightness(0) invert(1)' }} />Get in Touch</span>
                  <h2 className="hero_title" style={{ color: '#fff', fontSize: '42px' }}>Start Your Journey With ZAPSHERE.</h2>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '40px' }}>
                  Whether you're looking to scale your eCommerce brand, generate high-ticket B2B leads, or completely overhaul your digital ecosystem, our global team of experts is ready to help.
                </p>
                
                {/* Global Offices */}
                <div className="row mb-5">
                  <div className="col-md-6 mb-4">
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                      <i className="fa-solid fa-location-dot mb-3" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                      <h4 style={{ fontSize: '20px', marginBottom: '10px', color: '#fff' }}>Sydney (HQ)</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '14px' }}>Level 33, 264 George St,<br/>Sydney NSW 2000, Australia</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                      <i className="fa-solid fa-location-dot mb-3" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                      <h4 style={{ fontSize: '20px', marginBottom: '10px', color: '#fff' }}>New York</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '14px' }}>1 World Trade Center,<br/>New York, NY 10007, USA</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                      <i className="fa-solid fa-location-dot mb-3" style={{ fontSize: '24px', color: '#fcdb66' }}></i>
                      <h4 style={{ fontSize: '20px', marginBottom: '10px', color: '#fff' }}>Berlin</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '14px' }}>Potsdamer Platz 1,<br/>10785 Berlin, Germany</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                  <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Direct Contact</p>
                  <p style={{ fontSize: '18px', fontWeight: 500, margin: '5px 0', color: '#fff' }}><i className="fa-solid fa-envelope me-2" style={{ color: '#fcdb66' }}></i> hello@zapshere.com</p>
                  <h4 className="info-title" style={{ fontSize: '28px', marginTop: '10px', color: '#fff' }}><i className="fa-solid fa-phone me-2" style={{ color: '#fcdb66', fontSize: '20px' }}></i> +61 (02) 8007 4500</h4>
                </div>
              </div>
            </div>

            {/* Interactive Form (Right Side) */}
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-forms wow fadeInRight" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '50px', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
                
                {/* Success Overlay */}
                <div style={{ 
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                  background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  opacity: isSuccess ? 1 : 0, visibility: isSuccess ? 'visible' : 'hidden',
                  transition: 'all 0.5s ease', zIndex: 10, textAlign: 'center', padding: '40px'
                }}>
                  <div style={{ width: '80px', height: '80px', background: 'rgba(252, 219, 102, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <i className="fa-solid fa-check" style={{ fontSize: '40px', color: '#fcdb66' }}></i>
                  </div>
                  <h3 style={{ color: '#fff', marginBottom: '15px' }}>Message Received!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>Thank you for reaching out. A growth specialist will review your details and contact you within 24 hours to schedule a discovery call.</p>
                </div>

                <h3 className="mb-4" style={{ fontSize: '28px', color: '#fff' }}>Request a Discovery Call</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px' }}>Fill out the form below to help us understand your business goals.</p>

                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input 
                        type="text" 
                        name="name" 
                        className="dark-placeholder"
                        placeholder="Full Name *" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '15px 20px', borderRadius: '8px', width: '100%' }}
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input 
                        type="email" 
                        name="email" 
                        className="dark-placeholder"
                        placeholder="Work Email *" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '15px 20px', borderRadius: '8px', width: '100%' }}
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input 
                        type="text" 
                        name="company" 
                        className="dark-placeholder"
                        placeholder="Company Name" 
                        value={formData.company}
                        onChange={handleChange}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '15px 20px', borderRadius: '8px', width: '100%' }}
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <select 
                        name="subject" 
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '15px 20px', borderRadius: '8px', width: '100%', height: '56px', outline: 'none' }}
                      >
                        <option value="" disabled style={{ color: '#000' }}>Select Service Interest *</option>
                        <option value="SEO & Content" style={{ color: '#000' }}>SEO & Content Marketing</option>
                        <option value="Paid Ads" style={{ color: '#000' }}>Paid Advertising (Google/Meta)</option>
                        <option value="Social Media" style={{ color: '#000' }}>Social Media Management</option>
                        <option value="Email Funnels" style={{ color: '#000' }}>Email & Funnel Automation</option>
                        <option value="Analytics" style={{ color: '#000' }}>Analytics & Tracking</option>
                        <option value="Full Service" style={{ color: '#000' }}>Full Service Agency Retainer</option>
                        <option value="Other" style={{ color: '#000' }}>Other / General Inquiry</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea 
                        name="message" 
                        className="dark-placeholder"
                        placeholder="Tell us about your current marketing challenges and growth goals... *" 
                        required
                        value={formData.message}
                        onChange={handleChange}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '15px 20px', borderRadius: '8px', minHeight: '150px', width: '100%' }}
                      ></textarea>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 mb-0">
                      <button 
                        className="theme-btn-main header-style-btn border-0" 
                        type="submit" 
                        disabled={isSubmitting}
                        style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1, transition: 'all 0.3s', background: '#fcdb66', color: '#000', borderRadius: '8px' }}
                      >
                        <span style={{ display: 'block', padding: '20px', fontSize: '18px', fontWeight: 600 }}>
                          {isSubmitting ? (
                            <><i className="fa-solid fa-circle-notch fa-spin me-2"></i> Sending Request...</>
                          ) : (
                            <><i className="fa-solid fa-paper-plane me-2"></i> Send Request</>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators / Final CTA Strip */}
      <section className="cta-strip section-padding" style={{ background: '#fcdb66' }}>
        <div className="auto-container">
          <div className="row align-items-center text-center">
            <div className="col-12 wow fadeInUp">
              <h3 style={{ color: '#000', margin: 0, fontWeight: 700 }}>Trusted by 500+ businesses across Australia, the USA, and Germany.</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
