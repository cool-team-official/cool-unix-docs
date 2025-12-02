# 组件库引入指南

如何在自己的项目中集成和使用 cool-unix。

## 注意事项

- 文档中涉及的 `t`、`$t`、`useUi`、`parseClass` 等方法，均需将导入路径修改为 `@/uni_modules/cool-unix`。

- 独立组件库版本可能不包含部分功能，例如：`canvas 绘制`、`震动`、`文件上传`、`dark:` 等特性，请根据实际需求评估使用。

- 插件已预留 `t` 方法，您可根据自身项目的多语言方案自定义该方法，无需修改组件内部代码。

- 插件同样预留了 `setTheme` 方法，便于您结合项目的深色模式需求灵活调用，实现主题切换。

## 导入插件

前往[插件市场](https://ext.dcloud.net.cn/plugin?id=24497)，点击“下载插件并导入 HBuilderX”按钮，将插件集成到您的项目中。

## 配置文件

首先全局安装

```shell
npm install -g @cool-vue/unix
```

然后在你的项目根目录下初始化配置

```shell
unix-init
```

执行完成后，所需的配置与依赖文件会被自动集成到你的项目中，无需手动操作。

如遇依赖未自动安装的情况，请手动执行以下命令

```shell
# 推荐使用 pnpm（更快，更节省空间）
pnpm i

# 或者使用其他包管理器
yarn
```

### 2. 启动项目

使用 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 打开项目，即可运行到各个平台
