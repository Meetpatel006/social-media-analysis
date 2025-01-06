import { ReactNode } from 'react'
import { Tooltip } from './Tooltip'
import { InfoIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change?: string
  isPositive?: boolean
  icon?: ReactNode
  tooltip?: string
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  isPositive = true, 
  icon,
  tooltip
}: MetricCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-dark-purple via-dark-purple to-light-purple/5 p-6 rounded-xl border border-light-purple hover:border-pink/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">{title}</span>
          {tooltip && (
            <Tooltip content={tooltip}>
              <InfoIcon className="w-4 h-4 text-gray-400 hover:text-pink cursor-help" />
            </Tooltip>
          )}
        </div>
        {icon && (
          <div className="p-2 bg-background rounded-lg text-pink group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF3366] group-hover:via-[#FF66B2] group-hover:to-[#9F7AEA] transition-all">
          {value}
        </h3>
        {change && (
          <p className={`text-sm mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change} from last month
          </p>
        )}
      </div>
    </div>
  )
} 