import { Message } from '../../lib/api'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'

interface ChatMessageProps {
  message: Message
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const [isExpanded, setIsExpanded] = useState(true);
  
  const formatMetric = (text: string) => {
    const matches = text.match(/(.*?): (.*?) \((.*?)\)/);
    if (!matches) return text;
    
    const [_, metric, value, change] = matches;
    const isPositive = change.includes('↑');
    
    return (
      <div className="flex justify-between items-center py-1">
        <span className="font-medium">{metric}</span>
        <div>
          <span className="font-bold">{value}</span>
          <span className={`ml-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </span>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (isUser) {
      return <p className="whitespace-pre-wrap break-words">{message.content}</p>;
    }

    return (
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="text-xl font-bold mb-3 mt-2">{children}</h1>,
            h2: ({ children }) => <h2 className="text-lg font-semibold mb-2 mt-4">{children}</h2>,
            ul: ({ children }) => <ul className="space-y-1 my-2">{children}</ul>,
            li: ({ children }) => {
              const content = children?.toString() ?? '';
              if (content.includes(':') && (content.includes('↑') || content.includes('↓'))) {
                return <li className="list-none">{formatMetric(content)}</li>;
              }
              return <li className="list-disc ml-4">{children}</li>;
            },
            p: ({ children }) => <p className="my-2">{children}</p>,
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    );
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-lg p-4 ${
          isUser
            ? 'bg-blue-500 text-white'
            : message.type === 'error'
            ? 'bg-red-100 text-red-700'
            : 'bg-light-purple text-white'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}; 