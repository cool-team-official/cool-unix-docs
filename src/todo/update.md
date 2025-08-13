# 版本更新 📚

感谢您对 cool-unix 的关注与支持！我们致力于为开发者提供更好的开发体验，持续迭代优化产品功能。

如果本项目对您有所帮助，欢迎点击 ⭐ **Star** 支持我们，这将是我们前进路上最大的动力！

- [欢迎在 uniapp 插件市场为我们点赞支持](https://ext.dcloud.net.cn/plugin?id=24497#rating)

- [欢迎在 GitHub 上为我们点 Star](https://github.com/cool-team-official/cool-unix)

## v8.0.8 - 2025.08.13

- [功能]新增全局字号设置功能，支持动态调整文字大小，适用于 `cl-text` 和 `cl-icon` 组件

## v8.0.7 - 2025.08.12

- [功能]添加纯净版本，[文档](/src/introduce/clean.md)
- [功能] `cl-form` 表单验证组件支持滚动到错误位置
- [功能] `cl-form` 表单内组件支持红框错误提示
- [功能]重新实现 `usePage()`，支持监听页面滚动及跳转等事件
- [功能] `cl-list-view` 添加下拉刷新功能
- [功能]添加 `usePager()` 页面刷新操作
- [功能]添加 `cl-back-top` 回到顶部组件
- [优化]优化 `cl-button` `cl-loading` 组件颜色的控制
- [优化]优化 `cl-select-date` 组件的选择操作体验（不回到首个）

## v8.0.6 - 2025.08.06

- [功能]添加 `cl-form`、`cl-form-item` 表单验证组件
- [功能] `cl-select-time` 支持类型选择
- [修复] `cl-select-date` 文本无法清空问题
- [优化] `useParent` 方法支持 `useParent<ClFormComponentPublicInstance>('cl-form')` 类型定义和目标组件名
- [优化]补充多语言

## v8.0.5 - 2025.08.03

- [功能]添加 `cl-cropper` 图片裁剪组件
- [修复] `cl-popup` 内容区域去掉滑动事件
- [修复] `locale-set` 点击掉帧问题
- [修复] `canvasToPng` 参数优化，仅需一个 `canvasRef`
- [优化]登录页细节调整
- [优化]补充多语言
- [优化]画布高清处理

## v8.0.4 - 2025.07.29

- [功能] `cl-slider` 支持范围选择
- [功能]添加 `cl-sign` 签名组件
- [修复]优化导出图片方法
- [修复]解决多语言切换时部分组件文案不更新

## v8.0.3 - 2025.07.28

- [功能]添加 `cl-draggable` 拖拽排序组件

## v8.0.2 - 2025.07.26

- [修复] `cl-popup` 关闭按钮按下体验
- [功能]添加 `cl-progress-circle` 圆形进度条组件

## v8.0.1 - 2025.07.25

- [修复]切换多语言 `tabbar` 组件无法更新
- [修复] `cl-confirm` 组件深色字体不显示
- [修复]页面无法注释，更新依赖 `@cool-vue/vite-plugin`

## 🎉 v8.0.0 - 2025.07.21

### 🚀 重大更新

本次版本带来了激动人心的全新特性：

- 🌍 **多语言支持** - 让您的应用面向全球用户 → [查看详情](/src/introduce/i18n.md)
- 🌙 **深色模式** - 提供舒适的夜间使用体验 → [查看详情](/src/introduce/theme.md)

### 📱 平台兼容性

- ✅ **鸿蒙系统** - 全面适配华为鸿蒙生态
- ✅ **微信小程序** - 完美支持小程序开发
- ✅ **Android** - 原生 Android 应用支持
- ✅ **iOS** - 完美适配苹果生态系统

---

> 💡 **提示**：如果您在使用过程中遇到任何问题，欢迎通过 [Issues](https://github.com/cool-team-official/cool-unix/issues) 反馈给我们！
