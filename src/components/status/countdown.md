# Countdown 倒计时

倒计时组件用于展示剩余时间，支持多种时间格式和自定义样式，常用于活动倒计时、验证码倒计时等场景。

## 基础参数

| 参数     | 说明                                         | 类型                        | 可选值 | 默认值        |
| -------- | -------------------------------------------- | --------------------------- | ------ | ------------- |
| pt       | 样式穿透配置，用于自定义组件内部元素样式     | [PassThrough](#passthrough) | -      | -             |
| format   | 时间格式化模板，支持 {d}天 {h}时 {m}分 {s}秒 | string                      | -      | "{h}:{m}:{s}" |
| hideZero | 是否隐藏值为 0 的时间单位                    | boolean                     | -      | false         |
| day      | 指定倒计时天数                               | number                      | -      | 0             |
| hour     | 指定倒计时小时数                             | number                      | -      | 0             |
| minute   | 指定倒计时分钟数                             | number                      | -      | 0             |
| second   | 指定倒计时秒数                               | number                      | -      | 0             |
| datetime | 目标结束时间，可以是 Date 对象或日期字符串   | string \| Date              | -      | -             |

## 事件

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| done   | 倒计时结束时触发 | -        |

## PassThrough

样式穿透配置，允许您自定义组件内部元素的样式类名。

| 参数      | 说明             | 类型                                                        |
| --------- | ---------------- | ----------------------------------------------------------- |
| className | 组件根元素样式   | string                                                      |
| text      | 数字文本元素配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| splitor   | 分隔符元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 示例

### 基础用法

基于目标时间进行倒计时，自动计算剩余时间。

```html
<cl-countdown :datetime="datetime"></cl-countdown>

<script lang="ts" setup>
  import { ref } from "vue";
  import { dayUts } from "@/cool";

  // 设置倒计时目标时间为 1 分钟后
  const datetime = ref(dayUts().add(1, "minute").toDate());
</script>
```

### 隐藏零值单位

当某个时间单位为 0 时，可以选择隐藏该单位，如 `00:59` 会显示为 `59`。

```html
<cl-countdown :minute="60" hide-zero></cl-countdown>
```

### 自定义时间格式

#### 包含天数格式

参数 `format` 默认不包含天数标识符，需要手动配置。

```html
<cl-countdown :day="2" format="{d}天{h}:{m}:{s}"></cl-countdown>
```

#### 中文格式

使用中文单位显示更直观的时间格式。

```html
<cl-countdown :day="1" format="{d}天{h}时{m}分{s}秒"></cl-countdown>
```

### 指定时间单位

#### 指定小时倒计时

```html
<!-- 2 小时倒计时 -->
<cl-countdown :hour="2"></cl-countdown>
```

#### 指定分钟倒计时

```html
<!-- 2 分钟倒计时 -->
<cl-countdown :minute="2"></cl-countdown>
```

#### 指定秒数倒计时

```html
<!-- 10 秒倒计时 -->
<cl-countdown :second="10"></cl-countdown>
```

### 倒计时完成回调

倒计时结束后可以执行特定操作，如跳转页面、显示提示等。

```html
<cl-countdown :second="5" @done="onDone"></cl-countdown>

<script lang="ts" setup>
  function onDone() {
    console.log("倒计时结束");
    // 这里可以执行倒计时结束后的逻辑
  }
</script>
```

### 自定义样式

通过 `pt` 参数可以灵活调整组件样式，实现各种视觉效果。

```html
<cl-countdown
  :hour="10"
  :pt="{
    text: {
      className: parseClass([
        'px-2 py-1 rounded-md',
        [isDark, 'bg-surface-700', 'bg-surface-100'],
      ]),
    },
    splitor: {
      className: 'px-2',
    },
  }"
></cl-countdown>

<script lang="ts" setup>
  import { parseClass, isDark } from "@/cool";
</script>
```
