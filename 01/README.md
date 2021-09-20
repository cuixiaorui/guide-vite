# getting-start

## 安装

使用 npm

```js
 npm init vite@latest
```

使用 yarn

```js
yarn create vite
```

## 默认的功能

- 模块热重载
- 天然支持 ts
  - Vite 仅执行 .ts 文件的转译工作，并 不 执行任何类型检查。并假设类型检查已经被你的 IDE 或构建过程接管了
  - 使用的是 esbuild 来对 ts 做的编译(没办法 esbuild 太)

- 天然支持 json