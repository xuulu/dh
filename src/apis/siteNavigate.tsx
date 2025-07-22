import type {TypeApi} from "@/type/api"


const data:TypeApi[] = [
    {
        title: "Curl转换编程语言代码",
        url: "https://curlconverter.com/",
        icon: "https://curlconverter.com/favicon.ico",
        description: "curl转python、php、node、go各种语言代码等",
        tags: ['curl转换'],
    },
    {
        title: "AItianhu",
        url: "https://zp65aw.aitianhu1.top/",
        icon: "https://zp65aw.aitianhu1.top/favicon.ico",
        description: "永久免费提供学习和测试，支持上下文，支持保存会话",
        tags: ['ai'],
    }
]




export default async function siteNavigate() {
    return data
}


