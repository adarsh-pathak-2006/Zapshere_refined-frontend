import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer bg-cover" style={{ backgroundImage: "url('/images/home-1/footer-bg.jpg')" }}>
      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-upper col-lg-12">
              <h2 className="footer-title">LET'S DISCUSS <br /> NEW PROJECT</h2>
              <div className="footer-icon"><img src="/images/brand-logo.png" alt="logo" /></div>
            </div>
          </div>
          <div className="row">
            {/* Footer Column */}
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <Link href="/">
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '26px', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      Zap<span style={{ color: '#fcdb66' }}>shere</span>
                    </span>
                  </Link>
                </div>
                <p className="footer-des">ZAPSHERE is a dynamic AI-powered digital marketing agency dedicated to empowering businesses globally.</p>
                <ul className="social-icon-two">
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>

            {/* Footer Column */}
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h5 className="widget-title">Company</h5>
                <ul className="user-links">
                  <li><Link href="/">Home <i className="fa-solid fa-arrow-right"></i></Link></li>
                  <li><Link href="/about">About <i className="fa-solid fa-arrow-right"></i></Link></li>
                  <li><Link href="/services">Our Services <i className="fa-solid fa-arrow-right"></i></Link></li>
                  <li><Link href="/contact">Contact Us <i className="fa-solid fa-arrow-right"></i></Link></li>
                </ul>
              </div>
            </div>

            {/* Footer Column */}
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h5 className="widget-title">Services</h5>
                <ul className="user-links">
                  <li><Link href="/services/seo-content-marketing">SEO & Content <i className="fa-solid fa-arrow-right"></i></Link></li>
                  <li><Link href="/services/paid-advertising">Paid Advertising <i className="fa-solid fa-arrow-right"></i></Link></li>
                  <li><Link href="/services/social-media-marketing">Social Media <i className="fa-solid fa-arrow-right"></i></Link></li>
                  <li><Link href="/services/email-funnel-marketing">Email Funnels <i className="fa-solid fa-arrow-right"></i></Link></li>
                </ul>
              </div>
            </div>

            {/* Footer Column */}
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget contact-widget">
                <h5 className="widget-title">Contact Us</h5>
                <div className="widget-content">
                  <div className="address">
                    <p>Global Headquarters</p>
                    <a href="#">ZAPSHERE HQ <span className="d-block"> Sydney - Australia</span></a>
                  </div>
                  <div className="address">
                    <p>Send E-Mail</p>
                    <a href="mailto:hello@zapshere.com">hello@zapshere.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">© ZAPSHERE 2026. All rights reserved.</div>
            <div className="footer-links-wrapper">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/sitemap">Sitemap</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
