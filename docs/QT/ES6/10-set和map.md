# Set 和 Map 数据结构
## Set
### 基本用法
1. ES6 提供了一种新的数据结构---Set，类似于数组，但是成员值都是唯一的，没有重复。Set 本身就是一个构造函数，用来生成 Set 数据结构
```js
const s = new Set();
[2,3,4,5,6,6,6].forEach(x => s.add(x));// 通过 add 方法添加
for (let i of s) {
    console.log(i);// 2,3,4,5
}
let a = [...s];//使用结构赋值方法，将s对成数组
console.log(a);// [2,3,4,5]

console.log(s.size); // 使用size 获取 s 内value的个数
```
2. 应用一：去除重复成员
```js
// [...new Set(array)]
const a = new Set([2,2,3,3,3,4,4]);
let c = [...a];// [2,3,4]
```
3. 向Set 中添加值时不会发生数据转换，Set 判断NaN等于自身，精确等于运算符（===）认为NaN不等于本身。Set 内部判断两个值是否是相同时使用的算法叫做"Same-value equality",
### Set实例的属性和方法
1. Set 实例方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员），下面先说说4个操作方法：
    + add（value）：添加某个值，返回Set 结构本身。
    + delete（value）：删除某个值，返回一个布尔值，表示删除成功与否
    + has（value）：返回一个布尔值，表示参数是否为Set成员
    + clear（）：清除所有成员，没有返回值
### 遍历操作
1. Set 结构的实例有4个便利方法：
    + keys():返回键名的遍历器。
    + values(): 返回键值得遍历器
    + entries(): 返回键值对的遍历器（就是键名和键值为一对）
    + forEach(): 使用回调函数遍历每个成员。
2. 由于 Set 结构没有键名，只有键值（可以说键名和键值是一样的），所以keys 方法和 values 方法遍历的完全一致。
    ```js
    let set = new set(['red','pink','blue']);
    
    for (let item of set.keys()) {
        console.log(item);// red pink blue
    } ;
    
    for (let item of set.values()) {
        console.log(item);// red pink blue
    } ;
    
    for (let item of set.entries()) {
        console.log(item);// ['red','red'] ['pink','pink'] ['blue','blue']
    } ;
    ```
Set 结构实例默认都是可以遍历的，遍历器生成的函数就是它的 values 方法，这就意味着我们可以省略而使用 for...of 方法进行循环遍历 Set。
3. forEach()
    + 可以使 forEach 对 Set 进行一些操作
    ```js
    let set = new set([1,2,3,4]);
    set.forEach((value) =>{console.log(value*2)});
    // 2 4 6 8
    ``` 
### 遍历器的应用
1. 首先可以利用扩展运算符和 set 结构给数组去重
```js
let arr = [3,5,4,5,6,3];
let unique = [...new Set(arr)];
console.log(unique);// [3,5,4,6]
```
2. 实现交集，并集，差集
```js
let a = new Set([1,2,3]);
let b = new Set([4,3,2]);
// 交集
let union = new Set([...a, ...b]);
console.log(union);// {1,2,3,4}

// 并集 两个都有的
let inter = new Set([...a].filter(x=> b.has(x)));
console.log(inter);// {2, 3}

// 差集，这里就是找a中 b没有的
let dif = new Set([...a].filter(x=> !b.has(x)))
```
## Map
### 含义和基本用法
JavaScript 的对象 本质上是键值对的集合（Hash结构），只能用字符串作为键，那ES6 提供了Mao数据结构，他也是键值对的集合，但是它的'键'是各种数据类型的值，就是说 Object 结构是"字符串-值"，而Map 是"值-值"，是一种更加完善的Hash结构。
