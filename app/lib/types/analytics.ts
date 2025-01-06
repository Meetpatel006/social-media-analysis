export interface AnalyticsOverview {
  totalFollowers: number
  followerGrowth: number
  engagementRate: number
  engagementGrowth: number
  averageLikes: number
  likesGrowth: number
  reach: number
  reachGrowth: number
}

export interface EngagementData {
  date: string
  engagement: number
  reach: number
}

export interface TopPost {
  title: string
  likes: number
  comments: number
  views: number
  image?: string
} 