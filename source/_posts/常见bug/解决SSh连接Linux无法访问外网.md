---
title: 使用ssh连接无法访问外网，但是能访问内网，前提是已经设置了静态ip和使用ipv4连接网络
categories: 常见bug
tags: ssh
cover: >-
  https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2Fd93b5dee9241c23517a33266fd2a7f62.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100&thumburl=https%3A%2F%2Fss2.bdstatic.com%2F70cFvnSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D3233351354%2C1016707686%26fm%3D26%26gp%3D0.jpg
date: 2020-4-10
abbrlink: 3116909338
---



就是ping www.baidu.com 未知名称或服务

打开vm虚拟机找到编辑选项 ，选择虚拟网络编辑器。然后使用编辑静态IP网关，在本机电脑上设置vm的ivp4的ip不和编辑的静态ip网关一致就ok

![](https://pic.downk.cc/item/5e8fe395504f4bcb042d31ce.png)

![](https://pic.downk.cc/item/5e8fe3b0504f4bcb042d419f.png)

![](https://pic.downk.cc/item/5e8fe3b9504f4bcb042d47fa.png)

![](https://pic.downk.cc/item/5e8fe3c3504f4bcb042d4e13.png)

![](https://pic.downk.cc/item/5e8fe3d1504f4bcb042d579a.png)

![](https://pic.downk.cc/item/5e8fe3e2504f4bcb042d61fa.png)

![](https://pic.downk.cc/item/5e8fe3fc504f4bcb042d7159.png)