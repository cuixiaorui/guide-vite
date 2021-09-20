# NPM 依赖解析和预构建

理解 vite 预构建的实现

1. 预构建 它们可以提高页面加载速度，并将 CommonJS / UMD 转换为 ESM 格式。预构建这一步由 esbuild 执行，这使得 Vite 的冷启动时间比任何基于 JavaScript 的打包器都要快得多。

2. 重写导入为合法的 URL，例如 /node_modules/.vite/my-dep.js?v=f3sf2ebd 以便浏览器能够正确导入它们。

3. 依赖是强缓存的 - Vite 通过 HTTP 头来缓存请求得到的依赖

---

在 demo 里面导入了 vue 库， 因为 vue 是属于依赖

vite 会使用 esbuild 来打包 vue 这个依赖

原因有两点

1. vite 只支持 esm ，所以需要把依赖打包成 esm 形式
2. 有的依赖可能会存在多个 esm 文件，多个文件的话会增加 http 请求的数量，使用 esm 可以给打包成一个文件 (比如 lodash-es)
   > 看 .vite 文件里面 lodash-es 被打包成了一个文件

优化

用 esbuild 打包后的依赖会存在 node_modules/.vite 里面， 并且会被设置成强缓存

因为依赖一般都不会改变

如果你想改变的话 那么可以使用 vite --force 来强制更新这个缓存
