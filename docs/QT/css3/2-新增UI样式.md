# 新增UI样式
## 文本新增样式
1. opacity：不可继承 指定透明度 0~1之间 
2. 新增颜色模式rgba，a是透明度 
3. 文字阴影：text-shadow
    ```css
    /* 单层阴影*/
    /* color x偏移量 y偏移量 模糊半径*/
    p{text-shadow: gray 5px 5px 5px 10px }
    
    /* 双重阴影*/
    h2{text-shadow:gray 5px 5px 10px,pink 10px 10px 10px }
    ```
4. 文字描边
    + 只有 webkit 内核才拥有 -webkit-text-stroke:4px,pink;
5. 文字排版
    + direction 控制文字方向
    + text-overflow 溢出内容的情况：可以被裁剪，也可以显示省略号
    ```css
    p{
      /* 三行代码一个都不能少*/
      white-space: nowrap;/*不换行*/
      overflow: hidden;/* 溢出裁剪 */
      text-overflow: ellipsis;/*溢出产生省略号*/
    }
    ```
## 盒模型新增样式
1. 盒子模型阴影
    + inset 表示向内扩散阴影，默认是向外扩散阴影
    ```css
    div{
        /* color x偏移量 y偏移量 模糊半径*/
        box-shadow: gray 10px 10px 10px ;
    }
    ```
2. 倒影 
    + webkit内核专用，其他用不了，但是安卓开发也可以用 -webkit-box-reflect: left 10px;
3. 标准盒子模型。box-sizing:border-box 包括 border 和 padding
    + 给定值 width = border + padding + 内容 width
    + 给定值 height = border + padding + 内容 height
## 边框图片
1. border-image-source（不可继承）
    + 属性定义使用一张图片来代替边框样式；如果只为none，侧仍然使用border-style定义的样式
2. border-image-slice（默认值100%，不可继承）
    + 属性会通过规范将 border-image-source 的图片明确的分隔为9个区域：四个角，四边以及中心区域，并且指定偏移量
3. border-image-repeat（不可继承）
    + 定义图片如何填充边框，或者单个值，设置所有的边框；或者两个值.分别设置水平与垂直的边框
        - stretch：拉伸（默认值）
        - repeat，round：平铺
4. border-image-width:定义边框图片大小
5. border-image-outset:可以使图片边框图片往外扩
## 扩展：让滚动条出现在body 或者 wrap 上
1. 滚动条其实是在窗口上，不再 html 也不在 body 上（永远不会出现在 html上）
2. 让滚动条出现在body上
    + 让html 和body 同时拥有overflow：auto
    + 为了明显看出是在 html 和 body上我们加个 margin 和 border 
    ```css
    *{
        margin: 0;
        padding: 0;
    }
    html{
        margin: 30px;
        border: 1px solid pink ;
        overflow: auto;
    }
    body{
        margin: 30px;  
        border: 1px solid pink ;
        overflow: auto;
    }
    ```
3. 然滚动条出现在 wrap 上
    + overflow:hidden 可禁止系统滚动条，
    + 用外层div#wrap来充当滚动条，高度要继承父级元素
    ```html
    <style>
        *{margin: 0;padding: 0;}
        html{
            height: 100%;
            overflow: hidden;
        }
        body{
            height: 100%;
            overflow: hidden;
        }
        #wrap {
            height: 100%;
            border: 1px solid deeppink;
            overflow: auto;
        }
    </style>
    <div id="wrap">
        <div id="test" style="height: 3000px">撑开出现滚动条用的</div>
    </div>
    ```

