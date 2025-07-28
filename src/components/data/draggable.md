# Draggable 拖拽排序

一个功能强大的拖拽排序组件，支持单列、多列布局，可自定义拖拽动画和样式。

## 基础属性

| 属性名     | 说明                     | 类型                        | 可选值 | 默认值 |
| ---------- | ------------------------ | --------------------------- | ------ | ------ |
| pt         | 样式透传配置对象         | [PassThrough](#passthrough) | -      | -      |
| modelValue | 数据数组                 | UTSJSONObject[]             | -      | []     |
| disabled   | 是否禁用拖拽功能         | boolean                     | -      | false  |
| animation  | 拖拽动画持续时间（毫秒） | number                      | -      | 150    |
| columns    | 列数：1 为单列纵向布局   | number                      | -      | 1      |

## 事件

| 事件名 | 说明                   | 回调参数                  |
| ------ | ---------------------- | ------------------------- |
| change | 数据顺序发生变化时触发 | `(list: UTSJSONObject[])` |
| start  | 开始拖拽时触发         | `(index: number)`         |
| end    | 结束拖拽时触发         | `(index: number)`         |

## 插槽

| 插槽名 | 说明   | 参数                                                                                            |
| ------ | ------ | ----------------------------------------------------------------------------------------------- |
| item   | 子元素 | `{item: UTSJSONObject; index: numbe; dragging: boolean; dragIndex: number; insertIndex: number}` |

## PassThrough 样式透传

样式穿透配置，用于自定义组件内部元素的样式。

| 属性名    | 说明               | 类型                                                        |
| --------- | ------------------ | ----------------------------------------------------------- |
| className | 组件根元素样式     | string                                                      |
| ghost     | 拖拽选中时元素配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础用法

组件会自动计算子元素的高度和宽度，无需手动设置尺寸。使用 `item` 时需要通过 `as UTSJSONObject` 进行类型转换或使用 `item[key]` 访问属性。

```html
<cl-draggable v-model="list">
  <template #item="{ item, index }">
    <view
      class="flex flex-row items-center p-3 bg-surface-100 rounded-lg mb-2 dark:!bg-surface-700"
      :class="{
        'opacity-50': item['disabled']
      }"
    >
      <cl-text>{{ (item as UTSJSONObject).label }}</cl-text>
    </view>
  </template>
</cl-draggable>
```

### 结合列表使用

可以直接在插槽中使用 `cl-list-item` 或其他组件，无需额外配置。

```html
<cl-list border>
  <cl-draggable v-model="list2">
    <template #item="{ item, index, dragging, dragIndex }">
      <cl-list-item
        icon="chat-thread-line"
        :label="(item as UTSJSONObject).label"
        arrow
        :pt="{
          inner: {
            className: dragging && dragIndex == index ? '!bg-surface-100' : ''
          }
        }"
      ></cl-list-item>
    </template>
  </cl-draggable>
</cl-list>
```

### 多列排序

通过 `columns` 参数可以设置多列布局，实现网格拖拽排序。

```html
<cl-draggable v-model="list3" :columns="4">
  <template #item="{ item, index }">
    <view
      class="flex flex-row items-center justify-center p-3 bg-surface-100 rounded-lg m-1 dark:!bg-surface-700"
      :class="{
        'opacity-50': item['disabled']
      }"
    >
      <cl-text>{{ item['label'] }}</cl-text>
    </view>
  </template>
</cl-draggable>
```

### 结合图片使用

支持图片拖拽排序，可以直接使用 `cl-image` 组件。

```html
<cl-draggable v-model="list4" :columns="4">
  <template #item="{ item, index }">
    <view class="p-[2px]">
      <cl-image
        :src="(item as UTSJSONObject).url"
        mode="widthFix"
        :pt="{
          className: '!w-full'
        }"
        preview
      ></cl-image>
    </view>
  </template>
</cl-draggable>
```
