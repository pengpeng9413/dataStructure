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
  this.left = this.right = null
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
preorderTraversal(node1) //1 2 4 5 3 6 7

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
