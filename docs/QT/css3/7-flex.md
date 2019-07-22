# flex
## 旧版 flex
### 容器
1. 容器的布局方向
    + -webkit-box-orient
      - vertical 主轴为Y轴
      - horizontal 主轴为X轴（默认）
2. 容器的排列方向
    + -webkit-box-direction：
      - reverse;控制主轴方向向左
      - normal;控制主轴方向向右，默认方向
      
### 项目
1. 弹性空间管理：将富裕空间按比例分配到各个项目上
    + -webkit-box-flex:1; 默认值：0  不可继承
```css{8,12}
 #wrap >.test{
            height: 50px;
            width: 50px;
            background: pink;
            line-height: 50px;
            text-align: center;
            /*将主轴上的富裕空间按比例分配到项目上*/
            -webkit-box-flex: 1;
            /*弹性因子，计算方式平均分配：每个项目分配到的富裕空间=富裕空间/项目个数 * 弹性因子*/
        }
        #wrap >.test:nth-child(1){
            -webkit-box-flex: 4;
           /* 让第一个项目弹性因子为4，那么弹性因子总为8 */
           /* 第一个项目分配到的富裕空间 =150px/8 *4 = 75px */
           /* 其余项目分配到的富裕空间 = 150px/8 *1 =18.75px */
        }
```
### 富裕空间管理
1. 主轴： -webkit-box-pack：start；不会给项目去分配空间，只确定富裕空间的位置
    + start：富裕空间在右边（X）  下边（Y）
    + end：富裕空间在左边（x）  上边（Y）
    + center：富裕空间在两边
    + justify：富裕空间在项目之间
    
2. 侧轴 -webkit-box-align：center；不会给项目区分配空间，只确定赋予空间的位置
    + start：富裕空间在右边（X）  下边（Y）
    + end:富裕空间在左边（x）  上边（Y）
    + center:富裕空间在两边
## 新版 flex
### 容器排列方向
1. 控制主轴和方向
    ```text
    flex-direction:
                    row：		    从左往右的X轴
                    column；		从上往下的Y轴
                    column-reverse；从下往上的Y轴
    row-reverse;/*主轴为行（X轴），侧轴为列（Y轴） 主轴方向往左*/
    ```
::: tip
元素的排列永远默认排列在主轴的正方向
:::
### 富裕空间管理 
1. 主轴 justify-content
    + flex-start：富裕空间在主轴的正方向
    + flex-end：富裕空间在主轴的负方向
    + center；富裕空间在主轴两边
    + space-between：富裕空间在项目之间
    + space-around（box 没有的）：富裕空间在项目两边
    
2. 侧轴 align-items 
    + flex-start:富裕空间在侧轴的正方向
    + flex-end：富裕空间在侧轴的负方向
    + center：富裕空间在侧轴的两边
    + baseline（box 没有的）：按基线对齐
    + stretch（box 没有的）：等高布局，项目是没有高度的才能实现
### 容器
1. flex-wrap：默认值 nowrap 不可继承
    + 控制容器为单行/列还是多行/列，并且定义侧轴的方向，新行列侧轴方向是否堆砌
    + wrap 
    + wrap-reverse
    
2. align-content：默认值 stretch
    + 定义弹性容器的侧轴方向上有额外空间时，如何排布每一行/列。当弹性容器只有一行/列无作用
    + flex-start
    + flex-end
    + center
    + space-between
    + space-around
    + stretch
    
3. flex-flow 是flex-direction 和 flex-wrap 的简写，用来控制主轴方向和侧轴方向（当然确定了主轴方向侧轴必然定下了）
### 项目
1. order: 定义项目的排列顺序 order 值越大，项目越靠后
    ```css
    #wrap> test:nth-child(1){
        order: 3;/* 将本来排序在第一的，排到第三*/
    }
    ```
    
2. align-self 项目自身富裕空间的管理
    + auto -- 设置为父元素align-items值，如果该元素没有父元素，就设置为stretch
    + flex-start  -- flex元素会对齐到 X轴 的首端
    + flex-end -- flex元素会对齐到 X轴 的尾端
    + center -- flex 元素会对对齐到X轴中间，如果该元素的 X轴 的尺寸大于flex容器，将在两个方向均等溢出
    + baseline -- 所有的flex 元素会沿着基线对齐
    + stretch -- flex元素将会基于容器的宽高，按照自身 margin box 的X轴拉伸
    
3. flex-shrink（起作用的前提：flex-wrap：nowrap）
    + flex-grow 属性定义弹性盒子项（flex-item）的拉伸因子，默认值为0
    + flex-shrink 属性定义了 flex元素的收缩因子，默认值为1
    
4. flex-basis：伸缩规则计算的基准值（默认拿width或者height）默认值为 auto
    + 指定了flex 元素在主轴方向上的初始大小
    + 在flex简写属性中 flex-basis 默认值为 0
    
5. flex-grow：弹性因子（n）
    + 如果没有定义 flex-basis，那么就是width或者height，如果定义了 flex-basis：0，那么 flex-basis 的总和为 0
    ```text
    可用空间 = （容器大小-所有相邻项目flex-basis的总和）
    可扩展空间 = （可用空间/所有相邻项目flex-grow（弹性因子）总和）
    每项伸缩大小 = （伸缩基准值 + （可扩展空间 x flex-grow（弹性因子）值））
    ```
    
6. flex-shrink：收缩因子（n）
    + 每项flex收缩 = 伸展基准值- （收缩比例/ 收缩比例总和 x 溢出空间）
    ```text
    1.计算收缩因子与基准值乘的总和、
    2.计算收缩因数
    收缩因数= （项目的收缩因子 x 项目基准值）/第一步计算总和
    3.移除空间的计算
    移除空间 = 项目收缩因数 * 负溢出的空间
    ```

::: tip 
flex: 1; 集合下面的三个
flex-shrink: 1; 收缩因子 现在在这不起什么作用  
flex-grow: 1; 弹性因子为1，将富裕空间等分  
flex-basis:0; 将初始宽度设置为0，富裕空间为容器宽度  
:::
