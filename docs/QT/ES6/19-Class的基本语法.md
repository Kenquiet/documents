# Class的基本语法

## 简介
1.. ES6 中的Class（类）可以看做一个语法糖，它的绝大部分功能ES5都能做到，新的Class写法只是让对象原型的写法更加清晰而已。
2. ES6 的类完全可以看做构造函数的另一种写法
    ```js
    // 定义一个 Point 类
    class Point{
        
    }
    ```
3. 事实上，类的所有方法都定义在类的prototype 属性上
```js
// 定义一个 Point 类
class Point {
    //定义toString 方法
    toString(){
        
    }
}
// 判断 Point 的类型
console.log(typeof Point); // function
```
4. 由于类的方法（除了constructor以外）都定义在了 prototype 对象上，所以类的新方法可以添加在 prototype对象上，Object.assign 方法可以很方便地一次向类中添加多个方法
    ```js
    // 定义一个Point 类
    class Point {
        constructor(){
            
        }
    }
    // 向函数中添加 方法
    Object.assign(Point.prototype,{
        toString(){},//其实这个方法在 Point类内部就已经有了，我们不需要添加，直接调用就好了
        toValue(){}
    })
    ```
5. 累的属性名也可以采用表达式
    ```js
    let methodName = [getArea];
    class Point {
        [methodName](){
            
        }
    }
    ```
6. 类的调用必须使用 new 来调用，否则会报错
    ```js
    class b {
      constructor(){
          console.log('被调用了')
      }
    }
    new b();// 被调用了
    ```
## constructor 方法
1. constructor 方法是类默认方法，一个类必须有一个 constructor方法，如果我们没有定义，那就会默认添加。
## 类的实例对象
1. 实例属性除非显式定义在其本身(this对象)上，否则都是定义在原型(即class)上
2. 类的所有实例共享一个原型对象，既然共享原型对象，那么只要有一个实例中向原型添加方法/属性，那么其他实例也是可以使用。
    ```js
    class Point {
       // 接收到的实参使用 this.x 和this.y 来接收，里面的方法就可以使用this.x 和this.y
        constructor(x,y){
          this.x = x;
          this.y = y;
        }
        toString(){
          return "(" + this.x + "," + this.y + ")";
        }
    }
    let point = new Point(2,3);
    let point1 = new Point(3,2);
    console.log(point.__proto__ === point1.__proto__);//true
    console.log(point1.toString());// (3,2)
    console.log(point.toString());//(2,3)
    ```
## Class 表达式
1. 表达式一：
    ```js
    const MyClass = class Me{
        getClassName(){
            return Me.name;
        }
    };
    let name = new MyClass();
    console.log(name.getClassName);// Me
    console.log(Me.name);// Me is not defined
    ```
    Me 只是在内部定义有，如果Class内部没有用到可以写成下面的形式：
    ```js
    const MyClass = class{ ...};
    ```
2. 表达式二：立即执行的Class
    ```js
    let person = new class{
        constructor(name){
            this.name = name;
        }
        sayName(){
            console.log(this.name);
        }
    }('李四');
    person.sayName();// 李四
    ```
    person是一个立即执行的class实例
## 不存在变量提升
类是不存在变量提升的，如果未定义就使用那么将报错，但是class有继承
```js
{
    let foo = class{};
    class Bar extends foo { }
}
```
Bar 继承了 foo ，而class 类不存在变量提升，所以不会报错
## 私有方法 
1. class 中的私有方法可以利用 Symbol 来实现,私有方法就是外部不能进行引用的，只有在class内部才可以使用
    ```js
    const bar = Symbol('bar');
    const snaf = Symbol('snaf');
    
    export default class MyClass {
     //公有方法
     foo(baz){
         this[bar](baz);
     }
     //私有方法
     [bar](baz){
         return this[snaf] =baz;
     }
    }
    ```
## Class 的静态方法
1. 所有在类中定义的方法都会被**实例继承**，如果在方法前面加上static 关键字，那么这个方法不会被实例继承，只能通过类调用
    ```js
    class Foo{
        static classMethod(){
            return 'hello';
        }
    }
    Foo.classMethod();// hello
    let foo = new Foo();
    foo.classMethod();// TypeError: foo.classMethod is not a function
    ```
    上面直接通过 Foo 类进行调用，通过实例进行调用则会报错
2. 父类的静态方法可以被子类继承
    ```js
    class Foo {
        static classMethod(){
            return 'hello';
        }
    }
    // 继承了父类的静态方法
    class sub extends Foo{  
    }
    sub.classMethod();// hello
    // 继承了父类的方法，也可以从super对象上调用
    class Bar extends Foo{
      static classMethod(){
          return super.classMethod() + ' too';
      }
    }
    Bar.classMethod();// hello too
    ```
## class 的静态属性和实例属性
### Class 的实例属性
1. Class 的实例属性可以用等式写入类的定义中：
    ```js
    class MyClass{
        MyProp = 20;
        constructor(){
            console.log(this.MyProp);//20
        }
    }
    ```
2. Class 实例的继承,新的写法
    ```js
    class RCT extends RCMT{
        state;//声明
        constructor(props) {
         super(props);
         this.state = {
             count: 0
         }
        }   
    }
    ```
### class 静态属性
1. ES6明确规定，Class内部只有静态方法，没有静态属性，但是一下方法是可行的(转换思想)
    ```js
    class Foo{
    }
    Foo.prop=1;
    console.log(Foo.prop);
    ```
    静态属性是指Class 本身的属性，并不是定义在实例对象上的属性。也只有这个方法可行了
2. 可以换一种新的写法,这种新的写法非常方便
    ```js
    class myClass{
      static myStaticProp = 42;
      constructor() {
          console.log(myClass.myStaticProp);//42
      }
      
    }
    ```
