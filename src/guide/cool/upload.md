# Upload 文件上传

提供便捷的文件上传功能，支持进度监听和任务控制。如需可视化上传组件，请使用 [cl-upload](/src/components/form/upload.md) 组件。

## API

| 名称   | 参数                                      | 返回值           | 说明                   |
| ------ | ----------------------------------------- | ---------------- | ---------------------- |
| upload | file: UploadFile, options?: UploadOptions | Promise\<string> | 上传文件并返回文件 URL |

## 类型定义

```ts
// 上传文件对象
type UploadFile = {
  path: string; // 文件本地路径
  name?: string | null; // 文件名称（可选）
};

// 上传进度信息
type OnProgressUpdateResult = {
  progress: number; // 上传进度百分比 (0-100)
  totalBytesSent: number; // 已发送字节数
  totalBytesExpectedToSend: number; // 总字节数
};

// 上传任务控制
type UploadTask = {
  abort(): void; // 中止上传任务
};

// 上传配置选项
type UploadOptions = {
  onProgressUpdate?: (result: OnProgressUpdateResult) => void; // 上传进度回调
  onTask?: (task: UploadTask) => void; // 获取上传任务实例
};
```

## 示例

### 多个文件上传

必须定义类型 `ChooseImageTempFile` 否则取不到 `path`

```ts
import { upload } from "@/cool";

function toUpload() {
  uni.chooseImage({
    success(res) {
      // 分别上传多个文件
      if (Array.isArray(res.tempFiles)) {
        (res.tempFiles as ChooseImageTempFile[]).forEach((file) => {
          // 开始上传文件
          upload(
            {
              path: file.path, // 文件路径
              name: file.name, // 文件名
            },
            {
              // 上传进度回调
              onProgressUpdate: ({ progress }) => {
                console.log(progress);
              },
            }
          )
            .then((url) => {
              // 上传后的地址
              console.log(url);
            })
            .catch((err) => {
              // 错误消息
              console.log(err as string);
            });
        });
      }
    },
  });
}
```
