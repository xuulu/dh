import Header from './Header'
import Footer from './Footer'

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className="drawer-content flex flex-col min-h-screen w-full h-full">
                <Header/>
                {/*Header 内的代码为：*/}
                {/*    <header*/}
                {/*        className="navbar bg-base-100 shadow-smfixed top-0 left-0 right-0 z-50"*/}
                {/*    />*/}
                <main className="flex-1 w-full pt-16">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}

