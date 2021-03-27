__NUXT_JSONP__("/post/209", {data:[{article:"\u003C!--markdown--\u003E## rpx单位\n\u003Cblockquote\u003E\n\u003Cp\u003Erpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。要实现4:3的展示则可以\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003Eimage{\n    width:750rpx;\n    height:563rpx;\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"使用组件库，写的css样式优先级太低\"\u003E使用组件库，写的css样式优先级太低\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E不管三七二十一，加\u003Ccode\u003E!important\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003E.findButton {\n  width:300px !important;\n  height:35px !important;\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"样式各种飘，不居中怎么办\"\u003E样式各种飘，不居中怎么办?\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-html\"\u003E&lt;view class=&quot;nickName&quot;&gt;\n  &lt;view&gt;{{userInfo.nickName}}&lt;\u002Fview&gt;\n&lt;\u002Fview&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003E.nickName {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 44px;\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"selectedcolor无效\"\u003EselectedColor无效\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EselectedColor  和 list 是同级别的。写在list数组外面就可以了。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"背景虚化\"\u003E背景虚化\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Eblur中的参数是虚化比例\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003Efilter: blur(1px);\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"scroll-view设置scroll-x也不会横向滚动\"\u003E\u003Ccode\u003Escroll-view\u003C\u002Fcode\u003E设置`scroll-x&quot;也不会横向滚动\u003C\u002Fh2\u003E\n\u003Cp\u003E要给scroll-view加上white-space: nowrap; ，给scroll-view的子元素box加上display:inline-block;\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});