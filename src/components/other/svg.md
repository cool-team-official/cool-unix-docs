# Svg 图标

适用于图标、装饰性元素等多种场景，推荐结合 Tailwind CSS 的 `w-`、`h-` 类控制尺寸。

- **base64**：直接传入 base64 编码的 svg 字符串，适合动态生成或远程获取的图标。
- **本地文件**：传入本地 `.svg` 文件路径（如 `/static/xxx.svg`），适合项目内静态资源管理。
- **svg 标签**：直接传入 svg 标签字符串，支持自定义样式和颜色，灵活性更高。

:::tip 兼容提示
`IOS` 和 `鸿蒙` 暂时只能配置本地文件
:::

:::warning 重要提示
运行时控制台提示 `uni_modules[cool-svg] 存在第三方依赖或资源引用`，请按 [Android UTS 扩展开发](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html) 文档的方式配置。

- 配置完成后请重新编译项目，若仍然出现相关报错，可尝试在云端打基座后再次编译。
- 若无需该插件，可直接删除 `uni_modules/cool-svg` 文件夹，即可避免相关报错。

  :::

## 基础参数

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| src   | 数据源   | string | -      | ""     |
| color | 图标颜色 | string | -      | ""     |

## 示例

### 加载本地文件

建议将 `.svg` 文件统一存放于 `/static` 目录下，便于项目管理和引用。

```html
<cl-svg src="/static/demo/svg/category.svg" class="h-6 w-6"></cl-svg>
<cl-svg src="/static/demo/svg/shopping-cart.svg" class="h-6 w-6 ml-3"></cl-svg>
<cl-svg src="/static/demo/svg/points.svg" class="h-6 w-6 ml-3"></cl-svg>
```

### 不同大小

可通过 `class` 灵活设置图标的高度和宽度

```html
<cl-svg src="/static/demo/svg/points.svg" class="h-10 w-10"></cl-svg>
<cl-svg src="/static/demo/svg/points.svg" class="h-8 w-8 ml-3"></cl-svg>
<cl-svg src="/static/demo/svg/points.svg" class="h-6 w-6 ml-3"></cl-svg>
```

### 使用 svg 标签

直接传入 svg 标签字符串，支持自定义颜色和样式。

```html
<cl-svg :src="svg" class="h-6 w-6"></cl-svg>

<script lang="ts" setup>
  const svg = ref(
    `<svg t="1756119341770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7779" width="64" height="64"><path d="M783.1 899.3H242.9c-97.7 0-177.3-79.5-177.3-177.3V302.6c0-97.7 79.5-177.3 177.3-177.3H783c97.7 0 177.3 79.5 177.3 177.3V722c0.1 97.7-79.5 177.3-177.2 177.3zM242.9 214.8c-48.4 0-87.8 39.4-87.8 87.8V722c0 48.4 39.4 87.8 87.8 87.8H783c48.4 0 87.8-39.4 87.8-87.8V302.6c0-48.4-39.4-87.8-87.8-87.8H242.9z" fill="#333333" p-id="7780"></path><path d="M513 600.5c-24.9 0-49.9-7.3-71.6-21.8l-2.9-2.1-214.9-170.1c-19.4-15.3-22.7-43.5-7.3-62.8 15.3-19.4 43.5-22.6 62.8-7.3l213.2 168.8c12.7 7.8 28.7 7.8 41.5 0L747 336.4c19.3-15.3 47.5-12.1 62.8 7.3 15.3 19.4 12.1 47.5-7.3 62.8L584.6 578.7c-21.7 14.5-46.7 21.8-71.6 21.8z" fill="#333333" p-id="7781"></path></svg>`
  );
</script>
```

### 不同颜色

可通过 `color` 属性灵活设置图标颜色。

- 目前在小程序端，仅当数据源为 `svg标签` 字符串时才支持动态设置颜色。若为本地文件或 base64 数据源，建议在 `.svg` 文件中手动添加 `fill` 属性来指定颜色。

```html
<cl-svg
  src="/static/demo/svg/category.svg"
  color="primary"
  class="h-6 w-6"
></cl-svg>
<cl-svg
  src="/static/demo/svg/shopping-cart.svg"
  color="#eab308"
  class="h-6 w-6 ml-3"
></cl-svg>
<cl-svg
  src="/static/demo/svg/points.svg"
  color="#a855f7"
  class="h-6 w-6 ml-3"
></cl-svg>
```

### 使用 base64

```html
<cl-svg :src="base64" class="h-6 w-6"></cl-svg>

<script lang="ts" setup>
  const base64 = ref(
    `data:image/svg+xml;base64,PHN2ZyB0PSIxNzU2MTE2OTQxMjk0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc2MTYiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTU0MS44IDkyOC41aC02MS4xYy01MC42IDAtOTEuOC00MS4yLTkxLjgtOTEuOFY2MTMuNmMwLTUwLjYgNDEuMi05MS44IDkxLjgtOTEuOGg2MS4xYzUwLjYgMCA5MS44IDQxLjIgOTEuOCA5MS44djIyMy4xYzAgNTAuNy00MS4xIDkxLjgtOTEuOCA5MS44eiBtLTYxLjEtMzE2LjJsLTEuMyAyMjQuNCA2Mi41IDEuM2MwLjcgMCAxLjMtMC42IDEuMy0xLjNWNjEzLjZsLTYyLjUtMS4zek04MzQuOSA5MjguNWgtNjEuMWMtNTAuNiAwLTkxLjgtNDEuMi05MS44LTkxLjhWNDA5LjVjMC01MC42IDQxLjItOTEuOCA5MS44LTkxLjhoNjEuMWM1MC42IDAgOTEuOCA0MS4yIDkxLjggOTEuOHY0MjcuM2MwIDUwLjYtNDEuMiA5MS43LTkxLjggOTEuN3ogbS02MS4yLTUyMC40bC0xLjMgNDI4LjYgNjIuNSAxLjNjMC43IDAgMS4zLTAuNiAxLjMtMS4zVjQwOS41bC02Mi41LTEuNHpNMjUyLjQgOTI4LjVoLTYxLjFjLTUwLjYgMC05MS44LTQxLjItOTEuOC05MS44di04MC4yYzAtNTAuNiA0MS4yLTkxLjggOTEuOC05MS44aDYxLjFjNTAuNiAwIDkxLjggNDEuMiA5MS44IDkxLjh2ODAuMmMwIDUwLjctNDEuMiA5MS44LTkxLjggOTEuOHogbS02MS4xLTE3My4zbC0xLjMgODEuNSA2Mi41IDEuM2MwLjcgMCAxLjMtMC42IDEuMy0xLjN2LTgwLjJsLTYyLjUtMS4zek0xNDQuNiA2MjUuNWMtMTEuNiAwLTIzLjItNC40LTMyLTEzLjMtMTcuNy0xNy43LTE3LjYtNDYuMyAwLTY0TDUyNiAxMzUuM2MxNy43LTE3LjYgNDYuMy0xNy42IDY0IDAgMTcuNyAxNy43IDE3LjYgNDYuMyAwIDY0TDE3Ni42IDYxMi4yYy04LjkgOC44LTIwLjUgMTMuMy0zMiAxMy4zeiIgZmlsbD0iIzMzMzMzMyIgcC1pZD0iNzYxNyI+PC9wYXRoPjxwYXRoIGQ9Ik01ODguNCAzNjQuN2MtMjUgMC00NS4yLTIwLjMtNDUuMi00NS4yVjIxOC45YzAtMjAuMy0xNi41LTM2LjgtMzYuOC0zNi44SDQwNS44Yy0yNSAwLTQ1LjItMjAuMy00NS4yLTQ1LjJzMjAuMy00NS4yIDQ1LjItNDUuMmgxMDAuNmM3MC4yIDAgMTI3LjIgNTcuMSAxMjcuMiAxMjcuMnYxMDAuNmMwIDI1LTIwLjIgNDUuMi00NS4yIDQ1LjJ6IiBmaWxsPSIjMzMzMzMzIiBwLWlkPSI3NjE4Ij48L3BhdGg+PC9zdmc+`
  );
</script>
```
