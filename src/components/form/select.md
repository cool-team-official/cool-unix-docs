# SelectDate 日期选择器

## 参数

| 参数        | 说明                 | 类型                        | 可选值 | 默认值   |
| ----------- | -------------------- | --------------------------- | ------ | -------- |
| pt          | 样式穿透配置         | [PassThrough](#passthrough) | -      | -        |
| modelValue  | 绑定值               | string / number / boolean   | -      | -        |
| title       | 选择器标题           | string                      | -      | '请选择' |
| placeholder | 选择器占位符         | string                      | -      | '请选择' |
| options     | 选项数据             | ClSelectOption[]            | -      | []       |
| showTrigger | 是否显示选择器触发器 | boolean                     | -      | true     |
| disabled    | 是否禁用选择器       | boolean                     | -      | false    |
| columnCount | 列数                 | number                      | -      | 1        |
| splitor     | 分隔符               | string                      | -      | ' - '    |
| confirmText | 确认按钮文本         | string                      | -      | '确定'   |
| showConfirm | 是否显示确认按钮     | boolean                     | -      | true     |
| cancelText  | 取消按钮文本         | string                      | -      | '取消'   |
| showCancel  | 是否显示取消按钮     | boolean                     | -      | true     |

## 事件

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | 绑定值变化时触发的事件 | value    |

## 方法

| 方法名 | 说明             | 参数                           |
| ------ | ---------------- | ------------------------------ |
| open   | 手动打开选择弹窗 | callback: (value: any) => void |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数    | 说明           | 类型                       |
| ------- | -------------- | -------------------------- |
| trigger | 选择器样式配置 | ClSelectTriggerPassThrough |
| popup   | 弹窗样式配置   | [ClPopupPassThrough]       |

```ts
type ClSelectTriggerPassThrough = {
  className?: string;
  icon?: ClIconProps;
};
```

## 示例

### 基础用法

最简单的选择器用法，从预定义的选项中选择一个值。

```vue
<template>
  <cl-select
    v-model="val"
    :options="options"
    placeholder="请选择技术栈"
  ></cl-select>
</template>

<script setup lang="ts">
import { type ClSelectOption } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const val = ref(1);

const options = ref<ClSelectOption[]>([
  {
    label: "HTML",
    value: 1,
  },
  {
    label: "CSS",
    value: 2,
  },
  {
    label: "JavaScript",
    value: 3,
  },
  {
    label: "Node.js",
    value: 4,
  },
  {
    label: "Vue.js",
    value: 5,
  },
  {
    label: "React",
    value: 6,
  },
]);
</script>
```

### 手动控制弹窗

通过调用组件的 `open` 方法手动打开选择弹窗，适用于自定义触发器的场景。

```vue
<template>
  <view>
    <cl-button @click="openSelect">打开选择器</cl-button>
    <cl-select
      ref="selectRef"
      v-model="val"
      :options="options"
      :show-trigger="false"
    ></cl-select>
  </view>
</template>

<script setup lang="ts">
import { type ClSelectOption } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const selectRef = ref();
const val = ref(1);

const options = ref<ClSelectOption[]>([
  {
    label: "HTML",
    value: 1,
  },
  {
    label: "CSS",
    value: 2,
  },
  {
    label: "JavaScript",
    value: 3,
  },
  {
    label: "Node.js",
    value: 4,
  },
  {
    label: "Vue.js",
    value: 5,
  },
  {
    label: "React",
    value: 6,
  },
]);

function openSelect() {
  selectRef.value?.open((value) => {
    console.log("选择的值:", value);
  });
}
</script>
```

### 多列级联选择

通过配置 `column-count` 和 `children` 实现多列级联选择，常用于地区选择等场景。

```vue
<template>
  <cl-select
    v-model="val"
    :options="options"
    :column-count="3"
    title="选择地区"
    placeholder="请选择省市区"
  ></cl-select>
</template>

<script setup lang="ts">
import { type ClSelectOption } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const val = ref();

const options = ref<ClSelectOption[]>([
  {
    label: "福建省",
    value: "fujian",
    children: [
      {
        label: "福州市",
        value: "fuzhou",
        children: [
          {
            label: "鼓楼区",
            value: "gulou",
          },
          {
            label: "台江区",
            value: "taijiang",
          },
          {
            label: "仓山区",
            value: "cangshan",
          },
          {
            label: "马尾区",
            value: "mawei",
          },
        ],
      },
      {
        label: "厦门市",
        value: "xiamen",
        children: [
          {
            label: "思明区",
            value: "siming",
          },
          {
            label: "湖里区",
            value: "huli",
          },
          {
            label: "集美区",
            value: "jimei",
          },
          {
            label: "海沧区",
            value: "haicang",
          },
        ],
      },
      {
        label: "泉州市",
        value: "quanzhou",
        children: [
          {
            label: "鲤城区",
            value: "licheng",
          },
          {
            label: "丰泽区",
            value: "fengze",
          },
          {
            label: "洛江区",
            value: "luojiang",
          },
          {
            label: "泉港区",
            value: "quangang",
          },
        ],
      },
    ],
  },
  {
    label: "浙江省",
    value: "zhejiang",
    children: [
      {
        label: "杭州市",
        value: "hangzhou",
        children: [
          {
            label: "上城区",
            value: "shangcheng",
          },
          {
            label: "下城区",
            value: "xiacheng",
          },
          {
            label: "江干区",
            value: "jianggan",
          },
          {
            label: "拱墅区",
            value: "gongshu",
          },
        ],
      },
      {
        label: "宁波市",
        value: "ningbo",
        children: [
          {
            label: "海曙区",
            value: "haishu",
          },
          {
            label: "江北区",
            value: "jiangbei",
          },
          {
            label: "北仑区",
            value: "beilun",
          },
        ],
      },
    ],
  },
  {
    label: "湖南省",
    value: "hunan",
    children: [
      {
        label: "长沙市",
        value: "changsha",
        children: [
          {
            label: "芙蓉区",
            value: "furong",
          },
          {
            label: "天心区",
            value: "tianxin",
          },
          {
            label: "岳麓区",
            value: "yuelu",
          },
        ],
      },
      {
        label: "株洲市",
        value: "zhuzhou",
        children: [
          {
            label: "荷塘区",
            value: "hetang",
          },
          {
            label: "芦淞区",
            value: "lusong",
          },
        ],
      },
    ],
  },
  {
    label: "江西省",
    value: "jiangxi",
    children: [
      {
        label: "南昌市",
        value: "nanchang",
        children: [
          {
            label: "东湖区",
            value: "donghu",
          },
          {
            label: "西湖区",
            value: "xihu",
          },
          {
            label: "青云谱区",
            value: "qingyunpu",
          },
        ],
      },
      {
        label: "九江市",
        value: "jiujiang",
        children: [
          {
            label: "浔阳区",
            value: "xunyang",
          },
          {
            label: "濂溪区",
            value: "lianxi",
          },
        ],
      },
    ],
  },
]);
</script>
```
