import type {MetadataRoute} from 'next'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // disallow: '/private/',
        },
        sitemap: baseUrl + '/sitemap.xml',
    }
}