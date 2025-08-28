# SlideVerify 滑动验证

滑动验证组件，支持滑块模式和图片拼图模式，常用于登录、注册等场景下的人机验证。通过拖动滑块或拼图，验证用户的操作行为，有效防止恶意请求和机器人攻击。组件支持多种自定义参数，可灵活配置样式、验证模式、提示信息等，满足不同业务需求。

## 基础参数

| 参数           | 说明                       | 类型                        | 可选值             | 默认值     |
| -------------- | -------------------------- | --------------------------- | ------------------ | ---------- |
| pt             | 样式穿透配置               | [PassThrough](#passthrough) | -                  | -          |
| modelValue     | 是否验证成功               | boolean                     | -                  | false      |
| mode           | 验证模式                   | string                      | "slide" \| "image" | "slide"    |
| size           | 滑块大小                   | number                      | -                  | 40         |
| disabled       | 是否禁用                   | boolean                     | -                  | false      |
| imageUrl       | 图片 URL（图片模式使用）   | string                      | -                  | ""         |
| imageSize      | 图片大小（图片模式使用）） | number \| string            | -                  | 300        |
| angleThreshold | 角度容错范围               | number                      | -                  | 10         |
| showFail       | 是否错误提示               | boolean                     | -                  | true       |
| failText       | 错误提示文字               | string                      | -                  | "验证失败" |

## PassThrough

样式穿透配置对象，用于深度自定义组件内部元素的样式。

| 参数      | 说明                   | 类型                                                        |
| --------- | ---------------------- | ----------------------------------------------------------- |
| className | 组件根元素的样式配置   | string                                                      |
| track     | 滑道轨迹元素的元素配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| image     | 图片元素的元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| progress  | 进度条元素的元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| slider    | 滑块元素的元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| icon      | 图标元素的元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| text      | 提示文字的元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| label     | 标签元素的元素配置     | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 事件

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| success  | 滑动验证成功 |          |
| fail     | 滑动验证失败 |          |

## 示例

### 基础用法

- 使用 `v-model` 实现验证状态的双向绑定
- 通过 `@success` 事件监听滑动验证成功回调
- 通过 `@fail` 事件监听滑动验证失败回调

```html
<cl-slide-verify
  v-model="status"
  @success="onSuccess"
  @fail="onFail"
></cl-slide-verify>
```

### 没有错误提示

无错误提示，用户可多次尝试直至验证成功

```html
<cl-slide-verify :show-fail="false"></cl-slide-verify>
```

### 转动图片

转动图片模式下，用户需要将图片滑动到正确的角度以完成验证。可通过设置 `mode="image"` 以及指定 `image-url` 来启用该模式。适用于防止恶意操作、机器人注册等场景。

支持自定义图片、图片大小、角度容错范围等参数，提升验证的灵活性和安全性。

```html
<cl-slide-verify
  mode="image"
  image-url="https://unix.cool-js.com/images/demo/avatar.jpg"
></cl-slide-verify>
```
