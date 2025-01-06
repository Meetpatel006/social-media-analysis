export interface DashboardStats {
  accountsReached: number
  engagement: number
  totalLikes: number
  totalViews: number
  weeklyChange: {
    accountsReached: number
    engagement: number
    totalLikes: number
    totalViews: number
  }
}

export interface InsightData {
  month: string
  views: number
  followers: number
} 