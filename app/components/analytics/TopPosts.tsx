'use client'

import { useQuery } from '@tanstack/react-query'
import { type TopPost, type ContentType, fetchTopPosts } from '../../lib/api'
import { Heart, MessageSquare, Eye } from 'lucide-react'

interface TopPostsProps {
  selectedContentType: ContentType
}

export default function TopPosts({ selectedContentType }: TopPostsProps) {
  const { data: topPosts, isLoading } = useQuery<TopPost[]>({
    queryKey: ['topPosts', selectedContentType],
    queryFn: ({ queryKey }) => {
      const [, contentType] = queryKey as [string, ContentType]
      return fetchTopPosts(contentType)
    }
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

  if (!topPosts) return null

  return (
    <div className="bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 rounded-xl p-6 border border-light-purple hover:border-pink/50 transition-all duration-300">
      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c2e59c] to-[#fe90af] animate-gradient-x mb-6">
        Top Posts
      </h3>
      <div className="space-y-4">
        {topPosts.map((post, index) => (
          <div
            key={index}
            className="bg-light-purple/20 p-4 rounded-lg hover:bg-light-purple/30 transition-colors group"
          >
            <h4 className="font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-light-purple transition-all mb-3">
              {post.title}
            </h4>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>{post.likes.toLocaleString()}</span>
              </span>
              <span className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>{post.comments.toLocaleString()}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 