__NUXT_JSONP__("/post/606", {data:[{article:"\u003Ch2 id=\"效果展示\"\u003E效果展示\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002Flist.gif\" alt=\"列表顺序加载动画\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E本文会讲述如何使用scss\u002Fsass在微信小程序中实现列表顺序加载的动画。\u003C\u002Fp\u003E\n\u003Ch2 id=\"所用的css特性\"\u003E所用的css特性\u003C\u002Fh2\u003E\n\u003Ch3 id=\"css-animations\"\u003ECSS animations\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003ECSS animations 使得可以将从一个CSS样式配置转换到另一个CSS样式配置。动画包括两个部分:描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E相较于传统的脚本实现动画技术，使用CSS动画有三个主要优点：\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E能够非常容易地创建简单动画，你甚至不需要了解JavaScript就能创建动画。\u003C\u002Fli\u003E\n\u003Cli\u003E动画运行效果良好，甚至在低性能的系统上。渲染引擎会使用跳帧或者其他技术以保证动画表现尽可能的流畅。而使用JavaScript实现的动画通常表现不佳（除非经过很好的设计）。\u003C\u002Fli\u003E\n\u003Cli\u003E让浏览器控制动画序列，允许浏览器优化性能和效果，如降低位于隐藏选项卡中的动画更新频率。\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E\u003Ccode\u003Ecss animations\u003C\u002Fcode\u003E的属性和子属性见\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FCSS\u002FCSS_Animations\u002FUsing_CSS_animations#%E9%85%8D%E7%BD%AE%E5%8A%A8%E7%94%BB\"\u003Ehttps:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FCSS\u002FCSS_Animations\u002FUsing_CSS_animations#%E9%85%8D%E7%BD%AE%E5%8A%A8%E7%94%BB\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E可主要分为两大部分，动画的实现形式和动画的属性规则。\u003C\u002Fp\u003E\n\u003Cp\u003E以下仅列出本文所用的属性。\u003C\u002Fp\u003E\n\u003Ch3 id=\"animation-timing-function\"\u003Eanimation-timing-function\u003C\u002Fh3\u003E\n\u003Cp\u003Eanimation-timing-function 规定动画的速度曲线。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-04T03:58:02.png\" alt=\"速度曲线\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"animation-delay\"\u003Eanimation-delay\u003C\u002Fh3\u003E\n\u003Cp\u003E顾名思义，设置动画的持续时间，单位秒\u003C\u002Fp\u003E\n\u003Ch3 id=\"animation-fill-mode\"\u003Eanimation-fill-mode\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Eanimation-fill-mode 属性规定动画在播放之前或之后，其动画效果是否可见。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-04T04:02:50.png\" alt=\"animation-fill-mode\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"使用keyframes定义动画序列\"\u003E使用keyframes定义动画序列\u003C\u002Fh3\u003E\n\u003Cp\u003Ekeyframes就是一个描述关键帧的属性，通过使用@keyframes建立两个或两个以上关键帧来实现。每一个关键帧都描述了动画元素在给定的时间点上应该如何渲染。\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E因为动画的时间设置是通过CSS样式定义的，关键帧使用percentage来指定动画发生的时间点。0%表示动画的第一时刻，100%表示动画的最终时刻。因为这两个时间点十分重要，所以还有特殊的别名：from和to。这两个都是可选的，若from\u002F0%或to\u002F100%未指定，则浏览器使用计算值开始或结束动画。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"示例\"\u003E示例\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003E@keyframes list {\n        0% {\n            transform: scale(0);\n        }\n\n        100% {\n            transform: scale(1);\n        }\n    }\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E如上代码所示，定义了一个@keyframe名字叫list，在动画开始时使用缩放0%，结束时缩放100%。那么它在整个动画的过程中，便会根据浏览器的性能展示一个从0%-100%渐变的动画。是不是根据有点意思？当然，你也可包含设置任何额外可选的关键帧，描述动画开始和结束之间的状态，比如45%。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002Fanimation.gif\" alt=\"animation.gif\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E至此我们已经实现了组件显示时逐渐放大的效果\u003C\u002Fp\u003E\n\u003Ch2 id=\"所用的scss特性\"\u003E所用的scss特性\u003C\u002Fh2\u003E\n\u003Cp\u003E以下为简介，详细内容请转至官方文档\u003C\u002Fp\u003E\n\u003Ch3 id=\"嵌套规则-nested-rules\"\u003E嵌套规则 (Nested Rules)\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Escss\u002FSass允许将一个 CSS 样式嵌套进另一个样式中，内层样式仅适用于外层样式的选择器范围内。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"引用父选择器\"\u003E引用父选择器:&amp;\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E你可以 &amp; 字符来明确地表示插入指定父选择器。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"变量-（variables--）\"\u003E变量: $（Variables: $ ）\u003C\u002Fh3\u003E\n\u003Cp\u003E以美元符开头，可当变量使用。\u003C\u002Fp\u003E\n\u003Ch3 id=\"mixin混入指令-mixin-directives\"\u003E@mixin混入指令 (Mixin Directives)\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E混入(mixin)允许您定义可以在整个样式表中重复使用的样式，而避免了使用无语意的类（class），比如 .float-left。混入(mixin)还可以包含所有的CSS规则，以及任何其他在Sass文档中被允许使用的东西。\n他们甚至可以带arguments，引入变量，只需少量的混入(mixin)代码就能输出多样化的样式。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"插值：（interpolation-）\"\u003E插值：#{}（Interpolation: #{}）\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E你可以通过 #{} 插值语法在选择器和属性名中使用 SassScript 变量：\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"for\"\u003E@for\u003C\u002Fh3\u003E\n\u003Cp\u003E顾名思义，循环，要留意一下\u003Ccode\u003Eto\u003C\u002Fcode\u003E和\u003Ccode\u003Ethrough\u003C\u002Fcode\u003E的区别\u003C\u002Fp\u003E\n\u003Ch3 id=\"引用混合样式include-（including-a-mixin-include）\"\u003E引用混合样式:@include （Including a Mixin: @include）\u003C\u002Fh3\u003E\n\u003Ch2 id=\"实现方式\"\u003E实现方式\u003C\u002Fh2\u003E\n\u003Cp\u003Ewxml文件\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-xml\"\u003E&lt;view class=&quot;list__item&quot;&gt;\n&lt;view&gt;...&lt;\u002Fview&gt;\n&lt;\u002Fview&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E编译前的scss\u002Fsass\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003E    .list {\n        &amp;__item {\n            animation: list 1s ease both;\n        }\n    }\n\n    @keyframes list {\n        0% {\n            transform: scale(0);\n        }\n\n        100% {\n            transform: scale(1);\n        }\n    }\n\n    @mixin item($num) {\n        $waitTime: ($num)*0.2;\n        animation-delay: #{$waitTime}s;\n    }\n\n    @for $i from 1 through 7 {\n        .list__item:nth-child(#{$i}) {\n            @include item($i);\n        }\n    }\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003Eless版\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003E\u002F\u002F list动画\n    .list__item {\n        animation: list .8s ease both\n    }\n\n    @keyframes list {\n        0% {\n            transform: scale(0);\n        }\n\n        100% {\n            transform: scale(1);\n        }\n    }\n\n    .generate-columns(7);\n\n    .generate-columns(@n, @i: 1) when (@i =&lt; @n) {\n        .list__item:nth-child(@{i}) {\n            animation-delay: @i * 0.2;\n        }\n\n        .generate-columns(@n, (@i + 1));\n    }\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E编译后的css\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003E.list__item {\n  -webkit-animation: list 1s ease both;\n          animation: list 1s ease both;\n}\n@-webkit-keyframes list {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes list {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n.list__item:nth-child(1) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.list__item:nth-child(2) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.list__item:nth-child(3) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.list__item:nth-child(4) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.list__item:nth-child(5) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.list__item:nth-child(6) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.list__item:nth-child(7) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002Flist.gif\" alt=\"列表顺序加载动画效果展示\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"参考资料\"\u003E参考资料\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FCSS\u002FCSS_Animations\u002FUsing_CSS_animations\"\u003E使用CSS动画\u003C\u002Fa\u003E\n\u003Ca href=\"https:\u002F\u002Fwww.w3school.com.cn\u002Fcssref\u002Fpr_animation-timing-function.asp\"\u003ECSS3 animation-timing-function 属性\u003C\u002Fa\u003E\n\u003Ca href=\"https:\u002F\u002Fwww.sasscss.com\u002Fdocs\u002F\"\u003Esass中文文档\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});