'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Section {
    id: string;
    title: string;
    isActive: boolean;
}

interface TableOfContentsProps {
    sections: Section[];
    className?: string;
}

const TOCContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    background: white;
    border-left: 1px solid #e5e7eb;
    z-index: 1000;
    overflow-y: auto;
    padding: 2rem 1.5rem;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 1024px) {
        width: 240px;
        padding: 1.5rem 1rem;
    }
    
    @media (max-width: 768px) {
        display: none;
    }
`;

const TOCHeader = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 2rem;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e5e7eb;
`;

const TOCList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const TOCItem = styled.li`
    margin-bottom: 0.75rem;
`;

const TOCLink = styled.a<{ $isActive: boolean }>`
    display: block;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: ${props => props.$isActive ? '600' : '400'};
    color: ${props => props.$isActive ? '#3b82f6' : '#6b7280'};
    background: ${props => props.$isActive ? '#eff6ff' : 'transparent'};
    border-left: ${props => props.$isActive ? '3px solid #3b82f6' : '3px solid transparent'};
    transition: all 0.2s ease;
    
    &:hover {
        background: ${props => props.$isActive ? '#eff6ff' : '#f3f4f6'};
        color: ${props => props.$isActive ? '#3b82f6' : '#374151'};
        transform: translateX(4px);
    }
`;

const TOCSection = styled.div`
    margin-bottom: 2rem;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

const TOCSectionTitle = styled.h4`
    font-size: 0.75rem;
    font-weight: 600;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
`;

export default function TableOfContents({ sections, className = '' }: TableOfContentsProps) {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            // 現在のセクションを判定
            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 初期化時にも実行

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const handleSmoothScroll = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <TOCContainer className={className}>
            <TOCHeader>目次</TOCHeader>

            <TOCSection>
                <TOCSectionTitle>ナビゲーション</TOCSectionTitle>
                <TOCList>
                    {sections.map((section) => (
                        <TOCItem key={section.id}>
                            <TOCLink
                                href={`#${section.id}`}
                                $isActive={activeSection === section.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSmoothScroll(section.id);
                                }}
                            >
                                {section.title}
                            </TOCLink>
                        </TOCItem>
                    ))}
                </TOCList>
            </TOCSection>
        </TOCContainer>
    );
} 