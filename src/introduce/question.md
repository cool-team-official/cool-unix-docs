# 常见问题

### 为何使用 .ts 后缀而不是 .uts

我们选择使用 `.ts` 文件扩展名而不是 `.uts` 的原因是:

1. `HBuilderX` 会自动将 `.ts` 文件转换为 `.uts` 文件
2. TypeScript 提供了更完善的类型提示和智能补全功能
3. 我们在项目中内置了专门用于 VSCode 的类型定义文件，可以获得更好的开发体验

### 暂时不推荐使用官方的 vscode 插件

使用官方插件会导致丢失许多重要功能特性，比如 `tailwindcss` 的智能类型提示，同时可能会出现一些未知的语法错误提示。我们也不建议将 `.uvue` 文件的语言模式设置为 `UVUE`。不过,如果您正在开发 `uts` 插件，那么使用官方提供的 [`语言插件`](https://doc.dcloud.net.cn/uni-app-x/tutorial/ls-plugin.html) 是可以的。

### API service is not running

出现 [cool-eps] API service is not running → http://127.0.0.1:8001/app/base/comm/eps 类似的情况，则 `服务端未开启` 或者 [`proxy`](/src/guide/config.md) 配置的地址不对

### ‌Cannot find a parameter with this name: base‌

编译时出现 ‌⁠error: Cannot find a parameter with this name: base‌，则 `服务端未开启` 或者 [`proxy`](/src/guide/config.md) 配置的地址不对

### Please specify it explicitly

这种错误通常表示在组件或标签上使用的变量缺少明确的类型定义。无法自动推断出变量的具体类型，需要通过显式类型声明来解决

### 鸿蒙平台空白或者点击闪退

一般这种情况都是代码有问题，而且看不到错误提示，需要手动排查
