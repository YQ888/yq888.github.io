---
title: 解决tomcat日志乱码
date: 2020-4-10
categories: 常见bug
tags: tomcat
declare: true
cover: >-
  http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=http%3A%2F%2Fpic1.zhimg.com%2Fv2-cee6c3d6990ba049a700ceb059d77d93_1200x500.jpg&thumburl=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2080030236%2C4239738931%26fm%3D26%26gp%3D0.jpg
abbrlink: 3306406959
---





![](https://pic.downk.cc/item/5e8fdd9d504f4bcb04283ff8.png)

在tomcat目录下的conf，打开logging.properties文件在底部添加以下语句

```
java.util.logging.ConsoleHandler.encoding = GBK
```

![](https://pic.downk.cc/item/5e8fde28504f4bcb0428c3e8.png)