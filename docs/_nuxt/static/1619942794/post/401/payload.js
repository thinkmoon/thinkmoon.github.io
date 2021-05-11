__NUXT_JSONP__("/post/401", (function(a,b,c){return {data:[{article:{cid:401,title:"centos下supervisor的使用笔记",slug:"401",created:c,modified:c,text:"\u003C!--markdown--\u003E\u003E supervisor是一个守护进程工具\r\n\r\n## 安装\r\n```\r\nyum install -y supervisor\r\n```\r\n\r\n## 配置\r\n\u003E 安装后会生成如下内容\r\n\r\n![2019-09-03T02:33:19.png][1]\r\n\r\n我们查看一下`\u002Fetc\u002Fsupervisord.conf`,发现文件最后一行\r\n\r\n![2019-09-03T02:39:38.png][2]\r\n\r\n这就是在提示我们把配置文件写`supervisord.d`目录下的`ini`文件里。\r\n\r\n### 创建配置文件\r\n1. 首先切换到`supervisord.d`目录\r\n2. touch frps.ini\r\n3. nano frps.ini\r\n4. 复制以下内容(示例为运行frps服务端)\r\n```\r\n[program:frps]\r\nuser=root\r\ncommand=\u002Froot\u002Ffrp\u002Ffrps\u002Ffrps -c \u002Froot\u002Ffrp\u002Ffrps\u002Ffrps.ini\r\nstartsecs=1\r\nstartretries=100\r\nautorstart=true\r\nautorestart=true\r\nstderr_logfile=\u002Ftmp\u002Ferr-frps.log\r\nstderr_logfile_maxbytes=50MB\r\nstderr_logfile_backups=10\r\nstdout_logfile=\u002Ftmp\u002Fout-frps.log\r\nstdout_logfile_maxbytes=50MB\r\nstdout_logfile_backups=10\r\n```\r\n\r\n### tips\r\n```\r\nsupervisorctl status \u002F\u002F查看状态\r\nsupervisorctl reload \u002F\u002F重载配置文件\r\n```\r\n\r\n## 运行\r\n```\r\nsupervisorctl reload\r\nsupervisord -c \u002Fetc\u002Fsupervisord.conf\r\n```\r\n然后再配置好开机自启就OK了\r\n\r\n\r\n  [1]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-09-03T02:33:19.png\r\n  [2]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-09-03T02:39:38.png",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:585,likes:2}}],fetch:{},mutations:void 0}}(0,"1",1567478839)));