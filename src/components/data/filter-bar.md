# FilterBar 筛选栏

FilterBar 筛选栏组件用于在列表、商品页等场景中快速筛选和切换数据，支持多种筛选类型，灵活组合，满足多样化业务需求。

## cl-filter-item

### 基础属性

| 属性名  | 说明               | 类型                                               | 可选值                         | 默认值   |
| ------- | ------------------ | -------------------------------------------------- | ------------------------------ | -------- |
| pt      | 样式透传配置对象   | [PassThrough](#passthrough)                        | -                              | -        |
| label   | 筛选项标签         | string                                             | -                              | ""       |
| value   | 当前值             | any                                                | -                              |          |
| type    | 筛选类型           | ClFilterItemType                                   | "switch" \| "select" \| "sort" | "switch" |
| options | 下拉类型的选项数据 | [ClSelectOption][](/src/components/form/select.md) | -                              | []       |

### 事件

| 事件名 | 说明       | 回调参数          |
| ------ | ---------- | ----------------- |
| change | 切换时触发 | `(value: number)` |

### PassThrough 样式透传

样式透传配置用于自定义组件内部元素的样式。

| 属性名    | 说明             | 类型                                                        |
| --------- | ---------------- | ----------------------------------------------------------- |
| className | 组件根元素样式   | string                                                      |
| label     | 标签元素样式配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

### 使用示例

`value` 属性为必填项，必须显式传递，否则组件无法正常工作。

#### 下拉框类型

- `type` 设置为 `select`
- `value` 可以是 `string` 、`number` 、 `boolean` 类型
- `options` 类型定义必须是 `ClSelectOption[]`

```html
<cl-filter-bar>
  <cl-filter-item
    label="综合排序"
    type="select"
    :value="1"
    :options="coreOptions"
    @change="onOptionsChange"
  ></cl-filter-item>
</cl-filter-bar>
```

#### 排序类型

- `type` 设置为 `sort`
- `value` 仅支持 `desc` 、 `asc` 、 `none`

```html
<cl-filter-bar>
  <cl-filter-item
    label="销量"
    type="sort"
    value="desc"
    @change="onSortChange"
  ></cl-filter-item>
</cl-filter-bar>
```

#### 开关类型

- `type` 设置为 `switch`
- `value` 仅支持 `true` 或 `false` 布尔值

```html
<cl-filter-bar>
  <cl-filter-item
    label="国补"
    type="switch"
    :value="false"
    @change="onSwitchChange"
  ></cl-filter-item>
</cl-filter-bar>
```

#### 组合

欲了解完整示例，请参见 `/pages/demo/data/filter-bar.uvue` 文件。

- 可通过 `pt` 属性灵活设置宽度等样式

```html
<cl-filter-bar>
  <!-- 下拉框 -->
  <cl-filter-item
    label="综合排序"
    type="select"
    :value="1"
    :options="coreOptions"
    :pt="{
        className: 'w-[220rpx] !flex-none'
    }"
    @change="onOptionsChange"
  ></cl-filter-item>

  <!-- 排序 -->
  <cl-filter-item
    label="销量"
    type="sort"
    value="desc"
    @change="onSortChange"
  ></cl-filter-item>

  <!-- 开关 -->
  <cl-filter-item
    label="国补"
    type="switch"
    :value="false"
    @change="onSwitchChange"
  ></cl-filter-item>

  <!-- 自定义 -->
  <view
    class="flex flex-row items-center justify-center flex-1"
    @tap="openFilter"
  >
    <cl-text>筛选</cl-text>
    <cl-icon name="filter-line"></cl-icon>
  </view>
</cl-filter-bar>

<script lang="ts" setup>
  // 下拉框的必须定义类型 ClSelectOption[]
  const coreOptions = ref<ClSelectOption[]>([
    {
      label: "综合排序",
      value: 1,
    },
    {
      label: "价格从高到底",
      value: 2,
    },
    {
      label: "价格从低到高",
      value: 3,
    },
  ]);
</script>
```
