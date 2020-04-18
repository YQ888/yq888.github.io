---
title: 解决VMWare中CentOS设置静态IP后SSH登录过慢问题（同样适用于Ubuntu）
tags: ssh
data: '2020-4-9 23:00'
categories: 常见bug
cover: >-
  https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2Fd93b5dee9241c23517a33266fd2a7f62.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100&thumburl=https%3A%2F%2Fss2.bdstatic.com%2F70cFvnSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D3233351354%2C1016707686%26fm%3D26%26gp%3D0.jpg
abbrlink: 1988406376
---

**修改ssh配置文件**

```
vi /etc/ssh/sshd_config
```

**使用:/命令语句找到UseDNS**

```
:/UseDNS
```

**修改为：**

```
UseDNS = no
```

![](https://pic.downk.cc/item/5e8f41a0504f4bcb049e0ed0.png)

![](https://pic.downk.cc/item/5e8f4204504f4bcb049e7a1f.png)

**重启ssh服务：**

```
systemctl restart sshd.service
```

