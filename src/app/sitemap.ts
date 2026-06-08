import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.zapshere.com';
  
  // Define all static and localized hub routes based on the global sitemap
  const staticPaths = [
    '',
    '/services',
    '/services/seo-content-marketing',
    '/services/paid-advertising',
    '/services/social-media-marketing',
    '/services/email-funnel-marketing',
    '/services/analytics-reporting',
    '/products',
    '/industries',
    '/au',
    '/au/seo-services',
    '/au/paid-advertising',
    '/au/social-media-marketing',
    '/au/email-funnel-marketing',
    '/au/sydney',
    '/au/melbourne',
    '/au/brisbane',
    '/au/perth',
    '/au/adelaide',
    '/us',
    '/us/seo-services',
    '/us/paid-advertising',
    '/us/social-media-marketing',
    '/us/new-york',
    '/us/los-angeles',
    '/us/chicago',
    '/us/houston',
    '/us/miami',
    '/de',
    '/de/seo-dienstleistungen',
    '/de/google-ads',
    '/de/social-media',
    '/de/berlin',
    '/de/muenchen',
    '/de/hamburg',
    '/de/frankfurt',
    '/blog',
    '/case-studies',
    '/about',
    '/contact',
    '/privacy-policy'
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('slug, created_at');

    if (!error && data) {
      blogRoutes = data.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    } else if (error) {
      console.error("Error fetching blogs for sitemap:", error);
    }
  } catch (err) {
    console.error("Exception fetching blogs for sitemap:", err);
  }

  return [...staticRoutes, ...blogRoutes];
}
