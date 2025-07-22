import type {Metadata} from "next"
import {apis} from "@/apis"
import ItemsComponent from "@/components/items";
import {config} from "@/config";

const found = config.url.find(
    item => item.path === '/aps');


export const metadata: Metadata = {
    title: found?.title,
    description: found?.description,
};


export default async function Home() {
    const items = await apis()
    return (
        <>
            <ItemsComponent items={items}/>
        </>
    );
}


