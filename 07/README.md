# 使用 plugin

## 使用

直接在 vite.config.js 里面配置即可

```js
{
  plugins: [xx(), bb()];
}
```

## 查找插件 
- 官方插件
  - https://cn.vitejs.dev/plugins/
- 社区插件
  -  awesome-vite
     -  https://github.com/vitejs/awesome-vite#plugins
- 兼容 vite 的 rollup 插件
  - https://vite-rollup-plugins.patak.dev/
- 在 npm 上搜索 vite-plugin- 开头的库
  - vite plugin 的命名规范


## 强制插件排序
可以使用 enforce 修饰符来强制插件的位置:
- pre：在 Vite 核心插件之前调用该插件
- 默认：在 Vite 核心插件之后调用该插件
- post：在 Vite 构建插件之后调用该插件

## 按需应用
默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用。如果插件在服务或构建期间按需使用，请使用 apply 属性指明它们仅在 'build' 或 'serve' 模式时调用：

```js
// vite.config.js
import typescript2 from 'rollup-plugin-typescript2'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      ...typescript2(),
      apply: 'build'
    }
  ]
})
```
