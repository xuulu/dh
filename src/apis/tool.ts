import type {TypeApi} from "@/type/api"

// 工具
export const data:TypeApi[] = [
    {
        title: "AIchatOS2",
        url: "https://chat18.aichatos58.com/",
        icon: "https://chat18.aichatos58.com/pwa-192x192.png",
        description: "百度一下，你就知道",
        tags: ['免费ai'],
    },
    {
        title: "Json工具箱",
        url: "https://json.qvqa.cn",
        description: "免费的JSON在线工具箱，支持JSON格式化、验证、压缩和结构树查看。数据本地处理，安全可靠，无需注册即可使用。",
        tags: ['在线工具', 'json格式化'],
    },
    {
        title: "Html格式化",
        url: "https://www.toolhelper.cn/Format/Html?type=2",
        description: "此工具是一个 HTML 在线格式化工具，方便对 HTML 进行格式化和美化，让网页代码更清晰易读。",
        tags: ['在线工具', 'html格式化'],
    }
]




export default async function Tool() {
    return data
}


