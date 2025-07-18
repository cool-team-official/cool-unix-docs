# Cascader 级联选择器

用于从多级数据结构中进行选择，常用于省市区、分类等场景。用户可以逐级展开并选择目标项，支持自定义选项内容、分隔符、禁用状态等功能，适用于需要多层级联动选择的表单或数据录入场景。

## 基础参数

| 参数          | 说明                     | 类型                        | 可选值 | 默认值   |
| ------------- | ------------------------ | --------------------------- | ------ | -------- |
| pt            | 样式穿透配置             | [PassThrough](#passthrough) | -      | -        |
| modelValue    | 双向绑定的值             | string[]                    | -      | -        |
| title         | 选择器弹窗顶部标题       | string                      | -      | "请选择" |
| placeholder   | 输入框占位符文本         | string                      | -      | "请选择" |
| options       | 选项数据源，支持树形结构 | ClCascaderOption[]          |        | []       |
| showTrigger   | 是否显示默认触发器       | boolean                     |        | true     |
| disabled      | 是否禁用选择器           | boolean                     |        | false    |
| labelKey      | 标签显示字段的键名       | string                      |        | "label"  |
| valueKey      | 值字段的键名             | string                      |        | "value"  |
| textSeparator | 文本分隔符               | string                      |        | " - "    |
| height        | 列表高度                 | string \| number            |        | 800      |

:::warning
`options` 中包含多少层级的 `children`，用户就需要依次选择对应的层级次数，直到选中最后一级为止。
:::

## 事件

| 事件名称 | 说明                 | 回调参数        |
| -------- | -------------------- | --------------- |
| change   | 选择完成后触发的事件 | value: string[] |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数    | 说明               | 类型                       |
| ------- | ------------------ | -------------------------- |
| trigger | 选择器触发元素配置 | ClSelectTriggerPassThrough |
| popup   | 弹窗容器配置       | [ClPopupPassThrough]       |

## 示例

### 基础用法

使用级联选择器展示树形结构数据，`options` 需要定义为 `ClCascaderOption[]` 类型。

```html
<template>
  <cl-cascader v-model="val" :options="options"></cl-cascader>
</template>

<script setup>
    import { ref } from "vue";
    import { type ClCascaderOption } from "@/uni_modules/cool-ui";

    const val = ref<string[]>([]);

    const options = ref<ClCascaderOption[]>([{
  		label: "电子产品",
  		value: "1",
  		children: [
  			{
  				label: "手机",
  				value: "1-1",
  				children: [
  					{
  						label: "苹果",
  						value: "1-1-1",
  					},
  					{
  						label: "华为",
  						value: "1-1-2",
  					},
  					{
  						label: "小米",
  						value: "1-1-3"
  					}
  				]
  			},
  			{
  				label: "电脑",
  				value: "1-2",
  				children: [
  					{
  						label: "笔记本",
  						value: "1-2-1"
  					},
  					{
  						label: "台式机",
  						value: "1-2-2"
  					}
  				]
  			},
  		]
  	},
  	{
  		label: "服装",
  		value: "2",
  		children: [
  			{
  				label: "男装",
  				value: "2-1",
  				children: [
  					{
  						label: "上衣",
  						value: "2-1-1"
  					},
  					{
  						label: "裤装",
  						value: "2-1-2"
  					},
  				]
  			},
  			{
  				label: "女装",
  				value: "2-2",
  				children: [
  					{
  						label: "裙装",
  						value: "2-2-1"
  					},
  					{
  						label: "上装",
  						value: "2-2-2"
  					}
  				]
  			}
  		]
  	}
  ]);
</script>
```

### 地区选择示例

当使用外部 JSON 数据（如地区数据）时，由于 `import` 导入的类型是 `UTSJSONObject`，需要使用 `useCascader()` 进行类型转换后才能赋值给 `options`。

```html
<template>
  <cl-cascader v-model="val" :options="options"></cl-cascader>
</template>

<script setup>
  import { ref } from "vue";
  import { useCascader } from "@/uni_modules/cool-ui";
  import pca from "@/data/pca.json";

  const val = ref<string[]>([]);

  const options = useCascader(pca)
</script>
```
