'use client';
import React, {useState} from 'react';

// 定义组件的 props 类型，包含回调函数
interface ResponsiveSearchBarProps {
    onSearch?: (searchTerm: string) => void;
}

const ResponsiveSearchBar: React.FC<ResponsiveSearchBarProps> = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchTerm); // 调用回调函数
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 w-full max-w-3xl mx-auto">
            <div className="relative flex-grow w-full sm:w-auto">
                <input
                    type="text"
                    placeholder="搜索..."
                    className="input input-bordered w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            <button
                className="btn btn-primary btn-sm sm:btn-md rounded-full px-4"
                onClick={handleSearch}
            >
                搜索
            </button>


        </div>
    );
};

export default ResponsiveSearchBar;
