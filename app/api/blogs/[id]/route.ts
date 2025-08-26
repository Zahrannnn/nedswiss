import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://nedsite.runasp.net/api';

// Enable ISR for individual blog routes
export const revalidate = 900; // Revalidate every 15 minutes

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const response = await fetch(`${API_BASE_URL}/Blog/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'force-cache',
      next: { 
        revalidate: 900, // Revalidate every 15 minutes
        tags: ['blog-detail', `blog-${id}`] 
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=3600', // Browser and CDN caching
      },
    });
  } catch (error) {
    const { id } = await params;
    console.error(`Error fetching blog with id ${id}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
} 