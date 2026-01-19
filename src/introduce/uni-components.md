# 组件库引入指南

如何在自己的项目中使用 cool-unix。

:::warning 注意事项
- 独立组件库版本可能不包含部分功能，例如：`canvas 绘制`、`震动`、`文件上传` 等特性，请根据实际需求评估使用（项目版请移步[快速开始](/src/introduce/quick.md)）。
:::

## 配置文件

首先全局安装

```shell
npm install -g @cool-vue/unix-cli
```

或

```shell
pnpm add -g @cool-vue/unix-cli
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
