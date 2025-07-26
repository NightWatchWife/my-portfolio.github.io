'use client'

import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid #e5e7eb;
    z-index: 50;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
`;

const Logo = styled.div`
    flex-shrink: 0;
`;

const LogoText = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    color: #2563eb;
`;

const DesktopNav = styled.nav`
    display: none;
    
    @media (min-width: 768px) {
        display: flex;
        gap: 2rem;
    }
`;

const NavLink = styled.a`
    color: #374151;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
        color: #2563eb;
    }
`;

const MobileMenuButton = styled.button`
    display: block;
    color: #374151;
    transition: color 0.3s ease;
    
    &:hover {
        color: #2563eb;
    }
    
    &:focus {
        outline: none;
        color: #2563eb;
    }
    
    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
    display: ${props => props.$isOpen ? 'block' : 'none'};
    
    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileMenuContent = styled.div`
    padding: 0 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.75rem;
    background: white;
    border-top: 1px solid #e5e7eb;
`;

const MobileNavLink = styled.a`
    display: block;
    padding: 0.75rem 1rem;
    color: #374151;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
        color: #2563eb;
    }
`;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer>
            <Container>
                <HeaderContent>
                    <Logo>
                        <LogoText>Portfolio</LogoText>
                    </Logo>

                    <DesktopNav>
                        <NavLink href="#home">ホーム</NavLink>
                        <NavLink href="#about">私について</NavLink>
                        <NavLink href="#projects">プロジェクト</NavLink>
                        <NavLink href="#skills">スキル</NavLink>
                        <NavLink href="#contact">お問い合わせ</NavLink>
                    </DesktopNav>

                    <MobileMenuButton onClick={toggleMenu}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </MobileMenuButton>
                </HeaderContent>

                <MobileMenu $isOpen={isMenuOpen}>
                    <MobileMenuContent>
                        <MobileNavLink href="#home">ホーム</MobileNavLink>
                        <MobileNavLink href="#about">私について</MobileNavLink>
                        <MobileNavLink href="#projects">プロジェクト</MobileNavLink>
                        <MobileNavLink href="#skills">スキル</MobileNavLink>
                        <MobileNavLink href="#contact">お問い合わせ</MobileNavLink>
                    </MobileMenuContent>
                </MobileMenu>
            </Container>
        </HeaderContainer>
    );
} 