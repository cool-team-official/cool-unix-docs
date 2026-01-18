# 插件开发

`/plugins` 目录下的代码会被自动加载，无需手动引入。

## 插件结构

每个插件文件需要导出一个符合 `PluginConfig` 类型的配置对象：

```js
import { type PluginConfig } from "@/.cool";

export default {
    options: {
        // 插件配置选项
    },
	install(app: VueApp) {
        // 插件安装逻辑
	}
} as PluginConfig;

```

## 多语言插件

用于配置应用支持的语言列表，并初始化默认语言。

```js
import { initLocale, type PluginConfig } from "@/.cool";

export default {
	options: {
		// 支持的多语言代码列表，AI 将根据此列表生成对应的本地化文件
		languages: ["zh-cn", "zh-tw", "en", "es", "ja", "ko", "fr"]
	},

	install(app) {
		// 初始化多语言设置
		// 参数为默认语言代码，传入 "none" 则优先跟随系统当前语言
		initLocale("zh-cn");
	}
} as PluginConfig;

```

## 路由插件

通过全局路由守卫实现页面跳转前的权限控制。

```js
import { type PluginConfig } from "@/.cool";
import { isNull, router, useStore } from "@/.cool";

export default {
	install(app) {
		/**
		 * 路由跳转前的全局钩子
		 * 注意：修改 pages.json 后需重新编译项目以确保路由信息生效
		 * @param to 目标页面
		 * @param from 当前页面
		 * @param next 跳转控制函数
		 */
		router.beforeEach((to, from, next) => {
			const { user } = useStore();

			// 判断目标页面是否需要登录权限
			if (to.isAuth == true || (isNull(to.meta) ? true : to.meta.isAuth == true)) {
				// 验证用户登录状态
				if (!user.isNull()) {
					next(); // 已登录，允许跳转
				} else {
					router.login(); // 未登录，跳转到登录页
				}
			} else {
				next(); // 无需登录，直接跳转
			}
		});
	}
} as PluginConfig;
```

## 通信插件

通过事件总线实现全局通信，避免直接引入模块导致的编译错误。

```js
import { type PluginConfig } from "@/.cool";
import { vibrate } from "@/uni_modules/cool-vibrate";

export default {
	install(app: VueApp) {
		// 监听震动事件，避免在不存在 cool-vibrate 模块时出现编译错误
		uni.$on("cool.vibrate", (duration: number | null) => {
			vibrate(duration ?? 1);
		});
	}
} as PluginConfig;

```

## 触摸事件插件

在 H5 环境下模拟移动端触摸事件，方便桌面浏览器调试。

```js
import { type PluginConfig } from "@/.cool";

// #ifdef H5
import TouchEmulator from "hammer-touchemulator";
// #endif

export default {
	install(app) {
		// #ifdef H5
		// 启用鼠标模拟触摸事件，便于在桌面浏览器中调试移动端交互
		TouchEmulator();
		// #endif
	}
} as PluginConfig;

```
