# Glob 导入

Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：

```js
const modules = import.meta.glob('./dir/\*.js')
```
以上将会被转译为下面的样子：

```js
// vite 生成的代码
const modules = {
'./dir/foo.js': () => import('./dir/foo.js'),
'./dir/bar.js': () => import('./dir/bar.js')
}
```
你可以遍历 modules 对象的 key 值来访问相应的模块：

```js
for (const path in modules) {
modules[path]().then((mod) => {
console.log(path, mod)
})
}
```
匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以使用 import.meta.globEager 代替：

```js
const modules = import.meta.globEager('./dir/\*.js')
```
以上会被转译为下面的样子：

```js
// vite 生成的代码
import _ as **glob**0_0 from './dir/foo.js'
import _ as **glob**0_1 from './dir/bar.js'
const modules = {
'./dir/foo.js': **glob**0_0,
'./dir/bar.js': **glob**0_1
}
```
