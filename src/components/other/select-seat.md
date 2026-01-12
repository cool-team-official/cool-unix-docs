# SelectSeat 座位选择

座位选择组件，支持缩放、拖动、自定义样式和图片渲染，适用于电影院、剧院等场景的座位选择。

:::warning 提示
使用图片时，请确保配置了跨域访问权限，否则可能导致图片渲染失败。
:::

## 基础参数

| 参数            | 说明                     | 类型                | 可选值      | 默认值 |
| --------------- | ------------------------ | ------------------- | ----------- | ------ |
| v-model         | 已选座位数组             | ClSelectSeatValue[] | -           | []     |
| rows            | 行数                     | number              | -           | 0      |
| cols            | 列数                     | number              | -           | 0      |
| width           | 组件宽度(px)             | number              | -           | 0      |
| height          | 组件高度(px)             | number              | -           | 0      |
| seats           | 座位数据，不传则自动生成 | ClSelectSeatItem[]  | -           | []     |
| seatGap         | 座位间距                 | number              | -           | 8      |
| borderRadius    | 座位圆角                 | number              | -           | 8      |
| borderWidth     | 边框宽度                 | number              | -           | 1      |
| minScale        | 最小缩放比例             | number              | -           | 1      |
| maxScale        | 最大缩放比例             | number              | -           | 3      |
| color           | 座位图标颜色             | string              | surface-300 |
| darkColor       | 暗色模式座位图标颜色     | string              | surface-500 |
| bgColor         | 座位背景色               | string              | #ffffff     |
| darkBgColor     | 暗色模式座位背景色       | string              | surface-800 |
| borderColor     | 边框颜色                 | string              | surface-200 |
| darkBorderColor | 暗色模式边框颜色         | string              | surface-600 |
| selectedBgColor | 选中背景色               | string              | primary-500 |
| selectedColor   | 选中图标颜色             | string              | #ffffff     |
| image           | 座位图片                 | string              | -           |
| selectedImage   | 选中座位图片             | string              | -           |
| selectedIcon    | 选中图标                 | string              | check-line  |

## 座位数据类型

```typescript
// 选中值类型
interface ClSelectSeatValue {
  row: number;
  col: number;
}

// 座位项类型
interface ClSelectSeatItem {
  row: number;
  col: number;
  disabled?: boolean; // 是否禁用
  empty?: boolean; // 是否为空位（不渲染）
  bgColor?: string; // 自定义背景色
  borderColor?: string; // 自定义边框色
  selectedBgColor?: string; // 自定义选中背景色
  selectedColor?: string; // 自定义选中图标色
  selectedIcon?: string; // 自定义选中图标
  selectedImage?: string; // 自定义选中图片
  icon?: string; // 自定义图标
  image?: string; // 自定义图片
  color?: string; // 自定义图标颜色
}
```

## 事件

| 事件名            | 说明            | 回调参数                                            |
| ----------------- | --------------- | --------------------------------------------------- |
| update:modelValue | 选中座位变化    | value: ClSelectSeatValue[]                          |
| seatClick         | 点击座位        | seat: ClSelectSeatItem                              |
| move              | 拖动/缩放时触发 | { translateX, translateY, scale, screenTranslateX } |

## 方法

| 方法名   | 说明             | 参数                                            | 返回值             |
| -------- | ---------------- | ----------------------------------------------- | ------------------ |
| setSeat  | 设置指定座位属性 | (row: number, col: number, data: UTSJSONObject) | -                  |
| getSeats | 获取所有座位数据 | -                                               | ClSelectSeatItem[] |
| draw     | 重新绘制画布     | -                                               | -                  |

## 示例

### 基础用法

```html
<template>
  <cl-select-seat
    v-model="selectedSeats"
    :rows="10"
    :cols="12"
    :width="350"
    :height="400"
  ></cl-select-seat>
</template>

<script lang="ts" setup>
  import type { ClSelectSeatValue } from "@/uni_modules/cool-ui/types";

  const selectedSeats = ref<ClSelectSeatValue[]>([]);
</script>
```

### 自定义座位数据

设置部分座位为已售、空位或禁用状态

```html
<template>
  <cl-select-seat
    v-model="selectedSeats"
    :rows="5"
    :cols="8"
    :width="350"
    :height="250"
    :seats="seats"
  ></cl-select-seat>
</template>

<script lang="ts" setup>
  import type {
    ClSelectSeatItem,
    ClSelectSeatValue,
  } from "@/uni_modules/cool-ui/types";

  const selectedSeats = ref<ClSelectSeatValue[]>([]);

  const seats = ref<ClSelectSeatItem[]>([]);

  // 初始化座位
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 8; col++) {
      const seat: ClSelectSeatItem = { row, col };

      // 设置部分座位为已售（禁用）
      if ((row === 2 && col === 3) || (row === 2 && col === 4)) {
        seat.disabled = true;
        seat.bgColor = "#ef4444";
      }

      // 设置走廊（空位）
      if (col === 4 && row < 2) {
        seat.empty = true;
      }

      seats.value.push(seat);
    }
  }
</script>
```

### 使用图片

使用自定义图片替代默认样式

```html
<cl-select-seat
  v-model="selectedSeats"
  :rows="8"
  :cols="10"
  :width="350"
  :height="300"
  image="/static/seat-normal.png"
  selected-image="/static/seat-selected.png"
></cl-select-seat>
```

### 自定义颜色

```html
<cl-select-seat
  v-model="selectedSeats"
  :rows="6"
  :cols="8"
  :width="350"
  :height="280"
  bg-color="#f0f9ff"
  border-color="#0ea5e9"
  selected-bg-color="#0284c7"
  selected-color="#ffffff"
></cl-select-seat>
```

### 监听事件

```html
<template>
  <cl-select-seat
    v-model="selectedSeats"
    :rows="8"
    :cols="10"
    :width="350"
    :height="300"
    @seat-click="onSeatClick"
    @move="onMove"
  ></cl-select-seat>
</template>

<script lang="ts" setup>
  import type { ClSelectSeatValue, ClSelectSeatItem } from "@/types/components";

  const selectedSeats = ref<ClSelectSeatValue[]>([]);

  function onSeatClick(seat: ClSelectSeatItem) {
    console.log("点击座位:", seat.row + 1, "排", seat.col + 1, "座");
  }

  function onMove(info: {
    translateX: number;
    translateY: number;
    scale: number;
  }) {
    console.log("缩放比例:", info.scale);
  }
</script>
```

### 调用方法

```html
<template>
  <cl-select-seat
    ref="seatRef"
    v-model="selectedSeats"
    :rows="8"
    :cols="10"
    :width="350"
    :height="300"
  ></cl-select-seat>
  <button @click="markSold">标记已售</button>
</template>

<script lang="ts" setup>
  import type { ClSelectSeatComponentPublicInstance } from "@/types/components";

  const seatRef = ref<ClSelectSeatComponentPublicInstance | null>(null);
  const selectedSeats = ref([]);

  function markSold() {
    // 将第3排第5座标记为已售
    seatRef.value1.setSeat(2, 4, {
      disabled: true,
      bgColor: "#ef4444",
    });
  }
</script>
```

## 注意事项

- 组件基于 Canvas 绘制，支持双指缩放和单指拖动
- `rows` 和 `cols` 为必填参数，用于确定座位布局
- 座位索引从 0 开始，显示时行号从 1 开始
- 使用 `seats` 参数可以精确控制每个座位的状态和样式
- 设置 `empty: true` 的座位不会渲染，可用于创建走廊或不规则布局
- 设置 `disabled: true` 的座位无法被选中，适用于已售座位
