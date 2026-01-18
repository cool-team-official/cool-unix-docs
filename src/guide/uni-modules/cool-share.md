# cool-share

提供便捷的系统分享功能，支持分享文本、图片、视频、音频、文件和链接等多种类型的内容。通过简单的 API 调用即可实现跨平台的系统级分享能力，适用于社交分享、内容传播等场景。

## 兼容性

| 平台       | 支持状态 | 说明                   |
| ---------- | -------- | ---------------------- |
| 鸿蒙 OS    | ✅ 支持  | 支持鸿蒙 OS 最新版本   |
| iOS        | ✅ 支持  | 支持 iOS 9.0+          |
| Android    | ✅ 支持  | 支持 Android 5.0+      |
| Web        | ✅ 支持  | 支持现代浏览器         |
| 微信小程序 | ✅ 支持  | 支持微信小程序最新版本 |

## API

### shareWithSystem(options: ShareWithSystemOptions)

调用系统分享功能，支持多种分享类型。

#### 参数说明

**ShareWithSystemOptions**

| 参数    | 类型                                                        | 必填 | 说明                                                                         |
| ------- | ----------------------------------------------------------- | ---- | ---------------------------------------------------------------------------- |
| type    | `text` \| `image` \| `video` \| `audio` \| `file` \| `link` | 是   | 分享类型                                                                     |
| title   | string                                                      | 否   | 分享标题                                                                     |
| summary | string                                                      | 否   | 分享描述或内容                                                               |
| url     | string                                                      | 否   | 分享资源路径，图片/视频/音频/文件时填写资源路径或网络URL，link时填写链接地址 |
| success | () => void                                                  | 否   | 分享成功回调                                                                 |
| fail    | (error: string) => void                                     | 否   | 分享失败回调，返回错误信息                                                   |

## 使用示例

### 分享文本

```ts
import { shareWithSystem } from "@/uni_modules/cool-share";

shareWithSystem({
	type: "text",
	title: "分享标题",
	summary: "这是要分享的文本内容",
	success: () => {
		console.log("分享成功");
	},
	fail: (error) => {
		console.log("分享失败:", error);
	}
});
```

### 分享图片

```ts
import { shareWithSystem } from "@/uni_modules/cool-share";

shareWithSystem({
	type: "image",
	title: "分享图片",
	url: "/static/images/share.jpg", // 本地路径
	success: () => {
		console.log("图片分享成功");
	},
	fail: (error) => {
		console.log("图片分享失败:", error);
	}
});
```

### 分享网络图片

```ts
import { shareWithSystem } from "@/uni_modules/cool-share";

shareWithSystem({
	type: "image",
	title: "分享网络图片",
	url: "https://example.com/image.jpg", // 网络URL
	success: () => {
		console.log("网络图片分享成功");
	}
});
```

### 分享链接

```ts
import { shareWithSystem } from "@/uni_modules/cool-share";

shareWithSystem({
	type: "link",
	title: "Cool UI 组件库",
	summary: "一套基于 uniappx 的跨平台 UI 组件库",
	url: "https://cool-js.com/",
	success: () => {
		console.log("链接分享成功");
	},
	fail: (error) => {
		console.log("链接分享失败:", error);
	}
});
```

### 分享视频

```ts
import { shareWithSystem } from "@/uni_modules/cool-share";

shareWithSystem({
	type: "video",
	title: "分享视频",
	summary: "精彩视频内容",
	url: "/static/video/demo.mp4",
	success: () => {
		console.log("视频分享成功");
	}
});
```

### 分享音频

```ts
import { shareWithSystem } from "@/uni_modules/cool-share";

shareWithSystem({
	type: "audio",
	title: "分享音频",
	summary: "好听的音乐",
	url: "/static/audio/music.mp3",
	success: () => {
		console.log("音频分享成功");
	}
});
```

### 分享文件

```ts
import { shareWithSystem } from "@/uni_modules/cool-share";

shareWithSystem({
	type: "file",
	title: "分享文档",
	summary: "重要文档",
	url: "/static/files/document.pdf",
	success: () => {
		console.log("文件分享成功");
	},
	fail: (error) => {
		console.log("文件分享失败:", error);
	}
});
```

## 注意事项

1. **资源路径**：分享本地资源时，确保资源路径正确且文件存在
2. **网络资源**：分享网络资源时，确保 URL 可访问且格式正确
3. **权限要求**：某些平台可能需要用户授权才能使用分享功能
4. **文件大小**：注意分享文件的大小限制，过大的文件可能导致分享失败
5. **平台差异**：不同平台支持的分享类型和展示效果可能有所差异
6. **回调处理**：建议同时处理 success 和 fail 回调，提供更好的用户体验

## 常见问题

### 分享失败怎么办？

检查以下几点：

- 确认资源路径是否正确
- 确认网络连接是否正常（分享网络资源时）
- 确认是否有相应的分享权限
- 查看 fail 回调中的错误信息

### 如何自定义分享样式？

系统分享调用的是原生分享面板，样式由系统决定，无法自定义。如需自定义分享样式，建议使用自定义分享组件。

### 支持分享到指定应用吗？

`shareWithSystem` 调用的是系统分享面板，由用户选择分享目标应用。如需分享到指定应用（如微信、QQ等），需要使用对应平台的 SDK。
