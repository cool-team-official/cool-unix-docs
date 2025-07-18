# Loading 加载中

## 参数

| 参数    | 说明         | 类型                        | 可选值 | 默认值 |
| ------- | ------------ | --------------------------- | ------ | ------ |
| pt      | 样式穿透配置 | [PassThrough](#passthrough) |        |        |
| loading | 是否加载中   | boolean                     |        | true   |
| size    | 图标大小     | string \| number            |        | 24     |
| color   | 图标颜色     | string                      |        |        |

## PassThrough

样式穿透配置，用于自定义组件内部元素的样式。

| 参数      | 说明           | 类型                                                     |
| --------- | -------------- | -------------------------------------------------------- |
| className | 组件根元素样式 | string                                                   |
| icon      | 图标元素配置   | [ClIconProps](/src/components/basic/icon.md#passthrough) |

## 示例

### 基础用法

```html
<cl-loading></cl-loading>
```
