# Radio 单选框

Radio 单选框组件用于在一组选项中进行单一选择。支持自定义图标、样式穿透配置，以及灵活的事件处理。

## 参数

| 参数         | 说明                 | 类型                        | 可选值 | 默认值                       |
| ------------ | -------------------- | --------------------------- | ------ | ---------------------------- |
| pt           | 样式穿透配置         | [PassThrough](#passthrough) | -      | -                            |
| modelValue   | 绑定值（双向绑定）   | string \| number \| boolean | -      | -                            |
| activeIcon   | 选中状态的图标名称   | string                      | -      | "checkbox-circle-line"       |
| inactiveIcon | 未选中状态的图标名称 | string                      | -      | "checkbox-blank-circle-line" |
| showIcon     | 是否显示状态图标     | boolean                     | -      | true                         |
| label        | 单选框的标签文本     | string                      | -      | -                            |
| value        | 该单选框对应的唯一值 | string \| number \| boolean | -      | -                            |
| disabled     | 是否禁用该单选框     | boolean                     | -      | false                        |

## 事件

| 事件名称 | 说明                     | 回调参数                             |
| -------- | ------------------------ | ------------------------------------ |
| change   | 选中状态变化时触发的事件 | (value: string \| number \| boolean) |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明                   | 类型                                                        |
| --------- | ---------------------- | ----------------------------------------------------------- |
| className | 组件根元素的 CSS 类名  | string                                                      |
| icon      | 图标元素的属性配置     | [ClIconProps](/src/components/basic/icon.md#passthrough)    |
| label     | 标签文本元素的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础用法

最基本的单选框使用方式，通过 `v-model` 实现双向数据绑定。

```html
<template>
  <cl-radio v-model="selectedFramework" value="vue">Vue.js</cl-radio>
  <cl-radio v-model="selectedFramework" value="react">React</cl-radio>
  <cl-radio v-model="selectedFramework" value="angular">Angular</cl-radio>
  <cl-radio v-model="selectedFramework" value="svelte">Svelte</cl-radio>
</template>

<script setup>
  import { ref } from "vue";

  // 当前选中的框架
  const selectedFramework = ref("vue");
</script>
```

### 禁用状态

使用 `disabled` 属性可以禁用特定的单选框选项。

```html
<template>
  <cl-radio v-model="tech" value="available">可用选项</cl-radio>
  <cl-radio v-model="tech" value="disabled" disabled>禁用选项</cl-radio>
  <cl-radio v-model="tech" value="normal">普通选项</cl-radio>
</template>

<script setup>
  import { ref } from "vue";

  const tech = ref("available");
</script>
```

### 纯文本样式

通过设置 `:show-icon="false"` 隐藏图标，创建纯文本风格的单选框。

```html
<template>
  <cl-radio v-model="textOption" value="option1" :show-icon="false">
    纯文本选项一
  </cl-radio>
  <cl-radio v-model="textOption" value="option2" :show-icon="false">
    纯文本选项二
  </cl-radio>
</template>

<script setup>
  import { ref } from "vue";

  const textOption = ref("option1");
</script>
```

### 自定义图标

使用 `active-icon` 和 `inactive-icon` 属性自定义选中和未选中状态的图标。

```html
<template>
  <cl-radio
    v-model="favorite"
    value="liked"
    active-icon="heart-fill"
    inactive-icon="heart-line"
  >
    我喜欢的
  </cl-radio>
  <cl-radio
    v-model="favorite"
    value="starred"
    active-icon="star-fill"
    inactive-icon="star-line"
  >
    我收藏的
  </cl-radio>
</template>

<script setup>
  import { ref } from "vue";

  const favorite = ref("liked");
</script>
```

### 动态渲染选项

通过循环渲染创建动态的单选框组，注意需要为选项数组指定正确的 TypeScript 类型。

```html
<template>
  <cl-radio
    v-for="(item, index) in frameworkOptions"
    :key="index"
    v-model="selectedTech"
    :value="item.value"
  >
    {{ item.label }}
  </cl-radio>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { type ClRadioOption } from "@/uni_modules/cool-ui";

  // 定义选项数据类型
  const frameworkOptions = ref<ClRadioOption[]>([
    { label: "Vue.js", value: "vue" },
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ]);

  // 当前选中的技术栈
  const selectedTech = ref("vue");
</script>
```
