'use client'

import React from 'react';
import styled from 'styled-components';
import SectionHeader from './ui/SectionHeader';
import SkillCard from './common/SkillCard';
import Card from './ui/Card';

const SkillsSection = styled.section`
    padding: 5rem 0;
    background: #f9fafb;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const SkillsGrid = styled.div`
    display: grid;
    gap: 2rem;
    margin-bottom: 3rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CertificationsContainer = styled.div`
    max-width: 64rem;
    margin: 0 auto;
`;

const CertificationsCard = styled(Card)`
    padding: 2rem;
`;

const CertificationsTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    text-align: center;
`;

const CertificationsGrid = styled.div`
    display: grid;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CertificationSection = styled.div``;

const SectionTitle = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
`;

const CertificationList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #374151;
`;

const CertificationItem = styled.li`
    padding: 0.5rem 0;
    border-bottom: 1px solid #e5e7eb;
    
    &:last-child {
        border-bottom: none;
    }
`;

export default function Skills() {
    const skillCategories = [
        {
            category: "バックエンド開発",
            skills: ["C#", ".NET Framework", ".NET Core", "ASP.NET", "Web API"],
            level: 90,
            color: "blue" as const
        },
        {
            category: "データベース",
            skills: ["Oracle", "SQL Server", "SQLite", "Entity Framework", "Dapper"],
            level: 85,
            color: "green" as const
        },
        {
            category: "フロントエンド開発",
            skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS"],
            level: 75,
            color: "purple" as const
        },
        {
            category: "その他の技術",
            skills: ["Python", "Git", "Docker", "Azure", "AWS"],
            level: 70,
            color: "purple" as const
        }
    ];

    const certifications = [
        "Oracle Certified Associate (OCA)",
        "Microsoft Certified: Azure Developer Associate",
        "AWS Certified Developer - Associate",
        "Google Cloud Professional Developer"
    ];

    const learning = [
        "TerraformによるIaC実践",
        "Kubernetesでのコンテナオーケストレーション",
        "GraphQL API設計・実装",
        "マイクロサービスアーキテクチャ"
    ];

    return (
        <SkillsSection>
            <Container>
                <SectionHeader
                    title="Skills"
                    subtitle="技術スキル・資格"
                    highlight="スキル"
                    className="text-center mb-16"
                />

                <SkillsGrid>
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={index}
                            category={category.category}
                            skills={category.skills}
                            level={category.level}
                            color={category.color}
                        />
                    ))}
                </SkillsGrid>

                <CertificationsContainer>
                    <CertificationsCard>
                        <CertificationsTitle>資格・学習状況</CertificationsTitle>
                        <CertificationsGrid>
                            <CertificationSection>
                                <SectionTitle>所持資格</SectionTitle>
                                <CertificationList>
                                    {certifications.map((cert, index) => (
                                        <CertificationItem key={index}>
                                            {cert}
                                        </CertificationItem>
                                    ))}
                                </CertificationList>
                            </CertificationSection>

                            <CertificationSection>
                                <SectionTitle>自己学習・アウトプット</SectionTitle>
                                <CertificationList>
                                    {learning.map((item, index) => (
                                        <CertificationItem key={index}>
                                            {item}
                                        </CertificationItem>
                                    ))}
                                </CertificationList>
                            </CertificationSection>
                        </CertificationsGrid>
                    </CertificationsCard>
                </CertificationsContainer>
            </Container>
        </SkillsSection>
    );
} 