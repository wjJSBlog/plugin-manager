# Markdown 基本语法

## 标题

        语法格式:
        # h1
        ## h2
        ### h3
        .
        .
        ###### h6

        强调语法:
        Alt-H1
        ======
        Alt-H2
        ------

## 表格

    语法格式:

    | Item      |    Value | Qty  |
    | :-------- | --------:| :--: |
    | Computer  | 1600 USD |  5   |
    | Phone     |   12 USD |  12  |
    | Pipe      |    1 USD | 234  |

        :-------- 左对齐
        --------: 右对齐
        :--: 居中对齐

    外管(|)是可以选的,您不需要将原始Markdown排列好。也可以使用内连的markdown语法。

    Markdown | Less | Pretty
    -- | -- | --
    *Still* | `renders` | **nicely**
    1 | 2 | 3

### 表格

| Item      |    Value | Qty  |
| :-------- | --------:| :--: |
| Computer  | 1600 USD |  5   |
| Phone     |   12 USD |  12  |
| Pipe      |    1 USD | 234  |

Markdown | Less | Pretty
-- | -- | --
*Still* | `renders` | **nicely**
1 | 2 | 3

## 列表

    有序列表
        1. XXXXXXX
        2. XXXXXXX
    无序列表
        * XXXXXXX
        + XXXXXXX
        - XXXXXXX

## 超链接

    两种方式创建链接
    行内方式

        [I'm an inline-style link](https://www.google.com)
        [I'm an inline-style link](https://www.google.com, "添加title提示")

    引用方式
        [百度][1]
        [火狐][2]
    [1]: http://www.baidu.com
    [2]: https://www.mozilla.org

### 行内样式

[I'm an inline-style link](https://www.google.com) 这是行内样式写法

### 引用样式

[百度][1]
[火狐][2]

[1]: http://www.baidu.com
[2]: https://www.mozilla.org

## Images

    行内方式:
        ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

    引用方式:
        ![alt text][logo]
    [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"


### 行内样式

Inline-style:
    ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

### 引用样式

Reference-style:
    ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## 代码或语法突出

    行内代码高亮
        Inline `code` has `back-ticks around` it.

    块级代码高亮
        ``` language
        ```

### 行内高亮

Inline `code` has `back-ticks around` it.

### 代码块示例

``` javascript
    alert('示例代码')
```

## 引用文字

    > 这是第一行引用文字
    > 这是第二行引用文字
    用"> " 表示引用文字

## 字体类型

    斜体
        *斜体*
        _斜体_
    粗体
        **粗体**
        __粗体__

<dl>
    <dd><a href="http://daringfireball.net/projects/markdown/">Markdown官方网站</a></dd> 
    <dd><a href="https://stackedit.io/ ">推荐一款在线的Markdown编辑器</a></dd>
</dl>