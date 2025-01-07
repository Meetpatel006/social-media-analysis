'use client'

import { useState, useRef, useEffect } from 'react'
import type { Message, ChatResponse } from '@/lib/types/chat'
import { sendChatMessage } from '@/lib/api'
import { ChatMessage } from './ChatMessage'
import { LoadingDots } from '../shared/ui/LoadingDots'
import { toast } from 'react-hot-toast'

const extractResponseMessage = (data: ChatResponse): string => {
  const firstOutput = data.outputs?.[0]?.outputs?.[0];
  
  if (firstOutput?.artifacts?.message) {
    return firstOutput.artifacts.message;
  }
  if (firstOutput?.results?.message?.text) {
    return firstOutput.results.message.text;
  }
  
  throw new Error('Unable to extract message from response');
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  // Initial greeting message
  useEffect(() => {
    setMessages([{
      id: 'welcome',
      type: 'assistant',
      content: 'Hello! How can I help you analyze your social media data today?',
      sender: 'assistant',
      timestamp: new Date()
    }]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setError(null);
    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const data = await sendChatMessage(inputMessage.trim());
      const responseContent = extractResponseMessage(data);

      const assistantMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: responseContent,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages((prev: Message[]) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError(errorMessage);
      toast.error(errorMessage);

      const systemErrorMessage: Message = {
        id: Date.now().toString(),
        type: 'error',
        content: `I apologize, but I encountered an error: ${errorMessage}. Please try again.`,
        sender: 'system',
        timestamp: new Date()
      };
      setMessages((prev: Message[]) => [...prev, systemErrorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-dark-purple rounded-2xl">
      {/* Chat Header */}
      <div className="p-4 border-b border-light-purple">
        <h2 className="text-xl font-semibold text-white">Analytics Assistant</h2>
        <p className="text-sm text-gray-400">Ask me about your social media analytics</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message: Message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-light-purple text-gray-100 rounded-lg p-4">
              <LoadingDots />
            </div>
          </div>
        )}
        
        {error && (
          <div className="flex justify-center">
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="border-t border-light-purple p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-light-purple text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  )
} 