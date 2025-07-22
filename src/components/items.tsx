'use client'
import type { TypeApi } from "@/type/api";
import SearchBar from "./SearchBar";
import { useRef, useState } from "react";
import {usePathname} from "next/navigation";
import {config} from "@/config";

export default function ItemApiSite(
    { items }: { items: TypeApi[] }
) {
    const initialData = useRef(items);
    const [searchResults, setSearchResults] = useState<TypeApi[]>(items);

    const pathname = usePathname();

    const handleSearch = (searchTerm: string) => {
        if (searchTerm.trim() === "") {
            setSearchResults(initialData.current);
        } else {
            const filtered = initialData.current.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
            );
            setSearchResults(filtered);
        }
    };

    return (
        <>
            {pathname !== '/' && (
                <SearchBar onSearch={handleSearch} />
            )}

            <ul className="list bg-base-100 rounded-box shadow-md">
                {searchResults.map((item, index) => (
                    <li className="list-row" key={index}>
                        <div>
                            <img
                                src={item?.icon || config.defaultAvatar}
                                alt={item.title}
                                loading="lazy"
                                width={64}
                                height={64}
                            />
                        </div>
                        <div>
                            <div>{item.title}</div>
                            <div className="text-xs uppercase font-semibold opacity-60 line-clamp-2">
                                {item.description}
                            </div>
                            <div>
                                {item.tags?.map((tag, index) => (
                                    <span key={index}>
                                        <div className="badge badge-outline badge-accent badge-xs">
                                            {tag}
                                        </div>
                                        &nbsp;
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button
                            className="btn btn-soft btn-info"
                            onClick={() => window.open(item.url, '_blank')}
                        >
                            跳转
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
