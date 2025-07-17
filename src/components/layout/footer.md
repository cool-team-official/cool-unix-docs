# Footer 底部视图

固定在页面底部的布局组件，通常用于放置操作按钮，如提交、购买、确认等功能按钮。

- 自动解决底部按钮隐藏时页面底部的空白间距问题
- 智能处理固定定位时的内容占位缺失问题

## 基础参数

| 参数      | 说明                             | 类型                        | 可选值 | 默认值 |
| --------- | -------------------------------- | --------------------------- | ------ | ------ |
| pt        | 样式穿透配置，用于自定义组件样式 | [PassThrough](#passthrough) | -      | -      |
| minHeight | 最小高度，低于此值时组件不显示   | number                      | -      | 30     |
| vt        | 监听值，用于触发组件重新计算     | number                      | -      | 0      |

:::warning
当按钮隐藏时,组件会保留一定的内间距高度,默认不超过 `30px`。如果需要调整这个高度,可以通过修改 `minHeight` 参数来实现。
:::

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明               | 类型                                                       |
| --------- | ------------------ | ---------------------------------------------------------- |
| className | 底部视图根容器样式 | string                                                     |
| content   | 内容区域样式配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 使用示例

### 基础用法

最简单的使用方式，在列表底部放置操作按钮：

```html
<cl-list>
  <cl-list-item :label="`列表项 ${i}`" v-for="i in 50" :key="i"></cl-list-item>
</cl-list>

<cl-footer>
  <cl-button type="primary" size="large" @tap="handleSubmit"> 提交 </cl-button>
</cl-footer>
```

### 动态更新

在实际业务场景中，底部按钮的 `显示/隐藏` 逻辑往往比较复杂，需要根据 `多个状态` 来动态控制。

通过使用 `vt` 参数监听状态变化，我们可以将按钮的显示/隐藏逻辑从 `v-if` 中解耦出来，让每个按钮根据各自的 status 状态来独立控制显示与隐藏，使代码结构更加清晰。

```html
<cl-list>
  <cl-list-item :label="`列表项 ${i}`" v-for="i in 50" :key="i"></cl-list-item>
</cl-list>

<cl-footer :vt="cache.key">
  <template v-if="status == 0">
    <view class="flex flex-row">
      <cl-button
        :pt="{ className: 'flex-1' }"
        text
        border
        size="large"
        @tap="cancel"
      >
        取消订单
      </cl-button>

      <cl-button
        :pt="{ className: 'flex-1' }"
        type="primary"
        size="large"
        @tap="buy"
      >
        立即购买
      </cl-button>
    </view>
  </template>

  <cl-button type="error" size="large" @tap="confirm" v-if="status == 1">
    确认收货
  </cl-button>

  <cl-button type="success" size="large" @tap="comment" v-if="status == 2">
    评价
  </cl-button>
</cl-footer>

<script lang="ts" setup>
  import { useCache } from "@/cool";
  import { ref } from "vue";

  const status = ref(0);

  // useCache 可以监听多个值的变化
  const { cache } = useCache(() => [status.value]);

  function cancel() {
    status.value = 3;
  }

  function buy() {
    status.value = 1;
  }

  function confirm() {
    status.value = 2;
  }

  function comment() {
    status.value = 3;
  }
</script>
```
