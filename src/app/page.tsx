import ItemsComponent from "@/components/items";
import SectionHeader from '@/components/SectionHeader'
import {config} from "@/config";

export default async function Home() {
    const count = config.const

    // 动态处理所有分类
    const categories = await Promise.all(
        config.url
            .filter(item => item.path !== '/') // 排除首页
            .map(async (category) => {
                // 截取前 count 个项目
                category.list = category.list.slice(0, count)
                return {
                    ...category,
                };
            })
    );

    return (
        <>
            {categories.map((category, index) => (
                <div key={index}>
                    <br/>
                    <SectionHeader
                        title={category.title}
                        link={category.path}
                    />
                    <ItemsComponent items={category.list}/>
                </div>
            ))}
        </>
    );
}
