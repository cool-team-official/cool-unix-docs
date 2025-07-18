# Service 请求服务

智能化的 API 服务管理，自动扫描服务端接口并生成可直接访问的对象。

:::warning
当接口服务发生变更时,需要重新编译 HBuilderX 以更新 service 的数据内容和接口描述信息。我们正在优化这一点,未来版本将支持实时自动更新。
:::

## 核心优势

- **零配置生成**：无需手动编写请求方法，自动生成 API 调用对象
- **智能提示**：提供完整的类型提示和代码补全
- **实时同步**：接口变更时能够及时发现，保持前后端一致性
- **类型安全**：强类型约束，减少运行时错误

<img src="/public/images/service.gif" />

## 类型定义

### 请求配置

```ts
type RequestOptions = {
  url: string; // 请求地址
  method?: RequestMethod; // 请求方法 (GET, POST, PUT, DELETE等)
  data?: any; // 请求体数据
  params?: any; // URL查询参数
  header?: any; // 自定义请求头
  timeout?: number; // 超时时间(毫秒)
  withCredentials?: boolean; // 是否携带凭证信息
  firstIpv4?: boolean; // 是否优先使用IPv4
  enableChunked?: boolean; // 是否启用分块传输编码
};
```

### 响应数据结构

```ts
type Response = {
  code?: number; // 响应状态码
  message?: string; // 响应消息
  data?: any; // 响应数据
};
```

## 使用指南

### 基本用法

通过自动生成的 service 对象调用 API 接口：

```ts
import { service, Response, type UserAddressEntity } from "@/cool";
import { useUi } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const ui = useUi();

const list = ref<UserAddressEntity[]>([]);
const list2 = ref<UserInfoEntity[]>([]);

// 调用用户地址分页接口
service.user.address
  .page({}) // 请求参数必须提供默认值 {}
  .then((res) => {
    // 直接赋值，类型自动推断
    list.value = res.list;

    // 数据转换示例
    list2.value = res.list.map((e) => {
      return {
        id: e.id,
        nickName: "xxx",
      } as UserInfoEntity;
    });
  })
  .catch((err) => {
    // 错误处理：必须使用 as Response 类型断言（APP端要求）
    ui.showToast({
      message: (err as Response).message!,
    });
  });
```

### 自定义请求

当需要更灵活的请求配置时，可以使用`request`方法：

```ts
import { request, Response, type UserAddressEntity } from "@/cool";
import { useUi } from "@/uni_modules/cool-ui";
import { ref } from "vue";

const ui = useUi();
const list = ref<UserAddressEntity[]>([]);

// 自定义请求配置
request<UTSJSONObject>({
  url: "/app/user/address/page", // URL会自动拼接config中的baseUrl
  method: "POST",
  data: {
    page: 1,
    size: 10,
  },
  header: {
    "Custom-Header": "value",
  },
})
  .then((res) => {
    // 需要手动进行类型转换
    list.value = res.list as UserAddressEntity[];
  })
  .catch((err) => {
    // 统一的错误处理
    ui.showToast({
      message: (err as Response).message!,
    });
  });
```

## 重要提示

### 类型安全

- **错误处理**：`catch`回调中的`err`参数必须使用`as Response`进行类型断言，否则在 APP 端会报错
- **类型一致性**：赋值变量的类型必须与返回数据类型一致，或通过适当的类型转换处理
- **泛型指定**：使用`request`方法时，需要明确指定返回数据类型，未知类型可使用`UTSJSONObject`

### 请求参数

- **默认值**：所有请求参数都必须提供默认值`{}`，这是由于 uni-app 框架限制
- **URL 处理**：请求 URL 会自动拼接配置文件中的`baseUrl`
- **第三方接口**：支持直接使用`http`或`https`开头的完整 URL 调用第三方服务
