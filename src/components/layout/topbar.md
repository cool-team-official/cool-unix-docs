# Topbar 导航栏

顶部导航栏组件，支持自定义标题、返回按钮、颜色配置等功能，常用于页面顶部导航。

## 基础参数

| 参数            | 说明                             | 类型                        | 可选值 | 默认值 |
| --------------- | -------------------------------- | --------------------------- | ------ | ------ |
| pt              | 样式穿透配置，用于自定义组件样式 | [PassThrough](#passthrough) | -      | -      |
| title           | 导航栏标题文本                   | string                      | -      | -      |
| color           | 文字颜色，优先级最高             | string                      | -      | -      |
| backgroundColor | 背景颜色，优先级最高             | string                      | -      | -      |
| showBack        | 是否显示返回按钮                 | boolean                     | -      | true   |
| backPath        | 返回按钮点击后的跳转路径         | string                      | -      | -      |
| backIcon        | 返回按钮使用的图标名称           | string                      | -      | "back" |
| safeAreaTop     | 是否启用安全区域顶部边距         | boolean                     | -      | false  |
| fixed           | 是否固定在页面顶部               | boolean                     | -      | false  |
| height          | 导航栏内容高度                   | number \| string            | -      | -      |

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明             | 类型                                                       |
| --------- | ---------------- | ---------------------------------------------------------- |
| className | 组件根元素样式   | string                                                     |
| title     | 标题文本配置     | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| back      | 返回按钮图标配置 | [ClIconProps](/src/components/basic/icon.md#passthrough)   |

## 使用示例

### 基础用法

简单的导航栏，显示标题和默认返回按钮。

```html
<cl-topbar title="页面标题"></cl-topbar>
```

### 自定义颜色

设置自定义的文字和背景颜色。

```html
<cl-topbar
  title="自定义样式"
  color="white"
  background-color="#409EFF"
></cl-topbar>
```

### 自定义返回图标

更改返回按钮的图标和大小。

```vue
<cl-topbar
  title="自定义返回图标"
  back-icon="home-2-line"
  :pt="{
    back: {
      size: 38,
    },
  }"
>
</cl-topbar>
```

### 自定义返回路径

指定返回按钮的跳转路径。

```vue
<cl-topbar title="登录页面" back-path="/pages/user/login"></cl-topbar>
```

### 吸顶效果

配合 [cl-sticky](/src/components/layout/sticky.md) 组件实现滚动吸顶效果。

```vue
<cl-sticky>
    <cl-topbar title="吸顶导航栏"></cl-topbar>
</cl-sticky>
```

### 固定在顶部

在某些场景下，希望下拉拖动页面时导航栏保持固定位置不移动。

```vue
<cl-topbar title="固定导航栏" fixed></cl-topbar>
```

::: tip 提示
虽然导航栏固定在顶部，但原位置会保留一个同等高度的占位内容，无需手动添加 `padding-top`。
:::

### 包含状态栏高度

如果希望像原生应用一样包含状态栏高度，可以添加 `safe-area-top` 参数。

```vue
<cl-topbar title="包含状态栏" fixed safe-area-top></cl-topbar>
```

### 前后插槽

在导航栏左右两侧添加自定义内容。

```vue
<cl-topbar title="插槽示例">
    <template #prepend>
        <cl-icon name="home-2-line"></cl-icon>
    </template>

    <template #append>
        <cl-button text>保存</cl-button>
    </template>
</cl-topbar>
```

### 内容插槽

在导航栏下方添加额外的内容，如选项卡等。

```vue
<cl-topbar title="选项卡导航">
    <cl-tabs v-model="type" :height="66" :list="typeList"></cl-tabs>
</cl-topbar>

<script lang="ts" setup>
import { ref } from "vue";
import type { ClTabsItem } from "@/uni_modules/cool-ui";

const type = ref("fans");
const typeList = ref<ClTabsItem[]>([
  {
    label: "我的粉丝",
    value: "fans",
  },
  {
    label: "我的关注",
    value: "follow",
  },
]);
</script>
```
