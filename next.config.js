/** @type {import('next').NextConfig} */

const repo = 'clinica-estetica-premium'
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? basePath : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? basePath : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
