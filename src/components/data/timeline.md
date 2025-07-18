# Timeline 时间轴

Timeline 时间轴组件用于展示时间流信息，通常用于显示历史记录、步骤流程或事件序列。

## 基础属性

| 属性名   | 说明               | 类型                        | 可选值 | 默认值 |
| -------- | ------------------ | --------------------------- | ------ | ------ |
| pt       | 样式透传配置对象   | [PassThrough](#passthrough) | -      | -      |
| title    | 时间轴项目标题     | string                      | -      | -      |
| icon     | 时间轴项目图标     | string                      | -      | -      |
| content  | 时间轴项目内容描述 | string                      | -      | -      |
| date     | 时间轴项目日期     | string                      | -      | -      |
| hideLine | 是否隐藏连接线     | boolean                     | -      | false  |

## PassThrough 样式透传

PassThrough 是一个样式透传配置对象，允许您深度自定义组件内部各个元素的样式。

| 属性名    | 说明           | 类型                                                        |
| --------- | -------------- | ----------------------------------------------------------- |
| className | 组件根元素样式 | string                                                      |
| icon      | 图标元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| title     | 标题元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| content   | 内容元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |
| date      | 日期元素配置   | [PassThroughProps](/src/components/doc.md#passthroughprops) |

## 使用示例

### 基础用法

最简单的时间轴使用方式，显示标题、日期和内容信息。

```html
<cl-timeline-item
  title="开通账号"
  date="2025-01-01"
  content="恭喜您成功开通账号，赠送新用户专属福利500元"
>
</cl-timeline-item>
```

### 带图标的时间轴

通过设置 `icon` 属性为时间轴项目添加图标，让信息更加直观。

```html
<cl-timeline-item
  icon="account-box-line"
  title="账号激活"
  date="2025-01-01 10:30"
  content="您的账号已成功激活，可以开始使用所有功能"
>
</cl-timeline-item>
```

### 自定义内容区域

当需要展示复杂内容时，可以通过插槽自定义内容区域的展示。

```html
<cl-timeline-item icon="account-box-line" title="推荐产品" date="2025-01-01">
  <view class="flex flex-row mb-3 mt-1">
    <cl-image
      src="https://uni-docs.cool-js.com/demo/pages/demo/static/bg1.png"
      class="w-20 h-20 rounded-lg"
    ></cl-image>

    <view class="flex-1 px-3">
      <cl-text class="font-medium">{{ "优选灵活配置混合A基金" }}</cl-text>

      <cl-text class="mr-5 mt-1 !text-sm text-gray-500">
        {{ "投资门槛：1000元起投" }}
      </cl-text>

      <view class="flex flex-row mt-2 items-center">
        <cl-button size="small" type="light"> {{ "立即购买" }} </cl-button>
      </view>
    </view>
  </view>
</cl-timeline-item>
```

### 隐藏连接线

在某些场景下，您可能不需要显示时间轴的连接线，可以通过 `hideLine` 属性控制。

```html
<cl-timeline-item
  title="最后一项"
  date="2025-01-03"
  content="这是时间轴的最后一项，不显示连接线"
  :hideLine="true"
>
</cl-timeline-item>
```

## 注意事项

- 时间轴组件通常需要配合多个 `cl-timeline-item` 使用来展示完整的时间流
- 建议为每个时间轴项目设置合适的图标以提升用户体验
- 自定义内容时注意保持视觉风格的一致性
