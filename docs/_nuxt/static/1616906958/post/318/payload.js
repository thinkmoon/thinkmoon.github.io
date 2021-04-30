__NUXT_JSONP__("/post/318", {data:[{article:"\u003Cblockquote\u003E\n\u003Cp\u003E本文诞生原因：作为一个程序员，居然不会shell，说起来也尴尬。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"基本格式\"\u003E基本格式\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003E#!\u002Fbin\u002Fbash\n...\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"shell变量\"\u003EShell变量\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003EShell变量定义不需要关键字，直接定义，不要加$。如\u003Ccode\u003Ename = &quot;hello&quot;\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003EShell变量使用的时候需要加$, 花括号为可选项，但是为了让程序可以分清边界，一般使用花括号。如\u003Ccode\u003Eecho ${name}\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch3 id=\"只读变量\"\u003E只读变量\u003C\u002Fh3\u003E\n\u003Cp\u003E在前面加\u003Ccode\u003Ereadonly\u003C\u002Fcode\u003E\n如：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003E#!\u002Fbin\u002Fbash\nname=&quot;Hello&quot;\nreadonly name\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"删除变量\"\u003E删除变量\u003C\u002Fh3\u003E\n\u003Cp\u003E在前面加\u003Ccode\u003Eunset\u003C\u002Fcode\u003E\n变量被删除后不能再次使用。unset 命令不能删除只读变量。\n如：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E#!\u002Fbin\u002Fsh\nname=&quot;Hello&quot;\nunset name\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"shell获取输入\"\u003Eshell获取输入\u003C\u002Fh2\u003E\n\u003Cp\u003Eread - 从标准输入读取数值，命令语法：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Eread: read [-ers] [-a array] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeout] [-u fd] [name ...]\n    从标准输入中读取一行。\n    \n    从标准输入中读取一行, 如果提供 -u 则从文件描述符FD中读取一行。该行数据与单词一样分隔, 第一个单词分给第一个变量，第二个分给第二个变量，依次类推，直至最后一个单词. 只有在$IFS中找到的字符才会被识别为单词分隔符。\n    \n    如果不提供变量，这一行的读取将被存在REPLY变量中。\n    \n    Options:\n      -a 数组    将读取的单词分配给顺序数组，下标从零开始。\n      -d delim    继续读取直到读取DELIM的第一个字符，而不是换行符.\n      -e    use Readline to obtain the line in an interactive shell\n      -i text    use TEXT as the initial text for Readline\n      -n nchars    return after reading NCHARS characters rather than waiting\n            for a newline, but honor a delimiter if fewer than\n            NCHARS characters are read before the delimiter\n      -N nchars    return only after reading exactly NCHARS characters, unless\n            EOF is encountered or read times out, ignoring any\n            delimiter\n      -p prompt    output the string PROMPT without a trailing newline before\n            attempting to read\n      -r    do not allow backslashes to escape any characters\n      -s    do not echo input coming from a terminal\n      -t timeout    time out and return failure if a complete line of\n            input is not read within TIMEOUT seconds.  The value of the\n            TMOUT variable is the default timeout.  TIMEOUT may be a\n            fractional number.  If TIMEOUT is 0, read returns\n            immediately, without trying to read any data, returning\n            success only if input is available on the specified\n            file descriptor.  The exit status is greater than 128\n            if the timeout is exceeded\n      -u fd    read from file descriptor FD instead of the standard input\n    \n    Exit Status:\n    The return code is zero, unless end-of-file is encountered, read times out\n    (in which case it&#39;s greater than 128), a variable assignment error occurs,\n    or an invalid file descriptor is supplied as the argument to -u.\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E不翻译了，反正都是很简单的英语\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});