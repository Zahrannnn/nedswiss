import { MetadataRoute } from 'next';
import { locales } from '@/app/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nedswiss.com';
  
  // Define all static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blogs',
  ];

  // Define service sub-routes
  const serviceRoutes = [
    '/services/graphic-design',
    '/services/web-development',
    '/services/social-media',
    '/services/digital-marketing',
    '/services/illuminated-signs',
    '/services/seo-services',
  ];

  // Generate sitemap entries for all locales and routes
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add entries for each locale
  locales.forEach((locale) => {
    // Add main routes
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((lang) => [lang, `${baseUrl}/${lang}${route}`])
          ),
        },
      });
    });

    // Add service routes
    serviceRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((lang) => [lang, `${baseUrl}/${lang}${route}`])
          ),
        },
      });
    });
  });

  // Add additional important pages
  sitemapEntries.push(
    {
      url: `${baseUrl}/robots.txt`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1,
    }
  );

  return sitemapEntries;
} 