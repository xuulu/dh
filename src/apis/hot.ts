import type {TypeApi} from "@/type/api"

// 热门网站
export const data:TypeApi[] = [
    {
        title: "谷歌",
        url: "https://www.google.com/",
        icon: "//www.gstatic.com/images/branding/searchlogo/ico/favicon.ico",
        description: "谷歌浏览器没有简介，就像梵高的家里也不会挂着星空。",
        tags: ['搜索引擎'],
    },
    {
        title: "必应",
        url: "https://www.bing.com/",
        icon: "https://www.bing.com/sa/simg/favicon-trans-bg-blue-mg-png.png",
        description: "使用 Microsoft 必应进行搜索，并利用 AI 的强大功能查找信息、浏览网页、图像、视频、地图等。为永远充满好奇心的人提供的智能搜索引擎。",
        tags: ['搜索引擎'],
    },
    {
        title: "GitHub",
        url: "https://github.com/",
        icon: "https://github.com/fluidicon.png",
        description: "",
        tags: ['代码仓库', '开源社区'],
    }
]




export default async function Tool() {
    return data
}


