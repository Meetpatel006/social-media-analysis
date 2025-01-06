export function LoadingState() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-pink/30 animate-spin">
          <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-pink border-t-transparent animate-spin" />
        </div>
      </div>
    </div>
  )
} 