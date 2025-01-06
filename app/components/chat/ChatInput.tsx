'use client'

import { useState } from 'react'

interface ChatInputProps {
  onSendMessage: (content: string) => void
  isLoading: boolean
}

export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    onSendMessage(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-light-purple">
      <div className="flex space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask about your analytics metrics..."
          disabled={isLoading}
          className="flex-1 bg-light-purple text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="bg-pink hover:bg-pink-dark text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </form>
  )
} 