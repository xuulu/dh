import type {TypeApi} from "@/type/api"

const data: TypeApi[] = [
    {
        title: '简心API',
        url: 'https://api.qvqa.cn/',
        email: '1634964@qq.com',
        icon: 'https://api.qvqa.cn/favicon.ico',
        description: '安全可靠的接口服务平台',
        tags: ['公益api'],
    },
    {
        title: '星之阁API',
        url: 'https://api.xingzhige.com/',
        email: '',
        icon: 'https://blog.xingzhige.com/image/Icon.png',
        description: '不要和你的努力说对不起，那样会多对不起你的努力啊！',
    },
    {
        title: '',
        url: '',
        email: '',
        icon: '',
        description: '',
    }
]




export default async function apiSite() {
    return data
}


