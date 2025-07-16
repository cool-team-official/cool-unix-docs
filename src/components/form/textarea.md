# Textarea 文本域

`cl-textarea` 组件基于 uni-app 的 `textarea` 组件，提供了丰富的多行文本输入功能和样式定制能力。

## 参数

| 参数             | 说明                                                                     | 类型                        | 可选值                                                                              | 默认值   |
| ---------------- | ------------------------------------------------------------------------ | --------------------------- | ----------------------------------------------------------------------------------- | -------- |
| pt               | 样式穿透配置                                                             | [PassThrough](#passthrough) |                                                                                     |          |
| modelValue       | 双向绑定的输入值                                                         | string                      |                                                                                     | ""       |
| inputmode        | 输入键盘类型                                                             | string                      | "none" \| "text" \| "decimal" \| "numeric" \| "tel" \| "search" \| "email" \| "url" | "text"   |
| autofocus        | 是否自动获取焦点                                                         | boolean                     |                                                                                     | false    |
| placeholder      | 输入框为空时显示的占位符文本                                             | string                      |                                                                                     | "请输入" |
| placeholderClass | 占位符文本的自定义样式类名                                               | string                      |                                                                                     | ""       |
| border           | 是否显示输入框边框                                                       | boolean                     |                                                                                     | false    |
| maxlength        | 最大输入字符数限制                                                       | number                      |                                                                                     | 140      |
| disabled         | 是否禁用输入框                                                           | boolean                     |                                                                                     | false    |
| readonly         | 是否设置为只读状态                                                       | boolean                     |                                                                                     | false    |
| fixed            | 如果 textarea 是在 position:fixed 的区域，需要显示指定属性 fixed 为 true | boolean                     |                                                                                     | false    |
| height           | 文本域高度                                                               | number \| string            |                                                                                     | 120      |
| autoHeight       | 是否自动调整高度                                                         | boolean                     |                                                                                     | false    |
| showWordLimit    | 是否显示字数统计                                                         | boolean                     |                                                                                     | true     |
| clearable        | 是否显示清空按钮                                                         | boolean                     |                                                                                     | false    |
| cursorColor      | 光标颜色                                                                 | string                      |                                                                                     |          |
| cursorSpacing    | 指定光标与键盘的距离（单位：px）                                         | number                      |                                                                                     | 5        |
| confirmHold      | 点击键盘确认按钮时是否保持键盘不收起                                     | boolean                     |                                                                                     | false    |
| confirmType      | 设置键盘右下角按钮的文字                                                 | string                      | "done" \| "go" \| "next" \| "search" \| "send"                                      | done     |
| showConfirmBar   | 是否显示键盘上方带有"完成"按钮那一栏                                     | boolean                     |                                                                                     | true     |
| holdKeyboard     | 焦点时，点击页面的时候不收起键盘                                         | boolean                     |                                                                                     | false    |
| selectionStart   | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用                | number                      |                                                                                     | -1       |
| selectionEnd     | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用              | number                      |                                                                                     | -1       |
| adjustPosition   | 键盘弹起时，是否自动上推页面                                             | boolean                     |                                                                                     | true     |
| adjustKeyboardTo | 键盘对齐位置                                                             | string                      | "cursor" \| "bottom"                                                                | "cursor" |

## 事件

| 事件                 | 说明                       |
| -------------------- | -------------------------- |
| input                | 输入内容时触发             |
| change               | 输入内容发生变化时触发     |
| focus                | 输入框获得焦点时触发       |
| blur                 | 输入框失去焦点时触发       |
| confirm              | 点击键盘确认按钮时触发     |
| clear                | 点击清空按钮时触发         |
| linechange           | 输入框行数变化时触发       |
| keyboardheightchange | 键盘高度发生变化的时候触发 |

## PassThrough

样式穿透配置，用于自定义组件内部元素的样式。

| 参数      | 说明               | 类型                                                        |
| --------- | ------------------ | ----------------------------------------------------------- |
| className | 组件根元素样式类名 | string                                                      |
| inner     | 内部输入框样式     | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 示例

### 基本用法

最简单的文本域用法：

```html
<cl-textarea></cl-textarea>
```

### 带边框

添加边框样式：

```html
<cl-textarea border></cl-textarea>
```

### 自动调整高度

根据内容自动调整文本域高度：

```html
<cl-textarea auto-height></cl-textarea>
```

### 显示字数统计

配置 `show-word-limit` 属性显示字数统计：

```html
<cl-textarea show-word-limit></cl-textarea>
```

### 自定义样式

通过 `pt` 属性自定义组件样式：

```vue
<cl-textarea
  :pt="{
    className: '!bg-sky-100 !border-sky-700',
    inner: {
      className: '!text-sky-700',
    },
  }"
></cl-textarea>
```
