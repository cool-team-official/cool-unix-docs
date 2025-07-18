# Icon 图标

`cl-icon` 是一个功能强大的图标组件，内置丰富的图标库，支持 `iconfont` 和 `remixicon` 两种图标字体的自动导入，为应用提供统一的视觉图标解决方案。[图标配置详情](/src/introduce/icon.md)

## 属性参数

| 属性名 | 说明         | 类型                        | 可选值                                                | 默认值 |
| ------ | ------------ | --------------------------- | ----------------------------------------------------- | ------ |
| pt     | 样式穿透配置 | [PassThrough](#passthrough) |                                                       |        |
| name   | 图标名称     | string                      | 支持 iconfont 和 remixicon 图标名                     |        |
| size   | 图标尺寸     | string \| number            | 任意有效的尺寸值                                      | 32     |
| color  | 图标颜色     | string                      | "primary" \| "success" \| "error" \| "warn" \| "info" |        |
| height | 图标高度     | string \| number            | 自定义高度，优先级高于 size                           |        |
| width  | 图标宽度     | string \| number            | 自定义宽度，优先级高于 size                           |        |

## PassThrough

支持自定义组件内部元素的样式，提供更灵活的样式控制。

| 属性名    | 说明           | 类型   |
| --------- | -------------- | ------ |
| className | 组件根元素样式 | string |

## 使用示例

### 基础用法

最简单的图标使用方式，指定图标名称即可。

```html
<cl-icon name="heart-fill"></cl-icon>
```

### 设置尺寸

通过 `size` 属性控制图标大小，支持数字和字符串格式。

```html
<cl-icon name="heart-fill" :size="40"></cl-icon>
<cl-icon name="heart-fill" size="50rpx"></cl-icon>
```

### 设置颜色

使用预设的主题色彩，让图标与应用主题保持一致。

```html
<cl-icon name="heart-fill" color="primary"></cl-icon>
<cl-icon name="close-line" color="error"></cl-icon>
<cl-icon name="check-line" color="success"></cl-icon>
```
