

export const config = {
    title: "简心导航",
    description: "本站主要提供各种网站导航，如：实用网站导航，实用接口导航，接口网站导航等",
    baseUrl: "https://nav.qvqa.cn",
    icons: [
        {
            url: "https://www.qvqa.cn/favicon.ico",
            type: "image/x-icon",
            sizes: "64x64"
        }
    ],

    defaultAvatar: "http://q.qlogo.cn/headimg_dl?dst_uin=1634964&spec=640&img_type=jpg",   // 默认头像 导航列表的默认头像

    count:5,    // 首页默认显示的导航数量

    url: [
        {
            path: "/",
            title: "首页",
            description: "本站主要提供各种网站导航，如：实用网站导航，实用接口导航，接口网站导航等",
        },
        {
            path: "/site-navigate",
            title: "网站导航",
            description: "本页面主要提供各种实用性、功能性的网站导航",
        },
        {
            path: "/apis",
            title: "API接口",
            description: "本页面主要提供API接口的网站导航,提供各种实用api, 如一言api, 图片api, 作图api, 解析api, 翻译api等",
        },
        {
            path: "/api-site",
            title: "API网站",
            description: "本页面主要提供API网站的导航, 提供各种免费的api网站, 图片网站, 解析网站等",
        },

    ],


}


