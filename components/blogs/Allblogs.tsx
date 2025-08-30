'use client';

import { useBlogs, usePrefetchBlogs } from '@/lib/hooks/useBlog';
import { BlogHero } from './BlogHero';
import { BlogGrid } from './BlogGrid';
import { useTranslations } from 'next-intl';

const Allblogs = () => {
  const t = useTranslations('AllBlogs');
  const { data: blogs = [], isLoading, error } = useBlogs();
  const { invalidateBlogCache, refetchAllBlogs } = usePrefetchBlogs();

  const handleRefresh = async () => {
    try {
      // Invalidate the cache and refetch
      invalidateBlogCache();
      await refetchAllBlogs();
    } catch (error) {
      console.error('Error refreshing blogs:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BlogHero />
      
      
      
      {/* Blog Grid Section */}
      <BlogGrid 
        blogs={blogs}
        isLoading={isLoading}
        error={error}
      />
      
    </div>
  );
};

export default Allblogs;