// app/sitemap.ts
import {MetadataRoute} from "next";
import {config} from "@/config";

export const dynamic = 'force-static';

const baseUrl = config.baseUrl

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


