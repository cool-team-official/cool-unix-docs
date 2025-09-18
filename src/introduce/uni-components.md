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

打开目录 `uni_modules/cool-unix/配置文件`

- 将 `uni_modules/cool-unix` 目录复制到你的项目的 `uni_modules/` 文件夹下。

- 将 `package.json` 文件复制到项目根目录。

- 在 `main.ts` 文件中引入相关代码。

- 在 `App.uvue` 文件中引入相关代码。

- 将 `vite.config.ts` 文件复制到项目根目录。

- 将 `tailwind.config.ts` 文件复制到项目根目录。

#### 没有使用 `vscode | cursor` 编辑器则忽略以下

- 将 `tsconfig.json` 文件复制到项目根目录。

- 将 `settings.json` 目录复制到项目 `.vscode` 目录中。

## 运行

### 1. 安装依赖

进入项目根目录，安装项目依赖：

```shell
# 推荐使用 pnpm（更快，更节省空间）
pnpm i

# 或者使用其他包管理器
yarn
```

### 2. 启动项目

使用 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 打开项目，即可运行到各个平台
