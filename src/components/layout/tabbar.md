# Tabbar 底部导航栏

底部导航栏组件,用于在应用底部展示多个页面入口,支持图标和文字的组合显示,常用于应用的主导航。

## 基础参数

| 参数            | 说明                 | 类型                        | 可选值 | 默认值      |
| --------------- | -------------------- | --------------------------- | ------ | ----------- |
| pt              | 样式穿透配置         | [PassThrough](#passthrough) | -      | -           |
| modelValue      | 当前选中的导航项值   | string                      | -      | ""          |
| list            | 导航项数据列表       | ClTabbarItem[]              | -      | []          |
| height          | 导航栏高度(px)       | number                      | -      | 60          |
| backgroundColor | 背景颜色             | string                      | -      | null        |
| color           | 未选中状态的文字颜色 | string                      | -      | surface-400 |
| selectedColor   | 选中状态的文字颜色   | string                      | -      | primary-500 |
| iconSize        | 图标尺寸(px)         | number                      | -      | 32          |
| textSize        | 文字大小(px)         | number                      | -      | 12          |
| showIcon        | 是否显示图标         | boolean                     | -      | true        |
| showText        | 是否显示文字         | boolean                     | -      | true        |

### 事件

| 事件名称 | 说明               | 回调参数           |
| -------- | ------------------ | ------------------ |
| select   | 导航项被点击时触发 | item: ClTabbarItem |

## PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式,实现更灵活的外观定制。

| 参数          | 说明           | 类型                                                       |
| ------------- | -------------- | ---------------------------------------------------------- |
| className     | 组件根元素样式 | string                                                     |
| item          | 导航项配置     | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| icon          | 图标配置       | [ClImageProps](/src/components/basic/image.md)             |
| text          | 文字配置       | [ClTextProps](/src/components/basic/text.md)               |
| footer        | 底部容器配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |
| footerContent | 底部内容配置   | [PassThroughProps](/src/components/pt.md#passthroughprops) |

## 示例

### 基础用法

最基本的底部导航栏用法,展示图标和文字。

::: tip 提示
`list` 属性必须明确定义类型为 `ClTabbarItem[]`,这是为了确保在 APP 端的兼容性。
:::

```vue
<cl-tabbar v-model="current" :list="list" @select="handleSelect"></cl-tabbar>

<script lang="ts" setup>
import type { ClTabbarItem } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const current = ref("home");

const list = ref<ClTabbarItem[]>([
	{
		text: "首页",
		value: "home",
		icon: "/static/icon/tabbar/home.png",
		selectedIcon: "/static/icon/tabbar/home-active.png"
	},
	{
		text: "分类",
		value: "category",
		icon: "/static/icon/tabbar/category.png",
		selectedIcon: "/static/icon/tabbar/category-active.png"
	},
	{
		text: "购物车",
		value: "cart",
		icon: "/static/icon/tabbar/cart.png",
		selectedIcon: "/static/icon/tabbar/cart-active.png"
	},
	{
		text: "我的",
		value: "my",
		icon: "/static/icon/tabbar/my.png",
		selectedIcon: "/static/icon/tabbar/my-active.png"
	}
]);

function handleSelect(item: ClTabbarItem) {
	// 可以在这里进行页面跳转等操作
}
</script>
```

### 仅显示图标

通过设置 `show-text` 为 `false` 可以只显示图标,适合图标语义明确的场景。

```vue
<cl-tabbar v-model="current" :list="list" :show-text="false"></cl-tabbar>
```

### 仅显示文字

通过设置 `show-icon` 为 `false` 可以只显示文字,适合简洁风格的设计。

```vue
<cl-tabbar v-model="current" :list="list" :show-icon="false"></cl-tabbar>
```

### 自定义颜色

可以通过 `color` 和 `selected-color` 属性自定义未选中和选中状态的文字颜色。

```vue
<cl-tabbar v-model="current" :list="list" color="#999" selected-color="#ff6b6b"></cl-tabbar>
```

### 自定义尺寸

通过 `height`、`icon-size` 和 `text-size` 属性可以调整导航栏的整体尺寸。

```vue
<cl-tabbar v-model="current" :list="list" :height="80" :icon-size="40" :text-size="14"></cl-tabbar>
```

### 自定义背景色

通过 `background-color` 属性可以自定义导航栏的背景颜色。

```vue
<cl-tabbar v-model="current" :list="list" background-color="#f5f5f5"></cl-tabbar>
```

### 样式穿透自定义

通过 `pt` 参数可以更灵活地自定义各个部分的样式。

```vue
<cl-tabbar
	v-model="current"
	:list="list"
	:pt="{
		className: 'border-t border-gray-200',
		item: {
			className: 'hover:bg-gray-50'
		},
		text: {
			size: 14,
			className: 'font-bold'
		},
		icon: {
			width: 36,
			height: 36
		}
	}"
></cl-tabbar>
```

## 类型定义

```typescript
interface ClTabbarItem {
	text?: string; // 导航项文字
	value: string; // 导航项唯一标识
	icon?: string; // 未选中状态图标
	selectedIcon?: string; // 选中状态图标
}
```
