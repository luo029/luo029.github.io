---
title: hugo折腾记
date: 2024-02-10T22:50:32+08:00
tags:
  - hugo
categories: 
draft: false
---
## 0. 换行
	时间：2024.2.10
### 问题：
在 Typora 中能够正确显示的连续两行

```powershell
Hello
World
```


hugo上显示：

```powershell
Hello World
```
### 原因
根据 [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax#p) 文档，当从源码输出为 HTML 时，换行符（软换行）不会被转换为 `<br />` （硬换行），如果要插入硬换行，你需要在行尾输入两个（或更多）空格。

根据 [GitHub Flavored Markdown Spec](https://github.github.com/gfm/#hard-line-breaks) 文档，要插入硬换行，你还可以在行尾输入 \ 或者直接输入 `<br />` 。

### 解决  
hugo的硬换行默认关闭。
https://gohugo.io/getting-started/configuration-markup/#configure-markup

在`hugo.toml`中添加
```powershell
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      hardWraps = true
```


## 1. 评论
	时间：2024.2.14
主题是nostyleplease，所用评论系统是[giscus](https://github.com/giscus/giscus).

具体操作：
```powershell
将 giscus 提供的<script>标签内容做对应配置后插入到 layouts/posts/single.html 的</article> 这一行后面
```