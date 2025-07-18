# Ctx 上下文对象

`Ctx` 是一个全局上下文对象，它在程序编译时自动读取项目的基础配置信息，并将这些配置统一暴露给开发者使用。通过 `Ctx` 对象，你可以轻松访问项目的页面配置、主题设置、导航栏配置等关键信息。

## 类型定义

```ts
export type Ctx = {
  /** 应用唯一标识符 */
  appid: string;
  /** 全局样式配置 */
  globalStyle: UTSJSONObject;
  /** 页面配置列表 */
  pages: Page[];
  /** uni-id 路由配置 */
  uniIdRouter: UTSJSONObject;
  /** 主题配置对象 */
  theme: UTSJSONObject;
  /** 底部导航栏配置 */
  tabBar: TabBar;
  /** 分包配置列表 */
  subPackages: SubPackage[];
  /** 安全字符映射表，用于特殊字符转义 */
  SAFE_CHAR_MAP_LOCALE: string[][];
};
```

## 配置字段说明

| 字段                   | 来源         | 说明                                               |
| ---------------------- | ------------ | -------------------------------------------------- |
| `appid`                | 项目配置     | 应用的唯一标识符                                   |
| `pages`                | `pages.json` | 页面路径配置列表，包含所有页面的路由信息           |
| `subPackages`          | `pages.json` | 分包配置，用于代码分割和按需加载                   |
| `tabBar`               | `pages.json` | 底部导航栏的配置信息                               |
| `globalStyle`          | `pages.json` | 全局页面样式配置                                   |
| `theme`                | `theme.json` | 主题相关配置，包含颜色、字体等样式变量             |
| `uniIdRouter`          | 项目配置     | uni-id 相关的路由配置                              |
| `SAFE_CHAR_MAP_LOCALE` | 内部生成     | 安全字符映射表，用于处理 JSON key 中的特殊符号转义 |

## 基础使用

### 导入和基本访问

```ts
import { ctx } from "@/cool";

// 获取应用 ID
console.log("App ID:", ctx.appid);

// 获取页面配置
console.log("Pages:", ctx.pages);

// 获取主题配置
console.log("Theme:", ctx.theme);
```
