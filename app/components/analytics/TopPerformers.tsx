'use client'

import { useQuery } from '@tanstack/react-query'
import { type TopPerformer, type ContentType, fetchTopPerformers } from '../../lib/api'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface TopPerformersProps {
  selectedContentType: ContentType
}

export function TopPerformers({ selectedContentType }: TopPerformersProps) {
  const { data: topPerformers, isLoading } = useQuery({
    queryKey: ['topPerformers', selectedContentType],
    queryFn: () => fetchTopPerformers(selectedContentType)
  })

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 rounded-xl p-6 border border-light-purple">
        <div className="h-6 bg-gray-700 rounded w-48 mb-6"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-light-purple/20 p-4 rounded-lg animate-pulse">
              <div className="h-5 bg-gray-700 rounded w-32 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!topPerformers) return null

  return (
    <div className="bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 rounded-xl p-6 border border-light-purple hover:border-pink/50 transition-all duration-300">
      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c2e59c] to-[#fe90af] animate-gradient-x mb-6">
        Top Performers
      </h3>
      <div className="space-y-4">
        {topPerformers.map((performer, index) => (
          <div
            key={index}
            className="bg-light-purple/20 p-4 rounded-lg hover:bg-light-purple/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-light-purple transition-all">
                {performer.title}
              </h4>
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${performer.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {performer.growth}
                </span>
                {performer.isPositive ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">{performer.metric}</span>
              <span className="text-white font-medium">{performer.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 