# Storage

存储管理类，封装了 uni-app 的存储 API，提供更便捷的存储操作。支持数据过期时间管理，自动处理过期数据

## get

获取存储数据

```ts
const userData = storage.get("user");
if (userData != null) {
  console.log(userData);
}
```

## info

获取所有存储数据的信息

```ts
const allData = storage.info();
console.log("所有存储数据：", allData);
```

## set

设置存储数据

```ts
// 存储永久数据
storage.set("user", { name: "张三", age: 25 }, 0);

// 存储5分钟后过期的数据
storage.set("token", "abc123", 300);
```

## isExpired

检查数据是否已过期

```ts
if (storage.isExpired("token")) {
  console.log("token已过期");
}
```

## remove

```ts
storage.remove("user");
storage.remove("token");
```

删除存储数据

## clear

清空所有存储数据

```ts
storage.clear(); // 清空所有数据
```

## once

获取数据后立即删除（一次性读取）

```ts
const tempToken = storage.once("temp_token");
// tempToken 使用后，存储中的 temp_token 已被删除
```
