import { DashboardStats, InsightData } from '../types/dashboard'
import { AnalyticsOverview, EngagementData, TopPost } from '../types/analytics'

export const mockDashboardStats: DashboardStats = {
  accountsReached: 40000,
  engagement: 40000,
  totalLikes: 150000,
  totalViews: 40000,
  weeklyChange: {
    accountsReached: 1.29,
    engagement: 1.29,
    totalLikes: 1.29,
    totalViews: 1.29
  }
}

export const mockInsights: InsightData[] = [
  { month: 'Jan', views: 35000, followers: 28000 },
  { month: 'Feb', views: 28000, followers: 22000 },
  { month: 'Mar', views: 32000, followers: 25000 },
  { month: 'Apr', views: 38000, followers: 30000 },
  { month: 'May', views: 40000, followers: 32000 },
  { month: 'Jun', views: 35000, followers: 28000 },
  { month: 'Jul', views: 38000, followers: 30000 },
  { month: 'Aug', views: 36000, followers: 29000 }
]

export const mockAnalyticsOverview: AnalyticsOverview = {
  totalFollowers: 40000,
  followerGrowth: 1.29,
  engagementRate: 4.2,
  engagementGrowth: 1.29,
  averageLikes: 150000,
  likesGrowth: -1.29,
  reach: 40000,
  reachGrowth: 1.29
}

export const mockEngagementData: EngagementData[] = [
  { date: 'Jan', engagement: 35000, reach: 28000 },
  { date: 'Feb', engagement: 28000, reach: 22000 },
  { date: 'Mar', engagement: 32000, reach: 25000 },
  { date: 'Apr', engagement: 38000, reach: 30000 },
  { date: 'May', engagement: 40000, reach: 32000 },
  { date: 'Jun', engagement: 35000, reach: 28000 },
  { date: 'Jul', engagement: 38000, reach: 30000 },
  { date: 'Aug', engagement: 36000, reach: 29000 }
]

export const mockTopPosts: TopPost[] = [
  {
    title: 'Winter Collection',
    likes: 3807,
    comments: 8707,
    views: 5689,
    image: '/images/post1.jpg'
  },
  {
    title: 'New Arrival',
    likes: 3807,
    comments: 8707,
    views: 5689,
    image: '/images/post2.jpg'
  },
  {
    title: 'Avail 35% off',
    likes: 1807,
    comments: 8707,
    views: 2689,
    image: '/images/post3.jpg'
  }
] 