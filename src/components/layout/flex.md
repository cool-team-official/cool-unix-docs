# Flex 弹性布局

## cl-row

### 基础参数

| 参数   | 说明               | 类型                        | 可选值 | 默认值 |
| ------ | ------------------ | --------------------------- | ------ | ------ |
| pt     | 样式穿透配置       | [PassThrough](#passthrough) | -      | -      |
| gutter | 栅格间隔，单位 rpx | number                      |        | 0      |

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明           | 类型   |
| --------- | -------------- | ------ |
| className | 组件根容器样式 | string |

## cl-col

### 基础参数

| 参数   | 说明               | 类型                        | 可选值 | 默认值 |
| ------ | ------------------ | --------------------------- | ------ | ------ |
| pt     | 样式穿透配置       | [PassThrough](#passthrough) | -      | -      |
| span   | 栅格占据的列数     | number                      |        | 24     |
| offset | 栅格左侧的间隔格数 | number                      |        | 0      |
| push   | 栅格向右移动格数   | number                      |        | 0      |
| pull   | 栅格向左移动格数   | number                      |        | 0      |

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明           | 类型   |
| --------- | -------------- | ------ |
| className | 组件根容器样式 | string |

## 使用示例

### 基础用法

```html
<cl-row :gutter="12">
  <cl-col :span="8"> 1 </cl-col>
  <cl-col :span="8"> 2 </cl-col>
  <cl-col :span="8"> 3 </cl-col>
</cl-row>
```

```html
<cl-row :gutter="12">
  <cl-col :span="12"> 1 </cl-col>
  <cl-col :span="12"> 2 </cl-col>
</cl-row>
```

### 左间隔

```html
<cl-row :gutter="12">
  <cl-col :span="6"> 1 </cl-col>
  <cl-col :span="6" :offset="6"> 2 </cl-col>
  <cl-col :span="6"> 3 </cl-col>
</cl-row>
```

### 右移动

```html
<cl-row :gutter="12">
  <cl-col :span="6"> 1 </cl-col>
  <cl-col :span="6"> 2 </cl-col>
  <cl-col :span="6" :push="6"> 3 </cl-col>
</cl-row>
```

### 左移动

```html
<cl-row :gutter="12">
  <cl-col :span="6"> 1 </cl-col>
  <cl-col :span="6"> 2 </cl-col>
  <cl-col :span="6"> 3 </cl-col>
  <cl-col :span="6" :pull="6"> 4 </cl-col>
</cl-row>
```

### 自定义 pt

```vue
<cl-row
  :gutter="12"
  :pt="{
    className: 'mt-5 border border-solid border-surface-100 p-3',
  }"
>
  <cl-col :span="8"> 1 </cl-col>
  <cl-col :span="8"> 2 </cl-col>
  <cl-col :span="8"> 3 </cl-col>
</cl-row>
```
