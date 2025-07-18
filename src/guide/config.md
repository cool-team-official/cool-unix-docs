# 配置管理

本文档介绍如何配置应用的基础信息、环境设置和代理服务等核心功能。

## 概览

配置系统采用环境分离的设计模式，支持开发环境和生产环境的独立配置，确保应用在不同环境下的稳定运行。

### 主要特性

- 🔧 **环境自动切换**: 根据 `NODE_ENV` 自动选择对应环境配置
- 🌐 **代理服务支持**: 内置 H5 端代理配置，解决跨域问题
- 📱 **多端适配**: 支持小程序、H5 等不同平台的配置差异
- 🎨 **主题控制**: 可配置暗色模式、TabBar 等 UI 相关设置

## 基础配置 (index)

主配置文件定义了应用的核心参数和环境切换逻辑。

```ts
import { isMp } from "@/cool";
import { dev } from "./dev";
import { prod } from "./prod";

// 判断当前是否为开发环境
export const isDev = process.env.NODE_ENV == "development";

// 忽略 token 校验的接口路径
export const ignoreTokens: string[] = [];

// 配置类型定义
type Config = {
  name: string; // 应用名称
  version: string; // 应用版本号
  locale: string; // 国际化语言设置
  website: string; // 官方网站地址
  host: string; // 服务器主机地址
  baseUrl: string; // API 基础路径
  showDarkButton: boolean; // 是否显示暗色模式切换按钮
  isCustomTabBar: boolean; // 是否使用自定义 TabBar
  backTop: boolean; // 是否显示回到顶部按钮
};

// 应用配置导出
export const config = {
  name: "cool-unix",
  version: "1.0.0",
  locale: "zh-Hans",
  website: "https://cool-js.com",
  showDarkButton: isMp() ? false : true, // 小程序端隐藏暗色模式按钮
  isCustomTabBar: true,
  backTop: true,
  ...(isDev ? dev() : prod()), // 根据环境合并对应配置
} as Config;
```

### 配置说明

| 配置项           | 类型    | 说明                           | 默认值                  |
| ---------------- | ------- | ------------------------------ | ----------------------- |
| `name`           | string  | 应用名称，用于显示和标识       | "cool-unix"             |
| `version`        | string  | 应用版本号，建议遵循语义化版本 | "1.0.0"                 |
| `locale`         | string  | 国际化语言代码                 | "zh-Hans"               |
| `website`        | string  | 官方网站链接                   | "https://cool-js.com"   |
| `showDarkButton` | boolean | 暗色模式切换按钮显示控制       | 小程序:false, 其他:true |
| `isCustomTabBar` | boolean | 是否启用自定义底部导航栏       | true                    |
| `backTop`        | boolean | 回到顶部按钮显示控制           | true                    |

## 开发环境配置 (dev)

开发环境配置主要用于本地调试，支持代理服务和热重载等开发特性。

```ts
import { get } from "@/cool";
import { proxy, value } from "./proxy";

export const dev = () => {
  // 从代理配置中获取目标服务器地址
  const host = get(proxy, `${value}.target`) as string;

  let baseUrl: string;

  // 条件编译：H5 端使用代理路径
  // #ifdef H5
  baseUrl = `/${value}`;
  // #endif

  // 条件编译：非 H5 端直接使用服务器地址
  // #ifndef H5
  baseUrl = host + "";
  // #endif

  return {
    host, // 服务器主机地址
    baseUrl, // API 请求基础路径
  };
};
```

## 生产环境配置 (prod)

生产环境配置用于正式部署，确保应用在生产环境下的稳定性和安全性。

```ts
import { get } from "@/cool";
import { proxy } from "./proxy";

export const prod = () => {
  // 使用生产环境的服务器地址
  const host = get(proxy, `prod.target`) as string;

  let baseUrl: string;

  // 条件编译：H5 端使用标准 API 路径
  // #ifdef H5
  baseUrl = "/api";
  // #endif

  // 条件编译：非 H5 端使用完整服务器路径
  // #ifndef H5
  baseUrl = host + "/api";
  // #endif

  return {
    host, // 生产服务器地址
    baseUrl, // 生产环境 API 路径
  };
};
```

## 代理配置 (proxy)

代理配置主要用于 H5 端开发时解决跨域问题，支持多环境切换。

```ts
export const proxy = {
  // 开发环境代理（不可修改名称）
  dev: {
    target: "http://127.0.0.1:8001", // 目标服务器地址
    changeOrigin: true, // 是否改变请求源
    rewrite: (path: string) => path.replace("/dev", ""), // 路径重写规则
  },

  // 测试环境代理（可自定义）
  test: {
    target: "http://127.0.0.1:9001",
    changeOrigin: true,
    rewrite: (path: string) => path.replace("/test", ""),
  },

  // 生产环境代理（不可修改名称）
  prod: {
    target: "https://show.cool-admin.com",
    changeOrigin: true,
    rewrite: (path: string) => path.replace("/prod", "/api"),
  },
};

// 当前使用的代理环境
export const value = "dev";
```

### 代理规则说明

| 环境   | 代理路径  | 目标地址                      | 重写规则          |
| ------ | --------- | ----------------------------- | ----------------- |
| `dev`  | `/dev/*`  | `http://127.0.0.1:8001`       | 移除 `/dev` 前缀  |
| `test` | `/test/*` | `http://127.0.0.1:9001`       | 移除 `/test` 前缀 |
| `prod` | `/prod/*` | `https://show.cool-admin.com` | 替换为 `/api`     |
