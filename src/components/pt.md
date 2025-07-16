# PassThrough (pt) 属性

## 概念介绍

PassThrough 是一种用于访问组件内部 DOM 结构的 API，它允许开发者将任意属性和监听器直接应用于组件内部的 DOM 元素。这种设计的核心优势在于突破了组件主要 API 的限制，提供更灵活的定制能力。

### 组件的局限

在传统的组件开发中，每个样式需求都需要单独的参数支持：

```vue
<!-- 圆角样式 -->
<test rounded></test>

<!-- 圆角大小 -->
<test :rounded="10"></test>

<!-- 字体样式 -->
<test :font-size="14" font-color="#fff"></test>

<!-- 图标颜色 -->
<test icon-color="#fff"></test>

<!-- 外边距 -->
<test margin="10rpx"></test>

<!-- 复杂外边距 -->
<test :margin="[10, 0, 0, 10]"></test>
```

这种方式导致：

- 组件参数数量急剧增长
- 内部逻辑复杂度提升
- 维护成本居高不下
- 扩展性受限

### 解决方案

使用 `pt` 参数，可以灵活定制组件样式：

#### 圆角设置

```vue
<!-- 基础圆角 -->
<test :pt="{ className: 'rounded' }"></test>

<!-- 指定圆角大小 -->
<test :pt="{ className: 'rounded-md' }"></test>
<test :pt="{ className: 'rounded-[10rpx]' }"></test>
```

#### 文字样式

```vue
<!-- 字体大小 -->
<test :pt="{ className: 'text-md' }"></test>
<test :pt="{ className: 'text-[28rpx]' }"></test>

<!-- 字体颜色 -->
<test :pt="{ className: 'text-white' }"></test>
<test :pt="{ className: 'text-[#fff]' }"></test>
```

#### 复合样式

```vue
<!-- 图标和文字不同颜色 -->
<test
  :pt="{
    className: 'text-white',
    icon: { className: 'text-black' },
  }"
></test>
```

##### 间距设置

```vue
<!-- 统一外边距 -->
<test :pt="{ className: 'm-2' }"></test>

<!-- 方向性外边距 -->
<test :pt="{ className: 'ml-2 mt-2 mb-2 mr-2' }"></test>
```

### 优势总结

- **灵活性**：支持任意 CSS 类名和样式，配合 `tailwindcss` 简直完美
- **可扩展性**：无需修改组件即可实现新的样式需求
- **维护性**：减少组件内部参数和逻辑复杂度
- **一致性**：统一的样式定制方式

## 使用说明

### PassThroughProps

```ts
type PassThroughProps = {
  className?: string;
};
```

### 示例

每个组件的 `pt` 可选参数都有详细说明。以 `cl-button` 的 `PassThrough` 为例：

| 参数      | 说明           | 类型                                  |
| --------- | -------------- | ------------------------------------- |
| className | 组件根元素样式 | string                                |
| label     | 文本标签样式   | [PassThroughProps](#passthroughprops) |
| icon      | 图标元素样式   | [ClIconProps]                         |
| loading   | 加载动画样式   | [ClLoadingProps]                      |

具体使用方式如下（在 VS Code 中点击类型链接可查看完整的参数说明和智能提示）：

```vue
<cl-button
  :pt="{
    className: '!rounded-2xl',
    icon: {
      size: 50,
      className: 'mr-5',
    },
    label: {
      color: 'red',
      className: 'font-bold',
    },
    loading: {
      size: 50,
    },
  }"
>
  点击
</cl-button>
```

`className` 支持字符串类型，如需动态样式可使用 `parseClass` 辅助函数：

```vue
<cl-button
  :pt="{
    className: parseClass([
      [isDark, '!bg-white', '!bg-black'], // 条件判断：[条件, 真值样式, 假值样式]

      // 支持字符串和对象语法（与 :class 用法一致）
      '!rounded-2xl p-5',
      {
        'mr-2': isActive,
      },
    ]),
  }"
>
  点击
</cl-button>
```
