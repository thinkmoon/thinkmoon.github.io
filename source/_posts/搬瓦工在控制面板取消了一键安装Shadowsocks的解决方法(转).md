---
title: 搬瓦工在控制面板取消了一键安装Shadowsocks的解决方法(转)
date: '2017-04-12 15:25'
tags:
  - 搬瓦工
categories: 笔记
abbrlink: '4656'
---
原文链接:https://www.cnlinode.com/ban_wa_gong_qu_xiao_le_yi_jian_an_zhuang_shadowsocks_zui_xin_ban_wa_gong_ss_jiao_cheng/
由于搬瓦工在控制面板取消了一键安装Shadowsocks，原来的一键安装的教程不适用了，我们重新整理了用SS脚本的安装方式，也非常的简单，下面开始吧



(4月25日更新）经过很多童鞋的反馈，我们知道，不同的产品，搬瓦工后台还是稍微有些差异的，有的没有一键搭建SS快捷方式。所以，我们特意整理了最新的搬瓦工搭建SS的三种方法（详见下文中），无论您搬瓦工后台有没有一键SS功能，都能轻松搭建SS服务。根据您的需要选择，下面开始吧。

第一步、挑选注册适合自己的vps
经过再三选择之后我选择了搬瓦工VPS，我们就以搬瓦工VPS为基础，教大家购买VPS，搭建自己的SS，科学上网。目前搬瓦工VPS机房已经达到7个，分别是New York [USNY_2]，Los Angeles, California (DC1 QNET)，Los Angeles, California (DC2 MCOM)，Fremont, California，Phoenix, Arizona，Jacksonville, Florida，Amsterdam, Netherlands。没有特殊需求下，建议使用洛杉矶（Los Angeles）。常规最低配置$19.99/年，相当于每月1美金多一点。不过经常缺货，需要的要赶机会。



1、选择需要的VPS方案
A、选择年19.99方案（KVM架构），价格最优！

内存：512MB
硬盘：10GB SSD
流量：500GB/月
价格：$2.99/月（年$19.99）
B、如果19.99美元每年的方案缺货，可以选择年$29.99方案（洛杉矶CN2），稳定性更好和国内访问更快。

内存：512MB
硬盘：10GB SSD
流量：500GB/月
价格：年$29.99
C、QNET 特价促销款 20 GB（QNET 39.99方案）
CPU：1 核
内存：1024 MB
硬盘：20 GB SSD
流量：2000 GB / 月
带宽：1 Gbps
机房：仅限 QNET 机房
迁移：不可迁移机房，仅限 QNET 机房
价格：39.99 美元/年

>>年$39.99特价直达通道

以上方案都可以使用搬瓦工优惠码“ BWH1ZBPVK ”节省6%的费用，这是搬瓦工最大的折扣。

2、选择付款周期和机房位置
点击直达链接后，我们会跳转到下图所示的界面。根据图中指示，方案选择年付29.99美金的CN2线路即可，机房位置有洛杉矶的DC3或者DC8机房，默认DC3即可。洛杉矶位于美国西部，国内访问速度相对较快，掉包也比较少。



3、核对价格和填写优惠码
点击 Add to Cart 按钮后，我们会跳转到下图所示界面。根据图中指示，我们首先输入下面的最新优惠码，然后点击 Validate Code 按钮验证优惠码，最后点击 Checkout 按钮继续。

搬瓦工最新可用优惠码：当前我们可以使用优惠码“ BWH1ZBPVK ”节省6%的费用



4、登录或者注册搬瓦工账户
点击 Checkout 按钮后，我们会跳转到下图所示界面。根据图中指示，我们首先填写个人信息，有账户的直接点击 Click here to login 按钮登录。填写完毕后点击 Update 更新，然后选择Alipay付款方式，然后在 I have read and agree the Terms of Service 前面打钩，最后点击 Complete Order 按钮继续。

注意：国家请务必选择China，不要乱选择，这样可以避免以后被暂停服务。



5、使用支付宝付款
点击 Complete Order 按钮后，我们会跳转到下图所示界面。根据图中指示，我们点击 Pay now 按钮继续。



点击 Pay now 按钮后，我们会跳转到下图所示界面。根据下图指示，我们使用手机支付宝扫码付款或者电脑登录支付宝进行付款。

3.png

使用支付宝付款，付完款后，邮箱不久就能收到新的VPS信息，包含root帐号密码  端口号

当然也可以再后台进行操作：点击 My Services 查看VPS

20171114204342_65283.jpg

第二步、开始搭建Shadowsocks
由于之前搬瓦工曾经取消了一键安装Shadowsocks的按钮(部分现已恢复），我们特意给出了三种安装Shadowsocks的方法。方法一和方法二（没有一键安装SS按钮也可以）就是搬瓦工后台一键安装Shadowsocks的方法，更适合小白适用，简单快捷。方法三是采用SSH，用脚本方式安装Shadowsocks，更适合进阶用户使用，或者搬瓦工抽风取消一键安装的时候。还在犹豫什么？选择自己适用的方式，开始吧。

方法一：搬瓦工后台一键安装Shadowsocks（小白适用）
1、进入管理后台，点击进入控制面板



2、找到左侧的Shadowsocks server，出现如下画面，点击安装



3、安装很快，基本不到1分钟就可以完成，出现如下画面，点击返回



4、好了，就可以看到自己的SS信息了。如果想修改，还可以点后面的按钮修改。



以上设置完毕，可以直接跳到第三步，设置SS客户端。

方法二：直接输入网址的一键SS，类似方法一（小白适用）
1、如果后台没有一键SS按钮，我们只需要登陆到搬瓦工后台，然后在浏览器输入如下链接，并回车：

https://kiwivm.64clouds.com/preloader.php?load=/main-exec.php?mode=extras_shadowsocks



然后就可以看到SS安装界面了，如下图



2、点击安装就可以了。安装很快，基本不到1分钟就可以完成，出现如下画面，点击返回



3、好了，就可以看到自己的SS信息了。如果想修改，还可以点后面的按钮修改。



方法三：SSH脚本方式安装Shadowsocks（进阶版用户适用）
1、获取SSH地址、端口和Root密码

搬瓦工购买VPS搭建SS优化实现科学上网教程

点击My Services后我们来到下图界面

搬瓦工购买VPS搭建SS优化实现科学上网教程

这里我们点击KiwiVM Control Panel后我们会跳转到下图界面，找到IP地址和SSH端口，我们还缺少SSH密码



搬瓦工为了用户的安全，要求用户在购买 VPS 后，要自己手动在 KiwiVM 控制面板重置密码，还是在控制面板，如下图。

进入搬瓦工控制面板

面板右侧会显示你的 ssh 用户名（即 ip 地址）和 ssh 登陆端口，在重置密码前，你需要先停止 vps，在控制面板右侧点击 "stop" 键停止 vps：

进入控制面板后查看 ssh 用户名、ssh 登陆端口

然后左侧下方的 "Root password modification" 选项为重置密码，你点击该项，进入如下页面：

重置搬瓦工vps的 root 密码

然后点击 "Generate and set new root password" 按钮重置密码即可：

密码重置成功
重置密码成功后，要记得重新启动 VPS 。这样子才可以使用 xshell 或 putty 等工具进行连接。

2、下载putty开始连接

下载putty：http://pan.baidu.com/s/1jI0T5Fw或者直接在百度搜putty下载解压运行putty.exe，

填入刚才查到的主机地址和端口号，前面图中有介绍，点击打开

如果这里有对话框弹出，选择是，然后在全黑的屏幕上输入 root ，回车。等五秒，按提示输入root的密码，密码就是前面刚刚重置的root密码。

copy你的密码，粘贴至putty（粘贴方式为单击鼠标右键，只需要右键单击一次，这里不会显示任何内容，其实是已经输入了），回车。

3、SSR脚本安装正式开始

等到出现root@host~字样，

复制下面脚本第1条命令，回车：

脚本命令1

wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
（备注：国外服务器运行脚本时容易出错，如出现错误提示 bash: wget: command not found，可以请在先执行 yum -y install wget 命令。成功后，再执行上面的命令。如果没有出现提示错误，请略过）



等出现了上图显示后，输入第2条脚本命令，回车：

脚本命令2

chmod +x shadowsocks-all.sh

等出现了上图显示后，输入第3条脚本命令，回车：

脚本命令3

./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log

出现以上画面，根据需要选择，不懂的话直接选1，或者默认回车
下面会提示你输入你的SS SERVER的密码，和端口。不输入就是默认。跑完命令后会出来你的SS客户端的信息。手把手教你vps搭建属于自己的ss教程，开始科学上网吧（本文利用vultr171014更新 <wbr><wbr>youtube1080p无压力）

输入后，回车！

 特别注意，由于iphone端的的wingy目前只支持到cfb，所以我们选择aes-256-cfb，即7 ，回车

这一步按回车继续
然后需要几分钟的安装过程，请耐心等待出现下面的画面！



请立即copy下来加以保存。

上面的命令全部回车执行后，如果没有报错，即为执行成功，出现确认提示的时候，输入 y 后，回车即可。

安装完成后，脚本提示如下：

Congratulations, Shadowsocks-Python server install completed!
Your Server IP : IP地址
Your Server Port : 端口
Your Password : 密码
Your Encryption Method: aes-256-gcm

Your QR Code: (For Shadowsocks Windows, OSX, Android and iOS clients)
ss://YWVzLTsadsa206YnVkZHkyMDA4QDEwNC4yMjQuMTM1Ldfghdfgk=
Your QR Code has been saved as a PNG file path:
/root/shadowsocks_python_qr.png

Welcome to visit: https://teddysun.com/486.html
Enjoy it!

记录保存好你的上述信息：Server IP、Server Port、Password、Encryption Method

这时你的专属ss已经搭好了，开始使用吧。

第三步、iphone、windows、安卓设置使用
1、iphone下载wingy（免费的），app store里搜wingy（中国app store已经下架，可以换到美国账户下载）

点击选择线路--新增线路--shadowsocks--依次填入刚才记录的信息就好--保存--点击连接就可以了

这样就翻墙成功了

2、windows下载

windows客户端更新（170925）

下载解压缩，运行exe

填入之前记录的自己的服务器信息，点击确定

手把手教你vps搭建属于自己的ss教程，开始科学上网吧（利用vultr，看youtube1080p无压力）

在电脑右下角任务栏找到ss图标，右键点击，点击启用系统代理就可以了，试试上google吧

手把手教你vps搭建属于自己的ss教程，开始科学上网吧（利用vultr，看youtube1080p无压力）

3、android

安卓的客户端可以用ShadowSOCKS（影梭），目前是v4.2.5版本，下载地址如下：

https://github.com/shadowsocks/shadowsocks-android/releases

类似苹果手机，添加配置文件就可以了。

好了，一切都搞定，开始科学上网吧，是不是很简单呢！

