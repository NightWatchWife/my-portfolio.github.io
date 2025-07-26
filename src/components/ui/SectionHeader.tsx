import React from 'react'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    highlight?: string
    className?: string
    titleSize?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
    textColor?: 'dark' | 'light'
}

export default function SectionHeader({
    title,
    subtitle,
    highlight,
    className = '',
    titleSize = '4xl',
    textColor = 'dark'
}: SectionHeaderProps) {
    const titleSizes = {
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl'
    }

    const textColors = {
        dark: {
            title: 'text-gray-900',
            subtitle: 'text-gray-600',
            highlight: 'text-blue-600'
        },
        light: {
            title: 'text-white',
            subtitle: 'text-gray-300',
            highlight: 'text-blue-400'
        }
    }

    const colors = textColors[textColor]

    return (
        <div className={`text-center mb-16 ${className}`}>
            <h2 className={`${titleSizes[titleSize]} font-bold ${colors.title} mb-6 leading-tight`}>
                {title}
                {highlight && (
                    <>
                        <br />
                        <span className={colors.highlight}>{highlight}</span>
                    </>
                )}
            </h2>
            {subtitle && (
                <p className={`text-xl ${colors.subtitle} max-w-3xl mx-auto leading-relaxed`}>
                    {subtitle}
                </p>
            )}
        </div>
    )
} 