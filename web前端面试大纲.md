一、js面试题

1. 有哪几种方法可以判断一个数据的类型？
2. 重排和重绘是什么？哪种性能损耗更小一点？
3. new一个对象的过程中发生了什么？
4. 可以通过哪几种方式改变this的指向以及它们的区别是什么？
5. 一个promise的实现原理大概是怎样的？
6. js的事件循环机制是怎么样的？
7. vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？事件代理机制
8. 什么是防抖和节流？有什么区别？如何实现？
9. setTimeout、Promise、Async/Await 的区别
10. SessionStorage,LocalStorage,Cookie区别和使用场景
11. 前端哪些地方会存在安全风险
12. 页面懒加载怎么实现的
13. ES6转为ES5的思路

二、vue面试题

> 一星题，等级：了解（答错不给过），2-3个

1.  Vue组件生命周期执行顺序是怎样的？
2.  计算属性和方法的区别？
3.  父子组件间传值可以通过哪几种方式？
4.  vue中的data为什么是个函数而不是对象？
5.  vue强制刷新数据的方法是什么？
6.  vue-router传参方式有几种？
7.  vuex的五个属性及基本用法是怎样的？
8.  v-show和v-if的区别
9.  vue中的solt

> 二星题，等级：理解

1.  自定义指令directive用过没？它和组件的区别？
2.  Vue生命周期，父子组件的生命周期顺序是怎样的？
3.  plugin用过没？写过什么插件？
4.  vue scope样式的实现原理？

> 三星题，等级：掌握

1. directive的钩子函数？

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

我们会在[稍后](https://cn.vuejs.org/v2/guide/render-function.html#虚拟-DOM)讨论[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)时介绍更多 VNodes 的细节。

- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

2. plugin可以做哪些事情？

- 添加全局方法或者 property。如：[vue-custom-element](https://github.com/karol-f/vue-custom-element)

- 添加全局资源：指令/过滤器/过渡等。如 [vue-touch](https://github.com/vuejs/vue-touch)

- 通过全局混入来添加一些组件选项。如 [vue-router](https://github.com/vuejs/vue-router)

- 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。

- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-router](https://github.com/vuejs/vue-router)

> 四星题，等级：熟练运用

> 五星题，等级：深入原理

三、webpack

1. wepack设置本地代理规则？
2. 用过哪些webpack的loader，plugin？
3. 那你再说一说Loader和Plugin的区别？
   Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。
   因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
   Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
   Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
   Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。


四、CSS

1. flex布局

2. REM的单位

3. 伪类和伪元素

4. 用纯 CSS 创建一个三角形

5. CSS 盒模型

6. CSS样式优先级

   1. **千位**： 如果声明在 [`style`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-style) 的属性（内联样式）则该位得一分。这样的声明没有选择器，所以它得分总是1000。
   2. **百位**： 选择器中包含ID选择器则该位得一分。
   3. **十位**： 选择器中包含类选择器、属性选择器或者伪类则该位得一分。
   4. **个位**：选择器中包含元素、伪元素选择器则该位得一分。

   **注**: 通用选择器 (`*`)，组合符 (`+`, `>`, `~`, ' ')，和否定伪类 (`:not`) 不会影响优先级。

   **警告:** 在进行计算时不允许进行进位，例如，20 个类选择器仅仅意味着 20 个十位，而不能视为 两个百位，也就是说，无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器。

五、H5
1.在H5项目中有头部返回按钮，如何避免手机自带的返回键与头部返回按钮功能不一致？

六、经验题
百度地图开发
1.有用过openlayers吗？主要有那些核心API？
2.假设有个需求：a.显示当前定位，b.搜索地址定位，c.移动地图，定位中心点，大概的实现思路及方法是什么？
3.Echarts/element UI
4.less：样式预处理
5.axios：拦截器、错误捕获
6.ES6：用过哪些ES6的特性
7.bpmn.js
  1）了解过bpmn吗？生成一个流程图的思路（步骤）是什么？
  2）bpmn将字符串转换成图显示的方法是什么？
  3）有什么方法可以监听用户进行画布操作从而触发数据校验？
  4）如何在一个节点旁边自定义一个垃圾桶功能？

