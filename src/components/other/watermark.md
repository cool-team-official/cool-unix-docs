# Watermark 水印

水印组件，用于在页面或内容上添加水印效果，支持文字水印、自定义样式和深色模式适配。通过 Canvas 绘制实现高性能的水印渲染，支持自定义文字、颜色、大小、旋转角度、间距等参数，可灵活应用于版权保护、内容标识等场景。

## 基础参数

| 参数       | 说明                     | 类型                        | 可选值 | 默认值                      |
| ---------- | ------------------------ | --------------------------- | ------ | --------------------------- |
| pt         | 样式穿透配置             | [PassThrough](#passthrough) | -      | -                           |
| text       | 水印文本                 | string                      | -      | "Watermark"                 |
| fontSize   | 水印字体大小             | number                      | -      | 16                          |
| color      | 水印文字颜色（浅色模式） | string                      | -      | "rgba(0, 0, 0, 0.15)"       |
| darkColor  | 水印文字颜色（深色模式） | string                      | -      | "rgba(255, 255, 255, 0.15)" |
| opacity    | 水印透明度               | number                      | -      | 1                           |
| rotate     | 水印旋转角度             | number                      | -      | -22                         |
| width      | 水印宽度                 | number                      | -      | 120                         |
| height     | 水印高度                 | number                      | -      | 64                          |
| gapX       | 水印之间的水平间距       | number                      | -      | 100                         |
| gapY       | 水印之间的垂直间距       | number                      | -      | 100                         |
| zIndex     | 水印层级                 | number                      | -      | 9                           |
| fontWeight | 字体粗细                 | string                      | -      | "normal"                    |
| fontFamily | 字体样式                 | string                      | -      | "sans-serif"                |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明                   | 类型                                                        |
| --------- | ---------------------- | ----------------------------------------------------------- |
| className | 组件根元素的样式配置   | string                                                      |
| container | 内容容器元素的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 方法

| 方法名  | 说明         | 参数 | 返回值 |
| ------- | ------------ | ---- | ------ |
| refresh | 重新绘制水印 | -    | -      |

## 示例

### 基础用法

最简单的水印使用方式，在内容上方添加默认的水印效果。

```html
<cl-watermark>
  <view class="p-4 bg-gray-100 h-40">
    <text>这里是需要添加水印的内容</text>
  </view>
</cl-watermark>
```

### 自定义文字

通过 `text` 属性设置自定义的水印文字。

```html
<cl-watermark text="版权所有">
  <view class="p-4 bg-gray-100 h-40">
    <text>这里是需要添加水印的内容</text>
  </view>
</cl-watermark>
```

### 自定义样式

可以通过多个属性自定义水印的外观，包括字体大小、颜色、透明度、旋转角度等。

```html
<cl-watermark
  text="CONFIDENTIAL"
  :font-size="20"
  color="rgba(255, 0, 0, 0.3)"
  :rotate="-45"
  :opacity="0.8"
  font-weight="bold"
>
  <view class="p-4 bg-gray-100 h-40">
    <text>机密文档内容</text>
  </view>
</cl-watermark>
```

### 调整间距和大小

通过 `width`、`height`、`gapX`、`gapY` 属性调整水印的大小和间距。

```html
<cl-watermark text="DRAFT" :width="150" :height="80" :gap-x="50" :gap-y="50">
  <view class="p-4 bg-gray-100 h-40">
    <text>草稿文档</text>
  </view>
</cl-watermark>
```

### 深色模式适配

组件会自动根据系统主题切换水印颜色，也可以通过 `darkColor` 属性自定义深色模式下的颜色。

```html
<cl-watermark
  text="Cool Unix"
  color="rgba(0, 0, 0, 0.1)"
  dark-color="rgba(255, 255, 255, 0.2)"
>
  <view class="p-4 bg-gray-100 dark:bg-gray-800 h-40">
    <text class="dark:text-white">支持深色模式的内容</text>
  </view>
</cl-watermark>
```
