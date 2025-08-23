import type {Metadata} from "next";
import {config} from "@/config";
import ItemsComponent from "@/components/items";


type Props = {
    params: Promise<{ path: string }>
};

// 生成静态参数
export async function generateStaticParams() {
  // 过滤掉根路径，只返回其他路径，并移除前导斜杠
  const paths = config.url
    .filter(item => item.path !== '/')
    .map(item => ({
      path: item.path.slice(1) // 移除前导斜杠
    }));

  return paths;
}


export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {path} = await params
    const res = config.url
        .filter(item => item.path !== '/')
        .find(item => item.path.slice(1) === path);

    return {
        title: res?.title,
        description: res?.description,
        openGraph: {
            title: res?.title,
            description: res?.description,
            url: `${config.baseUrl}${path}`,
            locale: "zh-CN",
            type: "website",
            siteName: "简心导航",
            images: config.icons
        },
    };
}


export default async function Doc({params}: Props) {
    const {path} = await params
    const res = config.url.find(item => item.path.slice(1) === path)

    return (
        <>
            <ItemsComponent items={res?.list}/>
        </>
    );
}
