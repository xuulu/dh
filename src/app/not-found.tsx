'use client'
import {useRouter} from 'next/navigation'

const App = () => {
    const router = useRouter();

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">404</h1>
                        <p className="py-6">
                            抱歉，您访问的页面不存在。
                        </p>
                        <button className="btn btn-primary" onClick={() => router.push("/")}>返回首页</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;