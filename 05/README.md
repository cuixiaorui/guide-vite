# 静态资源处理

导入一个静态资源会返回解析后的 URL：

```js
import imgUrl from "./img.png";
document.getElementById("hero-img").src = imgUrl;
```

添加一些特殊的查询参数可以更改资源被引入的方式：

```js
// 显式加载资源为一个 URL
import assetAsURL from "./asset.js?url";
```

```js
// 以字符串形式加载资源
import assetAsString from "./shader.glsl?raw";
```
