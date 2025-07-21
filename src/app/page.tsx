import {apis,apiSite} from "@/apis"

export default async function Home() {
    const a = await apis().then(res => res.length)
    const b = await apiSite().then(res => res.length)


    return (
        <>
            <h1 className="text-3xl font-bold color-[red]">↖ 点击左上角查看</h1>
            <br/>

            <h1>统计数据：</h1>

            <br/>

            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                <div className="stat">
                    <div className="stat-title">api数量</div>
                    <div className="stat-value">{a}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">api网站数量</div>
                    <div className="stat-value">{b}</div>
                </div>
            </div>
        </>
    );
}


