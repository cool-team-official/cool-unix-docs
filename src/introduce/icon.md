# 图标配置指南

本框架支持主流图标库：[iconfont](https://www.iconfont.cn/) 和 [remixicon](https://remixicon.com/) 等，您可以轻松集成自定义图标。

## 1. 选择图标

### iconfont 图标库

在 iconfont 平台选择所需图标后，点击 `⬇️ 下载至本地` 按钮获取图标包。

<img src="/public/images/iconfont.jpg" />

### remixicon 图标库

在 remixicon 平台选择图标后，点击 `⬇️ Fonts` 按钮下载。

<img src="/public/images/remixicon.jpg" />

## 2. 安装图标包

将下载的 `zip` 压缩包放置到项目根目录的 `/icons/` 文件夹下。

:::warning 命名提示
命名 zip 文件，避免使用特殊符号（如 `+-=.\@`），建议格式：`icon-project.zip`
:::

## 3. 构建图标

在项目根目录打开终端，执行以下命令：

```shell
# 安装
pnpm add @cool-vue/unix-cli -g

# 执行
pnpm unix-icons
```

执行成功后，图标将自动集成到项目 `/.cool/icons` 中，无需引入可直接使用。

## 4. 使用图标

图标的 `name` 属性与图标库中的名称一一对应，使用时请注意：

- **避免命名冲突**：建议为自定义图标添加项目前缀
- **保持一致性**：统一图标命名规范

### 基础用法

```vue
<cl-icon name="home-line"></cl-icon>
```

### 自定义前缀示例

自定义前缀规则可以在各个图标库平台中配置。

```vue
<!-- 推荐：使用项目前缀避免冲突 -->
<cl-icon name="project-custom-icon"></cl-icon>
```
