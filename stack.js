/**
 * @name 今天我们来讲讲栈，这个计算机科学中非常重要的一种数据结构
 * @see  栈（LIFO）,简称很有意思哈，就是 last in first  out,最后进来，第一个出去
 * @see  栈有三个主要方法：
 * @see   push();pop();peek(),分别是入栈，出栈，预览栈顶元素
 * @param 我们实现一个栈，底层数据结构采用数组,记得年初去面试火花思维的时候就考过一题，实现一个栈的功能，用js
 */

/*  定义stack 构造函数 */
function Stack() {
  this.dataStore = []; // dataStore 保存栈内元素，初始化为空数组
  this.top = 0; // 记录栈顶位置，起始位置为0
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

// 向栈顶压入一个元素时，需要将其保存在变量top对应的位置，然后将其top值加 1
function push(element) {
  this.dataStore[this.top++] = element;
}
// pop 出栈, 注意这里只是返回栈顶元素
function pop() {
  return this.dataStore[--this.top];
}
// peek()
function peek() {
  return this.dataStore[this.top - 1];
}
// 有时候需要知道栈内存储了多少个元素，length()方法
function length() {
  return this.top;
}
// 最后，我们清空栈，通过一个clear()方法
function clear() {
  return (this.top = 0);
}

// 其实细心的你会发现，这里其实是用上了es5的函数提升，this.push=push  在赋值时，其实还没有push ,那其实更严禁的会是下面这个demo
function StackDemo() {
  this.dataStore = [];
  this.top = 0;
  this.push = function(element) {
    this.dataStore[this.top++] = element;
  };
  this.pop = function() {
    return this.dataStore[--this.top];
  };
  this.peek = function() {
    return this.dataStore[this.top - 1];
  };
  this.length = function() {
    return this.top;
  };
  this.clear = function() {
    return (this.top = 0);
  };
}

// 实例化
let newStack = new StackDemo();
newStack.clear(); // 等可以实现一系列方法

// 下面我们用class类来实现这个栈  ES6
class classStack {
  // 构造函数
  constructor() {
    this.count = 0;
    this.items = [];
  }
  // 栈方法
  push() {
    this.items[this.count++] = element;
  }
  peek() {
    return this.items[this.count - 1];
  }
  len() {
    return this.count;
  }
  clear() {
    return (this.top = 0);
  }
}

console.info(typeof classStack); // function
// 这里额外插一句跟数据结构没有关系的，就是es6跟es7的class的写法差别，

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`);
}

observe(print);
person.name = '李四';
// 输出
// 李四, 20
