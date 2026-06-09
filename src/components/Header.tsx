"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-lower">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link href="/" title="ZAPSHERE" style={{ textDecoration: 'none' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '26px', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Zap<span style={{ color: '#fcdb66' }}>shere</span>
                </span>
              </Link>
            </div>
          </div>
          
          <div className="nav-outer">
            <nav className="nav main-menu">
              <ul className="navigation">
                <li className={pathname === '/' ? 'current' : ''}><Link href="/">Home</Link></li>
                <li className={`dropdown ${pathname.startsWith('/services') ? 'current' : ''}`}>
                  <Link href="/services">Services</Link>
                  <ul>
                    <li><Link href="/services/seo-content-marketing">SEO & Content</Link></li>
                    <li><Link href="/services/paid-advertising">Paid Ads</Link></li>
                    <li><Link href="/services/social-media-marketing">Social Media</Link></li>
                    <li><Link href="/services/email-funnel-marketing">Email & Funnels</Link></li>
                    <li><Link href="/services/analytics-reporting">Analytics</Link></li>
                  </ul>
                </li>
                <li className={`dropdown ${['/au', '/us', '/de'].some(p => pathname.startsWith(p)) ? 'current' : ''}`}>
                  <Link href="#">Locations</Link>
                  <ul>
                    <li><Link href="/au">Australia</Link></li>
                    <li><Link href="/us">United States</Link></li>
                    <li><Link href="/de">Deutschland</Link></li>
                  </ul>
                </li>
                <li className={pathname === '/products' ? 'current' : ''}><Link href="/products">Products</Link></li>
                <li className={pathname === '/industries' ? 'current' : ''}><Link href="/industries">Industries</Link></li>
                <li className={pathname === '/blog' ? 'current' : ''}><Link href="/blog">Blog</Link></li>
                <li className={pathname === '/contact' ? 'current' : ''}><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="outer-box">
            <div className="header-btn d-none d-xxl-block">
              <Link className="header-btn-main" href="/contact">
                <span className="header-theme-btn">Get a quote</span>
                <span className="header-btn-arrow-right"><i className="fa-regular fa-arrow-right"></i></span>
              </Link>
            </div>
            <div className="mobile-nav-toggler" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer' }}>
              <i className={isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} style={{ fontSize: '28px', color: '#fff' }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown d-lg-none" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', zIndex: 9999, padding: '30px 20px', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}><Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: pathname === '/' ? '#fcdb66' : '#fff', fontSize: '20px', textDecoration: 'none', fontWeight: 600, display: 'block' }}>Home</Link></li>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}><Link href="/services" onClick={() => setIsMobileMenuOpen(false)} style={{ color: pathname.startsWith('/services') ? '#fcdb66' : '#fff', fontSize: '20px', textDecoration: 'none', fontWeight: 600, display: 'block' }}>Services</Link></li>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}><Link href="/products" onClick={() => setIsMobileMenuOpen(false)} style={{ color: pathname.startsWith('/products') ? '#fcdb66' : '#fff', fontSize: '20px', textDecoration: 'none', fontWeight: 600, display: 'block' }}>Products</Link></li>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}><Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} style={{ color: pathname.startsWith('/industries') ? '#fcdb66' : '#fff', fontSize: '20px', textDecoration: 'none', fontWeight: 600, display: 'block' }}>Industries</Link></li>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}><Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} style={{ color: pathname.startsWith('/blog') ? '#fcdb66' : '#fff', fontSize: '20px', textDecoration: 'none', fontWeight: 600, display: 'block' }}>Blog</Link></li>
            <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: pathname.startsWith('/contact') ? '#fcdb66' : '#fff', fontSize: '20px', textDecoration: 'none', fontWeight: 600, display: 'block' }}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
