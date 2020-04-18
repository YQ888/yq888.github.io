---
title: hexo部署coding并配置自己的域名
data: 2020-4-15
tags: 部署
categories: Hexo
cover: >-
  http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=http%3A%2F%2Fpic2.zhimg.com%2Fv2-f9654b817205f6af3e472af284ecc2b2_1200x500.jpg&thumburl=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1051132835%2C1344326547%26fm%3D26%26gp%3D0.jpg
abbrlink: 3292414775
---

注册都不说了哈，这个简单，不会自己百度

我也是第一次用coding，以前都是用的码云和GitHub，又因为coding最近都成为团队版，网上很多资料都不能用了，然后弄了半天部署号，实属有点菜，好滴，话不多说，开始干。我这里是部署的静态资源哈，源码我还是放在码云上，毕竟coding不是很熟悉

<!--more-->









# 创建仓库

这里可以使用第一个也可以使用第三个，使用第一个需要打开部署功能，第三个已经打卡了。这里我还是使用第一个把

![](https://pic.downk.cc/item/5e96f273c2a9a83be5b91584.png)

在设置仓库名的时候，随意吧，但还是要有象征意义

![](https://pic.downk.cc/item/5e96f313c2a9a83be5b993b2.png)

## 功能开关

左下角团队管理，然后选中项目与成员->功能开关，这里直接把网页缩小，滚动鼠标。然后添加集成和部署

![](https://pic.downk.cc/item/5e96f3acc2a9a83be5ba0aaf.png)

![](https://pic.downk.cc/item/5e96f3b3c2a9a83be5ba10a3.png)

# ssh公钥配置

点击头像，选中个人设置，点击ssh公钥，选择添加，这里复制本地公钥，详情查看我本地ssh生成的博客

![](https://pic.downk.cc/item/5e96f451c2a9a83be5ba84ce.png)

![](https://pic.downk.cc/item/5e96f45ac2a9a83be5ba89f4.png)

![](https://pic.downk.cc/item/5e96f463c2a9a83be5ba903b.png)

# 博客配置

复制博客的地址，这里因为配置了ssh公钥，就直接使用ssh连接。

打开项目，代码仓库，右上角克隆，复制ssh连接，把该链接粘贴在如下代码处

打开博客更目录的_config.yml_设置deploy:如下

```
deploy:
  type: 'git'
  repository:
    coding: git@e.coding.net:ybb-888/blog.git,master
```

# 上传

```
hexo cl
hexo g
hexo deploy # 如果提示没有git 执行npm install hexo-deployer-git --save
```

然后刷新coding仓库，查看是否有文件，这里都是博客源码里的public里的静态文件

# 部署coding的pages

点击左侧持续部署，静态网站，这里需要实名，实名后直接拆创建静态网页

![](https://pic.downk.cc/item/5e96f6b2c2a9a83be5bc6514.png)

根据提示设置，然后保存

部署

点击部署，在点击访问地址，就可以访问该静态网页了。到这里静态页面就部署结束了

![](https://pic.downk.cc/item/5e96f72ac2a9a83be5bcbc8a.png)



# coding使用域名

## 查询page的ip

打开如下网址，复制刚才访问地址，然后解析ip

> http://ip.tool.chinaz.com/

![](https://pic.downk.cc/item/5e96f7d6c2a9a83be5bd50d1.png)

这里已经得到了我的”服务器ip“了。

## 域名解析

打开你购买域名的网站，我是在阿里购买的 。

添加解析记录：

1. 记录类型为A，主机记录为@，解析线路选择默认，记录值为生成Coding Pages的IP地址（刚才查询到的）
2. 记录类型为CNAME，主机记录为www，解析线路选择**默认**，记录值为你 Hexo 项目所部署到 Coding Pages 的访问地址，我的是[http://99p7s5.coding-pages.com](http://99p7s5.coding-pages.com/)

![](https://pic.downk.cc/item/5e96f966c2a9a83be5be8a01.png)

如果添加不来，就百度阿里域名解析操作。

## coding配置

在静态网页页面，点击右上角设置

![](https://pic.downk.cc/item/5e96fa49c2a9a83be5bf451a.png)

滚动到下面，添加你的域名，例如我先添加带有www.yuxiaoshao.cn 然后再添加 yuxiaoshao.cn这里换成你的域名就ok

![](https://pic.downk.cc/item/5e96fa57c2a9a83be5bf4ef7.png)

然后点击首先域名，选中没有www的，然后在上面表格里勾选带有www的（跳转至首先）

然后直接使用你的域名就可以访问该静态页面了

# 以后的部署

1. 直接本地hexo cl 
2. hexo g
3. hexo deploy