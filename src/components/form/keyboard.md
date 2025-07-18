# Keyboard 虚拟键盘

虚拟键盘组件提供安全的输入体验，支持多种键盘类型。默认需要点击确定按钮才会更新绑定值，启用 `inputImmediate` 参数后可实现实时输入绑定。

## 数字键盘

数字键盘组件 `cl-keyboard-number`，支持纯数字、小数和身份证号码等多种输入类型。

### 参数

| 参数           | 说明               | 类型                        | 可选值                          | 默认值                 |
| -------------- | ------------------ | --------------------------- | ------------------------------- | ---------------------- |
| pt             | 样式穿透配置       | [PassThrough](#passthrough) | —                               | —                      |
| modelValue     | 当前输入的值       | string                      | —                               | —                      |
| type           | 键盘输入类型       | string                      | "number" \| "digit" \| "idcard" | "number"               |
| title          | 弹窗标题           | string                      | —                               | "数字键盘"             |
| placeholder    | 输入框占位文本     | string                      | —                               | "安全键盘，请放心输入" |
| confirmText    | 确认按钮文本       | string                      | —                               | "确定"                 |
| maxlength      | 最大输入长度限制   | number                      | —                               | 8                      |
| showValue      | 是否显示当前输入值 | boolean                     | —                               | true                   |
| inputImmediate | 是否启用实时绑定   | boolean                     | —                               | false                  |

### 事件

| 事件名称 | 说明             | 回调参数      |
| -------- | ---------------- | ------------- |
| change   | 绑定值改变时触发 | value: string |

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明               | 类型                                                       |
| --------- | ------------------ | ---------------------------------------------------------- |
| className | 组件根容器样式类   | string                                                     |
| item      | 键盘按键样式配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| value     | 输入值显示区域样式 | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| popup     | 弹窗容器参数配置   | [ClPopupProps](/src/components/pt.md#passthroughprops)     |

### 示例

#### 基础用法

```html
<cl-keyboard-number ref="keyboardNumberRef"> </cl-keyboard-number>

<script setup lang="ts">
  const keyboardNumberRef = ref<ClKeyboardNumberComponentPublicInstance | null>(
    null
  );

  function openKeyboardNumber() {
    keyboardNumberRef.value?.open();
  }
</script>
```

## 密码键盘

密码键盘组件 `cl-keyboard-password`，专为密码输入场景设计，提供安全的密码输入体验。

### 参数

| 参数           | 说明               | 类型                        | 可选值                          | 默认值                 |
| -------------- | ------------------ | --------------------------- | ------------------------------- | ---------------------- |
| pt             | 样式穿透配置       | [PassThrough](#passthrough) | —                               | —                      |
| modelValue     | 当前输入的值       | string                      | —                               | —                      |
| type           | 键盘输入类型       | string                      | "number" \| "digit" \| "idcard" | "number"               |
| title          | 弹窗标题           | string                      | —                               | "密码键盘"             |
| placeholder    | 输入框占位文本     | string                      | —                               | "安全键盘，请放心输入" |
| confirmText    | 确认按钮文本       | string                      | —                               | "确定"                 |
| maxlength      | 最大输入长度限制   | number                      | —                               | 8                      |
| showValue      | 是否显示当前输入值 | boolean                     | —                               | true                   |
| inputImmediate | 是否启用实时绑定   | boolean                     | —                               | false                  |

### 事件

| 事件名称 | 说明             | 回调参数      |
| -------- | ---------------- | ------------- |
| change   | 绑定值改变时触发 | value: string |

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明               | 类型                                                       |
| --------- | ------------------ | ---------------------------------------------------------- |
| className | 组件根容器样式类   | string                                                     |
| item      | 键盘按键样式配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| value     | 输入值显示区域样式 | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| popup     | 弹窗容器参数配置   | [ClPopupProps](/src/components/pt.md#passthroughprops)     |

### 示例

#### 基础用法

```html
<cl-keyboard-password ref="keyboardPasswordRef"> </cl-keyboard-password>

<script setup lang="ts">
  const keyboardPasswordRef =
    ref<ClKeyboardPasswordComponentPublicInstance | null>(null);

  function openKeyboardPassword() {
    keyboardPasswordRef.value?.open();
  }
</script>
```

## 车牌键盘

车牌键盘组件 `cl-keyboard-car`，专为车牌号码输入场景设计，支持中文省份简称和字母数字组合。

### 参数

| 参数           | 说明               | 类型                        | 可选值 | 默认值                 |
| -------------- | ------------------ | --------------------------- | ------ | ---------------------- |
| pt             | 样式穿透配置       | [PassThrough](#passthrough) | —      | —                      |
| modelValue     | 当前输入的值       | string                      | —      | —                      |
| title          | 弹窗标题           | string                      | —      | "车牌键盘"             |
| placeholder    | 输入框占位文本     | string                      | —      | "安全键盘，请放心输入" |
| maxlength      | 最大输入长度限制   | number                      | —      | 8                      |
| showValue      | 是否显示当前输入值 | boolean                     | —      | true                   |
| inputImmediate | 是否启用实时绑定   | boolean                     | —      | false                  |

### 事件

| 事件名称 | 说明             | 回调参数      |
| -------- | ---------------- | ------------- |
| change   | 绑定值改变时触发 | value: string |

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明               | 类型                                                       |
| --------- | ------------------ | ---------------------------------------------------------- |
| className | 组件根元素样式     | string                                                     |
| item      | 键盘按键配置       | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| value     | 输入值显示区域配置 | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| popup     | 弹窗容器配置       | [ClPopupProps](/src/components/pt.md#passthroughprops)     |

### 示例

#### 基础用法

```html
<cl-keyboard-car ref="keyboardCarRef" @change="handleCarNumberChange">
</cl-keyboard-car>

<script setup lang="ts">
  const keyboardCarRef = ref<ClKeyboardCarComponentPublicInstance | null>(null);

  function openKeyboardCar() {
    keyboardCarRef.value?.open();
  }
</script>
```

## 使用建议

### 安全性考虑

- 在处理敏感信息（如密码、支付密码）时，建议关闭 `showValue` 属性
- 使用 `inputImmediate` 时请谨慎处理输入值的实时验证
