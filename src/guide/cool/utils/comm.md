# Comm 工具集

## isArray

检查值是否为数组

```ts
isArray([1, 2, 3]); // true
isArray("123"); // false
```

## isObject

检查值是否为对象

```ts
isObject({}); // true
isObject([]); // false
```

## isString

检查值是否为字符串

```ts
isString("abc"); // true
isString(123); // false
```

## isNumber

检查值是否为数字

```ts
isNumber(123); // true
isNumber("123"); // false
```

## isBoolean

检查值是否为布尔值

```ts
isBoolean(true); // true
isBoolean(1); // false
```

## isFunction

检查值是否为函数

```ts
isFunction(() => {}); // true
isFunction({}); // false
```

## isNull

检查值是否为 null

```ts
isNull(null); // true
isNull(undefined); // true
```

## isEmpty

检查值是否为空

```ts
isEmpty([]); // true
isEmpty(""); // true
isEmpty({}); // true
```

## keys

返回对象的所有键名

```ts
keys({ a: 1, b: 2 }); // ['a', 'b']
```

## first

返回对象的所有键名

```ts
first([1, 2, 3]); // 1
first([]); // null
```

## last

返回数组的最后一个元素

```ts
last([1, 2, 3]); // 3
last([]); // null
```

## slice

截取数组的一部分

```ts
slice([1, 2, 3], 1); // [2, 3]
slice([1, 2, 3], 1, 2); // [2]
```

## has

检查对象是否包含指定属性

```ts
has({ a: 1 }, "a"); // true
has({ a: 1 }, "b"); // false
```

## has

检查对象是否包含指定属性

```ts
has({ a: 1 }, "a"); // true
has({ a: 1 }, "b"); // false
```

## get

获取对象的属性值

```ts
get({ a: { b: 1 } }, "a.b"); // 1
get({ a: { b: 1 } }, "a.c", "default"); // 'default'
```

## set

设置对象的属性值

```ts
set({ a: 1 }, "b", 2); // {a: 1, b: 2}
```

## map

遍历数组并返回新数组

```ts
map([1, 2, 3], (x) => x * 2); // [2, 4, 6]
```

## reduce

将数组归约为单个值

```ts
reduce([1, 2, 3], (sum, n) => sum + n, 0); // 6
```

## every

检查数组中的所有元素是否都满足条件

```ts
every([2, 4, 6], (x) => x % 2 == 0); // true
```

## some

检查数组中是否有元素满足条件

```ts
some([1, 2, 3], (x) => x > 2); // true
```

## uniq

创建去重后的数组

```ts
uniq([1, 2, 2, 3]); // [1, 2, 3]
```

## flatten

将数组扁平化一层

```ts
flatten([1, [2, 3], 4]); // [1, 2, 3, 4]
```

## flattenDeep

将数组完全扁平化

```ts
flattenDeep([1, [2, [3, [4]]]]); // [1, 2, 3, 4]
```

## sort

对数组进行排序

```ts
sort([3, 1, 2]); // [1, 2, 3]
sort(["c", "a", "b"], "desc"); // ['c', 'b', 'a']
```

## orderBy

根据对象属性对数组进行排序

```ts
orderBy([{ age: 30 }, { age: 20 }], "age"); // [{age: 20}, {age: 30}]
```

## groupBy

根据对象属性对数组进行分组

```ts
groupBy([{ type: "a" }, { type: "b" }, { type: "a" }], "type"); // {a: [{type: 'a'}, {type: 'a'}], b: [{type: 'b'}]}
```

## assign

将多个对象的属性合并到一个对象中

```ts
assign({ a: 1 }, { b: 2 }); // {a: 1, b: 2}
```

## nth

获取数组中指定索引的元素

```ts
nth([1, 2, 3], 1); // 2
nth([1, 2, 3], -1); // 3
```

## pull

从数组中移除指定的值

```ts
pull([1, 2, 3, 1, 2, 3], 1, 2); // [3, 3]
```

## remove

从数组中移除满足条件的元素

```ts
remove([1, 2, 3, 4], (x) => x % 2 == 0); // [1, 3]
```

## forEach

遍历数组

```ts
forEach([1, 2, 3], (x) => console.log(x));
```

## find

查找数组中第一个满足条件的元素

```ts
find([1, 2, 3, 4], (x) => x > 2); // 3
```

## forInObject

遍历对象

```ts
forInObject({ a: 1, b: 2 }, (value, key) => console.log(key, value));
```

## toArray

对象转数组

```ts
toArray({ a: 1, b: 2 }, (value, key) => ({ key, value })); // [{key: 'a', value: 1}, {key: 'b', value: 2}]
```

## uuid

生成 UUID

```ts
uuid(); // "123e4567-e89b-12d3-a456-426614174000"
```

## debounce

创建一个防抖函数，在指定延迟后执行函数，如果在延迟期间再次调用则重新计时

```ts
debounce(() => console.log("执行"), 300);
```

## throttle

创建一个节流函数，在指定时间间隔内只会执行一次

```ts
throttled = throttle(() => console.log("执行"), 300);
```

## random

生成指定范围内的随机数

```ts
random(1, 10); // 随机生成1到10之间的整数
```

## isMp

检查是否为小程序环境

```ts
isMp();
```

## isApp

检查是否为 App 环境

```ts
isApp();
```

## isH5

检查是否为 H5 环境

```ts
isH5();
```

## isHarmony

检查是否为鸿蒙环境

```ts
isHarmony();
```
