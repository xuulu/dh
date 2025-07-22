import * as api from "@/apis"
import ItemsComponent from "@/components/items";
import SectionHeader from '@/components/SectionHeader'


export default async function Home() {
    const count = 3
    const tool = await api.tool().then((res) => res.slice(0, count))
    const apis = await api.apis().then((res) => res.slice(0, count))
    const apiSite = await api.apiSite().then((res) => res.slice(0, count))


    return (
        <>
            <br/>
            <SectionHeader title="热门工具" link="/tools"/>
            <ItemsComponent items={tool}/>

            <br/>
            <SectionHeader title="热门工具" link="/tools"/>
            <ItemsComponent items={apis}/>

            <br/>
            <SectionHeader title="热门工具" link="/tools"/>
            <ItemsComponent items={apiSite}/>

        </>
    );
}


