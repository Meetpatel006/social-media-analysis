export interface Message {
  id: string
  type: 'user' | 'assistant' | 'error'
  content: string
  sender: 'user' | 'assistant' | 'system'
  timestamp: Date
}

export interface LangFlowResponse {
  response: {
    message: string
    type: string
    data?: any
  }
  status: number
}

export interface WebSocketMessage {
  type: 'requestId' | 'response' | 'error'
  requestId?: string
  message?: string
} 