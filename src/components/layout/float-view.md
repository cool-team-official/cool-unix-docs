# FloatView 悬浮视图

FloatView 是一个可拖拽的悬浮视图组件，支持自动边缘吸附和自定义位置拖拽功能，常用于悬浮按钮、工具栏等场景。

## 基础参数

| 参数       | 说明                     | 类型    | 可选值 | 默认值 |
| ---------- | ------------------------ | ------- | ------ | ------ |
| zIndex     | 组件层级                 | number  | -      | 500    |
| size       | 组件尺寸（宽高相等）     | number  | -      | 40     |
| left       | 初始左边距（px）         | number  | -      | 10     |
| bottom     | 初始底部距离（px）       | number  | -      | 10     |
| gap        | 距离屏幕边缘的最小间距   | number  | -      | 10     |
| disabled   | 是否禁用拖拽功能         | boolean | -      | false  |
| noSnapping | 是否禁用边缘自动吸附功能 | boolean | -      | false  |
| height     | 自定义高度（px）         | number  | -      | -      |
| width      | 自定义宽度（px）         | number  | -      | -      |

## 示例

### 基础用法

默认情况下，当用户拖拽悬浮视图并松手时，组件会自动判断距离左边缘和右边缘的远近，并吸附到较近的边缘。

```html
<cl-float-view :left="50" :bottom="50">
  <view
    class="w-[40px] h-[40px] bg-primary-500 flex flex-row items-center justify-center"
  >
    <cl-icon name="heart-fill" color="white"></cl-icon>
  </view>
</cl-float-view>
```

### 自由拖拽

通过设置 `no-snapping` 属性，可以让悬浮视图拖拽到任意位置，不再自动吸附到边缘。

```html
<cl-float-view :left="50" :bottom="50" no-snapping>
  <view
    class="w-[40px] h-[40px] bg-primary-500 flex flex-row items-center justify-center"
  >
    <cl-icon name="heart-fill" color="white"></cl-icon>
  </view>
</cl-float-view>
```

### 禁用拖拽

设置 `disabled` 属性可以禁用拖拽功能，悬浮视图将固定在初始位置。

```html
<cl-float-view :left="50" :bottom="50" disabled>
  <view
    class="w-[40px] h-[40px] bg-primary-500 flex flex-row items-center justify-center"
  >
    <cl-icon name="heart-fill" color="white"></cl-icon>
  </view>
</cl-float-view>
```

### 自定义尺寸

通过设置 `height` 和 `width` 参数自定义悬浮视图的尺寸。注意：需要同时在样式中设置对应的宽高值。

```html
<cl-float-view :left="50" :bottom="50" :height="100" :width="200">
  <view
    class="h-[100px] w-[200px] bg-primary-500 flex flex-row items-center justify-center"
  >
    <cl-icon name="heart-fill" color="white"></cl-icon>
  </view>
</cl-float-view>
```

## 注意事项

- 使用自定义尺寸时，请确保内容元素的样式类（如 `h-[100px] w-[200px]`）与组件的 `height` 和 `width` 参数保持一致
- `gap` 参数用于控制悬浮视图与屏幕边缘的最小距离，确保组件不会贴边显示
- 当启用边缘吸附功能时，悬浮视图会在拖拽结束后自动移动到最近的边缘
