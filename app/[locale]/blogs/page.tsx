import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Allblogs from '@/components/blogs/Allblogs';

interface BlogsPageProps {
  params: Promise<{ locale: string }>;
}

// Enable dynamic rendering for instant updates
export const dynamic = 'force-dynamic';

// Remove static revalidation to ensure fresh data on each request
// export const revalidate = 600;

// Enable dynamic params for better flexibility
export const dynamicParams = true;

export async function generateMetadata({ params }: BlogsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AllBlogs' });
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

const BlogsPage = async ({ params }: BlogsPageProps) => {
  return <Allblogs />;
};

export default BlogsPage; 