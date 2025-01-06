'use client'

interface Metric {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: React.ReactNode
}

interface AnalyticsMetricsProps {
  metrics: Metric[]
}

export function AnalyticsMetrics({ metrics }: AnalyticsMetricsProps) {
  return (
    <>
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 rounded-xl p-6 border border-light-purple hover:border-pink/50 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-400 group-hover:text-pink transition-colors">{metric.title}</span>
            <div className="p-2 bg-background rounded-lg text-pink group-hover:scale-110 transition-transform">
              {metric.icon}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-light-purple transition-all">{metric.value}</h3>
            <p className={`text-sm mt-1 ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {metric.change} from last month
            </p>
          </div>
        </div>
      ))}
    </>
  )
} 