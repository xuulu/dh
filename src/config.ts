import {data as hot} from './apis/hot'
import {data as apiSite} from './apis/apiSite'
import {data as tool} from './apis/tool'


export const config = {
    title: "简心导航",  // 网站标题
    description: "本站主要提供各种网站导航，如：实用网站导航，实用接口导航，接口网站导航等",
    baseUrl: "https://nav.qvqa.cn", // 网站地址
    icons: [
        {
            url: "https://q.qlogo.cn/headimg_dl?dst_uin=1634964&spec=640&img_type=jpg",
            width: 640,
        },
        {
            url: "https://www.qvqa.cn/favicon.ico",
            type: "image/x-icon",
            sizes: "64x64"
        }
    ],  // 网站图标
    const:3,    // 首页每个类目显示的数量

    url: [
        {
            path: "/",
            title: "首页",
            description: "本站主要提供各种网站导航，如：实用网站导航，实用接口导航，接口网站导航等",
            list: []
        },
        {
            path: "/hot",
            title: "热门网站",
            description: "本页面主要提供常用网站的导航",
            list: hot
        },
        {
            path: "/tools",
            title: "实用工具",
            description: "本页面主要提供实用工具的导航",
            list: tool
        },
        {
            path: "/api-site",
            title: "API网站",
            description: "本页面主要提供API网站的导航",
            list: apiSite
        },

    ],


}


