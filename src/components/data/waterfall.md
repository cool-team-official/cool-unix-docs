# Waterfall 瀑布流

瀑布流组件是一个响应式的多列布局组件，能够自动计算每个项目的位置，实现高度不等的网格布局效果。特别适用于图片展示、卡片列表等场景。

## 基础参数

| 参数    | 说明                   | 类型                        | 可选值 | 默认值 |
| ------- | ---------------------- | --------------------------- | ------ | ------ |
| pt      | 样式透传配置           | [PassThrough](#passthrough) | -      | -      |
| column  | 瀑布流列数             | number                      | -      | 2      |
| gutter  | 列间距，单位为 rpx     | number                      | -      | 12     |
| nodeKey | 数据项的唯一标识字段名 | string                      | -      | "id"   |

### PassThrough

样式透传配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明           | 类型   |
| --------- | -------------- | ------ |
| className | 组件根元素样式 | string |

## 基本用法

### 设置列数

通过 `column` 参数控制瀑布流的列数，支持动态调整。

```html
<!-- 两列布局 -->
<cl-waterfall :column="2"></cl-waterfall>

<!-- 三列布局 -->
<cl-waterfall :column="3"></cl-waterfall>
```

### 自定义间距

使用 `gutter` 参数设置列之间的间距，单位为 rpx。

```html
<cl-waterfall :column="2" :gutter="20"></cl-waterfall>
```

## 内容渲染

### 插槽使用

使用 `#item` 插槽来定义每个瀑布流项目的内容，组件会自动计算每个项目的高度并进行布局。

```html
<cl-waterfall :column="2" :gutter="16">
  <template #item="{ item, index }">
    <image :src="item.image" mode="widthFix" class="w-full rounded-xl"></image>

    <cl-text class="mt-2">{{ item.title }}</cl-text>
  </template>
</cl-waterfall>
```

**插槽参数说明：**

- `item`: 当前数据项
- `index`: 当前项的索引

## 数据操作方法

### 追加数据

使用 `append` 方法向瀑布流末尾追加新数据，适用于分页加载等场景。

```ts
const waterfallRef = ref<ClWaterfallComponentPublicInstance | null>(null);

// 追加单个数据项
waterfallRef.value?.append([
  {
    id: 1,
    title: "夕阳西下的海滩边，金色阳光温柔地洒在波光粼粼的海面上",
    image: "/static/demo/2.jpg",
  },
]);

// 追加多个数据项
waterfallRef.value?.append([
  { id: 2, title: "标题2", image: "/static/demo/3.jpg" },
  { id: 3, title: "标题3", image: "/static/demo/4.jpg" },
]);
```

### 更新数据

使用 `update` 方法根据 `nodeKey` 匹配并更新指定数据项。

```ts
const waterfallRef = ref<ClWaterfallComponentPublicInstance | null>(null);

// 更新 id 为 1 的数据项
waterfallRef.value?.update(1, {
  title: "更新后的标题",
  likeCount: 999,
});
```

### 移除数据

使用 `remove` 方法移除指定的数据项。

```ts
const waterfallRef = ref<ClWaterfallComponentPublicInstance | null>(null);

// 移除 id 为 1 的数据项
waterfallRef.value?.remove(1);
```

### 清空数据

使用 `clear` 方法清空所有数据。

```ts
const waterfallRef = ref<ClWaterfallComponentPublicInstance | null>(null);

// 清空所有数据
waterfallRef.value?.clear();
```

## 完整示例

以下是一个包含图片展示、点赞功能和无限滚动的完整瀑布流示例：

```html
<template>
  <cl-page back-top>
    <view class="py-2">
      <cl-waterfall ref="waterfallRef" :column="2" :gutter="16">
        <template #item="{ item, index }">
          <view class="bg-white mb-3 rounded-xl dark:!bg-gray-800 relative">
            <!-- 图片展示 -->
            <image
              :src="item.image"
              mode="widthFix"
              class="w-full rounded-xl"
            ></image>

            <!-- 广告标识 -->
            <template v-if="item.isAd">
              <cl-tag :pt="{ className: 'absolute left-1 top-1 scale-75' }">
                广告
              </cl-tag>
              <cl-icon
                color="white"
                name="close-line"
                :pt="{ className: 'absolute right-2 top-2' }"
                @tap="del(item.id as number)"
              ></cl-icon>
            </template>

            <!-- 内容区域 -->
            <view class="p-3" v-else>
              <cl-text>{{ item.title }}</cl-text>

              <!-- 点赞区域 -->
              <cl-row
                class="mt-2"
                :pt="{ className: 'justify-end items-center' }"
              >
                <cl-icon name="heart-line"></cl-icon>
                <cl-text :pt="{ className: '!text-sm ml-1' }">
                  {{ item.likeCount }}
                </cl-text>
              </cl-row>
            </view>
          </view>
        </template>
      </cl-waterfall>

      <!-- 加载更多指示器 -->
      <cl-loadmore :loading="loading"></cl-loadmore>
    </view>
  </cl-page>
</template>

<script lang="ts" setup>
  import { random } from "@/cool";
  import { onMounted, ref } from "vue";

  const waterfallRef = ref<ClWaterfallComponentPublicInstance | null>(null);
  const loading = ref(false);

  let id = 0;

  // 生成模拟数据
  function generateMockData() {
    return [
      {
        id: id++,
        likeCount: random(100, 1000),
        title: "春日樱花盛开时节，粉色花瓣如诗如画般飘洒",
        image: "/static/demo/1.jpg",
      },
      {
        id: id++,
        likeCount: random(100, 1000),
        title:
          "夕阳西下的海滩边，金色阳光温柔地洒在波光粼粼的海面上，构成令人心旷神怡的日落美景",
        image: "/static/demo/2.jpg",
      },
      {
        id: id++,
        likeCount: random(100, 1000),
        title:
          "寒冬腊月时分，洁白雪花纷纷扬扬地覆盖着整个世界，感受冬日的宁静与美好",
        image: "/static/demo/3.jpg",
      },
      {
        id: id++,
        image: "/static/demo/4.jpg",
        isAd: true,
      },
      {
        id: id++,
        likeCount: random(100, 1000),
        title: "都市夜景霓虹闪烁，五彩斑斓光芒照亮城市营造梦幻般景象",
        image: "/static/demo/5.jpg",
      },
      {
        id: id++,
        likeCount: random(100, 1000),
        title:
          "云雾缭绕的山间风光如诗如画让人心旷神怡，微风轻抚树梢带来阵阵清香，鸟儿在林间自由歌唱",
        image: "/static/demo/6.jpg",
      },
      {
        id: id++,
        likeCount: random(100, 1000),
        title:
          "古老建筑与现代摩天大楼交相辉映，传统与现代完美融合创造独特城市景观",
        image: "/static/demo/7.jpg",
      },
      {
        id: id++,
        likeCount: random(100, 1000),
        title:
          "广袤田野绿意盎然风光无限，金黄麦浪在微风中轻柔摇曳，农家炊烟袅袅升起",
        image: "/static/demo/8.jpg",
      },
      {
        id: id++,
        likeCount: random(100, 1000),
        title: "璀璨星空下银河横跨天际，繁星闪烁神秘光芒营造浪漫夜空美景",
        image: "/static/demo/9.jpg",
      },
      {
        id: id++,
        likeCount: random(100, 1000),
        title:
          "雄伟瀑布从高耸悬崖飞流直下激起千层浪花，彩虹在水雾中若隐若现如梦如幻",
        image: "/static/demo/10.jpg",
      },
    ];
  }

  // 刷新数据
  function refresh() {
    const items = generateMockData();
    waterfallRef.value?.append(items);
  }

  // 删除指定项目
  function del(id: number) {
    waterfallRef.value?.remove(id);
  }

  // 触底加载更多
  onReachBottom(() => {
    if (loading.value) return;

    loading.value = true;

    setTimeout(() => {
      refresh();
      loading.value = false;
    }, 1000);
  });

  // 初始化数据
  onMounted(() => {
    refresh();
  });
</script>
```

## 注意事项

1. **数据结构要求**：每个数据项必须包含 `nodeKey` 指定的字段（默认为 `id`），用于数据的唯一标识
2. **高度自适应**：组件会自动计算每个项目的高度，无需手动指定
3. **性能优化**：大量数据时建议使用虚拟滚动或分页加载来提升性能
4. **响应式布局**：组件支持响应式布局，可根据屏幕宽度动态调整列数

## API 类型定义

```ts
interface ClWaterfallComponentPublicInstance {
  append(items: any[]): void;
  update(id: any, data: Partial<any>): void;
  remove(id: any): void;
  clear(): void;
}
```
