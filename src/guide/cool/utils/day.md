# Day

轻量级日期工具类，参考 dayjs 设计理念

## format

格式化日期

```ts
dayUts().format("YYYY-MM-DD");
```

## startOf

获取某个单位的开始时间

```ts
dayUts().startOf("month");
```

## endOf

获取某个单位的结束时间

```ts
dayUts().endOf("month");
```

## isBefore

判断是否早于另一个日期

```ts
dayUts().isBefore(new Date());
```

## isAfter

判断是否晚于另一个日期

```ts
dayUts().isAfter(new Date());
```

## isSame

判断是否与另一个日期相同

```ts
dayUts().isSame(new Date());
```

## diff

计算与另一个日期的差值（毫秒）

```ts
dayUts().diff(new Date());
```

## diffUnit

计算与另一个日期的差值（指定单位）

```ts
dayUts().diffUnit(new Date());
dayUts().diffUnit(dayUts());
```

## add

添加时间

```ts
dayUts().add(1, "day");
```

## subtract

减少时间

```ts
dayUts().subtract(1, "day");
```

## valueOf

获取时间戳

```ts
dayUts().valueOf();
```

## toDate

获取原生 Date 对象

```ts
dayUts().toDate();
```

## toArray

获取日期数组

```ts
dayUts().toArray();
```
