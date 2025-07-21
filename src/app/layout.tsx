import type {Metadata} from "next";
import "./globals.css";
import Layout from "@/components/layout";
import {config} from "@/config";

export const metadata: Metadata = {
    title: {
        template: `%s | ${config.title}`,
        default: "hao123",
    },
    description: config.description,
    openGraph: {
        title: {
            template: `%s | ${config.title}`,
            default: "hao123",
        },
        description: "安全可靠的接口服务平台",
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
