import type {Metadata} from "next";
import "./globals.css";
import Layout from "@/components/layout";
import {config} from "@/config";

export const metadata: Metadata = {
    title: {
        template: `%s | ${config.title}`,
        default: "简心导航",
    },
    description: config.description,
    openGraph: {
        title: {
            template: `%s | ${config.title}`,
            default: "简心导航",
        },
        description: "本站主要提供各种网站导航，如：实用网站导航，实用接口导航，接口网站导航等",
        url: config.baseUrl,
        locale: "zh-CN",
        type: "website",
        siteName: config.title,
        images: [
            {
                url: "https://q.qlogo.cn/headimg_dl?dst_uin=1634964&spec=640&img_type=jpg",
                width: 640,
            }
        ]
    },
    icons: config.icons,
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" data-theme="cupcake">
        <body>
        <Layout>{children}</Layout>
        </body>
        </html>
    );
}
