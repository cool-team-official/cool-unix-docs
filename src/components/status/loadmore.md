# Loadmore 加载更多

用于列表底部的加载状态提示组件，支持加载中和加载完成两种状态的显示。

## 基础参数

| 参数        | 说明                                     | 类型                        | 可选值 | 默认值       |
| ----------- | ---------------------------------------- | --------------------------- | ------ | ------------ |
| pt          | 样式穿透配置，用于自定义组件内部元素样式 | [PassThrough](#passthrough) | -      | -            |
| loading     | 是否正在加载中                           | boolean                     | -      | false        |
| loadingText | 加载中状态的显示文本                     | string                      | -      | "加载中"     |
| finish      | 是否已加载完成（无更多数据）             | boolean                     | -      | false        |
| finishText  | 加载完成状态的显示文本                   | string                      | -      | "没有更多了" |

## PassThrough

样式穿透配置，允许您自定义组件内部元素的样式类名。

| 参数      | 说明           | 类型                                                        |
| --------- | -------------- | ----------------------------------------------------------- |
| className | 组件根元素样式 | string                                                      |
| icon      | 加载图标配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| text      | 文本内容配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础用法

简单的加载更多状态展示：

```html
<cl-loadmore loading></cl-loadmore>
```

### 动态加载状态

模拟数据加载过程，3 秒后显示加载完成：

```html
<cl-loadmore :loading="loading" :finish="finish"></cl-loadmore>

<script lang="ts" setup>
  import { ref } from "vue";

  const loading = ref(true);
  const finish = ref(false);

  setTimeout(() => {
    loading.value = false;
    finish.value = true;
  }, 3000);
</script>
```
