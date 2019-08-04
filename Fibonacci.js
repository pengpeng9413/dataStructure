/**
 * @global 这篇主要讲一下尾调用的优化
 * @param  以斐波那契数列为例
 * @readonly 我们首先要了解什么是斐波那契数列；斐波那契数列（Fibonacci sequence），又称黄金分割数列
 *           因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入
 * @see 规律很明显，从第三个数开始起，每个数都等于前面两个数的和
 * @see 利于数学归纳法，我们很容易先简单的得出  Fn=Fn-1+Fn-2, 从字面上理解相信也是很容易理解的
 */

// 正常递归版本
/**
 * 
 * @see 是不是觉得代码优美，逻辑清晰，但是这个版本存在大量的重复计算，
 * @see 如：当n=5时,候要计算fibonacci(4)+fibonacci(3)
 * @see 当n为4的要计算fibonacci(3)+fibonacci(2) 
 * @see 这时fibonacci(3)就是重复计算了。运行fibonacci(50)等半天才会出结果。
 */
function fibonacci(n){
    // 别的版本是<=1,且考虑到了n=0,1的情况，本方法与其等价
    if(n<=2){
        return 1
    }else{
       return fibonacci(n-1)+fibonacci(n-2)
    }
}

var result=fibonacci(10)
console.info(result)

// 尾递归优化，斐波那契数列
/**
 * 
 * @param {*} n 
 * @param {*} sum1 
 * @param {*} sum2 
 * 在看阮老师的es6的时候，其实第一开始没有看懂这个，为啥最后输出的是n对应的数列的值，我们一步步的来看
 * n=1 return 1 ;
 * n=2 Fibonacci(1,1,2) -->  继续递归，此时n=1, 直接return 1；
 * n=3 Fibonacci(2,1,2) -->  继续递归，此时n=2,sum2=2,sum=1;继续递归 --> Fibonacci(1,2,3),此时n=1, 直接return sum2,即返回  3
 * 这样一步一步解析下来，你会发现，确实比较抽象
 * 但是这里我们并没有充分必要的条件证明 这样在代码层次上是优化的，是没有中间重复的计算值的，
 * 其实本质上递归终究是递归，中级有多少层还是会有多少层，在代码层次上我们只是给他打个个tag，标签；
 * 真正的优化的部分其实是因为语言的编辑器或者解释器所做了“尾递归优化”，使之不会爆栈
 * 简而言之，语言解释器遇到尾递归的优化的代码，那就给他优化之前的调用栈，使之弹出
 * 否则，不优化。水平有限，如有不同的意见，欢迎拍砖指正
 */
const Fibonacci = (n, sum1 = 1, sum2 = 1) => {
    if (n <= 1) return sum2;
    return Fibonacci(n - 1, sum2, sum1 + sum2)
}
var result=Fibonacci(5)
console.info(result)
