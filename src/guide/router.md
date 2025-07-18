# Router 路由导航

路由导航是应用程序中控制页面跳转和访问权限的重要机制。

## beforeEach 路由守卫

`beforeEach` 是一个全局前置守卫，可以在每次路由跳转之前执行自定义逻辑，常用于权限验证、登录状态检查等场景。

### 基础配置

```ts
import { router, useStore } from "@/cool";

// 定义无需token验证的页面路径
const ignoreToken = [
  "/pages/index/home", // 首页
  "/pages/index/my", // 个人中心
  "/pages/user/login", // 登录页
  "/pages/user/doc", // 文档页
];

// 配置路由守卫
router.beforeEach((to, next) => {
  const { user } = useStore();

  // 检查是否为无需验证的页面或演示页面
  if (ignoreToken.includes(to.path) || to.path.startsWith("/pages/demo")) {
    next(); // 直接通过
  } else {
    // 需要验证登录状态
    if (!user.isNull()) {
      next(); // 已登录，允许访问
    } else {
      router.login(); // 未登录，跳转到登录页
    }
  }
});
```

### 参数说明

- **to**: 即将要进入的目标路由对象
- **next**: 用于控制路由跳转的函数
  - `next()`: 进行管道中的下一个钩子
  - `next('/login')`: 跳转到指定路径

### 最佳实践

1. **白名单管理**: 将不需要登录验证的页面统一管理在 `ignoreToken` 数组中
2. **权限分层**: 可以根据用户角色设置不同的访问权限
3. **错误处理**: 为权限不足、页面不存在等情况提供友好的错误页面
4. **性能优化**: 避免在路由守卫中执行耗时操作

### 相关方法

- `router.to(path)`: 跳转到指定页面
- `router.login()`: 跳转到登录页
- `router.back()`: 返回上一页
- `user.isNull()`: 检查用户是否已登录
- `user.hasPermission(permission)`: 检查用户权限
