export type MessageType = 'user' | 'assistant' | 'system' | 'error';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  sender: 'user' | 'assistant' | 'system';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[]
  isLoading: boolean
} 