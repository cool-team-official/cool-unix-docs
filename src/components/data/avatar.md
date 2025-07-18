# Avatar 头像

用于展示用户头像或替代图像的组件，支持图片显示和图标占位。

## 基础参数

| 参数    | 说明                 | 类型                        | 可选值     | 默认值 |
| ------- | -------------------- | --------------------------- | ---------- | ------ |
| pt      | 样式穿透配置         | [PassThrough](#passthrough) | -          | -      |
| src     | 头像图片地址         | string                      | -          | -      |
| size    | 头像尺寸大小（像素） | number                      | -          | 80     |
| rounded | 是否显示为圆形头像   | boolean                     | true/false | false  |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明           | 类型                                                     |
| --------- | -------------- | -------------------------------------------------------- |
| className | 组件根元素样式 | string                                                   |
| icon      | 图标元素配置   | [ClIconProps](/src/components/basic/icon.md#passthrough) |

## 示例

### 基本用法

```html
<!-- 使用图片地址显示头像 -->
<cl-avatar src="https://example.com/avatar.jpg"></cl-avatar>
```

### 圆形头像

```html
<!-- 显示圆形头像，常用于用户头像展示 -->
<cl-avatar src="https://example.com/avatar.jpg" rounded></cl-avatar>
```

### 自定义尺寸

```html
<!-- 设置头像尺寸为120像素 -->
<cl-avatar src="https://example.com/avatar.jpg" :size="120"></cl-avatar>

<!-- 小尺寸头像 -->
<cl-avatar src="https://example.com/avatar.jpg" :size="40"></cl-avatar>
```

### 图标占位

```html
<!-- 当没有图片时，使用图标作为占位符 -->
<cl-avatar
  :pt="{
    icon: {
        size: 60,
        name: 'user-line'
    }
}"
></cl-avatar>
```

### 组合示例

```html
<!-- 大尺寸圆形头像配合自定义图标 -->
<cl-avatar
  :size="150"
  rounded
  :pt="{
    className: 'custom-avatar',
    icon: {
        size: 80,
        name: 'account-circle-line'
    }
}"
></cl-avatar>
```
