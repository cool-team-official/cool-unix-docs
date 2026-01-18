# parse 解析工具

Cool-Uni 提供的解析工具函数集合，用于处理各种数据解析和转换操作。

## parse

解析数据，支持 Android 平台的 UTSJSONObject 解析。

### 语法

```typescript
parse<T>(data: any): T | null
```

### 参数

| 参数 | 类型 | 说明         |
| ---- | ---- | ------------ |
| data | any  | 要解析的数据 |

### 返回值

| 类型      | 说明                          |
| --------- | ----------------------------- |
| T \| null | 解析后的数据，失败时返回 null |

### 示例

```typescript
import { parse } from "@/cool/utils/parse";

// 解析响应数据
interface Response {
  code: number;
  data: any;
  message: string;
}

const res = await request("/api/user");
const result = parse<Response>(res.data);
console.log(result); // Response | null
```

## parseObject

解析 JSON 字符串为对象。

### 语法

```typescript
parseObject<T>(data: string): T | null
```

### 参数

| 参数 | 类型   | 说明                 |
| ---- | ------ | -------------------- |
| data | string | 要解析的 JSON 字符串 |

### 返回值

| 类型      | 说明                          |
| --------- | ----------------------------- |
| T \| null | 解析后的对象，失败时返回 null |

### 示例

```typescript
import { parseObject } from "@/cool/utils/parse";

// 解析 JSON 字符串
const jsonStr = '{"name": "张三", "age": 25}';
const user = parseObject<{ name: string; age: number }>(jsonStr);
console.log(user); // {name: "张三", age: 25} | null
```

## parseClass

解析对象为类名字符串，支持多种格式的类名配置。

### 语法

```typescript
parseClass(data: any): string
```

### 参数

| 参数 | 类型 | 说明                           |
| ---- | ---- | ------------------------------ |
| data | any  | 要解析的类名数据，支持多种格式 |

### 返回值

| 类型   | 说明                                   |
| ------ | -------------------------------------- |
| string | 解析后的类名字符串，多个类名以空格分隔 |

### 支持的格式

#### 1. 对象格式

```typescript
parseClass({ active: true, disabled: false }); // 返回 'active'
```

#### 2. 字符串数组格式

```typescript
parseClass(["ml-2", "mr-2"]); // 返回 'ml-2 mr-2'
```

#### 3. 对象数组格式

```typescript
parseClass([{ "mr-2": true, "mt-2": false }]); // 返回 'mr-2'
```

#### 4. 条件数组格式

```typescript
parseClass([[true, "mr-2 pt-2", "mb-2"]]); // 返回 'mr-2 pt-2'
```

### 示例

```typescript
import { parseClass } from "@/cool/utils/parse";

// 基础用法
const class1 = parseClass({ active: true, disabled: false });
console.log(class1); // 'active'

// 数组用法
const class2 = parseClass(["ml-2", "mr-2", "pt-4"]);
console.log(class2); // 'ml-2 mr-2 pt-4'

// 混合用法
const class3 = parseClass([
  { active: true, inactive: false },
  "text-center",
  [true, "bg-blue-500", "bg-gray-500"],
]);
console.log(class3); // 'active text-center bg-blue-500'
```

## parseToObject

将自定义类型数据转换为 UTSJSONObject 对象。

### 语法

```typescript
parseToObject<T>(data: T): UTSJSONObject
```

### 参数

| 参数 | 类型 | 说明         |
| ---- | ---- | ------------ |
| data | T    | 要转换的数据 |

### 返回值

| 类型          | 说明                        |
| ------------- | --------------------------- |
| UTSJSONObject | 转换后的 UTSJSONObject 对象 |

### 示例

```typescript
import { parseToObject } from "@/cool/utils/parse";

interface User {
  name: string;
  age: number;
}

const user: User = { name: "张三", age: 25 };
const obj = parseToObject(user);
console.log(obj); // UTSJSONObject
```

## rpx2px

将 rpx 单位转换为 px 单位。

### 语法

```typescript
rpx2px(rpx: number): number
```

### 参数

| 参数 | 类型   | 说明            |
| ---- | ------ | --------------- |
| rpx  | number | 要转换的 rpx 值 |

### 返回值

| 类型   | 说明           |
| ------ | -------------- |
| number | 转换后的 px 值 |

### 示例

```typescript
import { rpx2px } from "@/cool/utils/parse";

const px = rpx2px(100);
console.log(px); // 根据屏幕宽度计算的 px 值
```

## px2rpx

将 px 单位转换为 rpx 单位。

### 语法

```typescript
px2rpx(px: number): number
```

### 参数

| 参数 | 类型   | 说明           |
| ---- | ------ | -------------- |
| px   | number | 要转换的 px 值 |

### 返回值

| 类型   | 说明            |
| ------ | --------------- |
| number | 转换后的 rpx 值 |

### 示例

```typescript
import { px2rpx } from "@/cool/utils/parse";

const rpx = px2rpx(50);
console.log(rpx); // 根据屏幕宽度计算的 rpx 值
```

## parseRpx

将数值或字符串转换为 rpx 单位的字符串。

### 语法

```typescript
parseRpx(val: number | string): string
```

### 参数

| 参数 | 类型             | 说明                           |
| ---- | ---------------- | ------------------------------ |
| val  | number \| string | 要转换的值，可以是数字或字符串 |

### 返回值

| 类型   | 说明                    |
| ------ | ----------------------- |
| string | 转换后的 rpx 单位字符串 |

### 示例

```typescript
import { parseRpx } from "@/cool/utils/parse";

parseRpx(10); // 返回 '10rpx'
parseRpx("10rpx"); // 返回 '10rpx'
parseRpx("10px"); // 返回 '10px'
```

## getNum

从字符串中提取数值部分。

### 语法

```typescript
getNum(val: string): number
```

### 参数

| 参数 | 类型   | 说明                               |
| ---- | ------ | ---------------------------------- |
| val  | string | 输入值，例如 "10rpx"、"10px"、"10" |

### 返回值

| 类型   | 说明           |
| ------ | -------------- |
| number | 返回提取的数值 |

### 示例

```typescript
import { getNum } from "@/cool/utils/parse";

getNum("10rpx"); // 返回 10
getNum("10px"); // 返回 10
getNum("10"); // 返回 10
getNum("-5.5px"); // 返回 -5.5
```

## getUnit

从字符串中提取单位部分。

### 语法

```typescript
getUnit(val: string): string
```

### 参数

| 参数 | 类型   | 说明                         |
| ---- | ------ | ---------------------------- |
| val  | string | 输入值，例如 "10rpx"、"10px" |

### 返回值

| 类型   | 说明                             |
| ------ | -------------------------------- |
| string | 返回单位字符串，如 "rpx" 或 "px" |

### 示例

```typescript
import { getUnit } from "@/cool/utils/parse";

getUnit("10rpx"); // 返回 "rpx"
getUnit("10px"); // 返回 "px"
```

## getRpx

将各种格式的值转换为 rpx 数值。

### 语法

```typescript
getRpx(val: number | string): number
```

### 参数

| 参数 | 类型             | 说明                                     |
| ---- | ---------------- | ---------------------------------------- |
| val  | number \| string | 输入值，可以是 "10rpx"、"10px" 或数字 10 |

### 返回值

| 类型   | 说明                |
| ------ | ------------------- |
| number | 返回对应的 rpx 数值 |

### 示例

```typescript
import { getRpx } from "@/cool/utils/parse";

getRpx("10rpx"); // 返回 10
getRpx("10px"); // 返回 px2rpx(10)
getRpx(10); // 返回 10
```

## getPx

将各种格式的值转换为 px 数值。

### 语法

```typescript
getPx(val: string | number): number
```

### 参数

| 参数 | 类型             | 说明                                     |
| ---- | ---------------- | ---------------------------------------- |
| val  | string \| number | 输入值，可以是 "10rpx"、"10px" 或数字 10 |

### 返回值

| 类型   | 说明               |
| ------ | ------------------ |
| number | 返回对应的 px 数值 |

### 示例

```typescript
import { getPx } from "@/cool/utils/parse";

getPx("10rpx"); // 返回 rpx2px(10)
getPx("10px"); // 返回 10
getPx(10); // 返回 rpx2px(10)
```
