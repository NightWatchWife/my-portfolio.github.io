'use client'

import React from 'react';
import styled from 'styled-components';
import Button from './ui/Button';
import BackgroundPattern from './ui/BackgroundPattern';
import FeatureCard from './common/FeatureCard';

const HeroSection = styled.section`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 1rem;
    position: relative;
    z-index: 10;
`;

const Content = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.5rem;
    
    @media (min-width: 768px) {
        font-size: 6rem;
    }
    
    @media (min-width: 1024px) {
        font-size: 8rem;
    }
`;

const Subtitle = styled.span`
    display: block;
    font-size: 1.5rem;
    font-weight: 400;
    color: #6b7280;
    margin-top: 0.5rem;
    
    @media (min-width: 768px) {
        font-size: 2rem;
    }
    
    @media (min-width: 1024px) {
        font-size: 2.5rem;
    }
`;

const Description = styled.p`
    font-size: 1.25rem;
    color: #374151;
    margin-bottom: 2rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    
    @media (min-width: 640px) {
        flex-direction: row;
    }
`;

const FeaturesGrid = styled.div`
    display: grid;
    gap: 2rem;
    max-width: 80rem;
    margin: 0 auto;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Hero: React.FC = () => {
    return (
        <HeroSection>
            <BackgroundPattern variant="dots" />

            <Container>
                <Content>
                    <Title>
                        Per mil
                        <Subtitle>
                            (NightWatchWife)
                        </Subtitle>
                    </Title>
                    <Description>
                        SESとして6年間、主にC#/.NETとOracleを用いた業務系Webアプリ開発を行ってきました。
                        API連携、クラウドストレージ連携、Excelデータ処理の機能開発に強みがあります。
                    </Description>
                    <ButtonGroup>
                        <Button href="#projects" variant="primary" size="lg">
                            プロジェクトを見る
                        </Button>
                        <Button href="#contact" variant="outline" size="lg">
                            お問い合わせ
                        </Button>
                    </ButtonGroup>
                </Content>

                <FeaturesGrid>
                    <FeatureCard
                        icon="💼"
                        title="業務系Webアプリ開発"
                        description="C#/.NETとOracleを使用した企業向けシステム開発の経験"
                    />
                    <FeatureCard
                        icon="🔗"
                        title="API・クラウド連携"
                        description="REST API、クラウドストレージ連携機能の開発実績"
                    />
                    <FeatureCard
                        icon="📊"
                        title="データ処理・分析"
                        description="Excel大量データ処理、業務効率化システムの構築"
                    />
                </FeaturesGrid>
            </Container>
        </HeroSection>
    );
}; 