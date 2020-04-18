---
title: butterfly主题基本设置
tags: butterfly
categories: Hexo
cover: >-
  https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Ftimgsa.baidu.com%2Ftimg%3Fimage%26quality%3D80%26size%3Db9999_10000%26sec%3D1586970604981%26di%3D210b2421117c8e534a5f5b8450a7aed7%26imgtype%3D0%26src%3Dhttp%253A%252F%252Fb-ssl.duitang.com%252Fuploads%252Fitem%252F201209%252F09%252F20120909190745_HrCd5.jpeg&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFvXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D3610978118%2C1324244871%26fm%3D26%26gp%3D0.jpg
abbrlink: 4167823285
data: 2020-04-15 10:00:00
---

用过很多主题，还是觉得这款很有意思，作者也再持续更新中，这里做个配置记录，避免以后部署的时候忘记

# 主题安装和升级

## 下载主题

新建一个文件夹git bash打开，或者在bolg的根目录里

```
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
```

比较新的分支

```
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
```



## 主题环境配置

如果没有 cheerio 

```
 npm install cheerio@0.22.0 --save
```



如果你没有 pug 以及 stylus 的渲染器，请下载安装：

```
 npm install hexo-renderer-pug hexo-renderer-stylus --save or yarn add hexo-renderer-pug hexo-renderer-stylus
```

## 平滑升级

推荐把主题默认的配置文件_config.yml 复製到 Hexo 工作目录下的 source/_data/butterfly.yml，如果 source/_data 的目录不存在那就创建一个。

> 注意，如果你创建了 butterfly.yml, 它将会替换主题默认配置文件_config.yml 里的配置项 (不是合併而是替换), 之后你就只需要通过 git pull 的方式就可以平滑地升级 theme-butterfly 了。
>

# 主题页面设置

## **Page Front-matter**（页面）

```
---
title:
date:
type: （tags,link,categories这三个页面需要配置）
comments: (是否需要显示评论，默认true)
description:
top_img: (设置顶部图)
mathjax:
katex:
---

```

## **Post Front-matter**（博客）

```
---
title:
date:
tags:
categories:
keywords:
description:
top_img: （除非特定需要，可以不写）
comments  是否显示评论（除非设置false,可以不写）
cover:  缩略图
toc:  是否显示toc （除非特定文章设置，可以不写）
toc_number: 是否显示toc数字 （除非特定文章设置，可以不写）
copyright: 是否显示版权 （除非特定文章设置，可以不写）
mathjax:
katex:
hide:
---
```

## **标签页**

1. 在博客目录使用git bash打开
2. 输入 `hexo new page tags`
3. 你会找到 博客根目录`source/tags/index.md` 这个文件
4. 修改这个文件：

```
---
title: 标签
date: 2020-02-02 10:00:00
type: "tags"
---
```

## 分类页

和标签页同样操作，

输入hexo new page categories

```
---
title: 分类
date: 2020-02-02 10:00:00
type: "categories"
---
```

## 友链页面

1. 在博客目录使用git bash打开

2. 输入 `hexo new page  link

3. 你会找到 博客根目录source/link/index.md 这个文件

4. 修改这个文件：

   ```
   ---
   title: 友情链接
   date: 2020-02-02 10:00:00
   type: "link"
   ---
   ```

5. 添加友链

   在 Hexo 博客目录中的 `source/_data`，创建一个文件 `link.yml`

   ```
    class:
         class_name: 友情链接
         link_list:
           1:
             name: Lorem Picsum
             link: https://picsum.photos/
             avatar: https://i.picsum.photos/id/314/200/300.jpg
             descr: 就是个用来做随机图片的网站，访问有点小慢
   
           2:
             name: 24小时临时邮箱
             link: http://24mail.chacuo.net/
             avatar: https://i.picsum.photos/id/315/200/300.jpg
             descr: 邮箱持续24小时，比十分钟邮箱（10分钟)保持时间更长，可以任意设置邮箱名，随时更换邮箱。    
   
           3:
             name: MD5在线加密解密
             link: https://www.cmd5.com/
             avatar: https://i.picsum.photos/id/316/200/300.jpg
             descr: md5神奇宝贝
                 
   
   
   
   
    class2:
          class_name: 无效链接
          link_list:
            1:
              name: 梦xxx
              link: https://blog.xxx.com
              avatar: https://xxxx/avatar.png
              descr: xxxx
   
   ```

   

## **音乐界面**

音乐界面参考 https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md

## **电影**

电影界面参考 https://github.com/mythsman/hexo-douban

### 安装

```
npm install hexo-douban --save
```

将下面的配置写入站点的配置文件 `_config.yml` 里(博客根目录).

```
douban:
  user: mythsman
  builtin: false
  book:
    title: 'This is my book title'
    quote: 'This is my book quote'
  movie:
    title: 'This is my movie title'
    quote: 'This is my movie quote'
  game:
    title: 'This is my game title'
    quote: 'This is my game quote'
  timeout: 10000 
```

- **user**: 你的豆瓣ID.打开豆瓣，登入账户，然后在右上角点击 "个人主页" ，这时候地址栏的URL大概是这样："https://www.douban.com/people/xxxxxx/" ，其中的"xxxxxx"就是你的个人ID了。
- **builtin**: 是否将生成页面的功能嵌入`hexo s`和`hexo g`中，默认是`false`,另一可选项为`true`(1.x.x版本新增配置项)。
- **title**: 该页面的标题.
- **quote**: 写在页面开头的一段话,支持html语法.
- **timeout**: 爬取数据的超时时间，默认是 10000ms ,如果在使用时发现报了超时的错(ETIMEOUT)可以把这个数据设置的大一点。

如果只想显示某一个页面(比如movie)，那就把其他的配置项注释掉即可。

# 站点&&主题配置

## **语言**

修改博客根目录配置文件 `_config.yml`下的language:属性

默认语言是 `en`

主题支持三种语言

- default(en)
- zh-CN (简体中文)
- zh-TW (繁体中文)

## **网站资料**

请修改博客根目录的`_config.yml`

```
# Site
title: 馀小少
subtitle: '个人技术博客'
description: '热衷于跳坑无法自拔'
keywords: ''
author: 馀小少
language: zh-CN
timezone: ''
```

## **导航菜单**

请修改博客根目录的\source\_data\_\butterfly.yml

```
menu:
  首页: / || fa fa-home
  归档: /archives/ || fa fa-archive
  标签: /tags/ || fa fa-tags
  分类: /categories/ || fa fa-folder-open
  随笔: /tags/随笔/ || fa fa-tags
  友链: /link/ || fa fa-link
 # About: /about/ || fa fa-heart
  我的简历: http://yz-yq.gitee.io/anires/ || fa fa-address-card
  列表||fa fa-list:
   - Music || /music/ || fa fa-music
   - Movie || /movies/ || fa fa-film
```

## **代码设置**



Butterfly 支持了 Material Theme 全部 5 种代码高亮样式：

- default
- darker
- pale night
- light
- ocean

配置 `butterfly.yml`

```
highlight_theme: light #代码高亮主题
highlight_copy: true #代码是否启用复制功能
highlight_shrink: true #true代码框不展开，需点击 '>' 打开 false展开 none不显示'>'按钮，代码块展开
```

## **自动换行**

配置 `butterfly.yml`

```
code_word_wrap: true #代码自动换行
```

然后找到你站点的 Hexo 配置文件`_config.yml`，将 `line_number` 改成 `false`:

```
highlight:
  enable: true
  line_number: false
  auto_detect: false
  tab_replace:
```

## **社交图标**

Butterfly 支持 [font-awesome v4](https://fontawesome.com/v4.7.0/) 和 [font-awesome v5](https://fontawesome.com/icons?from=io). 如需开启 [font-awesome v5](https://fontawesome.com/icons?from=io), 需要在 `Butterfly.yml` 上开启

CDN_USE:
  css:
    \- https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css
    \- https://use.fontawesome.com/releases/v5.8.1/css/all.css

```
# fontawesome图标# 默认使用的是 fontawesome v4版本的图标fontawesome_v5:
	enable: true
```

无论 V4 还是 V5, 书写格式都是一样的`图标名：url` || 描述性文字

```
social:
  fa fa-qq: tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=535668586
  fa fa-envelope: mailto:sviptzk@163.com
  fa fa-rss: /atom.xml
```

## **主页封面文字截取**

主页文章节选只支持自动节选和文章页 description。优先选择自动节选。

在 `butterfly.yml` 里可以开启 `auto_excerpt` 的选项，你的文章将会在自动截取部分显示在主页。（默认显示 150 个字）。

```
auto_excerpt:
  enable: true
  length: 150
```

如果没有开启`自动节选`，则会显示文章页 front-matter 里面设置的 `description`。

## **顶部图**

顶部图有 2 种配置：具体 url 和（留空，true 和 false，三个效果一样）

###  页面

当具体 **url** 时
 主页的顶部图可以在 `Butterfly.yml` 设置 `index_img`

archives 页的顶部图可以在 `Butterfly.yml` 设置 `archive_img`

其他 `page` 页的顶部图可以在各自的 md 页面设置 `front-matter` 中的 `top_img`

### 帖子（博客）

`post` 页的顶部图会优先显示各自 `front-matter` 中的 `top_img`, 如果没有设置，则会缩略图（即各自 `front-matter` 中的 `cover`)，如果没有则会显示显示 `default_top_img` 图片

## **文章相关项**

这个选项是用来显示文章的相关信息的。配置 `butterfly.yml`

```
post_meta:
  date_type: both #可设置文章日期显示创建日期(created)或者更新日期(updated)或者两种都显示(both)
  categories: true # or false 是否显示分类
  tags: true # or false 是否显示标签
```

## **文章版权**

为你的博客文章展示文章版权和许可协议。配置 `butterfly.yml`

```
post_copyright:
  enable: true
  decode: true
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

> 由于 Hexo 4.1 开始，默认对网址进行解码，以至于如果是中文网址，会被解码，可设置 decode: true 来显示中文网址。
>

如果有文章（例如：转载文章）不需要显示版权，可以在文章 Front-matter 单独设置

```
copyright: false
```

**文章打赏**

在你每篇文章的结尾，可以添加打赏按钮。相关二维码可以自行配置 配置 `butterfly.yml`

```
reward:
  enable: true
  QR_code:
    - itemlist:
        img: /img/wechat.jpg
        text: 微信
    - itemlist:
        img: /img/alipay.jpg
        text: 支付宝
```

## **文章隐藏**

参考 https://github.com/printempw/hexo-hide-posts/blob/master/README_ZH.md

在文章的 Front-matter 添加

```
hide: true
```

## **头像**

配置 `butterfly.yml`

```
avatar: https://img.antmoe.com/avatar.jpg
```

## **TOC**

在文章页，会有一个目录，用于显示 TOC。 手机端默认显示按钮。

配置 `butterfly.yml`

```
toc:
  enable: true
  number: true   #显示章节数字
```

### **自动打开 TOC**

可选择进入文章页面时，是否自动打开 `sidebar` 显示 TOC

```
auto_open_sidebar:
  enable: true
```

## **相关文章**

相关文章推荐的原理是根据文章 tags 的比重来推荐

```
related_post:
  enable: true
  limit: 6 # 显示推荐文章数目
  date_type: created # or created or updated 文章日期显示创建日或者更新日
```

## **Footer 设置**

### **博客年份**

since 是一个来展示你站点起始时间的选项。它位于页面的最底部。

```
since: 2020
```

### **页脚自定义文字**

`footer_custom_text` 是一个给你用来在页脚自定义文本的选项。通常你可以在这里写声明文本等。支持 HTML。

### **ICP**

对于部分有备案的域名，可以在 ICP 配置显示。

```
ICP:
  enable: true
  url: http://www.beian.miit.gov.cn/
  text: 粤ICP备xxxx
  icon: /img/icp.png
```

## **右下角按钮**

```
translate:
  enable: true
  # 默认按钮显示文字(网站是简体，应设置为'default: 繁')
  default: 简
  #网站默认语言，1: 繁体中文, 2: 简体中文
  defaultEncoding: 1
  #延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0
  translateDelay: 0
  #博客网址
  cookieDomain: "https://jerryc.me/"
  #当文字是简体时，按钮显示的文字
  msgToTraditionalChinese: "繁"
  #当文字是繁体时，按钮显示的文字
  msgToSimplifiedChinese: "简"
```

## **夜间模式**

```
# 夜间模式
darkmode:
  enable: true
```

> V2.0.0 开始增加一个选项，可开啓自动切换 light mode 和 dark mode
>
> autoChangeMode: 1 跟随系统而变化，不支持的浏览器 / 系统将按照时间晚上 6 点到早上 6 点之间切换为 dark mode
>
> autoChangeMode: 2 只按照时间 晚上 6 点到早上 6 点之间切换为 dark mode, 其余时间为 light mode
>
> autoChangeMode: false 取消自动切换

```
# 自动切换 dark mode和 light mode
autoChangeMode: false
```

### **阅读模式**

閲读模式下会去掉除文章外的内容，避免干扰閲读。

只会出现在文章页面，右下角会有閲读模式按钮。

```
readmode:
  enable: true
```

## **侧边设置**

可自行决定哪个项目需要显示，可决定位置。（至少需要显示一个）

```
aside:
  position: right # left or right
  card_author: true #作者卡片
  card_announcement: true #公告卡片
  card_recent_post: false #最新文章卡片
  card_categories: false #分类卡片
  card_tags: true #标签卡片
  card_archives: false #归档卡片
  card_webinfo: true #网站信息卡片
```

## **访问人数**

```
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```

## **运行时间**

```
runtimeshow:
  enable: true
  start_date: 2020/4/4 10:00:00  
  ##网页开通时间
  #格式: 月/日/年 时间
  #也可以写成 年/月/日 时间
```

## **标签外挂**

> 标籤外挂是 Hexo 独有的功能，并不是标準的 Markdown 格式。以下的写法，只适用于 Butterfly 主题，用在其它主题上不会有效果，甚至可能会报错。使用前请留意

配置 `butterfly.yml`

```
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: true
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

用法

```
{% note [class] [no-icon] %}
Any content (support inline tags too.io).

{% endnote %}
[class]   : default | primary | success | info | warning | danger.[no-icon] : Disable icon in note.

All parameters are optional.

```

例如：

```
{% note default %}
default 提示块标籤
{% endnote %}

{% note primary no-icon %}
primary 提示块标籤
{% endnote %}

{% note success %}
success 提示块标籤
{% endnote %}

{% note info %}
info 提示块标籤
{% endnote %}

{% note warning %}
warning 提示块标籤
{% endnote %}

{% note danger %}
anger 提示块标籤
{% endnote %}

```

> style: simple,modern,flat,disable

### Gallery 相册**

```
{% gallery %}
markdown 图片格式
{% endgallery %}
```

例如

```
{% gallery %}
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-scary-pumpkin-hand-900x600.jpg)
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-fresh-fish-dinner-900x600.jpg)
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-mountain-cloud-landscape-900x600.jpg)
![](https://picjumbo.com/wp-content/uploads/iphone-free-stock-photos-2210x3315.jpg)
![](https://picjumbo.com/wp-content/uploads/young-millennial-girl-drinking-lemonade-and-overlooking-the-city-2210x1473.jpg)
![](https://picjumbo.com/wp-content/uploads/modern-graphic-designer-essentials_free_stock_photos_picjumbo_HNCK4919-2210x1474.jpg)
{% endgallery %}
```

## **评论**

我使用的来必力和valine

## **分享**

```
sharejs:
  enable: true
  sites: facebook,twitter,wechat,weibo,qq
```

## **搜索系统**

### **Algolia**

你需要安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). 根据它们的説明文档去做相应的配置。

```
algolia_search:
  enable: true
  hits:
    per_page: 6

  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
    hits_stats: "${hits} results found in ${time} ms"
```

### **本地搜索系统**

你需要安装 [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search). 根据它的文档去做相应配置。注意格式只支持 xml。

1. npm install hexo-generator-search --save

2. 您可以在博客根中配置此插件。`_config.yml`

   ```
   search:
     path: search.xml
     field: post
     content: true
   ```

   - path- 文件路径。默认情况下是 。如果文件扩展名为 ，则输出格式将为 JSON。否则将导出 XML 格式文件。`search.xml``.json`
   - field- 要搜索的搜索范围，您可以选择： 
     - **帖子**（默认） - 将只涵盖您的博客的所有帖子。
     - **页面**- 将只覆盖您的博客的所有页面。
     - **所有**- 将涵盖您的博客的所有帖子和页面。
   - content- 是否包含每篇文章的全部内容。如果 生成的结果仅涵盖标题和其他没有正文的元信息。默认情况下是 。`false``true`

配置主题配置文件

```
local_search:
  enable: true
  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
```

#### 排除搜索

若要排除某个帖子或页面的索引，只需在其前一物质的顶部插入设置，*例如*：`indexing: false`

```
---
title: "Code Highlight"
date: "2014-03-15 20:17:16"
tags: highlight
categories: Demo
description: "A collection of Hello World applications from helloworld.org."
toc: true
indexing: false
---
```

## **网页验证**

如果需要搜索引擎收录网站，可能需要登录对应搜索引擎的管理平台进行提交。
 各自的验证码可从各自管理平台拿到

```
# Google Webmaster tools verification setting
# See: https://www.google.com/webmasters/
google_site_verification:

# Bing Webmaster tools verification setting
# See: https://www.bing.com/webmaster/
bing_site_verification:

# Yandex Webmaster tools verification setting
# See: https://webmaster.yandex.ru/
yandex_site_verification:

# Baidu Webmaster tools verification setting
# See: https://ziyuan.baidu.com/site/
baidu_site_verification:

# 360 Webmaster tools verification setting
# see http://zhanzhang.so.com/
qihu_site_verification:
```

## **分析统计**

统计找到各个平台找到代码即可

```
baidu_analytics: #百度统计
google_analytics: # 谷歌分析通常以`UA-`打头
tencent_analytics: #腾讯分析
```

## **广告**

```
google_adsense:
  enable: true
  js: https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
  client: # 填入个人识别码
  enable_page_level_ads: true
```

## **公式**

### **MathJax**

```
mathjax:
  enable: true
  # true 表示每一页都加载mathjax.js
  # false 需要时加载，须在使用的Markdown Front-matter 加上 mathjax: true
  per_page: false
```

然后你需要修改一下默认的 markdown 渲染引擎来实现 MathJax 的效果。

查看 https://www.npmjs.com/package/hexo-renderer-kramed

```
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save
```

```
kramed:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: true
  smartLists: true
  smartypants: true
```

### **KaTeX (推荐)**

首先禁用 `MathJax`（如果你配置过 MathJax 的话），然后修改你的 `butterfly.yml` 以便加载 `katex.min.css`:

```
katex:
  enable: true
  # true 表示每一页都加载katex.js
  # false 需要时加载，须在使用的Markdown Front-matter 加上 katex: true
  per_page: false
  hide_scrollbar: true
```

你不需要添加 `katex.min.js` 来渲染数学方程。相应的你需要卸载你之前的 hexo 的 `markdown` 渲染器以及 `hexo-math`，然后安装新的 `hexo-renderer-markdown-it-plus`:

```
# 替换 `hexo-renderer-kramed` 或者 `hexo-renderer-marked` 等hexo的markdown渲染器
# 你可以在你的package.json里找到hexo的markdwon渲染器，并将其卸载
npm un hexo-renderer-marked --save

# or

npm un hexo-renderer-kramed --save

# 卸载 `hexo-math`
npm un hexo-math --save

# 然后安装 `hexo-renderer-markdown-it-plus`
npm i @upupming/hexo-renderer-markdown-it-plus --save
```

注意到 `hexo-renderer-markdown-it-plus` 已经无人持续维护，所以我们使用 `@upupming/hexo-renderer-markdown-it-plus`。 这份 fork 的代码使用了 `@neilsustc/markdown-it-katex` 同时它也是 VSCode 的插件 `Markdown All in One` 所使用的，所以我们可以获得最新的 `KaTex` 功能例如 `\tag{}`。

你还可以通过 `@neilsustc/markdown-it-katex` 控制 KaTeX 的设置，所有可配置的选项参见 [https://katex.org/docs/options.html](https://www.antmoe.com/posts/75a6347a/[https://katex.org/docs/options.html。](https://katex.org/docs/options.html。))。 比如你想要禁用掉 KaTeX 在命令行上输出的宂长的警告信息，你可以在根目录的 `_config.yml` 中使用下面的配置将 `strict` 设置为 false:

```
markdown_it_plus:
  plugins:
    - plugin:
      name: '@neilsustc/markdown-it-katex'
      enable: true
      options:
        strict: false
```

## **美化 / 特效**

> 颜色值必须被双引号包裹，就像 "#000" 而不是 #000。否则将会在构建的时候报错！

```
theme_color:
  enable: true
  main: "#49B1F5"
  paginator: "#00c4b6"
  button_hover: "#FF7242"
  text_selection: "#00c4b6"
  link_color: "#99a9bf"
  meta_color: "#858585"
  hr_color: "#A4D8FA"
  code_foreground: "#F47466"
  code_background: "rgba(27, 31, 35, .05)"
  toc_color: "#00c4b6"
  blockquote_padding_color: "#49b1f5"
  blockquote_background_color: "#49b1f5"
```

### **网站背景**

默认显示白色，可设置图片或者顔色

```
# 图片格式 background: url(http://xxxxxx.com/xxx.jpg)
# 顔色 background: '#49B202'
# 留空 显示白色
background: "#efefef"
# background: url(https://i.loli.net/2019/09/09/5oDRkWVKctx2b6A.png)
```

### **footer 背景**

footer 的背景会与 `top_img` 的一致，当设置 false 时，将与主题色一致。

```
# footer是否显示图片背景(与top_img一致)
footer_bg: true
```

### **打字效果**

```
# 打字效果
activate_power_mode:
  enable: true
  colorful: true # 冒光特效
  shake: false # 抖动特效
```

### **彩带**

```
canvas_ribbon:
  enable: false
  size: 150
  alpha: 0.6
  zIndex: -1
  click_to_change: false  #设置是否每次点击都更换綵带
  mobile: false # false 手机端不显示 true 手机端显示

```

### canvas-nest



```
canvas_nest:
  enable: true
  color: '0,0,255' #color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
  opacity: 0.7 # the opacity of line (0~1), default: 0.5.
  zIndex: -1 # z-index property of the background, default: -1.
  count: 99 # the number of lines, default: 99.
  mobile: false # false 手机端不显示 true 手机端显示

```

### **鼠标点击效果**

#### 烟花

```
fireworks:
  enable: true
```

#### 爱心

```
click_heart:
  enable: true
```

#### 文字

```
ClickShowText:
  enable: false
  text: 
    - 富强
    - 民主
    - 文明
    - 和谐
    - 自由
    - 平等
    - 公正
    - 法治
    - 爱国
    - 敬业
    - 诚信
    - 友善
  fontSize: 15px
```

### **文章页美化**

会改变 ol、ul、h1-h5 的样式

```
beautify:
  enable: true
  title-prefix-icon: '\f0c1'
  title-prefix-icon-color: "#F47466"
```

`title-prefix-icon` 填写的是 fontawesome 的 icon 的 Unicode 数

### **自定义字体**

可自行设置字体的 `font-family`

```
font:
  enable: true
  font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif
  code-font: consolas, Menlo, "PingFang SC", "Microsoft JhengHei","Microsoft YaHei", monospace, Helvetica Neue For Number
```

## **网站副标题**

> 适用于 版本号 >= V1.2.0
>
> V2.0.0 开始增加一些第三方 api 调用

**网站副标题**

```
# 主页subtitle
# 打字效果
subtitle: 
  enable: true
  # source调用第三方服务
  # source: false 关闭调用 
  # source: 1  调用金山词霸的每日一句（简体）
  # source: 2  调用一言网的一句话（简体） #https://hitokoto.cn/
  # source: 3  调用一句网（简体） http://yijuzhan.com/
  # source: 4  调用今日诗词（简体） https://www.jinrishici.com/
  # subtitle 会先显示 source , 再显示 sub 的内容
  source: false
  # (如果有英文逗号' , '，请使用转义字符 &#44;)
  sub:
    - 今日事&#44;今日毕
    - Never put off till tomorrow what you can do today
```

### **主页文章 cover 位置**

```
# 主页文章COVER显示位置
# 三个值可配置 left , right , both
# left(全部图片显示在左边)，right(全部图片显示在右边)，both(左右左右顺序显示)
index_post_cover: left
```

### 主页 top_img 显示大小

默认的显示为全屏。site-info 的区域会居中显示

```
# 主页设置
# 默认top_img全屏，site_info在中间
# 使用默认, 都无需填写（建议默认）
index_top_img_height:  #主页top_img高度 例如 300px/300em/300rem  不能使用百分比
```

> 注意：index_top_img_height 的值不能使用百分比。
>  2 个都不填的话，会使用默认值

## PWA

1. 打开 hexo 工作目录

2. npm install hexo-offline --save 或者 yarn add hexo-offline

3. 修改_config.yml 在站点_config.yml 中增加以下内容。


```
 offline config passed to sw-precache.
offline:
  maximumFileSizeToCacheInBytes: 10485760 # 缓存的最大文件大小，以字节为单位
  staticFileGlobs:
    - public/**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}
  # 静态文件合集，如果你的站点使用了例如webp格式的文件，请将文件类型添加进去。
  stripPrefix: public
  verbose: true
  runtimeCaching:
    # CDNs - should be cacheFirst, since they should be used specific versions so should not change
    - urlPattern: /* # 如果你需要加载CDN资源，请配置该选项，如果没有，可以不配置。
      handler: cacheFirst
      options:
        origin: your_websie_url # 可替换成你的 url

```

在 butterfly.yml 中开启 pwa 选项。

```
pwa:
  enable: true
  manifest: /img/pwa/manifest.json
  theme_color: "#fff"
  apple_touch_icon: /img/pwa/apple-touch-icon.png
  favicon_32_32: /img/pwa/32.png
  favicon_16_16: /img/pwa/16.png
  mask_icon: /img/pwa/safari-pinned-tab.svg
```

在创建 source/ 目录中创建 manifest.json 文件。

```
{
    "name": "string", //应用全称
    "short_name": "Junzhou", //应用简称
    "theme_color": "#49b1f5", //匹配浏览器的地址栏颜色
    "background_color": "#49b1f5",//加载应用时的背景色
    "display": "standalone",//首选显示模式 其他选项有：fullscreen,minimal-ui,browser
    "scope": "/",
    "start_url": "/",
    "icons": [ //该数组指定icons图标参数，用来时适配不同设备（需为png，至少包含一个192px*192px的图标）
        {
          "src": "images/pwaicons/36.png", //图标文件的目录，需在source/目录下自行创建。
          "sizes": "36x36",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/48.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
      ],
      "splash_pages": null //配置自定义启动动画。
  }


```

你也可以通过 Web App Manifest 快速创建 manifest.json。（Web App Manifest 要求至少包含一个 512*512 像素的图标）

可以通过 Chrome 插件 Lighthouse 检查 PWA 配置是否生效以及配置是否正确。

打开博客页面
启动 Lighthouse 插件 (Lighthouse 插件要求至少包含一个 512*512 像素的图标)
关于 PWA（渐进式增强 Web 应用）的更多内容请参閲 Google Tools for Web Developers

## **字数统计**

要为 Butterfly 配上字数统计特性，你需要如下几个步骤:

1. 打开 hexo 工作目录
2. `npm install hexo-wordcount --save` or `yarn add hexo-wordcount`

```
wordcount:
  enable: true
```

## **文章置顶**

要为你一些文章置顶，你需要如下步骤:

1. 打开 hexo 工作目录
2. `npm uninstall hexo-generator-index --save` 然后 `npm install hexo-generator-index-pin-top --save`
3. 你要在文章的 `front-matter` 区域里添加 `top: True` 属性来把这篇文章置顶。
4. 你可以参考 [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top) 这个仓库来了解更多细节。

## **图片放大查看模式**

### **fancybox**

```
# fancybox http://fancyapps.com/fancybox/3/
fancybox:
  enable: true
```

### **medium_zoom**

```
medium_zoom:
  enable: true
```

## **nackbar 弹窗**

```
# Snackbar 弹窗
# https://github.com/polonel/SnackBar
# position 弹窗位置
# 可选 top-left / top-center / top-right / bottom-left / bottom-center / bottom-right
snackbar:
  enable: true
  position: bottom-left
  bg_light: '#49b1f5' #light mode时弹窗背景
  bg_dark: '#2d3035' #dark mode时弹窗背景
```

## 豆瓣插件页面img设置

很多人使用 hexo-douban 这款插件。但是该插件是直接生成相应的网页，而不会去读取对应的 markdown 文件。因此，可在设置里进行相应的配置

```
# 如果你有使用hexo-douban，可配置这个
douban:  
    meta: true 
    movies_img: 
    books_img:  
    games_img:
```

由于豆瓣开启了反盗链，因此，一些浏览器（safari）会无法显示图片，可把 meta 设为 true。但此操作会导致一些插件失效（例如：不蒜子）。
