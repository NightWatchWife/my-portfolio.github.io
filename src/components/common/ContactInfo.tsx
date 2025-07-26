import React from 'react'

interface ContactItem {
    icon: React.ReactNode
    title: string
    value: string
    color: 'blue' | 'green' | 'purple'
}

interface ContactInfoProps {
    items: ContactItem[]
    className?: string
}

export default function ContactInfo({ items, className = '' }: ContactInfoProps) {
    const getColorClasses = (color: string) => {
        switch (color) {
            case "blue":
                return "bg-blue-500"
            case "green":
                return "bg-green-500"
            case "purple":
                return "bg-purple-500"
            default:
                return "bg-blue-500"
        }
    }

    return (
        <div className={`space-y-8 ${className}`}>
            {items.map((item, index) => (
                <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-16 h-16 ${getColorClasses(item.color)} rounded-2xl flex items-center justify-center mr-6`}>
                        <div className="w-8 h-8 text-white">
                            {item.icon}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-lg">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    )
} 