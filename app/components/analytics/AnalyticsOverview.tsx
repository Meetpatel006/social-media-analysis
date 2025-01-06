'use client'

import { AnalyticsMetrics } from './overview/AnalyticsMetrics'
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Clock,
  BarChart2,
  Activity,
  Target,
  LineChart
} from 'lucide-react'
import { type AnalyticsOverview as AnalyticsOverviewType, type ContentType, fetchAnalyticsOverview } from '../../lib/api'
import { useQuery } from '@tanstack/react-query'

interface AnalyticsOverviewProps {
  selectedContentType: ContentType
}

export function AnalyticsOverview({ selectedContentType }: AnalyticsOverviewProps) {
  const { data: analyticsOverview, isLoading } = useQuery({
    queryKey: ['analyticsOverview', selectedContentType],
    queryFn: () => fetchAnalyticsOverview(selectedContentType)
  })

  const icons = {
    'dollar': DollarSign,
    'trending': TrendingUp,
    'users': Users,
    'clock': Clock,
    'chart': BarChart2,
    'activity': Activity,
    'target': Target,
    'line': LineChart
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-dark-purple p-6 rounded-xl border border-light-purple animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-24 mb-4"></div>
            <div className="h-8 bg-gray-700 rounded w-32"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!analyticsOverview) return null

  const metricsWithIcons = analyticsOverview.metrics.map(metric => ({
    ...metric,
    icon: (() => {
      const Icon = icons[metric.iconType as keyof typeof icons]
      return <Icon className="w-6 h-6" />
    })()
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnalyticsMetrics metrics={metricsWithIcons} />
    </div>
  )
} 