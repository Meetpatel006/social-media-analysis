import { Message, ChatResponse } from './types/chat'
import mockDashboardStats from '@/lib/data/dashboard-stats.json'
import mockInsights from '@/lib/data/insights.json'
import mockAnalyticsOverview from '@/lib/data/analytics-overview.json'
import mockEngagementData from '@/lib/data/engagement-data.json'
import mockTopPosts from '@/lib/data/top-posts.json'

const BACKEND_URL = 'https://social-media-analysis-backend.vercel.app'

// Re-export chat types
export type { Message, ChatResponse }

export interface DashboardStats {
  stats: {
    title: string
    value: string
    change: string
    isPositive: boolean
  }[]
}

export interface InsightData {
  month: string
  views: number
  followers: number
  revenue: number
}

export interface PostActivity {
  id: string
  title: string
  status: 'Active' | 'Inactive'
  likes: number
  impressions: number
  comments: number
  image?: string
}

export interface AnalyticsOverview {
  metrics: {
    title: string
    value: string
    change: string
    isPositive: boolean
    iconType: string
  }[]
}

export interface EngagementData {
  date: string
  engagement: number
  conversion: number
  retention: number
}

export type ContentType = 'reels' | 'carousels' | 'static'

export interface EngagementDataByType {
  reels: EngagementData[]
  carousels: EngagementData[]
  static: EngagementData[]
}

export interface TopPost {
  title: string
  likes: number
  comments: number
  views: number
  image: string
}

export interface TopPerformer {
  title: string
  value: string
  metric: string
  growth: string
  isPositive: boolean
}

export interface AnalyticsOverviewByType {
  reels: AnalyticsOverview
  carousels: AnalyticsOverview
  static: AnalyticsOverview
}

export interface TopPerformersByType {
  reels: TopPerformer[]
  carousels: TopPerformer[]
  static: TopPerformer[]
}

export interface TopPostsByType {
  reels: TopPost[]
  carousels: TopPost[]
  static: TopPost[]
}

// API Functions
export async function fetchDashboardStats(): Promise<DashboardStats> {
  try {
    // First try to fetch from the backend
    const response = await fetch(`${BACKEND_URL}/api/dashboard/stats`)
    if (response.ok) {
      return response.json()
    }
  } catch (error) {
    console.warn('Failed to fetch from backend, using mock data:', error)
  }

  // Fallback to mock data from JSON file
  return mockDashboardStats
}

export async function fetchInsights(): Promise<InsightData[]> {
  try {
    // First try to fetch from the backend
    const response = await fetch(`${BACKEND_URL}/api/insights`)
    if (response.ok) {
      return response.json()
    }
  } catch (error) {
    console.warn('Failed to fetch insights from backend, using mock data:', error)
  }

  // Fallback to mock data from JSON file
  return mockInsights
}

export async function fetchPostActivity(): Promise<PostActivity[]> {
  try {
    // First try to fetch from the backend
    const response = await fetch(`${BACKEND_URL}/api/posts/activity`)
    if (response.ok) {
      return response.json()
    }
  } catch (error) {
    console.warn('Failed to fetch post activity from backend, using mock data:', error)
  }

  // Fallback to mock data
  return [
    {
      id: '1',
      title: 'New Product Launch',
      status: 'Active',
      likes: 1250,
      impressions: 5000,
      comments: 89,
      image: '/images/post1.jpg'
    },
    {
      id: '2',
      title: 'Customer Success Story',
      status: 'Active',
      likes: 980,
      impressions: 4200,
      comments: 65,
      image: '/images/post2.jpg'
    },
    {
      id: '3',
      title: 'Feature Update',
      status: 'Inactive',
      likes: 750,
      impressions: 3100,
      comments: 42,
      image: '/images/post3.jpg'
    }
  ]
}

export async function fetchAnalyticsOverview(contentType: ContentType = 'static'): Promise<AnalyticsOverview> {
  try {
    // First try to fetch from the backend
    const response = await fetch(`${BACKEND_URL}/api/analytics/overview?type=${contentType}`)
    if (response.ok) {
      return response.json()
    }
  } catch (error) {
    console.warn('Failed to fetch analytics overview from backend, using mock data:', error)
  }

  // Fallback to mock data from JSON file
  return mockAnalyticsOverview[contentType]
}

export async function fetchEngagementData(contentType: ContentType = 'static'): Promise<EngagementData[]> {
  try {
    // First try to fetch from the backend
    const response = await fetch(`${BACKEND_URL}/api/analytics/engagement?type=${contentType}`)
    if (response.ok) {
      return response.json()
    }
  } catch (error) {
    console.warn('Failed to fetch engagement data from backend, using mock data:', error)
  }

  // Fallback to mock data from JSON file
  return mockEngagementData[contentType]
}

export async function fetchTopPosts(contentType: ContentType = 'static'): Promise<TopPost[]> {
  try {
    // First try to fetch from the backend
    const response = await fetch(`${BACKEND_URL}/api/posts/top?type=${contentType}`)
    if (response.ok) {
      return response.json()
    }
  } catch (error) {
    console.warn('Failed to fetch top posts from backend, using mock data:', error)
  }

  // Fallback to mock data from JSON file
  return mockTopPosts[contentType]
}

export async function fetchTopPerformers(contentType: ContentType = 'static'): Promise<TopPerformer[]> {
  const response = await fetch(`${BACKEND_URL}/api/analytics/top-performers?type=${contentType}`)
  if (!response.ok) {
    throw new Error('Failed to fetch top performers')
  }
  return response.json()
}

export async function sendChatMessage(message: string): Promise<ChatResponse> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(`${BACKEND_URL}/api/run-flow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://social-media-analysis-jade.vercel.app'
      },
      credentials: 'omit',
      body: JSON.stringify({
        message,
        tweaks: null,
        input_type: "chat",
        output_type: "chat"
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    
    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage: string;
      
      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData?.detail || errorData?.message || `Server responded with status: ${response.status}`;
      } catch {
        errorMessage = errorText || `Server responded with status: ${response.status}`;
      }
      
      throw new Error(errorMessage);
    }
    
    const data = await response.json();
    
    // Validate response structure
    if (!data.outputs?.[0]?.outputs?.[0]) {
      throw new Error('Invalid response format from server');
    }
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.');
      }
      throw error; // Re-throw the original error with its message
    }
    throw new Error('An unexpected error occurred');
  }
} 