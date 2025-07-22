import type {TypeApi} from "@/type/api"


const data:TypeApi[] = [
    {
        title: "Hitokoto - 一言",
        url: "https://hitokoto.cn/",
        icon: "https://hitokoto.cn/favicon.ico",
        description: "一言（Hitokoto）网创立于 2016 年，隶属于萌创团队，目前网站主要提供一句话服务。不论在哪里，总有那么几个句子能穿透你的心。把这些句子汇聚起来，传递更多的感动。简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。留下你所喜欢的那一句话，与大家分享，这就是一言存在的目的。",
        tags: ['一言'],
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

