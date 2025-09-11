# Animation 动画

动画（Animation）用于为元素添加动态效果，提升界面交互的流畅性和视觉吸引力。通过 AnimationEngine，你可以方便地为任意元素实现淡入淡出、滑动、缩放、旋转、弹跳等多种常见动画效果，并支持动画的播放、暂停、恢复、重置等操作。动画支持链式调用和异步控制，适用于页面过渡、弹窗、提示等多种场景。

## 属性

### AnimationEngine

| 方法名            | 说明                             | 类型                                                                              |
| ----------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| createAnimation   | 创建动画实例                     | `(element: UniElement \| null, options: AnimationOptions = {}): AnimationEngine`  |
| play              | 开始播放动画                     | `(): AnimationEngine`                                                             |
| playAsync         | 异步播放动画，支持 await         | `(): Promise<void>`                                                               |
| stop              | 停止动画                         | `(): AnimationEngine`                                                             |
| pause             | 暂停动画                         | `(): AnimationEngine`                                                             |
| resume            | 恢复暂停的动画                   | `(): AnimationEngine`                                                             |
| reset             | 重置动画到初始状态，清空所有内容 | `(): AnimationEngine`                                                             |
| getProgress       | 获取当前动画进度                 | `(): number`                                                                      |
| isAnimating       | 获取动画是否正在运行             | `(): boolean`                                                                     |
| getCurrentLoop    | 获取当前循环次数                 | `(): number`                                                                      |
| clearAttributes   | 清除所有动画属性                 | `(): AnimationEngine`                                                             |
| getAttributeCount | 获取动画属性数量                 | `(): number`                                                                      |
| fadeIn            | 淡入动画                         | `(duration: number = 300): AnimationEngine`                                       |
| fadeOut           | 淡出动画                         | `(duration: number = 300): AnimationEngine`                                       |
| slideInLeft       | 滑入动画(从左)                   | `(duration: number = 300): AnimationEngine`                                       |
| slideInRight      | 滑入动画(从右)                   | `(duration: number = 300): AnimationEngine`                                       |
| slideInUp         | 滑入动画(从上)                   | `(duration: number = 300): AnimationEngine`                                       |
| slideInDown       | 滑入动画(从下)                   | `(duration: number = 300): AnimationEngine`                                       |
| zoomIn            | 缩放动画(放大)                   | `(duration: number = 300): AnimationEngine`                                       |
| zoomOut           | 放动画(缩小)                     | `(duration: number = 300): AnimationEngine`                                       |
| rotateIn          | 旋转动画                         | `(duration: number = 300): AnimationEngine`                                       |
| rotateOut         | 旋转退出动画                     | `(duration: number = 500): AnimationEngine`                                       |
| bounce            | 弹跳动画                         | `(duration: number = 300): AnimationEngine`                                       |
| slideOutLeft      | 滑出动画(向左)                   | `(duration: number = 300): AnimationEngine`                                       |
| slideOutRight     | 滑出动画(向右)                   | `(duration: number = 300): AnimationEngine`                                       |
| slideOutUp        | 滑出动画(向上)                   | `(duration: number = 300): AnimationEngine`                                       |
| slideOutDown      | 滑出动画(向下)                   | `(duration: number = 300): AnimationEngine`                                       |
| flipX             | 翻转动画(水平)                   | `(duration: number = 600): AnimationEngine`                                       |
| flipY             | 转动画(垂直)                     | `(duration: number = 600): AnimationEngine`                                       |
| elasticIn         | 弹性进入动画                     | `(duration: number = 600): AnimationEngine`                                       |
| elasticOut        | 性退出动画                       | `(duration: number = 600): AnimationEngine`                                       |
| rubberBand        | 回弹动画                         | `(duration: number = 1000): AnimationEngine`                                      |
| swing             | 摆动动画                         | `(duration: number = 1000): AnimationEngine`                                      |
| wobble            | 抖动动画                         | `(duration: number = 1000): AnimationEngine`                                      |
| rollIn            | 滚动进入动画                     | `(duration: number = 600): AnimationEngine`                                       |
| rollOut           | 滚动退出动画                     | `(duration: number = 600): AnimationEngine`                                       |
| lightSpeed        | 灯光效果动画                     | `(duration: number = 500): AnimationEngine`                                       |
| float             | 浮动动画                         | `(duration: number = 3000): AnimationEngine`                                      |
| breathe           | 呼吸动画                         | `(duration: number = 2000): AnimationEngine`                                      |
| glow              | 发光动画                         | `(duration: number = 1500): AnimationEngine`                                      |
| progressBar       | 进度条动画                       | `(duration: number = 1000): AnimationEngine`                                      |
| modalIn           | 模态框进入动画                   | `(duration: number = 300): AnimationEngine`                                       |
| modalOut          | 模态框退出动画                   | `(duration: number = 300): AnimationEngine`                                       |
| cardFlip          | 卡片翻转动画                     | `(duration: number = 600): AnimationEngine`                                       |
| ripple            | 波纹扩散动画                     | `(duration: number = 600): AnimationEngine`                                       |
| sequence          | 链式动画：支持多个动画依次执行   | `(animations: ((engine: AnimationEngine) => AnimationEngine)[]): AnimationEngine` |

### AnimationOptions

用于配置动画的选项对象，支持自定义动画的持续时间、循环次数、缓动函数、回调等参数。

| 属性名         | 说明                        | 类型                         | 默认值      |
| -------------- | --------------------------- | ---------------------------- | ----------- |
| duration       | 动画持续时间（毫秒）        | `number`                     | `300`       |
| loop           | 循环次数，-1 为无限循环     | `number`                     | `1`         |
| alternate      | 是否往返播放                | `boolean`                    | `false`     |
| sequential     | 是否按属性顺序依次执行动画  | `boolean`                    | `false`     |
| timingFunction | 缓动函数名称                | `string`                     | `'linear'`  |
| bezier         | 自定义贝塞尔曲线参数        | `number[]`                   | `undefined` |
| complete       | 动画完成回调                | `() => void`                 | `undefined` |
| start          | 动画开始回调                | `() => void`                 | `undefined` |
| frame          | 每帧回调，参数为进度（0~1） | `(progress: number) => void` | `undefined` |

## 示例

### 基础用法

实现元素顺时针旋转一圈（`360` 度）

```vue
<template>
  <view ref="viewRef" class="h-10 w-10 bg-primary-500 rounded-lg"></view>
</template>

<script lang="ts" setup>
onReady(() => {
  createAnimation(viewRef.value, {
    duration: 1000,
  })
    .rotate("0deg", "360deg")
    .play();
});
</script>
```

### 无限循环

只需将参数 `loop` 设置为 `-1`，即可让动画无限循环播放。

```vue
<template>
  <view ref="viewRef" class="h-10 w-10 bg-primary-500 rounded-lg"></view>
</template>

<script lang="ts" setup>
onReady(() => {
  createAnimation(viewRef.value, {
    duration: 1000,
    loop: -1,
  })
    .rotate("0deg", "360deg")
    .play();
});
</script>
```

### 是否往返播放

只需将参数 `alternate` 设置为 `true`，即可让动画往返播放。

```vue
<template>
  <view ref="viewRef" class="h-10 w-10 bg-primary-500 rounded-lg"></view>
</template>

<script lang="ts" setup>
onReady(() => {
  createAnimation(viewRef.value, {
    duration: 1000,
    loop: -1,
    alternate: true,
  })
    .rotate("0deg", "360deg")
    .play();
});
</script>
```

### 贝塞尔曲线动画

你可以通过设置 `bezier` 参数为贝塞尔曲线数组（如 `[0.42, 0, 0.58, 1]`），实现自定义缓动效果。

```vue
<template>
  <view ref="viewRef" class="h-10 w-10 bg-primary-500 rounded-lg"></view>
</template>

<script lang="ts" setup>
onReady(() => {
  createAnimation(viewRef.value, {
    bezier: [0.42, 0, 0.58, 1],
		loop: -1
  })
    .rotate("0deg", "360deg")
    .play();
});
</script>
```

### 异步序列动画方法

异步序列动画方法允许你通过传入一个函数数组，依次执行每个动画步骤。每个函数会接收一个动画引擎实例（`AnimationEngine`），你可以在其中自定义动画效果和持续时间。每个动画会在上一个动画完成后自动开始，适合实现复杂的动画流程。

下面是一个示例，依次执行淡入、放大、旋转、缩小、淡出等动画：

```vue
<template>
  <view ref="viewRef" class="h-10 w-10 bg-primary-500 rounded-lg"></view>
</template>

<script lang="ts" setup>
onReady(() => {
  createAnimation(viewRef.value)
    .sequence([
      (engine: AnimationEngine) => engine.fadeIn(300),
      (engine: AnimationEngine) => engine.scale("1", "1.5").setDuration(400),
      (engine: AnimationEngine) =>
        engine.rotate("0deg", "360deg").setDuration(500),
      (engine: AnimationEngine) => engine.scale("1.5", "1").setDuration(300),
      (engine: AnimationEngine) => engine.fadeOut(300),
    ])
    .play();
});
</script>
```
