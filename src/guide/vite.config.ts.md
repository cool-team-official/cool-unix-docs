# Vite 构建配置

Cool Unix 基于 [Vite](https://cn.vitejs.dev/) 构建工具，提供快速的开发体验和高效的构建优化。本文档详细介绍项目的 Vite 配置选项和最佳实践。

## 🚀 核心特性

- **⚡ 极速构建** - 基于 ESBuild 的快速编译
- **🔄 热重载** - 开发时的即时更新体验
- **📦 代码分割** - 智能的代码分包策略
- **🎨 样式处理** - 集成 Tailwind CSS 和 PostCSS
- **🔌 插件生态** - 丰富的插件扩展能力

## ⚙️ 完整配置

```ts
import { defineConfig } from "vite";
import { cool } from "@cool-vue/unix";
import { proxy } from "./config/proxy";
import tailwindcss from "tailwindcss";
import { join } from "node:path";
import uni from "@dcloudio/vite-plugin-uni";

// 路径解析工具函数
const resolve = (dir: string) => join(__dirname, dir);

// 代理配置预处理
for (const i in proxy) {
	proxy[`/${i}/`] = proxy[i];
}

export default defineConfig({
	// 🔌 插件配置
	plugins: [
		// uni-app x 核心插件
		uni(),

		// Cool 框架插件
		cool({
			proxy // API 代理配置
		})
	],

	// 🌐 开发服务器配置
	server: {
		port: 9900, // 开发服务器端口
		proxy // API 代理设置
	},

	// 🎨 CSS 处理配置
	css: {
		postcss: {
			plugins: [
				// Tailwind CSS 处理
				tailwindcss({
					config: resolve("./tailwind.config.ts")
				})
			]
		}
	}
});
```

## 🔗 相关资源

- [Vite 官方文档](https://cn.vitejs.dev/)
