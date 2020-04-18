---
title: Linux常用软件（jdk、mysql、redis、tomcat）安装
tags: Linux
categories: Linux学习笔记
declare: true
cover: >-
  https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Ftimgsa.baidu.com%2Ftimg%3Fimage%26quality%3D80%26size%3Db9999_10000%26sec%3D1585833434648%26di%3D632581a435dfab31d58c4100502740af%26imgtype%3D0%26src%3Dhttp%253A%252F%252Ffile.elecfans.com%252Fweb1%252FM00%252F55%252F86%252Fo4YBAFswhj-AUi_xAADrRkEqs8o018.png&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFvXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D3841092341%2C682654896%26fm%3D26%26gp%3D0.jpg
abbrlink: 1973821148
data: 2020-04-11 00:00:00
---

# 网络配置

## 查看网络配置

```
cat /etc/sysconfig/network-scripts/ifcfg-ens33
```

网络配置

```
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="dhcp"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="e9ba6f59-0e58-4d4c-8726-9eef75564060"
DEVICE="ens33"
ONBOOT="yes"
```

## 重启网卡

**测试：**

```
[root@localhost upload]# ping www.baidu.com
PING www.a.shifen.com (14.215.177.39) 56(84) bytes of data.
64 bytes from 14.215.177.39 (14.215.177.39): icmp_seq=1 ttl=128 time=42.9 ms
64 bytes from 14.215.177.39 (14.215.177.39): icmp_seq=2 ttl=128 time=46.4 ms
64 bytes from 14.215.177.39 (14.215.177.39): icmp_seq=3 ttl=128 time=42.5 ms
64 bytes from 14.215.177.39 (14.215.177.39): icmp_seq=4 ttl=128 time=41.8 ms
```

# 安装JDK

## 下载jdk

> 官网下载：

> 链接: https://pan.baidu.com/s/1jvjsTqSkYiXW-os6IWLF0w 提取码: 1u2x
>
> 官网：https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

**使用ftp工具传输到linux端**

## 解压jdk

**cd /upload**

一般吧jdk目录解压在/usr/local目录下

```
tar -zxvf jdk-8u131-linux-x64.tar.gz -C /usr/local/

```

## 配置环境变量

**配置etc/profile**

```
vim /etc/profile
```

**在最后面添加如下语句**

```
export JAVA_HOME=/usr/local/jdk1.8.0_131
export PATH=$PATH:$JAVA_HOME/bin
```

![](https://pic.downk.cc/item/5e86da93504f4bcb04a119cc.png)

## 刷新profile目录

```
 source /etc/profile
```

## 检查是否配置成功

输入java命令

![](https://pic.downk.cc/item/5e86de1a504f4bcb04a4036a.png)

**输入java -version**

```
[root@localhost bin]# java -version
java version "1.8.0_131"
Java(TM) SE Runtime Environment (build 1.8.0_131-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)

```

# 安装Tomcat

**必须先装jdk在装Tomcat**

## 下载tomcat

> https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-7/v7.0.103/bin/apache-tomcat-7.0.103.tar.gz

**使用ftp工具传输到linux端**

## 解压tomcat

**进入upload（提交apache-tomcat-7.0.103.tar.gz的位置）解压apache-tomcat-7.0.103.tar.gz到/usr/local目录下**

```
 tar -zxvf apache-tomcat-7.0.103.tar.gz -C /usr/local/
```

cd到/usr/local目录在ll查看是否有apache-tomcat-7.0.103文件夹，在进入到apache-tomcat-7.0.103文件里，**在进入到bin里，输入./startup.sh开启tomcat服务**

![](https://pic.downk.cc/item/5e86e1a7504f4bcb04a72083.png)

## 浏览器输入端口号检测（http://192.168.205.129:8080）

网站080查看是否能打开tomcat网站，**如果无法打卡，需要进入防火墙设置**【提示，http协议底层还是tcp协议】

## 查看防火墙状态

```
firewall-cmd --permanent --query-port=8080/tcp
```

![](https://pic.downk.cc/item/5e86e278504f4bcb04a7bd6b.png)

发现8080端口未开启

## 允许外部访问8080端口

```
firewall-cmd --zone=public --add-port=8080/tcp --permanent
success
```

**配置生效**

```
systemctl restart firewalld 重启防火墙服务
```

## 再次检测8080端口防火墙状态

```
firewall-cmd --permanent --query-port=8080/tcp
```

## 在浏览器测试（推荐使用谷歌或者火狐）

微软的默认有个/   呵呵呵了

![](https://pic.downk.cc/item/5e8bffd0504f4bcb04ce1a15.png)

## 将tomcat安装成系统服务（重点）

### 找到tomcat目录下的catelina.sh（复制代码需要注意tomcat版本）

```
vim /usr/local/apache-tomcat-7.0.103/bin/catalina.sh
```

### 在“OS specific support.”的**上一行**添加如下内容 这里使用/命令搜索

```
 :/OS specific support.
```

添加如下内容

```
JAVA_HOME=/usr/local/jdk1.8.0_131 
JRE_HOME=$JAVA_HOME/jre
```

![](https://pic.downk.cc/item/5e8d95ee504f4bcb0423d798.png)

![](https://pic.downk.cc/item/5e8d969d504f4bcb042485ec.png)

### 使用vim创建tomcat.service

```
vi /usr/lib/systemd/system/tomcat.service
```

输入以下内容（**注意你的tomcat版本**）

```
[Unit]
Description=Tomcat
After=syslog.target network.target remote-fs.target nss-lookup.target
[Service]
Type=oneshot
ExecStart=/usr/local/apache-tomcat-7.0.103/bin/startup.sh
ExecStop=/usr/local/apache-tomcat-7.0.103/bin/shutdown.sh
ExecReload=/bin/kill -s HUP $MAINPID
RemainAfterExit=yes
[Install]
WantedBy=multi-user.target
```

### 重新加载使配置生效

```
systemctl daemon-reload
```

### 允许开机启动

```
systemctl enable tomcat
```

![](https://pic.downk.cc/item/5e8d9819504f4bcb0425e399.png)

### 其他tomcat服务操作命令

```
systemctl start tomcat # 启动
systemctl status tomcat # 查看状态
systemctl restart tomcat # 重启
systemctl stop tomcat # 停止
systemctl disable tomcat # 禁止开机启动
systemctl enable tomcat # 允许开机启动
```

重启Linux客户端，尝试输入http://192.168.100.110:8080能否进入tomcat界面（注意：是你Linux客户端的IP）

# 安装mysql

## 下载mysql

> https://dev.mysql.com/downloads/mysql/
>
> 百度网盘：https://pan.baidu.com/s/1gcaSIDpo874sVtiAOEYqYw 
>
> 提取码：0jvw

##  环境检查

### 检查是否已安装其它版本MySQL

```
 rpm -qa|grep mysql
```

 如果有执行如下命令卸载这里卸载client和server

```
rpm -e --nodeps MySQL-client-5.5.52-1.linux2.6.x86_64
rpm -e --nodeps MySQL-server-5.5.52-1.linux2.6.x86_64

```

在此执行rpm -qa|grep mysql检查

## 安装 MySQL

### 添加mysql组

```
 groupadd mysql
```

### 添加mysql用户

```
useradd -g mysql mysql
```

### 解压缩（复制代码注意版本）

```
cd /upload
tar -zxvf mysql-5.7.29-linux-glibc2.12-x86_64.tar.gz -C /usr/local/
```

### 重命名

```
 cd /usr/local
 mv mysql-5.7.29-linux-glibc2.12-x86_64/ mysql-5.7.29
```

### 创建日志，data文件目录

```
mkdir -p /data/mysql/data
mkdir -p /data/mysql/log
touch  /data/mysql/log/mysqld.log
```

### 设置文件目录权限

```
chown -R mysql /usr/local/mysql-5.7.29/
chgrp -R mysql /usr/local/mysql-5.7.29/
chown -R mysql /data/mysql/
chgrp -R mysql /data/mysql/
```

> chown 将用户自己创建的文件或目录的所有权都交给指定的用户 root --> mysql
>
> chgrp 将用户自己创建的文件或目录的所有权都交给指定的组  root --> mysql

### 初始化MySQL

```
/usr/local/mysql-5.7.29/bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql-5.7.29 --datadir=/data/mysql/data --explicit_defaults_for_timestamp
```

- --initialize ：初始化
- --user=mysql ：指定用户
- --basedir=/usr/local/mysql-5.7.29：指定安装目录
- --datadir=/data/mysql/data：指定数据目录
- --explicit_defaults_for_timestamp：安装时间戳

### 复制随机密码

RptgUmhR8C/r

![](https://pic.downk.cc/item/5e912e2c504f4bcb044bd9d7.png)

### 配置my.cnf

**上传配好的my.cnf文件到/etc下**

```
[mysql]  
# 设置mysql客户端默认字符集  
default-character-set=utf8   
[mysqld]  
# 服务端使用的字符集默认为8比特编码的latin1字符集  
character-set-server=utf8 
#设置3306端口  
port = 3306 
# 设置mysql的安装目录  
basedir=/usr/local/mysql-5.7.29
# 设置mysql数据库的数据的存放目录  
datadir=/data/mysql/data
# 允许最大连接数  
max_connections=300  
# 创建新表时将使用的默认存储引擎  
default-storage-engine=INNODB
# 日志文件
log-error=/data/mysql/log/mysqld.log
```

![](https://pic.downk.cc/item/5e915e20504f4bcb047618f8.png)

### 修改文件权限

```
 cd /etc
 chmod 644 /etc/my.cnf
```

### 配置mysql的环境变量

```
vim /etc/profile
export PATH=$PATH:$JAVA_HOME:/usr/local/mysql-5.7.29/bin
export PATH=$PATH:/usr/local/mysql-5.7.29/bin
source /etc/profile
```

### 拷贝和配置启动文件

```
vim /usr/local/mysql-5.7.29/support-files/mysql.server
往下找，在此处填写
basedir=/usr/local/mysql-5.7.29 
datadir=/data/mysql/data 
```

![](https://pic.downk.cc/item/5e9137b2504f4bcb04541e10.png)



在复制mysql.server到etc目录下的/etc/init.d/mysqld

```
cp /usr/local/mysql-5.7.29/support-files/mysql.server /etc/init.d/mysqld
```

设置文件权限

```
chmod +x /etc/init.d/mysqld
```

## 启动mysql服务

```
service mysqld start
```

## 修改mysql密码

### 如果忘记保存初始密码

> 初始化密码从 /usr/local/mysql-5.7.29/log/mysqld.log 文件中查找

### 登录mysql

```
mysql -uroot -p
```

然后输入初始密码

### 修改密码

```
set password = password('123456');
```

![](https://pic.downk.cc/item/5e915e4b504f4bcb047638f4.png)

#### 退出mysql

```
quit
```

#### 使用新密码登录

```
mysq -uroot -p
123456
```

## 允许mysql远程访问

这里使用navicat

### 查看3306端口是否开启

```
firewall-cmd --permanent --query-port=22/tcp
```

### 开启3306端口

```
firewall-cmd --zone=public --add-port=3306/tcp --permanent
```

### 重启防火墙服务

```
systemctl restart firewalld.service
```

### 登录mysql开启最高权限

```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;
```

```
FLUSH PRIVILEGES;
```

![](https://pic.downk.cc/item/5e9162df504f4bcb047a254e.png)

## 使用navicat访问MySQL

新建连接，输入主机ip以及用户名和密码

![](https://pic.downk.cc/item/5e916364504f4bcb047aa2cf.png)

## 将MySQL安装成系统服务

### 创建MySQL服务

```
 vim /usr/lib/systemd/system/mysqld.service
```

添加以下内容

```
[Unit]
Description=MySQL
After=network.target syslog.target
[Install]
WantedBy=multi-user.target
[Service]
User=mysql
Group=mysql
ExecStart=/usr/local/mysql-5.7.29/bin/mysqld --defaults-file=/etc/my.cnf
LimitNOFILE=5000
```

### 给予执行权限

```
chmod +x /usr/lib/systemd/system/mysqld.service
```

### 重新加载使配置生效

```
systemctl daemon-reload
```

### 允许开机启动

```
systemctl enable mysqld.service
```



# 安装Redis

Redis是C语言开发，建议在linux上运行。

## 在线安装

```
wget http://download.redis.io/releases/redis-5.0.8.tar.gz
```

## 安装 gcc 环境

```
yum install gcc-c++
```

## 解压缩Redis源码包

cd到upload目录下

```
cd /upload
```

```
tar -zxvf redis-4.0.14.tar.gz -C /usr/local/src
```

## 编译Redis源码并安装

```
cd /usr/local/src/redis-4.0.14/
```

```
make install PREFIX=/usr/local/redis-4.0.14
```

## 将Redis安装目录配置到环境变量

```
 vim /etc/profile
```

```
 export PATH=$PATH:/usr/local/mysql-5.7.29/bin:/usr/local/redis-4.0.14/bin
```

```
 source /etc/profile
```

## 启动redis

![](https://pic.downk.cc/item/5e92828ec2a9a83be5e7ae48.png)

redis-cli：客户端工具

redis-server:服务端工具

### 前端启动

#### 启动服务端

cd 到在redis安装目录下运行redis-serve。

```
cd /usr/local/redis-4.0.14/bin
```

```
redis-server
```

![](https://pic.downk.cc/item/5e92829dc2a9a83be5e7b83d.png)

#### 启动本机客户端

1. 新开一个ssh窗口
2. cd 到在redis安装目录下运行redis-cli。
3. 不要关闭了这个客户端窗口，下面测试还要用到

```
cd /usr/local/redis-4.0.14/bin
```

```
redis-cli
```

> redis-cli 默认访问的ip地址是127.0.0.1（localhost），端口号默认使用6379

![](https://pic.downk.cc/item/5e9283aec2a9a83be5e89747.png)

#### 测试连接

```
set k1 hello
get k1
```

![](https://pic.downk.cc/item/5e928479c2a9a83be5e92e06.png)

### 前端启动的关闭

 ctrl+c

> ctrl+c 后 则redis-server程序结束，不推荐使用此方法

服务器停止后，连接被拒绝了

![](https://pic.downk.cc/item/5e928514c2a9a83be5e99650.png)

### 后端启动

#### 复制redis的配置文件

在/usr/local/redis-4.0.14/新建一个conf目录

```
cd /usr/local/redis-4.0.14
mkdir conf
```

将 redis 源码包 **/usr/local/src/redis-4.0.14**中的 redis.conf 配置文件 复制到 **/usr/local/redis-4.0.14/conf/** 下

```
cd /usr/local/src/redis-4.0.14
```

![](https://pic.downk.cc/item/5e928b06c2a9a83be5ed86a7.png)

```
cp redis.conf /usr/local/redis-4.0.14/conf/
```



cd 到/usr/local/redis-4.0.14/的conf目录下使用ls查看是否复制过去了

```
cd /usr/local/redis-4.0.14/conf/
ll
```

![](https://pic.downk.cc/item/5e928b25c2a9a83be5eda0cd.png)

#### 修改配置文件

此配置文件就是刚才复制到conf目录下的redis.conf文件

```
cd /usr/local/redis-4.0.14/conf/
```

```
vi redis.conf
```

```
#更多详情参照linux基本命令
#向光标之下查找
:/daemonize
#向光标之上查找
:?daemonize
```

![](https://pic.downk.cc/item/5e928c52c2a9a83be5ee5e31.png)

将 **daemonize 由 no 改为 yes**

![](https://pic.downk.cc/item/5e916a90504f4bcb04819845.png)

然后:wq保存退出

#### 启动服务端

```
cd /usr/local/redis-4.0.14/bin
或者
cd ../bin
#因为当前在conf目录下 redis-4.0.14是他的相对路径
```

**使用指定的配置文件启动server**（使redis.conf生效）

```
redis-server ../conf/redis.conf
```

![](https://pic.downk.cc/item/5e928f04c2a9a83be5f00d32.png)

#### 使用本机客户端访问

在刚才打开的新窗口再次调用get k1

![](https://pic.downk.cc/item/5e928f7bc2a9a83be5f05ace.png)



## 防火墙设置

### 添加6379端口防火墙例外：

```
# 查看6379端口是否开启
firewall-cmd --permanent --query-port=6379/tcp
# 允许外部访问6379端口
firewall-cmd --zone=public --add-port=6379/tcp --permanent
# 重启防火墙
systemctl restart firewalld
```

### 修改 redis.conf 配置文件

默认安装redis只让本机连接所以要设置bind文件为本机的ip

```
cd /usr/local/redis-4.0.14/conf

vim redis-conf
```

找到bind

```
:/bind
```

设置bind

```
bind 0.0.0.0 192.168.100.130
```

![](https://pic.downk.cc/item/5e929858c2a9a83be5f622db.png)

然后保存退出

### 终止redis服务进程

```
#到bin目录下
cd /usr/local/redis-4.0.14/bin
或者
cd ../bin
发现没有重启的程序

#找到redis进程查看redis-server的端口
ps -ef|grep redis
#干掉进程
kill -9 1662
```

![](https://pic.downk.cc/item/5e929495c2a9a83be5f39acf.png)

### 启动redis服务



```
#到bin目录下
cd /usr/local/redis-4.0.14/bin
或者
cd ../bin
#一定要使用配置文件启动
redis-server ../conf/redis.conf
```

### 远程客户端连接

```
./redis-cli -h 192.168.100.130 -p 6379
```

## 使用redis客户端工具

### 下载工具

> 链接：https://pan.baidu.com/s/1UTR5mVMCLUhR-jTFYoUsYA 
> 提取码：e8bq 

### 连接redis

![](https://pic.downk.cc/item/5e92915bc2a9a83be5f18212.png)