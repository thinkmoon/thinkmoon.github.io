__NUXT_JSONP__("/post/830", {data:[{article:"\u003C!--markdown--\u003E## 前言\n\n\u003Cblockquote\u003E\n\u003Cp\u003E由于各种终端屏幕风格，大小迥异，由此而生衍生出了自适应页面设计。如果我们需要在各种机型上显示的风格比例一致，而解决屏幕大小不同显示内容不同的问题的话，我们需要对各种屏幕比例做适配。本文就该问题分享一种可行性方案。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E由于以前做的移动端页面大部分为小程序页面，小程序采用相对像素(rpx)实现响应式适配。故本文也采用类似思想(rem)。\u003C\u002Fp\u003E\n\u003Ch2 id=\"1-rem是什么\"\u003E1. rem是什么\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E在W3C官网上是这样描述rem的——“font size of the root element” \u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E即相对根节点（html)的字体大小,那么解决方案的思路就立马来了。根据不同的屏幕大小，设置不同的html字体大小，这样其他使用rem单位的元素即会随之自适应的改变大小。\u003C\u002Fp\u003E\n\u003Ch2 id=\"2-计算根节点html字体大小\"\u003E2. 计算根节点(html)字体大小\u003C\u002Fh2\u003E\n\u003Ch3 id=\"21-js方案\"\u003E2.1 JS方案\u003C\u002Fh3\u003E\n\u003Cp\u003E思路就是使用js获取窗口宽度，然后根据宽度计算对应的font-size。根据一般常识，js为了不影响页面体验，应在文档末尾添加。但此处为了避免HTML渲染完成后，使用JS动态修改字体而造成的页面抖动问题。我们应该将该JS元素节点放置于header底部，并内联到html文档里面。例如\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E在Vue中直接修改template.html即可\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-JavaScript\"\u003E&lt;script type=&quot;text\u002Fjavascript&quot;&gt;\n    (function (doc, win) {\n      var docEl = doc.documentElement,\n        resizeEvt = &#39;orientationchange&#39; in window ? &#39;orientationchange&#39; : &#39;resize&#39;,\n        recalc = function () {\n          var clientWidth = docEl.clientWidth;\n          docEl.style.fontSize = 100 * (clientWidth \u002F 750) + &#39;px&#39;;\n        };\n      if (!doc.addEventListener) {\n        return;\n      }\n      win.addEventListener(resizeEvt, recalc, false);\n      doc.addEventListener(&#39;DOMContentLoaded&#39;, recalc, false);\n      recalc()\n    })(document, window)\n&lt;\u002Fscript&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E该代码段监听页面尺寸改变事件，根据对应窗口大小(clientWidth)除以一个基准(750),进而调整html的font-size。在本例下，375的屏幕中1rem=50px。\u003C\u002Fp\u003E\n\u003Ch3 id=\"22-css方案\"\u003E2.2 CSS方案\u003C\u002Fh3\u003E\n\u003Cp\u003E采用媒体查询，适配不同宽度，代码略。\u003C\u002Fp\u003E\n\u003Ch2 id=\"vue配置px自动转rem\"\u003EVue配置px自动转rem\u003C\u002Fh2\u003E\n\u003Ch3 id=\"postcss-plugin-px2rem介绍\"\u003Epostcss-plugin-px2rem介绍\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EA plugin for PostCSS that generates rem units from pixel units.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E也就是说，使用该插件可以自动的将你写px单位转为rem单位，而且不用担心污染问题，因为可以设置选择黑名单。\u003C\u002Fp\u003E\n\u003Ch3 id=\"安装postcss-plugin-px2rem\"\u003E安装postcss-plugin-px2rem\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode\u003Eyarn add postcss-plugin-px2rem\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"配置\"\u003E配置\u003C\u002Fh3\u003E\n\u003Cp\u003E待补充\u003C\u002Fp\u003E\n\u003Ch3 id=\"总结\"\u003E总结\u003C\u002Fh3\u003E\n\u003Cp\u003E该方法只适用于对于不同屏幕的屏幕显示相同的比例，对于那些内容式网站则要避免使用该方法。此时，用户选择更多屏幕的目的不是为了看到更大的字体，而是希望能够看到更多的内容。\u003C\u002Fp\u003E\n\u003Ch2 id=\"参考文献\"\u003E参考文献\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fimweb.io\u002Ftopic\u002F5a523cc0a192c3b460fce3a5\"\u003E简单粗暴的移动端适配方案 - REM\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});