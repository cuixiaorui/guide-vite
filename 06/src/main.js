// 使用 import.meta.glob
// 懒加载
// const modules = import.meta.glob("./core/*.js");
// console.log(modules);
// ./core/bar.js: () => import("/src/core/bar.js")
// ./core/foo.js: () => import("/src/core/foo.js")

// 加载
// for (const path in modules) {
//   modules[path]().then((mod) => {
//     console.log(path, mod);
//   });
// }

// 直接引入所有的模块
// import.meta.globEager()

// const modules = import.meta.globEager("./core/*.js");
// console.log(modules);

// // key 是文件的路径
// console.log(modules["./core/bar.js"].bar());
