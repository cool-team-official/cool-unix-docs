import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cool Unix",
  description: "基于 uniapp 的项目脚手架",
  lastUpdated: true,

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
            text: "常见问题",
            link: "/src/introduce/help.md",
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
                text: "Button",
                link: "/src/components/basic/button.md",
              },
              {
                text: "Text",
                link: "/src/components/basic/text.md",
              },
              {
                text: "Icon",
                link: "/src/components/basic/icon.md",
              },
              {
                text: "Image",
                link: "/src/components/basic/image.md",
              },
              {
                text: "Tag",
                link: "/src/components/basic/tag.md",
              },
            ],
          },
          {
            text: "表单组件",
            items: [
              {
                text: "Input",
                link: "/src/components/form/input.md",
              },
              {
                text: "Textarea",
                link: "/src/components/form/textarea.md",
              },
              {
                text: "InputNumber",
                link: "/src/components/form/input-number.md",
              },
              {
                text: "InputOtp",
                link: "/src/components/form/input-otp.md",
              },
              {
                text: "Keyboard",
                link: "/src/components/form/keyboard.md",
              },
              {
                text: "Radio",
                link: "/src/components/form/radio.md",
              },
              {
                text: "Checkbox",
                link: "/src/components/form/checkbox.md",
              },
              {
                text: "Switch",
                link: "/src/components/form/switch.md",
              },
              {
                text: "Rate",
                link: "/src/components/form/rate.md",
              },
              {
                text: "Slider",
                link: "/src/components/form/slider.md",
              },
              {
                text: "Select",
                link: "/src/components/form/select.md",
              },
              {
                text: "SelectDate",
                link: "/src/components/form/select-date.md",
              },
              {
                text: "SelectTime",
                link: "/src/components/form/select-time.md",
              },
              {
                text: "Cascader",
                link: "/src/components/form/cascader.md",
              },
              {
                text: "Upload",
                link: "/src/components/form/upload.md",
              },
            ],
          },
          {
            text: "视图组件",
            items: [
              {
                text: "Avatar",
                link: "/src/components/view/avatar.md",
              },
              {
                text: "Badge",
                link: "/src/components/view/badge.md",
              },
              {
                text: "Banner",
                link: "/src/components/view/banner.md",
              },
              {
                text: "Card",
                link: "/src/components/view/card.md",
              },
              {
                text: "Divider",
                link: "/src/components/view/divider.md",
              },
              {
                text: "Flex",
                link: "/src/components/view/flex.md",
              },
              {
                text: "List",
                link: "/src/components/view/list.md",
              },
              {
                text: "ListIndex",
                link: "/src/components/view/list-index.md",
              },
              {
                text: "Loadmore",
                link: "/src/components/view/loadmore.md",
              },
              {
                text: "Noticebar",
                link: "/src/components/view/noticebar.md",
              },
              {
                text: "Popup",
                link: "/src/components/view/popup.md",
              },
              {
                text: "Progress",
                link: "/src/components/view/progress.md",
              },
              {
                text: "Scroller",
                link: "/src/components/view/scroller.md",
              },
              {
                text: "Search",
                link: "/src/components/view/search.md",
              },
              {
                text: "Slider",
                link: "/src/components/view/slider.md",
              },
              {
                text: "Tabs",
                link: "/src/components/view/tabs.md",
              },
              {
                text: "Topbar",
                link: "/src/components/view/topbar.md",
              },
              {
                text: "Waterfall",
                link: "/src/components/view/waterfall.md",
              },
              {
                text: "Skeleton",
                link: "/src/components/view/skeleton.md",
              },
            ],
          },
          {
            text: "扩展组件",
            items: [
              {
                text: "ActionSheet",
                link: "/src/components/extend/action-sheet.md",
              },
              {
                text: "Captcha",
                link: "/src/components/extend/captcha.md",
              },
              {
                text: "Confirm",
                link: "/src/components/extend/confirm.md",
              },
              {
                text: "Dialog",
                link: "/src/components/extend/dialog.md",
              },
              {
                text: "FilterBar",
                link: "/src/components/extend/filter-bar.md",
              },
              {
                text: "Page",
                link: "/src/components/extend/page.md",
              },
              {
                text: "SliderVerify",
                link: "/src/components/extend/slider-verify.md",
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            text: "目录结构",
            items: [
              {
                text: ".cool",
                link: "/src/guide/build.md",
              },
              {
                text: ".cursor",
                link: "/src/components.md",
              },
              {
                text: "components",
                link: "/src/guide/config.md",
                items: [
                  { text: "local-set.uvue", link: "/src/guide/cool/hooks.md" },
                  { text: "sms-btn.uvue", link: "/src/guide/cool/router.md" },
                  { text: "tabbar.uvue", link: "/src/guide/cool/service.md" },
                ],
              },
              { text: "config", link: "/src/guide/pages.md" },
              {
                text: "cool",
                items: [
                  { text: "ctx", link: "/src/guide/cool/hooks.md" },
                  { text: "hooks", link: "/src/guide/cool/hooks.md" },
                  { text: "router", link: "/src/guide/cool/router.md" },
                  { text: "service", link: "/src/guide/cool/service.md" },
                  { text: "store", link: "/src/guide/cool/store.md" },
                  { text: "theme", link: "/src/guide/cool/store.md" },
                  { text: "types", link: "/src/guide/cool/store.md" },
                  { text: "utils", link: "/src/guide/cool/store.md" },
                ],
              },
              { text: "icons", link: "/src/guide/pages.md" },
              { text: "locale", link: "/src/guide/pages.md" },
              {
                text: "pages",
                link: "/src/guide/pages.md",
                items: [
                  { text: "demo", link: "/src/guide/cool/hooks.md" },
                  { text: "index", link: "/src/guide/cool/hooks.md" },
                  { text: "set", link: "/src/guide/cool/hooks.md" },
                  { text: "user", link: "/src/guide/cool/hooks.md" },
                ],
              },
              { text: "router", link: "/src/guide/router.md" },
              { text: "static", link: "/src/guide/static.md" },
              { text: "types", link: "/src/guide/types.md" },
              {
                text: "uni_modules",
                link: "/src/guide/uni_modules.md",
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
