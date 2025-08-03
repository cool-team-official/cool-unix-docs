# SelectDate 日期选择器

一个功能强大的日期时间选择器组件，支持多种粒度的日期时间选择，提供灵活的配置选项和自定义样式。

## 基础参数

| 参数             | 说明                           | 类型                        | 可选值                                                        | 默认值                               |
| ---------------- | ------------------------------ | --------------------------- | ------------------------------------------------------------- | ------------------------------------ |
| pt               | 样式穿透配置                   | [PassThrough](#passthrough) | -                                                             | -                                    |
| modelValue       | 双向绑定的日期值               | string                      | -                                                             | -                                    |
| title            | 选择器弹窗顶部标题             | string                      | -                                                             | "请选择"                             |
| placeholder      | 输入框占位符文本               | string                      | -                                                             | "请选择"                             |
| headers          | 选择器列表头部标题数组         | string[]                    | -                                                             | ['年', '月', '日', '时', '分', '秒'] |
| showTrigger      | 是否显示默认的选择器触发元素   | boolean                     | true / false                                                  | true                                 |
| disabled         | 是否禁用选择器，禁用后无法操作 | boolean                     | true / false                                                  | false                                |
| type             | 选择器类型，控制日期选择的精度 | string                      | "year" \| "month" \| "date" \| "hour" \| "minute" \| "second" | "second"                             |
| confirmText      | 确认按钮显示文本               | string                      | "确定"                                                        |                                      |
| showConfirm      | 是否显示确认按钮               | boolean                     | true                                                          |                                      |
| cancelText       | 取消按钮显示文本               | string                      | "取消"                                                        |                                      |
| showCancel       | 是否显示取消按钮               | boolean                     | true                                                          |                                      |
| labelFormat      | 选中值在触发器中的显示格式     | string                      | ""                                                            |                                      |
| valueFormat      | 输出值的格式化规则             | string                      | ""                                                            |                                      |
| start            | 可选择的最早日期时间           | string                      | "1950-01-01 00:00:00"                                         |                                      |
| end              | 可选择的最晚日期时间           | string                      | "2050-12-31 23:59:59"                                         |                                      |
| rangeable        | 是否范围选择                   | boolean                     |                                                               | false                                |
| startPlaceholder | 开始日期占位符                 | string                      |                                                               | "开始日期"                           |
| endPlaceholder   | 结束日期占位符                 | string                      |                                                               | "结束日期"                           |
| rangeSeparator   | 范围分隔符                     | string                      |                                                               | "至"                                 |
| showShortcuts    | 是否显示快捷选项               | boolean                     |                                                               | true                                 |
| shortcuts        | 快捷选项                       | ClSelectDateShortcut[]      |                                                               | []                                   |

## 事件

| 事件名称          | 说明                                  | 回调参数        |
| ----------------- | ------------------------------------- | --------------- |
| update:modelValue | 范围选择完成后更新绑定值 `modelValue` | value: string   |
| change            | 日期选择完成后触发的事件              | value: string   |
| update:values     | 范围选择完成后更新绑定值 `values`     | value: string[] |
| range-change      | 范围选择完成后触发的事件              | value: string[] |

## 方法

| 方法名    | 说明         | 参数                           |
| --------- | ------------ | ------------------------------ |
| open      | 打开弹窗     | callback: (value: any) => void |
| close     | 关闭弹窗     |                                |
| clear     | 清空         |                                |
| setValue  | 设置值       | value: string                  |
| setValues | 设置范围值   | value: string[]                |
| setRange  | 设置范围索引 | index: number                  |
| confirm   | 确认         |                                |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数    | 说明                   | 类型                       |
| ------- | ---------------------- | -------------------------- |
| trigger | 选择器触发元素样式配置 | ClSelectTriggerPassThrough |
| popup   | 弹窗容器样式配置       | [ClPopupPassThrough](/src/components/feedback/popup.md#passthrough)       |

## 示例

### 基础用法

最简单的日期选择器，默认精确到秒级别。

```html
<template>
  <cl-select-date v-model="selectedDate"></cl-select-date>
</template>

<script setup>
  import { ref } from "vue";

  const selectedDate = ref("");
</script>
```

### 不同精度选择

根据业务需求选择不同的时间精度。

#### 选择年份

```html
<cl-select-date v-model="year" type="year"></cl-select-date>
```

#### 选择年月

```html
<cl-select-date v-model="month" type="month"></cl-select-date>
```

#### 选择年月日

```html
<cl-select-date v-model="date" type="date"></cl-select-date>
```

#### 选择精确时间

```html
<cl-select-date
  v-model="dateTime"
  type="second"
  title="选择时间"
  placeholder="请选择日期时间"
></cl-select-date>
```

### 格式化显示

自定义日期的显示和输出格式。

```html
<cl-select-date
  v-model="formattedDate"
  type="date"
  label-format="YYYY年MM月DD日"
  value-format="YYYY-MM-DD"
  title="选择日期"
></cl-select-date>
```

### 国际化支持

自定义表头文本，支持多语言场景。

```html
<cl-select-date
  v-model="internationalDate"
  :headers="['Year', 'Month', 'Date', 'Hour', 'Minute', 'Second']"
  confirm-text="Confirm"
  cancel-text="Cancel"
  title="Select Date"
></cl-select-date>
```

### 限制时间范围

设置可选择的时间范围，适用于预约、活动等场景。

```html
<cl-select-date
  v-model="appointmentDate"
  type="date"
  start="2025-01-01 00:00:00"
  end="2025-12-31 23:59:59"
  title="选择预约日期"
  placeholder="请选择预约日期"
></cl-select-date>
```

### 自定义触发器

隐藏默认触发器，使用自定义的触发元素。

```html
<template>
  <cl-select-date
    ref="selectDateRef"
    v-model="customDate"
    :show-trigger="false"
    type="date"
  ></cl-select-date>

  <button @click="openDatePicker">点击选择日期</button>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const selectDateRef = ref<ClSelectDateComponentPublicInstance | null>(null);
  const customDate = ref("");

  function openDatePicker() {
    selectDateRef.value!.open((value: string) => {
      console.log("选择的日期:", value);
    });
  }
</script>
```

### 禁用状态

```html
<cl-select-date
  v-model="disabledDate"
  disabled
  placeholder="此选择器已禁用"
></cl-select-date>
```

### 范围选择

- 绑定值是 `v-model:values`，并且是 `string[]` 类型
- 添加 `rangeable`

```html
<cl-select-date v-model:values="values" rangeable></cl-select-date>
```

### 自定义快捷选项

- 添加参数 `shortcuts`，并且是 `ClSelectDateShortcut[]` 类型

```vue
<cl-select-date
  v-model:values="values"
  rangeable
  :shortcuts="shortcuts"
></cl-select-date>

<script setup lang="ts">
import { ref } from "vue";
import { type ClSelectDateShortcut } from "@/uni_modules/cool-ui";
import { dayUts } from "@/cool";

const shortcuts = ref<ClSelectDateShortcut[]>([
  {
    label: "昨日",
    value: [
      dayUts().subtract(1, "day").format("YYYY-MM-DD"),
      dayUts().format("YYYY-MM-DD"),
    ],
  },
  {
    label: "本周",
    value: [
      dayUts().startOf("week").format("YYYY-MM-DD"),
      dayUts().endOf("week").format("YYYY-MM-DD"),
    ],
  },
  {
    label: "本月",
    value: [
      dayUts().startOf("month").format("YYYY-MM-DD"),
      dayUts().endOf("month").format("YYYY-MM-DD"),
    ],
  },
]);
</script>
```

## 注意事项

- **时间范围**：`start` 和 `end` 参数必须是有效的日期时间字符串
- **类型限制**：选择的 `type` 会影响 `headers` 数组的使用长度
- **双向绑定**：`v-model` 绑定的值会根据 `valueFormat` 进行格式化输出
