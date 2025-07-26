'use client'

import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import TableOfContents from '@/components/ui/TableOfContents'
import styled from 'styled-components'

const sections = [
    { id: 'hero', title: 'ホーム', isActive: false },
    { id: 'about', title: '私について', isActive: false },
    { id: 'projects', title: 'プロジェクト', isActive: false },
    { id: 'skills', title: 'スキル', isActive: false },
    { id: 'contact', title: 'お問い合わせ', isActive: false }
];

const MainContainer = styled.main`
    margin-right: 280px;
    
    @media (max-width: 1024px) {
        margin-right: 240px;
    }
    
    @media (max-width: 768px) {
        margin-right: 0;
    }
`;

export default function Home() {
    return (
        <>
            <TableOfContents sections={sections} />
            <MainContainer>
                <section id="hero">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <Footer />
            </MainContainer>
        </>
    )
} 