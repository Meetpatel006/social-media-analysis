'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutDashboard, BarChart2, MessageSquare, HelpCircle } from 'lucide-react'

function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navigationLinks = [
    {
      href: '/home',
      icon: <Home className="w-4 h-4" />,
      label: 'Home'
    },
    {
      href: '/dashboard',
      icon: <LayoutDashboard className="w-4 h-4" />,
      label: 'Dashboard'
    },
    {
      href: '/analytics',
      icon: <BarChart2 className="w-4 h-4" />,
      label: 'Analytics'
    },
    {
      href: '/chat',
      icon: <MessageSquare className="w-4 h-4" />,
      label: 'Chat'
    },
    {
      href: '/guide',
      icon: <HelpCircle className="w-4 h-4" />,
      label: 'User Guide'
    }
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient line at the top */}
      <div className="h-1 bg-gradient-to-r from-pink via-purple-500 to-blue-500" />
      
      <nav className="backdrop-blur-md bg-dark-purple/90 border-b border-white/10">
        <div className="h-16 max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/home" 
            className="flex items-center space-x-3 group"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-pink to-purple-500 rounded-lg shadow-lg 
                          group-hover:shadow-pink/25 transition-all duration-300" />
            <span className="text-white font-semibold text-lg hidden sm:inline 
                          bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
              Social Analytics
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm 
                          transition-all duration-300 hover:scale-105 ${
                  isActive(link.href)
                    ? 'text-white bg-gradient-to-r from-pink to-purple-500 shadow-lg shadow-pink/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{link.icon}</span>
                <span className="hidden md:inline relative z-10">{link.label}</span>
                {isActive(link.href) && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink to-purple-500 opacity-50 blur-sm" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar 