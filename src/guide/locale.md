# Locale 多语言

提供了完善的国际化解决方案，让你的应用轻松支持多种语言。

- **🔄 自动构建**：通过简单命令自动翻译成全部多语言
- **📖 详细指南**：详细的多语言配置方法请参考：👉 [配置指南](/src/introduce/i18n.md)

## 方法

| 方法名       | 说明               | 类型                                     |
| ------------ | ------------------ | ---------------------------------------- |
| setLocale    | 设置当前语言       | `(value: string): void`                  |
| getLocale    | 获取当前语言       | `(): string`                             |
| appendLocale | 追加数据           | `(name: string, data: string[][]): void` |
| t            | 不带参数的翻译方法 | `(name: string): string`                 |
| $t           | 带参数的翻译方法   | `(name: string, data: any): string`      |

## 自定义

在某些特定场景下，例如日历组件中的星期标签，AI 可能无法准确理解上下文，导致翻译结果不理想。

例如：

- 中文：日 一 二 三 四 五 六
- 英文：Sun Mon Tue Wed Thu Fri Sat

此时，可以通过 `appendLocale` 方法手动追加自定义翻译数据，确保多语言内容的准确性。

注意事项：

- 必须使用 `setTimeout` 包裹，避免执行时机问题
- 数据格式如示例所示，可同时添加多种语言的自定义内容

:::warning 创建提示
以下路径仅为示例，实际请根据你的业务需求自行创建，可以放在任意位置，只需确保程序首次加载时能够被正确引入即可。
:::

创建语言文件 `uni_modules/cool-ui/components/cl-calendar/locale.ts`

```ts
import { appendLocale } from "@/locale";

setTimeout(() => {
  appendLocale("zh-cn", [
    ["周日", "日"],
    ["周一", "一"],
    ["周二", "二"],
    ["周三", "三"],
    ["周四", "四"],
    ["周五", "五"],
    ["周六", "六"],
    ["{year}年{month}月", "{year}年{month}月"],
  ]);

  appendLocale("en", [
    ["周日", "Sun"],
    ["周一", "Mon"],
    ["周二", "Tue"],
    ["周三", "Wed"],
    ["周四", "Thu"],
    ["周五", "Fri"],
    ["周六", "Sat"],
    ["{year}年{month}月", "{month}/{year}"],
  ]);
}, 0);
```

之后在 `uni_modules/cool-ui/index.ts` 中引入

```ts
import "./components/cl-calendar/locale";
```
