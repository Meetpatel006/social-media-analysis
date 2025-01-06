'use client'

import DashboardLayout from '../components/layout/DashboardLayout'
import { BarChart2, Zap, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      title: "View Analytics",
      description: "Check your latest performance metrics and insights",
      icon: <BarChart2 className="w-6 h-6 text-pink" />,
      link: "/analytics",
      cta: "Check Stats"
    },
    {
      title: "AI Assistant",
      description: "Get AI-powered recommendations for your content",
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      link: "/chat",
      cta: "Explore AI"
    },
    {
      title: "Quick Start",
      description: "Learn how to make the most of our platform",
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      link: "/guide",
      cta: "Take Tour"
    }
  ]

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
              Supercharge Your Social Media Presence
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            An all-in-one platform to analyze, optimize, and grow your social media presence with AI-powered insights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-dark-purple/50 backdrop-blur-sm p-8 rounded-2xl border border-light-purple hover:border-pink/50 transition-all duration-300"
            >
              <div className="p-3 bg-background rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF3366] group-hover:via-[#FF66B2] group-hover:to-[#9F7AEA]">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {feature.description}
              </p>
              <Link 
                href={feature.link}
                className="inline-flex items-center text-pink hover:text-pink-dark transition-colors"
              >
                {feature.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 