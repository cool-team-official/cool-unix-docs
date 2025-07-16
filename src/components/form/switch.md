# Switch 开关

用于在两个相互对立的状态间切换的组件。

## 参数

| 参数       | 说明             | 类型                        | 可选值 | 默认值 |
| ---------- | ---------------- | --------------------------- | ------ | ------ |
| pt         | 样式穿透配置     | [PassThrough](#passthrough) | -      | -      |
| modelValue | 绑定值           | boolean                     | -      | -      |
| disabled   | 是否禁用         | boolean                     | -      | false  |
| loading    | 是否显示加载状态 | boolean                     | -      | false  |
| height     | 开关高度（px）   | number                      | -      | 24     |
| width      | 开关宽度（px）   | number                      | -      | 40     |

## 事件

| 事件名称 | 说明                   | 回调参数   |
| -------- | ---------------------- | ---------- |
| change   | 绑定值变化时触发的事件 | 新状态的值 |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明                   | 类型                                                        |
| --------- | ---------------------- | ----------------------------------------------------------- |
| className | 组件根元素的 CSS 类名  | string                                                      |
| track     | 开关轨道元素的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| thumb     | 开关滑块元素的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| label     | 标签文本元素的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| loading   | 加载图标元素的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 示例

### 基础用法

最简单的用法，默认关闭状态。

```html
<cl-switch></cl-switch>
```

### 禁用状态

设置 `disabled` 属性可以禁用开关。

```html
<cl-switch disabled></cl-switch>
```

### 加载状态

设置 `loading` 属性显示加载状态。

```html
<cl-switch loading></cl-switch>
```

### 自定义尺寸

通过 `width` 和 `height` 属性调整开关尺寸。

```html
<cl-switch :width="60" :height="30"></cl-switch>
```

### 自定义颜色

使用样式穿透自定义开关颜色。

```vue
<cl-switch
  :pt="{
    track: {
      className: '!bg-blue-100 data-[state=checked]:!bg-blue-500',
    },
    thumb: {
      className: '!bg-white',
    },
  }"
></cl-switch>
```

### 自定义形状

改变开关为方形样式。

```vue
<cl-switch
  :pt="{
    track: {
      className: '!rounded-md',
    },
    thumb: {
      className: '!rounded-sm',
    },
  }"
></cl-switch>
```
