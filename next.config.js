/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: isProd ? '/my-portfolio.github.io' : '',
    assetPrefix: isProd ? '/my-portfolio.github.io/' : '',
}

module.exports = nextConfig 