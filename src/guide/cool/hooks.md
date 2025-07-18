# Hooks

一组实用的工具函数集合，用于简化开发流程、提升开发效率。它们提供了组件引用管理、缓存控制等常用功能的封装，让开发者能够以更简洁的方式实现复杂的功能需求。

## useRefs

便捷的组件实例管理工具，用于快速获取和操作组件引用。

### API

| 方法名          | 参数                         | 返回值                          | 说明                                        |
| --------------- | ---------------------------- | ------------------------------- | ------------------------------------------- |
| data            | -                            | object                          | 存储所有 ref 的响应式对象                   |
| set             | name: string                 | function                        | 生成 ref 绑定函数，用于在模板中设置组件引用 |
| get             | name: string                 | ComponentPublicInstance \| null | 获取指定名称的组件实例                      |
| getExposed\<T\> | name: string, key: string    | T \| null                       | 获取组件实例通过 defineExpose 暴露的属性    |
| call\<T\>       | name: string, method: string | T                               | 调用组件实例暴露的方法并返回结果            |
| callMethod      | name: string, method: string | void                            | 调用组件实例暴露的方法，无返回值            |
| open            | name: string                 | void                            | 调用组件的 open 方法                        |
| close           | name: string                 | void                            | 调用组件的 close 方法                       |

### 使用示例

```html
<template>
  <test-component :ref="refs.set('test')"></test-component>

  <button @click="get">获取数据</button>
</template>

<script lang="ts" setup>
  import { useRefs } from "@/cool";

  const refs = useRefs();

  // 获取组件数据
  function get() {
    // 获取组件实例
    const testInstance = refs.get("test");

    // 获取组件暴露的属性
    const num = refs.getExposed("test", "num");

    // 调用组件方法并获取返回值
    const result = refs.call("test", "getData");

    // 调用组件方法，无返回值
    refs.callMethod("test", "updateStatus");
  }
</script>
```

## useCache

智能组件重新渲染工具，通过监听依赖变化自动更新组件的 key 值。

### 使用场景

- 当组件需要根据特定状态完全重新渲染时
- 重置组件内部状态到初始值
- 强制刷新复杂的子组件

### 使用示例

```html
<template>
  <complex-component :key="cache.key" :data="formData"></complex-component>

  <button @click="toggleStatus">切换状态</button>
  <button @click="incrementNum">增加数字</button>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { useCache } from "@/cool";

  const status = ref(false);
  const num = ref(0);
  const formData = ref({});

  // 监听 status 和 num 的变化，自动生成新的 key
  const { cache } = useCache(() => [status.value, num.value]);

  function toggleStatus() {
    status.value = !status.value;
    // 组件会自动重新渲染
  }

  function incrementNum() {
    num.value++;
    // 组件会自动重新渲染
  }
</script>
```

## useLongPress

长按手势处理工具，支持自定义触发间隔和回调函数。

### 特性

- 支持自定义长按触发间隔
- 自动处理触摸事件的开始和结束
- 支持连续触发回调

### 使用示例

```html
<template>
  <view
    @touchstart="handleTouchStart"
    @touchend="longPress.stop"
    @touchcancel="longPress.stop"
  >
    长按我试试
  </view>

  <view>计数: {{ count }}</view>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { useLongPress } from "@/cool";

  const longPress = useLongPress();
  const count = ref(0);

  function handleTouchStart() {
    longPress.start(() => {
      // 每100ms执行一次，实现连续递增效果
      count.value++;
      console.log("长按触发", count.value);
    }, 100); // 可选：自定义触发间隔，默认100ms
  }
</script>
```
