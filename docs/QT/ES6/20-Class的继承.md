# Class 的继承

## 简介
1. Class 可以通过 extends 关键字实现继承
2. 子类必须在constructor 方法调用 super 方法，否则会报错，因为子类没有自己的 this 对象，而是继承父类的 this 对象
3. ES6 的继承机制：先创造父类的实例对象this(所以必须先调用super方法)，然后在用子类的构造函数修改this
4. 在子类的构造函数中，只有调用了super之后才可以使用this关键字，否则会报错。
    ```js
    // 基础代码骨架
    class point {
      constructor(){    
      }
    }
    
    class ColorPoint extends point {
      constructor(props) {
       super(props);
       this.color = color;
      }
    }
    ```
## super 关键字
1. ES6 要求，子类的构造函数必须执行一次super函数，否者 JavaScript引擎会报错。
2. super() 内部的this 指向的是子函数，而非父函数
3. super() 作为函数时，只能在子类构造函数中使用，其他地方使用会报错。
4. super 作为对象使用时，**在普通方法中指向的是父类的原型对象。在静态方法中指向父类**。所以super.p()相当于A.prototype.p()
    ```js
    // 在普通方法中
    class A {
       // 构造函数定义方法都是在原型上
      p(){
          return 2
      }
    }
    class B extends A {
      constructor() {
       super();
       console.log(super.p());//2
      }
    }
    let b = new B();
    ```
::: tip
由于 super 指向父类的原型对象，所以定义在父类实例上的方法或者属性是无法通过 super 进行调用的。
:::
## 类的prototype属性和__proto__属性
1. Class 作为构造函数的语法糖，同时有 prototype 属性和 __proto__ 属性，因此同时存在两条继承链
    + 子类的 __proto__ 属性表示构造函数的继承，总是指向父类
    + 子类的 prototype 属性的 __proto__ 属性表示方法的继承，总是指向父类的 prototype 属性
    ```js
    class A {
      
    }
    class B extends A{
      
    }
    console.log(B.__proto__ === A);//true
    console.log(B.prototype.__proto__ === A.prototype)//true
    ```
2. 可以这么说：作为对象，子类(B)的原型( __proto__ 属性)是父类(A)；作为构造函数，子类(B)的原型（prototype 属性）是父类的实例。
:::tip
对象：子的原型是父，子的原型的原型就是父的原型
:::
