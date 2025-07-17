# Banner 轮播图

轮播图组件，支持自动播放、手势滑动、自定义样式等功能。适用于图片展示、广告位、产品推荐等场景。

## 基础参数

| 参数           | 说明                     | 类型                        | 可选值 | 默认值 |
| -------------- | ------------------------ | --------------------------- | ------ | ------ |
| pt             | 样式透传配置             | [PassThrough](#passthrough) | -      | -      |
| list           | 轮播项列表（图片链接）   | string[]                    | -      | []     |
| previousMargin | 前一个轮播项的左边距     | number                      | -      | 0      |
| nextMargin     | 后一个轮播项的右边距     | number                      | -      | 0      |
| autoplay       | 是否自动轮播             | boolean                     | -      | true   |
| interval       | 自动轮播间隔时间（毫秒） | number                      | -      | 5000   |
| showDots       | 是否显示指示器圆点       | boolean                     | -      | true   |
| disableTouch   | 是否禁用手势滑动         | boolean                     | -      | false  |
| height         | 轮播容器高度             | number \| string            | -      | 300    |

## 事件

| 事件名   | 说明             | 回调参数          |
| -------- | ---------------- | ----------------- |
| change   | 轮播项切换时触发 | `(value: number)` |
| item-tap | 点击轮播项时触发 | `(index: number)` |

## PassThrough

样式透传配置对象，用于深度自定义组件内部元素的样式。

| 参数       | 说明                     | 类型                                                        |
| ---------- | ------------------------ | ----------------------------------------------------------- |
| className  | 组件根元素的 CSS 类名    | string                                                      |
| item       | 轮播项容器的样式配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| itemActive | 当前激活轮播项的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| image      | 轮播图片的样式配置       | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| dots       | 指示器容器的样式配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| dot        | 指示器圆点的样式配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| dotActive  | 激活指示器圆点的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 示例

### 基础用法

最简单的轮播图使用方式，传入图片链接数组即可。

```html
<cl-banner :list="list"></cl-banner>

<script lang="ts" setup>
  import { ref } from "vue";

  const list = ref<string[]>([
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
  ]);
</script>
```

### 自定义配置

设置自动播放间隔、高度等属性。

```html
<cl-banner
  :list="list"
  :autoplay="true"
  :interval="3000"
  :height="200"
  :show-dots="true"
></cl-banner>

<script lang="ts" setup>
  import { ref } from "vue";

  const list = ref<string[]>([
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
  ]);
</script>
```

### 禁用手势滑动

适用于某些场景下需要禁止用户手动滑动的情况。

```html
<cl-banner :list="list" :disable-touch="true"></cl-banner>

<script lang="ts" setup>
  import { ref } from "vue";

  const list = ref<string[]>([
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
  ]);
</script>
```

### 事件处理

监听轮播图的切换和点击事件。

```html
<cl-banner :list="list" @change="onChange" @item-tap="onClick"></cl-banner>

<script lang="ts" setup>
  import { ref } from "vue";

  const list = ref<string[]>([
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
  ]);

  function onChange(current: number) {
    console.log(`当前轮播项索引: ${current}`);
  }

  function onClick(index: number) {
    console.log(`点击了第 ${index + 1} 个轮播项`);
    // 处理点击逻辑，如跳转页面
  }
</script>
```

### 卡片式轮播

通过设置边距和缩放效果，实现卡片式轮播展示。

```html
<cl-banner
  :list="list"
  :pt="{
    className: 'mx-[-12rpx]',
    item: {
      className: parseClass(['scale-y-80 !px-[12rpx] transition-transform']),
    },
    itemActive: {
      className: parseClass(['!scale-y-100']),
    },
  }"
  :previous-margin="40"
  :next-margin="40"
></cl-banner>

<script lang="ts" setup>
  import { ref } from "vue";
  import { parseClass } from "@/cool";

  const list = ref<string[]>([
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
  ]);
</script>
```

### 自定义指示器样式

自定义指示器圆点的样式和位置。

```html
<cl-banner
  :list="list"
  :pt="{
    dots: {
      className: parseClass(['!bottom-[20rpx]']),
    },
    dot: {
      className: parseClass(['!w-[16rpx] !h-[16rpx] !bg-white/50']),
    },
    dotActive: {
      className: parseClass(['!w-[32rpx] !bg-white !rounded-[8rpx]']),
    },
  }"
></cl-banner>

<script lang="ts" setup>
  import { ref } from "vue";
  import { parseClass } from "@/cool";

  const list = ref<string[]>([
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
  ]);
</script>
```

### 露出式轮播

显示部分前后轮播项，营造层次感。

```html
<cl-banner
  :list="list"
  :pt="{
    className: 'mx-[-12rpx]',
    item: {
      className: parseClass(['px-[12rpx]']),
    },
  }"
  :next-margin="40"
></cl-banner>

<script lang="ts" setup>
  import { ref } from "vue";
  import { parseClass } from "@/cool";

  const list = ref<string[]>([
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg2.png",
    "https://uni-docs.cool-js.com/demo/pages/demo/static/bg3.png",
  ]);
</script>
```
