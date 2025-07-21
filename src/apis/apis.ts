import type {TypeApis} from "@/type/api"


const data:TypeApis[] = [
    {
        title: "百度",
        url: "https://www.baidu.com",
        description: "百度一下，你就知道",
        tags: ['公益api'],
    },
    {
        title: "百度",
        url: "https://www.baidu.com",
        description: "百度一下，你就知道",
        tags: ['公益api'],
    }
]




export default async function Apis() {
    return data
}


