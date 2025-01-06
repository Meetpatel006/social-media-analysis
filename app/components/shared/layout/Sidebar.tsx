'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutDashboard, BarChart2, MessageSquare } from 'lucide-react'

function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navigationLinks = [
    {
      href: '/home',
      icon: <Home className="w-5 h-5" />,
      label: 'Home'
    },
    { 
      href: '/dashboard', 
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: 'Dashboard'
    },
    { 
      href: '/analytics', 
      icon: <BarChart2 className="w-5 h-5" />,
      label: 'Analytics'
    },
    { 
      href: '/chat', 
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'Chat'
    }
  ]

  return (
    <aside className="fixed w-16 bg-dark-purple border-r border-light-purple h-full">
      <div className="flex flex-col items-center py-6 h-full">
        {/* Navigation Icons */}
        <nav className="flex flex-col space-y-6">
          {navigationLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`p-2 rounded-lg transition-all ${
                isActive(link.href) 
                  ? 'bg-light-purple text-pink scale-110' 
                  : 'text-gray-400 hover:bg-light-purple/20 hover:text-pink hover:scale-110'
              }`}
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar 