---
title: hugo折腾记
date: 2024-02-10T22:50:32+08:00
tags:
  - hugo
categories: 
draft: false
---
## 0. 换行
	时间：2024.2.10/2.14
### 问题：
源码模式：
```powershell
Hello
World
```
渲染后（并未完成换行）：
```powershell
Hello World
```
### 原因
根据 [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax#p) 文档，当从源码输出为 HTML 时，换行符（软换行）不会被转换为 `<br />` （硬换行），如果要插入硬换行，你需要在行尾输入两个（或更多）空格。

根据 [GitHub Flavored Markdown Spec](https://github.github.com/gfm/#hard-line-breaks) 文档，要插入硬换行，你还可以在行尾输入 \ 或者直接输入 `<br />` 。

### 解决  
hugo 的硬换行默认关闭。
https://gohugo.io/getting-started/configuration-markup/#configure-markup

在`hugo.toml`中添加
```powershell
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      hardWraps = true
```

或者：

使用 typora 编辑，换行时会自动空出一行。

使用 obsidian 编辑，使用插件 easy typing，插件的配置中，有一个“一次回车产生两个换行符”的选项，打开即与 typora 相同。

## 1. 评论
	时间：2024.2.14
主题是nostyleplease，所用评论系统是[giscus](https://github.com/giscus/giscus).

具体操作：
```powershell
将 giscus 提供的<script>标签内容做对应配置后插入到 layouts/posts/single.html 的</article> 这一行后面
```
## 2. jsDelivr+picgo，加速 github 图床
默认是 github 图床，通过 picgo 将图片上传到 github.

鉴于太慢，使用 jsDelivr 加速图片访问地址。

在 picgo 配置中，修改自定义域名即可。

- 设定自定义域名：此处直接设置 jsDelivr 加速的访问地址，例如本人是：`https://cdn.jsdelivr.net/gh/luo029/blogimage@main`

- `gh` 表示来自 Github 的仓库
- `/luo029/blogimage` 仓库的具体位置
- `main` 仓库的分支
  