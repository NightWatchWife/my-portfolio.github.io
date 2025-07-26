'use client'

import React from 'react';
import styled from 'styled-components';
import SectionHeader from './ui/SectionHeader';
import FeatureCard from './common/FeatureCard';

const AboutSection = styled.section`
    padding: 5rem 0;
    background: #f9fafb;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const Content = styled.div`
    max-width: 64rem;
    margin: 0 auto;
`;

const ProfileCard = styled.div`
    background: white;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    padding: 2rem;
    margin-bottom: 3rem;
`;

const ProfileTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
`;

const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.125rem;
    color: #374151;
`;

const ProfileText = styled.p`
    margin: 0;
    line-height: 1.6;
`;

const FeaturesGrid = styled.div`
    display: grid;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const VisionCard = styled.div`
    margin-top: 3rem;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-radius: 1rem;
    padding: 2rem;
`;

const VisionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
`;

const VisionText = styled.p`
    font-size: 1.125rem;
    color: #374151;
    line-height: 1.75;
    margin: 0;
`;

export default function About() {
    const features = [
        {
            icon: "🎯",
            title: "問題解決力",
            description: "複雑な業務要件を分析し、効率的なソリューションを提案・実装"
        },
        {
            icon: "🔄",
            title: "継続的改善",
            description: "コードレビュー、リファクタリングを通じて品質向上を継続"
        },
        {
            icon: "🤝",
            title: "チーム協働",
            description: "開発チームとの密接な連携で、プロジェクトの成功に貢献"
        },
        {
            icon: "📚",
            title: "技術習得",
            description: "新しい技術の学習と実践を継続し、スキルアップを図る"
        }
    ];

    return (
        <AboutSection>
            <Container>
                <SectionHeader
                    title="About"
                    subtitle="私について"
                    highlight="私"
                    className="text-center mb-16"
                />

                <Content>
                    <ProfileCard>
                        <ProfileTitle>プロフィール</ProfileTitle>
                        <ProfileContent>
                            <ProfileText>
                                6年間のSES経験を通じて、主にC#/.NETとOracleを使用した業務系Webアプリケーションの開発に従事してきました。
                            </ProfileText>
                            <ProfileText>
                                企業の業務効率化を目的としたシステム開発を専門とし、API連携、クラウドストレージ連携、Excelデータ処理機能の開発に強みがあります。
                            </ProfileText>
                            <ProfileText>
                                開発チームとの協働経験も豊富で、要件定義から設計、実装、テスト、運用保守まで一貫して携わってきました。
                            </ProfileText>
                            <ProfileText>
                                常に新しい技術の習得に励み、より良いソリューションを提供することを心がけています。
                            </ProfileText>
                        </ProfileContent>
                    </ProfileCard>

                    <FeaturesGrid>
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </FeaturesGrid>

                    <VisionCard>
                        <VisionTitle>目指すエンジニア像</VisionTitle>
                        <VisionText>
                            技術力とコミュニケーション能力を兼ね備え、チーム全体の成長に貢献できるエンジニアを目指しています。
                            ユーザーのニーズを深く理解し、使いやすく保守性の高いシステムを構築することで、
                            企業のデジタル変革に寄与し、社会に価値のあるソリューションを提供したいと考えています。
                        </VisionText>
                    </VisionCard>
                </Content>
            </Container>
        </AboutSection>
    );
} 