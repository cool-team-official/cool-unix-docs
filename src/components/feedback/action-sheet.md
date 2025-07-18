# ActionSheet 操作菜单

用于从底部弹出的操作菜单，为用户提供多个操作选项的选择界面。

## 基础参数

| 参数 | 说明                                     | 类型                        | 可选值 | 默认值 |
| ---- | ---------------------------------------- | --------------------------- | ------ | ------ |
| pt   | 样式穿透配置，用于自定义组件内部元素样式 | [PassThrough](#passthrough) | -      | -      |

## PassThrough

样式穿透配置，允许您自定义组件内部元素的样式类名。

| 参数      | 说明           | 类型                                                        |
| --------- | -------------- | ----------------------------------------------------------- |
| className | 组件根元素样式 | string                                                      |
| item      | 菜单项配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 插槽

| 插槽名  | 说明               | 参数                    |
| ------- | ------------------ | ----------------------- |
| prepend | 内容之前插入的内容 |                         |
| item    | 菜单项             | item: ClActionSheetItem |
| append  | 内容之后插入的内容 |                         |

## 类型定义

```ts
type ClActionSheetItem = {
  label: string; // 标签内容
  icon?: string; // 图标
  disabled?: boolean; // 是否禁用
  color?: string; // 字体、图标颜色
  callback?: () => void; // 点击回掉
};

type ClActionSheetOptions = {
  list: ClActionSheetItem[]; // 菜单列表
  title?: string; // 标题
  description?: string; // 描述
  cancelText?: string; // 取消文案，默认取消
  showCancel?: boolean; // 是否显示取消按钮，默认true
  maskClosable?: boolean; // 点击遮罩是否关闭，默认true
};
```

## 示例

### 基础用法

最简单的操作菜单使用方式。

::: tip 注意事项

- ref 类型必须定义为 `ClActionSheetComponentPublicInstance | null`，默认值为 `null`
- `open` 方法的参数类型必须是 `ClActionSheetOptions`
  :::

```vue
<template>
  <cl-button @tap="open">打开操作菜单</cl-button>
  <cl-action-sheet ref="actionSheetRef" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ClActionSheetOptions } from "@/uni_modules/cool-ui";

const actionSheetRef = ref<ClActionSheetComponentPublicInstance | null>(null);

function open() {
  actionSheetRef.value?.open({
    list: [
      {
        label: "反馈",
      },
    ],
  } as ClActionSheetOptions);
}
</script>
```

### 带图标的操作菜单

为操作项添加图标，提升用户体验。

```vue
<template>
  <cl-button @tap="open">打开带图标的菜单</cl-button>
  <cl-action-sheet ref="actionSheetRef" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ClActionSheetOptions } from "@/uni_modules/cool-ui";

const actionSheetRef = ref<ClActionSheetComponentPublicInstance | null>(null);

function open() {
  actionSheetRef.value?.open({
    list: [
      {
        label: "反馈",
        icon: "feedback-line",
      },
      {
        label: "设置",
        icon: "settings-line",
      },
    ],
  } as ClActionSheetOptions);
}
</script>
```

### 带标题和描述

添加标题和描述信息，为用户提供更多上下文。

```vue
<template>
  <cl-button @tap="open">打开带标题的菜单</cl-button>
  <cl-action-sheet ref="actionSheetRef" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ClActionSheetOptions } from "@/uni_modules/cool-ui";

const actionSheetRef = ref<ClActionSheetComponentPublicInstance | null>(null);

function open() {
  actionSheetRef.value?.open({
    title: "操作提示",
    description: "删除好友会同时删除所有聊天记录，此操作不可恢复",
    list: [
      {
        label: "删除好友",
        icon: "user-unfollow-line",
      },
      {
        label: "举报用户",
        icon: "flag-line",
      },
    ],
  } as ClActionSheetOptions);
}
</script>
```

### 回调函数处理

为每个操作项设置回调函数，处理用户选择。

```vue
<template>
  <cl-button @tap="open">打开带回调的菜单</cl-button>
  <cl-action-sheet ref="actionSheetRef" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ClActionSheetOptions } from "@/uni_modules/cool-ui";

const actionSheetRef = ref<ClActionSheetComponentPublicInstance | null>(null);

function open() {
  actionSheetRef.value?.open({
    title: "选择操作",
    description: "请选择要执行的操作",
    list: [
      {
        label: "编辑",
        icon: "edit-line",
        callback() {
          console.log("执行编辑操作");
          // 这里添加编辑逻辑
        },
      },
      {
        label: "分享",
        icon: "share-line",
        callback() {
          console.log("执行分享操作");
          // 这里添加分享逻辑
        },
      },
      {
        label: "删除",
        icon: "delete-bin-line",
        callback() {
          console.log("执行删除操作");
          // 这里添加删除逻辑
        },
      },
    ],
  } as ClActionSheetOptions);
}
</script>
```

### 插槽自定义内容

使用插槽添加自定义内容，实现更复杂的布局需求。

```vue
<template>
  <cl-button @tap="open">打开自定义内容菜单</cl-button>

  <cl-action-sheet ref="actionSheetRef">
    <!-- 前置内容插槽 -->
    <template #prepend>
      <view class="px-3 mb-3">
        <cl-text size="14" color="#666">
          开通会员享受更多特权和服务，包括无广告体验、专属客服等
        </cl-text>
      </view>
    </template>

    <!-- 后置内容插槽 -->
    <template #append>
      <view class="pb-5 pt-2 px-3">
        <cl-checkbox v-model="agree">
          请阅读并同意《会员服务协议》和《隐私政策》
        </cl-checkbox>
      </view>
    </template>
  </cl-action-sheet>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ClActionSheetOptions } from "@/uni_modules/cool-ui";

const actionSheetRef = ref<ClActionSheetComponentPublicInstance | null>(null);
const agree = ref(false);

function open() {
  actionSheetRef.value?.open({
    title: "选择支付方式",
    description: "请选择您偏好的支付方式完成订单",
    list: [
      {
        label: "支付宝",
        icon: "alipay-line",
        callback() {
          if (agree.value) {
            console.log("使用支付宝支付");
            // 支付宝支付逻辑
          } else {
            console.log("请先同意服务协议");
          }
        },
      },
      {
        label: "微信支付",
        icon: "wechat-line",
        callback() {
          if (agree.value) {
            console.log("使用微信支付");
            // 微信支付逻辑
          } else {
            console.log("请先同意服务协议");
          }
        },
      },
    ],
  } as ClActionSheetOptions);
}
</script>
```
