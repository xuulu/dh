'use client'

import type {TypeApi} from "@/type/api"

export default function ItemApiSite(
    {items}: { items: TypeApi[] }
) {

    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">
                {
                    items.map((item, index) => (
                        <li className="list-row" key={index}>
                            <div>
                                <img
                                    src={item?.icon || 'https://www.qvqa.cn/favicon.ico'}
                                    alt={item.title}
                                    loading="lazy"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <div>
                                    {item.title}
                                </div>
                                <div className="text-xs uppercase font-semibold opacity-60">
                                    {item.description}
                                </div>

                                <div>
                                    {item.tags?.map((tag, index) => (
                                        <>
                                            <div
                                                key={index}
                                                className="badge badge-outline badge-accent badge-xs"
                                            >
                                                {tag}
                                            </div>
                                            &nbsp;
                                        </>
                                    ))}
                                </div>


                            </div>
                            <button
                                className="btn btn-soft btn-info"
                                onClick={() => {
                                    window.open(`${item.url}`)
                                }}>
                                跳转
                            </button>
                            {/*<button className="btn btn-soft btn-secondary"></button>*/}

                        </li>
                    ))}
            </ul>
        </>
    )
}





