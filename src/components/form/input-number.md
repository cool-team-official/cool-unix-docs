# InputNumber 计数器

`cl-input-number` 是一个数字输入计数器组件，支持通过加减按钮或直接输入来调整数值，并可设置数值范围和步长。

## 参数

| 参数        | 说明                          | 类型                        | 可选值              | 默认值   |
| ----------- | ----------------------------- | --------------------------- | ------------------- | -------- |
| pt          | 样式穿透配置                  | [PassThrough](#passthrough) | —                   | —        |
| modelValue  | 当前绑定的数值                | number                      | —                   | 0        |
| step        | 每次点击加减按钮的步长        | number                      | —                   | 1        |
| max         | 允许输入的最大数值            | number                      | —                   | 100      |
| min         | 允许输入的最小数值            | number                      | —                   | 0        |
| inputable   | 是否允许手动输入数值          | boolean                     | —                   | true     |
| size        | 加减按钮的尺寸大小（单位 px） | number \| string            | —                   | 50       |
| disabled    | 是否禁用组件                  | boolean                     | —                   | false    |
| inputType   | 输入框的数值类型              | string                      | "digit" \| "number" | 'number' |
| placeholder | 输入框的占位提示文本          | string                      | —                   | —        |

## 事件

| 事件名称 | 说明                     | 回调参数      |
| -------- | ------------------------ | ------------- |
| change   | 数值发生变化时触发的事件 | value: number |

## PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明               | 类型             |
| --------- | ------------------ | ---------------- |
| className | 组件根容器的样式   | string           |
| value     | 中间数值显示区样式 | ValuePassThrough |
| op        | 左右加减按钮样式   | OpPassThrough    |

```ts
type ValuePassThrough = {
  className?: string;
  input?: PassThroughProps;
};

type OpPassThrough = {
  className?: string;
  minus?: PassThroughProps;
  plus?: PassThroughProps;
  icon?: ClIconProps;
};
```

## 示例

### 基础用法

最简单的计数器，默认值为 0，步长为 1：

```html
<cl-input-number></cl-input-number>
```

### 设置步长

设置每次点击按钮时的数值变化量：

```html
<cl-input-number :step="5"></cl-input-number>
```

### 调整尺寸

自定义加减按钮的大小：

```html
<cl-input-number :size="60"></cl-input-number>
```

### 限制数值范围

设置数值的最小值和最大值（4~20）：

```html
<cl-input-number :min="4" :max="20"></cl-input-number>
```

### 自定义样式

通过 PassThrough 配置自定义组件外观，如设置圆形按钮：

```vue
<cl-input-number
  :pt="{
    op: {
      className: '!rounded-full',
    },
    value: {
      className: '!rounded-full',
    },
  }"
></cl-input-number>
```
