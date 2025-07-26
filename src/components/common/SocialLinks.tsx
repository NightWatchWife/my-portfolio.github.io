'use client'

import React from 'react'
import styled from 'styled-components'

interface SocialLink {
    name: string
    url: string
    icon: React.ReactNode
    bgColor: string
    hoverColor: string
}

interface SocialLinksProps {
    links: SocialLink[]
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const SocialLinksContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const SocialLinkItem = styled.a<{
    $bgColor: string;
    $hoverColor: string;
    $size: 'sm' | 'md' | 'lg';
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    transform: scale(1);
    cursor: pointer;
    background-color: ${props => props.$bgColor};
    
    &:hover {
        transform: scale(1.1);
        background-color: ${props => props.$hoverColor};
    }
    
    ${props => {
        switch (props.$size) {
            case 'sm':
                return `
                    width: 2.5rem;
                    height: 2.5rem;
                `;
            case 'md':
                return `
                    width: 3rem;
                    height: 3rem;
                `;
            case 'lg':
                return `
                    width: 3.5rem;
                    height: 3.5rem;
                `;
            default:
                return '';
        }
    }}
`;

const IconWrapper = styled.div<{
    $size: 'sm' | 'md' | 'lg';
}>`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${props => {
        switch (props.$size) {
            case 'sm':
                return `
                    width: 1.25rem;
                    height: 1.25rem;
                    font-size: 1.25rem;
                `;
            case 'md':
                return `
                    width: 1.5rem;
                    height: 1.5rem;
                    font-size: 1.5rem;
                `;
            case 'lg':
                return `
                    width: 1.75rem;
                    height: 1.75rem;
                    font-size: 1.75rem;
                `;
            default:
                return '';
        }
    }}
`;

export default function SocialLinks({ links, size = 'md', className = '' }: SocialLinksProps) {
    return (
        <SocialLinksContainer className={className}>
            {links.map((link, index) => (
                <SocialLinkItem
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    $bgColor={link.bgColor}
                    $hoverColor={link.hoverColor}
                    $size={size}
                >
                    <IconWrapper $size={size}>
                        {link.icon}
                    </IconWrapper>
                </SocialLinkItem>
            ))}
        </SocialLinksContainer>
    )
} 