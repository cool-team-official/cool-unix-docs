# Theme 主题

提供了完整的主题系统，支持明暗主题切换、自动跟随系统主题等功能。通过简单的 API 调用，您可以轻松实现应用的主题定制和动态切换。

具体配置方法请参考：[主题配置](/src/introduce/theme.md)

## 核心特性

- 🌓 **明暗主题切换**：支持 light 和 dark 两种主题模式
- 🔄 **自动跟随系统**：可自动检测并跟随系统主题变化（APP 端）
- 🎨 **样式获取**：提供便捷的样式和配置获取方法
- 📱 **响应式设计**：基于 Vue3 响应式系统，主题变化实时生效

## API

| 名称        | 参数               | 返回值           | 说明                            |
| ----------- | ------------------ | ---------------- | ------------------------------- |
| isAuto      | -                  | `Ref<boolean>`   | 是否为自动主题模式（跟随系统）  |
| setIsAuto   | `enabled: boolean` | -                | 设置自动主题模式（仅 APP 有效） |
| getStyle    | `key: string`      | `string \| null` | 获取当前主题下的页面样式值      |
| getConfig   | `key: string`      | `string`         | 获取 uniapp 主题配置项          |
| getTheme    | -                  | `Theme`          | 获取当前主题模式                |
| theme       | -                  | `Ref<Theme>`     | 当前主题的响应式变量            |
| isDark      | -                  | `Ref<boolean>`   | 是否为暗色模式的响应式变量      |
| setTheme    | `value: Theme`     | -                | 手动设置主题模式                |
| toggleTheme | -                  | -                | 在明暗主题间切换                |
| initTheme   | -                  | -                | 初始化主题系统（自动调用）      |

## 类型定义

```ts
type Theme = "light" | "dark";
```

## 判断当前主题

```html
<template>
  <text>当前主题：{{ currentTheme }}</text>
</template>

<script lang="ts" setup>
  import { isDark } from "@/cool";
  import { computed } from "vue";

  // 响应式获取当前主题
  const currentTheme = computed(() => (isDark.value ? "暗色主题" : "明亮主题"));
</script>
```

## 注意事项

- `setIsAuto` 仅在 APP 端生效，H5 和小程序端会忽略此设置
- 主题切换会触发页面重新渲染，建议避免在频繁调用的函数中使用
- 使用 `getStyle` 时，确保传入的 key 值在主题配置中存在
- 建议在应用启动时调用 `initTheme` 来初始化主题系统（通常在框架中自动调用）
