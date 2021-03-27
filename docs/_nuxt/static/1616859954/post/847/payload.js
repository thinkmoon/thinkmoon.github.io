__NUXT_JSONP__("/post/847", {data:[{article:"\u003C!--markdown--\u003E## 为什么需要？\n\n\u003Cp\u003E微信小程序里面页面与自定义组件的区别较大，而页面的可复用程度太低了。要么就是跳转页面，要么就是copy代码。如果我们要增加代码的可复用性，就可以借用Vue组件的思想，将页面改写为自定义组件。\u003C\u002Fp\u003E\n\u003Ch2 id=\"结构对比\"\u003E结构对比\u003C\u002Fh2\u003E\n\u003Cp\u003E两者的视图文件，样式文件没有什么区别。主要区别最大的就是js文件，我们首先来看一下两者的结构。\u003C\u002Fp\u003E\n\u003Ch3 id=\"pagejs\"\u003Epage.js\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Epage({\n  \u002F\u002F 数据内容\n  data:{},\n  \u002F\u002F 生命周期函数\n  onLoad(){},\n  \u002F\u002F 一些自定义函数\n  someMethods(){}\n})\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"componetjs\"\u003Ecomponet.js\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascrpt\"\u003Ecomponet({\n  \u002F\u002F 预设属性\n  properties: {},\n  \u002F\u002F 数据内容\n  data: {},\n  \u002F\u002F组件所在页面生命周期\n  pageLifetimes: {},\n  \u002F\u002F 生命周期函数-挂载\n  attached: function() {\n    \u002F\u002F 在组件实例进入页面节点树时执行\n  },\n  \u002F\u002F 生命周期函数-卸载\n  detached: function() {\n    \u002F\u002F 在组件实例被从页面节点树移除时执行\n  },\n  \u002F\u002F 自定义函数写结构里面\n  methods:{\n    someMethods(){}\n  }\n})\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E我们可以看到，两者的基本相似，大同小异。所以改写起来就特别方便啦~\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E将page改为componet\u003C\u002Fli\u003E\n\u003Cli\u003E适配生命周期函数，例如将页面onLoad()函数改写为组件的attached()函数\u003C\u002Fli\u003E\n\u003Cli\u003E将自定义函数someMethods()写到Componet的methods里面\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n"}],fetch:{},mutations:void 0});