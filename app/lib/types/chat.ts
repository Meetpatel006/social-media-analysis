export interface Message {
  id: string
  type: 'user' | 'assistant' | 'error'
  content: string
  sender: 'user' | 'assistant' | 'system'
  timestamp: Date
}

export interface ChatResponse {
  outputs: Array<{
    outputs: Array<{
      artifacts?: {
        message: string
      }
      results?: {
        message: {
          text: string
        }
      }
    }>
  }>
} 