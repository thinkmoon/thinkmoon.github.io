__NUXT_JSONP__("/post/528", {data:[{article:"\u003C!--markdown--\u003E![live2d-widget-model-chitose][1]\n\u003Cp\u003E我们平常访问某些网站的时候,会发现在网站上总是悬浮者一个可爱的小人.而且还可以跟用户进行各种互动(说话?).\n一般这种小人都是通过js加载出来的, 搜索关键词网上有教程. 不过我今天在这里记录的是,如何添加2.5D互动小人\u003C\u002Fp\u003E\n\u003C!-- more --\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E平台: hexo + hexo-plugins(live2d-widget-models)\n同时也支持jekyll, wordpress, etc.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"安装\"\u003E安装\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo npm install --save hexo-helper-live2d\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"项目github地址\"\u003E项目github地址\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxiazeyu\u002Flive2d-widget-models\"\u003Ehttps:\u002F\u002Fgithub.com\u002Fxiazeyu\u002Flive2d-widget-models\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"然后在_configymlhexo或者主题的都行中添加\"\u003E然后在_config.yml(hexo或者主题的都行)中添加\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-yml\"\u003Elive2d:\n  enable: true\n  scriptFrom: local\n  model:\n    use: live2d-widget-model-wanko \u002F\u002F使用的模型名,下面会详细讲\n  display: \u002F\u002F如果觉得默认定位不满意可在此微调,bottom\n    position: right\n    width: 150\n    height: 300\n    bottom:-30\n  mobile:\n    show: true\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"自定义模型的使用点我\"\u003E自定义模型的使用\u003Ca href=\"https:\u002F\u002Fgithub.com\u002FEYHN\u002Fhexo-helper-live2d\u002Fblob\u002Fmaster\u002FREADME.zh-CN.md\"\u003E点我\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\n\u003Ch2 id=\"hexo下现有模型的安装\"\u003Ehexo下现有模型的安装\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Enpm install {packagename}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E安装示例\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo npm install live2d-widget-model-chitose\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"最新版现有模型测试与预览\"\u003E最新版现有模型测试与预览\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EOK, 这是重点[哭笑不得], \n现实效果是会动的, 由于截gif过于麻烦, 我就只好截屏了. 现实效果绝对比这帅.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"live2d-widget-model-chitose\"\u003Elive2d-widget-model-chitose\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520649793712.jpg\" alt=\"live2d-widget-model-chitose\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E唔, 这是一个美少年. 比较适合女生. 我就不用这个了.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"live2d-widget-model-epsilon2_1\"\u003Elive2d-widget-model-epsilon2_1\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520650098369.jpg\" alt=\"live2d-widget-model-epsilon2_1\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E一个夏装妹子, 比较适合宅男\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"live2d-widget-model-gf\"\u003Elive2d-widget-model-gf\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520650344036.jpg\" alt=\"live2d-widget-model-gf\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E一个卡通人物(废话), 很炫酷\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"live2d-widget-model-haru\"\u003Elive2d-widget-model-haru\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E这个模型需要两点注意, \u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Col\u003E\n\u003Cli\u003E它的安装方式是\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Enpm install live2d-widget-model-haru\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E模型的使用却是\nuse:  live2d-widget-model-haru\u002F01 或者\nuse: live2d-widget-model-haru\u002F02\n这是因为他这个包里有两个模型的原因\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Col start=\"2\"\u003E\n\u003Cli\u003E它在子模型下的json文件是空的,\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E所以你要将\u002F博客路径\u002Fnode_modules\u002Flive2d-widget-model-haru\u002Fpackage.json复制进01, 02 文件夹.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch4 id=\"live2d-widget-model-haru01\"\u003Elive2d-widget-model-haru\u002F01\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520651227707.jpg\" alt=\"live2d-widget-model-haru\u002F01\"\u003E\u003C\u002Fp\u003E\n\u003Ch4 id=\"live2d-widget-model-haru02\"\u003Elive2d-widget-model-haru\u002F02\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520651346521.jpg\" alt=\"live2d-widget-model-haru\u002F02\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-haruto\"\u003Elive2d-widget-model-haruto\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520651513850.jpg\" alt=\"live2d-widget-model-haruto\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-hibiki\"\u003Elive2d-widget-model-hibiki\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520651678626.jpg\" alt=\"live2d-widget-model-hibiki\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E吐槽一句, 这位同学太高了,已经把我电脑屏幕高快全占了\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"live2d-widget-model-izumi\"\u003Elive2d-widget-model-izumi\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520651875989.jpg\" alt=\"live2d-widget-model-izumi\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-koharu\"\u003Elive2d-widget-model-koharu\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520651983137.jpg\" alt=\"live2d-widget-model-koharu\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E是不是有些熟悉? 这妹妹跟haruto是情侣啊!\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"live2d-widget-model-miku\"\u003Elive2d-widget-model-miku\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652150254.jpg\" alt=\"live2d-widget-model-miku\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-ni-j\"\u003Elive2d-widget-model-ni-j\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652261768.jpg\" alt=\"live2d-widget-model-ni-j\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-nico\"\u003Elive2d-widget-model-nico\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652378111.jpg\" alt=\"live2d-widget-model-nico\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-nietzsche\"\u003Elive2d-widget-model-nietzsche\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652485684.jpg\" alt=\"live2d-widget-model-nietzsche\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-nipsilon\"\u003Elive2d-widget-model-nipsilon\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652604333.jpg\" alt=\"live2d-widget-model-nipsilon\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-nito\"\u003Elive2d-widget-model-nito\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652707543.jpg\" alt=\"live2d-widget-model-nito\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-shizuku\"\u003Elive2d-widget-model-shizuku\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652801662.jpg\" alt=\"live2d-widget-model-shizuku\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-tororo\"\u003Elive2d-widget-model-tororo\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652903977.jpg\" alt=\"live2d-widget-model-tororo\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-tsumiki\"\u003Elive2d-widget-model-tsumiki\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520652987458.jpg\" alt=\"live2d-widget-model-tsumiki\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-unitychan\"\u003Elive2d-widget-model-unitychan\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520653074078.jpg\" alt=\"live2d-widget-model-unitychan\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-wanko\"\u003Elive2d-widget-model-wanko\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520653136634.jpg\" alt=\"live2d-widget-model-wanko\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"live2d-widget-model-z16\"\u003Elive2d-widget-model-z16\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2018_3\u002F1520653226268.jpg\" alt=\"live2d-widget-model-z16\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"总结\"\u003E总结\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E我把官网所有的模型都装了一次, 最后发现一个规律, 那就是模型妹子偏多. 看来技术宅喜欢动漫少女的说法基本正确. 由于我装了一个多小时的模型, 已经对此有些反感了, 所以就保留最后一个不换了. 想看效果的可以电脑端访问\u003Ca href=\"https:\u002F\u002Fwww.thinkmoon.cn\"\u003Ehttps:\u002F\u002Fwww.thinkmoon.cn\u003C\u002Fa\u003E 看效果\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"mobile-的值决定了在手机端是否显示\"\u003Emobile 的值决定了在手机端是否显示\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E由于显示会影响阅读,我这儿设为false \u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n"}],fetch:{},mutations:void 0});