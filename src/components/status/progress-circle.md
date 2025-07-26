# ProgressCircle 圆形进度条

一个轻量级的圆形进度条组件，用于展示操作进度或任务完成状态。

## 基础参数

| 参数        | 说明                      | 类型    | 可选值 | 默认值       |
| ----------- | ------------------------- | ------- | ------ | ------------ |
| value       | 当前进度值（0-100）       | number  | 0-100  | 0            |
| strokeWidth | 进度条线条宽度（单位 px） | number  | -      | 8            |
| size        | 进度条大小                | number  |        | 120          |
| showText    | 是否显示进度百分比文本    | boolean |        | true         |
| unit        | 单位                      | string  |        | "%"          |
| color       | 进度条颜色                | string  |        | -            |
| unColor     | 进度条背景色              | string  |        | -            |
| startAngle  | 起始角度 (弧度)           | number  |        | -Math.PI / 2 |
| clockwise   | 是否顺时针                | boolean |        | true         |
| duration    | 动画时长                  | string  |        | 500          |

## 基础用法

### 简单进度条

最基础的进度条用法，显示 50%的进度。

```html
<cl-progress-circle :value="50"></cl-progress-circle>
```

### 隐藏文本

不显示百分比文本的进度条。

```html
<cl-progress-circle :value="50" :show-text="false"></cl-progress-circle>
```

### 自定义颜色

自定义进度条的前景色和背景色，打造个性化样式。

```html
<!-- 红色主题 -->
<cl-progress-circle
  :value="30"
  color="red"
  un-color="#f7bfbf"
></cl-progress-circle>

<!-- 绿色主题 -->
<cl-progress-circle
  :value="80"
  color="#52c41a"
  un-color="#f6ffed"
></cl-progress-circle>
```

### 自定义宽度

调整进度条的粗细，适应不同的设计需求。

```html
<cl-progress-circle
  :value="40"
  :stroke-width="6"
  :size="80"
></cl-progress-circle>

<cl-progress-circle :value="60" :stroke-width="20"></cl-progress-circle>
```
