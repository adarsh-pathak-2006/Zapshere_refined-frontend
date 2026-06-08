"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase, BlogPost } from '@/lib/supabase';

export default function BlogIndex() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug, excerpt, thumbnail_url, created_at')
          .order('created_at', { ascending: false });

        if (error) {
          console.error("Error fetching blogs:", error);
        } else {
          setBlogs(data || []);
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
    <>
      {/* Page Title / Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-[180px] page-title" style={{ backgroundImage: "url('/images/main-home/banner-bg.png')"}}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <span style={{ color: '#fcdb66', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', display: 'block', marginBottom: '15px' }}>Insights & Strategies</span>
            <h1 className="title">Zapshere Blog</h1>
            <ul className="page-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 md:py-20 lg:py-[100px]" style={{ background: '#0a0a0a', minHeight: '60vh' }}>
        <div className="auto-container">
          {loading ? (
            <div className="text-center" style={{ color: '#fff', fontSize: '20px' }}>
              <i className="fa-solid fa-circle-notch fa-spin" style={{ color: '#fcdb66', marginRight: '10px' }}></i> Loading Insights...
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>
              No blogs found. Check back later!
            </div>
          ) : (
            <div className="row">
              {blogs.map((blog, index) => (
                <div key={blog.id} className="col-lg-4 col-md-6 col-sm-12 mb-5 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
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
      </section>
    </>
  );
}
