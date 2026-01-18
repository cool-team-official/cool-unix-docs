# 兼容性开发指南

本指南专门针对 **APP 端兼容性**问题，提供详细的解决方案和最佳实践。如果您的项目仅针对 H5 或小程序平台，可以忽略以下内容。

:::tip 💡 适用范围
本文档主要解决 uni-app x 在 APP 端（Android/iOS/鸿蒙）的兼容性问题，帮助开发者避免常见陷阱。
:::

## 代码规范

### 必须使用双闭合标签

```html
<!-- ❌ 错误写法 -->
<image />
<cl-image />

<!--  ✅ 成功写法 -->
<image></image>
<cl-image></cl-image>
```

## 函数开发规范

### 箭头函数参数限制

在 APP 端，箭头函数不支持可选参数，需要使用普通函数替代。

```ts
// ❌ 错误写法：箭头函数可选参数
const getName = (age?: number) => {
	console.log(age);
};

getName(10); // ✅ 成功
getName(); // ❌ 报错：No value passed for parameter 'p1'

// ✅ 正确写法：普通函数 + 默认值
function getName(age: number | null = null) {
	console.log(age);
}

getName(10); // ✅ 成功
getName(); // ✅ 成功
```

### 导出函数使用陷阱

模板中使用导出函数时，需要注意 `export function` 和 `export const` 的差异。

```ts
// utils.ts
export function getName(val: string) {
	return val;
}

export const getName2 = (val: string) => {
	return val;
};
```

```html
<!-- demo.uvue -->
<template>
	<!-- ❌ 错误：export function 在模板中使用会报错 -->
	<text>{{ getName('用户名') }}</text>

	<!-- ✅ 正确：export const 箭头函数可以正常使用 -->
	<text>{{ getName2('用户名') }}</text>
</template>
```

**解决方案**：在模板中优先使用 `export const` 导出的箭头函数。

## 样式开发注意事项

### 父子样式联动限制

APP 端不支持通过父级样式修改控制子元素样式，需要为子元素单独添加响应式类名。

```html
<!-- ❌ 问题示例 -->
<view class="container" :class="{ 'active': isActive }">
	<text class="title">标题文本</text>
</view>

<style lang="scss" scoped>
	.container {
		@apply bg-white;

		.title {
			@apply text-gray-700;
		}

		&.active {
			@apply bg-blue-500; /* ✅ 父元素样式生效 */

			.title {
				@apply text-white; /* ❌ 子元素样式不生效 */
			}
		}
	}
</style>
```

```html
<!-- ✅ 正确解决方案 -->
<view class="container" :class="{ 'active': isActive }">
	<text class="title" :class="{ 'active': isActive }">标题文本</text>
</view>

<style lang="scss" scoped>
	.container {
		@apply bg-white;

		&.active {
			@apply bg-blue-500;
		}
	}

	.title {
		@apply text-gray-700;

		&.active {
			@apply text-white; /* ✅ 生效 */
		}
	}
</style>
```

**备选方案**：

- 使用 `v-if` 条件渲染
- 使用 `key` 强制重新渲染
- 为子元素单独绑定响应式类名

### 动画属性设置

为避免鸿蒙平台的渲染异常，建议手动设置过渡属性。

```css
/* ❌ 默认设置可能导致异常 */
.transition-element {
	transition-property: all;
}

/* ✅ 推荐明确指定过渡属性 */
.transition-element {
	transition-property: opacity, transform;
}
```

## 类型规范

### v-model 类型声明

在 HBuilder X 4.75 以下版本，`v-model` 必须使用 `as` 进行类型断言。

```html
<!-- ✅ 正确写法 -->
<cl-input v-model="content as string"></cl-input>

<script lang="ts" setup>
	import { ref } from "vue";
	const content = ref<string>("");
</script>
```

### 数组类型定义

对于复杂类型的数组，必须明确指定泛型和类型断言。

```ts
type Item = {
	label: string;
	value: number;
};

// ✅ 正确：明确指定泛型
const list = ref<Item[]>([
	{
		label: "Vue",
		value: 1
	},
	{
		label: "React",
		value: 2
	}
]);

// ✅ 正确：添加元素时使用类型断言
list.value.push({
	label: "Angular",
	value: 3
} as Item);
```

### UTS 强类型限制

UTS 是强类型语言，不允许动态类型转换，即使类型结构相同。

```ts
type UserA = {
	name: string;
	age: number;
};

type UserB = {
	name: string;
	age: number;
};

const userA = {
	name: "张三",
	age: 25
} as UserA;

// ❌ 错误：即使结构相同也不能直接转换
console.log((userA as UserB).age);

// ✅ 正确：需要重新创建对象
const userB: UserB = {
	name: userA.name,
	age: userA.age
};
```

### 条件判断规范

#### null 值判断

```ts
let value: number | null = null;

// ❌ 错误用法
if (value) {
	console.log("有值");
}

// ✅ 正确用法
if (value != null) {
	console.log("有值");
}

// ✅ 推荐：使用工具函数
import { isNull } from "@/.cool";
if (!isNull(value)) {
	console.log("有值");
}
```

#### 逻辑或运算符

```ts
let value: number | null = null;

// ❌ 错误用法
console.log(value || 1);

// ✅ 正确用法
console.log(value != null ? value : 1);

// ✅ 推荐：使用空值合并运算符
console.log(value ?? 1);
```

### 可空类型处理

严格区分可空和不可空类型，使用 `| null` 或 `?` 定义可空属性。

```ts
type User = {
	name: string;
	age: number;
	email?: string; // 可选属性
	avatar: string | null; // 可空属性
};

const user = ref<User | null>(null);

// ✅ 安全访问
const userName = user.value?.name ?? "匿名用户";
const userEmail = user.value?.email ?? "未设置";
```

### UTSJSONObject 类型处理

默认对象类型为 `UTSJSONObject`，提供多种取值方法。

```ts
const data = {
	name: "张三",
	age: 25,
	city: "北京"
};

// 基本取值方法
console.log(data.name); // 直接访问
console.log(data["name"]); // 方括号访问
console.log(data["undefined"]); // 不报错，返回 undefined

// 类型安全的取值方法
console.log(data.getString("name", "未知")); // 字符串类型
console.log(data.getNumber("age", 0)); // 数字类型
console.log(data.getBoolean("active", false)); // 布尔类型
```

### 类型转换最佳实践

```ts
type User = {
	name: string;
	age: number;
	province?: string;
	city?: string;
};

const rawData = {
	name: "李四",
	age: 30
};

// ❌ 错误：直接类型断言会报错
// console.log((rawData as User).name);

// ✅ 正确：使用解析函数
import { parse } from "@/.cool";
const user = parse<User>(rawData);
console.log(user?.name);
```

## 开发限制说明

### 通用限制

- **不支持 `undefined`**: 所有变量使用前必须赋值
- **变量声明**: 使用 `let` 和 `const`，避免 `var`
- **比较运算符**: 优先使用 `==` 和 `!=`，避免 `===` 和 `!==`
- **避免 `any` 类型**: 使用具体类型或联合类型

### CSS 限制

- **暂不支持**: 多个 `dark:` 样式绑定（开发中）

## 鸿蒙平台

### 窗口高度获取问题

进入页面最好在 onReady 或者 onMounted 后获取窗口信息，不然会显示 0

```ts
// ❌ 问题：获取的高度为 0
const { windowHeight } = uni.getWindowInfo();

// ✅ 解决方案1：使用屏幕高度
onReady(() => {
	const { screenHeight } = uni.getWindowInfo();
});

// ✅ 解决方案2：使用屏幕高度，手动减去导航了、安全区域等
const { screenHeight } = uni.getWindowInfo();
```

### DOM 查询时机

```ts
// ❌ 问题：立即查询可能获取不准确
onMounted(() => {
	const query = uni.createSelectorQuery();
	// 可能获取到错误值
});

// ✅ 解决方案：延迟 50ms 执行
onMounted(() => {
	setTimeout(() => {
		const query = uni.createSelectorQuery();
		// 获取准确值
	}, 50);
});
```

## 相关资源

- [uni-app x 官方文档](https://doc.dcloud.net.cn/uni-app-x/)
- [UTS 语法说明](https://doc.dcloud.net.cn/uni-app-x/uts/)
- [UTS 类型兼容性](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html)
