import { createApp } from "vue";
import App from "./App.vue";
import { add } from "./add";
// 全部导入
// import data from "./data.json";
// console.log(data);

// 可以利用 tree-shaking
import {age} from './data.json'
console.log(age)

// 天然支持 ts
console.log(add(1, 1));

createApp(App).mount("#app");
