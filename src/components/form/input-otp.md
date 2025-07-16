# InputOtp 验证码输入

`cl-input-otp` 是一个验证码输入组件，用于输入一次性密码（OTP）或验证码，支持自定义位数、自动聚焦等功能，提供良好的用户输入体验。

## 参数

| 参数       | 说明               | 类型                        | 可选值   | 默认值   |
| ---------- | ------------------ | --------------------------- | -------- | -------- |
| pt         | 样式穿透配置       | [PassThrough](#passthrough) | —        | —        |
| modelValue | 当前输入的验证码值 | string                      | —        |          |
| autofocus  | 是否自动聚焦       | boolean                     | —        | false    |
| length     | 验证码位数         | number                      | —        | 4        |
| disabled   | 是否禁用组件       | boolean                     | —        | false    |
| inputType  | 输入类型           | string                      | "number" | 'number' |

## 事件

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| done     | 验证码输入完成时触发 |          |

## PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明               | 类型                                                       |
| --------- | ------------------ | ---------------------------------------------------------- |
| className | 组件根容器的样式   | string                                                     |
| list      | 输入框列表容器样式 | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| item      | 单个输入框样式     | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| cursor    | 光标指示器样式     | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| value     | 输入值显示样式     | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 示例

### 基础用法

```html
<cl-input-otp></cl-input-otp>
```

### 自动聚焦

设置 `autofocus` 属性，组件渲染后自动聚焦到第一个输入框：

```html
<cl-input-otp autofocus></cl-input-otp>
```

### 自定义位数

通过 `length` 属性设置验证码位数，适用于不同长度的验证码场景：

```html
<cl-input-otp :length="6"></cl-input-otp>
```

### 自定义样式

通过 PassThrough 配置自定义组件外观，实现个性化的视觉效果：

```vue
<cl-input-otp
  :pt="{
    item: {
      className: '!bg-sky-100',
    },
    value: {
      className: '!text-sky-700',
    },
  }"
></cl-input-otp>
```
