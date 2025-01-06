// Mock data for dashboard stats
export const mockDashboardStats = {
  stats: [
    {
      title: 'Total Users',
      value: '23.4K',
      change: '+12%',
      isPositive: true
    },
    {
      title: 'Engagement Rate',
      value: '4.7%',
      change: '+8%',
      isPositive: true
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+18%',
      isPositive: true
    },
    {
      title: 'Active Users',
      value: '18.2K',
      change: '+32%',
      isPositive: true
    },
    {
      title: 'Total Revenue',
      value: '$45.2K',
      change: '+42%',
      isPositive: true
    },
    {
      title: 'Growth Rate',
      value: '2.1%',
      change: '+12%',
      isPositive: true
    },
    {
      title: 'Market Reach',
      value: '85.5K',
      change: '+28%',
      isPositive: true
    },
    {
      title: 'Performance',
      value: '92%',
      change: '+8%',
      isPositive: true
    }
  ]
}

// Mock data for insights chart
export const mockInsights = [
  { month: 'Jan', views: 35000, followers: 28000, revenue: 25000 },
  { month: 'Feb', views: 28000, followers: 22000, revenue: 20000 },
  { month: 'Mar', views: 32000, followers: 25000, revenue: 28000 },
  { month: 'Apr', views: 38000, followers: 30000, revenue: 32000 },
  { month: 'May', views: 40000, followers: 32000, revenue: 35000 },
  { month: 'Jun', views: 35000, followers: 28000, revenue: 30000 },
  { month: 'Jul', views: 38000, followers: 30000, revenue: 34000 },
  { month: 'Aug', views: 36000, followers: 29000, revenue: 31000 }
]

// Mock data for analytics overview
export const mockAnalyticsOverview = {
  metrics: [
    {
      title: 'Total Revenue',
      value: '$126.5K',
      change: '+12.3%',
      isPositive: true,
      iconType: 'dollar'
    },
    {
      title: 'Conversion Rate',
      value: '5.2%',
      change: '+2.1%',
      isPositive: true,
      iconType: 'trending'
    },
    {
      title: 'Active Users',
      value: '25.4K',
      change: '+8.5%',
      isPositive: true,
      iconType: 'users'
    },
    {
      title: 'Avg. Session',
      value: '4m 32s',
      change: '+12.5%',
      isPositive: true,
      iconType: 'clock'
    }
  ]
}

// Mock data for engagement trends
export const mockEngagementData = [
  { date: 'Jan 1', engagement: 35000, conversion: 28000, retention: 20000 },
  { date: 'Jan 5', engagement: 38000, conversion: 29500, retention: 21000 },
  { date: 'Jan 10', engagement: 42000, conversion: 31000, retention: 23000 },
  { date: 'Jan 15', engagement: 40000, conversion: 30000, retention: 22000 },
  { date: 'Jan 20', engagement: 45000, conversion: 33000, retention: 24000 },
  { date: 'Jan 25', engagement: 48000, conversion: 35000, retention: 26000 },
  { date: 'Jan 30', engagement: 52000, conversion: 38000, retention: 28000 },
  { date: 'Feb 5', engagement: 55000, conversion: 40000, retention: 30000 },
  { date: 'Feb 10', engagement: 58000, conversion: 42000, retention: 32000 },
  { date: 'Feb 15', engagement: 54000, conversion: 39000, retention: 29000 },
  { date: 'Feb 20', engagement: 57000, conversion: 41000, retention: 31000 },
  { date: 'Feb 25', engagement: 60000, conversion: 44000, retention: 33000 },
  { date: 'Mar 1', engagement: 63000, conversion: 46000, retention: 35000 },
  { date: 'Mar 5', engagement: 65000, conversion: 48000, retention: 37000 }
]

// Mock data for top performers
export const mockTopPerformers = [
  {
    title: "Product Launch Campaign",
    value: "5.2K",
    metric: "Conversions",
    growth: "+22%",
    isPositive: true
  },
  {
    title: "Email Marketing",
    value: "4.8K",
    metric: "Engagement",
    growth: "+18%",
    isPositive: true
  },
  {
    title: "User Onboarding",
    value: "4.1K",
    metric: "Completion",
    growth: "+15%",
    isPositive: true
  }
]

// Types for the mock data
export interface DashboardStat {
  title: string
  value: string
  change: string
  isPositive: boolean
}

export interface InsightData {
  month: string
  views: number
  followers: number
  revenue: number
}

export interface AnalyticsMetric {
  title: string
  value: string
  change: string
  isPositive: boolean
  iconType: string
}

export interface EngagementData {
  date: string
  engagement: number
  conversion: number
  retention: number
}

export interface TopPerformer {
  title: string
  value: string
  metric: string
  growth: string
  isPositive: boolean
}

export interface TopPost {
  title: string
  likes: number
  comments: number
  views: number
  image: string
}

export const mockTopPosts: TopPost[] = [
  {
    title: 'Winter Collection Launch',
    likes: 3807,
    comments: 872,
    views: 15689,
    image: '/images/post1.jpg'
  },
  {
    title: 'New Product Announcement',
    likes: 2945,
    comments: 654,
    views: 12453,
    image: '/images/post2.jpg'
  },
  {
    title: 'Customer Success Story',
    likes: 2341,
    comments: 436,
    views: 9876,
    image: '/images/post3.jpg'
  }
] 