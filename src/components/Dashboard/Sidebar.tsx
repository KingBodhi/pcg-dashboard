import React from 'react'
import { Building2, Users, Globe, Calendar, CreditCard, Package, Settings } from 'lucide-react'

interface NavItem {
  id: string
  name: string
  icon: React.ElementType
  count?: number
}

export default function Sidebar({ active, onChange, open }: { active: string, onChange: (s: string) => void, open: boolean }) {
  const nav: NavItem[] = [
    { id: 'pipeline', name: 'Client Pipeline', icon: Users, count: 3 },
    { id: 'websites', name: 'Website Builder', icon: Globe, count: 1 },
    { id: 'social', name: 'Social Scheduler', icon: Calendar, count: 8 },
    { id: 'analytics', name: 'Brand Analytics', icon: Building2 },
    { id: 'payments', name: 'Payments & Orders', icon: CreditCard, count: 5 },
    { id: 'fulfillment', name: 'Fulfillment', icon: Package, count: 3 },
    { id: 'settings', name: 'Settings', icon: Settings }
  ]

  return (
    <aside className={`${open ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Building2 size={16} className="text-white" />
          </div>
          {open && <h2 className="font-bold text-xl text-gray-800">StartupLaunch</h2>}
        </div>
      </div>
      <nav className="p-4 space-y-2">
        {nav.map(item => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${active === item.id ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              <Icon size={20} />
              {open && (
                <>
                  <span className="flex-1 text-left">{item.name}</span>
                  {item.count && (
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {item.count}
                    </span>
                  )}
                </>
              )}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
