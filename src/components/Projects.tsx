'use client'

import React from 'react';
import styled from 'styled-components';
import SectionHeader from './ui/SectionHeader';
import ProjectCard from './common/ProjectCard';
import Button from './ui/Button';

const ProjectsSection = styled.section`
    padding: 5rem 0;
    background: white;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const SectionContainer = styled.div`
    margin-bottom: 4rem;
`;

const SectionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 2rem;
    text-align: center;
`;

const ProjectsGrid = styled.div`
    display: grid;
    gap: 2rem;
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const OtherProjectsGrid = styled.div`
    display: grid;
    gap: 1.5rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ButtonContainer = styled.div`
    text-align: center;
`;

export default function Projects() {
    const featuredProjects = [
        {
            title: "業務効率化システム",
            description: "企業の業務プロセスを自動化し、生産性を向上させるWebアプリケーション。C#/.NETとOracleを使用し、複雑なデータ処理とレポート機能を実装。",
            technologies: ["C#", ".NET Framework", "Oracle", "JavaScript", "Bootstrap"],
            period: "2023年4月 - 2024年3月",
            icon: "⚡",
            featured: true,
            githubUrl: "https://github.com/per-mil/efficiency-system",
            liveUrl: "https://efficiency-system.example.com",
            category: "業務系Webアプリ"
        },
        {
            title: "API連携プラットフォーム",
            description: "複数の外部APIと連携し、データの統合・分析を行うプラットフォーム。RESTful APIの設計・実装、クラウドストレージ連携機能を含む。",
            technologies: ["C#", ".NET Core", "SQL Server", "Azure", "Swagger"],
            period: "2022年10月 - 2023年9月",
            icon: "🔗",
            featured: true,
            githubUrl: "https://github.com/per-mil/api-platform",
            liveUrl: "https://api-platform.example.com",
            category: "API・クラウド連携"
        }
    ];

    const otherProjects = [
        {
            title: "Excelデータ処理ツール",
            description: "大量のExcelデータを自動処理し、分析レポートを生成するツール。VBAとC#を組み合わせた効率的な処理を実現。",
            technologies: ["C#", "VBA", "Excel", "SQLite"],
            period: "2023年1月 - 2023年6月",
            icon: "📊",
            featured: false,
            githubUrl: "https://github.com/per-mil/excel-processor",
            liveUrl: null,
            category: "データ処理"
        },
        {
            title: "ポートフォリオサイト",
            description: "Next.jsとStyled Componentsを使用したモダンなポートフォリオサイト。レスポンシブデザインとアニメーションを実装。",
            technologies: ["Next.js", "TypeScript", "Styled Components", "GitHub Pages"],
            period: "2024年1月 - 現在",
            icon: "🎨",
            featured: false,
            githubUrl: "https://github.com/per-mil/portfolio",
            liveUrl: "https://per-mil.github.io",
            category: "Web開発"
        },
        {
            title: "タスク管理アプリ",
            description: "ReactとFirebaseを使用したリアルタイムタスク管理アプリケーション。チーム協働機能とプッシュ通知を実装。",
            technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
            period: "2023年7月 - 2023年12月",
            icon: "✅",
            featured: false,
            githubUrl: "https://github.com/per-mil/task-manager",
            liveUrl: "https://task-manager.example.com",
            category: "Webアプリ"
        },
        {
            title: "Pythonデータ分析ツール",
            description: "pandasとmatplotlibを使用したデータ分析・可視化ツール。CSV/Excelファイルの読み込みからグラフ生成まで自動化。",
            technologies: ["Python", "pandas", "matplotlib", "Jupyter"],
            period: "2022年4月 - 2022年9月",
            icon: "🐍",
            featured: false,
            githubUrl: "https://github.com/per-mil/data-analyzer",
            liveUrl: null,
            category: "データ分析"
        }
    ];

    return (
        <ProjectsSection>
            <Container>
                <SectionHeader
                    title="Projects"
                    subtitle="プロジェクト実績"
                    highlight="プロジェクト"
                    className="text-center mb-16"
                />

                <SectionContainer>
                    <SectionTitle>主要プロジェクト</SectionTitle>
                    <ProjectsGrid>
                        {featuredProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                period={project.period}
                                icon={project.icon}
                                featured={project.featured}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                                category={project.category}
                            />
                        ))}
                    </ProjectsGrid>
                </SectionContainer>

                <SectionContainer>
                    <SectionTitle>その他のプロジェクト</SectionTitle>
                    <OtherProjectsGrid>
                        {otherProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                period={project.period}
                                icon={project.icon}
                                featured={project.featured}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                                category={project.category}
                            />
                        ))}
                    </OtherProjectsGrid>
                </SectionContainer>

                <ButtonContainer>
                    <Button href="https://github.com/per-mil" variant="primary" size="lg">
                        GitHubで他のプロジェクトを見る
                    </Button>
                </ButtonContainer>
            </Container>
        </ProjectsSection>
    );
} 