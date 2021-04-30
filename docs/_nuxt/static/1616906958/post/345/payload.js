__NUXT_JSONP__("/post/345", {data:[{article:"\u003Ch2 id=\"百度定义\"\u003E百度定义\u003C\u002Fh2\u003E\n\u003Cp\u003EDNS欺骗就是攻击者冒充域名服务器的一种欺骗行为。 \u003C\u002Fp\u003E\n\u003Ch2 id=\"百度原理\"\u003E百度原理\u003C\u002Fh2\u003E\n\u003Cp\u003E如果可以冒充域名服务器，然后把查询的IP地址设为攻击者的IP地址，这样的话，用户上网就只能看到攻击者的主页，而不是用户想要取得的网站的主页了，这就是DNS欺骗的基本原理。DNS欺骗其实并不是真的“黑掉”了对方的网站，而是冒名顶替、招摇撞骗罢了。\u003C\u002Fp\u003E\n\u003Ch2 id=\"为什么会有dns欺骗？\"\u003E为什么会有DNS欺骗？\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E其实DNS欺骗不能叫欺骗，为什么这么说，因为dns解析采取就近原则，意思是说谁能先帮我解析我就听谁的。给你解析一个假的ip就是欺骗。例如本来\u003Ca href=\"http:\u002F\u002Fwww.baidu.com\"\u003Ewww.baidu.com\u003C\u002Fa\u003E 对应ip是202.16.25.78    ，你在本地架设一个dns服务器将\u003Ca href=\"http:\u002F\u002Fwww.baidu.com\"\u003Ewww.baidu.com\u003C\u002Fa\u003E 解析为192.168.100.2 , 这不就等于骗了别人吗。\u003Ca href=\"https:\u002F\u002Fblog.csdn.net\u002Fqq_38228830\u002Farticle\u002Fdetails\u002F81989301\"\u003E【1】\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"如何防护dns欺骗？\"\u003E如何防护DNS欺骗？\u003C\u002Fh2\u003E\n\u003Cp\u003E360安全卫士号称可以，防护DNS欺骗\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T02:36:57.png\" alt=\"2019-07-03T02:36:57.png\"\u003E\n经实测：DNS防护并未防护成功，而局域网防护却可以找出攻击者IP，和伪装后的DNS服务器IP。但是却无法实际性的抵御DNS攻击。\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T12:32:20.png\" alt=\"2019-07-03T12:32:20.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"被攻击后如何恢复？\"\u003E被攻击后如何恢复？\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003E改host文件。\u003C\u002Fli\u003E\n\u003Cli\u003E指定DNS服务器。\u003C\u002Fli\u003E\n\u003Cli\u003E开代理\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"如何发起攻击？\"\u003E如何发起攻击？\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E申明：以下目的只有一个就是学习技术，如果有人利用本文技术进行非法操作带来的后果都是操作者自己承担，和本文以及本文作者没有任何关系。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"本文环境\"\u003E本文环境\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Ccode\u003Ewin10 + vmware + kali-linux-2019-02\u003C\u002Fcode\u003E\n其实新一代的win10预览版升级的WSL2已经兼容了很多linux网络设备相关操作了，比如\u003Ccode\u003ENmap\u003C\u002Fcode\u003E之类的。但是因为WSL的网络连接方式只有\u003Ccode\u003ENAT\u003C\u002Fcode\u003E模式，这样就不利于我测试了，所以我使用的是vmware虚拟机运行KALI，网络模式如下\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T06:21:37.png\" alt=\"2019-07-03T06:21:37.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"1-查看网络\"\u003E1. 查看网络\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Eifconfig\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T06:24:03.png\" alt=\"2019-07-03T06:24:03.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E由上图可以看到，有两个网络连接，一个\u003Ccode\u003Eeth0\u003C\u002Fcode\u003E有线连接，一个\u003Ccode\u003Elo\u003C\u002Fcode\u003E无线设备。因为我装了外置网卡，所以虚拟机下有无线连接。\n确保你已经连上你想要攻击的目标网络。\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T06:26:36.png\" alt=\"2019-07-03T06:26:36.png\"\u003E\n因为我使用的是有线连接，所以我接下来的操作都是在eth0上操作。\u003C\u002Fp\u003E\n\u003Ch3 id=\"2-修改dns文件\"\u003E2. 修改DNS文件\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode\u003Evim \u002Fetc\u002Fettercap\u002Fetter.dns\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T06:28:59.png\" alt=\"2019-07-03T06:28:59.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E熟悉host文件的小伙伴一看就明白，这一条条都是DNS解析记录嘛。\u003C\u002Fp\u003E\n\u003Cp\u003E我们在文件最后追加\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E* A 192.168.0.131\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E这句话的意思就是，将所有的域名都解析到IP地址为\u003Ccode\u003E192.168.0.131\u003C\u002Fcode\u003E的主机上。而这个是我的kali的本机ip。\u003C\u002Fp\u003E\n\u003Ch3 id=\"3-发起dns欺骗\"\u003E3. 发起DNS欺骗\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode\u003Eettercap -Tq -i eth0 -M arp:remote -P dns_spoof \u002F\u002F\u002F \u002F\u002F\u002F\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E参数就不解释啦\u003Ccode\u003E--help\u003C\u002Fcode\u003E就都知道啦，我只讲思路。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T06:34:45.png\" alt=\"2019-07-03T06:34:45.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E如上图DNS欺骗就已经开始了。\u003C\u002Fp\u003E\n\u003Ch3 id=\"4-局域网断网攻击\"\u003E4. 局域网断网攻击\u003C\u002Fh3\u003E\n\u003Cp\u003E因为上面我将所有的域名地址都解析到了，我的本机IP。而我本地却没有搭建任何web服务，这个时候如果用户访问网站都会出现如下图效果。\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T06:37:21.png\" alt=\"2019-07-03T06:37:21.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E由于浏览器DNS缓存的问题，此方式可能短期内对近期访问过的网站不起作用。\u003C\u002Fp\u003E\n\u003Ch3 id=\"5-针对特定网站攻击\"\u003E5. 针对特定网站攻击\u003C\u002Fh3\u003E\n\u003Cp\u003E假如我对百度很有意见，我见不惯别人使用百度。\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Evim \u002Fetc\u002Fettercap\u002Fetter.dns\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E那么我可以将dns文件修改为\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E*.baidu.com A 192.168.0.131\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E这样只要别人访问百度就会出现\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T06:37:21.png\" alt=\"2019-07-03T06:37:21.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E但是这样有个问题，这样攻击久了，是个人都会觉得奇怪。百度这么大的公司怎么会长时间访问不了呢？\u003C\u002Fp\u003E\n\u003Ch3 id=\"6-针对特定网站搭建空壳网站\"\u003E6. 针对特定网站搭建空壳网站\u003C\u002Fh3\u003E\n\u003Cp\u003E为了避免被别人怀疑，我需要搭建一个空壳百度。\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E首先浏览器下载百度首页。\u003C\u002Fli\u003E\n\u003Cli\u003E搭建一个静态网站，展示百度首页。\u003C\u002Fli\u003E\n\u003Cli\u003E执行DNS欺骗\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E然后就会出现以下效果\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T07:05:08.png\" alt=\"2019-07-03T07:05:08.png\"\u003E\n为了区别是我搭建的，我把百度一下改成了小度一下。\n但是细心的小伙伴会发现，左上的\u003Ccode\u003Ehttps\u003C\u002Fcode\u003E变成了红色不安全字样，这是因为我搭建的web服务签不了\u003Ccode\u003Ewww.baidu.com\u003C\u002Fcode\u003E证书的原因。我只是随便签了一个HTTPS证书。\u003C\u002Fp\u003E\n\u003Ch3 id=\"7-针对某些局域网认证上网的账号密码钓鱼\"\u003E7. 针对某些局域网认证上网的账号密码钓鱼\u003C\u002Fh3\u003E\n\u003Cp\u003E截止目前，我们已经做到了断掉了局域网的网络，并将所有网站跳转至搭建网站的效果。看到这里，有没有觉得很熟悉？对了，妥妥的需认证网络的操作。\n接下来我们以\u003Ccode\u003E家里蹲大学\u003C\u002Fcode\u003E的校园网认证系统为例，模拟一个\u003Ccode\u003E搭建钓鱼校园网认证系统并盗取密码\u003C\u002Fcode\u003E的过程。\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E第一步：扒下家里蹲大学认证首页的网页文件\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T07:27:53.png\" alt=\"2019-07-03T07:27:53.png\"\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E第二步：搭建钓鱼网站\u003C\u002Fli\u003E\n\u003Cli\u003E第三步：拦截局域网所有DNS解析请求，将所有网站解析到搭建的钓鱼网站。\u003C\u002Fli\u003E\n\u003Cli\u003E第四步：修改表单信息的提交地址\u003C\u002Fli\u003E\n\u003Cli\u003E第五步：写一个接收表单数据的接口\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3 id=\"8-模拟中招过程\"\u003E8. 模拟中招过程\u003C\u002Fh3\u003E\n\u003Cp\u003E陈小美吃完饭，到图书馆坐下，想刷会微博。突然发现，微博上不去了。显示的是\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T08:51:32.png\" alt=\"2019-07-03T08:51:32.png\"\u003E\n对于这个界面，小美一点都不陌生。因为这是即将学校的校园网的认证系统的前兆。小美熟练的输入账号密码。一点也不知道接下来即将发生什么。\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T09:20:29.png\" alt=\"2019-07-03T09:20:29.png\"\u003E\n然而，在小美提交账号密码的那一刻，我收到了一个好东西。\n\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-07-03T10:08:28.png\" alt=\"2019-07-03T10:08:28.png\"\u003E\n接下来就是开始表演的时候，我用她的账号登录了以下网站。\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E学籍信息，看到了她的照片，知道了她的手机号，QQ号，名字，家住何处，家里多少成员，家庭年收入多少，哪个高中毕业。以此来筛选是否符合择偶要求。\u003C\u002Fli\u003E\n\u003Cli\u003E教务处，知道了她大几，什么专业，学分绩点多少，选修了什么课程。以此来判断是否有共同的兴趣爱好。\u003C\u002Fli\u003E\n\u003Cli\u003E图书馆，了解他是否热爱阅读，喜欢什么类型的书籍。来判断是否处得来。\u003C\u002Fli\u003E\n\u003Cli\u003E饭卡消费记录，以此来判断她的消费水平，以及她喜欢在哪里吃饭。来判断是否养得起。\u003C\u002Fli\u003E\n\u003Cli\u003E校园论坛，了解她的世界观与价值观，以及是否是个谈吐优雅的女子。判断能否一起面对生活。\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E然后：我加了她的QQ，以小师弟寻求帮助的名义加了她，先混个脸熟。接着，我开始在QQ空间发一些符合她世界观和价值观的说说，以此来获取她的共鸣。我知道她可能不看QQ空间，但是我保持着几乎每周一次的个性签名更新。并且在个性签名更新后的1-12个小时内随机（使用C++生成随机数）找她聊关于她在图书馆所看书籍的一些想法（我猜她会感兴趣）。这样我可以保证无论她使用哪个平台哪个版本的QQ都可以看到，在她心中种下一颗我是一个与她灵魂相似的人的种子。学期末，我知道她选了什么课程，这门课程什么时候考试。这是一门大学恶梦课程，我知道她肯定要去图书馆复习，所以我借共同复习借口约了她去图书馆。之后的时间，我间歇性的约她去图书馆，因为我深知要想被女生喜欢，千万不可表现过度。一定要保持一个较为舒适的距离，为这颗种子慢慢浇水。但在不约她的时间里，我也会在食堂“偶遇”她，之所以说是“偶遇”，因为我已经对她的饮食习惯分析得一清二楚。几次过后，她会觉得和我好有缘。而其实。。。偶然之中必有必然。我甚至比她还要了解她的习惯，喜好。她觉得我很贴心^-^，但是我到现在还没有告诉她，为什么我们会遇见。看似上天的安排，实则是我的安排。我不去想是否会赢得爱情，既然钟情于玫瑰，就要勇敢的吐露真诚。或许，这便是一种成熟吧！\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});