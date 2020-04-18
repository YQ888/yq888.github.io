---
title: Linux磁盘管理、系统管理、远程命令、防火墙
categories: Linux学习笔记
data: '2020-4-3 12:00'
tags:
  - Linux
  - 防火墙
declare: true
cover: >-
  https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Ftimgsa.baidu.com%2Ftimg%3Fimage%26quality%3D80%26size%3Db9999_10000%26sec%3D1585833434648%26di%3D632581a435dfab31d58c4100502740af%26imgtype%3D0%26src%3Dhttp%253A%252F%252Ffile.elecfans.com%252Fweb1%252FM00%252F55%252F86%252Fo4YBAFswhj-AUi_xAADrRkEqs8o018.png&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFvXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D3841092341%2C682654896%26fm%3D26%26gp%3D0.jpg
abbrlink: 1517358039
---



# 磁盘管理

> 磁盘管理的好坏直接关系到整个系统的性能问题
>
> 磁盘管理常用的三个命令 df、du和fdisk

## df

**语法：**

```
df [参数] [目录或文件名]
```

- df列出文件系统的整个磁盘使用量
- df命令参数的功能：检查文件系统的磁盘空间占用情况，可以利用该命令来获取磁盘被占用了多少空间，目前还剩下多少空间等信息

**常用参数**

文件 -h，--human-readable：使用人类可读的格式（预设值是不加这个选项的）

**实例**

```
df -h
```

![](https://pic.downk.cc/item/5e85f641504f4bcb04a50dcb.png)

## du

也是查看使用空间的，但是与df命令不同的是，linux du命令是对文件和目录磁盘使用的空间进行查看

**语法**

```
du [参数] [目录或文件名]
```

**常用参数说明**

- -a或-all：显示目录中个别文件的大小
- -h：用人类易读的容量格式（G/M）显示
- -s：列出总量，但是不列出每个个别的目录占用总量

列出目录下所有文件以及文件夹的大小：

```
du -sh ./*
```

列出目录下所有文件以及文件夹和文件夹里面文件的大小：

```
du -ah ./*
```

# 系统管理

## ps

显示当前进程process的状态

```
ps [optios] [--help]
```

**参数**

ps：将某个进程显示出来

- -A：显示所有程序
- -e：此参数的效果-A相同
- -f：显示UID、PPIP、C与STIME栏位

**实例**

查找进程信息中包含MySQL的进程

```
ps -ef | grep mysql
```

## jps

是java自带的命令，的安装jdk才能运行

**语法**

```
jps [optios] [--help]
```

**参数**

- -q：只输入进程ID
- -l：输入完全的报名，应用主类名，jar的完全路径名

**实例**

查找信息中包含Bootstrap的Java进程

```
jps|gerp Bootstrap
```

## kill

删除执行中的进程

语法：

- kill -15 进程id：大部分程序接收到SIGTERM信号后，会先释放自己的资源，然后在停止（默认的方式）
- kill -9 进程id：立即杀死进程，该信号不能被阻塞、处理和忽略

**实例**

查找tomcat进程并关闭

```
ps -ef|grep tomcat
kill -9 查询的pid
```

## top

实时显示process的动态

使用权限：所有使用者（用户）

常用实例

### **安进程的cpu使用率排序**

运行top后，键盘按P

效果如图：

![](https://pic.downk.cc/item/5e869d38504f4bcb042d287b.png)

### **安进程的内存使用率排序**

运行top后，键盘按M

运行图示：

![](https://pic.downk.cc/item/5e869d9d504f4bcb0430150a.png)

### **显示详细目录**

运行top后，键盘按c

### 显示多核cpu详情

运行top后，键盘按1

# 防火墙

防火墙拦截应用程序的端口

```
systemctl status sshd	#查看sshd状态
systemctl status firewalld	#查看防火墙状态
systemctl start firewalld	#启动防火墙
systemctl disable firewalld	#禁用防火墙(重启防火墙生效)
systemctl enable firewalld	#启用防火墙
systemctl restart firewalld	#重启防火墙

Centos6 的防火墙命令
service iptables status|stop|start|restart chkconfig firewalld off|on
```

**查看22端口是否开启**

```
firewall-cmd --permanent --query-port=22/tcp
```

> 返回结果是no，则表示未开启防火墙

**允许外部访问22端口**

```
firewall-cmd --zone=public --add-port=22/tcp --permanent
```

**配置生效**

```
systemctl restart firewalld.service：重启防火墙服务
```

# 关机、重启

1. shutdown -r now ：立刻重启
2. shutdown -r 10：10分钟后自动重启
3. shutdown -r 20:35   ：在时间为20:33的时候重启
4. shutdown -c：取消重启
5. shutdown  now：立即关机
6. shutdown    10:10分钟后自动关机
7. poweroff：立刻关机
8. reboot：重启

# 远程命令

**实例代码**

```
ssh [-l longin_name] [-p port] [user@]hostname
ssh root@192.168.100.120
```

## **ssh免密登录**

- 进入用户的home目录

  ```
  cd /root/.ssh/			root用户就在root目录下的.ssh目录
  cd /home/omd/.ssh/		普通用户在家目录下的.ssh目录
  ```

- 根据dsa算法生成私和公钥【**默认在当前用户的home目录**】

  ```
  ssh-keygen -t dsa  一路回车即可
  id_dsa		私钥（钥匙）
  id_dsa.pub	公钥(锁)
  ```

- 拷贝公钥给目标服务器

  ```
  ssh-copy-id -i id_dsa.pub root@192.168.100.120
  ```

- 查看目标服务器生成的文件

  ```
  ll /home/omd/ .ssh/authorized_keys
  ```

- 免密码登录目标服务器

  ```
  ssh rooot@192.168.100.120
  ```

  

## scp

- 从本地复制到远程

  ```
  scp a.txt root@192.168.100.12:/.data
  ```

- 从远程复制到本地

  ```
  scp root@192.168.100.120:/a.txt ./
  ```

## sftp

安全协议，使用22端口

**1.登录**

```
sftp root@192.168.100.120
```

**2.从远程服务器获取文件**

```
sftp> get -r /data/*			递归获取
Fetching /data/a.txt to a.txt
```

*3.*上传文件到远程服务器**

```
sftp> put b.txt /data
Uploading  b.txt to /data/b.txt
```

**实例:**

使用cmd给linux的根目录下的upload目录（提前新建好文件夹）发送data.txt文件（window内置了sftp）

![](https://pic.downk.cc/item/5e86afb7504f4bcb047e5e39.png)

在linux里查看是否上传成功了

![](https://pic.downk.cc/item/5e86b056504f4bcb047ec5a1.png)

## 使用FlashFXP工具

> 链接：https://pan.baidu.com/s/1FbkzAICg00bLyqSMEaUs5Q 
> 提取码：e9lk 

![](https://pic.downk.cc/item/5e86b0b9504f4bcb047f063f.png)

按需求选择

![](https://pic.downk.cc/item/5e86b0dc504f4bcb047f1d23.png)

### 上传文件

找到你的本地要上传的文件，直接拖到服务器区域

![](https://pic.downk.cc/item/5e86b185504f4bcb047f87fa.png)