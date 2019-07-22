# 大结局
## each 方法用来遍历 jQuery
```js{}
// index: 是 DOM 对象对应的下标
// element: 是获取到一个 DOM 对象
$('li').each(function(index,element){

})
```
## $冲突
当 jquery 的 $ 与别的冲突时，*我们可以将jquery引用放在所有引用的最下面* 
比如：和 itcast.js 发生冲突时，那么将 jquery 引用放在 itcast.js 引用下面
```js{}
<script src="itcast.js"></script>
<script src="jquery-1.12.4.js"></script>
<script>
// 这时，jquery可以有一个方法释放 $的控制权
// 那 jquery中用什么呢？可以将方法赋值给一个变量,jquery 就可以使用 $$,$$里面的方法和$ 一样
// 也可以使用备胎：jQuery
let $$ = $.noConflict();

jQuery（function () {

}）
$$(function () {

})
</script>
```

## 常用插件
### jquery.color.js
animate 不支持颜色的渐变，但是使用jquery.color.js，就可以支持颜色渐变了  
使用插件的步骤：
    1. 引用jQuery文件
    2. 引用插件（如果有用到css的话，需要引入css）
    3. 使用插件
```js{}
<script src="jquery-1.12.4.js"></script>
<script src="jquery.color.js"></script>
<script>
$(function(){
    // 回调函数可用可以不用
    // 注意：颜色不要使用名称，要使用16进制的：例如 pink = #ffc0cb，要使用#ffc0cb，不能使用 pink，因为不认识pink
    $('div').animate({backgroundColor:'#ffc0cb'},3000,function(){
        alert('呵呵')；
    });
})
</script>
```
### jquery.lazyload.js
1. 懒加载插件，最常用的就是图片的懒加载(懒加载就是页面刷新之后没有在窗口的之内的先不加载，当页面下滑时再加载)
2. 什么时候才使用懒加载：当图片量非常多的时候可以使用懒加载，图片很少就没必要使用懒加载了
```js{}
<img class= "lazy" data-original="1.png">
<script src="jquery-1.12.4.js"></script>
<script src="jquery.lazyload.js"></script>
<script>
$(function () {
    $("img .lazy").lazyload();
})
</script>
```
