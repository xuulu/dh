import * as api from "@/apis";
import ItemsComponent from "@/components/items";
import SectionHeader from '@/components/SectionHeader';
import {config} from "@/config";

export default async function Home() {
    const count = config.count;

    // 动态获取数据
    const fetchData = async (path: string) => {
        const apiMap: Record<string, () => Promise<any>> = {
            "/site-navigate": () => api.siteNavigate(),
            "/apis": () => api.apis(),
            "/api-site": () => api.apiSite(),
        };

        return apiMap[path] ? await apiMap[path]().then((res) => res.slice(0, count)) : [];
    };

    // 预加载数据
    const dataPromises = config.url.map(({path}) => fetchData(path));

    const dataResults = await Promise.all(dataPromises);

    return (
        <>
            {config.url
                .map(({path, title}, index) => (
                    <div key={path}>
                        <br/>
                        <SectionHeader title={title} link={path}/>
                        <ItemsComponent items={dataResults[index]}/>
                    </div>
                ))}
        </>
    );
}
