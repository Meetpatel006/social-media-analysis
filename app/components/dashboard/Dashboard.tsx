'use client'
import { StatsCards } from './StatsCards'
import InsightsChart from './InsightsChart'

export function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsCards />
      <div className="w-full">
        <InsightsChart />
      </div>
    </div>
  )
} 