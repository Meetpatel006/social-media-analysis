'use client'

import { useState } from 'react'
import { type ContentType } from '../../lib/api'
import { AnalyticsOverview } from './AnalyticsOverview'
import { EngagementTrends } from './charts/EngagementTrends'
import { TopPerformers } from './TopPerformers'
import TopPosts from './TopPosts'

export function Analytics() {
  const [selectedContentType, setSelectedContentType] = useState<ContentType>('static')

  return (
    <div className="space-y-6">
      <AnalyticsOverview selectedContentType={selectedContentType} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EngagementTrends 
            selectedContentType={selectedContentType}
            setSelectedContentType={setSelectedContentType}
          />
        </div>
        <div className="space-y-6">
          <TopPerformers selectedContentType={selectedContentType} />
          <TopPosts selectedContentType={selectedContentType} />
        </div>
      </div>
    </div>
  )
} 