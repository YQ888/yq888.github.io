---
title: yilia设置分类和标签、设置随笔、设置归档
tags:
  - 分类（categories）
  - 标签（tags）
categories: yilia
declare: true
cover: >-
  http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=http%3A%2F%2Fpic2.zhimg.com%2Fv2-f9654b817205f6af3e472af284ecc2b2_1200x500.jpg&thumburl=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1051132835%2C1344326547%26fm%3D26%26gp%3D0.jpg
abbrlink: 657161319
date: 2020-04-02 00:00:00
---



使用yilia主题的时候发现hexo没有内置分类和标签，这里给大家分享一下设置过程

# 设置index.md

在git面板上输入

```
hexo new page "categories"
```

```
hexo new page "tags"
```

​	博客根目录\source\categories生成index.md文件，打开该文件，将文件开头设置如下：

```
title: categories |分类 |归档
date: 2020-03-20 16:39:03
type: "categories"
layout: "categories"
comments: false #关闭评论
```

​	博客根目录\source\tags生成index.md文件，打开该文件，将文件开头设置如下：

```
title: 标签
date: 2020-03-20 16:50:04
type: "tags"
```

# 配置yilia/_config.yml 添加 categories | tags 到 menu 以及设置随笔

这里的随笔也就是把有随笔标签的文章做一个归类

```
  主页: /
  随笔: /tags/随笔/
  分类: /categories
  个人简历: /grjl/ft5_94_profile/index.html
```

# 配置layout/_partial/article.ejs

找到 <div class="article-entry" itemprop="articleBody"> 这一行

 div 里面的内容（原有的内容）全部替换(如果你之前在这个div里配置过其他的文件，新增的文件就得保留，以免破坏其他的布局)为：

```jsp
<% if (page.type === "tags") { %>
<div class="tag-cloud">
	<div class="tag-cloud-title">
	<%- _p('counter.tag_cloud', site.tags.length) %>
	</div>

	<div class="tag-cloud-tags">
	<%- tagcloud({
		min_font: 12,
		max_font: 30,
		amount: 200,
		color: true,
		start_color: '#ccc',
		end_color: '#111'
		}) %>
	</div>
</div>

<% } else if (page.type === 'categories') { %>

<div class="category-all-page">
	<div class="category-all-title">
	<%- _p('counter.categories', site.categories.length) %>
	</div>
	
	<div class="category-all">
	<%- list_categories() %>
	</div>
	
</div>

<% } else { %>

	<% if (post.excerpt && index){ %>		<%- post.excerpt %>
	<% } else { %>
		<%- post.content %>
	<% } %>
<% } %>
```

# 修改样式

找到yilia\source-src\css\article.scss在该文件末尾添加

```css
/*tag-cloud*/
.tag-cloud {
  text-align: center;
  margin-top: 50px;
}
.tag-cloud a {
  display: inline-block;
  margin: 10px;
}
.tag-cloud-title {
  font-weight: 700;
  font-size: 24px;
}
.tag-cloud-tags {
  margin-top: 15px;
  a {
    display: inline-block;
    text-decoration: none;
    font-weight: normal;
    font-size: 10px;
    color: #fff;
    line-height: normal;
    padding: 5px 5px 5px 10px;
    position: relative;
    border-radius: 0 5px 5px 0;
    font-family: Menlo, Monaco, "Andale Mono", "lucida console", "Courier New", monospace;
    &:hover {
      opacity: 0.8;
    }
    &:before {
      content: " ";
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
      left: -18px;
      border: 9px solid transparent;
    }
    &:after {
      content: " ";
      width: 4px;
      height: 4px;
      
      border-radius: 4px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, .3);
      position: absolute;
      top: 7px;
      left: 2px;
    }
  }
  a.color1 {
    background: #FF945C;
    &:before {
      border-right-color: #FF945C;
    }
  }
  a.color2 {
    background: #F5C7B7;
    &:before {
      border-right-color: #F5C7B7;
    }
  }
  a.color3 {
    background: #BA8F6C;
    &:before {
      border-right-color: #BA8F6C;
    }
  }
  a.color4 {
    background: #CFB7C4;
    &:before {
      border-right-color: #CFB7C4;
    }
  }
  a.color5 {
    background: #7B5D5F;
    &:before {
      border-right-color: #7B5D5F;
    }
  }
}

/*category-all-page*/
.category-all-page {
  margin-top: 50px;
  .category-all-title {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }
  .category-list-item:after {
    content: '';
    clear: both;
    display: table;
  }
  .category-list-count {
    float: right;
    margin-left: 5px;
  }
  .category-list-count:before {
    content: '一共 ';
  }
  .category-list-count:after {
    content: ' 篇文章';
  }
}
```

# 给文章设置分类和标签（多标签，多级分类）

在文章顶部输入---回车输入以下配置

```
tags: [分类（categories）, 标签（tags）] 
categories: [yilia, 分类和标签、随笔]
```

tags:设置标签，如果单个标签就直接一个就欧克，如果是多个，用[标签1 (空格),标签2]		

**注意:在冒号后面有一个空格**

分类同理；

# 设置归档

在yilia的_config配置文件里的mean菜单下添加_

```
  归档:  /archives/index.html
```

