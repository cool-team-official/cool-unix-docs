# ListView 列表视图

采用虚拟列表技术实现高性能数据渲染，专为海量数据场景设计，支持无限滚动、分组显示和索引定位等功能。

## 基础参数

| 参数                    | 说明                                         | 类型                        | 可选值 | 默认值         |
| ----------------------- | -------------------------------------------- | --------------------------- | ------ | -------------- |
| pt                      | 样式透传配置，用于自定义组件内部元素样式     | [PassThrough](#passthrough) | -      | -              |
| data                    | 列表数据源，支持分组数据结构                 | ClListViewItem[]            | -      | []             |
| itemHeight              | 单个列表项的固定高度（虚拟渲染必需）         | number                      | -      | 50             |
| headerHeight            | 分组标题的固定高度                           | number                      | -      | 32             |
| topHeight               | 列表顶部预留空间高度，可用于放置搜索框等     | number                      | -      | 0              |
| bottomHeight            | 列表底部预留空间高度，可用于放置加载更多按钮 | number                      | -      | 0              |
| bufferSize              | 缓冲区大小，控制可视区域外预渲染的项目数量   | number                      | -      | 5              |
| virtual                 | 是否启用虚拟列表渲染，关闭后为普通列表       | boolean                     | -      | true           |
| scrollIntoView          | 滚动到指定位置                               | string                      | -      | ""             |
| scrollWithAnimation     | 是否启用滚动动画                             | boolean                     | -      | false          |
| showScrollbar           | 是否显示滚动条                               | boolean                     | -      | false          |
| refresherEnabled        | 是否启用下拉刷新                             | boolean                     | -      | false          |
| refresherThreshold      | 下拉刷新触发距离，相当于下拉内容高度         | number                      | -      | 50             |
| refresherBackground     | 下拉刷新区域背景色                           | string                      | -      | "transparent"  |
| refresherDefaultText    | 下拉刷新默认文案                             | string                      | -      | "下拉刷新"     |
| refresherPullingText    | 释放刷新文案                                 | string                      | -      | "释放立即刷新" |
| refresherRefreshingText | 正在刷新文案                                 | string                      | -      | "加载中"       |

:::warning 性能优化建议

- **虚拟列表模式**：启用虚拟列表渲染时，必须设置固定的 `itemHeight` 和 `headerHeight`，这是虚拟滚动计算的基础
- **缓冲区配置**：
  - **原生 APP**：性能较高，`bufferSize` 可设置为 `3-5`
  - **小程序平台**：建议设置为 `10-15` 以获得更流畅的滚动体验
  - **H5 平台**：推荐 `5-8`，根据设备性能调整
- **数据量建议**：超过 100 条数据时建议启用虚拟列表

:::

## 事件

| 事件名   | 说明             | 回调参数                    |
| -------- | ---------------- | --------------------------- |
| item-tap | 列表项点击时触发 | item: ClListViewVirtualItem |

## 插槽

| 插槽名    | 说明               | 参数                                                    | 使用场景                   |
| --------- | ------------------ | ------------------------------------------------------- | -------------------------- |
| top       | 顶部内容插槽       | -                                                       | 搜索框、筛选器等           |
| header    | 分组标题插槽       | `{ index: string }`                                     | 自定义分组标题样式         |
| item      | 列表项内容插槽     | `{ data: ClListViewItem; item: ClListViewVirtualItem }` | 自定义列表项布局和内容     |
| bottom    | 底部内容插槽       | -                                                       | 加载更多、底部提示信息等   |
| index     | 右侧索引栏项目插槽 | `{ index: string }`                                     | 自定义索引栏字母或图标样式 |
| refresher | 下拉刷新插槽       | `{ status: ClListViewRefresherStatus; text: string }`   | 下拉刷新自定义文字和图标   |

## PassThrough

支持深度自定义组件内部元素样式，提供企业级的样式控制能力。

| 属性名    | 说明                     | 类型                                                       |
| --------- | ------------------------ | ---------------------------------------------------------- |
| className | 组件根容器样式类名       | string                                                     |
| item      | 列表项容器的样式配置     | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| itemHover | 列表项容器按下的样式配置 | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| list      | 列表容器的样式配置       | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| scroller  | 滚动容器的样式配置       | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| refresher | 下拉刷新容器的样式配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| indexBar  | 右侧索引栏容器的样式配置 | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 类型定义

```ts
type ClListViewItem = {
  label?: string;
  value?: any;
  index?: string;
  children?: ClListViewItem[];
};

type ClListViewGroup = {
  index: string;
  children: ClListViewItem[];
};

type ClListViewVirtualItem = {
  key: string;
  type: "header" | "item";
  index: number;
  top: number;
  height: number;
  data: ClListViewItem;
};

type ClListViewRefresherStatus = "default" | "pulling" | "refreshing";
```

## 示例

### 基础用法

通过静态数据展示列表视图的基本用法。数据必须通过 `useListView()` 方法进行预处理，以确保数据结构的正确性。

:::tip

- 列表中如过不存在 `index` 字段，则右侧的索引栏不会显示

:::

```html
<cl-list-view :data="data"> </cl-list-view>

<script lang="ts" setup>
  data.value = useListView([
    {
      index: "F",
      label: "福建",
    },
    {
      index: "G",
      label: "广东",
    },
    {
      index: "J",
      label: "江西",
    },
    {
      index: "B",
      label: "北京",
    },
  ]);
</script>
```

### 通过接口获取

- 数据类型需要符合 `ClListViewItem[]` 接口定义
- 在赋值数据时，必须通过 `useListView()` 方法进行处理，以确保数据结构的正确性和一致性

```html
<cl-list-view :data="data"> </cl-list-view>

<script lang="ts" setup>
  import { request } from "@/cool";
  import { ref } from "vue";

  const data = ref<ClListViewItem[]>([]);

  onReady(() => {
    // 根据实际情况调整数据的类型
    request<UTSJSONObject[]>({
      url: "https://cool-service.oss-cn-shanghai.aliyuncs.com/app%2Fbase%2Fb1957e07f1254de99f44b5a711f277d2_pca_flat.json",
    })
      .then((res) => {
        data.value = useListView(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });
</script>
```

### 索引栏定位

默认情况下，索引栏采用 `absolute` 定位方式。当 `cl-list-view` 组件位于最外层且不是 `fixed` 定位，或者位于 `cl-popup` 组件内时，建议手动将定位属性设置为 `!fixed`，以获得更好的交互体验。

```html
<cl-list-view
  :pt="{
    indexBar: {
      className: '!fixed',
    },
  }"
>
</cl-list-view>
```
