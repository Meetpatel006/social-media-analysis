import { LangFlowResponse } from '../types/chat'

class ChatService {
  private readonly isDev = process.env.NODE_ENV === 'development'
  private readonly API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'
  private lastResponse: LangFlowResponse | null = null

  async sendMessage(message: string): Promise<any> {
    try {
      console.log('Sending message to:', `${this.API_URL}/api/analyze`)
      
      const response = await fetch(`${this.API_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://temp-1hgm.onrender.com'
        },
        body: JSON.stringify({ message }),
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin'
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Server response:', errorText)
        throw new Error(`Server error: ${response.status}`)
      }

      const data = await response.json()
      this.lastResponse = data
      return data
    } catch (error) {
      console.error('Error in chatService:', error)
      throw error
    }
  }

  getLastResponse(): LangFlowResponse | null {
    return this.lastResponse
  }
}

export const chatService = new ChatService()

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'

export async function sendChatMessage(message: string): Promise<any> {
  try {
    console.log('Sending message to:', `${API_URL}/api/analyze`)
    
    const response = await fetch(`${API_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ message }),
      mode: 'cors',
      credentials: 'omit'
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Server response:', errorText)
      throw new Error(`Server error: ${response.status}`)
    }

    const data = await response.json()
    console.log('Raw response:', data)
    return data
  } catch (error) {
    console.error('Error in chatService:', error)
    throw error
  }
} 