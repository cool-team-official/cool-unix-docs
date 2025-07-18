# Button 按钮

基于官方 `button` 组件封装的增强按钮组件，支持多种样式主题、尺寸规格和交互状态，提供更丰富的视觉效果和用户体验。

## 参数

| 参数     | 说明             | 类型                        | 可选值                                                                     | 默认值    |
| -------- | ---------------- | --------------------------- | -------------------------------------------------------------------------- | --------- |
| pt       | 样式穿透配置     | [PassThrough](#passthrough) |                                                                            |           |
| size     | 按钮尺寸         | string                      | "normal" \| "small" \| "large"                                             | "normal"  |
| type     | 按钮主题类型     | string                      | "primary" \| "success" \| "error" \| "warn" \| "info" \| "light" \| "dark" | "primary" |
| text     | 是否为纯文本按钮 | boolean                     |                                                                            | false     |
| border   | 是否显示边框     | boolean                     |                                                                            | false     |
| rounded  | 是否显示圆角     | boolean                     |                                                                            | false     |
| loading  | 是否显示加载状态 | boolean                     |                                                                            | false     |
| disabled | 是否禁用按钮     | boolean                     |                                                                            | false     |
| icon     | 图标名称         | string                      |                                                                            |           |
| color    | 自定义文字颜色   | string                      |                                                                            |           |

[更多参数查阅](https://doc.dcloud.net.cn/uni-app-x/component/button.html)

## PassThrough

样式穿透配置，用于自定义组件内部元素的样式。

| 参数      | 说明             | 类型                                                           |
| --------- | ---------------- | -------------------------------------------------------------- |
| className | 组件根元素样式 | string                                                         |
| label     | 文本元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops)    |
| icon      | 图标元素配置     | [ClIconProps](/src/components/basic/icon.md#passthrough)       |
| loading   | 加载元素配置     | [ClLoadingProps](/src/components/basic/loading.md#passthrough) |

## 示例

### 基础用法

最简单的按钮用法，显示默认样式。

```html
<cl-button>普通按钮</cl-button>
```

### 主题类型

通过 `type` 参数设置不同的按钮主题，适用于不同的场景。

```html
<cl-button type="primary">主要按钮</cl-button>
<cl-button type="success">成功按钮</cl-button>
<cl-button type="error">危险按钮</cl-button>
<cl-button type="warn">警告按钮</cl-button>
<cl-button type="info">信息按钮</cl-button>
<cl-button type="light">浅色按钮</cl-button>
<cl-button type="dark">深色按钮</cl-button>
```

### 按钮尺寸

通过 `size` 参数控制按钮的大小。

```html
<cl-button size="small">小号按钮</cl-button>
<cl-button size="normal">常规按钮</cl-button>
<cl-button size="large">大号按钮</cl-button>
```

### 图标按钮

通过 `icon` 参数为按钮添加图标，支持图标+文字或纯图标显示。

```html
<cl-button icon="send-plane-fill">搜索</cl-button>

<!-- 只显示图标 -->
<cl-button type="primary" icon="send-plane-fill"></cl-button>
```

### 禁用状态

通过 `disabled` 参数设置按钮为禁用状态。

```html
<cl-button disabled>禁用按钮</cl-button>
```

### 圆角样式

通过 `rounded` 参数设置按钮为圆角样式。

```html
<cl-button rounded>圆角按钮</cl-button>
```

### 加载状态

通过 `loading` 参数显示按钮的加载状态，通常用于异步操作期间。

```html
<cl-button loading>加载中</cl-button>
```

### 纯文本样式

通过 `text` 参数设置按钮为纯文本样式，可配合 `border` 参数添加边框。

```html
<cl-button text>纯文本按钮</cl-button>

<!-- 带边框的纯文本按钮 -->
<cl-button text border>带边框文本按钮</cl-button>
```
