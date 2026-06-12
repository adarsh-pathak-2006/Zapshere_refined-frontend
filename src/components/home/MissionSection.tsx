import React from 'react';
import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="auto-container">
          <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInUp">
              <div className="mission-icon-box">
              <div className="icon-box">
                  <Image src="/images/mission-icon.svg" alt="" width={50} height={50} />
                  <h4 className="icon-bx-title hero_title tv_hero_title hero_title_1">Company Mission</h4>
              </div>
              <p className="mission-description">ZAPSHERE adopts a client-first approach, taking the time to understand your unique business goals and challenges. By harnessing AI analytics and the latest digital tools, we build marketing and automation systems that deliver compounding, measurable growth — month after month.</p>
              </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <div className="mission-list-item">
              <div className="misssion-list">
                  <ul>
                  <li><Image src="/images/right-icon.svg" alt="" width={20} height={20} style={{ marginRight: '10px' }} />AI-Optimised Paid Ads</li>
                  <li><Image src="/images/right-icon.svg" alt="" width={20} height={20} style={{ marginRight: '10px' }} />SEO, GEO & AEO Authority</li>
                  </ul>
              </div>
              <div className="misssion-list-two">
                  <ul>
                  <li><Image src="/images/right-icon.svg" alt="" width={20} height={20} style={{ marginRight: '10px' }} />Marketing Automation</li>
                  <li><Image src="/images/right-icon.svg" alt="" width={20} height={20} style={{ marginRight: '10px' }} />Revenue Attribution</li>
                  </ul>
              </div>
              </div>
          </div>
          </div>
      </div>
    </section>
  )
}
