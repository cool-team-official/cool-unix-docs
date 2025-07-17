# Collapse 折叠面板

折叠面板组件用于展示和隐藏内容区域，支持平滑的展开收起动画效果，常用于 FAQ、详情展示等场景。

## 基础参数

| 参数       | 说明                             | 类型                        | 可选值 | 默认值 |
| ---------- | -------------------------------- | --------------------------- | ------ | ------ |
| pt         | 样式穿透配置，用于自定义组件样式 | [PassThrough](#passthrough) | -      | -      |
| modelValue | 控制折叠面板的展开/收起状态      | boolean                     | -      | false  |

## 方法

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| show   | 展开状态          | -    |
| hide   | 收起状态          | -    |
| toggle | 切换展开/收起状态 | -    |

### PassThrough

样式穿透配置允许您自定义组件内部各个元素的样式，实现更灵活的外观定制。

| 参数      | 说明               | 类型   |
| --------- | ------------------ | ------ |
| className | 折叠面板根容器样式 | string |

## 示例

### 基础用法

通过 `v-model` 绑定展开状态，实现双向数据绑定：

```html
<cl-button @click="toggle">{{ visible ? '收起' : '展开' }}</cl-button>

<cl-collapse v-model="visible">
  <cl-text>
    云想衣裳花想容，春风拂槛露华浓，若非群玉山头见，会向瑶台月下逢。
  </cl-text>
</cl-collapse>

<script lang="ts" setup>
  import { ref } from "vue";

  const visible = ref(false);

  function toggle() {
    visible.value = !visible.value;
  }
</script>
```

### ref 方式调用

通过组件引用直接调用方法控制展开状态：

```html
<cl-button @click="toggle">切换状态</cl-button>

<cl-collapse ref="collapseRef">
  <cl-text>
    云想衣裳花想容，春风拂槛露华浓，若非群玉山头见，会向瑶台月下逢。
  </cl-text>
</cl-collapse>

<script lang="ts" setup>
  import { ref } from "vue";

  // 注意：类型必须为 ClCollapseComponentPublicInstance | null，默认值不能省略
  const collapseRef = ref<ClCollapseComponentPublicInstance | null>(null);

  function toggle() {
    collapseRef.value?.toggle();
  }
</script>
```
