# Rate 评分

用于对事物进行评级操作的组件，支持星级评分、自定义图标、半星评分等功能。

## 参数

| 参数       | 说明                     | 类型                        | 可选值 | 默认值      |
| ---------- | ------------------------ | --------------------------- | ------ | ----------- |
| pt         | 样式穿透配置             | [PassThrough](#passthrough) | -      | -           |
| modelValue | 当前评分值               | number                      | -      | 0           |
| max        | 最大评分数（星级总数）   | number                      | -      | 5           |
| disabled   | 是否禁用                 | boolean                     | -      | false       |
| allowHalf  | 是否允许半星评分         | boolean                     | -      | false       |
| showScore  | 是否显示当前分数         | boolean                     | -      | false       |
| size       | 单个星级的尺寸大小（px） | number                      | -      | 40          |
| icon       | 激活状态的图标名称       | string                      | -      | "star-fill" |
| voidIcon   | 未激活状态的图标名称     | string                      | -      | "star-fill" |
| color      | 激活状态的颜色           | string                      | -      | "primary"   |
| voidColor  | 未激活状态的颜色         | string                      | -      | "#dddddd"   |

## 事件

| 事件名称 | 说明                   | 回调参数                |
| -------- | ---------------------- | ----------------------- |
| change   | 绑定值变化时触发的事件 | (value: number) => void |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明                  | 类型                                                        |
| --------- | --------------------- | ----------------------------------------------------------- |
| className | 组件根元素的 CSS 类名 | string                                                      |
| item      | 星级项的样式配置      | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| score     | 分数显示的样式配置    | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| icon      | 图标组件的属性配置    | [ClIconProps]                                               |

## 示例

### 基本用法

最简单的评分组件使用方式：

```html
<cl-rate v-model="score"></cl-rate>

<script lang="ts" setup>
  import { ref } from "vue";
  const score = ref<number>(2);
</script>
```

### 自定义尺寸

通过 `size` 属性设置星级的大小：

```html
<cl-rate v-model="score" :size="50"></cl-rate>

<script lang="ts" setup>
  import { ref } from "vue";
  const score = ref<number>(2);
</script>
```

### 半星评分

开启 `allowHalf` 属性支持半星评分，同时可以显示具体分数：

```html
<cl-rate v-model="score" allow-half show-score></cl-rate>

<script lang="ts" setup>
  import { ref } from "vue";
  const score = ref<number>(2.5);
</script>
```

### 自定义图标

使用不同的图标来表示评分：

```html
<cl-rate v-model="score" icon="heart-fill" void-icon="heart-line"></cl-rate>

<script lang="ts" setup>
  import { ref } from "vue";
  const score = ref<number>(3);
</script>
```

### 禁用状态

设置 `disabled` 属性禁用用户交互：

```html
<cl-rate v-model="score" disabled></cl-rate>

<script lang="ts" setup>
  import { ref } from "vue";
  const score = ref<number>(4);
</script>
```

### 自定义颜色

通过 `color` 和 `voidColor` 属性自定义颜色：

```html
<cl-rate v-model="score" color="#ff6b35" void-color="#f0f0f0"></cl-rate>

<script lang="ts" setup>
  import { ref } from "vue";
  const score = ref<number>(3);
</script>
```

## 使用说明

- 默认支持 1-5 星评分，可通过 `max` 属性调整最大评分数
- 当 `allowHalf` 为 `true` 时，支持 0.5 的步进
- 可以通过 CSS 变量或样式穿透进一步自定义组件外观
- 建议在表单中使用时配合表单验证规则
