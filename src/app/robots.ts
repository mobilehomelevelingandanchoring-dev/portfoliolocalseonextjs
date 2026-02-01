import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/wp-admin/', '/admin/', '/search/', '/api/', '/_next/'],
        },
        sitemap: 'https://www.localseoexpertskaty.com/sitemap.xml',
    }
}
