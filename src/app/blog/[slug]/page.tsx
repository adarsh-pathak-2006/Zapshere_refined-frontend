"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { supabase, BlogPost } from '@/lib/supabase';

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error || !data) {
          console.error("Error fetching blog:", error);
          setError(true);
        } else {
          setBlog(data);
        }
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <section className="py-24 md:py-32 lg:py-[200px]" style={{ background: '#0a0a0a', minHeight: '100vh' }}>
        <div className="auto-container text-center">
          <i className="fa-solid fa-circle-notch fa-spin" style={{ color: '#fcdb66', fontSize: '40px' }}></i>
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className="py-24 md:py-32 lg:py-[200px]" style={{ background: '#0a0a0a', minHeight: '100vh' }}>
        <div className="auto-container text-center">
          <h1 style={{ color: '#fff', marginBottom: '20px' }}>Article Not Found</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>The blog post you are looking for does not exist or has been removed.</p>
          <Link href="/blog" className="theme-btn theme-btn-main theme-bg theme-color-white">
            Return to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Blog Hero Section */}
      <section className="py-24 md:py-32 lg:py-[150px]" style={{ 
        background: '#0a0a0a',
      }}>

        <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', display: 'block', marginBottom: '20px', animation: 'fadeInDown 1s ease' }}>
                {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.2, marginBottom: '30px', fontWeight: 700, animation: 'fadeInUp 1s ease 0.2s both' }}>
                {blog.title}
              </h1>
              <ul className="page-breadcrumb justify-content-center" style={{ margin: 0, animation: 'fadeInUp 1s ease 0.4s both' }}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li>Article</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        width: `${scrollProgress}%`,
        background: '#fcdb66',
        zIndex: 9999,
        transition: 'width 0.1s ease-out'
      }} />

      {/* Blog Content Section */}
      <section className="py-12 md:py-20 lg:py-[120px]" style={{ background: '#0a0a0a'}}>
        <div className="auto-container">
          <div className="row justify-content-center">
            
            {/* Sticky Share Sidebar (Desktop) */}
            <div className="col-lg-2 d-none d-lg-block">
              <div style={{ position: 'sticky', top: '120px', paddingTop: '20px' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '20px' }}>Share</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <a href="#" className="share-icon-btn" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="share-icon-btn" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="share-icon-btn" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); }} className="share-icon-btn" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                    <i className="fa-solid fa-link"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="blog-banner-image" style={{ maxWidth: '80%', margin: '0 auto 50px auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                <img src={blog.banner_url} alt={blog.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '500px', display: 'block' }} />
              </div>
              <div 
                className="blog-content-wrapper" 
                style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontSize: '18px', 
                  lineHeight: 1.8 
                }}
                dangerouslySetInnerHTML={{ __html: blog.content || '' }}
              />

              {/* Add global styles for the rich text content inside blog-content-wrapper */}
              <style dangerouslySetInnerHTML={{__html: `
                .blog-content-wrapper h2 {
                  color: #fff;
                  font-size: 32px;
                  margin-top: 50px;
                  margin-bottom: 25px;
                  font-weight: 700;
                  position: relative;
                  padding-bottom: 10px;
                }
                .blog-content-wrapper h2::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 40px;
                  height: 3px;
                  background: #fcdb66;
                  border-radius: 2px;
                }
                .blog-content-wrapper h3 {
                  color: #fff;
                  font-size: 24px;
                  margin-top: 40px;
                  margin-bottom: 20px;
                  font-weight: 600;
                }
                .blog-content-wrapper p {
                  margin-bottom: 25px;
                }
                .blog-content-wrapper ul, .blog-content-wrapper ol {
                  margin-bottom: 30px;
                  padding-left: 20px;
                  background: rgba(255,255,255,0.02);
                  padding: 25px 25px 25px 45px;
                  border-radius: 12px;
                  border: 1px solid rgba(255,255,255,0.05);
                }
                .blog-content-wrapper li {
                  margin-bottom: 12px;
                }
                .blog-content-wrapper li::marker {
                  color: #fcdb66;
                }
                .blog-content-wrapper strong {
                  color: #fff;
                }
                .blog-content-wrapper a {
                  color: #fcdb66;
                  text-decoration: none;
                  border-bottom: 1px dashed rgba(252, 219, 102, 0.5);
                  transition: all 0.3s ease;
                }
                .blog-content-wrapper a:hover {
                  color: #fff;
                  border-bottom: 1px solid #fff;
                }
                .share-icon-btn:hover {
                  background: #fcdb66 !important;
                  color: #000 !important;
                  transform: translateY(-3px);
                }
              `}} />

              {/* Share/Back Footer (Mobile) */}
              <div className="d-block d-lg-none" style={{ marginTop: '50px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/blog" style={{ color: '#fcdb66', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-arrow-left"></i> Back to Articles
                </Link>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 d-none d-lg-block">
              {/* Empty column for balance */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
