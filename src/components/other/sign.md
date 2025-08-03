# Sign 签名

签名组件，提供手写签名功能，支持毛笔效果、自定义样式和图片导出。

## 基础参数

| 参数                | 说明             | 类型    | 可选值 | 默认值      |
| ------------------- | ---------------- | ------- | ------ | ----------- |
| width               | 画布宽度         | number  | -      | windowWidth |
| height              | 画布高度         | number  | -      | 200         |
| strokeColor         | 线条颜色         | string  | -      | #000000     |
| strokeWidth         | 线条宽度         | number  | -      | 3           |
| backgroundColor     | 背景颜色         | string  | -      | #ffffff     |
| enableBrush         | 是否启用毛笔效果 | boolean | -      | true        |
| minStrokeWidth      | 最小线条宽度     | number  | -      | 1           |
| maxStrokeWidth      | 最大线条宽度     | number  | -      | 6           |
| velocitySensitivity | 速度敏感度       | number  | -      | 0.7         |

## 方法

| 方法名 | 说明     | 参数 | 返回值｜          |
| ------ | -------- | ---- | ----------------- |
| clear  | 清空     |      |                   |
| toPng  | 生成图片 |      | `Promise<string>` |

## 示例

### 基础用法

生成一个简单的二维码

```html
<cl-sign></cl-sign>
```

### 毛笔效果

配置参数 `enable-brush`

```html
<cl-sign enable-brush></cl-sign>
```

### 设置高宽

配置参数 `width` 和 `height`

```vue
<template>
  <cl-sign :width="width" :height="height"></cl-sign>
</template>

<script setup lang="ts">
const height = ref(0);
const width = ref(0);

onReady(() => {
  const { windowWidth, windowHeight } = uni.getWindowInfo();

  height.value = windowHeight;
  width.value = windowWidth;
});
</script>
```

### 调用组件方法

- 类型定义必须是 `ClSignComponentPublicInstance | null`
- 调用必须是 `!.xxx()`

```vue
<template>
  <cl-sign ref="signRef"></cl-sign>
</template>

<script setup lang="ts">
const signRef = ref<ClSignComponentPublicInstance | null>(null);

function clear() {
  signRef.value!.clear();
}

function preview() {
  signRef.value!.toPng().then((url) => {
    uni.previewImage({
      urls: [url],
    });
  });
}
</script>
```
