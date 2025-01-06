import dashboardStatsJson from './data/dashboard-stats.json'
import insightsJson from './data/insights.json'
import analyticsOverviewJson from './data/analytics-overview.json'
import engagementDataJson from './data/engagement-data.json'
import topPerformersJson from './data/top-performers.json'
import topPostsJson from './data/top-posts.json'

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

// API Functions
export async function fetchDashboardStats(): Promise<DashboardStats> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return dashboardStatsJson
}

export async function fetchInsights(): Promise<InsightData[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return insightsJson
}

export async function fetchPostActivity(): Promise<PostActivity[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    {
      id: '1',
      title: 'Winter Collection',
      status: 'Active',
      likes: 3807,
      impressions: 5689,
      comments: 8707,
      image: '/images/post1.jpg'
    },
    {
      id: '2',
      title: 'New Arrival',
      status: 'Active',
      likes: 3807,
      impressions: 5689,
      comments: 8707,
      image: '/images/post2.jpg'
    },
    {
      id: '3',
      title: 'Avail 35% off',
      status: 'Active',
      likes: 1807,
      impressions: 2689,
      comments: 8707,
      image: '/images/post3.jpg'
    }
  ]
}

export async function fetchAnalyticsOverview(contentType: ContentType = 'static'): Promise<AnalyticsOverview> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const data = analyticsOverviewJson as AnalyticsOverviewByType
  return data[contentType]
}

export async function fetchEngagementData(contentType: ContentType = 'static'): Promise<EngagementData[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const data = engagementDataJson as EngagementDataByType
  return data[contentType]
}

export async function fetchTopPosts(contentType: ContentType = 'static'): Promise<TopPost[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const data = topPostsJson as TopPostsByType
  return data[contentType]
}

export async function fetchTopPerformers(contentType: ContentType = 'static'): Promise<TopPerformer[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const data = topPerformersJson as TopPerformersByType
  return data[contentType]
} 