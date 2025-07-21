// app/sitemap.ts
import {MetadataRoute} from "next";

const baseUrl = process.env.NEXT_PUBLIC_API_URL


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: baseUrl + '/',
            lastModified: new Date(),
            changeFrequency: 'yearly',  // 更新频率（always/hourly/daily/weekly/monthly/yearly/never）。
            priority: 1,
        },

    ]
}


