# Form 表单验证

表单组件用于数据录入与校验，支持多种校验规则、错误提示、禁用状态等功能。

:::tip 提示
已封装好简便的使用方式，无需像其他 UI 库那样编写繁琐的代码
:::

## cl-form

### 参数

| 参数          | 说明             | 类型                         | 可选值                     | 默认值   |
| ------------- | ---------------- | ---------------------------- | -------------------------- | -------- |
| pt            | 样式穿透配置     | [PassThrough](#passthrough)  | —                          | —        |
| modelValue    | 表单数据模型     | any                          | —                          | {}       |
| rules         | 表单规则         | Map<string, ClFormRule[]>    | —                          | []       |
| labelPosition | 标签位置         | [ClFormLabelPosition](#类型) | 'top' \| 'left' \| 'right' | 'top'    |
| labelWidth    | 标签宽度         | string                       | —                          | '120rpx' |
| showAsterisk  | 是否显示必填星号 | boolean                      | —                          | true     |
| showMessage   | 是否显示错误信息 | boolean                      | —                          | true     |
| disabled      | 是否禁用整个表单 | boolean                      | —                          | false    |

### 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 内容区域 |

### 方法

| 方法名        | 说明                   | 参数                                                                          |
| ------------- | ---------------------- | ----------------------------------------------------------------------------- |
| addField      | 添加某个验证字段       | `(prop: string) => void`                                                      |
| removeField   | 移除某个验证字段       | `(prop: string) => void`                                                      |
| getValue      | 获取指定字段的表单值   | `(prop: string) => any \| null`                                               |
| setError      | 设置指定字段的错误提示 | `(prop: string, error: string) => void`                                       |
| getError      | 获取指定字段的错误提示 | `(prop: string) => string`                                                    |
| removeError   | 移除指定字段的错误提示 | `(prop: string) => void`                                                      |
| clearErrors   | 清空所有错误提示       | `() => void`                                                                  |
| getRule       | 获取指定字段的规则     | `(prop: string) => ClFormRule[]`                                              |
| validateRule  | 验证指定字段的规则     | `(value: any \| null, rule: ClFormRule) => string \| null`                    |
| clearValidate | 清空所有字段的验证     | `() => void`                                                                  |
| validateField | 验证指定字段           | `(prop: string) => string` \| null                                            |
| validate      | 验证所有字段           | `(callback: (valid: boolean, errors: ClFormValidateError[]) => void) => void` |

## cl-form-item

- `cl-form-item` 参数优先级高于 `cl-form`

### 参数

| 参数          | 说明             | 类型                         | 可选值                     | 默认值 |
| ------------- | ---------------- | ---------------------------- | -------------------------- | ------ |
| pt            | 样式穿透配置     | [PassThrough](#passthrough)  | —                          | —      |
| label         | 字段标签         | string                       | —                          | ''     |
| prop          | 字段名称         | string                       | —                          | ''     |
| labelPosition | 标签位置         | [ClFormLabelPosition](#类型) | 'top' \| 'left' \| 'right' | null   |
| labelWidth    | 标签宽度         | string                       | —                          | null   |
| showAsterisk  | 是否显示必填星号 | boolean                      | —                          | null   |
| showMessage   | 是否显示错误信息 | boolean                      | —                          | null   |
| required      | 是否必填         | boolean                      | —                          | false  |

### 插槽

| 插槽名  | 说明         | 参数              |
| ------- | ------------ | ----------------- |
| default | 内容区域     |                   |
| error   | 错误提示区域 | `{error: string}` |

## useForm

表单相关的钩子函数，便于快速获取和操作表单组件实例

```ts
const { formRef, disabled, addField } = useForm();
```

### 返回值

| 参数          | 说明                   | 类型                                                                          |
| ------------- | ---------------------- | ----------------------------------------------------------------------------- |
| formRef       | `cl-form` 组件实例     | [ClFormComponentPublicInstance](#cl-form)                                     |
| disabled      | 表单是否禁用           | boolean                                                                       |
| addField      | 添加某个验证字段       | `(prop: string) => void`                                                      |
| removeField   | 移除某个验证字段       | `(prop: string) => void`                                                      |
| getValue      | 获取指定字段的表单值   | `(prop: string) => any \| null`                                               |
| setError      | 设置指定字段的错误提示 | `(prop: string, error: string) => void`                                       |
| getError      | 获取指定字段的错误提示 | `(prop: string) => string`                                                    |
| removeError   | 移除指定字段的错误提示 | `(prop: string) => void`                                                      |
| clearErrors   | 清空所有错误提示       | `() => void`                                                                  |
| getRule       | 获取指定字段的规则     | `(prop: string) => ClFormRule[]`                                              |
| validateRule  | 验证指定字段的规则     | `(value: any \| null, rule: ClFormRule) => string \| null`                    |
| clearValidate | 清空所有字段的验证     | `() => void`                                                                  |
| validateField | 验证指定字段           | `(prop: string) => string` \| null                                            |
| validate      | 验证所有字段           | `(callback: (valid: boolean, errors: ClFormValidateError[]) => void) => void` |

## 验证规则

### 参数

| 参数      | 说明             | 类型                             |
| --------- | ---------------- | -------------------------------- |
| required  | 是否必填         | boolean                          |
| message   | 错误提示         | string                           |
| min       | 最小值、最小位数 | number                           |
| max       | 最大值、最大位数 | number                           |
| pattern   | 正则表达式       | RegExp                           |
| validator | 自定义验证       | `(value: any) => string \| true` |

### 是否必填

在此处添加 `required` 并不意味着该字段为必填项，实际是否必填需在 `cl-form-item` 组件中通过 `required` 属性进行配置。

```ts
const rules = new Map<string, ClFormRule[]>([
	[
		"nickName",
		[
			{ required: true, message: t("用户名不能为空") },
		]
	]
]
```

### 字符数长度

```ts
const rules = new Map<string, ClFormRule[]>([
	[
		"nickName",
		[
			{ min: 3, max: 20, message: t("用户名长度在3-20个字符之间") }
		]
	]
]
```

### 正则表达式

```ts
const rules = new Map<string, ClFormRule[]>([
	[
		"email",
		[
			{ pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t("邮箱格式不正确") }
		]
	]
]
```

### 最大最小值

当 `height` 字段为数字 number 类型时

```ts
const rules = new Map<string, ClFormRule[]>([
	[
		"height",
		[
			{ min: 160, max: 190, message: t("身高在160-190cm之间") }
		]
	]
]
```

### 数组长度

当 `tags` 字段为数组 Array 类型时

```ts
const rules = new Map<string, ClFormRule[]>([
	[
		"tags",
		[
			{ min: 1, max: 2, message: t("标签最多选择2个") }
		]
	],
]
```

### 自定义验证

- 返回 `true` 表示验证通过，返回字符串则作为验证失败时的提示信息。
- 注意：此时 `value` 的类型为 `any`，如需进行字符串或数组等类型的操作，可通过 `as string` 等方式进行类型断言。

```ts
const rules = new Map<string, ClFormRule[]>([
	[
		"birthday",
		[
			{
				validator(value) {
					if (dayUts(value).isAfter(dayUts("2010-01-01"))) {
						return t("出生年月不大于2010-01-01");
					}

					return true;
				}
			}
		]
	]
]
```

更多规则参考 `/pages/demo/form/form.uvue` 中的写法

## 类型定义

```ts
// 表单规则类型
type ClFormRule = {
  // 是否必填
  required?: boolean;
  // 错误信息
  message?: string;
  // 最小长度
  min?: number;
  // 最大长度
  max?: number;
  // 正则验证
  pattern?: RegExp;
  // 自定义验证函数
  validator?: (value: any | null) => boolean | string;
};

type ClFormValidateError = {
  field: string;
  message: string;
};

type ClFormValidateResult = {
  valid: boolean;
  errors: ClFormValidateError[];
};

type ClFormLabelPosition = "left" | "top" | "right";
```

## 示例

### 简单用法

- `formData` 的类型定义参考如下写法：先自定义类型（类型名如 `FormData` 可自定义），再通过 `ref` 并结合 `as` 明确类型。
- `formData` 必须使用 `ref` 定义，不能用 `reactive`。

```vue
<template>
  <cl-form v-model="formData">
    <cl-form-item prop="avatarUrl">
      <cl-upload v-model="formData.avatarUrl" test></cl-upload>
    </cl-form-item>

    <cl-form-item label="用户名" prop="nickName">
      <cl-input
        v-model="formData.nickName"
        placeholder="请输入用户名"
        clearable
      ></cl-input>
    </cl-form-item>
  </cl-form>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

// 自定义表单数据类型
type FormData = {
  avatarUrl: string;
  nickName: string;
};

// 表单数据
const formData = ref<FormData>({
  avatarUrl: "",
  nickName: "神仙都没用",
}) as Ref<FormData>;
</script>
```

### 添加验证规则

- 通过为 `cl-form` 组件配置 `rules` 属性，可以为表单项添加校验规则。
- 可通过 `cl-form-item` 组件的 `required` 参数，快速指定字段为必填项。
- `rules` 必须定义为 `new Map<string, ClFormRule[]>`，这样才能获得类型提示和类型校验。
- 注意：`rules` 的默认值应为二维数组的形式。

```vue
<template>
  <cl-form v-model="formData" :rules="rules">
    <cl-form-item prop="avatarUrl">
      <cl-upload v-model="formData.avatarUrl" test></cl-upload>
    </cl-form-item>

    <cl-form-item label="用户名" prop="nickName" required>
      <cl-input
        v-model="formData.nickName"
        placeholder="请输入用户名"
        clearable
      ></cl-input>
    </cl-form-item>
  </cl-form>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { type ClFormRule } from "@/uni_modules/cool-ui";

// 自定义表单数据类型
type FormData = {
  avatarUrl: string;
  nickName: string;
};

// 表单数据
const formData = ref<FormData>({
  avatarUrl: "",
  nickName: "神仙都没用",
}) as Ref<FormData>;

// ------ 以下为新增内容 ------

// 表单验证规则
const rules = new Map<string, ClFormRule[]>([
  [
    "nickName",
    [
      { required: true, message: t("用户名不能为空") },
      { min: 3, max: 20, message: t("用户名长度在3-20个字符之间") },
    ],
  ],
]);
</script>
```

### 调用组件事件

- `cl-form` 组件的 `ref` 命名必须为 `formRef`，以便于后续操作。
- 相关方法需在组件渲染完成后调用，建议在 `onMounted` 或 `onReady` 等生命周期钩子中使用。

:::tip 小贴士
当子组件结构较为复杂时，可以通过 `useForm` 钩子获取上级表单组件实例，便于进行字段校验、获取或清除错误信息等操作。
:::

```vue
<template>
  <cl-form ref="formRef" v-model="formData" :rules="rules">
    <cl-form-item prop="avatarUrl">
      <cl-upload v-model="formData.avatarUrl" test></cl-upload>
    </cl-form-item>

    <cl-form-item label="用户名" prop="nickName" required>
      <cl-input
        v-model="formData.nickName"
        placeholder="请输入用户名"
        clearable
      ></cl-input>
    </cl-form-item>
  </cl-form>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { type ClFormRule, useForm } from "@/uni_modules/cool-ui";

// 自定义表单数据类型
type FormData = {
  avatarUrl: string;
  nickName: string;
};

// 表单数据
const formData = ref<FormData>({
  avatarUrl: "",
  nickName: "神仙都没用",
}) as Ref<FormData>;

// ------ 以下为新增内容 ------

// 表单验证规则
const rules = new Map<string, ClFormRule[]>([
  [
    "nickName",
    [
      { required: true, message: t("用户名不能为空") },
      { min: 3, max: 20, message: t("用户名长度在3-20个字符之间") },
    ],
  ],
]);

// 获取 cl-form 的组件实例
const { formRef, validate, clearValidate } = useForm();

// 重置表单数据
function reset() {
  formData.value.avatarUrl = "";
  formData.value.nickName = "";

  // 清空验证
  clearValidate();
}

// 提交表单，调用表单验证方法 validate
function submit() {
  validate((valid, errors) => {
    if (valid) {
      // 验证通过
    } else {
      // 验证不通过，可以提示错误信息 errors
    }
  });
}
</script>
```
