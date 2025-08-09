import { Client } from '../types'

export const clients: Client[] = [
  {
    id: 1,
    name: 'EcoTech Solutions',
    stage: 'incorporation',
    type: 'product',
    status: 'Active',
    website: 'Building',
    revenue: '$0',
    incorporation: 'In Progress',
    brandGuide: 'Pending',
    websiteStatus: 'Design Phase',
    socialAccounts: { instagram: false, facebook: false, twitter: false },
    lastActive: '2 hours ago',
    nextSteps: 'Complete LLC filing, finalize logo concepts'
  },
  {
    id: 2,
    name: "Bella's Boutique",
    stage: 'live',
    type: 'ecommerce',
    status: 'Active',
    website: 'Live',
    revenue: '$2,340',
    incorporation: 'Complete',
    brandGuide: 'Complete',
    websiteStatus: 'Live',
    socialAccounts: { instagram: true, facebook: true, twitter: false },
    lastActive: '30 min ago',
    orders: 12,
    products: 34
  },
  {
    id: 3,
    name: 'Mindful Coaching',
    stage: 'branding',
    type: 'service',
    status: 'Active',
    website: 'Design',
    revenue: '$0',
    incorporation: 'Complete',
    brandGuide: 'In Review',
    websiteStatus: 'Wireframes',
    socialAccounts: { instagram: false, facebook: true, twitter: false },
    lastActive: '1 day ago',
    nextSteps: 'Brand guide approval, start website development'
  }
]
