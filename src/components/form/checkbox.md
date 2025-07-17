# checkbox 多选框

checkbox 多选框组件用于在一组选项中进行单一选择。支持自定义图标、样式穿透配置，以及灵活的事件处理。

## 参数

| 参数         | 说明                 | 类型                        | 可选值 | 默认值                |
| ------------ | -------------------- | --------------------------- | ------ | --------------------- |
| pt           | 样式穿透配置         | [PassThrough](#passthrough) | -      | -                     |
| modelValue   | 绑定值（双向绑定）   | any[] \| boolean            | -      | []                    |
| activeIcon   | 选中状态的图标名称   | string                      | -      | "checkbox-line"       |
| inactiveIcon | 未选中状态的图标名称 | string                      | -      | "checkbox-blank-line" |
| showIcon     | 是否显示状态图标     | boolean                     | -      | true                  |
| label        | 多选框的标签文本     | string                      | -      | -                     |
| value        | 该多选框对应的唯一值 | string \| number \| boolean | -      | -                     |
| disabled     | 是否禁用该多选框     | boolean                     | -      | false                 |

## 事件

| 事件名称 | 说明                     | 回调参数                             |
| -------- | ------------------------ | ------------------------------------ |
| change   | 选中状态变化时触发的事件 | (value: string \| number \| boolean) |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明                   | 类型                                                        |
| --------- | ---------------------- | ----------------------------------------------------------- |
| className | 组件根元素的 CSS 类名  | string                                                      |
| icon      | 图标元素的属性配置     | [ClIconProps]                                               |
| label     | 标签文本元素的样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础用法

最基本的多选框使用方式，通过 `v-model` 实现双向数据绑定。

```html
<template>
  <cl-checkbox v-model="selectedFramework" value="vue">Vue.js</cl-checkbox>
  <cl-checkbox v-model="selectedFramework" value="react">React</cl-checkbox>
  <cl-checkbox v-model="selectedFramework" value="angular">Angular</cl-checkbox>
  <cl-checkbox v-model="selectedFramework" value="svelte">Svelte</cl-checkbox>
</template>

<script setup>
  import { ref } from "vue";

  // 当前选中的框架
  const selectedFramework = ref(["vue"]);
</script>
```

### 禁用状态

使用 `disabled` 属性可以禁用特定的多选框选项。

```html
<template>
  <cl-checkbox v-model="tech" value="available">可用选项</cl-checkbox>
  <cl-checkbox v-model="tech" value="disabled" disabled>禁用选项</cl-checkbox>
  <cl-checkbox v-model="tech" value="normal">普通选项</cl-checkbox>
</template>

<script setup>
  import { ref } from "vue";

  const tech = ref(["avaiable"]);
</script>
```

### 纯文本样式

通过设置 `:show-icon="false"` 隐藏图标，创建纯文本风格的多选框。

```html
<template>
  <cl-checkbox v-model="textOption" value="option1" :show-icon="false">
    纯文本选项一
  </cl-checkbox>
  <cl-checkbox v-model="textOption" value="option2" :show-icon="false">
    纯文本选项二
  </cl-checkbox>
</template>

<script setup>
  import { ref } from "vue";

  const textOption = ref(["option1"]);
</script>
```

### boolean 类型值

返回值类型为 `true` 或 `false`

```html
<template>
  <cl-checkbox v-model="agree">同意并阅读《用户协议》</cl-checkbox>
</template>

<script setup>
  import { ref } from "vue";

  const agree = ref(false);
</script>
```

### 自定义图标

使用 `active-icon` 和 `inactive-icon` 属性自定义选中和未选中状态的图标。

```html
<template>
  <cl-checkbox
    v-model="favorite"
    value="liked"
    active-icon="heart-fill"
    inactive-icon="heart-line"
  >
    我喜欢的
  </cl-checkbox>
  <cl-checkbox
    v-model="favorite"
    value="starred"
    active-icon="star-fill"
    inactive-icon="star-line"
  >
    我收藏的
  </cl-checkbox>
</template>

<script setup>
  import { ref } from "vue";

  const favorite = ref(["liked"]);
</script>
```

### 动态渲染选项

通过循环渲染创建动态的多选框组，注意需要为选项数组指定正确的 TypeScript 类型。

```html
<template>
  <cl-checkbox
    v-for="(item, index) in frameworkOptions"
    :key="index"
    v-model="selectedTech"
    :value="item.value"
  >
    {{ item.label }}
  </cl-checkbox>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { type ClCheckboxOption } from "@/uni_modules/cool-ui";

  // 定义选项数据类型
  const frameworkOptions = ref<ClCheckboxOption[]>([
    { label: "Vue.js", value: "vue" },
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ]);

  // 当前选中的技术栈
  const selectedTech = ref(["vue"]);
</script>
```
