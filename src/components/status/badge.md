# Badge 角标

Badge 角标是一个用于显示数字、文本或者小圆点的状态指示器组件，常用于消息提醒、通知计数等场景。

## 基础参数

| 参数     | 说明                                                 | 类型                                                  | 可选值                          | 默认值  |
| -------- | ---------------------------------------------------- | ----------------------------------------------------- | ------------------------------- | ------- |
| pt       | 样式穿透配置，用于自定义组件内部元素样式             | [PassThrough](#passthrough)                           | -                               | -       |
| type     | 角标主题类型，影响背景颜色                           | "primary" \| "success" \| "warn" \| "error" \| "info" | primary/success/warn/error/info | 'error' |
| dot      | 是否显示为小圆点样式，开启后忽略 value 参数          | boolean                                               | true/false                      | false   |
| value    | 角标显示的内容，可以是数字或文字                     | string \| number                                      | -                               | 0       |
| position | 是否开启绝对定位模式，通常用于相对父元素进行位置调整 | boolean                                               | true/false                      | false   |

## PassThrough

样式穿透配置，允许您自定义组件内部元素的样式类名。

| 参数      | 说明           | 类型   |
| --------- | -------------- | ------ |
| className | 组件根元素样式 | string |

## 示例

### 基础用法

展示不同主题类型的角标效果：

```html
<cl-badge type="primary" value="1" class="mr-2"></cl-badge>
<cl-badge type="success" value="12" class="mr-2"></cl-badge>
<cl-badge type="warn" value="31" class="mr-2"></cl-badge>
<cl-badge type="error" value="24" class="mr-2"></cl-badge>
<cl-badge type="info" value="17" class="mr-2"></cl-badge>
<cl-badge type="primary" value="41" class="mr-2"></cl-badge>
<cl-badge type="success" value="56" class="mr-2"></cl-badge>
```

### 结合按钮使用

在按钮上添加角标，常用于购物车、消息等功能按钮。

> **注意：** 由于按钮组件的默认内容插槽是在 `text` 标签内（无法渲染 `view` 标签），所以需要使用 `content` 插槽来添加角标。

```html
<!-- 数字角标 -->
<cl-button>
  购买
  <template #content>
    <cl-badge type="error" value="1" position> </cl-badge>
  </template>
</cl-button>

<!-- 圆点角标 -->
<cl-button>
  消息
  <template #content>
    <cl-badge type="error" dot position> </cl-badge>
  </template>
</cl-button>
```

### 结合图片使用

在图片组件上添加角标，常用于头像、商品图片等场景。

> **重要提示：** uniappx 的 `view` 标签默认设置了 `overflow-hidden`，需要手动设置父级元素的样式为 `overflow-visible`，否则角标会被截取。

```html
<view class="flex flex-row overflow-visible">
  <cl-image
    :pt="{
      className: 'overflow-visible'
    }"
    src="https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png"
  >
    <cl-badge type="error" value="+9" position> </cl-badge>
  </cl-image>
</view>
```

### 结合图标使用

为图标添加角标提示，适用于导航栏、工具栏等场景。

```html
<view class="flex flex-row overflow-visible">
  <view class="relative overflow-visible">
    <cl-icon name="mail-line"> </cl-icon>
    <cl-badge
      type="error"
      dot
      position
      :pt="{
        className: '!top-[-6rpx] !right-[-6rpx]'
      }"
    >
    </cl-badge>
  </view>
</view>
```

**方案说明：** 也可以将 `cl-badge` 和目标组件放在同一层级，通过 `position` 属性开启绝对定位来调整位置。同样需要注意父级元素设置为 `overflow-visible`。

### 自定义样式

通过 `pt` 参数可以灵活自定义角标的外观样式：

```html
<!-- 自定义圆角样式 -->
<cl-badge
  type="info"
  :pt="{ className: '!rounded-bl-none' }"
  value="1"
></cl-badge>
```

## 使用建议

1. **选择合适的类型**：根据场景选择对应的主题色，如错误提示用 `error`，成功状态用 `success`
2. **数值显示**：当数值较大时，建议使用 `99+` 这样的格式来避免角标过宽
3. **定位注意事项**：使用 `position` 属性时，确保父级容器设置了 `overflow-visible`
4. **访问性考虑**：为重要的角标提示添加适当的文字说明，提高可访问性
