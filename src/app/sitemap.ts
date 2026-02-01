import { MetadataRoute } from 'next'
import { BLOG_POSTS, LOCATIONS, SERVICES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.localseoexpertskaty.com'

    // Static Pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/locations',
        '/locations/slovenia',
        '/services',
        '/pricing',
        '/audit',
        '/topical-map',
        '/case-studies',
        '/guides',
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: (path === '' ? 'daily' : 'weekly') as 'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'never',
        priority: path === '' ? 1.0 : 0.8,
    }))

    // Dynamic Blog Posts
    const blogPosts = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // Dynamic Service Pages
    const servicePages = SERVICES.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // Dynamic Location Pages (Country Hubs)
    const countryHubs = LOCATIONS.map((loc) => ({
        url: `${baseUrl}/locations/${loc.country.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic City Pages
    const cityPages: MetadataRoute.Sitemap = []
    LOCATIONS.forEach((loc) => {
        loc.cities.forEach((city) => {
            const citySlug = city.toLowerCase().replace(/\s+/g, '-')
            cityPages.push({
                url: `${baseUrl}/locations/${loc.country.toLowerCase()}/${citySlug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            })
        })
    })

    return [
        ...staticPages,
        ...blogPosts,
        ...servicePages,
        ...countryHubs,
        ...cityPages,
    ]
}
