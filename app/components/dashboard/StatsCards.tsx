'use client'

import { 
  Users, 
  TrendingUp, 
  Target, 
  BarChart2, 
  Activity,
  LineChart,
  PieChart,
  ArrowUpRight
} from 'lucide-react'
import { type DashboardStats, fetchDashboardStats } from '../../lib/api'
import { useQuery } from '@tanstack/react-query'

export function StatsCards() {
  const { data: dashboardStats, isLoading } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: fetchDashboardStats
  })

  const icons = {
    'Total Users': Users,
    'Engagement Rate': Activity,
    'Conversion Rate': ArrowUpRight,
    'Active Users': Users,
    'Total Revenue': LineChart,
    'Growth Rate': TrendingUp,
    'Market Reach': Target,
    'Performance': BarChart2
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 p-6 rounded-xl border border-light-purple animate-pulse"
          >
            <div className="flex items-center justify-between">
              <div className="h-4 bg-gray-700/50 rounded w-24"></div>
              <div className="p-2 bg-background/50 rounded-lg">
                <div className="w-6 h-6 bg-gray-700/50 rounded"></div>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-8 bg-gray-700/50 rounded w-20 mb-2"></div>
              <div className="h-4 bg-gray-700/50 rounded w-32"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!dashboardStats) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboardStats.stats.map((stat, index) => {
        const Icon = icons[stat.title as keyof typeof icons]
        
        return (
          <div
            key={index}
            className="bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 p-6 rounded-xl border border-light-purple hover:border-pink/50 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-400 group-hover:text-pink transition-colors">{stat.title}</span>
              <div className="p-2 bg-background rounded-lg text-pink group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-light-purple transition-all">{stat.value}</h3>
              <p className={`text-sm mt-1 ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change} from last month
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
} 