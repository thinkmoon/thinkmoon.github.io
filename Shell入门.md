---
title: Shell入门 
tags: 笔记
---
> 本文诞生原因：作为一个程序员，居然不会shell，说起来也尴尬。

## 基本格式
```shell
#!/bin/bash
...
```

## Shell变量
1. Shell变量定义不需要关键字，直接定义，不要加$。如`name = "hello"`
2. Shell变量使用的时候需要加$, 花括号为可选项，但是为了让程序可以分清边界，一般使用花括号。如`echo ${name}`
