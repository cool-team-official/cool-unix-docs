# Noticebar 通知栏

通知栏组件用于展示系统通知、公告信息等重要内容，支持水平滚动和垂直轮播两种展示方式，适用于各种信息展示场景。

## 基础参数

| 参数      | 说明                                     | 类型                        | 可选值                     | 默认值       |
| --------- | ---------------------------------------- | --------------------------- | -------------------------- | ------------ |
| pt        | 样式穿透配置，用于自定义组件内部元素样式 | [PassThrough](#passthrough) | -                          | -            |
| text      | 公告文本内容，支持字符串或字符串数组     | string \| string[]          | -                          | -            |
| direction | 滚动方向                                 | string                      | "horizontal" \| "vertical" | "horizontal" |
| duration  | 垂直滚动时的切换间隔时间                 | number                      | -                          | 3000         |
| speed     | 水平滚动时的滚动速度                     | number                      | -                          | 100          |
| height    | 通知栏的高度                             | string \| number            | -                          | 40           |

## PassThrough

样式穿透配置，允许您自定义组件内部元素的样式类名。

| 参数      | 说明           | 类型                                                        |
| --------- | -------------- | ----------------------------------------------------------- |
| className | 组件根元素样式 | string                                                      |
| text      | 文本元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 示例

### 基础用法

最简单的通知栏用法，展示一条水平滚动的文本信息。

```html
<cl-noticebar
  text="云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。"
></cl-noticebar>
```

### 带图标的通知栏

在通知栏前添加图标，增强视觉效果和信息传达。

```html
<view class="flex flex-row items-center">
  <cl-icon name="notification-4-line" class="mr-2"></cl-icon>
  <cl-noticebar
    text="云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。"
  ></cl-noticebar>
</view>
```

### 自定义滚动速度

通过 `speed` 属性调整水平滚动的速度，数值越小滚动越慢。

```html
<cl-noticebar
  :speed="40"
  text="云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。"
></cl-noticebar>
```

### 垂直轮播模式

垂直方向支持多条文本的轮播展示，适用于多条公告信息的场景。

```html
<cl-noticebar
  direction="vertical"
  :text="[
    '江南可采莲，莲叶何田田',
    '鱼戏莲叶间',
    '鱼戏莲叶东',
    '鱼戏莲叶西',
    '鱼戏莲叶南',
    '鱼戏莲叶北',
  ]"
></cl-noticebar>
```

### 自定义轮播间隔

通过 `duration` 属性设置垂直轮播时每条信息的停留时间。

```html
<cl-noticebar
  direction="vertical"
  :duration="5000"
  :text="[
    '重要通知：系统将于今晚22:00进行维护',
    '新功能上线：支持多语言切换',
    '活动公告：双十一活动即将开始',
  ]"
></cl-noticebar>
```

## 注意事项

- 当 `direction` 为 `"vertical"` 时，`text` 参数才支持数组格式
- 水平滚动模式下，`duration` 参数无效
- 垂直轮播模式下，`speed` 参数无效
- 建议通知文本不要过长，以保证良好的用户体验
