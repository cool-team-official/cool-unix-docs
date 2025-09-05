import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cool Unix",
  description: "基于 uniapp 的项目脚手架",
  lastUpdated: true,

  head: [
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?85bf4e006202034d3081db93fa376408";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],

  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    footer: {
      message: "COOL为开发者而生",
      copyright:
        '<a href="https://beian.miit.gov.cn">Copyright © COOL | 闽ICP备2024042701号</a>',
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
      level: [2, 3],
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    editLink: {
      text: "在GitHub上编辑",
      pattern:
        "https://github.com/cool-team-official/cool-uni-docs/blob/main/:path",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "介绍", link: "/src/introduce/index.md", noIcon: false },
      { text: "版本 8.0.20", link: "/src/todo/update.md", noIcon: false },
      { text: "教程", link: "/src/introduce/quick.md" },
      { text: "组件库", link: "/src/components/basic/button.md" },
      { text: "插件市场", link: "https://cool-js.com/plugin" },
      { text: "交流合作", link: "/src/about/index.md" },
      {
        text: "更多",
        items: [
          {
            text: "Cool uni(uniapp版)",
            link: "https://uni-docs.cool-js.com/",
          },
          {
            text: "Cool Admin(Vue版)",
            link: "https://vue.cool-admin.com",
          },
          {
            text: "Cool Admin(Nodejs版)",
            link: "https://cool-js.com",
          },
          {
            text: "Cool Admin(Java版)",
            link: "https://java.cool-admin.com",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "简介",
        link: "/src/introduce/index.md",
      },
      {
        text: "源码",
        link: "/src/introduce/src.md",
      },
      {
        text: "更新日志",
        link: "/src/todo/update.md",
      },
      {
        text: "任务计划",
        link: "/src/todo/plan.md",
      },
      {
        items: [
          { text: "快速开始", link: "/src/introduce/quick.md" },
          { text: "图标配置", link: "/src/introduce/icon.md" },
          { text: "主题、样式库", link: "/src/introduce/theme.md" },
          {
            text: "国际化",
            link: "/src/introduce/i18n.md",
          },
          {
            text: "Service 请求",
            link: "/src/guide/cool/service.md",
          },
          {
            text: "常见问题",
            link: "/src/introduce/question.md",
          },
          {
            text: "兼容问题",
            link: "/src/introduce/help.md",
          },
        ],
      },
      {
        items: [
          {
            text: "纯净版本",
            link: "/src/introduce/clean.md",
          },
          {
            text: "对接 cool-admin",
            link: "/src/introduce/admin.md",
          },
        ],
      },
      {
        items: [
          {
            text: "使用说明",
            link: "/src/components/doc.md",
          },
          {
            text: "PassThrough",
            link: "/src/components/pt.md",
          },
          {
            text: "基础组件",
            items: [
              {
                text: "Page 页面",
                link: "/src/components/basic/page.md",
              },
              {
                text: "Button 按钮",
                link: "/src/components/basic/button.md",
              },
              {
                text: "Text 文本",
                link: "/src/components/basic/text.md",
              },
              {
                text: "Icon 图标",
                link: "/src/components/basic/icon.md",
              },
              {
                text: "Image 图片",
                link: "/src/components/basic/image.md",
              },
              {
                text: "Tag 标签",
                link: "/src/components/basic/tag.md",
              },
            ],
          },
          {
            text: "表单组件",
            items: [
              {
                text: "Form 表单验证",
                link: "/src/components/form/form.md",
              },
              {
                text: "Input 输入框",
                link: "/src/components/form/input.md",
              },
              {
                text: "Textarea 文本域",
                link: "/src/components/form/textarea.md",
              },
              {
                text: "InputNumber 计数器",
                link: "/src/components/form/input-number.md",
              },
              {
                text: "InputOtp 验证码输入",
                link: "/src/components/form/input-otp.md",
              },
              {
                text: "Keyboard 虚拟键盘",
                link: "/src/components/form/keyboard.md",
              },
              {
                text: "Radio 单选框",
                link: "/src/components/form/radio.md",
              },
              {
                text: "Checkbox 多选框",
                link: "/src/components/form/checkbox.md",
              },
              {
                text: "Switch 开关",
                link: "/src/components/form/switch.md",
              },
              {
                text: "Rate 评分",
                link: "/src/components/form/rate.md",
              },
              {
                text: "Slider 滑块",
                link: "/src/components/form/slider.md",
              },
              {
                text: "Select 选择器",
                link: "/src/components/form/select.md",
              },
              {
                text: "SelectDate 日期选择",
                link: "/src/components/form/select-date.md",
              },
              {
                text: "SelectTime 时间选择",
                link: "/src/components/form/select-time.md",
              },
              {
                text: "Cascader 级联选择",
                link: "/src/components/form/cascader.md",
              },
              {
                text: "Upload 文件上传",
                link: "/src/components/form/upload.md",
              },
            ],
          },
          {
            text: "布局组件",
            items: [
              {
                text: "Flex 弹性布局",
                link: "/src/components/layout/flex.md",
              },
              {
                text: "Tabs 标签页",
                link: "/src/components/layout/tabs.md",
              },
              {
                text: "Collapse 折叠面板",
                link: "/src/components/layout/collapse.md",
              },
              {
                text: "Sticky 吸顶",
                link: "/src/components/layout/sticky.md",
              },
              {
                text: "Topbar 导航栏",
                link: "/src/components/layout/topbar.md",
              },
              {
                text: "Footer 底部视图",
                link: "/src/components/layout/footer.md",
              },
              {
                text: "FloatView 悬浮视图",
                link: "/src/components/layout/float-view.md",
              },
            ],
          },
          {
            text: "数据展示",
            items: [
              {
                text: "Avatar 头像",
                link: "/src/components/data/avatar.md",
              },
              {
                text: "List 列表",
                link: "/src/components/data/list.md",
              },
              {
                text: "ListView 列表视图",
                link: "/src/components/data/list-view.md",
              },
              {
                text: "ListViewRefresh 列表刷新",
                link: "/src/components/data/list-view-refresh.md",
              },
              {
                text: "Waterfall 瀑布流",
                link: "/src/components/data/waterfall.md",
              },
              {
                text: "Banner 轮播图",
                link: "/src/components/data/banner.md",
              },
              {
                text: "Pagination 分页",
                link: "/src/components/data/pagination.md",
              },
              {
                text: "Timeline 时间轴",
                link: "/src/components/data/timeline.md",
              },
              {
                text: "Draggable 拖拽排序",
                link: "/src/components/data/draggable.md",
              },
              {
                text: "FilterBar 筛选栏",
                link: "/src/components/data/filter-bar.md",
              },
              {
                text: "Tree 树形组件",
                link: "/src/components/data/tree.md",
              },
            ],
          },
          {
            text: "状态组件",
            items: [
              {
                text: "Badge 角标",
                link: "/src/components/status/badge.md",
              },
              {
                text: "Noticebar 通知栏",
                link: "/src/components/status/noticebar.md",
              },
              {
                text: "Countdown 倒计时",
                link: "/src/components/status/countdown.md",
              },
              {
                text: "Progress 进度条",
                link: "/src/components/status/progress.md",
              },
              {
                text: "ProgressCircle 圆形进度条",
                link: "/src/components/status/progress-circle.md",
              },
              {
                text: "Skeleton 骨架图",
                link: "/src/components/status/skeleton.md",
              },
              {
                text: "Loadmore 加载更多",
                link: "/src/components/status/loadmore.md",
              },
              {
                text: "RollingNumber 滚动数字",
                link: "/src/components/status/rolling-number.md",
              },
            ],
          },
          {
            text: "反馈组件",
            items: [
              {
                text: "ActionSheet 操作面板",
                link: "/src/components/feedback/action-sheet.md",
              },
              {
                text: "Popup 弹出层",
                link: "/src/components/feedback/popup.md",
              },
              {
                text: "Confirm 确认框",
                link: "/src/components/feedback/confirm.md",
              },
              {
                text: "Toast 提示框",
                link: "/src/components/feedback/toast.md",
              },
            ],
          },
          {
            text: "其他",
            items: [
              {
                text: "Qrcode 二维码",
                link: "/src/components/other/qrcode.md",
              },
              {
                text: "Sign 签名",
                link: "/src/components/other/sign.md",
              },
              {
                text: "Cropper 图片裁剪",
                link: "/src/components/other/cropper.md",
              },
              {
                text: "Canvas 画布",
                link: "/src/components/other/canvas.md",
              },
              {
                text: "Svg 图标",
                link: "/src/components/other/svg.md",
              },
              {
                text: "SlideVerify 滑动验证",
                link: "/src/components/other/slide-verify.md",
              },
              // {
              //   text: "Request 请求",
              //   link: "/src/components/other/request.md",
              // },
            ],
          },
        ],
      },
      {
        items: [
          {
            text: "目录结构",
            items: [
              // {
              //   text: ".cool",
              //   link: "/src/guide/.cool.md",
              // },
              // {
              //   text: ".cursor",
              //   link: "/src/guide/.cursor.md",
              // },
              {
                text: "components",
                link: "/src/guide/components.md",
              },
              { text: "config", link: "/src/guide/config.md" },
              {
                text: "cool",
                items: [
                  { text: "ctx", link: "/src/guide/cool/ctx.md" },
                  { text: "hooks", link: "/src/guide/cool/hooks.md" },
                  { text: "router", link: "/src/guide/cool/router.md" },
                  { text: "service", link: "/src/guide/cool/service.md" },
                  { text: "store", link: "/src/guide/cool/store.md" },
                  { text: "theme", link: "/src/guide/cool/theme.md" },
                  { text: "upload", link: "/src/guide/cool/upload.md" },
                  {
                    text: "utils",
                    items: [
                      {
                        text: "comm",
                        link: "/src/guide/cool/utils/comm.md",
                      },
                      {
                        text: "day",
                        link: "/src/guide/cool/utils/day.md",
                      },
                      {
                        text: "path",
                        link: "/src/guide/cool/utils/path.md",
                      },
                      {
                        text: "storage",
                        link: "/src/guide/cool/utils/storage.md",
                      },
                    ],
                  },
                ],
              },
              { text: "icons", link: "/src/guide/icons.md" },
              { text: "locale", link: "/src/guide/locale.md" },
              {
                text: "pages",
                link: "/src/guide/pages.md",
              },
              { text: "router", link: "/src/guide/router.md" },
              { text: "static", link: "/src/guide/static.md" },
              {
                text: "uni_modules",
                items: [
                  {
                    text: "cool-open-web",
                    link: "/src/guide/uni-modules/cool-open-web.md",
                  },
                  {
                    text: "cool-ui",
                    link: "/src/guide/uni-modules/cool-ui.md",
                  },
                  {
                    text: "cool-vibrate",
                    link: "/src/guide/uni-modules/cool-vibrate.md",
                  },
                ],
              },
              { text: "App.vue", link: "/src/guide/App.vue.md" },
              { text: "main.ts", link: "/src/guide/main.ts.md" },
              { text: "tailwind.config.ts", link: "/src/introduce/theme.md" },
              { text: "pages.json", link: "/src/guide/pages.json.md" },
              { text: "theme.json", link: "/src/guide/theme.json.md" },
              { text: "vite.config.ts", link: "/src/guide/vite.config.ts.md" },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cool-team-official/cool-unix",
      },
    ],
  },
});
