# Canvas 画布

`cl-canvas` 组件是一个基于 canvas 封装的画布组件，支持图片裁剪、文字多行省略、变形转换等丰富功能，适用于生成海报、图片处理、签名等多种场景。你可以通过配置参数和调用方法，灵活实现自定义绘制、图片导出等操作。

## 基础参数

| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| canvasId | 画布 ID  | string | -      | -      |
| height   | 画布宽度 | number | -      | 300    |
| width    | 画布高度 | number | -      | 300    |

## 方法

| 方法名       | 说明           | 参数 | 返回值｜    |
| ------------ | -------------- | ---- | ----------- |
| saveImage    | 保存图片到相册 |      |             |
| previewImage | 预览图片       |      |             |
| createImage  | 生成图片       |      | url: string |

## 事件

| 事件名称 | 说明       | 回调参数         |
| -------- | ---------- | ---------------- |
| load     | 画布加载后 | (canvas: Canvas) |

:::tip
必须在 `load` 事件后开始绘制图案
:::

## 示例

### 绘制文字

使用 `text` 方法，支持参数如下：

```ts
type TextRenderOptions = {
  x: number; // 文字起始横坐标
  y: number; // 文字起始纵坐标
  height?: number; // 文字区域高度（可选）
  width?: number; // 文字区域宽度（可选）
  content: string; // 文字内容
  color?: string; // 文字颜色（可选）
  fontSize?: number; // 字体大小（可选）
  fontFamily?: string; // 字体（可选）
  fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number; // 字重（可选）
  textAlign?: "left" | "right" | "center"; // 对齐方式（可选）
  overflow?: "ellipsis"; // 超出省略（可选，支持省略号）
  lineClamp?: number; // 最大显示行数（可选）
  letterSpace?: number; // 字符间距（可选）
  lineHeight?: number; // 行高（可选）
  opacity?: number; // 透明度（可选）
  scale?: number; // 缩放比例（可选，整体缩放）
  scaleX?: number; // 横向缩放（可选）
  scaleY?: number; // 纵向缩放（可选）
  rotate?: number; // 旋转角度（可选，单位：度）
  translateX?: number; // 横向平移（可选）
  translateY?: number; // 纵向平移（可选）
};
```

```vue
<template>
  <cl-page>
    <cl-canvas
      ref="canvasRef"
      canvas-id="test"
      :height="300"
      :width="300"
      @load="onCanvasLoad"
    ></cl-canvas>
  </cl-page>
</template>

<script lang="ts" setup>
import { ClCanvas } from "@/uni_modules/cool-canvas";

function onCanvasLoad(canvas: ClCanvas) {
  canvas
    .text({
      x: 10,
      y: 10,
      content: "神仙都没用",
      color: "#666666",
    })
    .draw();
}
</script>
```

### 绘制块

使用 `div` 方法，支持参数如下：

```ts
type DivRenderOptions = {
  x: number; // 横坐标
  y: number; // 纵坐标
  height?: number; // 高度（可选）
  width?: number; // 宽度（可选）
  radius?: number; // 圆角半径（可选）
  backgroundColor?: string; // 背景颜色（可选）
  borderWidth?: number; // 边框宽度（可选）
  borderColor?: string; // 边框颜色（可选）
  opacity?: number; // 透明度（可选）
  scale?: number; // 缩放比例（可选，整体缩放）
  scaleX?: number; // 横向缩放（可选）
  scaleY?: number; // 纵向缩放（可选）
  rotate?: number; // 旋转角度（可选，单位：度）
  translateX?: number; // 横向平移（可选）
  translateY?: number; // 纵向平移（可选）
};
```

```vue
<template>
  <cl-page>
    <cl-canvas
      ref="canvasRef"
      canvas-id="test"
      :height="300"
      :width="300"
      @load="onCanvasLoad"
    ></cl-canvas>
  </cl-page>
</template>

<script lang="ts" setup>
import { ClCanvas } from "@/uni_modules/cool-canvas";

function onCanvasLoad(canvas: ClCanvas) {
  canvas
    .div({
      x: 10,
      y: 10,
      height: 100,
      width: 200,
      backgroundColor: "#fff",
      radius: 10,
    })
    .draw();
}
</script>
```

### 绘制图片

使用 `image` 方法，支持参数如下：

```ts
type ImageRenderOptions = {
  x: number; // 图片绘制的起始横坐标
  y: number; // 图片绘制的起始纵坐标
  height: number; // 图片绘制高度
  width: number; // 图片绘制宽度
  url: string; // 图片资源地址
  mode?: // 图片绘制模式（可选）
  | "scaleToFill" // 不保持纵横比缩放图片，使图片完全适应
    | "aspectFit" // 保持纵横比缩放图片，使图片的长边能完全显示出来
    | "aspectFill" // 保持纵横比缩放图片，只保证图片的短边能完全显示出来
    | "center" // 居中不缩放
    | "top" // 顶部对齐
    | "bottom" // 底部对齐
    | "left" // 左侧对齐
    | "right" // 右侧对齐
    | "topLeft" // 左上角对齐
    | "topRight" // 右上角对齐
    | "bottomLeft" // 左下角对齐
    | "bottomRight"; // 右下角对齐
  radius?: number; // 圆角半径（可选）
  opacity?: number; // 透明度（可选）
  scale?: number; // 整体缩放比例（可选）
  scaleX?: number; // 横向缩放比例（可选）
  scaleY?: number; // 纵向缩放比例（可选）
  rotate?: number; // 旋转角度（可选，单位：度）
  translateX?: number; // 横向平移距离（可选）
  translateY?: number; // 纵向平移距离（可选）
};
```

```vue
<template>
  <cl-page>
    <cl-canvas
      ref="canvasRef"
      canvas-id="test"
      :height="300"
      :width="300"
      @load="onCanvasLoad"
    ></cl-canvas>
  </cl-page>
</template>

<script lang="ts" setup>
import { ClCanvas } from "@/uni_modules/cool-canvas";

function onCanvasLoad(canvas: ClCanvas) {
  canvas
    .image({
      x: 10,
      y: 10,
      height: 100,
      width: 100,
      url: "/static/logo.png",
      radius: 10,
    })
    .draw();
}
</script>
```

### 完整示例

参考代码 `/pages/demo/other/canvas.uvue`
