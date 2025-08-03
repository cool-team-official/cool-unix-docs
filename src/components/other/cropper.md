# Cropper 图片裁剪

图片裁剪组件，支持自定义裁剪框大小、形状，并提供图片旋转、缩放等功能。可用于头像裁剪、图片编辑等场景。

## 基础参数

| 参数       | 说明                     | 类型                        | 可选值 | 默认值 |
| ---------- | ------------------------ | --------------------------- | ------ | ------ |
| pt         | 样式穿透配置             | [PassThrough](#passthrough) | -      | -      |
| cropWidth  | 裁剪宽度                 | number                      | -      | 300    |
| cropHeight | 裁剪高度                 | number                      | -      | 300    |
| maxScale   | 图片最大缩放倍数         | number                      | -      | 3      |
| resizable  | 是否可以自定义裁剪框大小 | boolean                     | -      | false  |

## 方法

| 方法名      | 说明               | 参数        | 返回值｜          |
| ----------- | ------------------ | ----------- | ----------------- |
| open        | 打开裁剪           | url: string |                   |
| close       | 关闭裁剪           |             |                   |
| chooseImage | 选择图片后打开裁剪 |             |                   |
| toPng       | 生成图片           |             | `Promise<string>` |

## 事件

| 事件名称 | 说明       | 回调参数                                                                                               |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| crop     | 确认裁剪后 | url: string                                                                                            |
| load     | 图片加载后 | event: [UniImageLoadEvent](https://doc.dcloud.net.cn/uni-app-x/component/image.html#uniimageloadevent) |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明               | 类型                                                        |
| --------- | ------------------ | ----------------------------------------------------------- |
| className | 组件根元素样式     | string                                                      |
| image     | 图片元素配置       | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| op        | 操作栏元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| opItem    | 操作项按钮元素配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| mask      | 遮罩层元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| cropBox   | 裁剪框元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 示例

- 定义类型必须为 `ClCropperComponentPublicInstance | null`

- 调用方法必须为 `!.`

```vue
<template>
  <cl-button @tap="chooseImage">{{ t("选择图片") }}</cl-button>
  <cl-cropper ref="cropperRef" @crop="onCrop" @load="onImageLoad"></cl-cropper>
</template>

<script lang="ts" setup>
const cropperRef = ref<ClCropperComponentPublicInstance | null>(null);

function chooseImage() {
  // 方法一，调用 open 方法打开
  uni.chooseImage({
    count: 1,
    sizeType: ["original", "compressed"],
    sourceType: ["album", "camera"],
    success: (res) => {
      if (res.tempFilePaths.length > 0) {
        cropperRef.value!.open(res.tempFilePaths[0]);
      }
    },
  });

  // 方法二，调用选择图片方法打开裁剪
  cropperRef.value!.chooseImage();
}

function onCrop(url: string) {
  uni.previewImage({
    urls: [url],
  });
}

function onImageLoad(e: UniImageLoadEvent) {
  console.log("onImageLoad", e);
}
</script>
```
