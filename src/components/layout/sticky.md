# Sticky 吸顶

Sticky 组件用于将元素固定在页面顶部，当页面滚动时，被包裹的内容会始终保持在可视区域的顶部。常用于导航栏、标题栏等需要始终可见的内容。

## 基础参数

| 参数      | 说明                 | 类型   | 可选值 | 默认值 |
| --------- | -------------------- | ------ | ------ | ------ |
| offsetTop | 距离顶部的偏移量(px) | number | -      | 0      |
| zIndex    | 层级，控制显示优先级 | number | -      | 100    |
| scrollTop | 页面当前滚动高度(px) | number | -      | 0      |

## 示例

### 基础用法

最简单的用法，将内容固定在页面顶部：

```html
<cl-sticky>
  <view
    class="bg-blue-500 p-3 h-[50px] flex flex-row items-center justify-center"
  >
    <text class="text-white font-bold">固定导航栏</text>
  </view>
</cl-sticky>
```

### 设置偏移距离

通过 `offset-top` 设置距离顶部的偏移量：

```html
<cl-sticky :offset-top="20">
  <view
    class="bg-green-500 p-3 h-[50px] flex flex-row items-center justify-center"
  >
    <text class="text-white font-bold">距离顶部 20px</text>
  </view>
</cl-sticky>
```

### 多个吸顶元素

多个 Sticky 组件可以叠加使用，通过不同的 `offset-top` 值控制它们的位置：

```html
<!-- 第一个吸顶元素 -->
<cl-sticky>
  <view
    class="bg-red-500 p-3 h-[50px] flex flex-row items-center justify-center"
  >
    <text class="text-white font-bold">主导航栏</text>
  </view>
</cl-sticky>

<!-- 第二个吸顶元素，紧贴在第一个下方 -->
<cl-sticky :offset-top="50">
  <view
    class="bg-orange-500 p-3 h-[40px] flex flex-row items-center justify-center"
  >
    <text class="text-white">子导航栏</text>
  </view>
</cl-sticky>
```

### 自定义层级

通过 `z-index` 控制显示层级：

```html
<cl-sticky :z-index="200">
  <view
    class="bg-purple-500 p-3 h-[50px] flex flex-row items-center justify-center"
  >
    <text class="text-white font-bold">高优先级导航</text>
  </view>
</cl-sticky>
```

## 使用说明

- Sticky 组件会监听页面滚动事件，当滚动位置达到设定条件时自动切换为固定定位
- 使用多个 Sticky 组件时，建议合理设置 `offset-top` 值避免重叠
- 在性能敏感的场景下，建议控制 Sticky 组件的数量
- 组件内容高度变化时，可能需要重新计算 `offset-top` 值
