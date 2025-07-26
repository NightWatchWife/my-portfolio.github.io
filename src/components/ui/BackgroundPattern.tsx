import React from 'react'

interface BackgroundPatternProps {
    variant?: 'dots' | 'grid' | 'none'
    className?: string
}

export default function BackgroundPattern({
    variant = 'dots',
    className = ''
}: BackgroundPatternProps) {
    const patterns = {
        dots: "data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        grid: "data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    }

    if (variant === 'none') {
        return null
    }

    return (
        <div
            className={`absolute inset-0 opacity-30 ${className}`}
            style={{ backgroundImage: `url('${patterns[variant]}')` }}
        />
    )
} 