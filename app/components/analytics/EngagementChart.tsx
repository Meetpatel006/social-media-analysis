'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { type EngagementData, fetchEngagementData } from '../../lib/api'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

function EngagementChart() {
  const [timeframe, setTimeframe] = useState('Monthly')
  
  const { data, isLoading } = useQuery<EngagementData[], Error>({
    queryKey: ['engagementData', timeframe],
    queryFn: fetchEngagementData
  })

  if (isLoading) {
    return (
      <div className="mt-8 p-6 rounded-2xl bg-dark-purple h-[400px] animate-pulse">
        <div className="h-4 bg-gray-700 rounded w-1/4 mb-8"></div>
        <div className="h-full bg-gray-700/20 rounded"></div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="mt-8 p-6 rounded-2xl bg-dark-purple">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Engagement Over Time</h2>
        <select 
          className="bg-light-purple text-gray-400 rounded-lg px-3 py-1"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
        </select>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#34344A" />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#2D2D3F',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff'
              }}
            />
            <Legend wrapperStyle={{ color: '#9CA3AF' }} />
            <Line 
              type="monotone" 
              dataKey="engagement" 
              stroke="#FF5C93" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="reach" 
              stroke="#00E396" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default EngagementChart 