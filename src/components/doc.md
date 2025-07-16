# 组件开发指南

本文档详细介绍了组件开发的规范和注意事项，建议仔细阅读以确保开发质量。

## 开发规范

### 基础规范

- **样式设置**：不要在自定义组件上直接添加 `class` 属性，不同平台存在兼容性问题。推荐使用 `pt` 参数进行样式定制
- **标签闭合**：所有组件都必须使用双闭合标签格式

```html
<!-- 正确写法 -->
<image></image>
<cl-image></cl-image>

<!-- 错误写法 -->
<image />
<cl-image />
```

## Ref 调用组件方法

### 使用方式

以 `cl-popup` 组件为例，演示如何通过 ref 调用组件内部方法：

```html
<cl-popup ref="popupRef"></cl-popup>

<!-- 在其他组件中使用 ref 的属性 -->
<cl-input :autofocus="popupRef!.isOpen"></cl-input>

<script lang="ts" setup>
  import { ref } from "vue";

  // 定义 ref，类型格式：组件名 + ComponentPublicInstance
  const popupRef = ref<ClPopupComponentPublicInstance | null>(null);

  // 调用组件方法（注意使用 ! 符号）
  function openPopup() {
    popupRef.value!.open();
  }
</script>
```

### 注意事项

- **类型定义**：必须严格按照 `组件名 + ComponentPublicInstance` 格式，`null` 联合类型不可省略
- **调用时机**：避免在页面未完全加载时调用组件方法
- **安全调用**：使用 `!` 操作符确保调用时 ref 已被正确赋值
