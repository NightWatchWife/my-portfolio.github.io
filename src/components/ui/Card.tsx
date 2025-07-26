'use client'

import React from 'react';
import styled from 'styled-components';

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'gradient' | 'glass';
    className?: string;
}

const StyledCard = styled.div<{
    $variant: 'default' | 'gradient' | 'glass';
}>`
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    ${props => {
        switch (props.$variant) {
            case 'default':
                return `
                    background: white;
                    border: 1px solid #e5e7eb;
                `;
            case 'gradient':
                return `
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                `;
            case 'glass':
                return `
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                `;
            default:
                return '';
        }
    }}
`;

export default function Card({
    children,
    variant = 'default',
    className = ''
}: CardProps) {
    return (
        <StyledCard $variant={variant} className={className}>
            {children}
        </StyledCard>
    );
} 