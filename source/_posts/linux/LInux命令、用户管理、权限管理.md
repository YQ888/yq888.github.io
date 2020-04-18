---
title: Linux基本命令、解压和压缩、用户管理、权限管理、vim编辑器的使用
tags: Linux基本命令
categories: Linux学习笔记
declare: true
data: '2020-4-2 18:36'
cover: >-
  https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Ftimgsa.baidu.com%2Ftimg%3Fimage%26quality%3D80%26size%3Db9999_10000%26sec%3D1585833434648%26di%3D632581a435dfab31d58c4100502740af%26imgtype%3D0%26src%3Dhttp%253A%252F%252Ffile.elecfans.com%252Fweb1%252FM00%252F55%252F86%252Fo4YBAFswhj-AUi_xAADrRkEqs8o018.png&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFvXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D3841092341%2C682654896%26fm%3D26%26gp%3D0.jpg
abbrlink: 4086565940
---



# Linux目录结构

- /根目录
- **root，存放root用户的相关文件**
- **home，存放普通用户的相关文件**
- bin，存放常用命令的目录，如vi，su
- sbin，要具有一定权限才可以使用命令
- mnt，默认挂载光驱和软驱的目录
- **etc，存放配置的相关文件**
- var，存放经常变化的文件，如网络连接的sock文件 、日志
- boot，存放引导系统启动的相关文件
- **usr，安装一个软件的默认目录，相当于windows下的program files**
- proc，这个目录是一个虚拟的目录，它是系统内存的映射，访问这个目录来获取系统信息
- srv ，service缩写。该目录存放一些服务启动之后需要提取的数据
- sys，这是linux2.6内核的一个很大的变化，该目录下安装了2.6内核中新出现的一个文件系统
- tmp，这个目录是用来存放一些临时文件的
- del，类似于windows的设备管理器，把所有的硬件用文件的形式存储
- media，系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将外部的存储挂载在/mnt/上，然后进入该目录就可以查看里面的内容了。
- **opt，这是给主机额外安装软件所摆放，如安装oracle数据库就可放到该目录下默认为空。**
- selinux，selinux是一种安全子系统，它能控制程序只能访问特定文件。

# 自动补全

在敲出/文件 或者/目录 或者/命令的前几个命令之后，按下tab键，如果输入的没有错，即该命令，或者该文件目录是存在的，系统会自动补全，如果存在多个开头字母的命令，系统也会列出所有相关的命令供我们选择

# 使用过的命令

使用上/下光标键来切换之前使用的命令

如果要退出选择，并且不想执行当前选中的命令（执行则按回车）可以按ctrl +c

# 文件和目录命令

## **在linux里所有的命令是区分大小写的，所以我们用命令的时候都是用小写**

## clear

清屏

## ip addr

查看ip地址

![](https://pic.downk.cc/item/5e85a2f3504f4bcb04e428ba.png)

## ls

- ls -a ：all 列出当前目录下所有文件，包括.开头的隐藏文件
- ls -l ：long listing formage,列出明细列表信息
- ls -l  *.db：列出以db结尾的文件的详细信息，（※）为通配符代表任意多个字符(**只对文件有作用**)
- ls s※：列出目前工作目录下所有名称是s开头的文件

## ll(相当于ls -l)

是Long Listing format的缩写，列出当前位置文件及文件夹的明细列表，包括隐藏文件

## pwd

pwd是print working directory的缩写，打印当前该工作目录

## cd

cd是chang directory的缩写，切换工作目录

- cd ~:切换到工作目录
- cd .. :切换到上一级目录【.表示当前目录，..表示上一级目录】
- cd ../..:切换到当前目录的上两层目录
- cd -：切换到上一次所在的目录
- cd /:切换到系统根目录
- cd /usr:切换到usr目录

## touch

创建文件或修改文件时间

- 如果文件不存在，可创建一个空白文件
- 如果文件存在，可以修改文件的末次修改日期

**这里观察hexo文件的创建时间，第一次使touch命令是直接创hexo文件，因为hexo文件不存在，第二次使用touch是hexo文件存在，就修改该文件的末次修改时间**

![](https://pic.downk.cc/item/5e85576c504f4bcb04ab4c57.png)

![](https://pic.downk.cc/item/5e8557bd504f4bcb04ab7105.png)

> 例如：touch a.txt 表示创建a.txt  虽然mkdir也可以创建文件，但是一般创建文件还是使用touch，mkdir一般用来创建目录（文件夹）

## mkdir

- mkdir：是make directory的缩写，创建目录
- mkdir -p ./dir1/dir2：表示在当前目录下创建dir1目录，在dir1中创建子目录dir2。-p表示父目录，parent当父目录不存在时，同时创建父目录，也就是递归创建目录。【**创建多级目录**】

![](https://pic.downk.cc/item/5e85594e504f4bcb04ac3513.png)

> 加粗的就是文件夹，没有后缀
>
> 带有后缀的，未加粗的就是文件



## rm

是remove的缩写，删除文件或目录

> 使用rm命令删除的文件不能恢复，善用

- -r：recursive递归删除，删除目录及目录下所有文件，非空也可以删除
- -f：force强制删除
- rm -rf  *：强制删除当前目录下的所有文件
- rm world*：删除以world开头的文件
- rm *.txt：删除以.txt后缀的文件

> 这里注意，如果在当前文件夹目录下
>
> 使用rm -rf用绝对路径删除当前文件夹（所在目录）的时候，会删除当前目录上一级里所有的文件，也就是当前所在目录相对的所有文件都会被删除
>
> 我这里就误删了，把root里的所有文件都删除了。。。

![](https://pic.downk.cc/item/5e855f65504f4bcb04af363c.png)

## cp

是copy的缩写，复制文件的命令

- -a：选项all通常在复制目录的时候使用，它保留链接、文件属性、并复制目录下的所有内容
- -f：force强制覆盖，覆盖已经存在的目标文件而不给出提示
- -i：-i和-f相反，在覆盖目标文件之前给出提示，要求用户是否确认覆盖，回答y才会执行覆盖
- -r：recursive递归赋值，如果给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。例如：cp -ai ./dir1./dir2

## mv

mv是move的缩写，剪切文件或者将文件改名

语法格式：mv  源文件  目标文件

- mv dir1 dir2 :移动到一个文件到指定目录（目标文件存在即移动源文件到指定目录，目标文件不存在就是将源文件名改成目标文件名）
- mv /a/a.txt /b/b.txt：移动a目录下的a.txt到b目录下，并改名为b.txt
- mv /b/b.tt /b/c ：移动b目录下的b.txt到b目录下的c目录下

## cat

是concatenate的缩写，连接和打印文件，显示文件内容，不可以进行修改，**cat会一次显示所有 内容，适合查看内容较少的文本文件**

- -n或--number：由1开始对所有输出的行数编号
- -b或--number-nonblank：和-n相似，只不过对于空白行不编号

> 只能cat文件，不能cat目录

## less

less和more相似，但使用less可以随意浏览文件，而more仅能向前移动，且无法查看之前不会加载整个文件

语法：less [参数] 文件

> 1. linux中命令cat、more、less都可以用来查看文件内容主要却别
> 2. cat：是一次性显示整个文件的内容，还可以将多个文件连在一起显示，它常与重定向符号配合使用，适用于文件内容较少的情况
> 3. more和less一般用在显示文件超过一个屏幕的内容，并且提供翻页的功能。
> 4. more比cat强大，提供分页显示的功能
> 5. less比more强大，提供翻译，跳转，查找等命令
> 6. more和less都支持用空格显示下一页，按b显示上一页

**常用参数**

- 空格键：滚动一页（一个屏幕）
- 回车键：滚动一行
- [pagedown]（向下的箭头键盘按钮）：向下翻动一页
- [pageup]（向上的箭头键盘按钮）：向上翻动一页
- /字符串：向下搜索“字符串”
- ?字符串：向上搜索”字符串“
- n：重复前一个搜素（与/或?有关）
- N：反向重复前一个搜素（与/或?有关）

## head

- 显示头文件n行内容
- 语法结构：head [-n] 文件名
- -n 指定显示多少行
- 例如 head -n 10 aa.txt
- 表示显示aa.txt的前10行

## tail

- 显示文件尾几行内容
- 语法结构：tail [-nf] 文件名
- -n 指定显示多少行，没有-n默认显示10行
- -f 实时追踪文件的所有更新，常用来查阅正在改变的日志文件**[动态显示]**，例如：tail -f -n 3 aa.txt
- 表示显示aa.txt文件的最后前3行，并在aa.txt文件更新时实时追加显示

## >、>>

echo会在终端显示参数指定的文字，通常会和重定向结合使用

linux运行将命令执行结果重定向到一个文件

将本该显示的终端上的内容输入或者追加到指定文件中

'>'：表示输出，会覆盖文件原有的内容

'>>'：表示追加，会将内容追加（新增）到文件的末尾

例如：ls -l > file

表示将ls -l命令结果输出到file文件中，如果file不存在就创建，如果file存在，则覆盖file有的内容

例如：echo hello > a.txt

## find

1. 按照修改时间查找

   - find ./.mtime-1
   - 表示查找当前目录下最近1天内（24小时）修改过的文件

2. 按照尺寸查找

   - find ./-size -1M
   - 查找当前目录下小于1M的文件

3. 按照文件类型查找

   -  find ./ -type f
   -  find ./ -type d
   - 查找当前目录下的文件或目录(f是普通文件，d是目录)

4. 按照文件名查找

   - find . -name '*.text'

   - 查找当前目录下的文件或目录(f是普通文件，d是目录)

     

# 查看进程

- ps -ef ：显示所有进程信息，后面是从进程中查找Java进程是否纯在
- <img src="https://pic.downk.cc/item/5e859807504f4bcb04dbd566.png">
- |：可以将多条命令连接在一起执行
- grep：查找文件里符合条件的字符串
- ps -ef | grep java ：查找java进程
- PID：进程的唯一标识符
- **干掉进程：kill -9 （进程号pid）**

# 解压、压缩和打包

## tar

是tape archive的缩写，是把文件打包并上传到磁带粗胆囊，打包就是把多个文件包成一个大文件

选项有zxvf、zcvf、jxvf、jcvf

- -z ：表示处理tar.gz文件 gzip
- -x：extract表示提取提炼的意思，解压
- -v：verbose表示各种各样的文件
- -c：compress压缩文件
- -j：表示处理bzip2格式的文件（后缀为tar.bz2）
- -C：参数可以指定解压到特定的目录
- -f：显示解压的详细信息

1. tar -zxvf file.tar.gz -C ./test：解压gar.gz到当前目录下的text子目录中
2. tar -zcvf /dir2/file.tar.gz ./dire/：压缩tar.gz（把当前目录下的dir1目录及子目录下所有文件压缩到dir2目录下，文件名为file.tar.gz。当使用tar -zxvf file.tar.gz解压出来时，带有目录dir1）
3. tar -jxvf file.tar.bz2：解药tar.bz2到当前目录下
4. tar -jcvf file.tar.bz2 ./dir1/：压缩tar.bz2(把当前目录下的dir1目录及子目录下所有文件压缩到当前目录下，文件名为file.tar.gz2)

## zip

- 压缩zip文件
- zip -f file.zip ./dir1/
- 压缩zip（把当前目录下的dir1目录及子目录下所有文件压缩到当前目录下，文件名为file.zip）

## unzip

- 解压zip文件
- unzip file.zip：解压zip文件到当前目录中
- unzip -o mdmtest .war -d/opt/mdm
- 推荐使用unzip解压war包
- -o：overwrite 覆盖的意思
- -d：directory 指定文件解压后存储的目录

## 执行zip未找到命令

> **yum install zip**
>
> **yum install unzip**
>
> 然后输入y安装即可

![](https://pic.downk.cc/item/5e85b0df504f4bcb04efdb80.png)

## gzip

压缩和解压gzip文件

> **只能压缩文件**

- geip file：压缩file文件为gzip格式（不保留原文件）
- gzip -9 file：最大程度压缩file文件为gzip格式
- gizp -d file.gz ：解压file.ge文件

## bzip2: 未找到命令

```
yum install bzip2
```

## bzip2

**只能操作单个文件**

压缩和解压bzip2文件

- bzip2 -k file：-k表示保留原文件，压缩file文件为bzip格式
- bzip2 -d -k file.bz2：解压file.bz2文件，保留源文件

# vim文本编辑器

具有程序编辑能力，主要是用来编辑文本

使用语法：vim  a.txt 

> 文件存在则进入命令模式。不存在会先创建文件

**编辑模式：**

- 按键盘v或者i进入编辑模式
- 退出编辑模式按exc

**命令模式：**

- ：w 	保存 也可使用shirt+z+z快捷键
- :    q     退出 
- ：wq    保存并退出
- ：q!      强制退出
- ：w!      强制保存

## vim: 未找到命令

yum install vim



# 用户管理

## useradd

- 创建用户账号，账号创建好后
- 用passwd设置账号的密码。
- 可已使用userdel删除账号。

**添加普通（一般，权限比root低）账户**

```
useradd user01
```

![](https://pic.downk.cc/item/5e85b941504f4bcb04f606bf.png)

**为添加的用户指定相应的用户组**

```
usermod -g root user01
```

![](https://pic.downk.cc/item/5e85bb2c504f4bcb04f75b28.png)

**创建一个系统用户**

```
useradd -r user02
```

创建用户并指定root用户组

```
useradd -g root user03
```

## passwd

给指定的用户设置密码

语法 passwd  参数  用户名

参数：

- d 删除密码
- -f：强制执行
- -l：停止账号使用
- -u：启用被停止的账户

## userdel

删除用户

语法： userdel 用户名

## su

切换 用户

语法 ：su 想要切换的目标用户名

> 直接输入su。默认是切换到root账户

# 文件权限管理

分为三级：文件拥有者、群组、其他

**语法格式： chmod [-vR] mode 文件名**

mode 权限设置字串,格式为[ugoa] [+-=] [rwx]

- u：表示该文件的 拥有者
- g：表示与该文件的拥有者属于同一组group的
- o：other表示其他人
- a：表示这三者都有
- +：表示增加权限
- -：表示取消权限
- =：表示唯一设定权限
- r：read表示可读取
- w：write表示写入
- x：表示执行
- -R：对目前目录下的所有文件与子目录进行相同的权限变更（即目标目录的子目录也执行相应的命令【递归的方式】）

## 使用数字

语法 chmod abc file

> 其中abc各位一个数字，分别表示user，group，other的权限

r=4、w=2、x=1

- 如果是使用rwx属性则4+2+1=7；
- 如果使用rw属性则4+2=6
- 如果使用rx属性则4+1=5；

给a.txt文件中增加读写执行的权限,在自己以及同组和其他都能有该权限

```
chomd 777 a.txt
```

给当前目录下所有后缀（扩展名）为.txt的文件增加可执行的权限

```
chomd +x *.sh
```