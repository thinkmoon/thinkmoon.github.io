__NUXT_JSONP__("/post/932", {data:[{article:"\u003Cblockquote\u003E\n\u003Cp\u003E前言：最近在网络上发现了几位跟我使用同一头像的朋友，更加刺激了我想要制作一个专属头像的想法。然后我就想到了使用一些业界知名开源软件来制作一个属于我的专属头像的想法。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"介绍\"\u003E介绍\u003C\u002Fh2\u003E\n\u003Cp\u003E一款视频换脸的开源软件\u003C\u002Fp\u003E\n\u003Ch2 id=\"deepfacelab下载\"\u003Edeepfacelab下载\u003C\u002Fh2\u003E\n\u003Cp\u003E源代码地址\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fiperov\u002FDeepFaceLab\"\u003Edeepfacelab\u003C\u002Fa\u003E,可在项目的readme页面下载window环境的执行文件，最让人舒服的是，它帮我们解决了环境问题。我唯一需要解决的环境问题，就是安装显卡驱动（如果有显卡的话）\u003C\u002Fp\u003E\n\u003Ch2 id=\"安装\"\u003E安装\u003C\u002Fh2\u003E\n\u003Cp\u003E安装文件是个exe文件，双击运行会进行解压。解压后文件大致如下，根目录是一些批处理命令。workspace是工作区，放一些源文件和目标文件视频，而_internal则存放着一些环境相关文件，如Vs code，cuda， python等，所谓贴心至极，莫过于此。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-10-25T12:32:22.png\" alt=\"2020-10-25T12:32:22.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"使用\"\u003E使用\u003C\u002Fh2\u003E\n\u003Cp\u003E如它贴心的环境依赖一般的容易使用，你甚至只需要点击几个文件文件，再敲几个回车，就可以完成AI换脸的全过程。大致可分为五个过程\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E视频抽帧\u003C\u002Fli\u003E\n\u003Cli\u003E人脸提取\u003C\u002Fli\u003E\n\u003Cli\u003E训练模型\u003C\u002Fli\u003E\n\u003Cli\u003E合成模型\u003C\u002Fli\u003E\n\u003Cli\u003E生成视频\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"效果展示\"\u003E效果展示\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-10-25T12:40:19.png\" alt=\"2020-10-25T12:40:19.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"贴心小技巧\"\u003E贴心小技巧\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003E一定要记得把aligned里面的质量差的人脸在训练前删除\u003C\u002Fli\u003E\n\u003Cli\u003E由于dst是全帧抽取，而视频合成则是以60帧每秒合成，如果原dst没有60帧，则会出现音画不同步的情况\u003C\u002Fli\u003E\n\u003Cli\u003E换脸后适当提高图片锐度，会极高的提高换脸清晰度\u003C\u002Fli\u003E\n\u003Cli\u003E建议将mask_blur_modifier调至150左右以提升换脸真实性\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n"}],fetch:{},mutations:void 0});