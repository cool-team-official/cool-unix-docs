# ReadMore 查看更多

用于内容超出指定高度时，显示“展开/收起”按钮，支持自定义展开/收起文案、图标及禁用状态。常用于长文本、详情介绍等场景，提升页面的简洁性和用户体验。

## 基础参数

| 参数         | 说明                                     | 类型                        | 可选值 | 默认值              |
| ------------ | ---------------------------------------- | --------------------------- | ------ | ------------------- |
| pt           | 样式透传配置，用于自定义组件内部元素样式 | [PassThrough](#passthrough) | -      | -                   |
| modelValue   | 是否展开                                 | boolean                     | -      | false               |
| height       | 收起状态下的最大高度                     | number \| string            | -      | 80                  |
| expandText   | 展开时显示的文本                         | string                      | -      | "展开"              |
| collapseText | 收起时显示的文本                         | string                      | -      | "收起"              |
| expandIcon   | 展开时显示的图标                         | string                      | -      | "arrow-down-s-line" |
| collapseIcon | 收起时显示的图标                         | string                      | -      | "arrow-up-s-line"   |
| disabled     | 是否禁用                                 | boolean                     | -      | false               |

## 方法

| 事件名 | 说明          | 回调参数   |
| ------ | ------------- | ---------- |
| toggle | 切换收起/展开 | `(): void` |

## PassThrough

支持深度自定义组件内部元素样式，提供企业级的样式控制能力。

| 属性名    | 说明                 | 类型                                                       |
| --------- | -------------------- | ---------------------------------------------------------- |
| className | 组件根容器的样式类名 | string                                                     |
| wrapper   | 内容包裹区域的配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| content   | 展示内容区域的配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| mask      | 内容底部遮罩的配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| toggle    | 展开/收起按钮的配置  | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 示例

### 基础用法

```vue
<template>
  <cl-read-more>
    <cl-text>
      云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。
      一枝红艳露凝香，云雨巫山枉断肠。借问汉宫谁得似？可怜飞燕倚新妆。
      名花倾国两相欢，常得君王带笑看。解释春风无限恨，沉香亭北倚阑干。
    </cl-text>
  </cl-read-more>
</template>
```

### 控制展开/收起

通过配置 `v-model` 实现对展开与收起状态的双向绑定

```vue
<template>
  <cl-read-more v-model="visible">
    <cl-text>
      云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。
      一枝红艳露凝香，云雨巫山枉断肠。借问汉宫谁得似？可怜飞燕倚新妆。
      名花倾国两相欢，常得君王带笑看。解释春风无限恨，沉香亭北倚阑干。
    </cl-text>
  </cl-read-more>
</template>

<script setup lang="ts">
const visible = ref(false);
</script>
```

### 禁用切换按钮

通过设置 `disabled` 属性，可禁用展开/收起按钮

```vue
<template>
  <cl-read-more disabled>
    <cl-text>
      云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。
      一枝红艳露凝香，云雨巫山枉断肠。借问汉宫谁得似？可怜飞燕倚新妆。
      名花倾国两相欢，常得君王带笑看。解释春风无限恨，沉香亭北倚阑干。
    </cl-text>
  </cl-read-more>
</template>
```

### 自定义高度

通过设置 `height` 参数，可支持三种类型的高度值，满足不同场景下的高度自定义需求

- `10rpx`（rpx 单位）
- `10`（数字，默认 rpx）
- `10px`（带单位的字符串）。

```vue
<template>
  <cl-read-more :height="300">
    <cl-text>
      云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。
      一枝红艳露凝香，云雨巫山枉断肠。借问汉宫谁得似？可怜飞燕倚新妆。
    </cl-text>

    <cl-image
      :height="300"
      width="100%"
      :pt="{
        className: 'my-3',
      }"
      src="https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png"
    ></cl-image>

    <cl-text>
      名花倾国两相欢，常得君王带笑看。解释春风无限恨，沉香亭北倚阑干。
    </cl-text>
  </cl-read-more>
</template>
```

### 自定义展开/收起文案、图标

如下示例所示，初始状态下按钮为禁用，支付解锁后即可使用。

```vue
<template>
  <cl-read-more
    v-model="visible"
    :disabled="disabled"
    :expand-text="disabled ? '付费解锁' : '展开'"
    :expand-icon="disabled ? 'lock-line' : 'arrow-down-s-line'"
    @toggle="toggle"
  >
    <cl-text>
      云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。
      一枝红艳露凝香，云雨巫山枉断肠。借问汉宫谁得似？可怜飞燕倚新妆。
      名花倾国两相欢，常得君王带笑看。解释春风无限恨，沉香亭北倚阑干。
    </cl-text>
  </cl-read-more>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUi } from "@/uni_modules/cool-ui";

const ui = useUi();

const visible = ref(false);
const disabled = ref(true);

function toggle(isExpanded: boolean) {
  ui.showConfirm({
    title: "提示",
    message: "需支付100元才能解锁全部内容，是否继续？",
    callback(action) {
      if (action == "confirm") {
        ui.showToast({
          message: "支付成功",
        });

        disabled.value = false;
        visible.value = true;
      }
    },
  });
}
</script>
```
