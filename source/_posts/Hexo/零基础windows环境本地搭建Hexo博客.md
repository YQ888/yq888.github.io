---
tags: Hexo搭建
title: （一）零基础windows环境本地搭建Hexo博客
categories: Hexo
declare: true
cover: >-
  http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=http%3A%2F%2Fpic2.zhimg.com%2Fv2-f9654b817205f6af3e472af284ecc2b2_1200x500.jpg&thumburl=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1051132835%2C1344326547%26fm%3D26%26gp%3D0.jpg
abbrlink: 743675268
data: 2020-03-11 00:00:00
---



 Hexo是基于node.js制作的一个博客工具。它是一个静态页面生成和上传的工具。也就说，Hexo是个纯静态的网站。至于为何会选中Hexo呢，主要 还是因为它的主题样式多，官方的主题都有200多种。

这里是Hexo在本地安装，暂时不需要部署到我们的服务器上。（如果需要部署的童鞋，可以看我后面的博客）

我们只需要在本地通过markdown也可以通过Typora（个人推荐使用）编写文章，然后让Hexo帮我们生成静态的html页面，并通过Hexo将生成的html文件上传到我们的服务器。

# 安装Node.js

> https://nodejs.org/zh-cn/

下载Windows (x64)长期支持版 Long Term Support (LTS) schedule。按提示逐步安装即可。

![8cAjKJ.png](https://s1.ax1x.com/2020/03/20/8cAjKJ.png)



安装完成后打开cmd查看版本号验证是否安装成功

```
C:\Users\高冷的男神>node -v
v12.16.1
```

Node.js中自带了npm包管理工具，在cmd中查看npm版本。

```
C:\Users\高冷的男神>npm -v
6.13.4
```

# 安装git

git是一个版本控制工具，国外镜像下载巨慢，没有耐心的我告辞。

## 下载git

> 官网：https://git-scm.com/download/](https://git-scm.com/download/)

这里推荐使用我的网盘连接资源

> 链接：https://pan.baidu.com/s/19SaJtW7WkF542RCjZAMHaA 
> 提取码：wsn9

如果网盘资源还是觉得慢，就前往淘宝 Git for Windows 镜像下载 git 安装包，

> https://npm.taobao.org/mirrors/git-for-windows/
>
> 版本随意，都是windows环境的git安装包，选择.1后缀的路径，在根据电脑配置，选择Git前缀然后选择-32或者-64位的，

实在实在还是不会，就自行百度

![86zq3R.png](https://s1.ax1x.com/2020/03/20/86zq3R.png)



## 安装git

直接点击install，然后跟着节奏走。一路的next

[![8cFkvj.png](https://s1.ax1x.com/2020/03/20/8cFkvj.png)](https://imgchr.com/i/8cFkvj)

## 检测是否安装好了git

（1）桌面鼠标右键:如果有git gui和git	bash就ok了

[![8ck71e.png](https://s1.ax1x.com/2020/03/20/8ck71e.png)](https://imgchr.com/i/8ck71e)

（2）在cmd中输入 git  --version

![8cA91g.png](https://s1.ax1x.com/2020/03/20/8cA91g.png)



# 搭建hexo博客

## 安装hexo

### 安装Hexo

在桌面鼠标右键打开git bash here

在git面板中输入

```
npm install -g hexo-cli
```

-g：全局安装

结果如图

[![8c1BrV.png](https://s1.ax1x.com/2020/03/20/8c1BrV.png)](https://imgchr.com/i/8c1BrV)

在查看hexo版本（检测是否安装成功）

```
$ hexo -v
```

结果如图

[![8c1oVO.png](https://s1.ax1x.com/2020/03/20/8c1oVO.png)](https://imgchr.com/i/8c1oVO)

这里也说明了hexo是基于node.js开发的 hexo版本是3.1.0的

**注意：如果有需要卸载hexo的情况：可以使用npm uninstall hexo-cli -g来删除hexo3.0以上的版本，之前的版本使用npm uninstall hexo -g**

## 安装hexo服务

Hexo 3.0 把服务器独立成了个别模块，必须先安装 hexo-server 才能使用。

```
npm install hexo-server
```

### 卸载hexo

```
npm uninstall hexo-cli -g
```

结果如图

[![8c8Jpj.png](https://s1.ax1x.com/2020/03/20/8c8Jpj.png)](https://imgchr.com/i/8c8Jpj)

## 搭建博客

在D盘新建Hexo文件用来存放个人博客，进入该文件夹，在Hexo中在新建一个空文件myblog 作为hexo项目（博客）目录

在myblog鼠标右键git bash here打卡git面板对myblog初始化 因为冲github上下载，所以有点小慢，为了解决就把npm设置为淘宝镜像

```
npm config set registry https://registry.npm.taobao.org
```

检查是否修改成功

```
npm config get registry

页面结果：https://registry.npm.taobao.org/
```

如果结果是一淘宝镜像网址，就可以执行init了

```
hexo init
```

实例如图：

![8cv2tJ.png](https://s1.ax1x.com/2020/03/20/8cv2tJ.png)

下载完成后自动在文件中部署项目文件

![8gpI8H.png](https://s1.ax1x.com/2020/03/20/8gpI8H.png)

## 启动博客

在myblogs文件夹下启动hexo服务。这里还是在git面板里操作

```
hexo server 
或者 hexo s
```

操作后如图所示

[![8gloW9.png](https://s1.ax1x.com/2020/03/20/8gloW9.png)](https://imgchr.com/i/8gloW9)

此时在本地打开浏览器，通过 http://localhost:4000/ 便可访问基于Hexo的个人博客主页了。如下图所示：

![8g1iOP.png](https://s1.ax1x.com/2020/03/20/8g1iOP.png)