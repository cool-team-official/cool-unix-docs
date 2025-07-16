# SelectTime 时间选择器

用于选择时间的交互式组件，支持小时、分钟、秒的选择，提供友好的弹窗选择界面。

## 参数

| 参数        | 说明                           | 类型                        | 可选值     | 默认值                   |
| ----------- | ------------------------------ | --------------------------- | ---------- | ------------------------ |
| pt          | 样式穿透配置                   | [PassThrough](#passthrough) | -          | -                        |
| modelValue  | 双向绑定的时间值               | string                      | -          | -                        |
| title       | 选择器弹窗顶部标题             | string                      | -          | "请选择"                 |
| placeholder | 输入框占位符文本               | string                      | -          | "请选择"                 |
| headers     | 选择器列表头部标题数组         | string[]                    | -          | ['小时', '分钟', '秒数'] |
| showTrigger | 是否显示默认的选择器触发元素   | boolean                     | true/false | true                     |
| disabled    | 是否禁用选择器，禁用后无法操作 | boolean                     | true/false | false                    |
| labelFormat | 时间标签格式化字符串           | string                      | -          | "{H}:{m}:{s}"            |

## 事件

| 事件名称 | 说明                   | 回调参数                     |
| -------- | ---------------------- | ---------------------------- |
| change   | 绑定值变化时触发的事件 | value: string - 选择的时间值 |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数    | 说明                   | 类型                       |
| ------- | ---------------------- | -------------------------- |
| trigger | 选择器触发元素样式配置 | ClSelectTriggerPassThrough |
| popup   | 弹窗容器样式配置       | [ClPopupPassThrough]       |

## 示例

### 基础用法

最简单的时间选择器使用方式。

```html
<template>
  <cl-select-time v-model="selectedTime"></cl-select-time>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const selectedTime = ref("");
</script>
```

### 自定义展示格式

通过 `labelFormat` 属性自定义时间的显示格式。

```html
<cl-select-time v-model="time1" label-format="{H}时{m}分{s}秒"></cl-select-time>
```

### 自定义触发器

隐藏默认触发器，使用自定义的触发元素。

```html
<template>
  <cl-select-time
    ref="selectTimeRef"
    v-model="customTime"
    :show-trigger="false"
  ></cl-select-time>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const selectTimeRef = ref<ClSelectTimeComponentPublicInstance | null>(null);
  const customTime = ref("");

  function openTimePicker() {
    selectTimeRef.value!.open((value: string) => {
      console.log("选择的时间:", value);
    });
  }
</script>
```

### 禁用状态

```html
<cl-select-time v-model="disabledTime" disabled></cl-select-time>
```

## 注意事项

- 时间值格式为 "HH:mm:ss" 24 小时制字符串
- `labelFormat` 支持的占位符：`{H}` (小时)、`{m}` (分钟)、`{s}` (秒)
- 当 `showTrigger` 设为 `false` 时，需要手动调用组件的 `open` 方法来显示选择器
- 组件会自动处理时间格式的验证和转换
