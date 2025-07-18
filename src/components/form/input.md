# Input 输入框

`cl-input` 组件基于 uni-app 的 `input` 组件，提供了丰富的输入功能和样式定制能力。

## 参数

| 参数             | 说明                                 | 类型                        | 可选值                                                                              | 默认值   |
| ---------------- | ------------------------------------ | --------------------------- | ----------------------------------------------------------------------------------- | -------- |
| pt               | 样式穿透配置                         | [PassThrough](#passthrough) |                                                                                     |          |
| modelValue       | 绑定值                               | string                      |                                                                                     | ""       |
| type             | 输入框类型                           | string                      | "text" \| "number" \| "idcard" \| "digit" \| "tel" \| "safe-password" \| "nickname" | "text"   |
| prefixIcon       | 前缀图标名称                         | string                      |                                                                                     |          |
| suffixIcon       | 后缀图标名称                         | string                      |                                                                                     |          |
| password         | 是否为密码类型                       | boolean                     |                                                                                     | false    |
| autofocus        | 是否自动聚焦                         | boolean                     |                                                                                     | false    |
| placeholder      | 输入框为空时的占位符文本             | string                      |                                                                                     | "请输入" |
| placeholderClass | 占位符文本的样式类名                 | string                      |                                                                                     | ""       |
| border           | 是否显示边框                         | boolean                     |                                                                                     | false    |
| disabled         | 是否禁用输入框                       | boolean                     |                                                                                     | false    |
| readonly         | 是否为只读状态                       | boolean                     |                                                                                     | false    |
| clearable        | 是否可清空内容                       | boolean                     |                                                                                     | false    |
| maxlength        | 最大输入长度限制                     | number                      |                                                                                     | 140      |
| cursorSpacing    | 指定光标与键盘的距离（单位：px）     | number                      |                                                                                     | 5        |
| confirmHold      | 点击键盘确认按钮时是否保持键盘不收起 | boolean                     |                                                                                     | false    |
| confirmType      | 设置键盘右下角按钮的文字             | string                      | "done" \| "go" \| "next" \| "search" \| "send"                                      | done     |
| adjustPosition   | 键盘弹起时，是否自动上推页面         | boolean                     |                                                                                     | true     |
| holdKeyboard     | 是否保持键盘不收起                   | boolean                     |                                                                                     | false    |

## 插槽

| 插槽    | 说明                   |
| ------- | ---------------------- |
| prepend | 在输入框前面插入的内容 |
| append  | 在输入框后面插入的内容 |

## 事件

| 事件                 | 说明                   |
| -------------------- | ---------------------- |
| input                | 输入内容时触发         |
| change               | 输入内容改变时触发     |
| focus                | 输入框获得焦点时触发   |
| blur                 | 输入框失去焦点时触发   |
| confirm              | 点击键盘确认按钮时触发 |
| clear                | 点击清空按钮时触发     |
| keyboardheightchange | 键盘高度发生变化时触发 |

## PassThrough

样式穿透配置，用于自定义组件内部元素的样式。

| 参数       | 说明           | 类型                                                        |
| ---------- | -------------- | ----------------------------------------------------------- |
| className  | 组件根元素样式 | string                                                      |
| inner      | 输入框配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| prefixIcon | 前缀图标配置   | [ClIconProps](/src/components/basic/icon.md#passthrough)    |
| suffixIcon | 后缀图标配置   | [ClIconProps](/src/components/basic/icon.md#passthrough)    |

## 示例

### 基本用法

最简单的输入框用法：

```html
<cl-input></cl-input>
```

### 数字输入

通过设置 `type` 为 `number` 来限制只能输入数字：

```html
<cl-input type="number"></cl-input>
```

### 密码输入

通过设置 `password` 属性来隐藏输入内容：

```html
<cl-input password></cl-input>
```

### 可清除内容

通过设置 `clearable` 属性来显示清空按钮：

```html
<cl-input clearable></cl-input>
```

### 使用前后插槽

通过插槽可以在输入框前后添加自定义内容：

```html
<cl-input>
  <template #append>
    <cl-button
      type="primary"
      size="small"
      icon="send-plane-fill"
      :pt="{
			className: 'ml-2'
		}"
    ></cl-button>
  </template>
</cl-input>

<cl-input>
  <template #prepend>
    <cl-button
      type="primary"
      size="small"
      icon="search-line"
      :pt="{
			className: 'mr-2'
		}"
      @tap="toAlert"
    ></cl-button>
  </template>
</cl-input>
```

### 自定义样式

通过 `pt` 属性可以自定义组件样式：

```vue
<cl-input
  :pt="{
    className: '!bg-sky-100 !border-sky-700',
    inner: {
      className: '!text-sky-700',
    },
  }"
></cl-input>
```
