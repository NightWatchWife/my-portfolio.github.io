import type { Metadata, Viewport } from 'next'
import { StyledComponentsRegistry } from '@/lib/registry'
import '@/styles/globals.css'

export const metadata: Metadata = {
    title: 'My Portfolio',
    description: 'Welcome to my portfolio website showcasing my projects and skills.',
    keywords: ['portfolio', 'developer', 'web development', 'projects'],
    authors: [{ name: 'Your Name' }],
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body>
                <StyledComponentsRegistry>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    )
} 