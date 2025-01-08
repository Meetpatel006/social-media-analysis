import { Message } from '../../lib/types/chat'
import ReactMarkdown from 'react-markdown'

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user'
  const isError = message.type === 'error'

  // Format the content: replace single underscores with newlines and double underscores with bold
  const formatContent = (content: string) => {
    return content
      .replace(/_\s/g, '\n\n') // Replace underscore+space with double newline
      .replace(/_$/gm, '\n\n') // Replace underscore at end of line with double newline
      .replace(/\*\*/g, '__') // Replace ** with __ for bold
      .replace(/(?<!_)_(?!_)/g, '') // Remove single underscores that aren't part of __
      .trim()
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          isUser
            ? 'bg-blue-500 text-white'
            : isError
            ? 'bg-red-100 text-red-700'
            : 'bg-light-purple text-gray-100'
        }`}
      >
        <ReactMarkdown
          className="prose prose-invert max-w-none"
          components={{
            h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-xl font-bold mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
            p: ({ children }) => <p className="mb-4 whitespace-pre-line">{children}</p>,
            ul: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
            li: ({ children }) => <li className="mb-2">{children}</li>,
            strong: ({ children }) => <strong className="font-bold text-blue-200">{children}</strong>,
            em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-300 pl-4 my-4">{children}</blockquote>
            ),
            code: ({ children }) => (
              <code className="bg-gray-800 rounded px-1 py-0.5 text-sm">{children}</code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-800 rounded p-4 my-4 overflow-x-auto">{children}</pre>
            ),
          }}
        >
          {formatContent(message.content)}
        </ReactMarkdown>
      </div>
    </div>
  )
} 