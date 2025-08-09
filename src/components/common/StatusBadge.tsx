import React from 'react'

interface Props {
  children: React.ReactNode
  variant?: 'green' | 'blue' | 'yellow' | 'gray' | 'purple' | 'amber'
  className?: string
}

const map = {
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  gray: 'bg-gray-100 text-gray-800',
  purple: 'bg-purple-100 text-purple-800',
  amber: 'bg-amber-100 text-amber-800'
}

export default function StatusBadge({ children, variant = 'gray', className = '' }: Props) {
  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium inline-flex items-center ${map[variant]} ${className}`}>
      {children}
    </span>
  )
}
