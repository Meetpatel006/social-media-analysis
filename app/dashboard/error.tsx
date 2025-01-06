'use client'

import { ErrorState } from '../components/ui/ErrorState'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#1c1c27] p-8">
      <ErrorState 
        message={error.message || 'Something went wrong'} 
        onRetry={reset}
      />
    </div>
  )
} 