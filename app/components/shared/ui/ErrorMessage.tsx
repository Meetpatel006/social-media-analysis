interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <p className="text-error mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-pink hover:bg-pink-dark rounded-lg text-white transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  )
} 