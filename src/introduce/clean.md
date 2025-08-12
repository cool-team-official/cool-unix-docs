# 纯净版本

纯净版本主要是为了让开发者在不依赖 `cool-admin` 的情况下也能使用 `cool-unix` 框架的功能，使其能够独立运行并发挥最大价值。

## 配置

版本 `8.0.7` 以下的需要将依赖 `@cool-vue/vite-plugin` 更新至 `8.2.6` 以上

```cmd
pnpm add @cool-vue/vite-plugin@8.2.6
```

版本 `8.0.7` 后默认开启 `clean`

```ts
// vite.config.ts
{
  cool({
    type: "uniapp-x",
    proxy,
    tailwind: {
      enable: true,
    },
    eps: {
      dist: ".cool",
    },
    clean: true, //【重要】是否纯净版
  });
}
```

## 优势

- 可以灵活对接企业内部其他技术栈的后端服务,如 `Java`、`PHP` 等
- 支持集成第三方请求库和插件,提供更多技术选择

## 注意事项

:::warning 提示
如果不使用相关页面和组件,可以直接删除或忽略以下配置要求
:::

- 缺少了 `eps` 类型生成
- 缺少了 `service` 层的请求类型定义
- 需要自行实现页面请求逻辑,包括登录、用户信息修改等功能
- 需要调整 `/cool/service/index.ts` 中的 `Response` 返回值类型
- 需要修改 `/cool/store/user.ts` 中的用户信息类型定义,包括:
  - token 处理
  - 登录状态判断
  - 用户详情
  - 信息更新等
- 字典(`dict`)功能不可用
- 需要调整 `/router/index.ts` 中的路由导航逻辑
- 需要重新实现 `/cool/upload/index.ts` 中的文件上传功能
