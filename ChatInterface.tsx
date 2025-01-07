'use client'

import { useState, useRef, useEffect } from 'react'
import type { Message } from '@/lib/types/chat'
import { sendChatMessage } from '@/lib/api'
import { ChatMessage } from './ChatMessage'
import { LoadingDots } from '../shared/ui/LoadingDots'
import { toast } from 'react-hot-toast'

const extractResponseMessage = (data: any): string => {
  // Try to extract message from different possible paths in the response
  if (data.outputs?.[0]?.outputs?.[0]?.artifacts?.message) {
    return data.outputs[0].outputs[0].artifacts.message;
  }
  if (data.outputs?.[0]?.outputs?.[0]?.results?.message?.text) {
    return data.outputs[0].outputs[0].results.message.text;
  }
  // Fallback to stringifying the entire response if we can't find the message
  return typeof data === 'object' ? JSON.stringify(data, null, 2) : String(data);
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    try {
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsLoading(true);

      const data = await sendChatMessage(inputMessage);
      
      // Extract the actual message from the complex response structure
      const responseContent = extractResponseMessage(data);

      const assistantMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: responseContent,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      toast.error(errorMessage);

      const systemErrorMessage: Message = {
        id: Date.now().toString(),
        type: 'error',
        content: `I apologize, but I encountered an error: ${errorMessage}. Please try again.`,
        sender: 'system',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, systemErrorMessage]);
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
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-light-purple text-gray-100 rounded-lg p-4">
              <LoadingDots />
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