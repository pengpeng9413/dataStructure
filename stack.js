/**
 * @name 今天我们来讲讲栈，这个计算机科学中非常重要的一种数据结构
 * @see  栈（LIFO）,简称很有意思哈，就是 last in first  out,最后进来，第一个出去
 * @see  栈有三个主要方法：
 * @see   push();pop();peek(),分别是入栈，出栈，预览栈顶元素
 * @param 我们实现一个栈，底层数据结构采用数组,记得年初去面试火花思维的时候就考过一题，实现一个栈的功能，用js
 */

 /*  定义stack 构造函数 */
 function Stack(){
    this.dataStore=[];  // dataStore 保存栈内元素，初始化为空数组
    this.top=0;         // 记录栈顶位置，起始位置为0
    this.push=push;
    this.pop=pop;
    this.peek=peek;
 }

 // 向栈顶压入一个元素时，需要将其保存在变量top对应的位置，然后将其top值加 1
 function push(element){
    this.dataStore[this.top++]=element;
 }
// pop 出栈, 注意这里只是返回栈顶元素
function pop(){
    return this.dataStore[--this.top]
}
// peek()
function peek(){
    return this.dataStore[this.top-1]
}
// 有时候需要知道栈内存储了多少个元素，length()方法
function length(){
    return this.top
}
// 最后，我们清空栈，通过一个clear()方法
function clear(){
    return this.top=0
}