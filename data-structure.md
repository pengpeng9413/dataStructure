# 这节我们来聊聊数据结构相关的知识点

## 时间复杂度

> 一个算法的时间复杂度反映了程序运行从开始到结束所需要的时间。  
> 把算法中基本操作重复执行的次数（频度）作为算法的时间复杂度
> 没有循环语句，记作 O(1)，也称为常数阶。只有一重循环，则算法的基本操作的执行频度与问题规模 n 呈线性增大关系，记作 O（n），也叫线性阶。

**常见的时间复杂度有**

- O(1): Constant Complexity: Constant 常数复杂度

- O(log n): Logarithmic Complexity: 对数复杂度

- O(n): Linear Complexity: 线性时间复杂度 -- 例如递归，常系数尽管很大

- O(n^2): N square Complexity 平⽅

- O(n^3): N square Complexity ⽴方

- O(2^n): Exponential Growth 指数

- O(n!): Factorial 阶乘

## 空间复杂度

> 一个程序的空间复杂度是指运行完一个程序所需内存的大小。利用程序的空间复杂度，  
> 可以对程序的运行所需要的内存多少有个预先估计  
> 一个程序执行时除了需要存储空间和存储本身所使用的指令、常数、变量和输入数据外，  
> 还需要一些对数据进行操作的工作单元和存储一些为现实计算所需信息的辅助空间。

## 数据结构

> 数据结构我们听的很多了，我们真正有想过数据结构的含义到底是什么？  
> 数据结构即数据元素相互之间存在的一种和多种特定的关系集合
> 我们可以从两个维度来理解它

### 逻辑结构

简单的来说逻辑结构就是数据之间的关系，逻辑结构大概统一的可以分成两种：线性结构、非线性结构。

线性结构：是一个有序数据元素的集合。 其中数据元素之间的关系是一对一的关系，即除了第一个和最后一个数据元素之外，其它数据元素都是首尾相接的。

常用的线性结构有: 栈，队列，链表，线性表。

—非线性结构：各个数据元素不再保持在一个线性序列中，每个数据元素可能与零个或者多个其他数据元素发生联系。

常见的非线性结构有 二维数组，树等。

### 存储结构

逻辑结构指的是数据间的关系，而存储结构是逻辑结构用计算机语言的实现。常见的存储结构有顺序存储、链式存储、索引存储以及散列存储。

例如：数组在内存中的位置是连续的，它就属于顺序存储；链表是主动建立数据间的关联关系的，在内存中却不一定是连续的，它属于链式存储；

还有顺序和逻辑上都不存在顺序关系，但是你可以通过一定的方式去放问它的哈希表，数据散列存储。

### 主要的数据结构

### 二叉树

为啥把二叉树先来放到前面来考，因为它重要啊，考的多啊，实际应用中也蛮多的

#### 二叉树遍历

在此之前我们先实现一个树：

```js
function treeCode() {
  let tree = function (ele) {
    this.data = ele
    this.leftChild = null
    this.rightChild = null
  }
  // 创建🌲
  this.creteTree = function () {
    let newTree = new tree('A')

    newTree.leftChild = new tree('B')
    newTree.rightChild = new tree('C')

    newTree.leftChild.leftChild = new tree('D')
    newTree.leftChild.rightChild = new tree('E')

    newTree.rightChild.leftChild = new tree('F')
    newTree.rightChild.rightChild = new tree('G')

    newTree.leftChild.leftChild.leftChild = new tree('H')
    newTree.leftChild.leftChild.rightChild = new tree('I')

    return newTree
  }
}

// 生成🌲实例
let myTree = new treeCode()
let _tree = myTree.creteTree()
console.info(_tree)

/*
 **D：访问根结点，L：遍历根结点的左子树，R：遍历根结点的右子树。*/

// 前序遍历 DLR  根结点-左子树-右子树
function preTravel(_tree) {
  if (_tree === null) return
  console.info(_tree.data) // visit the val  访问该节点的值，可以认为是个动作
  preTravel(_tree.leftChild)
  preTravel(_tree.rightChild)
}

// 中序遍历 LDR 左子树-根结点-右子树
function inTravel(_tree) {
  if (_tree === null) return
  inTravel(_tree.leftChild)
  console.info(_tree.data) // visit the val  访问该节点的值，可以认为是个动作
  inTravel(_tree.rightChild)
}
inTravel(_tree)

// 后续遍历 LRD  左子树-右子树-根结点
function postTravel(node) {
  if (node === null) return
  inTravel(node.leftChild)
  inTravel(node.rightChild)
  console.info(_tree.data) // visit the val  访问该节点的值，可以认为是个动作
}
```

其实传入的参数，也就是树是一样的，使用的递归函数也是一样的，
我们在不同位置打印的值，就得出是先序序遍历和中序遍历，不应该是同一个遍历么
以上我们其实还可以好好思考一下，教科书所说的前中后序到底说的是什么？

\*\*

> 现在我们可以来很好的回答这个问题了，其实这是 js 语言中，我们所谓的先序遍历，中序遍历，后序遍历其实就是按照一定的顺序访问该节点的
> 值，也就是我们这里的 this.data,把这些在不同位置打印出来的值，放入一个栈中，我们就知道遍历顺序，这就是我们所说的先中后序遍历，
> 而不是实际方法每走一步的访问节点,交出控制权的顺序，访问该节点的值和交出控制权是不一样的概念的，你品，你细品！！

- 算法的入口都是根结点
  \*\*

> 递归很暴力，迭代一般都可以转化成迭代的形式，而循环迭代一般都脱离不了栈

所有递归都能等效于 循环+栈

说到递归我们很容易想起尾递归优化，尾递归优化本质是压缩了栈

> 参考链接：
> https://www.cnblogs.com/cangqinglang/p/11307369.html （这篇写的很赞，果然 Java 是精华）
> https://blog.csdn.net/liusaint1992/article/details/80310918

下面我们来实现一下前中后序的迭代算法

```js
// 前序迭代
function preOrder1(node) {
  if (!node) return

  let stack = [node]
  while (stack.length > 0) {
    const item = stack.shift() // 弹出栈顶第一个元素，接受访问  ，在js数组中可以认识是删除第一个元素，并返回
    console.info(item.val) // 接受访问
    // unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度,js很久没用这两个都有点生疏了
    // 我们来回顾一下：shift,unshift,pop,push
    // 这里也许你会很疑惑，为啥先是right而不是left,我们知道栈是一种先进后出的结构，那么要保证right节点后访问
    // 那么得将right节点push进栈，知道栈清空，迭代结束
    if (item.right) {
      stack.unshift(item.right)
    }
    if (item.left) {
      stack.unshift(item.left)
    }
  }
}

// 中序迭代
function inOrder1(root) {
  if (!root) return
  // 结果数组
  let res = []
  // 维护的栈
  let stack = [root]
  // 指针-->当前访问对象
  let current = root
  while (current || stack.length > 0) {
    // 上面这个条件其实挺关键的
    // 验证左侧链，左孩子依次入栈
    while (current) {
      stack.push(current)
      // 改变指针
      current = current.left
    }
    // 当上面的循环结束了，入栈操作就结束了，当前指向的左侧最末端节点
    res.push(current.val) // 访问该值
    // 访问结束之后弹出
    current = stack.pop()
    // 指针指向前一个左侧节点，开始向根节点逆序向上访问，会重新循环里层while,递归上个左侧节点的右子🌲
    current = current.right
  }
  return res
}

// 后序遍历
// 我们回想前序遍历和中序遍历的时候，它们经过的路径都是左根右，对于前序和中序来说，访问路径基本上跟经过路径是一致的。
// 但是在后序遍历中，我们先经过根节点，但是我们不会去访问它，而是会选择先访问它的右子节点。
// 所以在这种情况下，我们会将根节点留在栈中不弹出，等到需要访问它的时候再出。
// 那么，什么时候才需要访问根节点呢？答案当然就是访问完右子节点之后了。
// 我们如何获取这个信息？这并不难，我们可以记录一下上一次访问的节点，然后判断一下当前经过的节点和上一次访问的节点是什么关系就好了。
// 如果当前经过的节点的右子节点是上一次访问的节点，显然我们需要访问当前节点了。这是第二种情况。
// 总结起来，我们什么时候才能访问节点。有如下两种情况：

// 1. 当前经过节点是叶子节点。    == 什么叫叶子节点，也叫叶子结点，就是叶子的末端，叶子我们可以想象成一颗🌲，就是树的末端节点（这点是比较容易考虑到的）
// 2. 当前经过的节点，它的的右子节点是上一次访问的节点。  == 这个怎么来理解呢，其实很好理解，多读几遍就好了

// 以上：我们可以抽象归纳一下这个思路，我们把它抽象成只有一个根，左，右的🌲，其实每一步只是重复这个操作，不是么。

function endOrder1() {
  if (!root) return
  // 迭代的算法,老套路
  // 老套路，手动维护一个栈
  let stack = []
  // 保存后序遍历的结果
  let res = []
  // 记录上一次访问的节点--- ⚠️注意 访问和经过是不一样的概念
  let last = null

  // 当前指针
  let current = root
  // 接下来我们来手动维护栈的逻辑
  while (stack.length > 0 || current) {
    // 跟中序遍历一样，沿着左侧链一依次入栈
    while (current) {
      stack.push(current)
      current = current.left
    }
    // 上面我们完成左侧链的入栈操作，现在current是左侧末端节点

    // 当前经过的节点
    current = stack[stack.length - 1]
    // 当前经过的节点，它的的右子节点是上一次访问的节点 或者 上一个进过的节点没有右子树也就是说 下面的 !current.right=true，说明是叶子节点了，即可访问其值
    // 这里的关键点来了，如何来理解current.right === last至关重要
    if (current.right === last || !current.right) {
      // 弹出并访问,这里注意我们的current又被重新赋值了
      current = stack.pop()
      res.push(current.val) // 接受访问
      // 记录这次的访问节点
      last = current
      // 继续弹栈，其实没有搞动这波骚操作=== 相当于访问完销毁
      current = null
    } else {
      // 右侧链入栈
      current = current.right
    }
  }
  return res
}
```

### 链表

好了，上节我们重点讲了一下树，尤其对二叉树着重的讲了，现在我们来梳理一下链表这个比较关键的数据结构
概念：用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和下一个元素的地址
特性：需要遍历才能查询到元素，查询慢
插入元素只需断开连接重新赋值，插入快

参考连接:

> https://juejin.im/entry/59cb70995188256aa423b680

> http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E9%93%BE%E8%A1%A8.html

#### js 实现一个链表结构

```js
**
* @name 用js实现一个链表结构
* @description 我们设计链表包含两个类：一个NODE类用来表示节点，另一个LinkedList类提供插入节点、删除节点等的一些操作
*/

// 节点
function Node(element) {
this.element = element
this.next = null
}

// LinkedList类，LinkedList提供了对链表进行操作的方法，包括插入删除节点，查找给定的值等。
// 值得注意的是，它只有一个属性，那就是使用一个NODE对象来保存该链表的
// 链表类
function linkList() {
this.head = new Node('head') // 头节点

/**
 * @name 查找给定节点，就是遍历循环
 * @param {*} item
 */
this.find = (item) => {
  let currentNode = this.head
  while (currentNode.element !== item) {
    currentNode = currentNode.next
  }
  return currentNode
}

/**
 * @name  根据已知节点后，插入新的节点
 * @param {*} newElement
 * @param {*} item
 */
this.insert = (newElement, item) => {
  // 实例化一个节点，赋予节点值和next指向下一节点的属性
  let newNode = new Node(newElement)
  // 找到当前的节点
  let currentNode = this.find(item)
  // 然后我们需要做两个事
  // 1. 新节点的next指向当前节点的next，可以简单理解为新节点与它紧随的节点建立联系
  // 2. 当前节点的next指向新节点
  newNode.next = currentNode.next
  currentNode.next = newNode
}

// 从链表中删除一个节点
this.remove = (item) => {
  // 找到上一个节点
  var prevNode = this.findPrev(item)
  if (prevNode.next !== null) {
    // 这个移花接木你细品，真香
    prevNode.next = prevNode.next.next
  }
}

// 查找待删除节点的前一个节点,并返回
this.findPrev = (item) => {
  let currentNode = new head()
  // 一开始看的时候还是比较蒙蔽哈，这段代码很精简，逻辑是这样的
  // 当访问节点的next 不为null 且 当前节点next 不等于 需要删除的节点时，继续遍历，直到等于的时候，上一轮currentNode就是被删除节点的前一个节点，返回，完成
  while (currentNode.next !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next
  }
  return currentNode
}

// 显示链表
this.display = () => {
  let currentNode = new head()
  while (currentNode.node !== null) {
    console.info(currentNode.element)
  }
}
}

```
