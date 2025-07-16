# Text 文本

`cl-text` 文本组件，支持多种文本类型展示，包括手机号、金额、内容超出省略等功能，并提供数据脱敏能力。

## 参数

| 参数       | 说明               | 类型                        | 可选值                                                          | 默认值    |
| ---------- | ------------------ | --------------------------- | --------------------------------------------------------------- | --------- |
| pt         | 样式穿透配置       | [PassThrough](#passthrough) |                                                                 |           |
| value      | 文本内容           | string                      |                                                                 |
| color      | 字体颜色           | string                      | "primary" \| "success" \| "error" \| "warn" \| "info"           |           |
| type       | 文本类型           | string                      | "default" \| "phone" \| "name" \| "amount" \| "card" \| "email" | "default" |
| mask       | 是否开启脱敏处理   | boolean                     |                                                                 | false     |
| currency   | 金额货币符号       | string                      |                                                                 | "¥"       |
| precision  | 金额小数位数       | number                      |                                                                 | 2         |
| maskStart  | 脱敏起始位置       | number                      |                                                                 | 3         |
| maskEnd    | 脱敏结束位置       | number                      |                                                                 | 4         |
| maskChar   | 脱敏替换字符       | string                      |                                                                 | "\*"      |
| ellipsis   | 是否启用省略号显示 | boolean                     |                                                                 | false     |
| selectable | 是否允许选择文本   | boolean                     |                                                                 | false     |

## PassThrough

样式穿透配置，用于自定义组件内部元素的样式。

| 参数      | 说明               | 类型   |
| --------- | ------------------ | ------ |
| className | 组件根元素样式类名 | string |

## 使用示例

### 基础用法

显示普通文本内容：

```html
<cl-text>云想衣裳花想容，春风拂槛露华浓。</cl-text>
```

### 设置文字颜色

通过 `color` 参数设置不同的文字颜色：

```html
<cl-text color="primary">主色调文字</cl-text>
<cl-text color="success">成功状态文字</cl-text>
<cl-text color="error">错误状态文字</cl-text>
<cl-text color="warn">警告状态文字</cl-text>
<cl-text color="info">信息提示文字</cl-text>
```

### 手机号脱敏显示

自动对手机号进行脱敏处理，保护用户隐私：

```html
<cl-text type="phone" mask value="13800138000"></cl-text>
```

### 姓名脱敏显示

对姓名进行脱敏处理：

```html
<cl-text type="name" mask value="张三"></cl-text>
```

### 邮箱地址脱敏

保护邮箱地址隐私：

```html
<cl-text type="email" mask value="example@example.com"></cl-text>
```

### 银行卡号脱敏

安全显示银行卡信息：

```html
<cl-text type="card" mask value="1234 5678 9012 3456"></cl-text>
```

### 自定义脱敏字符

使用自定义字符替换敏感信息：

```html
<cl-text type="phone" value="13800138000" mask mask-char="~"></cl-text>
```

### 金额格式化

自动格式化金额显示，支持货币符号和小数位控制：

```html
<cl-text type="amount" :value="100.0"></cl-text>
```

### 文本超长省略

当文本内容过长时，自动添加省略号：

```html
<cl-text ellipsis>
  锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。
</cl-text>
```
