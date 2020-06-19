// test  二叉树

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

/*
 **D：访问根结点，L：遍历根结点的左子树，R：遍历根结点的右子树。*/

// 前序遍历 DLR
// function preTravel(root) {
//   if (root === null) return
//   console.info(root)
//   preTravel(root.leftChild)
//   preTravel(root.rightChild)
// }
// preTravel(_tree) // 我们可以打印出这个来看一下

// 中序遍历 LDR
function inTravel(node) {
  if (node === null) return
  inTravel(node.leftChild)
  console.info(node)
  inTravel(node.rightChild)
}
inTravel(_tree)

// 后续遍历 LRD
function postTravel(node) {
  if (node === null) return
  console.info(node)
  inTravel(node.leftChild)
  inTravel(node.rightChild)
}

// ==  我们来做个测试 ,验证我们之前的疑惑 ==
function Node(val) {
  this.left = null
  this.right = null
  this.val = val
}

var node4 = { left: null, right: null, val: 4 }
var node5 = { left: null, right: null, val: 5 }
var node6 = { left: null, right: null, val: 6 }
var node7 = { left: null, right: null, val: 7 }
var node3 = { left: node6, right: node7, val: 3 }
var node2 = { left: node4, right: node5, val: 2 }
var node1 = { left: node2, right: node3, val: 1 }

// 先序遍历
function preorderTraversal(root) {
  if (!root) {
    return
  }
  console.log(root.val)
  var left = root.left
  var right = root.right
  left && preorderTraversal(left)
  right && preorderTraversal(right)
}
preorderTraversal(node1) // 1 2 4 5 3 6 7

// 中序遍历
function inorderTraversal(root) {
  if (!root) {
    return
  }
  var left = root.left
  var right = root.right
  left && inorderTraversal(left)
  console.log(root.val)
  right && inorderTraversal(right)
}
inorderTraversal(node1) //4 2 5 1 6 3 7

// 其实传入的参数，也就是树是一样的，使用的递归函数也是一样的，
// 我们在不同位置打印的值，就得出是先序序遍历和中序遍历，不应该是同一个遍历么
// 以上我们其实还可以好好思考一下，教科书所说的前中后序到底说的是什么？

// 在data-struture 中已经进行了进行了解释，遍历元素的顺序和取值顺序的异同，
// 再结合这个访问节点值的位置，我们发现这个真的是比较优雅，可以仔细品一下，代码的优雅之美

// 在清华大学丁俊辉的课上对中间件的定义觉得很有意思：
// 中间件；英文名为：middleware；一种位于操作系统和应用软件之间、支持应用软件互操作并提供公共服务的系统软件。
// 可为应用屏蔽底层的操作系统、数据库和网络的异构性，简化应用开发。属于系统软件领域，后修概念有除法、随机搜索、随机性。

// 接下来我们研究一下 层次遍历：严格按照深度进行访问

/**
 * 我们知道任何遍历可以转化成更加高效的迭代
 * 我们先来尝试一下用迭代的方式实现 前 中 后序的遍历
 */

// 迭代实现 前序  ==> 如何采用迭代呢
function preIterate(node) {
  if (!node) return
  console.info(node.val)
  preIterate(node.left)
  preIterate(node.right)
}

// 我们知道迭代一般都是要 while 循环,自己手动维护一个栈；而遍历是自己调自己，自己维护的一个栈
function preIterate1(node) {
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

//  好了，相信你对迭代和遍历有了更深的体会，我们再来实现一下中序遍历的实现方式
function inIterate2(node) {
  if (!node) return
  let stack = [node]
  while (stack.length > 0) {
    const item = stack.left
    if (item.right) {
      stack.unshift(item.right)
    }
    if (item.left) {
      stack.unshift(item.left)
      console.info(item.left.val)
    }
  }
}

//
function Node(val) {
  this.left = null
  this.right = null
  this.val = val
}

var node4 = { left: null, right: null, val: 4 }
var node5 = { left: null, right: null, val: 5 }
var node6 = { left: null, right: null, val: 6 }
var node7 = { left: null, right: null, val: 7 }
var node3 = { left: node6, right: node7, val: 3 }
var node2 = { left: node4, right: node5, val: 2 }
var node1 = { left: node2, right: node3, val: 1 }
// 没错，上面的是我的第一版的代码，当然是错误的，看来对栈和递归迭代还理解的不深啊，
// 好，我们接着继续菜，沿着数据结构课程的思路，我接着又实现了一般，抽象能力还有得提高啊
function inIterate3(node) {
  if (!node) return
  let stack = [node]

  // 沿着左侧链从顶向下入栈，只要有左侧子孩子就推入栈中
  function leftLongPush(item) {
    if (item.left) {
      stack.unshift(item.left)
      leftLongPush(item.left)
    }
  }

  // 左侧链访问，从末端访问
  while (stack.length > 0) {
    leftLongPush(stack[0])
    // 上面我们把左侧链全部入栈了，然后访问栈顶元素的值
    console.info(stack[0].val)
    let temp = stack[0].right
    stack.shift(stack[0])

    if (temp) {
      leftLongPush(temp)
    }
    // 将访问完的节点从栈顶弹出
  }
}
inIterate3(node1)
//  以上我们手动维护一个栈就实现了，可能有问题，我们自己靠着自己的思路实现一遍再看看正确答案，看看差距在哪里，理解的偏差在哪里

// 我靠，打印出来的居然都是4 ，fuck, 清华大学 C++ 的演练思路到js 这就不行啦，
// 先黏贴个地址：
// 清华大学c++课程 ：https://next.xuetangx.com/learn/THU08091000384/THU08091000384/1516243/video/1387321
// 中序非迭代：http://www.conardli.top/docs/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86.html#%E4%BB%A3%E7%A0%81
// https://zhuanlan.zhihu.com/p/27307626  知乎

// 好了，我又回来了，今天来公司的路上，我看了知乎的关于中序迭代的答案，现在自己来实现一下

// 传人根节点
function inOrder4(root) {
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

// en ,对自己的这次搬砖还是挺满意的，我们再来实现一下后序遍历的迭代版本  rlv
// 我发现如果只是自己看网上的文章，不自己演练思路的话，其实真的是只是知道这个东西，然后不能成为自己的知识资产

// 我们再来回顾一下什么叫后序遍历？
// 后序遍历：先左后右再根，这里包括我们之前谈到的先序和中序，其实核心还是访问的根节点的顺序是在头，中，尾的区别。
// 先左先右，都没有多大差别，因为左右是相对而言的，对🌲做翻转，左右是可以任意切换的。所以约定俗成，我们都是先左后右这个方向遍历（注意不是访问哦）
// 另外除了先序遍历，在根节点而言，是从上到下访问；而中序和后序都是具有逆序性，都是先到末端节点，再来向上访问
// 其中后序需要特别注意，这里在根左右两颗子🌲，有两次逆序访问，都是从左右子🌲末端向根节点方向访问，这里用指针来描述会更加好理解些

/**
 * 以下摘自百度百科，觉得很有道理，深得我心
 * 首先要搞清楚先序、中序、后序的非递归算法共同之处：用栈来保存先前走过的路径，
 * 以便可以在访问完子树后,可以利用栈中的信息,回退到当前节点的双亲节点,进行下一步操作。
 * 后序遍历的非递归算法是三种顺序中最复杂的，原因在于，后序遍历是先访问左、右子树,再访问根节点，
 * 而在非递归算法中，利用栈回退到时，并不知道是从左子树回退到根节点，还是从右子树回退到根节点，
 * 如果从左子树回退到根节点，此时就应该去访问右子树，而如果从右子树回退到根节点，此时就应该访问根节点。
 * 所以相比前序和后序，必须得在压栈时添加信息，
 * 以便在退栈时可以知道是从左子树返回，还是从右子树返回进而决定下一步的操作。
 */

// 鉴于后序迭代算法是三种迭代最复杂的，我们周六日再来conker

// 老铁们，我来了，这次我们还是按照自己的思路，先整理思路，再来实现
// 写着写着发现脑袋浆糊了，遂看了一遍实现的思路

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

// 好了，上节我们重点讲了一下树，尤其对二叉树着重的讲了，现在我们来梳理一下链表这个比较关键的数据结构
// 概念：用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和下一个元素的地址
// 特性：需要遍历才能查询到元素，查询慢
// 插入元素只需断开连接重新赋值，插入快

// 可以参考以下连接：https://juejin.im/entry/59cb70995188256aa423b680
// http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E9%93%BE%E8%A1%A8.html

/**
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
