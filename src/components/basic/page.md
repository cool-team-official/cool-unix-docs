# Page 页面

`cl-page` 组件是一个基础的页面容器组件。

## 功能特性

- **解决滚动问题**：解决 APP 端页面超过一屏无法滚动需要手动在最顶级添加 `<scroll-view :style="{ flex: 1 }"></scroll-view>` 的问题，
- **全局组件扩展**：可以扩展更多的全局组件功能
- **主题切换**：默认在左下角提供切换亮色和深色模式的按钮，可在 `config/index.ts` 中通过 `showDarkButton` 参数配置

:::tip 提示
建议在每个页面级组件的最顶级都添加 `cl-page` 组件，如：

```vue
<template>
  <cl-page>
    <!-- 页面内容 -->
  </cl-page>
</template>
```

:::

## 基础参数

| 参数    | 说明             | 类型      | 可选值 | 默认值 |
| ------- | ---------------- | --------- | ------ | ------ |
| backTop | 是否显示回到顶部 | `boolean` | -      | `true` |

## useUi

用于调用全局 UI 组件的组合式函数。

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();
```

### 方法

| 方法                                               | 说明             | 参数                                                             |
| -------------------------------------------------- | ---------------- | ---------------------------------------------------------------- |
| [showConfirm](/src/components/feedback/confirm.md) | 显示确认弹窗     | `(options: ClConfirmOptions)`                                    |
| [showTips](/src/components/feedback/confirm.md)    | 显示确认提示弹窗 | `(message: string, callback: (action: ClConfirmAction) => void)` |
| [showToast](/src/components/feedback/toast.md)     | 显示提示弹窗     | `(options: ClToastOptions)`                                      |
| showLoading                                        | 显示加载框       | `(text: string \| null = null)`                                  |
| hideLoading                                        | 隐藏贾樟柯       | `()`                                                             |

### 使用示例

```ts
// 显示确认弹窗
ui.showConfirm({
  title: "提示",
  message: "确定要提交吗？",
});

// 显示提示信息
ui.showTips("订单已结算成功", () => {
  router.back();
});

// 显示 Toast 消息
ui.showToast({
  message: "Hello",
});

// 显示 Loading
ui.showLoading("加载中");

// 隐藏 Loading
ui.hideLoading();
```

## usePage

用于页面相关操作的组合式函数。

```ts
import { usePage } from "@/uni_modules/cool-ui";

const page = usePage();
```

### 方法

| 方法           | 说明             | 类型                                | 返回值   |
| -------------- | ---------------- | ----------------------------------- | -------- |
| `path`         | 获取当前页面路径 | `()`                                | `string` |
| `getScrollTop` | 获取滚动位置     | `()`                                | `number` |
| `scrollTo`     | 滚动到指定位置   | `(top: number)`                     | -        |
| `scrollToTop`  | 回到顶部         | `()`                                | -        |
| `onScroll`     | 监听页面滚动     | `(callback: (top: number) => void)` | -        |

:::tip 提示
`onScroll` 可以在任意子组件中使用，不仅解决了 `onPageScroll` 的兼容性问题，还提供了更灵活的页面滚动监听能力
:::

### 使用示例

```ts
const { onScroll } = usePage();

// 监听页面滚动
onScroll((top) => {
  console.log(`页面滚动距离: ${top}px`);
});

// 固定到指定位置
scrollTo(1000);
```
