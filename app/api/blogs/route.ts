import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://nedsite.runasp.net/api';

// Enable static generation for API route
export const dynamic = 'force-static';
export const revalidate = 600; // Revalidate every 10 minutes

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${API_BASE_URL}/Blog`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'force-cache',
      next: { 
        revalidate: 600, // Revalidate every 10 minutes
        tags: ['blogs-api'] 
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
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600', // Browser and CDN caching
      },
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
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

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 