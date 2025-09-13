# Marquee 跑马灯

Marquee 跑马灯组件用于展示图片或内容的循环滚动效果，支持横向和纵向两种滚动方向。通过配置参数可以自定义滚动速度、间距、单项尺寸等，适用于广告轮播、信息公告等场景。组件还支持方法调用控制动画的开始、暂停、重置等操作，并提供插槽和样式透传能力，方便进行深度定制。

## 基础参数

| 参数       | 说明                                      | 类型                        | 可选值 | 默认值       |
| ---------- | ----------------------------------------- | --------------------------- | ------ | ------------ |
| pt         | 样式透传配置，用于自定义组件内部元素样式  | [PassThrough](#passthrough) | -      | -            |
| list       | 图片列表                                  | string[]                    | -      | []           |
| direction  | 滚动方向                                  | "horizontal" \| "vertical"  | -      | "horizontal" |
| duration   | 一次滚动的持续时间                        | number                      | -      | 5000         |
| itemHeight | 图片高度                                  | number \| string            | -      | 200          |
| itemWidth  | 图片宽度（仅横向滚动时生效，纵向为 100%） | number \| string            | -      | 300          |
| gap        | 间距                                      | number \| string            | -      | 20           |

## 方法

| 方法名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| start  | 开始滚动动画 | -    |
| stop   | 停止滚动动画 | -    |
| reset  | 重置滚动动画 | -    |
| pause  | 暂停滚动动画 | -    |
| play   | 播放滚动动画 | -    |

## PassThrough

支持深度自定义组件内部元素样式，提供企业级的样式控制能力。

| 属性名    | 说明                 | 类型                                                       |
| --------- | -------------------- | ---------------------------------------------------------- |
| className | 组件根容器的样式类名 | string                                                     |
| list      | 列表区域的配置       | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| item      | 单个项的配置         | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| image     | 图片的配置           | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 插槽

| 插槽名 | 说明       | 参数                                   | 使用场景         |
| ------ | ---------- | -------------------------------------- | ---------------- |
| item   | 每个项内容 | `{ item: MarqueeItem; index: number }` | 搜索框、筛选器等 |

## 类型

```ts
type MarqueeItem = {
  url: string;
  originalIndex: number;
};
```

## 示例

### 横向滚动

- 设置参数 `direction="horizontal"`，启用横向滚动模式

- 通过 `item-height` 和 `item-width` 分别指定每项的高度和宽度

```vue
<template>
  <cl-marquee
    :list="list"
    direction="horizontal"
    :item-height="200"
    :item-width="360"
    :pt="{
      className: 'h-[200rpx] rounded-xl',
    }"
  ></cl-marquee>
</template>

<script setup lang="ts">
const list = ref<string[]>([
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
]);
</script>
```

### 纵向滚动

- 设置参数 `direction="vertical"`，启用纵向滚动模式

- 通过 `item-height` 指定每项的高度，纵向滚动时宽度默认为 `100%`（如需调整宽度，可通过外层容器控制）

- 使用 `h-[200rpx]` 类名可灵活控制可视区域的高度范围

```vue
<template>
  <cl-marquee
    :list="list"
    direction="vertical"
    :item-height="200"
    :pt="{
      className: 'h-[200rpx] rounded-xl',
    }"
  ></cl-marquee>
</template>

<script setup lang="ts">
const list = ref<string[]>([
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
]);
</script>
```

### 调用开始、暂停

- 请确保类型声明为 `ClMarqueeComponentPublicInstance | null`，以保证类型安全。

- 在调用实例方法时，务必使用 `!.` 运算符来断言非空，例如：`marqueeRef.value!.play()`。

```vue
<template>
  <cl-marquee
    ref="marqueeRef"
    :list="list"
    direction="vertical"
    :item-height="200"
    :pt="{
      className: 'h-[200rpx] rounded-xl',
    }"
  ></cl-marquee>
</template>

<script setup lang="ts">
import { ref } from "vue";

const list = ref<string[]>([
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
  "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
]);

const marqueeRef = ref<ClMarqueeComponentPublicInstance | null>(null);

function play() {
  marqueeRef.value!.play();
}

function pause() {
  marqueeRef.value!.pause();
}
</script>
```
