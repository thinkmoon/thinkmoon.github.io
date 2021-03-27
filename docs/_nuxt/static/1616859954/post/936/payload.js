__NUXT_JSONP__("/post/936", {data:[{article:"\u003C!--markdown--\u003E![2020-11-30T13:14:59.png][1]\n\n\u003Ch2 id=\"引言\"\u003E引言\u003C\u002Fh2\u003E\n\u003Cp\u003E开发过微信小程序的同学想必都对wx.showModal不陌生。用起来还是比较方便的，以api的形式挂载在全局对象wx上，只需调用一下这个api即可显示一个弹窗，还可以根据设置的参数做一些定制。一些知名的组件库，也实现了此类功能。比如element的$message。所以，我也来分享一个简单实现方式，以此来加深对Vue的理解。\u003C\u002Fp\u003E\n\u003Ch2 id=\"代码结构\"\u003E代码结构\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-11-30T15:17:32.png\" alt=\"2020-11-30T15:17:32.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E在Message目录下，有着两个文件，vue文件负责组件内容，js负责处理服务APi。\u003C\u002Fp\u003E\n\u003Ch2 id=\"实现原理\"\u003E实现原理\u003C\u002Fh2\u003E\n\u003Cp\u003E首先使用vue文件创建一个弹窗组件，然后按正常写组件方式写一个组件逻辑。唯一不同的是引入方式不一样，不在别的组件中引用该组件。使用js文件将其注册到全局api，调用该api。\u003C\u002Fp\u003E\n\u003Ch2 id=\"实现过程\"\u003E实现过程\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E注意：本文使用的是Vue3.x版本。由于本人Vue3.x也正出于学习之处，如有理解\u002F实现不当之处，恳请指正！\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"vue文件\"\u003EVue文件\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-html\"\u003E&lt;template&gt;\n    &lt;div v-if=&quot;visible&quot; class=&quot;tm-message-wrapper&quot;&gt;\n        &lt;div class=&quot;tm-message-dialog&quot;&gt;\n            &lt;div class=&quot;tm-message-title&quot;&gt;{{ title }}&lt;\u002Fdiv&gt;\n            &lt;div class=&quot;tm-message-content&quot;&gt;{{ content }}&lt;\u002Fdiv&gt;\n            &lt;div class=&quot;tm-message-noRepeat&quot; v-if=&quot;showNoRepeat&quot;&gt;&lt;input type=&quot;checkbox&quot; v-model=&quot;noRepeat&quot;&gt;不再提示&lt;\u002Fdiv&gt;\n            &lt;div class=&quot;tm-message-operation-area&quot;&gt;\n                &lt;div class=&quot;tm-message-cancel tm-message-operation&quot; @click=&quot;action(&#39;cancel&#39;)&quot;&gt;取消&lt;\u002Fdiv&gt;\n                &lt;div class=&quot;tm-message-confirm tm-message-operation&quot; @click=&quot;action(&#39;confirm&#39;)&quot;&gt;确定&lt;\u002Fdiv&gt;\n            &lt;\u002Fdiv&gt;\n        &lt;\u002Fdiv&gt;\n    &lt;\u002Fdiv&gt;\n&lt;\u002Ftemplate&gt;\n\n&lt;script&gt;\nexport default {\n    data() {\n        return {\n            uid: &quot;default&quot;,\n            visible: false,\n            title: &quot;提示&quot;,\n            content: &quot;消息内容&quot;,\n            showNoRepeat: false,\n            noRepeat: false,\n            callBack: null\n        }\n    },\n    methods: {\n        action(action) {\n            this.visible = false\n            if (action == &quot;confirm&quot; &amp;&amp; this.showNoRepeat &amp;&amp; this.noRepeat) {\n                window.localStorage.setItem(this.uid, true)\n            }\n            if (this.callBack instanceof Function) {\n                this.callBack(action)\n            }\n        }\n    }\n}\n&lt;\u002Fscript&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E该文件没有什么特别值得注意的地方，唯一一个跟普通组件写法不一样的就是多了一个callBack回调。\u003C\u002Fp\u003E\n\u003Ch3 id=\"js文件\"\u003Ejs文件\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Eimport { createApp } from &#39;vue&#39;\nimport Message from &quot;.\u002Findex.vue&quot;\n\n\nconst msg = options =&gt; {\n    const NoticeInstance = createApp(Message)\n    let msgNode = document.createElement(&#39;div&#39;);\n    NoticeInstance.vm = NoticeInstance.mount(msgNode);\n    if (options &amp;&amp; Object.keys(options).length &gt; 0) {\n        Object.assign(NoticeInstance.vm, options)\n    }\n    console.log(NoticeInstance)\n    NoticeInstance.vm.visible = true;\n    NoticeInstance.dom = NoticeInstance.vm.$el;\n    document.body.appendChild(NoticeInstance.dom)\n    return NoticeInstance.vm\n}\nexport default msg;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003Ejs文件首先创建了一个app实例，然后将其挂载到一个新的html元素，随后进行一些属性的赋值操作。最后将实例追加之文档的body末尾。\u003C\u002Fp\u003E\n\u003Ch2 id=\"引入\"\u003E引入\u003C\u002Fh2\u003E\n\u003Cp\u003Emain.js\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Eimport { createApp } from &#39;vue&#39;\nimport App from &#39;.\u002FApp.vue&#39;\n\nimport Message from &quot;..\u002Ftm-ui\u002Fcomponents\u002FMessage&quot;\n\nconst app = createApp(App)\napp.config.globalProperties.$message = Message;\n\napp.mount(&#39;#app&#39;)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"调用\"\u003E调用\u003C\u002Fh2\u003E\n\u003Cp\u003Etest.vue\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-html\"\u003E&lt;template&gt;\n  &lt;div @click=&quot;showModal&quot; class=&quot;bg-blue text-lg&quot;&gt;\n      点我弹窗(wx.showModal)\n  &lt;\u002Fdiv&gt;\n&lt;\u002Ftemplate&gt;\n\n&lt;script&gt;\nexport default {\n    methods:{\n        showModal(){\n            this.$message({\n                title:&quot;弹窗标题&quot;,\n                content:&quot;弹窗内容&quot;,\n                callBack: (action) =&gt; {\n                    if(action == &#39;confirm&#39;) {\n                        console.log(&quot;点击了确定&quot;)\n                    }\n                }\n            })\n        }\n    }\n}\n&lt;\u002Fscript&gt;\n\n&lt;style&gt;\n\n&lt;\u002Fstyle&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-11-30T15:18:35.png\" alt=\"2020-11-30T15:18:35.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"后记\"\u003E后记\u003C\u002Fh2\u003E\n\u003Cp\u003E相比于Vue2.x，vue3.x的设计理念更偏向于函数式编程，比如不在默认导出Vue对象，而是使用createApp的方式创建一个实例。而这个showModal的实现虽然达到了效果，但用起来依旧缺少了函数式编程的美感。相比于微信小程序showModal的对象函数回调写法。我个人更偏向于element的messag实现。返回一个Promise对象，确认操作在then()调用里面，取消操作在catch()异常处理。感觉这样会更具有与Vue3统一的编程式美感。\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});