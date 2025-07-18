# Popup 弹出框

一个功能丰富的弹出框组件，支持多方向弹出、拖拽关闭、自定义样式等特性。

## 基础参数

| 参数                | 说明                                     | 类型                                               | 可选值 | 默认值   |
| ------------------- | ---------------------------------------- | -------------------------------------------------- | ------ | -------- |
| pt                  | 样式穿透配置，用于自定义组件内部元素样式 | [PassThrough](#passthrough)                        | -      | -        |
| modelValue          | 控制弹窗显示隐藏状态                     | boolean                                            | -      | false    |
| title               | 弹窗标题文本                             | string                                             | -      |          |
| direction           | 弹出方向                                 | "top" \| "right" \| "bottom" \| "center" \| "left" | -      | "bottom" |
| size                | 弹出框尺寸（根据方向决定宽度或高度）     | string \| number                                   | -      |          |
| showHeader          | 是否显示头部区域                         | boolean                                            | -      | true     |
| showClose           | 是否显示关闭按钮                         | boolean                                            | -      | true     |
| showMask            | 是否显示遮罩层                           | boolean                                            | -      | true     |
| maskClosable        | 点击遮罩层是否关闭弹窗                   | boolean                                            | -      | true     |
| swipeClose          | 是否启用拖拽关闭功能                     | boolean                                            | -      | true     |
| swipeCloseThreshold | 拖拽关闭触发距离（单位：px）             | number                                             | -      | 150      |
| pointerEvents       | 触摸事件响应方式                         | "auto" \| "none"                                   | -      | "auto"   |
| keepAlive           | 是否启用内容缓存                         | boolean                                            | -      | false    |

:::warning 注意事项

- 拖拽关闭功能仅在弹出方向为 "bottom" 时可用，可通过 `swipeClose` 属性控制是否启用。
- 为避免内容区域的滑动事件影响弹窗的拖拽操作，可在相应元素上添加 `@touchmove.stop` 事件修饰符。
- 启用缓存功能时，弹窗内容不会被销毁，但首次渲染时会一并加载所有内容，可能影响初始化性能。

:::

## PassThrough

样式穿透配置，允许您精确控制组件内部各个元素的样式。

| 参数      | 说明             | 类型                                                        |
| --------- | ---------------- | ----------------------------------------------------------- |
| className | 组件根元素样式   | string                                                      |
| inner     | 弹窗主体容器配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| header    | 头部区域配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| container | 内容区域配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| mask      | 遮罩层配置       | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| draw      | 拖拽指示器配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 示例

### 基础用法

展示最基本的弹窗功能，包含标题和内容区域。

```html
<cl-button @tap="open">打开弹窗</cl-button>

<cl-popup v-model="visible" title="诗词欣赏">
  <view class="p-4">
    <cl-text>
      春江花月夜，花草复青青。<br />
      江水流不尽，月光照无情。<br />
      夜来风雨急，愁思满心头。<br />
      何时再相见，共赏月明楼。
    </cl-text>
  </view>
</cl-popup>

<script lang="ts" setup>
  import { ref } from "vue";

  const visible = ref(false);

  function open() {
    visible.value = true;
  }
</script>
```

### 无头部模式

隐藏头部区域，适用于完全自定义内容的场景。

```html
<cl-button @tap="open">无头部弹窗</cl-button>

<cl-popup v-model="visible" :show-header="false">
  <view class="p-4">
    <cl-text> 这是一个没有头部的弹窗， 所有内容都可以自由定制。 </cl-text>
  </view>
</cl-popup>

<script lang="ts" setup>
  import { ref } from "vue";

  const visible = ref(false);

  function open() {
    visible.value = true;
  }
</script>
```

### 不同弹出方向

演示从不同方向弹出的效果。

```html
<cl-button @tap="open()">打开</cl-button>

<cl-popup v-model="visible" direction="bottom" title="弹出方向">
  <view class="p-4">
    <cl-text>
      春江花月夜，花草复青青。 江水流不尽，月光照无情。 夜来风雨急，愁思满心头。
      何时再相见，共赏月明楼。
    </cl-text>
  </view>
</cl-popup>

<script lang="ts" setup>
  import { ref } from "vue";

  const visible = ref(false);

  function open() {
    visible.value = true;
  }
</script>
```

### 自定义尺寸

- 纵向弹出（top/bottom）时，size 控制高度
- 横向弹出（left/right/center）时，size 控制宽度
- 也可以通过内容容器的 class 来精确控制尺寸

```html
<cl-button @tap="open">自定义尺寸弹窗</cl-button>

<cl-popup v-model="visible" title="自定义尺寸" :size="600">
  <view class="p-4">
    <cl-text>
      春江花月夜，花草复青青。 江水流不尽，月光照无情。 夜来风雨急，愁思满心头。
      何时再相见，共赏月明楼。
    </cl-text>
  </view>
</cl-popup>

<script lang="ts" setup>
  import { ref } from "vue";

  const visible = ref(false);

  function open() {
    visible.value = true;
  }
</script>
```

### 样式自定义

通过 PassThrough 配置自定义组件样式。

```html
<cl-button @tap="open">自定义样式弹窗</cl-button>

<cl-popup
  v-model="visible"
  title="自定义样式"
  :pt="{
    className: '!p-3',
    inner: {
      className: '!rounded-2xl',
    },
  }"
>
  <view class="p-4">
    <cl-text>
      春江花月夜，花草复青青。 江水流不尽，月光照无情。 夜来风雨急，愁思满心头。
      何时再相见，共赏月明楼。
    </cl-text>
  </view>
</cl-popup>

<script lang="ts" setup>
  import { ref } from "vue";

  const visible = ref(false);

  function open() {
    visible.value = true;
  }
</script>
```
