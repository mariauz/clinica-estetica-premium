import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://mariauz.github.io/clinica-estetica-premium/sitemap.xml',
  }
}
