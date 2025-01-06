import DashboardLayout from '../components/layout/DashboardLayout'
import {StatsCards} from '../components/dashboard/StatsCards'
import InsightsChart from '../components/dashboard/InsightsChart'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <StatsCards />
      <InsightsChart />
    </DashboardLayout>
  )
} 