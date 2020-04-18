---
title: （二）本机生成ssh公钥
date: '2020-4-12 23:23'
tags: 公钥
categories: Hexo
cover: >-
  http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=http%3A%2F%2Fpic2.zhimg.com%2Fv2-f9654b817205f6af3e472af284ecc2b2_1200x500.jpg&thumburl=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1051132835%2C1344326547%26fm%3D26%26gp%3D0.jpg
abbrlink: 3139128020
---



# 检查本机公钥

**本机前提要有git和node.js环境，不懂的可以参考我的本地搭建hexo的帖子**

桌面鼠标右键使用git bash打开git面板

```
cd ~/.ssh
```

- 如果提示：No such file or directory 说明你是第一次使用git。
- 如果不是第一次使用，请执行下面的操作,清理原有ssh密钥。

## 清理公钥

```
$ mkdir key_backup$ cp id_rsa* key_backup$ rm id_rsa*
```

# 生成新的密钥

```
ssh-keygen -t rsa -C "1763692346@qq.com"
```

在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入。

直接一路回车就好

![](https://pic.downk.cc/item/5e932528c2a9a83be5511821.png)

# 查看本机密匙

在C:\Users\高冷的男神\.ssh下的id_rsa.pub里

![](https://pic.downk.cc/item/5e9325a4c2a9a83be55177a7.png)

- `d_rsa`是你这台电脑的私人秘钥
- `id_rsa.pub`是公共秘钥