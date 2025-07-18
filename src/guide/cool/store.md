# Store

Store 模块提供了统一的状态管理能力，主要包含用户数据管理和字典数据管理两个核心功能。通过 `useStore()` 可以轻松访问这些数据状态。

## user

用户数据状态管理，提供完整的用户认证和信息缓存功能。

### API

| 名称         | 参数                   | 返回值           | 说明                                       |
| ------------ | ---------------------- | ---------------- | ------------------------------------------ |
| token        | -                      | `string \| null` | 获取当前用户 token                         |
| setToken     | `data: Token`          | `void`           | 设置用户 token 并自动存储到本地缓存        |
| refreshToken | -                      | `void`           | 刷新用户 token                             |
| info         | -                      | `UserInfoEntity` | 获取当前用户信息                           |
| get          | -                      | `Promise<void>`  | 从服务器获取用户信息                       |
| set          | `data: UserInfoEntity` | `void`           | 设置用户信息并存储到本地缓存               |
| update       | `data: UserInfoEntity` | `Promise<void>`  | 更新用户信息（同时调用后端接口）           |
| clear        | -                      | `void`           | 清除本地所有用户信息和 token               |
| logout       | -                      | `void`           | 退出登录，清除所有数据并跳转到登录页       |
| isNull       | -                      | `boolean`        | 判断用户是否已登录（基于用户 ID 字段判断） |

### 类型定义

`UserInfoEntity` 类型会根据后端用户实体的类型自动生成：

```ts
interface UserInfoEntity {
  id?: number;
  unionid?: string;
  avatarUrl?: string;
  nickName?: string;
  phone?: string;
  gender?: number;
  status?: number;
  loginType?: number;
  password?: string;
  description?: string;
  birthday?: string;
  province?: string;
  city?: string;
  district?: string;
  createTime?: string;
  updateTime?: string;
}

interface Token {
  token: string; // 访问令牌
  expire: number; // token 过期时间戳
  refreshToken: string; // 刷新令牌
  refreshExpire: number; // 刷新令牌过期时间戳
}
```

### 使用示例

#### 显示用户信息

在模板中绑定用户数据：

```vue
<template>
  <cl-text>{{ user.info?.nickName ?? "未登录" }}</cl-text>
</template>

<script lang="ts" setup>
import { useStore } from "@/cool";

const { user } = useStore();
</script>
```

#### 登录状态检查

```ts
import { useStore } from "@/cool";

const { user } = useStore();

// 检查用户是否已登录
if (user.isNull()) {
  console.log("用户未登录，请先登录");
  // 跳转到登录页
  uni.navigateTo({ url: "/pages/user/login" });
} else {
  console.log("当前用户：", user.info?.nickName);
}
```

#### 更新用户信息

更新用户信息时会同步调用后端接口：

```ts
import { useStore } from "@/cool";

const { user } = useStore();

// 更新用户昵称
await user.update({
  nickName: "新昵称",
});

console.log("用户信息更新成功");
```

#### Token 管理

```ts
import { useStore } from "@/cool";

const { user } = useStore();

// 设置登录 token
user.setToken({
  token: "access_token_here",
  expire: Date.now() + 7200000, // 2小时后过期
  refreshToken: "refresh_token_here",
  refreshExpire: Date.now() + 2592000000, // 30天后过期
});

// 退出登录
user.logout();
```

## dict

字典数据状态管理，提供系统字典数据的缓存和访问功能。

### API

| 名称         | 参数                          | 返回值             | 说明                                       |
| ------------ | ----------------------------- | ------------------ | ------------------------------------------ |
| data         | -                             | `DictData[]`       | 获取所有字典数据                           |
| find         | `key: string`                 | `DictData`         | 根据 key 查找对应的字典数据                |
| get          | `key: DictKey`                | `DictItem[]`       | 获取指定类型的字典项列表                   |
| getItem      | `key: DictKey, value: any`    | `DictItem \| null` | 根据 key 和 value 获取对应的字典项         |
| getItems     | `key: DictKey, values: any[]` | `DictItem[]`       | 根据 key 和多个 value 批量获取字典项       |
| getItemLabel | `key: DictKey, value: any`    | `string`           | 根据 key 和 value 获取对应字典项的显示标签 |
| refresh      | `types?: DictKey[] \| null`   | `Promise<void>`    | 刷新字典数据（可指定特定类型）             |

### 类型定义

```ts
interface DictItem {
  id: number; // 字典项唯一标识
  typeId: number; // 所属字典类型 ID
  label: string; // 显示标签
  name: string; // 字典项名称
  value: any; // 字典项值
  orderNum: number; // 排序序号
  parentId?: number | null; // 父级 ID（用于树形结构）
}

interface DictData {
  key: string; // 字典类型 key
  list: DictItem[]; // 该类型下的字典项列表
}
```

`DictKey` 类型会根据后端配置的字典类型自动生成：

```ts
type DictKey =
  | "brand" // 品牌类型
  | "occupation" // 职业类型
  | "upgradeType" // 升级类型
  | "complainType" // 投诉类型
  | "feedbackType"; // 反馈类型
```

### 使用示例

#### 获取字典列表

```ts
import { useStore } from "@/cool";

const { dict } = useStore();

// 获取品牌字典列表
const brandList = dict.get("brand");
console.log(brandList);

/* 输出示例：
[
  {
    id: 1,
    label: "COOL",
    value: 1,
    orderNum: 1
  },
  {
    id: 2,
    label: "闪酷",
    value: 2,
    orderNum: 2
  }
]
*/
```

#### 获取字典项标签

```ts
import { useStore } from "@/cool";

const { dict } = useStore();

// 根据值获取对应的显示标签
const brandLabel = dict.getItemLabel("brand", 1);
console.log(brandLabel); // 输出: "COOL"
```

#### 刷新字典数据

```ts
import { onShow } from "@dcloudio/uni-app";
import { useStore } from "@/cool";

const { dict } = useStore();

// 页面显示时刷新特定字典
onShow(async () => {
  await dict.refresh(["userTag", "userStatus"]);
  console.log("字典数据已更新");
});

// 刷新所有字典数据
await dict.refresh();
```

### 注意事项

::: warning 字典数据同步

- 应用启动时会自动调用 `dict.refresh()` 获取所有字典数据
- 如果后台管理员修改了字典配置，建议在相关页面手动刷新对应的字典数据
- 字典数据会缓存在本地，避免频繁请求服务器
  :::

::: tip 性能优化建议

- 使用 `getItemLabel()` 获取单个标签时性能最佳
- 批量获取多个字典项时使用 `getItems()` 方法
- 合理使用 `refresh()` 方法，避免不必要的网络请求
  :::
