# Upload 文件上传

一个功能完整的上传组件，已封装好[上传请求处理](/src/guide/cool/upload.md)。

- 图片上传：支持配置 [上传插件](https://cool-js.com/plugin?page=1&category=1&isMy=false&keyWord=%E4%B8%8A%E4%BC%A0) 实现多种云存储方式：七牛云、阿里云 OSS、腾讯云 COS、MinIO、亚马逊 AWS 等。

- 文档上传（开发中）

## 基础参数

| 参数       | 说明               | 类型                        | 可选值                     | 默认值                     |
| ---------- | ------------------ | --------------------------- | -------------------------- | -------------------------- |
| pt         | 样式穿透配置       | [PassThrough](#passthrough) | -                          | -                          |
| modelValue | 双向绑定的文件地址 | string \| string[]          | -                          | -                          |
| icon       | 上传按钮显示的图标 | string                      | -                          | "camera-fill"              |
| text       | 上传按钮显示的文字 | string                      | -                          | "上传/拍摄"                |
| sizeType   | 图片压缩方式       | string[]                    | "original" \| "compressed" | ["original", "compressed"] |
| sourceType | 图片选择来源       | string[]                    | "album" \| "camera"        | ["album", "camera"]        |
| height     | 上传区域高度       | string \| number            | -                          | 150                        |
| width      | 上传区域宽度       | string \| number            | -                          | 150                        |
| multiple   | 是否支持多文件上传 | boolean                     | -                          | false                      |
| limit      | 最大上传文件数量   | number                      | -                          | 9                          |
| disabled   | 是否禁用上传功能   | boolean                     | -                          | false                      |

### 事件

| 事件名称 | 说明                   | 回调参数                  |
| -------- | ---------------------- | ------------------------- |
| change   | 文件列表变化时触发     | value: string \| string[] |
| exceed   | 超出文件数量限制时触发 | list: ClUploadItem[]      |
| success  | 文件上传成功时触发     | url: string               |
| error    | 文件上传失败时触发     | message: string           |
| progress | 上传进度变化时触发     | progress: number          |

```ts
type ClUploadItem = {
  uid: string;
  preview: string;
  url: string;
  progress: number;
};
```

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明           | 类型                                                       |
| --------- | -------------- | ---------------------------------------------------------- |
| className | 组件根元素样式 | string                                                     |
| item      | 文件项容器配置 | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| add       | 添加按钮配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| image     | 图片预览配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| text      | 按钮文本配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 使用示例

### 基础用法

最简单的使用方式，绑定一个字符串变量来接收上传后的文件地址。

```html
<cl-upload v-model="url"></cl-upload>
```

### 禁用状态

通过 `disabled` 属性禁用上传功能，常用于表单只读状态。

```html
<cl-upload v-model="url" disabled></cl-upload>
```

### 自定义图标和文字

通过 `icon` 和 `text` 属性自定义上传按钮的外观。

```html
<cl-upload v-model="url" icon="id-card-line" text="上传证件照"></cl-upload>
```

### 自定义尺寸

通过 `height` 和 `width` 属性调整上传区域的大小。

```html
<cl-upload v-model="url" :width="300" :height="200"></cl-upload>
```

### 多文件上传

开启 `multiple` 后支持选择多个文件，此时绑定值必须是字符串数组。

```vue
<template>
  <cl-upload v-model="urls" multiple></cl-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const urls = ref<string[]>([]);
</script>
```

### 限制上传数量

通过 `limit` 属性限制最大上传文件数量，超出限制时会触发 `exceed` 事件。

```vue
<template>
  <cl-upload
    v-model="urls"
    multiple
    :limit="3"
    @exceed="handleExceed"
  ></cl-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ClUploadItem } from "@/uni_modules/cool-ui";

const urls = ref<string[]>([]);

function handleExceed(list: ClUploadItem[]) {
  console.log("超出文件数量限制", list);
}
</script>
```

### 监听上传事件

监听上传过程中的各种事件，提供更好的用户体验。

```vue
<template>
  <cl-upload
    v-model="url"
    @progress="handleProgress"
    @success="handleSuccess"
    @error="handleError"
  ></cl-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const url = ref<string>("");

function handleProgress(progress: number) {
  console.log("上传进度:", progress);
}

function handleSuccess(url: string) {
  console.log("上传成功:", url);
}

function handleError(message: string) {
  console.error("上传失败:", message);
}
</script>
```
