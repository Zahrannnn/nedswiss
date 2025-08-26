import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetailClient } from '@/components/blogs/BlogDetailClient';

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

interface BlogItem {
  slug: string;
  status: number;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  tags?: string[];
  coverImage?: string;
}

// Enable ISR with optimized revalidation - 15 minutes for fresh content
export const revalidate = 900;

// Enable static generation for published blogs
export const dynamicParams = true;

// Generate static params for all published blogs with caching
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const response = await fetch('https://nedsite.runasp.net/api/Blog', {
      cache: 'force-cache',
      next: { 
        revalidate: 1800, // Revalidate blog list every 30 minutes
        tags: ['blog-list'] 
      }
    });
    
    if (!response.ok) {
      console.error('Failed to fetch blogs for static generation');
      return [];
    }
    
    const blogs: BlogItem[] = await response.json();
    
    // Generate params for published blogs only
    return blogs
      .filter((blog: BlogItem) => blog.status === 1)
      .map((blog: BlogItem) => ({
        slug: blog.slug,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Optimized blog fetching with intelligent caching
async function getBlogBySlug(slug: string) {
  try {
    const response = await fetch(`https://nedsite.runasp.net/api/Blog/slug/${slug}`, {
      cache: 'force-cache',
      next: { 
        revalidate: 900, // Revalidate individual blogs every 15 minutes
        tags: ['blog-detail', `blog-${slug}`] 
      }
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found | NED Swiss',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const t = await getTranslations({ locale, namespace: 'BlogDetail' });
  
  return {
    title: `${blog.title} | NED Swiss Blog`,
    description: blog.excerpt || blog.title,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.title,
      type: 'article',
      publishedTime: blog.publishedAt,
      tags: blog.tags,
      images: blog.coverImage ? [`https://nedsite.runasp.net${blog.coverImage}`] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.title,
      images: blog.coverImage ? [`https://nedsite.runasp.net${blog.coverImage}`] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }

  return <BlogDetailClient initialBlog={blog} />;
} 