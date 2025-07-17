# Badge 角标

## 基础参数

| 参数     | 说明         | 类型                                                  | 可选值 | 默认值  |
| -------- | ------------ | ----------------------------------------------------- | ------ | ------- |
| pt       | 样式穿透配置 | [PassThrough](#passthrough)                           | -      | -       |
| type     | 类型         | "primary" \| "success" \| "warn" \| "error" \| "info" | -      | 'error' |
| dot      | 是否点样式   | boolean                                               | -      | false   |
| value    | 显示值       | string \| number                                      | -      | 0       |
| position | 是否定位     | boolean                                               | -      | false   |

## PassThrough

样式穿透配置，用于自定义组件内部元素的样式。

| 参数      | 说明           | 类型   |
| --------- | -------------- | ------ |
| className | 组件根元素样式 | string |

## 示例

### 基础用法

```html
<cl-badge type="primary" value="1" class="mr-2"></cl-badge>
<cl-badge type="success" value="12" class="mr-2"></cl-badge>
<cl-badge type="warn" value="31" class="mr-2"></cl-badge>
<cl-badge type="error" value="24" class="mr-2"></cl-badge>
<cl-badge type="info" value="17" class="mr-2"></cl-badge>
<cl-badge type="primary" value="41" class="mr-2"></cl-badge>
<cl-badge type="success" value="56" class="mr-2"></cl-badge>
```

### 结合按钮

默认内容插槽是在 `text` 标签内（无法渲染 `view` 标签），所以只能用 `content` 插槽来补充

```html
<cl-button>
  购买
  <template #content>
    <cl-badge type="error" value="1" position> </cl-badge>
  </template>
</cl-button>

<cl-button>
  消息
  <template #content>
    <cl-badge type="error" dot position> </cl-badge>
  </template>
</cl-button>
```
