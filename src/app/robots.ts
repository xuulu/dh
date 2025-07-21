import type {MetadataRoute} from 'next'
import {config} from "@/config";

export const dynamic = 'force-static';

const baseUrl = config.baseUrl

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