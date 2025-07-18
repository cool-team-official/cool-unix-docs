# Pagination 分页组件

分页组件用于处理大量数据的分页显示，提供页码切换和导航功能，支持自定义样式和文本内容。

## 基础属性

| 属性名     | 说明                 | 类型                        | 可选值 | 默认值 |
| ---------- | -------------------- | --------------------------- | ------ | ------ |
| pt         | 样式透传配置对象     | [PassThrough](#passthrough) | -      | -      |
| modelValue | 当前页码（双向绑定） | number                      | -      | 1      |
| total      | 数据总条数           | number                      | -      | 0      |
| size       | 每页显示的数据条数   | number                      | -      | 10     |

## 事件

| 事件名 | 说明                 | 回调参数          |
| ------ | -------------------- | ----------------- |
| change | 当页码发生变化时触发 | `(value: number)` |

## PassThrough 样式透传

PassThrough 是一个样式透传配置对象，允许您深度自定义组件内部各个元素的样式。

| 属性名    | 说明             | 类型                                                        |
| --------- | ---------------- | ----------------------------------------------------------- |
| className | 组件根元素样式   | string                                                      |
| item      | 页码项元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| prev      | "上一页"按钮配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| next      | "下一页"按钮配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础用法

最简单的分页组件使用方式，设置总数据条数即可自动计算页数。

```html
<cl-pagination v-model="page" :total="24"></cl-pagination>
```

### 大数据量分页

当数据量较大时，组件会自动显示省略号和跳转页码。

```html
<cl-pagination v-model="page" :total="500"></cl-pagination>
```

### 自定义页码项样式

通过 PassThrough 配置自定义页码项的外观样式。

```html
<cl-pagination
  v-model="page"
  :total="100"
  :pt="{
    item: {
      className: '!rounded-none !mx-[2rpx]',
    },
  }"
></cl-pagination>
```

### 自定义按钮文本

使用插槽功能自定义上一页和下一页按钮的显示内容。

```html
<cl-pagination
  v-model="page4"
  :total="24"
  :pt="{
    prev: {
      className: '!w-auto px-3',
    },
    next: {
      className: '!w-auto px-3',
    },
  }"
>
  <template #prev>
    <cl-text class="!text-sm">上一页</cl-text>
  </template>

  <template #next>
    <cl-text class="!text-sm">下一页</cl-text>
  </template>
</cl-pagination>
```

## 注意事项

- `modelValue` 支持双向绑定，页码从 1 开始计算
- `total` 为数据总条数，组件会根据 `size` 自动计算总页数 ƒ
