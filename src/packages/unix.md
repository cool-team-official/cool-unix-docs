# @cool-vue/unix

Cool Unix 核心库 - 为 uniapp-x 项目提供的 Vite 插件集合。

## 简介

`@cool-vue/unix` 提供了一套完整的 Vite 插件，包括代码转换、上下文处理和 Tailwind CSS 支持。

## 安装

```bash
npm install @cool-vue/unix
```

或使用 pnpm：

```bash
pnpm add @cool-vue/unix
```

## 使用

在项目的 `vite.config.ts` 中引入并配置：

```typescript
import { cool } from "@cool-vue/unix";
import { defineConfig } from "vite";

// 代理配置
import { proxy } from "./config/proxy";
for (const i in proxy) {
	proxy[`/${i}/`] = proxy[i];
}

export default defineConfig({
	plugins: [
		cool({
			proxy
		})
	]
});
```
