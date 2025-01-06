'use client'

import { usePathname } from 'next/navigation'
import { Sparkles, Bot, BarChart3, Rocket, BookOpen } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const pathname = usePathname()
  
  const getHeaderTitle = () => {
    switch(pathname) {
      case '/dashboard':
        return {
          icon: <Sparkles className="inline-block w-6 h-6 mr-2" />,
          title: "Social Studio",
          subtitle: "Your social media command center"
        }
      case '/chat':
        return {
          icon: <Bot className="inline-block w-6 h-6 mr-2" />,
          title: "Genius Partner",
          subtitle: "Smart insights, smarter decisions"
        }
      case '/analytics':
        return {
          icon: <BarChart3 className="inline-block w-6 h-6 mr-2" />,
          title: "Beautiful Insights",
          subtitle: "Numbers that tell your story"
        }
      case '/guide':
        return {
          icon: <BookOpen className="inline-block w-6 h-6 mr-2" />,
          title: "User Guide",
          subtitle: "Learn how to use our platform effectively"
        }
      default:
        return {
          icon: <Rocket className="inline-block w-6 h-6 mr-2" />,
          title: "Social Media Dashboard",
          subtitle: "Your journey to social success starts here"
        }
    }
  }

  const headerContent = getHeaderTitle()

  return (
    <header className="relative mt-[68px]">
      <div className="px-8 py-6">
        {/* Header Content */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <span className="text-white">{headerContent.icon}</span>
              <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                {headerContent.title}
              </span>
            </h1>
            <p className="text-gray-400 mt-1">{headerContent.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF3366]/50 via-[#FF66B2]/50 to-[#9F7AEA]/50"></div>
    </header>
  )
}