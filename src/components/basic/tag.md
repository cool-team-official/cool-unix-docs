# Tag 标签

`cl-tag` 是一个轻量级的标签组件，常用于标记关键词、分类标识或状态展示等场景。

## 参数

| 参数     | 说明             | 类型                        | 可选值                                                | 默认值    |
| -------- | ---------------- | --------------------------- | ----------------------------------------------------- | --------- |
| pt       | 样式穿透配置     | [PassThrough](#passthrough) | -                                                     | -         |
| type     | 标签类型         | string                      | "primary" \| "success" \| "error" \| "warn" \| "info" | "primary" |
| icon     | 左侧图标         | string                      | -                                                     | -         |
| rounded  | 是否圆角显示     | boolean                     | true \| false                                         | false     |
| closable | 是否显示关闭按钮 | boolean                     | true \| false                                         | false     |
| plain    | 是否为镂空样式   | boolean                     | true \| false                                         | false     |

## 事件

| 事件名 | 说明       | 回调参数 |
| ------ | ---------- | -------- |
| close  | 关闭时触发 | -        |

## PassThrough

支持自定义组件内部元素的样式，提供更灵活的样式控制能力。

| 属性名    | 说明           | 类型                                                       |
| --------- | -------------- | ---------------------------------------------------------- |
| className | 组件根元素样式 | string                                                     |
| text      | 文本元素配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 示例

### 基础用法

默认样式的标签。

```html
<cl-tag>默认标签</cl-tag>
```

### 不同类型

通过 `type` 属性设置不同的标签类型，支持主要、成功、错误、警告、信息五种类型。

```html
<cl-tag type="primary">主要</cl-tag>
<cl-tag type="success">成功</cl-tag>
<cl-tag type="error">错误</cl-tag>
<cl-tag type="warn">警告</cl-tag>
<cl-tag type="info">信息</cl-tag>
```

### 镂空样式

设置 `plain` 属性可以显示为镂空样式。

```html
<cl-tag type="primary" plain>主要</cl-tag>
<cl-tag type="success" plain>成功</cl-tag>
<cl-tag type="error" plain>错误</cl-tag>
<cl-tag type="warn" plain>警告</cl-tag>
<cl-tag type="info" plain>信息</cl-tag>
```

### 带图标

通过 `icon` 属性为标签添加左侧图标。

```html
<cl-tag icon="mail-line">邮件</cl-tag>
<cl-tag icon="calendar-line">日历</cl-tag>
<cl-tag icon="file-line">文件</cl-tag>
```

### 圆角样式

设置 `rounded` 属性显示为圆角样式。

```html
<cl-tag rounded>圆角标签</cl-tag>
<cl-tag type="success" rounded>圆角成功</cl-tag>
```

### 可关闭标签

设置 `closable` 属性显示关闭按钮，点击时触发 `close` 事件。

```html
<cl-tag closable @close="handleClose">可关闭</cl-tag>
```

### 组合使用

可以组合使用多个属性创建符合需求的标签样式。

```html
<cl-tag type="primary" icon="star-line" rounded closable> 收藏标签 </cl-tag>
<cl-tag type="success" icon="check-line" plain> 已完成 </cl-tag>
```

### 自定义样式

使用 `pt` 属性可以深度自定义标签的样式。

```vue
<cl-tag
  :pt="{
    className: '!bg-sky-200',
    text: {
      className: '!text-sky-700',
    },
  }"
>
  自定义颜色
</cl-tag>

<cl-tag :pt="{ className: '!rounded-none' }">自定义无圆角</cl-tag>
```
