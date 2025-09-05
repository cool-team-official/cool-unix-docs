# Tree 树形组件

树形组件用于以层级结构展示数据，支持节点的展开、收起、选择等操作。常用于组织结构、分类管理、权限分配等场景，能够清晰地表达数据之间的父子关系，并支持多种交互方式（如多选、懒加载、节点自定义等）。

## 基础属性

| 属性名        | 说明                         | 类型                        | 可选值 | 默认值               |
| ------------- | ---------------------------- | --------------------------- | ------ | -------------------- |
| pt            | 样式透传配置对象             | [PassThrough](#passthrough) | -      | -                    |
| modelValue    | 当前页码（双向绑定）         | array \| string \| number   | -      | null                 |
| icon          | 节点图标                     | string                      | -      | "arrow-right-s-fill" |
| expandIcon    | 展开图标                     | string                      | -      | "arrow-down-s-fill"  |
| checkStrictly | 是否严格的遵循父子不互相关联 | boolean                     | -      | false                |
| checkable     | 是否可以选择节点             | boolean                     | -      | false                |
| multiple      | 是否允许多选                 | boolean                     | -      | false                |

:::tip **checkStrictly** 属性用于控制父子节点之间的选中状态是否关联。

- 当 `checkStrictly` 为 `false`（默认值）时，父子节点的选中状态会相互影响：选中父节点会自动选中所有子节点，取消父节点会取消所有子节点；同理，选中/取消所有子节点也会影响父节点的半选或全选状态。
- 当 `checkStrictly` 为 `true` 时，父子节点的选中状态完全独立，互不影响。选中父节点不会影响子节点，选中子节点也不会影响父节点，非常适合需要精确控制每个节点选中状态的场景。

:::

## 事件

| 事件名             | 说明                     | 回调参数                                         |
| ------------------ | ------------------------ | ------------------------------------------------ |
| clearChecked       | 清除所有已选中的节点     | `() => void`                                     |
| setChecked         | 设置指定节点的选中状态   | `(key: string \| number, flag: boolean) => void` |
| setCheckedKeys     | 批量设置选中节点         | `(keys: (string \| number)[]) => void`           |
| getCheckedKeys     | 获取所有已选中节点的 key | `() => (string \| number)[]`                     |
| getHalfCheckedKeys | 获取所有半选节点的 key   | `() => (string \| number)[]`                     |
| setExpanded        | 设置指定节点的展开状态   | `(key: string \| number, flag: boolean) => void` |
| setExpandedKeys    | 批量设置展开节点         | `(keys: (string \| number)[]) => void`           |
| getExpandedKeys    | 获取所有已展开节点的 key | `() => (string \| number)[]`                     |
| expandAll          | 展开所有节点             | `() => void`                                     |
| collapseAll        | 收起所有节点             | `() => void`                                     |

## PassThrough 样式透传

样式穿透配置，用于自定义组件内部元素的样式。

| 属性名          | 说明           | 类型                                                        |
| --------------- | -------------- | ----------------------------------------------------------- |
| className       | 组件根元素样式 | string                                                      |
| item            | 单项元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| itemChecked     | 选中状态配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| itemWrapper     | 外层包裹配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| expand          | 展开区域配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| expandIcon      | 展开图标配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| checkbox        | 复选框区域配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| checkedIcon     | 选中图标配置   | [ClIconProps](/src/components/basic/icon.md#passthrough)    |
| halfCheckedIcon | 半选图标配置   | [ClIconProps](/src/components/basic/icon.md#passthrough)    |
| uncheckedIcon   | 未选中图标配置 | [ClIconProps](/src/components/basic/icon.md#passthrough)    |
| label           | 标签配置       | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础用法

此处为模拟接口请求后的数据，使用时请注意：

- 推荐通过 useTree() 方法进行赋值，以避免类型不匹配的问题
- 当启用 `multiple` 多选参数时，v-model 绑定的值需与节点的 `id` 类型保持一致

```vue
<template>
  <cl-tree v-model="checkedKeys" ref="treeRef" :list="list"></cl-tree>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTree, useUi, type ClTreeItem } from "@/uni_modules/cool-ui";

const checkedKeys = ref<string[]>(["1-1-1-1", "2-1-1", "2-1-2"]);

const ui = useUi();

const list = ref<ClTreeItem[]>([]);

function refresh() {
  ui.showLoading();

  setTimeout(() => {
    list.value = useTree([
      {
        id: "1",
        label: "华为",
        children: [
          {
            id: "1-1",
            label: "手机",
            children: [
              {
                id: "1-1-1",
                label: "Mate系列",
                children: [
                  {
                    id: "1-1-1-1",
                    label: "Mate 50",
                  },
                  {
                    id: "1-1-1-2",
                    disabled: true,
                    label: "Mate 40",
                  },
                  {
                    id: "1-1-1-3",
                    label: "Mate 30",
                  },
                ],
              },
              {
                id: "1-1-2",
                label: "P系列",
                children: [
                  {
                    id: "1-1-2-1",
                    disabled: true,
                    label: "P60",
                  },
                  {
                    id: "1-1-2-2",
                    label: "P50",
                  },
                  {
                    id: "1-1-2-3",
                    label: "P40",
                  },
                ],
              },
            ],
          },
          {
            id: "1-2",
            label: "笔记本",
            children: [
              {
                id: "1-2-1",
                label: "MateBook X",
                children: [
                  {
                    id: "1-2-1-1",
                    label: "MateBook X Pro",
                  },
                  {
                    id: "1-2-1-2",
                    label: "MateBook X 2022",
                  },
                ],
              },
              {
                id: "1-2-2",
                label: "MateBook D",
                children: [
                  {
                    id: "1-2-2-1",
                    label: "MateBook D 14",
                  },
                  {
                    id: "1-2-2-2",
                    label: "MateBook D 15",
                  },
                ],
              },
              {
                id: "1-2-3",
                label: "MateBook 13",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        label: "小米",
        isExpand: true,
        children: [
          {
            id: "2-1",
            label: "手机",
            children: [
              {
                id: "2-1-1",
                label: "小米数字系列",
              },
              {
                id: "2-1-2",
                label: "Redmi系列",
              },
            ],
          },
          {
            id: "2-2",
            label: "家电",
            children: [
              {
                id: "2-2-1",
                label: "电视",
              },
              {
                id: "2-2-2",
                label: "空调",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        label: "苹果",
        children: [
          {
            id: "3-1",
            label: "手机",
            children: [
              {
                id: "3-1-1",
                label: "iPhone 14",
              },
              {
                id: "3-1-2",
                label: "iPhone 13",
              },
            ],
          },
          {
            id: "3-2",
            label: "平板",
            children: [
              {
                id: "3-2-1",
                label: "iPad Pro",
              },
              {
                id: "3-2-2",
                label: "iPad Air",
              },
            ],
          },
        ],
      },
      {
        id: "4",
        label: "OPPO",
        children: [
          {
            id: "4-1",
            label: "手机",
            children: [
              {
                id: "4-1-1",
                label: "Find系列",
              },
              {
                id: "4-1-2",
                label: "Reno系列",
              },
            ],
          },
          {
            id: "4-2",
            label: "配件",
            children: [
              {
                id: "4-2-1",
                label: "耳机",
              },
              {
                id: "4-2-2",
                label: "手环",
              },
            ],
          },
        ],
      },
      {
        id: "5",
        label: "vivo",
        children: [
          {
            id: "5-1",
            label: "手机",
            children: [
              {
                id: "5-1-1",
                label: "X系列",
              },
              {
                id: "5-1-2",
                label: "S系列",
              },
            ],
          },
          {
            id: "5-2",
            label: "智能设备",
            children: [
              {
                id: "5-2-1",
                label: "手表",
              },
              {
                id: "5-2-2",
                label: "耳机",
              },
            ],
          },
        ],
      },
    ]);

    ui.hideLoading();
  }, 500);
}
</script>
```

### 默认数据

如果你希望直接写死数据，可以在 ref 中直接赋值（注意：多层级嵌套时，从第二层开始需要通过 `as ClTreeItem[]` 明确指定类型）。

```vue
<script lang="ts" setup>
const list = ref<ClTreeItem[]>([
  {
    id: "1",
    label: "A",
    children: [
      {
        id: "1-1",
        label: "A-1",
        children: [
          {
            id: "1-1-1",
            label: "A-1-1",
          },
        ] as ClTreeItem[],
      },
    ] as ClTreeItem[],
  },
  {
    id: "2",
    label: "B",
  },
]);
</script>
```

### 使用 useTree()

这样可以有效减少频繁使用 `as ClTreeItem[]` 的情况，使代码更加简洁易读。

```vue
<script lang="ts" setup>
const list = ref<ClTreeItem[]>(
  useTree([
    {
      id: "1",
      label: "A",
      children: [
        {
          id: "1-1",
          label: "A-1",
          children: [
            {
              id: "1-1-1",
              label: "A-1-1",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      label: "B",
    },
  ])
);
</script>
```

### 调用方法

类型定义必须为 `ClTreeComponentPublicInstance | null`，请在组件渲染后使用

```vue
<template>
  <cl-tree ref="treeRef"></cl-tree>
</template>

<script lang="ts" setup>
const treeRef = ref<ClTreeComponentPublicInstance | null>(null);

function expand() {
  treeRef.value!.setExpandedKeys(["4", "5"]);
}

function getExpanded() {
  expandedKeys.value = treeRef.value!.getExpandedKeys();
}

function expandAll() {
  treeRef.value!.expandAll();
  expandedKeys.value = treeRef.value!.getExpandedKeys();
}

function collapseAll() {
  treeRef.value!.collapseAll();
}
</script>
```
