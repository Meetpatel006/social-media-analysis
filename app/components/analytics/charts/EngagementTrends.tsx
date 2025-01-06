'use client'

import { useQuery } from '@tanstack/react-query'
import { type EngagementData, type ContentType, fetchEngagementData } from '../../../lib/api'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const contentTypes: { value: ContentType; label: string }[] = [
  { value: 'reels', label: 'Reels' },
  { value: 'carousels', label: 'Carousels' },
  { value: 'static', label: 'Static Posts' }
]

interface EngagementTrendsProps {
  selectedContentType: ContentType
  setSelectedContentType: (type: ContentType) => void
}

export function EngagementTrends({ selectedContentType, setSelectedContentType }: EngagementTrendsProps) {
  const { data: engagementData, isLoading } = useQuery({
    queryKey: ['engagementTrends', selectedContentType],
    queryFn: () => fetchEngagementData(selectedContentType)
  })

  if (isLoading) {
    return (
      <div className="bg-dark-purple rounded-xl p-6 border border-light-purple h-[400px] animate-pulse">
        <div className="h-6 w-48 bg-gray-700 rounded mb-6" />
        <div className="h-full bg-gray-700/20 rounded" />
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 rounded-xl p-6 border border-light-purple hover:border-pink/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c2e59c] to-[#fe90af] animate-gradient-x">
          Engagement Trends
        </h3>
        <select
          value={selectedContentType}
          onChange={(e) => setSelectedContentType(e.target.value as ContentType)}
          className="bg-light-purple text-gray-200 rounded-lg px-3 py-1.5 text-sm border border-light-purple/50 focus:outline-none focus:border-pink/50 transition-colors"
        >
          {contentTypes.map((type) => (
            <option key={type.value} value={type.value} className="bg-dark-purple">
              {type.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={engagementData}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#34344A" 
              vertical={false}
            />
            <XAxis 
              dataKey="date" 
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
              contentStyle={{
                backgroundColor: '#2D2D3F',
                border: '1px solid #FF5C93',
                borderRadius: '0.5rem',
                color: '#fff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: number) => [`${value.toLocaleString()}`, '']}
              cursor={{ stroke: '#FF5C93', strokeWidth: 1 }}
            />
            <Legend 
              iconType="circle"
              wrapperStyle={{ color: '#9CA3AF' }}
            />
            <Line 
              type="monotone"
              name="Engagement"
              dataKey="engagement"
              stroke="#FF5C93"
              strokeWidth={2}
              dot={{ fill: '#FF5C93', r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: '#FF5C93', strokeWidth: 2 }}
            />
            <Line 
              type="monotone"
              name="Conversion"
              dataKey="conversion"
              stroke="#00E396"
              strokeWidth={2}
              dot={{ fill: '#00E396', r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: '#00E396', strokeWidth: 2 }}
            />
            <Line 
              type="monotone"
              name="Retention"
              dataKey="retention"
              stroke="#FEB019"
              strokeWidth={2}
              dot={{ fill: '#FEB019', r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: '#FEB019', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 