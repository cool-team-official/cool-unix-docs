# List 列表

List 组件用于展示一系列的数据项，支持自定义样式、交互操作和数据渲染。

## cl-list

列表容器组件，用于展示多个列表项。

### 基础参数

| 参数   | 说明         | 类型                        | 可选值 | 默认值 |
| ------ | ------------ | --------------------------- | ------ | ------ |
| pt     | 样式透传配置 | [PassThrough](#passthrough) | -      | -      |
| list   | 列表数据源   | ClListItem[]                | -      | []     |
| title  | 列表标题     | string                      | -      | -      |
| border | 是否显示边框 | boolean                     | -      | false  |

### PassThrough

样式透传配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明           | 类型                                                        |
| --------- | -------------- | ----------------------------------------------------------- |
| className | 组件根元素样式 | string                                                      |
| list      | 列表容器配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| item      | 列表项配置     | [ClListItemPassThrough](#cllistitempassthrough)             |

```ts
export type ClListItemPassThrough = {
  className?: string;
  inner?: PassThroughProps;
  label?: PassThroughProps;
  content?: PassThroughProps;
  icon?: ClIconProps;
  collapse?: PassThroughProps;
};
```

## cl-list-item

列表项组件，用于展示单个数据项，支持图标、箭头、滑动操作等功能。

### 基础参数

| 参数      | 说明             | 类型                         | 可选值               | 默认值 |
| --------- | ---------------- | ---------------------------- | -------------------- | ------ |
| pt        | 样式透传配置     | [PassThrough](#passthrough)  | -                    | -      |
| icon      | 左侧图标名称     | string                       | -                    | -      |
| label     | 标签文本         | string                       | -                    | -      |
| justify   | 内容对齐方式     | "start" \| "center" \| "end" | start / center / end | end    |
| arrow     | 是否显示右侧箭头 | boolean                      | true / false         | false  |
| swipeable | 是否支持滑动操作 | boolean                      | true / false         | false  |
| hoverable | 是否显示点击态   | boolean                      | true / false         | false  |
| disabled  | 是否禁用状态     | boolean                      | true / false         | false  |
| collapse  | 是否支持折叠展开 | boolean                      | true / false         | false  |

### PassThrough

样式透传配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明                  | 类型                                                        |
| --------- | --------------------- | ----------------------------------------------------------- |
| className | 组件根元素的 CSS 类名 | string                                                      |
| inner     | 内部容器样式配置      | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| label     | 标签文本样式配置      | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| content   | 内容区域样式配置      | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| icon      | 图标样式配置          | [ClIconProps](/src/components/basic/icon.md#passthrough)    |
| collapse  | 折叠内容样式配置      | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础用法

最简单的列表项用法，包含标签和内容。

```html
<cl-list-item label="用户名">
  <cl-text>神仙都没用</cl-text>
</cl-list-item>
```

### 内容对齐

通过 `justify` 属性控制内容的对齐方式。

```html
<cl-list-item label="QQ" justify="start">
  <cl-text>615206459</cl-text>
</cl-list-item>
```

### 带箭头指示

设置 `arrow` 属性显示右侧箭头，通常用于表示可点击跳转。

```html
<cl-list-item label="年龄" arrow>
  <cl-text>18</cl-text>
</cl-list-item>
```

### 带图标

通过 `icon` 属性添加左侧图标，增强视觉效果。

```html
<cl-list-item label="余额" icon="wallet-line">
  <cl-text>10,000</cl-text>
</cl-list-item>
```

### 折叠展开

设置 `collapse` 参数并使用 `#collapse` 插槽实现折叠展开功能。

```html
<cl-list-item label="点击展开" collapse arrow>
  <template #collapse>
    <view class="bg-surface-100 dark:bg-surface-700 p-3 rounded-xl">
      <cl-text>
        云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。
      </cl-text>
    </view>
  </template>
</cl-list-item>
```

### 滑动操作

设置 `swipeable` 参数并使用 `#swipe-right`、`#swipe-left` 插槽实现滑动操作功能。

```html
<!-- 左滑显示编辑按钮 -->
<cl-list-item label="左滑编辑" swipeable>
  <template #swipe-right>
    <view
      class="bg-green-500 w-20 h-full flex flex-row items-center justify-center"
    >
      <text class="text-white text-md">编辑</text>
    </view>
  </template>
</cl-list-item>

<!-- 右滑显示删除按钮 -->
<cl-list-item ref="listItemRef" label="右滑删除" swipeable>
  <template #swipe-left>
    <view
      class="bg-red-500 w-20 h-full flex flex-row items-center justify-center"
      @tap="onDelete"
    >
      <text class="text-white text-md">删除</text>
    </view>
  </template>
</cl-list-item>
```

### 列表容器

使用 `cl-list` 组件创建带标题和边框的列表容器。

```html
<cl-list border title="功能">
  <cl-list-item label="我的订单" hoverable></cl-list-item>
  <cl-list-item label="我的收藏" hoverable></cl-list-item>
  <cl-list-item label="我的钱包" hoverable></cl-list-item>
</cl-list>
```

### 数据驱动渲染

通过 `:list` 属性传入数据数组，实现批量渲染。需要定义 `ClListItem` 类型。

```html
<cl-list border title="功能" :list="list"></cl-list>

<script lang="ts" setup>
  import { ref } from "vue";
  import { type ClListItem } from "@/uni_modules/cool-ui";

  const list = ref<ClListItem[]>([
    {
      label: "我的订单",
    },
    {
      label: "我的收藏",
    },
    {
      label: "我的钱包",
      content: "10,000.00",
    },
  ]);
</script>
```
