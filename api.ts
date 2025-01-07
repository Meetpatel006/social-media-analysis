const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://social-media-analysis-backend.vercel.app'

// API Types
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

export interface Message {
  id: string
  type: 'user' | 'assistant' | 'error'
  content: string
  sender: 'user' | 'assistant' | 'system'
  timestamp: Date
}

export interface ChatResponse {
  outputs: Array<{
    outputs: Array<{
      artifacts?: {
        message: string
      }
      results?: {
        message: {
          text: string
        }
      }
    }>
  }>
}

// API Functions
export async function fetchDashboardStats(): Promise<DashboardStats> {
  const response = await fetch(`${BACKEND_URL}/api/dashboard/stats`)
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard stats')
  }
  return response.json()
}

export async function fetchInsights(): Promise<InsightData[]> {
  const response = await fetch(`${BACKEND_URL}/api/insights`)
  if (!response.ok) {
    throw new Error('Failed to fetch insights')
  }
  return response.json()
}

export async function fetchPostActivity(): Promise<PostActivity[]> {
  const response = await fetch(`${BACKEND_URL}/api/posts/activity`)
  if (!response.ok) {
    throw new Error('Failed to fetch post activity')
  }
  return response.json()
}

export async function fetchAnalyticsOverview(contentType: ContentType = 'static'): Promise<AnalyticsOverview> {
  const response = await fetch(`${BACKEND_URL}/api/analytics/overview?type=${contentType}`)
  if (!response.ok) {
    throw new Error('Failed to fetch analytics overview')
  }
  return response.json()
}

export async function fetchEngagementData(contentType: ContentType = 'static'): Promise<EngagementData[]> {
  const response = await fetch(`${BACKEND_URL}/api/analytics/engagement?type=${contentType}`)
  if (!response.ok) {
    throw new Error('Failed to fetch engagement data')
  }
  return response.json()
}

export async function fetchTopPosts(contentType: ContentType = 'static'): Promise<TopPost[]> {
  const response = await fetch(`${BACKEND_URL}/api/posts/top?type=${contentType}`)
  if (!response.ok) {
    throw new Error('Failed to fetch top posts')
  }
  return response.json()
}

export async function fetchTopPerformers(contentType: ContentType = 'static'): Promise<TopPerformer[]> {
  const response = await fetch(`${BACKEND_URL}/api/analytics/top-performers?type=${contentType}`)
  if (!response.ok) {
    throw new Error('Failed to fetch top performers')
  }
  return response.json()
}

export async function sendChatMessage(message: string): Promise<ChatResponse> {
  const response = await fetch(`${BACKEND_URL}/api/chat/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      context: {
        type: 'social_media_analysis'
      }
    }),
  })
  
  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || 'Failed to send chat message')
  }
  
  return response.json()
} 