'use client'

import React from 'react';
import styled from 'styled-components';
import SectionHeader from './ui/SectionHeader';
import BackgroundPattern from './ui/BackgroundPattern';
import Card from './ui/Card';
import Button from './ui/Button';
import ContactInfo from './common/ContactInfo';
import SocialLinks from './common/SocialLinks';

const ContactSection = styled.section`
    padding: 5rem 0;
    background: white;
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

const ContentGrid = styled.div`
    max-width: 72rem;
    margin: 0 auto;
`;

const Grid = styled.div`
    display: grid;
    gap: 3rem;
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ContactCard = styled(Card)`
    padding: 2rem;
    height: 100%;
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 2rem;
`;

const ContactDivider = styled.div`
    border-top: 1px solid #e5e7eb;
    padding-top: 1.5rem;
`;

const SocialTitle = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const FormGroup = styled.div``;

const Label = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    &::placeholder {
        color: #9ca3af;
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
    min-height: 8rem;
    transition: all 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    &::placeholder {
        color: #9ca3af;
    }
`;

const AdditionalInfo = styled.div`
    margin-top: 3rem;
    text-align: center;
`;

const InfoCard = styled(Card)`
    padding: 2rem;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
`;

const InfoTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
`;

const InfoText = styled.p`
    color: #374151;
    margin-bottom: 1.5rem;
    line-height: 1.625;
`;

const InfoButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

export default function Contact() {
    const contactData = [
        {
            icon: "📧",
            title: "メール",
            value: "per.mil@example.com",
            color: "blue" as const
        },
        {
            icon: "📍",
            title: "所在地",
            value: "東京都",
            color: "green" as const
        },
        {
            icon: "📱",
            title: "電話",
            value: "080-XXXX-XXXX",
            color: "purple" as const
        }
    ];

    const socialData = [
        {
            name: "GitHub",
            url: "https://github.com/per-mil",
            icon: "🐙",
            bgColor: "#333",
            hoverColor: "#555"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/per-mil",
            icon: "💼",
            bgColor: "#0077b5",
            hoverColor: "#005885"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/per_mil",
            icon: "🐦",
            bgColor: "#1da1f2",
            hoverColor: "#0d8bd9"
        },
        {
            name: "Zenn",
            url: "https://zenn.dev/per_mil",
            icon: "📚",
            bgColor: "#3ea8ff",
            hoverColor: "#1e88e5"
        }
    ];

    return (
        <ContactSection>
            <BackgroundPattern variant="grid" />

            <Container>
                <SectionHeader
                    title="Contact"
                    subtitle="お問い合わせ・連絡先"
                    highlight="連絡"
                    className="text-center mb-16"
                />

                <ContentGrid>
                    <Grid>
                        {/* Contact Information */}
                        <div>
                            <ContactCard>
                                <CardTitle>連絡先情報</CardTitle>

                                <ContactInfo items={contactData} />

                                <ContactDivider>
                                    <SocialTitle>SNS・リンク</SocialTitle>
                                    <SocialLinks links={socialData} size="sm" />
                                </ContactDivider>
                            </ContactCard>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactCard>
                                <CardTitle>お問い合わせフォーム</CardTitle>

                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">お名前</Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="お名前を入力してください"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="email">メールアドレス</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="example@email.com"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="subject">件名</Label>
                                        <Input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            placeholder="お問い合わせの件名"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="message">メッセージ</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            placeholder="お問い合わせ内容を入力してください"
                                        />
                                    </FormGroup>

                                    <Button type="submit" variant="primary" size="lg" className="w-full">
                                        送信する
                                    </Button>
                                </Form>
                            </ContactCard>
                        </div>
                    </Grid>

                    {/* Additional Info */}
                    <AdditionalInfo>
                        <InfoCard>
                            <InfoTitle>お気軽にお問い合わせください</InfoTitle>
                            <InfoText>
                                プロジェクトのご相談、技術的な質問、お仕事のご依頼など、どんなことでもお気軽にお声がけください。
                                迅速にご返信いたします。
                            </InfoText>
                            <InfoButtonGroup>
                                <Button href="mailto:per.mil@example.com" variant="primary" size="md">
                                    メールで連絡
                                </Button>
                                <Button href="https://github.com/per-mil" variant="outline" size="md">
                                    GitHubを見る
                                </Button>
                            </InfoButtonGroup>
                        </InfoCard>
                    </AdditionalInfo>
                </ContentGrid>
            </Container>
        </ContactSection>
    );
} 