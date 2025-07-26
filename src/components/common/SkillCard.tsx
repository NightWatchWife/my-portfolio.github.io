'use client'

import React from 'react'
import styled from 'styled-components'
import Card from '@/components/ui/Card'

interface SkillCardProps {
    category: string
    skills: string[]
    level: number
    color: 'blue' | 'green' | 'purple'
    className?: string
}

const SkillCardContainer = styled(Card)`
    padding: 2rem;
`;

const CardHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const IconContainer = styled.div<{ $color: 'blue' | 'green' | 'purple' }>`
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    
    ${props => {
        switch (props.$color) {
            case 'blue':
                return 'background: linear-gradient(135deg, #3b82f6, #1d4ed8);';
            case 'green':
                return 'background: linear-gradient(135deg, #10b981, #059669);';
            case 'purple':
                return 'background: linear-gradient(135deg, #8b5cf6, #7c3aed);';
            default:
                return 'background: linear-gradient(135deg, #3b82f6, #1d4ed8);';
        }
    }}
`;

const Icon = styled.span`
    font-size: 2rem;
    color: white;
`;

const CategoryTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
`;

const SkillsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const SkillName = styled.span`
    color: #374151;
    font-weight: 600;
    flex: 1;
`;

const SkillLevel = styled.div<{ $color: 'blue' | 'green' | 'purple' }>`
    width: 100%;
    height: 0.75rem;
    background: #e5e7eb;
    border-radius: 9999px;
    overflow: hidden;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 9999px;
        transition: width 1s ease-out;
        
        ${props => {
        switch (props.$color) {
            case 'blue':
                return 'background: linear-gradient(135deg, #3b82f6, #1d4ed8);';
            case 'green':
                return 'background: linear-gradient(135deg, #10b981, #059669);';
            case 'purple':
                return 'background: linear-gradient(135deg, #8b5cf6, #7c3aed);';
            default:
                return 'background: linear-gradient(135deg, #3b82f6, #1d4ed8);';
        }
    }}
    }
`;

const SkillLevelBar = styled.div<{ $level: number; $color: 'blue' | 'green' | 'purple' }>`
    width: ${props => props.$level}%;
    height: 100%;
    border-radius: 9999px;
    transition: width 1s ease-out;
    
    ${props => {
        switch (props.$color) {
            case 'blue':
                return 'background: linear-gradient(135deg, #3b82f6, #1d4ed8);';
            case 'green':
                return 'background: linear-gradient(135deg, #10b981, #059669);';
            case 'purple':
                return 'background: linear-gradient(135deg, #8b5cf6, #7c3aed);';
            default:
                return 'background: linear-gradient(135deg, #3b82f6, #1d4ed8);';
        }
    }}
`;

export default function SkillCard({
    category,
    skills,
    level,
    color,
    className = ''
}: SkillCardProps) {
    return (
        <SkillCardContainer className={className}>
            <CardHeader>
                <IconContainer $color={color}>
                    <Icon>💻</Icon>
                </IconContainer>
                <CategoryTitle>{category}</CategoryTitle>
            </CardHeader>

            <SkillsList>
                {skills.map((skill, index) => (
                    <SkillItem key={index}>
                        <SkillName>{skill}</SkillName>
                        <SkillLevel $color={color}>
                            <SkillLevelBar $level={level} $color={color} />
                        </SkillLevel>
                    </SkillItem>
                ))}
            </SkillsList>
        </SkillCardContainer>
    )
} 