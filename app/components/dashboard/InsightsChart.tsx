'use client'

import { useQuery } from '@tanstack/react-query'
import { type InsightData, fetchInsights } from '../../lib/api'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'
import { Skeleton } from '../ui/Skeleton'

function InsightsChart() {
  const { data: insights, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['insights'],
    queryFn: fetchInsights
  })

  if (isLoading) {
    return (
      <div className="mt-8 p-6 rounded-2xl bg-dark-purple">
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="w-32 h-6" />
          <Skeleton className="w-24 h-8 rounded-lg" />
        </div>
        <div className="h-64 w-full">
          <div className="grid grid-cols-8 gap-4 h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2 flex flex-col justify-end">
                <Skeleton className="w-full h-[40%] rounded-t-lg" />
                <Skeleton className="w-full h-[60%] rounded-t-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="mt-8 p-6 rounded-2xl bg-dark-purple">
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-error mb-4">{error instanceof Error ? error.message : 'Failed to load insights'}</p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-pink hover:bg-pink-dark rounded-lg text-white transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!insights) return null

  return (
    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 border border-light-purple hover:border-pink/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink to-light-purple animate-gradient-x">
          Insights
        </h2>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={insights}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#34344A" 
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#34344A' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
              tickFormatter={(value) => `${value / 1000}k`}
              axisLine={{ stroke: '#34344A' }}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255, 92, 147, 0.1)' }}
              contentStyle={{ 
                backgroundColor: '#2D2D3F',
                border: '1px solid #FF5C93',
                borderRadius: '0.5rem',
                color: '#fff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: number) => [`${value.toLocaleString()}`, '']}
            />
            <Legend 
              iconType="circle"
              wrapperStyle={{ color: '#9CA3AF' }}
            />
            <Bar 
              name="Views"
              dataKey="views" 
              fill="#FF5C93" 
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
              animationBegin={0}
            />
            <Bar 
              name="Revenue"
              dataKey="revenue" 
              fill="#00E396" 
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
              animationBegin={200}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default InsightsChart 