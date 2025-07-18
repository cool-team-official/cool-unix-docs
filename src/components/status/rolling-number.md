# RollingNumber 数字滚动

一个具有平滑动画效果的数字滚动组件，支持从一个数值平滑过渡到另一个数值，常用于数据展示、计数器等场景。

## 基础参数

| 参数     | 说明                                     | 类型                        | 可选值 | 默认值 |
| -------- | ---------------------------------------- | --------------------------- | ------ | ------ |
| pt       | 样式穿透配置，用于自定义组件内部元素样式 | [PassThrough](#passthrough) | -      | -      |
| value    | 目标数字值，组件将从当前值滚动到此数值   | number                      | -      | 0      |
| duration | 动画持续时间，单位为毫秒                 | number                      | -      | 1000   |
| decimals | 小数位数，控制数字显示的精度             | number                      | -      | 0      |

## PassThrough

样式穿透配置对象，允许您深度自定义组件内部元素的外观。

| 参数      | 说明           | 类型   |
| --------- | -------------- | ------ |
| className | 组件根元素样式 | string |
| color     | 数字颜色       | string |

## 使用示例

### 基础用法

最简单的使用方式，数字从 0 滚动到目标值：

```html
<cl-rolling-number :value="1000"></cl-rolling-number>
```

### 快速滚动效果

通过调整 `duration` 参数实现更快的滚动动画：

```html
<cl-rolling-number :value="1000" :duration="300"></cl-rolling-number>
```

### 显示小数位

设置 `decimals` 参数显示小数位数，适用于金额、百分比等场景：

```html
<!-- 显示两位小数 -->
<cl-rolling-number :value="1000.58" :decimals="2"></cl-rolling-number>
```

### 自定义样式主题

结合 `pt` 配置实现个性化的视觉效果：

```html
<cl-rolling-number
  :value="1000"
  :pt="{
    className: '!text-3xl !font-bold',
    color: 'primary',
  }"
></cl-rolling-number>
```
