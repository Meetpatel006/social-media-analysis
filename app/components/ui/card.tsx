import { cn } from '../../lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('rounded-lg border border-light-purple shadow-sm', className)}>
      {children}
    </div>
  )
} 