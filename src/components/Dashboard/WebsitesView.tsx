import React from 'react'
import { Eye } from 'lucide-react'
import { clients } from '../../data/clients'

export default function WebsitesView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Website Builder</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          New Website Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {clients.map(client => (
          <div key={client.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${client.websiteStatus === 'Live' ? 'bg-green-100 text-green-800' : client.websiteStatus === 'Design Phase' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                {client.websiteStatus}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium capitalize">{client.type} {client.type === 'ecommerce' ? 'Store' : client.type === 'product' ? 'Landing Page' : 'Portfolio'}</span>
              </div>
              {client.type === 'ecommerce' && (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Products:</span>
                    <span className="font-medium">{client.products || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payment Processing:</span>
                    <span className="text-green-600 font-medium">✓ Enabled</span>
                  </div>
                </>
              )}
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Domain:</span>
                <span className="font-medium">{client.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors">Edit Website</button>
              {client.websiteStatus === 'Live' && (
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                  <Eye size={14} />
                  View Live
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
