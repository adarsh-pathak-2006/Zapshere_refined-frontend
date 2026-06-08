"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase, BlogPost } from '@/lib/supabase';

export default function HomeBlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      // DEBUG: Log the exact credentials being used in the browser
      console.log("BROWSER SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
      console.log("BROWSER SUPABASE KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
      
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug, excerpt, thumbnail_url, created_at')
          .order('created_at', { ascending: false });

        if (error) {
          const errorText = error.message || (typeof error === 'object' ? JSON.stringify(error) : 'Unknown error');
          console.error("Error fetching blogs:", errorText);
        } else {
          // Only show the 3 most recent blogs on the homepage
          setBlogs(data ? data.slice(0, 3) : []);
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="news-section section-padding pb-90" style={{ background: '#0a0a0a' }}>
      <div className="auto-container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="sec-title text-center">
              <span className="sub-title"><img src="/images/sub-title-shape.svg" alt="" />Latest Blog</span>
              <h2 className="hero_title" style={{ color: '#fff' }}>Read Our Recent Blog Posts</h2>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center" style={{ color: '#fff', fontSize: '20px', padding: '50px 0' }}>
            <i className="fa-solid fa-circle-notch fa-spin" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Loading Insights...
          </div>
        ) : (
          <div className="row">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="news-block col-lg-4 col-md-6 col-sm-12 mb-5 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="premium-hover-card" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', width: '100%', paddingBottom: '60%', overflow: 'hidden' }}>
                    <img 
                      src={blog.thumbnail_url} 
                      alt={blog.title} 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      className="blog-thumbnail"
                    />
                    <style dangerouslySetInnerHTML={{__html: `
                      .premium-hover-card:hover .blog-thumbnail {
                        transform: scale(1.05);
                      }
                    `}} />
                  </div>
                  <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: '#fcdb66', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px', display: 'block' }}>
                      {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '22px', lineHeight: 1.4 }}>
                      <Link href={`/blog/${blog.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {blog.title}
                      </Link>
                    </h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '25px', flexGrow: 1 }}>
                      {blog.excerpt}
                    </p>
                    <Link href={`/blog/${blog.slug}`} style={{ color: '#fcdb66', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'gap 0.3s' }} className="blog-read-more">
                      Read Article <i className="fa-solid fa-arrow-right" style={{ fontSize: '14px' }}></i>
                    </Link>
                    <style dangerouslySetInnerHTML={{__html: `
                      .blog-read-more:hover {
                        gap: 12px !important;
                      }
                    `}} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="news-sp1 bounce-animate4"><img src="/images/news-sp.png" alt="" /></div>
      <div className="news-sp2 bounce-animate3"><img src="/images/animat-shape.png" alt="" /></div>
    </section>
  );
}
