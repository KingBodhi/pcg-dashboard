import React, { useState } from 'react'
import Sidebar from './Sidebar'
import PipelineView from './PipelineView'
import WebsitesView from './WebsitesView'
import { Bell, Menu } from 'lucide-react'

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('pipeline')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderContent = () => {
    switch (activeTab) {
      case 'pipeline': return <PipelineView />
      case 'websites': return <WebsitesView />
      default: return <PipelineView />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar active={activeTab} onChange={setActiveTab} open={sidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
                <Menu size={20} />
              </button>
              <div className="text-sm text-gray-600">Managing clients • production-ready demo</div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium">Agency Admin</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
