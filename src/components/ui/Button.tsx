'use client'

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

const StyledButton = styled.button<{
    $variant: 'primary' | 'secondary' | 'outline';
    $size: 'sm' | 'md' | 'lg';
    $disabled?: boolean;
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: all 0.3s ease;
    transform: scale(1);
    cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.$disabled ? 0.5 : 1};
    
    &:hover {
        transform: ${props => props.$disabled ? 'scale(1)' : 'scale(1.05)'};
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }

    ${props => {
        switch (props.$variant) {
            case 'primary':
                return `
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    color: white;
                    border: none;
                    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
                    
                    &:hover {
                        background: linear-gradient(135deg, #1d4ed8, #1e40af);
                        box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
                    }
                `;
            case 'secondary':
                return `
                    background: white;
                    color: #1f2937;
                    border: none;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    
                    &:hover {
                        background: #3b82f6;
                        color: white;
                        box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
                    }
                `;
            case 'outline':
                return `
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                    
                    &:hover {
                        background: white;
                        color: #1f2937;
                    }
                `;
            default:
                return '';
        }
    }}

    ${props => {
        switch (props.$size) {
            case 'sm':
                return `
                    padding: 0.5rem 1rem;
                    font-size: 0.875rem;
                    border-radius: 0.5rem;
                `;
            case 'md':
                return `
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    border-radius: 0.75rem;
                `;
            case 'lg':
                return `
                    padding: 1rem 2rem;
                    font-size: 1.125rem;
                    border-radius: 1rem;
                `;
            default:
                return '';
        }
    }}
`;

const StyledLink = styled.a<{
    $variant: 'primary' | 'secondary' | 'outline';
    $size: 'sm' | 'md' | 'lg';
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: all 0.3s ease;
    transform: scale(1);
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }

    ${props => {
        switch (props.$variant) {
            case 'primary':
                return `
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    color: white;
                    border: none;
                    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
                    
                    &:hover {
                        background: linear-gradient(135deg, #1d4ed8, #1e40af);
                        box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
                    }
                `;
            case 'secondary':
                return `
                    background: white;
                    color: #1f2937;
                    border: none;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    
                    &:hover {
                        background: #3b82f6;
                        color: white;
                        box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
                    }
                `;
            case 'outline':
                return `
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                    
                    &:hover {
                        background: white;
                        color: #1f2937;
                    }
                `;
            default:
                return '';
        }
    }}

    ${props => {
        switch (props.$size) {
            case 'sm':
                return `
                    padding: 0.5rem 1rem;
                    font-size: 0.875rem;
                    border-radius: 0.5rem;
                `;
            case 'md':
                return `
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    border-radius: 0.75rem;
                `;
            case 'lg':
                return `
                    padding: 1rem 2rem;
                    font-size: 1.125rem;
                    border-radius: 1rem;
                `;
            default:
                return '';
        }
    }}
`;

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    type = 'button',
    disabled = false
}: ButtonProps) {
    if (href) {
        return (
            <StyledLink
                href={href}
                $variant={variant}
                $size={size}
                className={className}
            >
                {children}
            </StyledLink>
        );
    }

    return (
        <StyledButton
            type={type}
            onClick={onClick}
            $disabled={disabled}
            $variant={variant}
            $size={size}
            className={className}
        >
            {children}
        </StyledButton>
    );
} 