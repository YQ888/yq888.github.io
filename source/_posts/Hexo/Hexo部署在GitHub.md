---
title: Hexo部署在GitHub并设置自己的域名
date: '2020-3-22 23:23'
tags: 部署
categories: Hexo
cover: >-
  http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=http%3A%2F%2Fpic2.zhimg.com%2Fv2-f9654b817205f6af3e472af284ecc2b2_1200x500.jpg&thumburl=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1051132835%2C1344326547%26fm%3D26%26gp%3D0.jpg
abbrlink: 2617511586
---

# 新建仓库

创建一个和你用户名相同的仓库，**后面加.github.io**，只有这样，将来要部署到GitHub page的时候，才会被识别

```
yq888.github.io
```

> 假如我没有用yq888.github.io`而是用了`mungo.github.io`，那么当我浏览器访问博客的时候会出现404错误。这里并不是没有部署成功，而是把它部署在了这里:`http://yq888.github.io/mungo.github.io`。所以，如果想直接`yq888.github.io`访问，那么就需要和用户名保持一致。

yq888：我的github用户名

![](https://pic.downk.cc/item/5e93224ac2a9a83be54f4923.png)

# 设置公钥

**本机公钥生成详情参考我的本机公钥博客**

1. 在仓库里找到设置（settings）
2. 然后点击部署密匙（Deploy keys）
3. 点击添加密匙（add deploy keys）

![](https://pic.downk.cc/item/5e932714c2a9a83be5529436.png)

标题随便写

内容就是在C:\Users\高冷的男神\.ssh下的id_rsa.pub里的内容

# **部署到GitHub**

## 配置_config文件

这配置的是博客根目录的_config

```
deploy:
  type: 'git'
  repository:
    github: git@github.com:YourgithubName/YourgithubName.github.io.git,master
    branch: master   
```

**YourgithubName就是你的GitHub账户**

这个时候需要先安装deploy-git ，也就是部署的命令,这样你才能用命令部署到GitHub。

```
npm install hexo-deployer-git --save
```

## 开始部署

```
hexo clean
hexo generate 也可以 hexo g
hexo deploy	  也可以hexo d
```

- hexo clean 也可以 hexo cl:清理缓存
- hexo generate 也可以 hexo g：生成静态资源
- hexo deploy	  也可以hexo d：部署

过**一会儿**就可以在`http://yourname.github.io` 访问你的博客了

# 配置域名

## 申请域名

这里就不介绍了，详情百度，建议阿里云购买，腾讯云也可以

如果有域名了就不多说了。这里就直接去购买域名的地方去解析域名

## 得到仓库ip



这里可以cmd本地ping一下你的.io域名

```
ping yq888.github.io
```

![](https://pic.downk.cc/item/5e9a9edbc2a9a83be5910571.png)

也可以使用[ip查询](http://ip.tool.chinaz.com/)，复制你的.io域名进行查询

这里的ip都能用，解析的时候随便选取一个就行

![](https://pic.downk.cc/item/5e9a9fa9c2a9a83be591d4e7.png)

## 解析域名

如果没有实名记得实名

打开购买域名的网址，这里我就使用腾讯云做演示

![](https://pic.downk.cc/item/5e9aa3f3c2a9a83be59606dd.png)



## 测试公钥

**如果没有配公钥请往上翻**

测试我们添加的SSH是否成功，在终端输入：ssh -T git@github.com。如果出现以下信息，则添加成功：

![img](https://upload-images.jianshu.io/upload_images/6955515-c1f8f79a897bcb1a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1130)

## CNAME配置

桌面新建CNAME文件，不要后缀

在该文件里写入你的域名。例如我的：

```
yuxiaoshao.top
```

把cname放入博客根目录的source文件夹下，然后hexo cl，hexo g,hexo deploy

之后就可以通过域名访问了

# 多分支构建博客（防止更换电脑电脑）

## 分支构建

1. 在刚才的仓库里新建一个分支![](https://pic.downk.cc/item/5e97c2e6c2a9a83be52ab7dd.png)

2. 在仓库里找setting，也就是仓库设置，找到左边菜单栏分支选项（第二个branches点击mast![](https://pic.downk.cc/item/5e97c31dc2a9a83be52ad279.png)

   

3. 分支创建直接找到仓库master（主分支那里）搜索一下分支名。点击该下拉框底部按钮就可创建。这里创建一个名字为source的分支![](https://pic.downk.cc/item/5e97c391c2a9a83be52b0622.png)

## 引入源码仓库地址

我这里使用简单粗暴的方式

左面新建一个文件夹。用git bash打开，直接输入git clone 仓库地址，也可以下载仓库文件

![](https://pic.downk.cc/item/5e97c4ffc2a9a83be52bae2b.png)

在gitbash里输入

```
git clone https://github.com/YQ888/yq888.github.io.git
```

然后复制该文件夹里的.git文件，（记打开隐藏文件），将.git粘贴到博客根目录

## 上传

```
#部署静态页面
hexo cl
hexo deploy
#上传博客源码
git add
git commit -m  说明
git push 
```

# jsd加速