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
