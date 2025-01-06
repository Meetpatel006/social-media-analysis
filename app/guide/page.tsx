import DashboardLayout from '../components/layout/DashboardLayout'
import { Card } from '../components/ui/card'

export default function GuidePage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Card className="p-6 bg-dark-purple/50 backdrop-blur-sm shadow-xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  What This Platform Offers
                </span>
              </h3>
              <p className="text-gray-300">Your all-in-one solution to manage and grow your social media presence. Here's what you can do:</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>See all your important metrics at a glance</li>
                <li>Track total users, engagement, and conversion rates</li>
                <li>Monitor revenue and growth in real-time</li>
                <li>View your market reach and overall performance</li>
                <li>Check monthly trends through visual graphs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  Analytics
                </span>
              </h3>
              <p className="text-gray-300 mb-2">Dive deeper into your data to understand:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>User behavior and engagement patterns</li>
                <li>Revenue trends</li>
                <li>Growth metrics over time</li>
                <li>Performance insights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  Chat Interface
                </span>
              </h3>
              <p className="text-gray-300 mb-2">Get help when you need it:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Connect with our support team</li>
                <li>Ask questions about features</li>
                <li>Get guidance on using the platform</li>
                <li>Receive real-time assistance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  Key Benefits
                </span>
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Track all your social media metrics in one place</li>
                <li>Make data-driven decisions with easy-to-understand insights</li>
                <li>Monitor your growth with monthly comparisons</li>
                <li>Keep an eye on active users and engagement</li>
                <li>Measure your market reach effectively</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  Getting Started
                </span>
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Start with the Dashboard to get an overview of your performance</li>
                <li>Use Analytics when you want to dig deeper into specific metrics</li>
                <li>Need help? The Chat feature is always there to assist you</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <span className="bg-gradient-to-r from-[#FF3366] via-[#FF66B2] to-[#9F7AEA] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  Need More Help?
                </span>
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Use the Chat feature for immediate assistance</li>
                <li>Check our monthly insights for performance trends</li>
                <li>Monitor your growth rates to track progress</li>
              </ul>
              <p className="text-gray-300 mt-4 italic">Remember: All your metrics are updated regularly, and month-over-month comparisons help you track your progress effectively.</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
} 