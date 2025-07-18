# Slider 滑块

一个可交互的滑块组件，用于在指定范围内选择数值。

## 参数

| 参数       | 说明               | 类型                        | 可选值 | 默认值 |
| ---------- | ------------------ | --------------------------- | ------ | ------ |
| pt         | 样式穿透配置       | [PassThrough](#passthrough) | -      | -      |
| modelValue | 绑定的当前值       | number                      | -      | 0      |
| max        | 可选择的最大值     | number                      | -      | 100    |
| min        | 可选择的最小值     | number                      | -      | 0      |
| step       | 滑动步长           | number                      | -      | 1      |
| disabled   | 是否禁用滑块       | boolean                     | -      | false  |
| blockSize  | 滑块手柄大小（px） | number                      | -      | 20     |
| showValue  | 是否显示当前值     | boolean                     | -      | false  |

## 事件

| 事件名称 | 说明                   | 回调参数                |
| -------- | ---------------------- | ----------------------- |
| change   | 滑块值变化时触发的事件 | (value: number) => void |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明             | 类型                                                        |
| --------- | ---------------- | ----------------------------------------------------------- |
| className | 组件根元素样式   | string                                                      |
| track     | 滑块轨道配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| progress  | 滑块进度条配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| thumb     | 滑块手柄配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| value     | 显示数值标签配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 示例

### 基本用法

最简单的滑块使用方式：

```html
<cl-slider></cl-slider>
```

### 显示当前值

在滑块上方显示当前选择的数值：

```html
<cl-slider show-value></cl-slider>
```

### 设置步长

设置滑块的移动步长为 10：

```html
<cl-slider :step="10"></cl-slider>
```

### 自定义范围

设置滑块的最大值为 50：

```html
<cl-slider :max="50"></cl-slider>
```

### 禁用状态

禁用滑块，阻止用户交互：

```html
<cl-slider disabled></cl-slider>
```
