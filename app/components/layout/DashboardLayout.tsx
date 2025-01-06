import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import { Header } from '../shared/layout/Header'

interface DashboardLayoutProps {
  children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-16 min-h-screen">
        <Header />
        <main className="relative w-full overflow-x-hidden">
          <div className="container mx-auto p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout