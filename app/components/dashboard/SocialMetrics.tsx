'use client'

import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  Users,
  Heart,
  MessageSquare,
  Share2
} from 'lucide-react'

export function SocialMetrics() {
  const socialMetrics = [
    {
      platform: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      stats: [
        { label: 'Followers', value: '12.8K', icon: <Users className="w-4 h-4" /> },
        { label: 'Likes', value: '8.6K', icon: <Heart className="w-4 h-4" /> },
        { label: 'Comments', value: '1.2K', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'Shares', value: '2.4K', icon: <Share2 className="w-4 h-4" /> }
      ]
    },
    {
      platform: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      stats: [
        { label: 'Followers', value: '8.2K', icon: <Users className="w-4 h-4" /> },
        { label: 'Likes', value: '4.1K', icon: <Heart className="w-4 h-4" /> },
        { label: 'Comments', value: '952', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'Shares', value: '1.8K', icon: <Share2 className="w-4 h-4" /> }
      ]
    },
    {
      platform: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      stats: [
        { label: 'Followers', value: '5.6K', icon: <Users className="w-4 h-4" /> },
        { label: 'Likes', value: '3.2K', icon: <Heart className="w-4 h-4" /> },
        { label: 'Comments', value: '845', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'Shares', value: '1.2K', icon: <Share2 className="w-4 h-4" /> }
      ]
    },
    {
      platform: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      stats: [
        { label: 'Followers', value: '15.4K', icon: <Users className="w-4 h-4" /> },
        { label: 'Likes', value: '9.8K', icon: <Heart className="w-4 h-4" /> },
        { label: 'Comments', value: '2.1K', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'Shares', value: '3.6K', icon: <Share2 className="w-4 h-4" /> }
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {socialMetrics.map((platform, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 p-6 rounded-xl border border-light-purple hover:border-pink/50 transition-all duration-300 group"
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="p-2 bg-background rounded-lg text-pink group-hover:scale-110 transition-transform">
              {platform.icon}
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-light-purple transition-all">{platform.platform}</h3>
          </div>
          <div className="space-y-3">
            {platform.stats.map((stat, statIndex) => (
              <div key={statIndex} className="flex items-center justify-between group/stat">
                <div className="flex items-center space-x-2 text-gray-400 group-hover/stat:text-pink transition-colors">
                  {stat.icon}
                  <span>{stat.label}</span>
                </div>
                <span className="text-white font-medium group-hover/stat:text-transparent group-hover/stat:bg-clip-text group-hover/stat:bg-gradient-to-r group-hover/stat:from-pink group-hover/stat:to-light-purple transition-all">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 