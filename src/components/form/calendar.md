# Calendar 日历

日历组件用于选择日期，支持单选、多选和范围选择等多种模式，适用于表单、数据录入等场景。通过丰富的参数配置，可以自定义显示样式、日期范围、头部导航栏、星期显示等，满足不同业务需求。

## cl-calendar

### 基础参数

| 参数                | 说明                            | 类型                              | 可选值 | 默认值    |
| ------------------- | ------------------------------- | --------------------------------- | ------ | --------- |
| pt                  | 样式穿透配置                    | [PassThrough](#passthrough)       | -      | -         |
| modelValue          | 当前选中的日期值（单选模式）    | string \| null                    | -      | null      |
| date                | 选中的日期数组（多选/范围模式） | string[]                          | -      | []        |
| mode                | 日期选择模式                    | "single" \| "multiple" \| "range" | -      | "single"  |
| dateConfig          | 日期配置                        | ClCalendarDateConfig[]            |        | []        |
| year                | 设置年份（首次定位）            | number                            |        | 0         |
| month               | 设置月份（首次定位）            | number                            |        | 0         |
| showOtherMonth      | 是否显示其他月份的日期          | boolean                           |        | true      |
| showHeader          | 是否显示头部导航栏              | boolean                           |        | true      |
| showWeeks           | 是否显示星期                    | boolean                           |        | true      |
| cellHeight          | 单元格高度                      | number                            |        | 66        |
| cellGap             | 单元格间距                      | number                            |        | 0         |
| color               | 主色                            | string                            |        | ""        |
| textColor           | 当前月份日期颜色                | string                            |        | ""        |
| textOtherMonthColor | 其他月份日期颜色                | string                            |        | ""        |
| textDisabledColor   | 禁用日期颜色                    | string                            |        | ""        |
| textTodayColor      | 今天日期颜色                    | string                            |        | "#ff6b6b" |
| textSelectedColor   | 选中日期颜色                    | string                            |        | "#ffffff" |
| bgSelectedColor     | 选中日期背景颜色                | string                            |        | ""        |
| bgRangeColor        | 范围选择背景颜色                | string                            |        | ""        |

### 事件

| 事件名称          | 说明                                 | 回调参数       |
| ----------------- | ------------------------------------ | -------------- |
| update:modelValue | 绑定值 `modelValue` 变化时触发的事件 | string \| null |
| update:date       | 绑定值 `date` 变化时触发的事件       | string[]       |
| change            | 绑定值变化时触发的事件               | string[]       |

### PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明           | 类型   |
| --------- | -------------- | ------ |
| className | 组件根元素样式 | string |

## cl-calendar-select

### 基础参数

| 参数         | 说明                            | 类型                              | 可选值 | 默认值   |
| ------------ | ------------------------------- | --------------------------------- | ------ | -------- |
| pt           | 样式穿透配置                    | [PassThrough](#passthrough)       | -      | -        |
| modelValue   | 当前选中的日期值（单选模式）    | string \| null                    | -      | null     |
| date         | 选中的日期数组（多选/范围模式） | string[]                          | -      | []       |
| mode         | 日期选择模式                    | "single" \| "multiple" \| "range" | -      | "single" |
| dateConfig   | 日期配置                        | ClCalendarDateConfig[]            |        | []       |
| title        | 选择器标题                      | string                            | -      | '请选择' |
| placeholder  | 选择器占位符                    | string                            | -      | '请选择' |
| showTrigger  | 是否显示选择器触发器            | boolean                           | -      | true     |
| disabled     | 是否禁用选择器                  | boolean                           | -      | false    |
| columnCount  | 列数                            | number                            | -      | 1        |
| splitor      | 分隔符                          | string                            | -      | '、'     |
| rangeSplitor | 范围分隔符                      | string                            | -      | ' 至 '   |
| confirmText  | 确认按钮文本                    | string                            | -      | '确定'   |
| showConfirm  | 是否显示确认按钮                | boolean                           | -      | true     |
| cancelText   | 取消按钮文本                    | string                            | -      | '取消'   |
| showCancel   | 是否显示取消按钮                | boolean                           | -      | true     |

### 方法

| 方法名 | 说明     | 参数                                                  |
| ------ | -------- | ----------------------------------------------------- |
| open   | 打开弹窗 | callback: (value: string \| string[] \| null) => void |
| close  | 关闭弹窗 |                                                       |

### 事件

| 事件名称          | 说明                                 | 回调参数       |
| ----------------- | ------------------------------------ | -------------- |
| update:modelValue | 绑定值 `modelValue` 变化时触发的事件 | string \| null |
| update:date       | 绑定值 `date` 变化时触发的事件       | string[]       |
| change            | 绑定值变化时触发的事件               | string[]       |
| select            | 选择日期时触发的事件                 | string[]       |

### PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数    | 说明           | 类型                                                                |
| ------- | -------------- | ------------------------------------------------------------------- |
| trigger | 选择器样式配置 | ClSelectTriggerPassThrough                                          |
| popup   | 弹窗样式配置   | [ClPopupPassThrough](/src/components/feedback/popup.md#passthrough) |

## 示例

### 日历面板

```vue
<template>
  <cl-calendar v-model="date"></cl-calendar>
</template>

<script lang="ts" setup>
const date = ref("2025-10-01");
</script>
```

### 使用选择器

```vue
<template>
  <cl-calendar-select v-model="date" ref="calendarRef"></cl-calendar-select>
</template>

<script lang="ts" setup>
const calendarRef = ref<ClCalendarComponentPublicInstance | null>(null);

const date = ref("2025-10-01");
</script>
```

- 使用 `calendarRef` 时，请务必为其指定类型：`ClCalendarComponentPublicInstance | null`，以确保类型安全和智能提示。

  ```ts
  calendarRef.value!.open((date) => {
    // 注意 date 的类型是 string | string[] | null
    // 使用的时候记得 as
  });
  ```

### 多个日期选择

如需选择多个日期，请使用 `v-model:date` 进行绑定，并传入一个字符串数组。

```vue
<template>
  <cl-calendar v-model:date="date"></cl-calendar>
</template>

<script lang="ts" setup>
const date = ref(["2025-10-01", "2025-10-02", "2025-10-03"]);
</script>
```

### 日期范围选择

如需选择日期范围，请使用 `v-model:date` 进行绑定，并传入一个包含 `[开始日期, 结束日期]` 的字符串数组。

```vue
<template>
  <cl-calendar v-model:date="date"></cl-calendar>
</template>

<script lang="ts" setup>
const date = ref(["2025-10-01", "2025-10-07"]);
</script>
```

### 部分日期禁用

如需禁用部分日期，请使用 `date-config` 参数，并传入一个 `ClCalendarDateConfig[]` 类型的数组。在该数组中，通过设置对应日期的 `disabled` 属性为 `true`，即可实现对指定日期的禁用。

```vue
<template>
  <cl-calendar v-model="date" :date-config="dateConfig"></cl-calendar>
</template>

<script lang="ts" setup>
import type { ClCalendarDateConfig } from "@/uni_modules/cool-ui";

const date = ref("2025-10-01");

const dateConfig = ref<ClCalendarDateConfig[]>([
  {
    date: "2025-10-01",
    disabled: true,
  },
  {
    date: "2025-10-02",
    disabled: true,
  },
]);
</script>
```

### 配置文案

你可以通过 `date-config` 参数，传入一个 `ClCalendarDateConfig[]` 类型的数组，对日历中的日期进行个性化配置。

- `topText`：显示在日期数字上方的文字说明
- `bottomText`：显示在日期数字下方的文字说明
- `color`：设置日期数字的颜色

```vue
<template>
  <cl-calendar v-model="date" :date-config="dateConfig"></cl-calendar>
</template>

<script lang="ts" setup>
import type { ClCalendarDateConfig } from "@/uni_modules/cool-ui";

const date = ref("2025-10-01");

const dateConfig = ref<ClCalendarDateConfig[]>([
  {
    date: "2025-10-01",
    topText: "国庆节",
    bottomText: "¥958",
    color: "red",
  },
  {
    date: "2025-10-02",
    topText: "休",
    bottomText: "¥613",
    color: "red",
  },
  {
    date: "2025-10-03",
    topText: "休",
    bottomText: "¥613",
    color: "red",
  },
]);
</script>
```

### 日期配置

如果你需要根据用户选择的日期动态判断哪些日期应被禁用，可以按照以下步骤操作：

- 通过绑定 `@select` 事件，实时获取用户当前选择的日期
- 将 `dateConfig` 定义为 `computed` 计算属性，在该属性中根据选择结果返回新的日期配置数组，并为需要禁用的日期添加 `disabled` 标记

  ```vue
  <template>
    <cl-calendar-select
      v-model:date="date"
      @select="onCalendarSelect"
      :date-config="dateConfig"
    ></cl-calendar-select>
  </template>

  <script lang="ts" setup>
  const date = ref<string[]>([]);

  // 选中的日期
  const selected = ref<string[]>([]);

  function onCalendarSelect(date: string[]) {
    selected.value = date;
  }

  const dateConfig = computed(() => {
    // 例如：仅允许选择连续的7天，可根据用户已选的第一个日期 date[0] 动态生成禁用日期数组
    return [
      {
        date: "2025-10-01",
        disabled: true,
      },
    ] as ClCalendarDateConfig[]; // 这边必须定义类型 ClCalendarDateConfig[]
  });
  </script>
  ```

:::tip 提示
如需实现类似示例中的 `入住` 和 `离店` 效果，请参照上方的 `日期配置` 用法进行设置。
:::
