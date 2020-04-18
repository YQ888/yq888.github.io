---
title: linux启动（重启）防火墙systemctl unmask firewalld
categories: 常见bug
tags: 防火墙
date: 2020-4-10
cover: >-
  https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Ftimgsa.baidu.com%2Ftimg%3Fimage%26quality%3D80%26size%3Db9999_10000%26sec%3D1586602611441%26di%3Dfafa0b02447e097869bd7e72ea183472%26imgtype%3D0%26src%3Dhttp%253A%252F%252Fpicture.ca800.com%252FEditorFile%252F201902%252F25%252Fwater_201902251801121562.png&thumburl=https%3A%2F%2Fss2.bdstatic.com%2F70cFvnSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D1635998864%2C2795318938%26fm%3D26%26gp%3D0.jpg
abbrlink: 3137458103
---

![](https://pic.downk.cc/item/5e86ebaa504f4bcb04afd5d3.png)

输入一下代码，原因是进程被锁住了。我之前是卡了一下，然后强制重启了linux

> systemctl unmask firewalld

然后 启动防火墙就可以了

```
systemctl start firewalld	#启动防火墙

systemctl status firewalld	#查看防火墙状态
```

