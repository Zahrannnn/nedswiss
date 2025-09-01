'use client';

import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { blogAPI } from '../api/blog';
import { Blog, BlogFilters } from '../types/blog';

// Query keys for consistent caching
export const blogQueryKeys = {
  all: ['blogs'] as const,
  lists: () => [...blogQueryKeys.all, 'list'] as const,
  list: (filters: BlogFilters) => [...blogQueryKeys.lists(), filters] as const,
  details: () => [...blogQueryKeys.all, 'detail'] as const,
  detail: (id: number) => [...blogQueryKeys.details(), id] as const,
  slug: (slug: string) => [...blogQueryKeys.details(), 'slug', slug] as const,
};

// Hook to get all blogs with ISR-aligned caching
export const useBlogs = (): UseQueryResult<Blog[], Error> => {
  return useQuery({
    queryKey: blogQueryKeys.list({}),
    queryFn: () => blogAPI.getAllBlogs(),
    staleTime: 5 * 60 * 1000, // 5 minutes - align with ISR revalidation
    gcTime: 10 * 60 * 1000, // 10 minutes garbage collection
    retry: 2,
    refetchOnWindowFocus: false, // Reduce aggressive refetching since we have ISR
    refetchOnMount: false, // Let ISR handle freshness
    refetchInterval: false, // Disable background refetching - ISR handles this
  });
};

// Hook to get published blogs with ISR-aligned caching
export const usePublishedBlogs = (): UseQueryResult<Blog[], Error> => {
  return useQuery({
    queryKey: blogQueryKeys.list({ status: 1 }),
    queryFn: async () => {
      const blogs = await blogAPI.getAllBlogs();
      return blogs.filter(blog => blog.status === 1);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes - align with ISR revalidation
    gcTime: 10 * 60 * 1000, // 10 minutes garbage collection
    retry: 2,
    refetchOnWindowFocus: false, // Reduce aggressive refetching since we have ISR
    refetchOnMount: false, // Let ISR handle freshness
    refetchInterval: false, // Disable background refetching - ISR handles this
  });
};

// Hook to get blogs with filters
export const useBlogsWithFilters = (filters: BlogFilters): UseQueryResult<Blog[], Error> => {
  return useQuery({
    queryKey: blogQueryKeys.list(filters),
    queryFn: () => blogAPI.getBlogsWithFilters(filters),
    staleTime: 0, // Always consider data stale for instant updates
    gcTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchInterval: 30 * 1000, // Refetch every 30 seconds
    enabled: Object.keys(filters).length > 0, // Only run if filters are provided
  });
};

// Hook to get blog by ID with ISR-aligned caching
export const useBlog = (id: number): UseQueryResult<Blog, Error> => {
  return useQuery({
    queryKey: blogQueryKeys.detail(id),
    queryFn: () => blogAPI.getBlogById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes - align with ISR revalidation
    gcTime: 10 * 60 * 1000, // 10 minutes garbage collection
    retry: 2,
    refetchOnWindowFocus: false, // Reduce aggressive refetching since we have ISR
    refetchOnMount: false, // Let ISR handle freshness
  });
};

// Hook to get blog by slug with ISR-aligned caching
export const useBlogBySlug = (slug: string): UseQueryResult<Blog, Error> => {
  return useQuery({
    queryKey: blogQueryKeys.slug(slug),
    queryFn: () => blogAPI.getBlogBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes - align with ISR revalidation
    gcTime: 10 * 60 * 1000, // 10 minutes garbage collection
    retry: 2,
    refetchOnWindowFocus: false, // Reduce aggressive refetching since we have ISR
    refetchOnMount: false, // Let ISR handle freshness
  });
};

// Hook to prefetch blogs (useful for preloading)
export const usePrefetchBlogs = () => {
  const queryClient = useQueryClient();

  return {
    // Prefetch all blogs
    prefetchAllBlogs: () => {
      queryClient.prefetchQuery({
        queryKey: blogQueryKeys.list({}),
        queryFn: () => blogAPI.getAllBlogs(),
        staleTime: 0,
      });
    },
    
    // Prefetch published blogs
    prefetchPublishedBlogs: () => {
      queryClient.prefetchQuery({
        queryKey: blogQueryKeys.list({ status: 1 }),
        queryFn: () => blogAPI.getPublishedBlogs(),
        staleTime: 0,
      });
    },
    
    // Prefetch a specific blog by slug
    prefetchBlogBySlug: (slug: string) => {
      queryClient.prefetchQuery({
        queryKey: blogQueryKeys.slug(slug),
        queryFn: () => blogAPI.getBlogBySlug(slug),
        staleTime: 0,
      });
    },
    
    // Invalidate cache for specific tags (useful after updates)
    invalidateBlogCache: () => {
      queryClient.invalidateQueries({ queryKey: blogQueryKeys.all });
    },
    
    // Force refetch all blog queries
    refetchAllBlogs: () => {
      queryClient.refetchQueries({ queryKey: blogQueryKeys.all });
    },
  };
}; 