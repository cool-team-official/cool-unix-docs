# Qrcode 二维码

二维码组件，支持自定义样式、LOGO 嵌入和图片导出功能。

## 基础参数

| 参数       | 说明                              | 类型   | 可选值                                        | 默认值                 |
| ---------- | --------------------------------- | ------ | --------------------------------------------- | ---------------------- |
| width      | 二维码宽度                        | string | -                                             | 200px                  |
| height     | 二维码高度                        | string | -                                             | 200px                  |
| foreground | 二维码前景色                      | string | -                                             | #131313                |
| background | 二维码背景色                      | string | -                                             | #ffffff                |
| pdColor    | 定位点颜色，不填写时与前景色一致  | string | -                                             | -                      |
| pdRadius   | 定位图案圆角半径                  | number | -                                             | 10                     |
| text       | 二维码内容                        | string | -                                             | "https://cool-js.com/" |
| logo       | logo 图片地址，支持网络、本地路径 | string | -                                             | -                      |
| logoSize   | logo 大小                         | string | -                                             | 50px                   |
| padding    | 二维码边距                        | number | -                                             | 20                     |
| mode       | 二维码样式                        | string | "rect" \| "circular" \| "line" \| "rectSmall" | "rect"                 |

## 示例

### 基础用法

生成一个简单的二维码：

```html
<cl-qrcode text="https://cool-js.com/"></cl-qrcode>
```

### 添加 LOGO

在二维码中心添加 LOGO 图片：

```html
<cl-qrcode
  text="https://cool-js.com/"
  logo="/static/logo2.png"
  logo-size="60px"
>
</cl-qrcode>
```

### 圆角定位点

设置定位点为圆角样式：

```html
<cl-qrcode text="https://cool-js.com/" :pd-radius="50"> </cl-qrcode>
```

### 自定义颜色

自定义二维码和定位点的颜色：

```html
<cl-qrcode
  text="https://cool-js.com/"
  foreground="#14b8a6"
  background="#f0f9ff"
  pd-color="#0d9488"
>
</cl-qrcode>
```

### 不同样式模式

```html
<!-- 矩形样式 -->
<cl-qrcode text="https://cool-js.com/" mode="rect"></cl-qrcode>

<!-- 圆形样式 -->
<cl-qrcode text="https://cool-js.com/" mode="circular"></cl-qrcode>

<!-- 线条样式 -->
<cl-qrcode text="https://cool-js.com/" mode="line"></cl-qrcode>

<!-- 小矩形样式 -->
<cl-qrcode text="https://cool-js.com/" mode="rectSmall"></cl-qrcode>
```

### 导出图片

将二维码导出为图片格式：

```html
<template>
  <cl-qrcode ref="qrcodeRef" text="https://cool-js.com/"></cl-qrcode>

  <button @click="exportToPng">导出PNG</button>
</template>

<script lang="ts" setup>
  import type { ClQrcodeComponentPublicInstance } from "@/types/components";

  const qrcodeRef = ref<ClQrcodeComponentPublicInstance | null>(null);

  function exportToPng() {
    qrcodeRef.value
      !.toPng()
      .then((url) => {
        // 预览图片
        uni.previewImage({
          urls: [url],
        });

        // 或者保存到相册
        // uni.saveImageToPhotosAlbum({
        //   filePath: url,
        //   success: () => {
        //     uni.showToast({ title: '保存成功' });
        //   }
        // });
      })
  }
</script>
```

## 注意事项

- 二维码内容过长可能导致生成失败或扫描困难，建议控制在合理长度内
- 使用 LOGO 时，建议 LOGO 大小不要超过二维码面积的 20%，避免影响扫描
- 前景色和背景色的对比度要足够高，确保二维码能够正常识别
