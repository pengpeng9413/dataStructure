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