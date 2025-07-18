# Image 图片

`cl-image` 组件是基于 uni-app 原生 `image` 组件封装的增强版图片组件

## 参数

| 参数                   | 说明               | 类型                        | 可选值 | 默认值       |
| ---------------------- | ------------------ | --------------------------- | ------ | ------------ |
| pt                     | 样式穿透配置       | [PassThrough](#passthrough) |        |              |
| src                    | 图片资源地址       | string                      |        |              |
| [mode](#mode-裁剪模式) | 图片裁剪、缩放模式 | string                      |        | "aspectFill" |
| border                 | 是否显示边框       | boolean                     |        | false        |
| preview                | 是否启用预览功能   | boolean                     |        | false        |
| preview-list           | 预览图片列表       | string[]                    |        | []           |
| height                 | 图片高度           | string \| number            |        | 120          |
| width                  | 图片宽度           | string \| number            |        | 120          |
| showLoading            | 是否显示加载状态   | boolean                     |        | false        |
| lazyLoad               | 是否启用懒加载     | boolean                     |        | false        |
| fadeShow               | 是否启用淡入动画   | boolean                     |        | false        |
| webp                   | 是否解码 webp 格式 | boolean                     |        | false        |
| showMenuByLongpress    | 是否长按显示菜单   | boolean                     |        | false        |

### 支持的图片格式

- **Web 平台**：支持的图片格式因浏览器而异，具体兼容性可查询 [caniuse](https://caniuse.com/)
- **小程序平台**：支持的图片格式与浏览器类似，但由于不同小程序平台的 webview 版本差异，建议查阅对应小程序平台的图片组件文档。注意：webp 格式在不同小程序平台的支持策略不同，部分平台需要开启 webp 属性，部分平台仅支持来自服务器的 webp 格式
- **鸿蒙 HarmonyOS NEXT 平台**：请参考官方文档了解支持的图片格式
- **原生 App 平台**（Android 和 iOS）支持以下格式：
  - bmp
  - gif
  - ico
  - jpg
  - png
  - webp
  - heic（iOS 原生支持，Android 10+ 支持）
  - tif（仅 iOS 支持，Android 不支持）

### 图片资源路径说明

本地图片资源需放置在 `/static` 目录下。由于 uni-app/uni-app x 编译时仅会将 `/static` 目录下的静态资源复制到应用中，因此 `src` 属性必须指向 `/static` 目录下的文件。

### mode 裁剪模式详解

- **scaleToFill**：不保持纵横比缩放图片，使图片宽高完全拉伸至填满容器
- **aspectFit**：保持纵横比缩放图片，确保图片长边能完全显示
- **aspectFill**：保持纵横比缩放图片，确保图片短边能完全显示
- **widthFix**：固定宽度，高度自适应，保持原图宽高比
- **heightFix**：固定高度，宽度自适应，保持原图宽高比
- **top**：不缩放图片，仅显示顶部区域
- **bottom**：不缩放图片，仅显示底部区域
- **center**：不缩放图片，仅显示中心区域
- **left**：不缩放图片，仅显示左侧区域
- **right**：不缩放图片，仅显示右侧区域
- **top left**：不缩放图片，仅显示左上角区域
- **top right**：不缩放图片，仅显示右上角区域
- **bottom left**：不缩放图片，仅显示左下角区域
- **bottom right**：不缩放图片，仅显示右下角区域

```html
<cl-image mode="aspectFill"></cl-image>
```

## 插槽

| 插槽名  | 说明               |
| ------- | ------------------ |
| error   | 图片加载失败时显示 |
| loading | 图片加载过程中显示 |

## PassThrough

支持自定义组件内部元素的样式，提供更灵活的样式控制能力。

| 属性名    | 说明           | 类型                                                       |
| --------- | -------------- | ---------------------------------------------------------- |
| className | 组件根元素样式 | string                                                     |
| inner     | 图片元素配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| error     | 错误状态配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| loading   | 加载状态配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 使用示例

### 自定义插槽内容

```html
<!-- 空数据占位 -->
<cl-image src="">
  <template #placeholder>
    <text>暂无图片</text>
  </template>
</cl-image>

<!-- 加载失败提示 -->
<cl-image src="invalid-url">
  <template #error>
    <text>图片加载失败</text>
  </template>
</cl-image>
```

### 自定义图片尺寸

```html
<cl-image :height="100" :width="100"></cl-image>
<cl-image height="50px" width="50px"></cl-image>
```

### 图片预览功能

配置 `previewList` 属性，组件会自动将当前的 `src` 匹配为预览列表中的第一张图片。

```html
<cl-image :preview-list="previewList"></cl-image>
```
