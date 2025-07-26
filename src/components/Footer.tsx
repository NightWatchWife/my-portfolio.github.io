'use client'

import React from 'react';
import styled from 'styled-components';
import BackgroundPattern from '@/components/ui/BackgroundPattern'
import SocialLinks from '@/components/common/SocialLinks'

const FooterContainer = styled.footer`
    background: #0f172a;
    color: white;
    position: relative;
    overflow: hidden;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
    z-index: 10;
`;

const FooterContent = styled.div`
    padding: 4rem 0;
`;

const Grid = styled.div`
    display: grid;
    gap: 3rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const BrandSection = styled.div`
    @media (min-width: 768px) {
        grid-column: span 2;
    }
`;

const BrandTitle = styled.h3`
    font-size: 1.875rem;
    font-weight: 700;
    color: #60a5fa;
    margin-bottom: 1.5rem;
`;

const BrandDescription = styled.p`
    color: #d1d5db;
    margin-bottom: 2rem;
    max-width: 28rem;
    line-height: 1.625;
`;

const SectionTitle = styled.h4`
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
`;

const LinkList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const LinkItem = styled.li`
    a {
        color: #d1d5db;
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
            color: #60a5fa;
        }
    }
`;

const ContactList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #d1d5db;
`;

const ContactItem = styled.li`
    display: flex;
    align-items: center;
`;

const ContactIcon = styled.svg`
    width: 12px;
    height: 12px;
    color: #60a5fa;
    margin-right: 0.5rem;
    flex-shrink: 0;
`;

const BottomBar = styled.div`
    border-top: 1px solid #1e293b;
    padding: 2rem 0;
`;

const BottomContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Copyright = styled.p`
    color: #9ca3af;
    font-size: 0.875rem;
    margin-bottom: 1rem;
    
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const BottomRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const BuiltWith = styled.p`
    color: #9ca3af;
    font-size: 0.875rem;
`;

const BottomLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

const BottomLink = styled.a`
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;
    
    &:hover {
        color: #60a5fa;
    }
`;

export default function Footer() {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/yourusername",
            icon: "🐙",
            bgColor: "#333",
            hoverColor: "#555"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/yourusername",
            icon: "💼",
            bgColor: "#0077b5",
            hoverColor: "#005885"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/yourusername",
            icon: "🐦",
            bgColor: "#1da1f2",
            hoverColor: "#0d8bd9"
        }
    ]

    return (
        <FooterContainer>
            <BackgroundPattern variant="grid" />

            <Container>
                <FooterContent>
                    <Grid>
                        {/* Brand */}
                        <BrandSection>
                            <BrandTitle>Portfolio</BrandTitle>
                            <BrandDescription>
                                フルスタック開発者として、最新の技術を活用して革新的なWebアプリケーションを開発しています。
                                お気軽にご連絡ください。
                            </BrandDescription>
                            <SocialLinks links={socialLinks} size="sm" />
                        </BrandSection>

                        {/* Quick Links */}
                        <div>
                            <SectionTitle>クイックリンク</SectionTitle>
                            <LinkList>
                                <LinkItem>
                                    <a href="#home">ホーム</a>
                                </LinkItem>
                                <LinkItem>
                                    <a href="#about">私について</a>
                                </LinkItem>
                                <LinkItem>
                                    <a href="#projects">プロジェクト</a>
                                </LinkItem>
                                <LinkItem>
                                    <a href="#skills">スキル</a>
                                </LinkItem>
                                <LinkItem>
                                    <a href="#contact">お問い合わせ</a>
                                </LinkItem>
                            </LinkList>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <SectionTitle>連絡先</SectionTitle>
                            <ContactList>
                                <ContactItem>
                                    <ContactIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </ContactIcon>
                                    your.email@example.com
                                </ContactItem>
                                <ContactItem>
                                    <ContactIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </ContactIcon>
                                    +81 90-XXXX-XXXX
                                </ContactItem>
                                <ContactItem>
                                    <ContactIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </ContactIcon>
                                    東京都, 日本
                                </ContactItem>
                            </ContactList>
                        </div>
                    </Grid>
                </FooterContent>

                {/* Bottom Bar */}
                <BottomBar>
                    <BottomContent>
                        <Copyright>
                            © 2024 Portfolio. All rights reserved.
                        </Copyright>
                        <BottomRight>
                            <BuiltWith>
                                Built with ❤️ using Next.js & Styled Components
                            </BuiltWith>
                            <BottomLinks>
                                <BottomLink href="#">プライバシーポリシー</BottomLink>
                                <BottomLink href="#">利用規約</BottomLink>
                            </BottomLinks>
                        </BottomRight>
                    </BottomContent>
                </BottomBar>
            </Container>
        </FooterContainer>
    )
} 