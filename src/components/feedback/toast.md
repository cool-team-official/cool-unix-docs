# Toast 提示框

Toast 组件用于向用户显示简短的消息反馈，支持多种类型和位置配置。

:::warning 注意
该组件默认已内置在 `cl-page` 中，可以直接使用 `ui.showToast` 方法调用
:::

## 打开参数

| 参数     | 说明         | 类型    | 可选值                                                   | 默认值   |
| -------- | ------------ | ------- | -------------------------------------------------------- | -------- |
| type     | 提示类型     | string  | success \| warn \| error \| question \| disabled \| stop | -        |
| icon     | 自定义图标   | string  | -                                                        | -        |
| image    | 自定义图片   | string  | -                                                        | -        |
| message  | 提示内容     | string  | -                                                        | -        |
| position | 显示位置     | string  | top \| center \| bottom                                  | center   |
| duration | 自动关闭时长 | number  | -                                                        | 3000(ms) |
| clear    | 清除其他提示 | boolean | -                                                        | false    |

## 类型定义

```ts
export type ClToastPosition = "top" | "center" | "bottom";

export type ClToastType =
  | "success"
  | "warn"
  | "error"
  | "question"
  | "disabled"
  | "stop";

export type ClToastOptions = {
  type?: ClToastType;
  icon?: string;
  image?: string;
  message: string;
  position?: ClToastPosition;
  duration?: number;
  clear?: boolean;
};
```

## 使用示例

### 基础用法

显示简单的成功提示消息：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

ui.showToast({
  message: "保存成功",
});
```

### 不同位置显示

Toast 支持顶部、中间、底部三种显示位置：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

// 顶部显示
ui.showToast({
  message: "操作成功",
  position: "top",
});

// 中间显示（默认）
ui.showToast({
  message: "操作成功",
  position: "center",
});

// 底部显示
ui.showToast({
  message: "操作成功",
  position: "bottom",
});
```

### 不同类型提示

Toast 支持多种类型的消息提示：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

// 成功提示
ui.showToast({
  message: "保存成功",
  type: "success",
});

// 警告提示
ui.showToast({
  message: "请检查输入内容",
  type: "warn",
});

// 错误提示
ui.showToast({
  message: "网络连接失败",
  type: "error",
});

// 询问提示
ui.showToast({
  message: "是否确认删除？",
  type: "question",
});
```

### 自定义图标

可以通过 `icon` 参数自定义显示图标：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

ui.showToast({
  message: "文件已保存",
  icon: "file-line",
});
```

### 自定义持续时间

可以设置 Toast 的显示时长，单位为毫秒：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

// 显示 5 秒后自动关闭
ui.showToast({
  message: "操作完成",
  duration: 5000,
});

// 不自动关闭（设置为 0）
ui.showToast({
  message: "请手动关闭",
  duration: 0,
});
```

### 清除其他提示

设置 `clear: true` 可以在显示新提示时清除其他正在显示的 Toast：

```ts
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

ui.showToast({
  message: "这条消息会替换之前的所有提示",
  clear: true,
});
```

## 最佳实践

- 提示内容应该简洁明了，避免过长的文本
- 成功操作使用 `success` 类型，错误操作使用 `error` 类型
- 重要提示可以设置较长的 `duration` 或者设置为 0 需要用户手动关闭
- 在连续操作中使用 `clear: true` 避免提示堆积
