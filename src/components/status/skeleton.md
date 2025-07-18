# Skeleton 骨架图

骨架图组件用于在数据加载过程中显示页面的基本结构，避免页面的突然变化，为用户提供更好的视觉体验。组件支持多种预设类型，也可以通过组合使用来构建复杂的骨架结构。

## 基础参数

| 参数    | 说明           | 类型    | 可选值                                    | 默认值 |
| ------- | -------------- | ------- | ----------------------------------------- | ------ |
| loading | 是否显示骨架图 | boolean | true / false                              | true   |
| type    | 骨架图类型     | string  | "text" \| "image" \| "circle" \| "button" | "text" |

## PassThrough

样式穿透配置，允许您自定义组件内部元素的样式类名。

| 参数      | 说明           | 类型                                                        |
| --------- | -------------- | ----------------------------------------------------------- |
| className | 组件根元素样式 | string                                                      |
| loading   | 加载状态下配置 | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础文本骨架

最简单的文本内容骨架图用法：

```html
<!-- 显示骨架图 -->
<cl-skeleton loading>
  <cl-text>云想衣裳花想容，春风拂槛露华浓。</cl-text>
</cl-skeleton>

<!-- 隐藏骨架图，显示真实内容 -->
<cl-skeleton :loading="false">
  <cl-text>云想衣裳花想容，春风拂槛露华浓。</cl-text>
</cl-skeleton>
```

### 按钮骨架

适用于按钮类组件的骨架展示：

```html
<view class="flex flex-row">
  <cl-skeleton type="button" loading>
    <cl-button>立即购买</cl-button>
  </cl-skeleton>

  <cl-skeleton type="button" loading class="ml-3">
    <cl-button type="plain">加入购物车</cl-button>
  </cl-skeleton>
</view>
```

### 图片骨架

适用于矩形图片的骨架展示：

```html
<cl-skeleton type="image" loading>
  <cl-image
    src="https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png"
    width="200"
    height="150"
  ></cl-image>
</cl-skeleton>
```

### 圆形头像骨架

适用于圆形头像或图标的骨架展示：

```html
<cl-skeleton type="circle" loading>
  <cl-image
    :radius="100"
    src="https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png"
    width="80"
    height="80"
  ></cl-image>
</cl-skeleton>
```

### 复杂组合骨架

通过组合不同类型的骨架图，构建复杂的内容结构：

```html
<view class="flex flex-row">
  <cl-skeleton type="image" loading> </cl-skeleton>

  <view class="flex-1 ml-2">
    <cl-skeleton type="text" loading> </cl-skeleton>
    <cl-skeleton type="text" loading class="mt-2 !w-[160rpx]"> </cl-skeleton>
  </view>
</view>
```

### 自定义样式

```html
<cl-skeleton
  type="text"
  loading
  :pt="{
    className: '!rounded-lg !bg-black',
  }"
>
</cl-skeleton>
```
