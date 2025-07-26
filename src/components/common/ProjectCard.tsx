'use client'

import React from 'react'
import styled from 'styled-components'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    period: string
    githubUrl: string
    liveUrl?: string | null
    category: string
    icon: string
    featured?: boolean
    className?: string
}

const FeaturedCard = styled(Card)`
    overflow: hidden;
`;

const FeaturedGrid = styled.div`
    display: grid;
    gap: 0;
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const FeaturedImage = styled.div`
    position: relative;
    height: 24rem;
    background: linear-gradient(135deg, #2563eb 0%, #4338ca 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 1024px) {
        height: 100%;
    }
`;

const FeaturedIcon = styled.div`
    color: white;
    font-size: 6rem;
`;

const FeaturedBadge = styled.div`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
`;

const Badge = styled.span`
    background: white;
    color: #2563eb;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
`;

const FeaturedContent = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FeaturedTitle = styled.h3`
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
`;

const FeaturedDescription = styled.p`
    color: #4b5563;
    margin-bottom: 1.5rem;
    line-height: 1.625;
`;

const TechTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
`;

const TechTag = styled.span`
    padding: 0.5rem 1rem;
    background: #dbeafe;
    color: #1d4ed8;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
`;

const RegularCard = styled(Card)`
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-4px);
    }
`;

const RegularImage = styled.div`
    position: relative;
    height: 16rem;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RegularIcon = styled.div`
    color: white;
    font-size: 4rem;
`;

const CategoryBadge = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
`;

const CategoryTag = styled.span`
    background: white;
    color: #374151;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
`;

const RegularContent = styled.div`
    padding: 2rem;
`;

const RegularTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
    
    ${RegularCard}:hover & {
        color: #2563eb;
    }
`;

const RegularDescription = styled.p`
    color: #4b5563;
    margin-bottom: 1.5rem;
    line-height: 1.625;
`;

const RegularTechTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const RegularTechTag = styled.span`
    padding: 0.25rem 0.75rem;
    background: #f3f4f6;
    color: #374151;
    border-radius: 9999px;
    font-size: 0.875rem;
`;

const MoreTag = styled.span`
    padding: 0.25rem 0.75rem;
    background: #f3f4f6;
    color: #374151;
    border-radius: 9999px;
    font-size: 0.875rem;
`;

export default function ProjectCard({
    title,
    description,
    technologies,
    period,
    githubUrl,
    liveUrl,
    category,
    icon,
    featured = false,
    className = ''
}: ProjectCardProps) {
    if (featured) {
        return (
            <FeaturedCard className={className}>
                <FeaturedGrid>
                    <FeaturedImage>
                        <FeaturedIcon>{icon}</FeaturedIcon>
                        <FeaturedBadge>
                            <Badge>Featured Project</Badge>
                        </FeaturedBadge>
                    </FeaturedImage>

                    <FeaturedContent>
                        <FeaturedTitle>{title}</FeaturedTitle>
                        <FeaturedDescription>{description}</FeaturedDescription>

                        <div style={{ marginBottom: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
                            {period}
                        </div>

                        <TechTags>
                            {technologies.map((tech, index) => (
                                <TechTag key={index}>{tech}</TechTag>
                            ))}
                        </TechTags>

                        <ButtonGroup>
                            <Button href={githubUrl} variant="secondary" size="md" className="flex-1">
                                GitHub
                            </Button>
                            {liveUrl && (
                                <Button href={liveUrl} variant="primary" size="md" className="flex-1">
                                    ライブデモ
                                </Button>
                            )}
                        </ButtonGroup>
                    </FeaturedContent>
                </FeaturedGrid>
            </FeaturedCard>
        )
    }

    return (
        <RegularCard className={className}>
            <RegularImage>
                <RegularIcon>{icon}</RegularIcon>
                <CategoryBadge>
                    <CategoryTag>{category}</CategoryTag>
                </CategoryBadge>
            </RegularImage>

            <RegularContent>
                <RegularTitle>{title}</RegularTitle>
                <RegularDescription>{description}</RegularDescription>

                <div style={{ marginBottom: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
                    {period}
                </div>

                <RegularTechTags>
                    {technologies.slice(0, 3).map((tech, index) => (
                        <RegularTechTag key={index}>{tech}</RegularTechTag>
                    ))}
                    {technologies.length > 3 && (
                        <MoreTag>+{technologies.length - 3}</MoreTag>
                    )}
                </RegularTechTags>

                <ButtonGroup>
                    <Button href={githubUrl} variant="secondary" size="sm" className="flex-1">
                        GitHub
                    </Button>
                    {liveUrl && (
                        <Button href={liveUrl} variant="primary" size="sm" className="flex-1">
                            ライブデモ
                        </Button>
                    )}
                </ButtonGroup>
            </RegularContent>
        </RegularCard>
    )
} 