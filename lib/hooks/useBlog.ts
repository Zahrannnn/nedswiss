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

// Hook to get all blogs with optimized caching
export const useBlogs = (): UseQueryResult<Blog[], Error> => {
  return useQuery({
    queryKey: blogQueryKeys.list({}),
    queryFn: () => blogAPI.getAllBlogs(),
    staleTime: 5 * 60 * 1000, // 5 minutes - matches Next.js cache
    gcTime: 30 * 60 * 1000, // 30 minutes - longer garbage collection
    retry: 2,
    refetchOnWindowFocus: false, // Disable refetch on window focus for better performance
    refetchOnMount: false, // Rely on cache for initial load
  });
};

// Hook to get published blogs with optimized caching
export const usePublishedBlogs = (): UseQueryResult<Blog[], Error> => {
  return useQuery({
    queryKey: blogQueryKeys.list({ status: 1 }),
    queryFn: () => blogAPI.getPublishedBlogs(),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

// Hook to get blogs with filters
export const useBlogsWithFilters = (filters: BlogFilters): UseQueryResult<Blog[], Error> => {
  return useQuery({
    queryKey: blogQueryKeys.list(filters),
    queryFn: () => blogAPI.getBlogsWithFilters(filters),
    staleTime: 5 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: Object.keys(filters).length > 0, // Only run if filters are provided
  });
};

// Hook to get a single blog by ID with optimized caching
export const useBlog = (id: number): UseQueryResult<Blog, Error> => {
  return useQuery({
    queryKey: blogQueryKeys.detail(id),
    queryFn: () => blogAPI.getBlogById(id),
    staleTime: 10 * 60 * 1000, // 10 minutes - longer for individual blogs
    gcTime: 60 * 60 * 1000, // 1 hour - keep individual blogs longer
    retry: 2,
    enabled: !!id, // Only run query if ID is provided
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

// Hook to get a single blog by slug with optimized caching
export const useBlogBySlug = (slug: string): UseQueryResult<Blog, Error> => {
  return useQuery({
    queryKey: blogQueryKeys.slug(slug),
    queryFn: () => blogAPI.getBlogBySlug(slug),
    staleTime: 10 * 60 * 1000, // 10 minutes - longer for individual blogs
    gcTime: 60 * 60 * 1000, // 1 hour - keep individual blogs longer
    retry: 2,
    enabled: !!slug, // Only run query if slug is provided
    refetchOnWindowFocus: false,
    refetchOnMount: false,
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
        staleTime: 5 * 60 * 1000,
      });
    },
    
    // Prefetch published blogs
    prefetchPublishedBlogs: () => {
      queryClient.prefetchQuery({
        queryKey: blogQueryKeys.list({ status: 1 }),
        queryFn: () => blogAPI.getPublishedBlogs(),
        staleTime: 5 * 60 * 1000,
      });
    },
    
    // Prefetch a specific blog by slug
    prefetchBlogBySlug: (slug: string) => {
      queryClient.prefetchQuery({
        queryKey: blogQueryKeys.slug(slug),
        queryFn: () => blogAPI.getBlogBySlug(slug),
        staleTime: 10 * 60 * 1000,
      });
    },
    
    // Invalidate cache for specific tags (useful after updates)
    invalidateBlogCache: () => {
      queryClient.invalidateQueries({ queryKey: blogQueryKeys.all });
    },
  };
}; 