# ListView 列表刷新

`cl-list-view` 组件结合 `usePager()` 钩子函数提供了完整的列表刷新解决方案，主要解决以下痛点：

- 避免使用 UTSJSONObject[] 类型定义列表数据，无法类型提示及不好维护
- 封装通用的下拉刷新和加载更多逻辑，减少重复代码
- 基于虚拟列表技术，实现大数据量场景下的高性能渲染

## 示例

查看以下 2 个文件，逐一分析为何这样使用

### list.uvue

- `virtual` 属性用于控制是否启用虚拟列表渲染。启用时需要注意:

  - 必须设置固定的列表项高度
  - 需要配置 `bottomHeight` 以适配加载更多组件的显示
  - 建议在大数据量场景下开启,小数据量场景可以关闭

- `pt.refresher` 提供下拉刷新区域的自定义样式能力

- `refresher-enabled` 设置为 `true` 开启下拉刷新功能

- `@pull` 下拉刷新事件,触发时会重置页码为 1,实现列表数据重新加载

- `@bottom` 监听列表滚动到底部事件,用于触发加载更多数据

- `#item` 建议将列表项封装为独立组件(如 `goods-item.uvue`):

  - 避免直接使用 `value["name"]` 的方式访问 `UTSJSONObject` 类型数据
  - 提升代码可维护性和开发效率
  - 方便复用和统一管理列表项样式

- `#bottom` 用于自定义底部加载更多区域,通常配合 `cl-loadmore` 组件使用

- `usePager` 分页钩子函数

  - `usePager(cb)` 的参数是一个方法，用于调用获取列表的接口

    - 可以使用 [service](/src/guide/cool/service.md) 的方式调用

      ```ts
      usePager((params) => {
        return service.user.address.page(params);
      });
      ```

    - 也可以自定义 `request`，但是返回类型必须是：
      ```ts
      Promise<{
        list: any[];
        pagination: {
          size: number;
          page: number;
          total: number;
        };
      }>;
      ```

  - `refresh(params)` 刷新列表数据的方法
    - `params` 参数对象不能为空,可传入空对象 `{}`
    - 通过 `params` 可控制分页大小,如 `refresh({ size: 30 })` 设置每页显示 30 条
  - `list` 列表数据,类型为 `UTSJSONObject[]`,可用于任意场景如 `v-for` 循环
  - `listView` 列表数据,类型为 `ClListViewItem[]`,专用于 `cl-list-view` 组件的 `data` 属性
  - `loading` 布尔值,表示是否正在加载数据
  - `loadmore()` 加载下一页数据的方法

- `onPull()` 下拉刷新事件处理函数
  - 在刷新完成后需调用 `stopRefresh()` 停止刷新动画

```vue
<template>
  <cl-page>
    <cl-list-view
      ref="listViewRef"
      :data="listView"
      :virtual="false"
      :pt="{
        refresher: {
          className: 'pt-3',
        },
      }"
      :refresher-enabled="true"
      @pull="onPull"
      @bottom="loadMore"
    >
      <template #item="{ value }">
        <goods-item :value="value"></goods-item>
      </template>

      <template #bottom>
        <view class="py-3">
          <cl-loadmore :loading="loading" v-if="list.length > 0"></cl-loadmore>
        </view>
      </template>
    </cl-list-view>
  </cl-page>
</template>

<script lang="ts" setup>
import { useUi } from "@/uni_modules/cool-ui";
import { ref } from "vue";
import { usePager } from "@/cool";
import GoodsItem from "../components/goods-item.uvue";
import { t } from "@/locale";

const ui = useUi();

const listViewRef = ref<ClListViewComponentPublicInstance | null>(null);

let id = 0;

const { refresh, list, listView, loading, loadMore } = usePager((params) => {
  return new Promise((resolve) => {
    // 模拟请求
    setTimeout(() => {
      resolve({
        list: [
          {
            id: id++,
            title: "春日樱花盛开时节，粉色花瓣如诗如画般飘洒",
            image: "https://unix.cool-js.com/images/demo/1.jpg",
          },
          {
            id: id++,
            title:
              "夕阳西下的海滩边，金色阳光温柔地洒在波光粼粼的海面上，构成令人心旷神怡的日落美景",
            image: "https://unix.cool-js.com/images/demo/2.jpg",
          },
          {
            id: id++,
            title:
              "寒冬腊月时分，洁白雪花纷纷扬扬地覆盖着整个世界，感受冬日的宁静与美好",
            image: "https://unix.cool-js.com/images/demo/3.jpg",
          },
        ],
        pagination: {
          page: params["page"],
          size: params["size"],
          total: 100,
        },
      });

      ui.hideLoading();
    }, 1000);
  });
});

async function onPull() {
  await refresh({ page: 1 });
  listViewRef.value!.stopRefresh();
}

onReady(() => {
  ui.showLoading(t("加载中"));
  // 默认请求
  refresh({});
});
</script>
```

### goods-item.uvue

- 根据业务需求定义商品类型 `GoodsItem`，包含必要的字段类型声明
- 使用 `parse` 方法进行类型转换
- 在模板中使用可选链操作符 `?.` 访问属性，避免空值引起的错误，如 `item?.image`

```vue
<template>
  <view class="p-3 pb-0">
    <view class="w-full p-3 bg-white rounded-xl dark:bg-surface-800">
      <cl-image
        :src="item?.image"
        mode="aspectFill"
        width="100%"
        height="280rpx"
      ></cl-image>
      <cl-text :pt="{ className: 'mt-2' }">{{ item?.title }}</cl-text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { parse } from "@/cool";

defineOptions({
  name: "goods-item",
});

type GoodsItem = {
  id: number;
  title: string;
  image: string;
};

const props = defineProps({
  value: {
    type: Object,
    default: () => ({}),
  },
});

const item = computed(() => parse<GoodsItem>(props.value));
</script>
```
