export interface Message {
  id: string
  type: 'user' | 'assistant' | 'error'
  content: string
  sender: 'user' | 'assistant' | 'system'
  timestamp: Date
}

export interface ChatResponse {
  session_id: string
  outputs: Array<{
    inputs: {
      input_value: string
    }
    outputs: Array<{
      results: {
        message: {
          timestamp: string
          sender: string
          sender_name: string
          session_id: string
          text: string
          files: any[]
          error: boolean
          edit: boolean
          properties: {
            text_color: string
            background_color: string
            edited: boolean
            source: {
              id: string
              display_name: string
              source: string
            }
            icon: string
            allow_markdown: boolean
            state: string
            targets: any[]
          }
          category: string
          content_blocks?: Array<{
            title: string
            contents: Array<{
              type: string
              duration: number
              header: {
                title: string
                icon: string
              }
              text: string
            }>
            allow_markdown: boolean
            media_url: null | string
          }>
          id: string
          flow_id: string
        }
      }
      artifacts: {
        message: string
        sender: string
        sender_name: string
        files: any[]
        type: string
      }
    }>
  }>
} 
