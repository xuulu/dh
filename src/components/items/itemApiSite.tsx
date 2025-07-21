'use client'
import type {TypeApiSite} from "@/type/api"
import {config} from "@/config";

export default function ItemApiSite({items}: { items: TypeApiSite[] }) {

    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">
                {items.map((item, index) => (
                    <li className="list-row" key={index}>
                        <div>
                            <img
                                src={item.icon}
                                alt={item.title}
                                loading="lazy"
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

