# Confirm 确认框

用于重要操作的二次确认，避免用户误操作。

:::warning 注意
该组件默认已内置在 `cl-page` 中，可以直接使用 `ui.showConfirm` 方法调用
:::

## 打开参数

| 参数        | 说明         | 类型                                                                | 可选值 | 默认值 |
| ----------- | ------------ | ------------------------------------------------------------------- | ------ | ------ |
| title       | 标题         | string                                                              | -      | -      |
| message     | 消息内容     | string                                                              | -      | -      |
| confirmText | 确认按钮文案 | string                                                              | -      | "确认" |
| showConfirm | 显示确认按钮 | boolean                                                             | -      | true   |
| cancelText  | 取消按钮文案 | string                                                              | -      | "取消" |
| showCancel  | 显示取消按钮 | boolean                                                             | -      | true   |
| duration    | 自动关闭时长 | number                                                              | -      | 0      |
| callback    | 关闭回调     | (action: ClConfirmAction) => void                                   | -      | -      |
| beforeClose | 关闭前钩子   | (action: ClConfirmAction, event: ClConfirmBeforeCloseEvent) => void | -      | -      |

## 类型定义

```ts
type ClConfirmAction = "confirm" | "cancel" | "close";

type ClConfirmBeforeCloseEvent = {
  close: () => void;
  showLoading: () => void;
  hideLoading: () => void;
};

type ClConfirmOptions = {
  title: string;
  message: string;
  confirmText?: string;
  showConfirm?: boolean;
  cancelText?: string;
  showCancel?: boolean;
  duration?: number;
  callback?: (action: ClConfirmAction) => void;
  beforeClose?: (
    action: ClConfirmAction,
    event: ClConfirmBeforeCloseEvent
  ) => void;
};
```

## 使用示例

### 基础用法

通过 `callback` 参数监听用户操作，`action` 表示触发类型：

- `confirm` - 点击确认按钮
- `cancel` - 点击取消按钮
- `close` - 点击遮罩层或关闭按钮

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

ui.showConfirm({
  title: "删除确认",
  message: "确定要删除这条记录吗？删除后不可恢复。",
  callback(action) {
    if (action === "confirm") {
      console.log("用户确认删除");
      // 执行删除操作
    } else {
      console.log("用户取消操作");
    }
  },
});
```

### 自定义按钮文案

可以自定义确认和取消按钮的文案：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

function showCustomText() {
  ui.showConfirm({
    title: "退出确认",
    message: "确定要退出当前账户吗？",
    confirmText: "退出",
    cancelText: "留下",
    callback(action) {
      if (action === "confirm") {
        // 执行退出登录
      }
    },
  });
}
```

### 关闭前钩子

通过 `beforeClose` 可以在关闭前执行异步操作，如网络请求：

- `close()` - 关闭确认框
- `showLoading()` - 确认按钮显示加载状态
- `hideLoading()` - 确认按钮隐藏加载状态

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

function showAsyncConfirm() {
  ui.showConfirm({
    title: "删除确认",
    message: "确定要删除这条记录吗？",
    beforeClose: (action, { close, showLoading, hideLoading }) => {
      if (action === "confirm") {
        // 显示加载状态
        showLoading();

        // 模拟异步删除操作
        setTimeout(() => {
          console.log("删除成功");
          close();
        }, 2000);
      } else {
        // 直接关闭
        close();
      }
    },
  });
}
```

### 定时自动关闭

设置 `duration` 参数实现定时关闭，单位为毫秒，设置为 `0` 则不自动关闭：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

function showAutoClose() {
  ui.showConfirm({
    title: "操作成功",
    message: "您的操作已成功完成，3秒后自动关闭",
    showCancel: false,
    confirmText: "知道了",
    duration: 3000,
  });
}
```

### 仅显示确认按钮

通过设置 `showCancel: false` 隐藏取消按钮：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

function showOnlyConfirm() {
  ui.showConfirm({
    title: "提示",
    message: "操作已完成，请知悉。",
    showCancel: false,
    callback(action) {
      console.log("用户已确认:", action);
    },
  });
}
```
