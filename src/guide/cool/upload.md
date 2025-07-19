# Upload 文件上传

提供便捷的文件上传功能，支持上传进度监听和任务控制管理。该模块封装了 uni-appx 的文件上传能力，提供更简洁的 API 接口。如需可视化上传组件，请使用 [cl-upload](/src/components/form/upload.md) 组件。

## API 方法

| 方法名     | 参数                                               | 返回值           | 说明                           |
| ---------- | -------------------------------------------------- | ---------------- | ------------------------------ |
| upload     | path: string                                       | Promise\<string> | 通过文件路径上传，返回文件 URL |
| uploadFile | file: ChooseImageTempFile, options?: UploadOptions | Promise\<string> | 通过文件对象上传，返回文件 URL |

## 类型定义

```ts
// 上传文件对象（uni-appx 选择文件返回的格式）
interface ChooseImageTempFile {
  path: string; // 文件本地临时路径
  size: number; // 文件大小（字节）
  name: string; // 文件名称
  type: string; // 文件类型（MIME 类型）
}

// 上传进度信息
interface OnProgressUpdateResult {
  progress: number; // 上传进度百分比 (0-100)
  totalBytesSent: number; // 已发送字节数
  totalBytesExpectedToSend: number; // 预期发送总字节数
}

// 上传任务控制器
interface UploadTask {
  abort(): void; // 中止上传任务
}

// 上传配置选项
interface UploadOptions {
  onProgressUpdate?: (result: OnProgressUpdateResult) => void; // 上传进度监听回调
  onTask?: (task: UploadTask) => void; // 获取上传任务实例，用于控制上传
}
```

## 使用示例

### 基础路径上传

最简单的上传方式，直接传入文件路径：

```ts
import { upload } from "@/cool";

function handleUpload() {
  uni.chooseImage({
    count: 1,
    success(res) {
      // 开始上传文件
      upload(res.tempFilePaths[0])
        .then((url) => {
          console.log("上传成功，文件地址：", url);
          // 处理上传成功后的逻辑
        })
        .catch((error) => {
          console.error("上传失败：", error);
          // 处理上传失败的情况
        });
    },
    fail(error) {
      console.error("选择文件失败：", error);
    },
  });
}
```

### 单个文件上传

单个文件上传示例，支持监听上传进度和中止上传任务:

```ts
import { uploadFile } from "@/cool";

function handleAdvancedUpload() {
  uni.chooseImage({
    count: 1, // 最多选择1个文件
    success(res) {
      // 单个文件上传
      uploadFile(tempFiles[0], {
        onProgressUpdate: ({ progress }) => {
          console.log(`上传进度：${progress}%`);
        },
      })
        .then((url) => {
          console.log("单个文件上传成功：", url);
        })
        .catch((error) => {
          console.error("单个文件上传失败：", error);
        });
    },
    fail(error) {
      console.error("选择文件失败：", error);
    },
  });
}
```

### 多个文件上传

通过遍历 `tempFiles` 数组，对每个文件调用 `uploadFile` 方法实现批量上传，支持进度监听和错误处理。

```ts
import { uploadFile } from "@/cool";

function handleAdvancedUpload() {
  uni.chooseImage({
    count: 9, // 最多选择9个文件
    success(res) {
      if (Array.isArray(res.tempFiles)) {
        // 批量上传多个文件
        res.tempFiles.forEach((file, index) => {
          uploadFile(file, {
            // 监听上传进度
            onProgressUpdate: ({
              progress,
              totalBytesSent,
              totalBytesExpectedToSend,
            }) => {
              console.log(`文件${index + 1}上传进度：${progress}%`);
              console.log(
                `已上传：${totalBytesSent} / 总大小：${totalBytesExpectedToSend}`
              );
            },
          })
            .then((url) => {
              console.log(`文件${index + 1}上传成功：`, url);
            })
            .catch((error) => {
              console.error(`文件${index + 1}上传失败：`, error);
            });
        });
      }
    },
    fail(error) {
      console.error("选择文件失败：", error);
    },
  });
}
```
