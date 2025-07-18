# router

路由管理器提供了完整的页面跳转和导航功能，支持多种跳转模式、参数传递、页面状态检查等功能。

## API 参考

| 方法名             | 参数                                  | 返回值         | 说明                                     |
| ------------------ | ------------------------------------- | -------------- | ---------------------------------------- |
| params             |                                       | UTSJSONObject  | 获取上个页面传递的路由参数               |
| defaultPath        | name: string                          | string         | 根据页面名称获取默认路径                 |
| getPages           |                                       | PageInstance[] | 获取当前页面栈中的所有页面实例           |
| getPage            | path: string                          | PageInstance   | 根据路径获取指定的页面实例               |
| route              |                                       | PageInstance   | 获取当前活跃的路由页面实例               |
| path               |                                       | string         | 获取当前页面的完整路径                   |
| to                 | path: string                          |                | 快速页面跳转（默认使用 navigateTo 模式） |
| push               | options: [PushOptions](#类型)         |                | 功能完整的路由跳转，支持多种模式和参数   |
| home               |                                       |                | 跳转回应用首页                           |
| back               | options: [BackOptions](#类型) \| null |                | 返回上一页，若已在首页则跳转到首页       |
| callMethod         | name: string, data?: any              | any \| null    | 调用当前页面组件暴露的方法               |
| isFirstPage        |                                       | boolean        | 检查当前页面栈是否只有一个页面           |
| isHomePage         |                                       | boolean        | 检查当前页面是否为应用首页               |
| isCustomNavbarPage |                                       | boolean        | 检查当前页面是否使用了自定义导航栏       |
| isCurrentPage      |                                       | boolean        | 检查指定路径是否为当前页面               |
| isTabPage          |                                       | boolean        | 检查当前页面是否为底部标签页             |
| isLoginPage        |                                       | boolean        | 检查当前页面是否为登录页面               |
| login              |                                       |                | 跳转到登录页面                           |
| nextLogin          |                                       |                | 处理登录成功后的页面跳转逻辑             |
| beforeEach         | callback                              |                | 注册页面跳转前的全局守卫钩子             |
| afterLogin         | callback                              |                | 注册用户登录成功后的回调处理             |

## 类型定义

```ts
type BackOptions = {
  delta?: number;
  animationType?: BackAnimationType;
  animationDuration?: number;
  success?: (result: any) => void;
  fail?: (result: any) => void;
  complete?: (result: any) => void;
};

type PushMode = "navigateTo" | "redirectTo" | "reLaunch" | "switchTab";

type PushOptions = {
  path: string;
  mode?: PushMode;
  events?: any;
  query?: any;
  params?: any;
  animationType?: PushAnimationType;
  animationDuration?: number;
  success?: (result: any) => void;
  fail?: (result: any) => void;
  complete?: (result: any) => void;
};
```

## 基础用法

### 简单页面跳转

```typescript
import { router } from "@/cool";

// 最简单的页面跳转
router.to("/pages/user/profile");

// 等同于 uni.navigateTo
router.push({
  url: "/pages/user/profile",
});
```

### 传递参数

```typescript
router.push({
  url: "/pages/user/profile",
  query: {
    id: 123,
    name: "张三",
  },
});

// 在目标页面接收参数
const params = router.params;
console.log(params.id); // 123
console.log(params.name); // '张三'
```

### 不同跳转模式

```typescript
// 保留当前页面，跳转到新页面（默认）
router.push({
  url: "/pages/detail",
  type: "navigateTo",
});

// 关闭当前页面，跳转到新页面
router.push({
  url: "/pages/detail",
  type: "redirectTo",
});

// 关闭所有页面，跳转到新页面
router.push({
  url: "/pages/home",
  type: "reLaunch",
});

// 跳转到 tab 页面
router.push({
  url: "/pages/tabbar/home",
  type: "switchTab",
});
```

## 页面状态检查

```typescript
// 检查当前页面状态
if (router.isFirstPage()) {
  console.log("这是页面栈中的第一个页面");
}

if (router.isHomePage()) {
  console.log("当前在首页");
}

if (router.isTabPage()) {
  console.log("当前在标签页");
}

if (router.isLoginPage()) {
  console.log("当前在登录页");
}
```

## 页面栈操作

```typescript
// 获取当前页面信息
const current = router.route();
console.log("当前页面信息：", current);

// 获取所有页面实例
const pages = router.getPages();
console.log("页面栈深度：", pages.length);
```

## 页面返回

```typescript
// 简单返回上一页
router.back();

// 返回多个页面
router.back({
  delta: 2, // 返回上2个页面
});

// 如果是首页，返回时会跳转到首页
// 如果不是首页，正常返回上一页
```

## 路由守卫

```typescript
// 注册全局路由守卫
router.beforeEach((to, next) => {
  console.log("准备跳转到：", to.url);

  // 检查登录状态
  if (user.isNull()) {
    // 跳转到登录页
    router.login();
    return;
  }

  // 继续跳转
  next();
});

// 注册登录后回调
router.afterLogin(() => {
  console.log("用户登录成功");
});
```
