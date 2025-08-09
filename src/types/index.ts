export type ClientStage = 'incorporation' | 'branding' | 'live'

export interface Client {
  id: number
  name: string
  stage: ClientStage
  type: 'product' | 'ecommerce' | 'service'
  status: string
  website: string
  revenue: string
  incorporation: string
  brandGuide: string
  websiteStatus: string
  socialAccounts: {
    instagram: boolean
    facebook: boolean
    twitter: boolean
  }
  lastActive: string
  nextSteps?: string
  orders?: number
  products?: number
}
