---
layout: post
title: npm太慢使用淘宝npm镜像
tags:
  - nodejs
categories:
  - 笔记
abbrlink: '7e1'
date: 2018-09-15 00:12:42
---

# 永久使用
```bash
npm config set registry https://registry.npm.taobao.org
```
查看配置是否成功
```bash
npm config get registry
```