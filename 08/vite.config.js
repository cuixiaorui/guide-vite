import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "myLib",
      // 默认是 es umd ， 可以改写成 es  这样就只会生成 es 形式的了
      formats: ["es"],
      fileName: "my-lib.es.js",
      // 这样打包的话 会默认打包出 es 和 umd 两种形式  ，所以生成的文件名可以通过函数的形式来处理
      // fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // 可以把不想要打包到库里面的依赖干掉
      // 这里的这个配置就直接传给 rollup 的

      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
