import type {TypeApi} from "@/type/api"


const data:TypeApi[] = [
    {
        title: "AIchatOS2",
        url: "https://chat18.aichatos58.com/",
        icon: "https://chat18.aichatos58.com/pwa-192x192.png",
        description: "百度一下，你就知道",
        tags: ['免费ai'],
    },
    {
        title: "百度",
        url: "https://www.baidu.com",
        description: "百度一下，你就知道",
        tags: ['公益api'],
    }
]




export default async function Tool() {
    return data
}


