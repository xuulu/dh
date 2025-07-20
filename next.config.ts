import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */

    output: "export", // 静态导出
    reactStrictMode: true,  // 开启严格模式 用于开发阶段的错误检测，生命周期和副作用会运行两次

};

export default nextConfig;
