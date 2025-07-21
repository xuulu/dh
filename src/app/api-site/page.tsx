import type {Metadata} from "next"
import {apiSite} from "@/apis"
import ItemApiSite from "@/components/items/itemApiSite"
import {config} from "@/config";

const found = config.url.find(
    item => item.path === '/api-site');


export const metadata: Metadata = {
    title: found?.title,
    description: found?.description,
};


export default async function Home() {
    const items = await apiSite()
    return (
        <>

            <ItemApiSite items={items}/>
        </>
    );
}


