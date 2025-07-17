# Tabs 标签页

用于在不同内容区域之间进行切换的标签页组件，支持横向滚动、填充布局等多种展示方式。

## 基础参数

| 参数       | 说明               | 类型                        | 可选值 | 默认值 |
| ---------- | ------------------ | --------------------------- | ------ | ------ |
| pt         | 样式穿透配置       | [PassThrough](#passthrough) | -      | -      |
| modelValue | 当前选中标签的值   | number \| string            | -      | -      |
| height     | 标签容器高度       | number \| string            | -      | 80     |
| list       | 标签数据列表       | ClTabsItem[]                | -      | []     |
| fill       | 是否横向填充标签   | boolean                     | -      | true   |
| gutter     | 标签之间的间距     | number                      | -      | 30     |
| color      | 选中状态的文字颜色 | string                      | -      | -      |
| unColor    | 未选中状态文字颜色 | string                      | -      | -      |
| showLine   | 是否显示底部下划线 | boolean                     | -      | true   |
| showSlider | 是否显示滑块背景   | boolean                     | -      | false  |
| disabled   | 是否禁用整个组件   | boolean                     | -      | false  |

### 事件

| 事件名称 | 说明               | 回调参数                |
| -------- | ------------------ | ----------------------- |
| change   | 标签切换时触发事件 | value: string \| number |

## PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明           | 类型                                                       |
| --------- | -------------- | ---------------------------------------------------------- |
| className | 组件根容器样式 | string                                                     |
| text      | 标签文本样式   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| item      | 单个标签样式   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| line      | 底部下划线样式 | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| slider    | 滑块背景样式   | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 示例

### 基础用法

最基本的标签页用法，支持横向滚动。

::: tip 提示
`list` 属性必须明确定义类型为 `ClTabsItem[]`，这是为了确保在 APP 端的兼容性。
:::

```vue
<cl-tabs v-model="val" :list="list"></cl-tabs>

<script lang="ts" setup>
import type { ClTabsItem } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const val = ref("1");

const list = ref<ClTabsItem[]>([
  {
    label: "Vue",
    value: "1",
  },
  {
    label: "React",
    value: "2",
  },
  {
    label: "Angular",
    value: "3",
  },
  {
    label: "Svelte",
    value: "4",
  },
  {
    label: "Jquery",
    value: "5",
  },
  {
    label: "Vuex",
    value: "6",
  },
  {
    label: "Vue Router",
    value: "7",
  },
  {
    label: "Pinia",
    value: "8",
  },
]);
</script>
```

### 横向填充

当标签数量较少时，可以使用 `fill` 属性让标签平均分布填充整个容器宽度。

```vue
<cl-tabs v-model="val" :list="list" fill></cl-tabs>

<script lang="ts" setup>
import type { ClTabsItem } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const val = ref("1");

const list = ref<ClTabsItem[]>([
  {
    label: "Vue",
    value: "1",
  },
  {
    label: "React",
    value: "2",
  },
  {
    label: "Angular",
    value: "3",
  },
  {
    label: "Svelte",
    value: "4",
  },
]);
</script>
```

### 居中布局

通过外层容器的样式控制，可以实现标签页的居中显示效果。

```vue
<view class="flex flex-row justify-center">
    <cl-tabs v-model="val" :list="list"></cl-tabs>
</view>

<script lang="ts" setup>
import type { ClTabsItem } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const val = ref("1");

const list = ref<ClTabsItem[]>([
  {
    label: "Vue",
    value: "1",
  },
  {
    label: "React",
    value: "2",
  },
  {
    label: "Angular",
    value: "3",
  },
  {
    label: "Svelte",
    value: "4",
  },
]);
</script>
```

### 单个标签禁用

通过在标签数据中设置 `disabled: true` 可以禁用特定的标签项。

```vue
<view class="flex flex-row justify-center">
    <cl-tabs v-model="val" :list="list"></cl-tabs>
</view>

<script lang="ts" setup>
import type { ClTabsItem } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const val = ref("1");

const list = ref<ClTabsItem[]>([
  {
    label: "Vue",
    value: "1",
  },
  {
    label: "React",
    value: "2",
    disabled: true, // 禁用此标签
  },
  {
    label: "Angular",
    value: "3",
  },
  {
    label: "Svelte",
    value: "4",
    disabled: true, // 禁用此标签
  },
]);
</script>
```

### 自定义颜色主题

可以通过 `color` 和 `un-color` 属性自定义选中和未选中状态的文字颜色。

```vue
<view class="flex flex-row justify-center">
    <cl-tabs v-model="val" :list="list" color="red" un-color="#ccc"></cl-tabs>
</view>

<script lang="ts" setup>
import type { ClTabsItem } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const val = ref("1");

const list = ref<ClTabsItem[]>([
  {
    label: "Vue",
    value: "1",
  },
  {
    label: "React",
    value: "2",
  },
  {
    label: "Angular",
    value: "3",
  },
  {
    label: "Svelte",
    value: "4",
  },
]);
</script>
```

### 滑块背景模式

启用 `show-slider` 可以显示滑块背景效果，配合样式穿透可以调整内边距等样式。

```vue
<cl-tabs
  v-model="val"
  :list="list"
  show-slider
  :pt="{
    className: '!p-2',
  }"
></cl-tabs>

<script lang="ts" setup>
import type { ClTabsItem } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const val = ref("1");

const list = ref<ClTabsItem[]>([
  {
    label: "Vue",
    value: "1",
  },
  {
    label: "React",
    value: "2",
  },
  {
    label: "Angular",
    value: "3",
  },
  {
    label: "Svelte",
    value: "4",
  },
]);
</script>
```
