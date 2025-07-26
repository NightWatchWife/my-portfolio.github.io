import React from 'react'
import Card from '@/components/ui/Card'

interface FeatureCardProps {
    icon: string
    title: string
    description: string
    className?: string
}

export default function FeatureCard({
    icon,
    title,
    description,
    className = ''
}: FeatureCardProps) {
    return (
        <Card variant="gradient" className={`p-8 text-center ${className}`}>
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </Card>
    )
} 