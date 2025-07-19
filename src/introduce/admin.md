# 对接 cool-admin

本脚手架基于成熟的 [cool-admin-vue](https://vue.cool-admin.com/) 前端框架和 [cool-admin-node](https://node.cool-admin.com/) 后端框架开发，为开发者提供了一套完整的企业级应用开发解决方案。

通过深度集成 cool-admin 生态系统，本项目不仅继承了其强大的功能特性，还针对移动端开发进行了专门优化，让您能够快速构建高质量的跨平台应用。

## 使用

默认情况下，系统连接的是官方提供的 `测试接口`。您可以从[源码](/src/introduce/src.md)中获取 `node` 或 `java` 版本的后端代码并在本地运行。运行后，只需在 `config/proxy.ts` 配置文件中将 `dev.target` 修改为 `http://127.0.0.1:8001` 或其他可访问的有效服务地址即可完成对接。

```ts
export const proxy = {
  dev: {
    // target: "https://show.cool-admin.com/api",
    target: "http://127.0.0.1:8001",
    changeOrigin: true,
    rewrite: (path: string) => path.replace("/dev", ""),
  },

  prod: {
    target: "https://show.cool-admin.com",
    changeOrigin: true,
    rewrite: (path: string) => path.replace("/prod", "/api"),
  },
};

export const value = "dev";
```

## 核心优势

### 🤖 AI 赋能开发

- **智能代码生成**：集成 [AI 编码](https://show.cool-admin.com/helper/ai-code) 功能，一键生成完整页面代码
- **提升开发效率**：减少重复性工作，让开发者专注于业务逻辑

### 🌐 多技术栈支持

- **后端选择灵活**：提供 `Node.js` 和 `Java` 两个版本的服务端实现
- **技术栈适配**：可根据团队技术栈选择最适合的后端方案

### 🔄 自动化集成

- **接口自动扫描**：自动扫描服务端接口，生成对应的请求方法
- **类型安全**：详见 [service 文档](/src/guide/cool/service.md) 了解更多
- **开发体验优化**：减少手动配置，提高开发效率

### 🛠 丰富的内置功能

- **文件管理**：集成完整的文件上传解决方案
- **用户系统**：提供完善的登录认证机制
- **支付集成**：支持多种支付方式对接
- **消息推送**：内置推送服务支持

### 🔌 生态系统支持

- **插件市场**：丰富的插件生态，访问 [插件市场](https://cool-js.com/plugin) 获取更多扩展
- **完整案例**：提供多个完整的项目案例供参考
- **社区支持**：活跃的开发者社区，问题解决更高效

### 方案三：纯净版本（即将推出）

对于希望使用更轻量级解决方案的开发者，我们计划在下一个版本中推出纯净版本，该版本将：

- 移除 cool-admin 特定的依赖
- 提供更灵活的配置选项
- 保持核心功能的同时减少包体积
- 支持更多自定义扩展
