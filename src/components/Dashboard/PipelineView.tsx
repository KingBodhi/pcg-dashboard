import React from 'react'
import { Plus, Building2, Palette, Globe } from 'lucide-react'
import StatusBadge from '../common/StatusBadge'
import { clients } from '../../data/clients'

export default function PipelineView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Client Pipeline</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus size={16} />
          Add New Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">Incorporation & Setup</h3>
          <div className="text-2xl font-bold text-yellow-900">{clients.filter(c => c.stage === 'incorporation').length}</div>
          <p className="text-sm text-yellow-700">LLC filing, legal setup</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Branding & Design</h3>
          <div className="text-2xl font-bold text-blue-900">{clients.filter(c => c.stage === 'branding').length}</div>
          <p className="text-sm text-blue-700">Brand guide, website design</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">Live & Growing</h3>
          <div className="text-2xl font-bold text-green-900">{clients.filter(c => c.stage === 'live').length}</div>
          <p className="text-sm text-green-700">Active campaigns, generating revenue</p>
        </div>
      </div>

      <div className="space-y-4">
        {clients.map(client => (
          <div key={client.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                  <div className="flex items-center gap-2">
                    <StatusBadge variant={client.type === 'product' ? 'purple' : client.type === 'ecommerce' ? 'green' : 'blue'}>
                      {client.type === 'product' ? 'Product' : client.type === 'ecommerce' ? 'E-commerce' : 'Service'}
                    </StatusBadge>
                    <StatusBadge variant={client.stage === 'incorporation' ? 'amber' : client.stage === 'branding' ? 'blue' : 'green'}>
                      {client.stage === 'incorporation' ? 'Setup Phase' : client.stage === 'branding' ? 'Design Phase' : 'Live'}
                    </StatusBadge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">{client.revenue}</div>
                <div className="text-sm text-gray-500">Monthly Revenue</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className={`inline-flex px-2 py-1 text-xs rounded-full ${client.incorporation === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  <Building2 size={12} className="mr-1" />
                  {client.incorporation}
                </div>
                <div className="text-xs text-gray-500 mt-1">Incorporation</div>
              </div>
              <div className="text-center">
                <div className={`inline-flex px-2 py-1 text-xs rounded-full ${client.brandGuide === 'Complete' ? 'bg-green-100 text-green-800' : client.brandGuide === 'In Review' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                  <Palette size={12} className="mr-1" />
                  {client.brandGuide}
                </div>
                <div className="text-xs text-gray-500 mt-1">Brand Guide</div>
              </div>
              <div className="text-center">
                <div className={`inline-flex px-2 py-1 text-xs rounded-full ${client.websiteStatus === 'Live' ? 'bg-green-100 text-green-800' : client.websiteStatus === 'Design Phase' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                  <Globe size={12} className="mr-1" />
                  {client.websiteStatus}
                </div>
                <div className="text-xs text-gray-500 mt-1">Website</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-1">
                  <div className={`p-1 rounded ${client.socialAccounts.instagram ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-400'}`}>IG</div>
                  <div className={`p-1 rounded ${client.socialAccounts.facebook ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>FB</div>
                  <div className={`p-1 rounded ${client.socialAccounts.twitter ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-400'}`}>TW</div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Social Media</div>
              </div>
            </div>

            {client.nextSteps && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                <div className="text-sm font-medium text-amber-800 mb-1">Next Steps:</div>
                <div className="text-sm text-amber-700">{client.nextSteps}</div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">Last active: {client.lastActive}</div>
              <div className="flex gap-2">
                <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-100 transition-colors">Manage Client</button>
                <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
