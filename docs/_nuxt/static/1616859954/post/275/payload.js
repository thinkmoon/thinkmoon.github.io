__NUXT_JSONP__("/post/275", {data:[{article:"\u003C!--markdown--\u003E## 前言\n\u003Cp\u003E为什么要使用wsl来配置呢？因为我个人感觉这个比较方便，不用安装一堆包。直接敲命令就好。\u003C\u002Fp\u003E\n\u003Ch2 id=\"准备工作\"\u003E准备工作\u003C\u002Fh2\u003E\n\u003Cp\u003E安装好Clion后，打开toolchain是这样的。\n\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F03\u002F3388117114.png\" alt=\"2019-03-28T01:51:00.png\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E前提是先装好wsl\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"选择wsl-toolchain\"\u003E选择wsl toolchain\u003C\u002Fh2\u003E\n\u003Cp\u003E会出现下面这个情况\n\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F03\u002F3588185930.png\" alt=\"2019-03-28T01:52:22.png\"\u003E\n这是因为wsl没有配置ssh服务\u003C\u002Fp\u003E\n\u003Ch2 id=\"配置wsl的ssh\"\u003E配置wsl的ssh\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-bash\"\u003Esudo vi \u002Fetc\u002Fssh\u002Fsshd_config\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E把密码认证的no改为yes\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003EPasswordAuthentication yes\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"restart-ssh\"\u003Erestart ssh\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode\u003Esudo service ssh restart \n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E如果出现以下提示\n\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F03\u002F1786204809.png\" alt=\"2019-03-28T02:15:33.png\"\u003E\n则需要生成key\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Esudo dpkg-reconfigure openssh-server\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"查看ssh运行状态\"\u003E查看ssh运行状态\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode\u003Eservice ssh status\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"configure-remote-credentials\"\u003Econfigure remote credentials\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F03\u002F827550189.png\" alt=\"2019-03-28T02:00:48.png\"\u003E\n\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F03\u002F3808045947.png\" alt=\"2019-03-28T02:16:37.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"配置编译环境\"\u003E配置编译环境\u003C\u002Fh2\u003E\n\u003Cp\u003E在wsl里面执行\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Esudo apt-get install build-essential gcc g++ cmake gdb\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F03\u002F4186950507.png\" alt=\"2019-03-28T05:16:09.png\"\u003E\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});