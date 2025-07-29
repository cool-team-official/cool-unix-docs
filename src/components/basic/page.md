# Page 页面

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

## 功能特性

- **解决滚动问题**：解决 APP 端页面超过一屏无法滚动需要手动在最顶级添加 `<scroll-view :style="{ flex: 1 }"></scroll-view>` 的问题，
- **全局组件扩展**：可以扩展更多的全局组件功能
- **主题切换**：默认在左下角提供切换亮色和深色模式的按钮，可在 `config/index.ts` 中通过 `showDarkButton` 参数配置

## useUi 组合式函数

用于调用全局 UI 组件的组合式函数。

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();
```

### 方法

| 方法                                               | 说明             | 参数                                                           |
| -------------------------------------------------- | ---------------- | -------------------------------------------------------------- |
| [showConfirm](/src/components/feedback/confirm.md) | 显示确认弹窗     | `options: ClConfirmOptions`                                    |
| [showTips](/src/components/feedback/confirm.md)    | 显示确认提示弹窗 | `message: string, callback: (action: ClConfirmAction) => void` |
| [showToast](/src/components/feedback/toast.md)     | 显示提示弹窗     | `options: ClToastOptions`                                      |

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
```

## usePage 组合式函数

用于页面相关操作的组合式函数。

```ts
import { usePage } from "@/cool";

const page = usePage();
```

### 方法

| 方法                | 说明                             | 参数                      | 返回值    |
| ------------------- | -------------------------------- | ------------------------- | --------- |
| `path`              | 获取当前页面路径                 | -                         | `string`  |
| `onPageScroll`      | 监听页面滚动事件                 | `(top: number) => void`   | -         |
| `hasCustomTabBar`   | 检查页面是否需要计算 tabBar 高度 | -                         | `boolean` |
| `getTabBarHeight`   | 获取 tabBar 高度                 | -                         | `number`  |
| `getSafeAreaHeight` | 获取安全区域高度                 | `type: "top" \| "bottom"` | `number`  |

### 使用示例

```ts
// 监听页面滚动
page.onPageScroll((top) => {
  console.log(`页面滚动距离: ${top}px`);
});

// 获取 tabBar 高度
const tabBarHeight = page.getTabBarHeight();

// 获取顶部安全区域高度
const topSafeHeight = page.getSafeAreaHeight("top");

// 获取底部安全区域高度
const bottomSafeHeight = page.getSafeAreaHeight("bottom");
```
