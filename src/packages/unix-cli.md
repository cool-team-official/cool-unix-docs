# @cool-vue/unix-cli

Cool Unix 命令行工具集 - 为 uniapp-x 项目提供的开发工具。

## 简介

`@cool-vue/unix-cli` 提供了一组命令行工具，用于项目初始化、图标字体处理、UI 类型生成和国际化管理。

## 安装

全局安装：

```bash
npm install -g @cool-vue/unix-cli
```

或使用 pnpm：

```bash
pnpm add -g @cool-vue/unix-cli
```

## 命令

### unix-init - 项目初始化

从 GitHub 仓库下载并初始化项目模板。

```bash
unix-init
```

#### 功能

- 从配置的 GitHub 仓库下载项目模板
- 自动解压并复制必要的文件和目录
- 智能合并 `package.json` 依赖项
- 自动检测并使用包管理器安装依赖（pnpm > yarn > npm）
- 网络失败时提供手动操作指引

#### 复制的文件

- `vite.config.ts` - Vite 配置
- `tsconfig.json` - TypeScript 配置
- `theme.json` - 主题配置
- `tailwind.config.ts` - Tailwind 配置
- `package.json` - 依赖配置（合并模式）
- `.prettierrc` - 代码格式化配置
- `.cool/` - Cool 配置目录
- `.cursor/` - Cursor 编辑器配置
- `.vscode/` - VS Code 配置
- `config/` - 项目配置目录
- `static/empty/` - 静态资源
- `uni_modules/cool-ui/` - Cool UI 组件库

#### 特性

- 智能依赖合并：不会覆盖现有依赖，只添加新依赖
- 自动包管理器检测：按优先级使用 pnpm、yarn 或 npm
- 网络容错：GitHub 无法访问时提供详细的手动操作指引

---

### unix-icons - 图标字体处理

处理图标字体包，生成 TypeScript 类型定义和 SCSS 样式文件。

```bash
unix-icons
```

#### 功能

- 自动解压 `icons/` 目录下的 ZIP 文件
- 支持多种图标库格式（iconfont、remixicon 等）
- 从 JSON 或 CSS 文件提取图标数据
- 将 TTF 字体文件转换为 base64 编码
- 生成 TypeScript 类型定义文件
- 生成 SCSS 字体样式文件
- 自动生成统一的入口文件

#### 使用流程

1. 将图标字体 ZIP 包放入项目根目录的 `icons/` 文件夹

2. 运行命令：

    ```bash
    unix-icons
    ```

3. 生成的文件位于 `.cool/icons/` 目录：

    ```
    .cool/icons/
    ├── index.ts          # 统一导出
    ├── index.scss        # 统一样式
    ├── iconfont/
    │   ├── index.ts      # 图标映射
    │   └── index.scss    # 字体样式
    └── remixicon/
        ├── index.ts
        └── index.scss
    ```

#### 支持的图标库

- iconfont（阿里巴巴图标库）
- remixicon
- 其他符合标准格式的图标库

---

### unix-ui-types - UI 类型生成

生成 UI 组件的 TypeScript 类型定义。

```bash
unix-ui-types
```

#### 功能

- 扫描 UI 组件
- 生成 TypeScript 类型定义
- 提供类型提示和自动补全

---

### unix-i18n - 国际化处理

用于管理和处理项目的国际化文件，帮助实现多语言支持。详细说明请参见[国际化文档](/src/introduce/i18n.md)。
