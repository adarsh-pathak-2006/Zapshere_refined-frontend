"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [passcode, setPasscode] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: ''
  });
  
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'zapshere2026') {
      setIsAuthorized(true);
      setMessage({ type: '', text: '' });
    } else {
      setMessage({ type: 'error', text: 'Incorrect passcode.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Auto-generate slug from title if slug is empty or user is typing title
    if (e.target.name === 'title' && !formData.slug) {
      setFormData(prev => ({
        ...prev,
        slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'thumbnail' | 'banner') => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'thumbnail') setThumbnailFile(e.target.files[0]);
      if (type === 'banner') setBannerFile(e.target.files[0]);
    }
  };

  const uploadImage = async (file: File, pathFolder: string) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${pathFolder}/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      let thumbnailUrl = '';
      let bannerUrl = '';

      // 1. Upload Images
      console.log('Uploading thumbnail...');
      if (thumbnailFile) {
        thumbnailUrl = await uploadImage(thumbnailFile, 'thumbnails');
      }
      console.log('Uploading banner...');
      if (bannerFile) {
        bannerUrl = await uploadImage(bannerFile, 'banners');
      }

      console.log('Inserting into database...');
      // 2. Insert into Database
      const { error } = await supabase.from('blogs').insert([{
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        thumbnail_url: thumbnailUrl,
        banner_url: bannerUrl
      }]);

      if (error) throw error;

      setMessage({ type: 'success', text: 'Blog post published successfully!' });
      setFormData({ title: '', slug: '', excerpt: '', content: '' });
      setThumbnailFile(null);
      setBannerFile(null);
      // Reset file inputs visually
      const fileInputs = document.querySelectorAll<HTMLInputElement>('input[type="file"]');
      fileInputs.forEach(input => input.value = '');

    } catch (err: any) {
      console.error("Error creating blog:", err);
      // If error is an object without a message, stringify it
      const errorText = err.message || (typeof err === 'object' ? JSON.stringify(err) : 'Something went wrong.');
      setMessage({ type: 'error', text: errorText });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthorized) {
    return (
      <section className="py-24 md:py-32 lg:py-[200px]" style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '50px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px', fontSize: '24px' }}>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Enter Passcode" 
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              style={{ width: '100%', padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', marginBottom: '20px' }}
            />
            <button type="submit" className="theme-btn theme-bg theme-color-white" style={{ width: '100%', padding: '15px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Unlock Dashboard
            </button>
            {message.type === 'error' && <p style={{ color: '#ff4d4f', marginTop: '15px' }}>{message.text}</p>}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 lg:py-[150px]" style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="mb-5 border-bottom pb-4" style={{ borderColor: 'rgba(255,255,255,0.05)!important' }}>
                <h1 style={{ color: '#fff', fontSize: '32px', marginBottom: '10px' }}>Publish New Blog Post</h1>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Upload your images directly to Supabase Storage and publish your article.</p>
              </div>

              {message.text && (
                <div style={{ padding: '15px', borderRadius: '8px', marginBottom: '25px', background: message.type === 'success' ? 'rgba(40,167,69,0.1)' : 'rgba(220,53,69,0.1)', color: message.type === 'success' ? '#28a745' : '#dc3545', border: `1px solid ${message.type === 'success' ? 'rgba(40,167,69,0.2)' : 'rgba(220,53,69,0.2)'}` }}>
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div className="row">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label style={{ color: '#fff', marginBottom: '8px', display: 'block', fontSize: '14px' }}>Blog Title *</label>
                    <input required name="title" value={formData.title} onChange={handleChange} type="text" style={{ width: '100%', padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} placeholder="E.g., The Future of AI" />
                  </div>
                  <div className="col-md-6">
                    <label style={{ color: '#fff', marginBottom: '8px', display: 'block', fontSize: '14px' }}>URL Slug *</label>
                    <input required name="slug" value={formData.slug} onChange={handleChange} type="text" style={{ width: '100%', padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} placeholder="the-future-of-ai" />
                  </div>
                </div>

                <div>
                  <label style={{ color: '#fff', marginBottom: '8px', display: 'block', fontSize: '14px' }}>Short Excerpt *</label>
                  <textarea required name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} style={{ width: '100%', padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} placeholder="A brief summary for the blog card..." />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label style={{ color: '#fff', marginBottom: '8px', display: 'block', fontSize: '14px' }}>Thumbnail Image (Card) *</label>
                    <input required type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'thumbnail')} style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  </div>
                  <div className="col-md-6">
                    <label style={{ color: '#fff', marginBottom: '8px', display: 'block', fontSize: '14px' }}>Banner Image (Header) *</label>
                    <input required type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'banner')} style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  </div>
                </div>

                <div>
                  <label style={{ color: '#fff', marginBottom: '8px', display: 'block', fontSize: '14px' }}>Main Content (HTML Allowed) *</label>
                  <textarea required name="content" value={formData.content} onChange={handleChange} rows={12} style={{ width: '100%', padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontFamily: 'monospace' }} placeholder="<h2>Section 1</h2><p>Your content here...</p>" />
                </div>

                <button disabled={isSubmitting} type="submit" className="theme-btn theme-bg theme-color-white mt-3" style={{ padding: '18px', border: 'none', borderRadius: '8px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '16px', fontWeight: 600, opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? 'Uploading & Publishing...' : 'Publish Blog Post'}
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
