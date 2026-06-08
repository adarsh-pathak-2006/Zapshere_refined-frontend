"use client";
import React, { useState } from 'react';
import HomeBlogSection from '@/components/HomeBlogSection';
import { supabase } from '@/lib/supabase';

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


<section id="home" className="banner-section d-flex align-items-lg-center" style={{}}>
    <div className="container-fluid">
        <div className="row hero_upper d-flex align-items-lg-center pt-[160px] lg:pt-0">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="content-box">
            <h1 className="title hero_title tv_hero_title hero_title_1">Global AI Automation &amp; Growth Marketing Agency</h1>
            <p className="hero-subheadline wow fadeInUp" data-wow-delay=".2s" style={{}}>From Sydney to San Francisco to Stuttgart — Zapshere combines intelligent automation with proven marketing strategies to help businesses scale their digital presence, generate qualified leads, and drive sustainable revenue growth.</p>
            <a className="theme-btn-main wow fadeInUp" data-wow-delay=".3s" href="/contact" style={{}}>
                <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                <span className="theme-btn theme-bg theme-color-white">Get Your Free Marketing Audit</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
            </a>
            <div className="trust-indicators wow fadeInUp" data-wow-delay=".4s" style={{ marginTop: '20px', display: 'flex', gap: '15px', alignItems: 'center', opacity: 0.8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}><i className="fa-brands fa-google" style={{ color: '#fcdb66', marginRight: '5px' }}></i> Google Partner</span>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>|</span>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}><i className="fa-brands fa-meta" style={{ color: '#fcdb66', marginRight: '5px' }}></i> Meta Business Partner</span>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>|</span>
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}><i className="fa-solid fa-users" style={{ color: '#fcdb66', marginRight: '5px' }}></i> 500+ Clients</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="banner_icon-bx2 d-none d-lg-block wow fadeInUp" data-wow-delay=".3s" style={{}}>
        <div className="info-circle">
        <div className="inner">
            <div className="text-circle-box rotate">
            <svg width="134" height="133" viewBox="0 0 134 133" fill="none" xmlns="http://www.w3.org/2000/svg">                <foreignObject x="-49.5435" y="-49.3491" width="232.716" height="232.011"><div></div></foreignObject><path data-figma-bg-blur-radius="50" d="M14.6645 54.0942L2.8328 49.5761L4.31255 45.701C4.76942 44.5046 5.41118 43.5547 6.23782 42.8514C7.06447 42.148 8.01547 41.7226 9.09081 41.5752C10.1556 41.4237 11.2861 41.5764 12.4825 42.0333C13.6684 42.4861 14.613 43.1258 15.3163 43.9525C16.0197 44.7791 16.4504 45.7321 16.6084 46.8115C16.7558 47.8869 16.6011 49.0227 16.1442 50.2191L14.6645 54.0942ZM13.8295 51.992L14.721 49.6574C15.0566 48.7787 15.1603 47.9509 15.0324 47.1741C14.9084 46.3868 14.5797 45.6911 14.046 45.087C13.5019 44.4788 12.7745 44.0009 11.864 43.6532C10.9428 43.3014 10.08 43.1782 9.27555 43.2835C8.4751 43.3781 7.77158 43.6797 7.16497 44.1881C6.55182 44.6818 6.07948 45.3628 5.74795 46.231L4.85646 48.5655L13.8295 51.992ZM20.759 39.0395L10.2752 31.9337L11.2099 30.5546L21.6937 37.6604L20.759 39.0395ZM30.0964 28.6902C29.4324 29.2908 28.7124 29.7281 27.9363 30.0021C27.1527 30.2676 26.3573 30.3681 25.5501 30.3036C24.7429 30.239 23.9556 30.0189 23.1881 29.6434C22.429 29.2603 21.734 28.7199 21.103 28.0222C20.4644 27.3161 19.9925 26.5663 19.6874 25.7726C19.3822 24.979 19.2378 24.1774 19.2544 23.3678C19.271 22.5582 19.4544 21.7811 19.8047 21.0364C20.1474 20.2833 20.6508 19.6064 21.3148 19.0059C21.9621 18.4205 22.6447 18.0094 23.3627 17.7727C24.0891 17.5283 24.7922 17.4272 25.4721 17.4693C26.1605 17.5039 26.7665 17.6587 27.2903 17.9337L26.6711 19.4793C25.9585 19.1306 25.2265 19.0056 24.4753 19.1043C23.7242 19.203 23.0166 19.5527 22.3525 20.1532C21.6969 20.7462 21.2533 21.43 21.0219 22.2048C20.7988 22.9719 20.7953 23.7621 21.0112 24.5753C21.2272 25.3886 21.6696 26.165 22.3386 26.9047C23 27.636 23.7245 28.1498 24.512 28.4461C25.3079 28.7348 26.0987 28.8065 26.8843 28.6614C27.6783 28.5087 28.4031 28.1359 29.0588 27.5429C29.6303 27.0259 30.037 26.4365 30.2789 25.7747C30.5207 25.1128 30.5823 24.4459 30.4636 23.7739C30.3448 23.102 30.0308 22.4844 29.5215 21.9213L28.9969 21.3413L30.0432 21.3577L26.412 24.6418L25.4428 23.5701L29.7548 19.6702L30.5074 20.5024C31.1004 21.158 31.5228 21.8532 31.7748 22.588C32.0268 23.3228 32.1263 24.058 32.0733 24.7935C32.0128 25.5207 31.8131 26.2208 31.4744 26.8938C31.1358 27.5669 30.6764 28.1657 30.0964 28.6902ZM38.8369 20.9597L32.8018 9.82512L34.2665 9.03124L40.3016 20.1658L38.8369 20.9597ZM48.2646 16.61L44.8566 6.00934L41.5874 7.06035L41.1191 5.60377L49.2112 3.00228L49.6795 4.45886L46.4588 5.49425L49.8668 16.0949L48.2646 16.61ZM56.1905 14.1101L59.921 1.18385L61.8891 1.05937L67.2185 13.4126L65.4371 13.5253L64.2143 10.6217L58.8191 10.9629L57.972 13.9974L56.1905 14.1101ZM59.2485 9.4027L63.5918 9.12797L60.7437 2.34123L61.2187 2.31118L59.2485 9.4027ZM72.4702 13.4366L74.8813 1.00325L76.5168 1.32042L74.397 12.2518L79.8543 13.3101L79.5631 14.8121L72.4702 13.4366ZM91.0343 18.835L98.2208 8.40636L99.4806 9.27452L99.5565 17.5231L98.9126 17.0794L106.62 14.1941L107.88 15.0623L100.693 25.4909L99.3072 24.536L105.298 15.8431L105.681 16.3347L98.0418 19.122L97.9298 19.0448L97.8564 10.9424L98.3964 11.0875L92.4061 19.7803L91.0343 18.835ZM104.968 28.5065L117.767 24.3598L118.972 25.9207L111.721 37.2532L110.63 35.8403L112.351 33.2014L109.048 28.9222L106.059 29.9194L104.968 28.5065ZM110.581 28.4044L113.241 31.8493L117.269 25.6895L117.56 26.0662L110.581 28.4044ZM114.607 41.6308L126.383 36.9698L128.029 41.127C128.337 41.9068 128.461 42.6502 128.399 43.3571C128.338 44.064 128.098 44.6893 127.679 45.2328C127.265 45.7869 126.689 46.21 125.951 46.5019C125.118 46.8314 124.329 46.9001 123.583 46.708C122.836 46.5159 122.195 46.1116 121.658 45.4951L117.967 50.1191L117.254 48.3171L121.221 43.4195L121.027 44.6846L119.725 41.3968L115.22 43.1799L114.607 41.6308ZM121.148 40.8337L122.199 43.4893C122.382 43.953 122.633 44.3232 122.949 44.6001C123.266 44.8769 123.631 45.0435 124.043 45.0997C124.459 45.1664 124.889 45.1122 125.332 44.937C125.785 44.7577 126.135 44.5033 126.382 44.1737C126.645 43.8506 126.796 43.4797 126.838 43.061C126.879 42.6424 126.808 42.2012 126.625 41.7375L125.574 39.082L121.148 40.8337ZM119.638 55.4036L132.245 54.186L132.405 55.8443L125.315 56.5291L125.445 56.1066L132.947 61.4621L133.148 63.5434L126.822 59.0479L128.014 59.0181L120.567 65.0149L120.375 63.0351L125.98 58.4631L123.521 56.7023L119.798 57.0619L119.638 55.4036ZM120.692 70.2641L133.161 72.4836L131.716 80.601L130.21 80.3329L131.363 73.8557L127.413 73.1526L126.32 79.2951L124.813 79.0269L125.907 72.8845L121.906 72.1725L120.754 78.6497L119.247 78.3815L120.692 70.2641ZM116.98 85.9596L127.109 90.5859L128.535 87.4623L129.927 88.0979L126.396 95.8296L125.004 95.1939L126.409 92.1167L116.281 87.4905L116.98 85.9596ZM112.428 95.2645L122.701 102.672L121.726 104.023L111.453 96.6159L112.428 95.2645ZM107.387 101.712L115.728 111.243L114.678 112.161L102.463 109.251L102.892 108.786L109.676 116.538L108.41 117.647L100.069 108.116L101.118 107.198L113.353 110.181L112.962 110.613L106.133 102.809L107.387 101.712ZM89.4876 114.15C90.3102 113.796 91.1329 113.615 91.9558 113.606C92.7832 113.608 93.5684 113.77 94.3114 114.093C95.0543 114.415 95.7283 114.877 96.3332 115.481C96.9277 116.089 97.4107 116.825 97.7823 117.689C98.1583 118.564 98.3624 119.426 98.3947 120.275C98.427 121.125 98.3044 121.93 98.027 122.691C97.7496 123.452 97.3248 124.128 96.7526 124.719C96.1848 125.321 95.4897 125.799 94.6672 126.153C93.8655 126.497 93.0866 126.666 92.3306 126.658C91.5642 126.654 90.8661 126.523 90.2364 126.263C89.5962 126.008 89.0727 125.665 88.6659 125.236L89.7515 123.973C90.3132 124.534 90.9654 124.888 91.7082 125.038C92.4509 125.187 93.2336 125.085 94.0561 124.732C94.8682 124.382 95.509 123.879 95.9785 123.22C96.4375 122.566 96.6963 121.82 96.7549 120.98C96.8134 120.141 96.6457 119.263 96.2517 118.347C95.8623 117.441 95.3428 116.721 94.6933 116.186C94.0335 115.655 93.3083 115.332 92.518 115.215C91.7173 115.103 90.9108 115.222 90.0987 115.571C89.3907 115.875 88.8153 116.301 88.3725 116.85C87.9297 117.398 87.6558 118.009 87.551 118.683C87.4461 119.357 87.5437 120.043 87.8436 120.741L88.1525 121.459L87.1677 121.106L91.6655 119.172L92.2363 120.499L86.8951 122.796L86.4519 121.765C86.1027 120.953 85.9277 120.158 85.9267 119.382C85.9258 118.605 86.0693 117.877 86.3572 117.198C86.6496 116.529 87.0648 115.931 87.6029 115.404C88.141 114.877 88.7692 114.458 89.4876 114.15ZM73.3561 119.593L68.652 132.197L66.6801 132.172L62.307 119.448L64.0919 119.472L65.0899 122.46L70.4954 122.531L71.5712 119.569L73.3561 119.593ZM69.9485 124.054L65.5969 123.997L67.9198 130.981L67.4438 130.974L69.9485 124.054ZM52.0927 116.989C52.9451 117.263 53.6842 117.667 54.3101 118.202C54.9324 118.747 55.4178 119.385 55.7662 120.116C56.1146 120.847 56.3186 121.639 56.378 122.491C56.4266 123.34 56.307 124.212 56.0192 125.108C55.728 126.014 55.3153 126.798 54.7813 127.46C54.2473 128.122 53.6257 128.648 52.9167 129.039C52.2077 129.43 51.4432 129.661 50.6232 129.731C49.7997 129.811 48.9618 129.715 48.1094 129.441C47.2786 129.174 46.5809 128.789 46.0163 128.286C45.441 127.78 45.0012 127.222 44.6971 126.612C44.3823 125.999 44.2127 125.397 44.1883 124.806L45.8363 124.568C45.8914 125.359 46.1498 126.055 46.6115 126.656C47.0732 127.257 47.7303 127.694 48.5827 127.968C49.4243 128.238 50.2383 128.28 51.0248 128.092C51.8005 127.901 52.4862 127.508 53.0819 126.914C53.6776 126.32 54.128 125.548 54.4331 124.598C54.7348 123.659 54.8166 122.775 54.6786 121.945C54.5297 121.112 54.1958 120.391 53.6767 119.784C53.1468 119.173 52.461 118.733 51.6194 118.462C50.8857 118.226 50.1718 118.17 49.4778 118.292C48.7838 118.414 48.1758 118.695 47.6537 119.134C47.1316 119.573 46.7544 120.155 46.5221 120.878L46.2828 121.622L45.7729 120.708L50.4342 122.206L49.9921 123.582L44.4569 121.803L44.8001 120.735C45.0706 119.893 45.4607 119.179 45.9705 118.593C46.4802 118.007 47.0667 117.553 47.7298 117.23C48.3895 116.918 49.0955 116.74 49.8476 116.696C50.5998 116.652 51.3482 116.75 52.0927 116.989ZM41.0646 113.234L33.8877 123.669L27.0943 118.997L27.9613 117.736L33.382 121.464L35.6555 118.159L30.5149 114.623L31.3819 113.363L36.5225 116.898L38.8249 113.55L33.4042 109.822L34.2712 108.562L41.0646 113.234ZM29.7906 105.003L19.9887 113.023L19.1059 111.944L22.4189 99.832L22.8698 100.276L14.8966 106.8L13.8309 105.497L23.6329 97.4768L24.5156 98.5557L21.1285 110.684L20.7099 110.28L28.7356 103.713L29.7906 105.003ZM17.9368 86.7245C18.2657 87.5573 18.4221 88.385 18.4059 89.2078C18.375 90.0243 18.1896 90.8043 17.8497 91.5478C17.5056 92.2808 17.0208 92.9354 16.3954 93.5114C15.77 94.0875 15.0198 94.5483 14.1449 94.8939C13.2595 95.2436 12.3916 95.4219 11.5414 95.4288C10.6911 95.4356 9.88987 95.2891 9.13773 94.9891C8.38559 94.6891 7.72246 94.2443 7.14836 93.6546C6.56371 93.0691 6.10692 92.36 5.77799 91.5273C5.45739 90.7157 5.31239 89.9322 5.34301 89.1767C5.36946 88.4108 5.52188 87.717 5.80026 87.0952C6.07448 86.4629 6.43236 85.9499 6.87392 85.5561L8.08427 86.7231C7.539 87.2553 7.18058 87.8904 7.00904 88.6283C6.82695 89.3705 6.8962 90.1473 7.21681 90.959C7.54157 91.7812 8.02595 92.4367 8.66995 92.9257C9.30977 93.404 10.0483 93.685 10.8856 93.7686C11.7228 93.8522 12.6053 93.7108 13.5328 93.3444C14.4499 92.9822 15.1855 92.4844 15.7396 91.8512C16.2937 91.2181 16.6409 90.5082 16.7811 89.7217C16.9171 88.9247 16.8227 88.1151 16.498 87.2929C16.1774 86.4812 15.7023 85.8646 15.0727 85.4431C14.4326 85.0258 13.7317 84.8091 12.9699 84.7932L13.0561 83.1141C13.6475 83.0999 14.2594 83.2298 14.8917 83.504C15.5198 83.7677 16.1053 84.1701 16.648 84.7112C17.1866 85.2418 17.6162 85.9129 17.9368 86.7245ZM13.73 73.4146L7.97127 74.0793L1.6515 79.2239L1.43513 77.3494L6.73906 73.0408L6.81703 73.7163L0.672934 70.7462L0.456557 68.8717L7.77829 72.4074L13.5371 71.7427L13.73 73.4146Z" fill="black"></path>
                <defs>
                <clipPath id="bgblur_0_8970_14_clip_path" transform="translate(49.5435 49.3491)"><path d="M14.6645 54.0942L2.8328 49.5761L4.31255 45.701C4.76942 44.5046 5.41118 43.5547 6.23782 42.8514C7.06447 42.148 8.01547 41.7226 9.09081 41.5752C10.1556 41.4237 11.2861 41.5764 12.4825 42.0333C13.6684 42.4861 14.613 43.1258 15.3163 43.9525C16.0197 44.7791 16.4504 45.7321 16.6084 46.8115C16.7558 47.8869 16.6011 49.0227 16.1442 50.2191L14.6645 54.0942ZM13.8295 51.992L14.721 49.6574C15.0566 48.7787 15.1603 47.9509 15.0324 47.1741C14.9084 46.3868 14.5797 45.6911 14.046 45.087C13.5019 44.4788 12.7745 44.0009 11.864 43.6532C10.9428 43.3014 10.08 43.1782 9.27555 43.2835C8.4751 43.3781 7.77158 43.6797 7.16497 44.1881C6.55182 44.6818 6.07948 45.3628 5.74795 46.231L4.85646 48.5655L13.8295 51.992ZM20.759 39.0395L10.2752 31.9337L11.2099 30.5546L21.6937 37.6604L20.759 39.0395ZM30.0964 28.6902C29.4324 29.2908 28.7124 29.7281 27.9363 30.0021C27.1527 30.2676 26.3573 30.3681 25.5501 30.3036C24.7429 30.239 23.9556 30.0189 23.1881 29.6434C22.429 29.2603 21.734 28.7199 21.103 28.0222C20.4644 27.3161 19.9925 26.5663 19.6874 25.7726C19.3822 24.979 19.2378 24.1774 19.2544 23.3678C19.271 22.5582 19.4544 21.7811 19.8047 21.0364C20.1474 20.2833 20.6508 19.6064 21.3148 19.0059C21.9621 18.4205 22.6447 18.0094 23.3627 17.7727C24.0891 17.5283 24.7922 17.4272 25.4721 17.4693C26.1605 17.5039 26.7665 17.6587 27.2903 17.9337L26.6711 19.4793C25.9585 19.1306 25.2265 19.0056 24.4753 19.1043C23.7242 19.203 23.0166 19.5527 22.3525 20.1532C21.6969 20.7462 21.2533 21.43 21.0219 22.2048C20.7988 22.9719 20.7953 23.7621 21.0112 24.5753C21.2272 25.3886 21.6696 26.165 22.3386 26.9047C23 27.636 23.7245 28.1498 24.512 28.4461C25.3079 28.7348 26.0987 28.8065 26.8843 28.6614C27.6783 28.5087 28.4031 28.1359 29.0588 27.5429C29.6303 27.0259 30.037 26.4365 30.2789 25.7747C30.5207 25.1128 30.5823 24.4459 30.4636 23.7739C30.3448 23.102 30.0308 22.4844 29.5215 21.9213L28.9969 21.3413L30.0432 21.3577L26.412 24.6418L25.4428 23.5701L29.7548 19.6702L30.5074 20.5024C31.1004 21.158 31.5228 21.8532 31.7748 22.588C32.0268 23.3228 32.1263 24.058 32.0733 24.7935C32.0128 25.5207 31.8131 26.2208 31.4744 26.8938C31.1358 27.5669 30.6764 28.1657 30.0964 28.6902ZM38.8369 20.9597L32.8018 9.82512L34.2665 9.03124L40.3016 20.1658L38.8369 20.9597ZM48.2646 16.61L44.8566 6.00934L41.5874 7.06035L41.1191 5.60377L49.2112 3.00228L49.6795 4.45886L46.4588 5.49425L49.8668 16.0949L48.2646 16.61ZM56.1905 14.1101L59.921 1.18385L61.8891 1.05937L67.2185 13.4126L65.4371 13.5253L64.2143 10.6217L58.8191 10.9629L57.972 13.9974L56.1905 14.1101ZM59.2485 9.4027L63.5918 9.12797L60.7437 2.34123L61.2187 2.31118L59.2485 9.4027ZM72.4702 13.4366L74.8813 1.00325L76.5168 1.32042L74.397 12.2518L79.8543 13.3101L79.5631 14.8121L72.4702 13.4366ZM91.0343 18.835L98.2208 8.40636L99.4806 9.27452L99.5565 17.5231L98.9126 17.0794L106.62 14.1941L107.88 15.0623L100.693 25.4909L99.3072 24.536L105.298 15.8431L105.681 16.3347L98.0418 19.122L97.9298 19.0448L97.8564 10.9424L98.3964 11.0875L92.4061 19.7803L91.0343 18.835ZM104.968 28.5065L117.767 24.3598L118.972 25.9207L111.721 37.2532L110.63 35.8403L112.351 33.2014L109.048 28.9222L106.059 29.9194L104.968 28.5065ZM110.581 28.4044L113.241 31.8493L117.269 25.6895L117.56 26.0662L110.581 28.4044ZM114.607 41.6308L126.383 36.9698L128.029 41.127C128.337 41.9068 128.461 42.6502 128.399 43.3571C128.338 44.064 128.098 44.6893 127.679 45.2328C127.265 45.7869 126.689 46.21 125.951 46.5019C125.118 46.8314 124.329 46.9001 123.583 46.708C122.836 46.5159 122.195 46.1116 121.658 45.4951L117.967 50.1191L117.254 48.3171L121.221 43.4195L121.027 44.6846L119.725 41.3968L115.22 43.1799L114.607 41.6308ZM121.148 40.8337L122.199 43.4893C122.382 43.953 122.633 44.3232 122.949 44.6001C123.266 44.8769 123.631 45.0435 124.043 45.0997C124.459 45.1664 124.889 45.1122 125.332 44.937C125.785 44.7577 126.135 44.5033 126.382 44.1737C126.645 43.8506 126.796 43.4797 126.838 43.061C126.879 42.6424 126.808 42.2012 126.625 41.7375L125.574 39.082L121.148 40.8337ZM119.638 55.4036L132.245 54.186L132.405 55.8443L125.315 56.5291L125.445 56.1066L132.947 61.4621L133.148 63.5434L126.822 59.0479L128.014 59.0181L120.567 65.0149L120.375 63.0351L125.98 58.4631L123.521 56.7023L119.798 57.0619L119.638 55.4036ZM120.692 70.2641L133.161 72.4836L131.716 80.601L130.21 80.3329L131.363 73.8557L127.413 73.1526L126.32 79.2951L124.813 79.0269L125.907 72.8845L121.906 72.1725L120.754 78.6497L119.247 78.3815L120.692 70.2641ZM116.98 85.9596L127.109 90.5859L128.535 87.4623L129.927 88.0979L126.396 95.8296L125.004 95.1939L126.409 92.1167L116.281 87.4905L116.98 85.9596ZM112.428 95.2645L122.701 102.672L121.726 104.023L111.453 96.6159L112.428 95.2645ZM107.387 101.712L115.728 111.243L114.678 112.161L102.463 109.251L102.892 108.786L109.676 116.538L108.41 117.647L100.069 108.116L101.118 107.198L113.353 110.181L112.962 110.613L106.133 102.809L107.387 101.712ZM89.4876 114.15C90.3102 113.796 91.1329 113.615 91.9558 113.606C92.7832 113.608 93.5684 113.77 94.3114 114.093C95.0543 114.415 95.7283 114.877 96.3332 115.481C96.9277 116.089 97.4107 116.825 97.7823 117.689C98.1583 118.564 98.3624 119.426 98.3947 120.275C98.427 121.125 98.3044 121.93 98.027 122.691C97.7496 123.452 97.3248 124.128 96.7526 124.719C96.1848 125.321 95.4897 125.799 94.6672 126.153C93.8655 126.497 93.0866 126.666 92.3306 126.658C91.5642 126.654 90.8661 126.523 90.2364 126.263C89.5962 126.008 89.0727 125.665 88.6659 125.236L89.7515 123.973C90.3132 124.534 90.9654 124.888 91.7082 125.038C92.4509 125.187 93.2336 125.085 94.0561 124.732C94.8682 124.382 95.509 123.879 95.9785 123.22C96.4375 122.566 96.6963 121.82 96.7549 120.98C96.8134 120.141 96.6457 119.263 96.2517 118.347C95.8623 117.441 95.3428 116.721 94.6933 116.186C94.0335 115.655 93.3083 115.332 92.518 115.215C91.7173 115.103 90.9108 115.222 90.0987 115.571C89.3907 115.875 88.8153 116.301 88.3725 116.85C87.9297 117.398 87.6558 118.009 87.551 118.683C87.4461 119.357 87.5437 120.043 87.8436 120.741L88.1525 121.459L87.1677 121.106L91.6655 119.172L92.2363 120.499L86.8951 122.796L86.4519 121.765C86.1027 120.953 85.9277 120.158 85.9267 119.382C85.9258 118.605 86.0693 117.877 86.3572 117.198C86.6496 116.529 87.0648 115.931 87.6029 115.404C88.141 114.877 88.7692 114.458 89.4876 114.15ZM73.3561 119.593L68.652 132.197L66.6801 132.172L62.307 119.448L64.0919 119.472L65.0899 122.46L70.4954 122.531L71.5712 119.569L73.3561 119.593ZM69.9485 124.054L65.5969 123.997L67.9198 130.981L67.4438 130.974L69.9485 124.054ZM52.0927 116.989C52.9451 117.263 53.6842 117.667 54.3101 118.202C54.9324 118.747 55.4178 119.385 55.7662 120.116C56.1146 120.847 56.3186 121.639 56.378 122.491C56.4266 123.34 56.307 124.212 56.0192 125.108C55.728 126.014 55.3153 126.798 54.7813 127.46C54.2473 128.122 53.6257 128.648 52.9167 129.039C52.2077 129.43 51.4432 129.661 50.6232 129.731C49.7997 129.811 48.9618 129.715 48.1094 129.441C47.2786 129.174 46.5809 128.789 46.0163 128.286C45.441 127.78 45.0012 127.222 44.6971 126.612C44.3823 125.999 44.2127 125.397 44.1883 124.806L45.8363 124.568C45.8914 125.359 46.1498 126.055 46.6115 126.656C47.0732 127.257 47.7303 127.694 48.5827 127.968C49.4243 128.238 50.2383 128.28 51.0248 128.092C51.8005 127.901 52.4862 127.508 53.0819 126.914C53.6776 126.32 54.128 125.548 54.4331 124.598C54.7348 123.659 54.8166 122.775 54.6786 121.945C54.5297 121.112 54.1958 120.391 53.6767 119.784C53.1468 119.173 52.461 118.733 51.6194 118.462C50.8857 118.226 50.1718 118.17 49.4778 118.292C48.7838 118.414 48.1758 118.695 47.6537 119.134C47.1316 119.573 46.7544 120.155 46.5221 120.878L46.2828 121.622L45.7729 120.708L50.4342 122.206L49.9921 123.582L44.4569 121.803L44.8001 120.735C45.0706 119.893 45.4607 119.179 45.9705 118.593C46.4802 118.007 47.0667 117.553 47.7298 117.23C48.3895 116.918 49.0955 116.74 49.8476 116.696C50.5998 116.652 51.3482 116.75 52.0927 116.989ZM41.0646 113.234L33.8877 123.669L27.0943 118.997L27.9613 117.736L33.382 121.464L35.6555 118.159L30.5149 114.623L31.3819 113.363L36.5225 116.898L38.8249 113.55L33.4042 109.822L34.2712 108.562L41.0646 113.234ZM29.7906 105.003L19.9887 113.023L19.1059 111.944L22.4189 99.832L22.8698 100.276L14.8966 106.8L13.8309 105.497L23.6329 97.4768L24.5156 98.5557L21.1285 110.684L20.7099 110.28L28.7356 103.713L29.7906 105.003ZM17.9368 86.7245C18.2657 87.5573 18.4221 88.385 18.4059 89.2078C18.375 90.0243 18.1896 90.8043 17.8497 91.5478C17.5056 92.2808 17.0208 92.9354 16.3954 93.5114C15.77 94.0875 15.0198 94.5483 14.1449 94.8939C13.2595 95.2436 12.3916 95.4219 11.5414 95.4288C10.6911 95.4356 9.88987 95.2891 9.13773 94.9891C8.38559 94.6891 7.72246 94.2443 7.14836 93.6546C6.56371 93.0691 6.10692 92.36 5.77799 91.5273C5.45739 90.7157 5.31239 89.9322 5.34301 89.1767C5.36946 88.4108 5.52188 87.717 5.80026 87.0952C6.07448 86.4629 6.43236 85.9499 6.87392 85.5561L8.08427 86.7231C7.539 87.2553 7.18058 87.8904 7.00904 88.6283C6.82695 89.3705 6.8962 90.1473 7.21681 90.959C7.54157 91.7812 8.02595 92.4367 8.66995 92.9257C9.30977 93.404 10.0483 93.685 10.8856 93.7686C11.7228 93.8522 12.6053 93.7108 13.5328 93.3444C14.4499 92.9822 15.1855 92.4844 15.7396 91.8512C16.2937 91.2181 16.6409 90.5082 16.7811 89.7217C16.9171 88.9247 16.8227 88.1151 16.498 87.2929C16.1774 86.4812 15.7023 85.8646 15.0727 85.4431C14.4326 85.0258 13.7317 84.8091 12.9699 84.7932L13.0561 83.1141C13.6475 83.0999 14.2594 83.2298 14.8917 83.504C15.5198 83.7677 16.1053 84.1701 16.648 84.7112C17.1866 85.2418 17.6162 85.9129 17.9368 86.7245ZM13.73 73.4146L7.97127 74.0793L1.6515 79.2239L1.43513 77.3494L6.73906 73.0408L6.81703 73.7163L0.672934 70.7462L0.456557 68.8717L7.77829 72.4074L13.5371 71.7427L13.73 73.4146Z"></path>
                </clipPath></defs>
            </svg>
            </div>
            <i className="icon fa-regular fa-arrow-down-long"></i>
        </div>
        </div>
    </div>
    <div className="email-link"><a href="https://php.kodesolution.com/2026/zapshere-php/#" className="email-link">hello@zapshere.com</a></div>
    <div className="email-line"><img src="/images/line.png" alt="line shape" /></div>
    <div className="follow-us">
        <p className="follow-title">FOLLOW US -</p>
        <div className="social-links">
        <a href="https://php.kodesolution.com/2026/zapshere-php/#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="https://php.kodesolution.com/2026/zapshere-php/#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="https://php.kodesolution.com/2026/zapshere-php/#" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="https://php.kodesolution.com/2026/zapshere-php/#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
    <div className="hero-img bounce-animate4"><img src="/images/hero-img2.png" alt="" /></div>
</section><section id="about" className="about-section">
    <div className="large-container">
        <div className="row">
        {/*  Image Column  */}
        <div className="image-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
            <figure className="image-1 about-style-img-1"><img src="/images/about-1.jpg" alt="" className="wow img-custom-anim-left" style={{}} /></figure>
            </div>
        </div>
        <div className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms" style={{}}>
            <div className="inner-column">
            <div className="sec-title">
                <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Who We Are</span>
                <h2 className="hero_title" style={{ whiteSpace: 'pre-wrap' }}>Smarter Campaigns. Better ROI.</h2>
            </div>
            <div className="about-icon-box" style={{}}>
                <div className="about-count" style={{}}>
                  <span className="count-text" data-speed="3000" data-stop="500">500</span>
                  <span className="plus">+</span>
                  <h6 className="counter-title">Clients Worldwide</h6>
                </div>
                <div className="about-content" style={{}}>
                  <p style={{}}>Zapshere is a performance-first digital marketing agency that harnesses the power of artificial intelligence to deliver smarter campaigns, deeper insights, and stronger results. We partner with startups, SMBs, and enterprise brands across Australia, the United States, and Germany to build marketing ecosystems that grow.</p>
                  <p style={{}}>Our cross-functional team of SEO strategists, paid media specialists, creative technologists, and data scientists work as an extension of your business — accountable to outcomes, not just deliverables.</p>
                  <div className="about-callout" style={{}}>
                    <p style={{}}>💡 Zapshere is not just an agency — we're your growth intelligence layer, combining human creativity with machine-speed data analysis.</p>
                  </div>
                  <a className="theme-btn-main border-style-btn" href="/services">
                      <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
                      <span className="theme-btn theme-bg theme-color-white">Our Services</span>
                      <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
                  </a>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="bg-blur"></div>
    <div className="bg-blur2"></div>
    <div className="about-shape rotate"><img src="/images/icon-rt.png" alt="" /></div>
    <div className="about-shape2 bounce-animate4"><img src="/images/about-sp.png" alt="" /></div>
</section>
{/*  Start Mission Section  */}
<section className="mission-section">
    <div className="auto-container">
        <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInUp">
            <div className="mission-icon-box">
            <div className="icon-box">
                <img src="/images/mission-icon.svg" alt="" />
                <h4 className="icon-bx-title hero_title tv_hero_title hero_title_1">Our Growth Mission</h4>
            </div>
            <p className="mission-description">To empower ambitious businesses across Australia, the USA, and Germany with AI-driven marketing strategies that drive customer acquisition, brand dominance, and measurable revenue growth.</p>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
            <div className="mission-list-item">
            <div className="misssion-list">
                <ul>
                <li><img src="/images/right-icon.svg" alt="" />AI-Optimized Paid Ads</li>
                <li><img src="/images/right-icon.svg" alt="" />Search Engine Authority</li>
                </ul>
            </div>
            <div className="misssion-list-two">
                <ul>
                <li><img src="/images/right-icon.svg" alt="" />Marketing Automation</li>
                <li><img src="/images/right-icon.svg" alt="" />Revenue Attribution</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
{/*  End Mission Section  */}{/*  Services Section  */}
<section id="services" className="services-section" style={{}}>
    <div className="service-sp-right bounce-animate4">
        <img src="/images/service-sp.png" alt="img" />
    </div>
    <div className="auto-container">
        {/*  Section Header  */}
        <div className="sec-title text-center wow fadeInUp" style={{}}>
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Our Services</span>
            <h2 className="hero_title">Result-Driven Digital Marketing Services</h2>
            <p style={{}}>We build custom digital marketing engines that scale lead generation, maximize ad spend ROAS, and automate lead nurturing.</p>
        </div>

        {/*  Services Grid  */}
        <style dangerouslySetInnerHTML={{ __html: `
          .zs-services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          @media (max-width: 991.98px) {
            .zs-services-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 575.98px) {
            .zs-services-grid { grid-template-columns: 1fr; }
          }
          .zs-service-card {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 35px 30px;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          .zs-service-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 3px;
            background: linear-gradient(90deg, transparent, #fcdb66, transparent);
            opacity: 0;
            transition: opacity 0.35s ease;
          }
          .zs-service-card:hover {
            transform: translateY(-6px);
            background: rgba(255, 255, 255, 0.07);
            border-color: rgba(252, 219, 102, 0.25);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          }
          .zs-service-card:hover::before { opacity: 1; }
          .zs-service-card .zs-svc-icon {
            width: 60px; height: 60px;
            background: rgba(252, 219, 102, 0.1);
            border-radius: 14px;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 22px;
            transition: background 0.3s ease;
          }
          .zs-service-card:hover .zs-svc-icon {
            background: rgba(252, 219, 102, 0.18);
          }
          .zs-service-card .zs-svc-icon img { width: 30px; height: 30px; }
          .zs-service-card h4 {
            font-size: 20px; font-weight: 700; color: #fff;
            margin-bottom: 12px; font-family: 'Plus Jakarta Sans', sans-serif;
          }
          .zs-service-card h4 a { color: #fff; text-decoration: none; }
          .zs-service-card h4 a:hover { color: #fcdb66; }
          .zs-service-card p {
            color: rgba(255, 255, 255, 0.6); font-size: 15px;
            line-height: 1.7; margin-bottom: 20px;
          }
          .zs-service-card .zs-svc-link {
            color: #fcdb66; font-size: 14px; font-weight: 600;
            text-decoration: none; display: inline-flex;
            align-items: center; gap: 8px;
            transition: gap 0.3s ease;
            margin-top: auto;
          }
          .zs-service-card .zs-svc-link:hover { gap: 12px; }
        ` }} />

        <div className="zs-services-grid">
          {/*  Card 1  */}
          <div className="zs-service-card wow fadeInUp" data-wow-delay=".1s">
            <div className="zs-svc-icon"><img src="/images/service-icon1.png" alt="SEO" /></div>
            <h4><a href="/services/seo-content-marketing">SEO &amp; Content Marketing</a></h4>
            <p>Dominate organic search rankings with AI-enhanced keyword strategies, technical SEO audits, and conversion-focused content.</p>
            <a href="/services/seo-content-marketing" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          {/*  Card 2  */}
          <div className="zs-service-card wow fadeInUp" data-wow-delay=".2s">
            <div className="zs-svc-icon"><img src="/images/service-icon2.png" alt="Ads" /></div>
            <h4><a href="/services/paid-advertising">Paid Advertising</a></h4>
            <p>Google, Meta, LinkedIn, and TikTok ads managed by certified specialists with AI-optimised bidding and creative testing.</p>
            <a href="/services/paid-advertising" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          {/*  Card 3  */}
          <div className="zs-service-card wow fadeInUp" data-wow-delay=".3s">
            <div className="zs-svc-icon"><img src="/images/service-icon3.png" alt="Social" /></div>
            <h4><a href="/services/social-media-marketing">Social Media Marketing</a></h4>
            <p>Brand-building and community management across Instagram, LinkedIn, Facebook, TikTok, and emerging platforms.</p>
            <a href="/services/social-media-marketing" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          {/*  Card 4  */}
          <div className="zs-service-card wow fadeInUp" data-wow-delay=".1s">
            <div className="zs-svc-icon"><img src="/images/service-icon1.png" alt="Email" /></div>
            <h4><a href="/services/email-funnel-marketing">Email &amp; Funnel Marketing</a></h4>
            <p>Automated email sequences, lead nurturing funnels, and lifecycle marketing that converts subscribers into customers.</p>
            <a href="/services/email-funnel-marketing" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          {/*  Card 5  */}
          <div className="zs-service-card wow fadeInUp" data-wow-delay=".2s">
            <div className="zs-svc-icon"><img src="/images/service-icon2.png" alt="Analytics" /></div>
            <h4><a href="/services/analytics-reporting">Analytics &amp; Reporting</a></h4>
            <p>Custom dashboards, attribution modelling, and actionable monthly reports that connect marketing to revenue.</p>
            <a href="/services/analytics-reporting" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          {/*  Card 6  */}
          <div className="zs-service-card wow fadeInUp" data-wow-delay=".3s">
            <div className="zs-svc-icon"><img src="/images/service-icon3.png" alt="Automation" /></div>
            <h4><a href="/services">Marketing Automation</a></h4>
            <p>End-to-end marketing automation with AI tools, CRM integrations, and intelligent workflow design.</p>
            <a href="/services" className="zs-svc-link">Explore More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        {/*  CTA under grid  */}
        <div className="text-center wow fadeInUp mt-5" data-wow-delay=".4s" style={{ marginTop: '50px' }}>
          <a className="theme-btn-main border-style-btn" href="/contact">
              <span className="theme-btn-arrow-left theme-bg theme-color-white"><i className="fa-solid fa-arrow-left"></i></span>
              <span className="theme-btn theme-bg theme-color-white">Book Strategy Call</span>
              <span className="theme-btn-arrow-right theme-bg theme-color-white"><i className="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
    </div>
    <div className="service-bg-blur"></div>
</section>
{/*  End Services Section  */}{/*  Why Choose Us Section  */}
<section id="why-choose-us" className="why-choose-us-section-1 section-padding theme-color1-bg bg-cover" style={{ backgroundImage: `url('/images/main-home/choose-us-shape.jpg')` }}>
    <div className="wcu-sp-right">
        <img src="/images/wcu-sp1.png" alt="img" />
    </div>
    <div className="auto-container">
        <div className="row g-4">
            <div className="col-xl-6">
                <div className="why-choose-us-content-1">
                 <div className="sec-title">
                     <span className="sub-title theme-color-black"><img src="/images/sub-title-shape2.svg" alt="" />Why Choose Us?</span>
                     <h2 className="theme-color-black hero_title" style={{}}>Empowering Brands Through AI &amp; Data-Driven Digital Solutions</h2>
                 </div>
                 <ul className="icon-box-list wow fadeInUp" data-wow-delay=".3s" style={{}}>
                     <li style={{}}>
                       <div className="icon" style={{}}><img src="/images/icon1.svg" alt="img" style={{}} /></div>
                       <div className="content">
                         <h4 className="title" style={{}}>AI-First Strategy</h4>
                         <p style={{}}>Every campaign is built on predictive data modelling and intelligent automation.</p>
                       </div>
                     </li>
                     <li style={{}}>
                       <div className="icon" style={{}}><img src="/images/icon2.svg" alt="img" style={{}} /></div>
                       <div className="content">
                         <h4 className="title" style={{}}>Full-Funnel Approach</h4>
                         <p style={{}}>From first click to closed customer, we own and optimize your entire marketing funnel.</p>
                       </div>
                     </li>
                     <li style={{}}>
                       <div className="icon" style={{}}><img src="/images/icon3.svg" alt="img" style={{}} /></div>
                       <div className="content">
                         <h4 className="title" style={{}}>Global &amp; Local Expertise</h4>
                         <p style={{}}>Deep knowledge of AU, US, and DE market dynamics and consumer behaviour.</p>
                       </div>
                     </li>
                     <li style={{}}>
                       <div className="icon" style={{}}><img src="/images/icon1.svg" alt="img" style={{}} /></div>
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
                        <img src="/images/choose-us-1.jpg" alt="img" />
                    </div>
                    <div className="counter-box-1">
                        <div className="check-icon">
                        <img src="/images/icon3.svg" alt="img" />
                        </div>
                        <div className="count-box">
                        <h4 className="title"><span className="count-text" data-speed="3000" data-stop="97">0</span>%</h4>
                        <p>Client Retention</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="choose-us-image2">
                        <img src="/images/choose-us-2.jpg" alt="img" />
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
                <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />How Zapshere Works</span>
                <h2 className="hero_title">A Data-Driven Framework for <br />Predictable Growth</h2>
            </div>
            </div>
        </div>
        </div>
        <div className="row process-border">
        <div className="col-lg-4 col-md-6 col-sm-12">
            {/*  process box  */}
            <div className="process-single-box wow fadeInUp" data-wow-delay=".3s" style={{}}>
            <div className="process-thumb"><img src="/images/process-img1.jpg" alt="" /></div>
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
            <div className="process-thumb"><img src="/images/process-img2.jpg" alt="" /></div>
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
            <div className="process-thumb"><img src="/images/process-img3.jpg" alt="" /></div>
            <div className="process-content">
                <h4 className="title">Scale &amp; Optimize</h4>
                <p>We continuously optimize budgets, scale winning strategies, and provide real-time attribution dashboards for full transparency.</p>
            </div>
            <h3 className="process-number">03</h3>
            </div>
        </div>
        </div>
    </div>
    <div className="process-shape bounce-animate3"><img src="/images/2.png" alt="" /></div>
    <div className="process-shape2 bounce-animate4"><img src="/images/about-sp.png" alt="" /></div>
</section><section id="works" className="work-section ks-project-area section-padding pb-90">
    <div className="auto-container">
        <div className="row">
        {/*  Content Column  */}
        <div className="col-lg-12 wow fadeInUp" style={{}}>
            <div className="inner-column">
            <div className="sec-title text-center">
                <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Our Work</span>
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
                <img src="/images/work-img1.png" alt="" />
                <div className="work-shape">
                <img src="/images/work-bx-shape.png" alt="" />
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
                <img src="/images/work-img2.png" alt="" />
                <div className="work-shape"><img src="/images/work-bx-shape.png" alt="" /></div>
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
                <img src="/images/work-img3.png" alt="" />
                <div className="work-shape"><img src="/images/work-bx-shape.png" alt="" /></div>
            </div>
            <h3 className="wokr-number">03</h3>
            </div></div>
        </div>
        </div>
    </div>
    <div className="work-shapes"><img src="/images/work-shape.png" alt="" /></div>
    <div className="work-bg-blur"></div>
</section>

{/*  Industries We Serve Section  */}
<section id="industries" className="industries-section section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
    <style dangerouslySetInnerHTML={{ __html: `
        .industry-card:hover { transform: translateY(-5px); border-color: rgba(252, 219, 102, 0.3) !important; background: rgba(255,255,255,0.05) !important; }
    `}} />
    <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Industries We Serve</span>
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
                  <div className="tesimonial-thumb"><img src="/images/autor-img.png" alt="author" /></div>
                  <div className="testi_content">
                    <figure className="testi_aroow"><img src="/images/testi-icon.png" alt="" /><span className="top-title">SEO &amp; Growth</span></figure>
                    <p>"Zapshere transformed our organic search presence. Within 6 months of launching our AI-guided SEO strategy, organic traffic in Australia grew by 180% and SQLs increased by 140%."</p>
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
                  <div className="tesimonial-thumb"><img src="/images/autor-img.png" alt="author" /></div>
                  <div className="testi_content">
                    <figure className="testi_aroow"><img src="/images/testi-icon.png" alt="" /><span className="top-title">Paid Ads ROI</span></figure>
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
                  <div className="tesimonial-thumb"><img src="/images/autor-img.png" alt="author" /></div>
                  <div className="testi_content">
                    <figure className="testi_aroow"><img src="/images/testi-icon.png" alt="" /><span className="top-title">Funnel Automation</span></figure>
                    <p>"Zapshere built our entire marketing automation funnel. Their integration of HubSpot with custom predictive lead scoring has halved our sales cycle length."</p>
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
          <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Testimonials</span>
          <h2 className="hero_title">Real Stories from Happy Customers</h2>
        </div>
        <div className="counter_box-testi">
          <div className="count-box"><span className="count-text" data-speed="3000" data-stop="8">0</span>.4x<img className="counter-icn" src="/images/autor-img.png" alt="" /></div>
          <div className="count-autor"></div>
          <h6 className="counter-title">Average ROAS</h6>
        </div>
      </div>
    </div>
  </div>
  <div className="testi-sp bounce-animate3"><img src="/images/animat-shape.png" alt="" /></div>
</section>
{/*  Team Section  */}
<section id="team" className="team-section">
    <div className="auto-container">
        <div className="sec-title">
        <div className="row g-4 our-team-intro align-items-center">
            <div className="col-lg-5 wow fadeInUp" style={{}}>
            <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Our Team</span>
            <h2 className="hero_title">Meet Professional <br />Team Members</h2>
            </div>
            <div className="team-culmn d-flex col-lg-7 wow fadeInUp" data-wow-delay="300ms" style={{}}>
            <p className="team-des">Zapshere is a collective of world-class digital marketing specialists, data scientists, and creative engineers dedicated to empowering your business growth.</p>
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
                    <img className="team-bg" src="/images/team-bg01.jpg" alt="" />
                </figure>
                <figure className="image2">
                    <img className="team-img" src="/images/team01.png" alt="" />
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
                    <img className="team-bg" src="/images/team-bg01.jpg" alt="" />
                </figure>
                <figure className="image2">
                    <img className="team-img" src="/images/team02.png" alt="" />
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
                    <img className="team-bg" src="/images/team-bg01.jpg" alt="" />
                </figure>
                <figure className="image2">
                    <img className="team-img" src="/images/team03.png" alt="" />
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
      <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Common Queries</span>
      <h2 className="hero_title">Frequently Asked Questions</h2>
    </div>
    
    <div className="row justify-content-center mt-5">
      <div className="col-lg-8 col-md-10 col-sm-12">
        <div className="accordion-container">
          
          {/*  FAQ Item 1  */}
          <details className="faq-item" style={{ marginBottom: '20px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <summary className="faq-header" style={{ cursor: 'pointer', outline: 'none' }}>
              <h4 style={{ display: 'inline-block', margin: 0 }}>What is Zapshere?</h4>
            </summary>
            <div className="faq-content" style={{ marginTop: '15px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>Zapshere is a full-service AI-powered digital marketing agency helping businesses in Australia, the United States, and Germany grow through SEO, paid advertising, social media, email marketing, and advanced analytics.</p>
            </div>
          </details>

          {/*  FAQ Item 2  */}
          <details className="faq-item" style={{ marginBottom: '20px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <summary className="faq-header" style={{ cursor: 'pointer', outline: 'none' }}>
              <h4 style={{ display: 'inline-block', margin: 0 }}>What industries does Zapshere serve?</h4>
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
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>Yes. Zapshere operates across Australia, the United States, and Germany with localised strategies tailored to each market's unique digital landscape, consumer behaviour, and platform preferences.</p>
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
            <span className="sub-title" style={{ color: '#fcdb66' }}><img src="/images/sub-titls.svg" alt="" />Contact Us</span>
            <h2 className="hero_title" style={{ color: '#fff' }}>Get Your Free Marketing Audit</h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Book a free 30-minute strategy call with our team — no obligation, just clarity. We'll review your current digital footprint and map out a growth roadmap tailored to your goals.</p>
          <div className="contact-info">
            <p style={{ color: '#fff', fontSize: '18px' }}>hello@zapshere.com</p>
            <h4 className="info-title" style={{ color: '#fcdb66' }}>+61 (02) 8007 4500</h4>
          </div>
          <div className="shape bounce-animate"><img src="/images/dance-sp.png" alt="" /></div>
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
          <div className="contact-sps bounce-animate3"><img src="/images/contact-sp.png" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-sp rotate"><img src="/images/sp-contact.png" alt="" /></div>
</section>
{/*  News Section  */}
<HomeBlogSection />
    </>
  );
}
