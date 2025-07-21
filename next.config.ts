import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */

    output: "export", // 静态导出
    reactStrictMode: true,  // 开启严格模式 用于开发阶段的错误检测，生命周期和副作用会运行两次

    // 禁用webpack缓存
    webpack: (
        config,
        {dev}
    ) => {
        if (config.cache && !dev) {
            config.cache = Object.freeze({
                type: 'memory',
            })
        }
        // 重要提示：返回修改后的配置
        return config
    },

};

export default nextConfig;
