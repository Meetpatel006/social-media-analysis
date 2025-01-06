import DashboardLayout from '../components/layout/DashboardLayout'
import { AnalyticsOverview } from '../components/analytics/AnalyticsOverview'
import { EngagementTrends } from '../components/analytics/charts/EngagementTrends'
import TopPosts from '../components/analytics/TopPosts'

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <AnalyticsOverview />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EngagementTrends />
          <TopPosts />
        </div>
      </div>
    </DashboardLayout>
  )
} 