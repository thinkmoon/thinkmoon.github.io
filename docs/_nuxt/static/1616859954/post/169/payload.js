__NUXT_JSONP__("/post/169", {data:[{article:"\u003C!--markdown--\u003E---\n\u003Cp\u003Elayout: post\ntitle: 推荐一个（神器级）服务器软件\ntags:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E服务器软件推荐\u003C\u002Fli\u003E\n\u003Cli\u003E宝塔linux面板\u003C\u002Fli\u003E\n\u003Cli\u003E服务器管理工具\ncategories:\u003C\u002Fli\u003E\n\u003Cli\u003E软件推荐\nabbrlink: f4f7\ndate: 2017-12-15 18:41:56\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Chr\u003E\n\u003Cp\u003E简单好用的 Linux\u002FWindows 面板\u003C\u002Fp\u003E\n\u003C!-- more --\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E前言:首先要说的是，它在我看来就是一件神器！\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E何为神器？ 那就是以后遇到必装 ，而且在没有遇到更神的神器之前，将会一直使用下去。\u003C\u002Fp\u003E\n\u003Cp\u003E如果你是新手：使用它：你可以不再为配置ftp，apache，mysql，ssl，等操作而发愁了，因为，所有的操作，在此神器的帮助下，都可以在你的点点戳戳之间实现，不得不拍案叫绝！\u003C\u002Fp\u003E\n\u003Cp\u003E如果你是大佬：使用它，你可以不用自己配环境，找配置文件，对着黑框框，一对一下午了（当然如果对黑框框有特殊情怀的除外)\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E它的名字叫——“宝塔”\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"它是什么\"\u003E它是什么\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E它是一个，服务器面板控制端软件\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"它能干什么\"\u003E它能干什么\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E它可以让你把一些基本的服务器操作转移到网站上的可视化操作,例如站点管理，服务管理，子网站管理，端口管理，服务器监控等\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"我们该如何使用它\"\u003E我们该如何使用它\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E咳咳，这是我想说的重点，接下来我将使用它傻瓜式的搭建一个支持https，支持ftp的站点。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E使用环境: 服务器提供商-腾讯云\n服务器系统: Centos 6.6(64位纯净版)\n操作客户端：win 10企业版（1709）\nSSH连接软件：MobaXterm Personal Edition（也是一大神器）\n日期时间：2017年12月15日\u003C\u002Fp\u003E\n\u003Ch3 id=\"1ssh连接服务器\"\u003E1.ssh连接服务器\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513329147442.jpg\" alt=\"连接服务器\" title=\"enter description here\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"2安装宝塔软件\"\u003E2.安装宝塔软件\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-bash\"\u003Eyum install -y wget &amp;&amp; wget -O install.sh http:\u002F\u002Fdownload.bt.cn\u002Finstall\u002Finstall.sh &amp;&amp; sh install.sh\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E仅支持32位系统\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"安装成功后是这样的\"\u003E安装成功后是这样的\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513329457838.jpg\" alt=\"宝塔Linux面板安装成功\" title=\"enter description here\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E在这儿它说\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E控制面板链接为：\u003Ca href=\"http:\u002F\u002F119.28.73.46:8888\"\u003Ehttp:\u002F\u002F119.28.73.46:8888\u003C\u002Fa\u003E\n用户： admin\n密码：5bbdeb4c\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"3登陆控制面板\"\u003E3.登陆控制面板\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513329709110.jpg\" alt=\"宝塔linux面板登录页面\" title=\"登录页面\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E输入账号和密码登录\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"登录成功之后是这样子的\"\u003E登录成功之后是这样子的\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513329886058.jpg\" alt=\"宝塔linux面板登录成功提示\" title=\"登录成功提示\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E选择一个你喜欢的环境安装就好啦\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"我在这儿选择lnmp安装包\"\u003E我在这儿选择LNMP安装包\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513329973383.jpg\" alt=\"宝塔linux面板安装进度\" title=\"enter description here\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E静候安装就好了\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"安装成功是这样子的\"\u003E安装成功是这样子的\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513332275811.jpg\" alt=\"宝塔linux面板软件安装\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"4添加网站\"\u003E4.添加网站\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513332347669.jpg\" alt=\"宝塔linux面板添加网站\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E填写信息并提交，添加成功后\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"访问你刚刚设置的域名\"\u003E访问你刚刚设置的域名\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513332535030.jpg\" alt=\"宝塔linux面板网站访问\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E到此为止，一个网站就搭建成功了，网站内容可以使用你刚刚设置的ftp访问。以下是ssl证书的设置\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"打开网站管理设置ssl\"\u003E打开网站管理&gt;设置&gt;SSL\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E注：我这儿使用的是腾讯云为我分发的有效期为一年的免费证书，详情见腾讯云的ssl证书，以下操作默认为你已拥有此类证书。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513332649259.jpg\" alt=\"宝塔linux面板网站SSL设置\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E2018.9.1更新：现在已经支持Let&#39;s Ecrypt 了，可以不用腾讯云ssl证书了\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E选择其他证书&gt;将证书内容复制到此处，为了隐私就不截图了\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513332974910.jpg\" alt=\"宝塔linux面板网站SSL证书\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E设置成功后，我们可以看到\n\u003Cimg src=\"https:\u002F\u002Fwww.github.com\u002Fthinkmoon\u002Fpic\u002Fraw\u002Fmaster\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1513333118843.jpg\" alt=\"宝塔linux面板网站SSL\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"end\"\u003E:END\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E到此为止，你已经可以成功了搭建了一个支持https，而且强制跳转https的网站了，是不是有种神器在手，天下我有的错觉呢?\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n"}],fetch:{},mutations:void 0});