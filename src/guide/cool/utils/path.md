# Path

## filename

获取文件名

```ts
filename("a/b/c.txt"); // "c"
```

## basename

获取路径的最后一部分

```ts
basename("a/b/c.txt"); // "c.txt"
```

## extname

获取文件扩展名

```ts
extname("a/b/c.txt"); // "txt"
```

## firstUpperCase

首字母大写

```ts
firstUpperCase("useInfo"); // "UseInfo"
```

## getUrlParam

获取地址栏参数

```ts
getUrlParam("a"); // "1"
```

## pathJoin

连接路径

```ts
pathJoin("https://www.baidu.com/", "/a/b/c.txt"); // "https://www.baidu.com/a/b/c.txt"
```
