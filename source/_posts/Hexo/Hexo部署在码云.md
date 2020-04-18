---
title: Hexo部署在码云
date: '2020-3-22 23:23'
tags: 部署
categories: Hexo
cover: >-
  http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=http%3A%2F%2Fpic2.zhimg.com%2Fv2-f9654b817205f6af3e472af284ecc2b2_1200x500.jpg&thumburl=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1051132835%2C1344326547%26fm%3D26%26gp%3D0.jpg
abbrlink: 599829822
---

在本地搭建好博客后我们需要把博客部署在服务器上，这里没有购买服务器的情况下，就暂时部署在码云或者github上也是可以滴。如果之前部署过github的童鞋应该很快就上手了，都差不多的。这里就没有配置本地公钥了。直接使用是http链接方式

<!--more-->

- **github** ：github的page服务也很方便，但是部署了之后会发现访问很慢（github国外网站的原因），并且github不接收百度的seo收录。
- **码云** ：国内的，所以访问会快一些，需要**每次上传版本后手动部署**（免费），如果**自动部署或者是自定义域名需要一年99块钱**。

# 码云静态部署博客

前提要有码云的账号，这个就不多说了。

注册ok后就点击新建仓库，用来存放本地上传的博客

![](https://pic.downk.cc/item/5e917313504f4bcb04890bb4.png)

然后对仓库进行相应的配置

![](https://pic.downk.cc/item/5e917324504f4bcb048919ad.png)

创建仓库后，点击克隆/下载复制好你的仓库网址

![](https://pic.downk.cc/item/5e917337504f4bcb04892967.png)

在打开你的博客的根目录的_config.yml_找到deploy配置如下，这里需要注意，冒号是英文的冒号，冒号后必须要空格，引号可加可不加

![](https://pic.downk.cc/item/5e917347504f4bcb04893686.png)

```
deploy:
  type: 'git'
  repo: 你刚才复制的目录
  branch: master
```

最后在博客目录下用gitbash运行打开git面板，输入代码来安装安装hexo-deployer-git模块

```
npm install hexo-deployer-git --save
```

![](https://pic.downk.cc/item/5e91735c504f4bcb04894696.png)

安装好后，在git面板上输入git g -d就可以通过git把博客部署在码云了

```
git g -d
```

# 源码托管部署码云（防止更换电脑电脑）

## 创建托管环境

### 新建仓库

![](https://pic.downk.cc/item/5e9272e2c2a9a83be5d74833.png)

### 引入源码仓库地址

桌面新建文件夹

1. 用git bash打开新建文件夹
2. 在新建的仓库中复制地址

![](https://pic.downk.cc/item/5e927482c2a9a83be5d8e7c1.png)

git面板使用复制:鼠标右键paste

在git 面板里使用以下命令然后回车

```
git clone 复制的网址
```

![](https://pic.downk.cc/item/5e9274dcc2a9a83be5d94628.png)

### 复制git目录

打开新建文件夹，里面会有仓库的上传地址，然后复制.git文件目录

![](https://pic.downk.cc/item/5e927528c2a9a83be5d9994b.png)

把.git目录复制到本地博客目录下

![](https://pic.downk.cc/item/5e92785ac2a9a83be5dd08ce.png)

- public: 静态文件目录
- node_modules：hexo底层文件目录
- scaffolds：我也不知道，没分析
- source：源码目录，存放博客或者页面配置目录
- .gitignore：git过滤文件
- themes：主题文件
- _config.yml：hexo的配置文件
- 下面几个json就不要深究了，没意义了，反正也不做改动的

### 编辑.gitignore

使用文本工具打开该文件。

.gitignore存放的是过滤文件，在此文档中的文件，是不会被上传的，这里需要删除public,因为部署的时候需要将码云的page定位到上传的public目录

> public目录:存放的hexo生成的静态文件也就是hexo g命令生成的静态目录

.gitignore配置：

```
.DS_Store
Thumbs.db
*.log
node_modules/
.deploy*/
```

![](https://pic.downk.cc/item/5e927696c2a9a83be5db3048.png)

## 上传博客到码云仓库

1. 使用git bash打开博客目录

2. 使用hexo g 生成静态目录public

3. 使用git add . 将blog要上传的文件提交到缓存。这里我理解的是暂时提交到计算机内存里，不知道这理解对不对 （add 和.有个空格的）

   ```
   git add .
   ```

4. 使用git commit-m （提交解释） 例如如下代码：

   ```
   git commit-m  部署博客
   ```

5. 使用git push提交文件，第一次提交如果文件较多或者较大或者网速不好，会比较慢。

![](https://pic.downk.cc/item/5e9278eec2a9a83be5dd9c09.png)

## 使用码云page部署博客

打开码云仓库点击服务，然后选择pages

![](https://pic.downk.cc/item/5e92793fc2a9a83be5ddf87c.png)

分支不变，这里还是只用了一个主分支master

部署目录选择/public

建议使用枪支https这样会降低网站报红

![](https://pic.downk.cc/item/5e9279a7c2a9a83be5de7461.png)

然后点击生成的域名，就直接映射到静态网页了。

## 以后部署博客

1. 直接用git bash打开博客目录，
2. 先hexo clean删除public静态文件以及缓存
3. 然后使用hexo g生成public
4. 使用git add .
5. 使用git commit -m 说明（必须要有说明才能使用git push）
6. 使用git push
7. 打开码云 找到博客仓库，找到服务 pages 然后直接点击更新，等待1分钟就部署成功
8. 如果更换了电脑，直接git clone仓库源码就可以了。也可以直接下载仓库zip