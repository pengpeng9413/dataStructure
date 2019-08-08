/**
 * @see 今天我们来好好学习一下队列  queue  FIFO
 * @see 我们来实现一个queue类
 */

 function queue(){
    this.dataSource=[];
    this.enqueue=enqueue; // 入队
    this.dequeue=dequeue;
    this.front=front;
    this.back=back;
    this.toString=toString;
    this.eempty=eempty;
 }

// enqueue , 向队尾添加一个元素
function enqueue(element){
    this.dataSource.push(element)
}

// dequeue , 删除队首的元素 出队
function dequeue(){
    return this.dataSource.shift()  // shift()方法返回数组删除的第一个元素
}

// 读取队首的元素
function front(){
    return  this.dataSource[0]
}
// 读取队尾的元素
function back(){
    return this.dataSource[this.dataSource.length-1]
}

// toString 显示所有的队列中的元素
function toString(){
    var retStr=''; 
    for(var i=0;i<dataSource.length;++i){
        return retStr+=dataSource[i]+'\n'
    }
}

// 判断队列是否为空
function eempty(){
    if(this.dataSource.length===0){
        return true
    }else{
        return  false
    }
}

/* 学完队列之后，我们自己来实现一个双向队列，允许从队列的两端添加和删除元素，并写一段测试程序测试该类 */
/**
 * @classdesc 在上面其实我们已经实现了在队尾添加元素和在队首删除元素
 * @classdesc 那么其实我们差的几乎在队首删除元素和在队尾添加元素，其他功能都是一样的
 */
function Deque(){
    this.dataSource=[];
    this.enqueue=enqueue; // 队尾添加元素
    this.enFirst=enFirst; // 在队首添加元素
    this.dequeue=dequeue; // 在队首删除元素
    this.DeEnd=DeEnd; // 在队尾删除元素
    this.toString=toString;
    this.eempty=eempty;
}
// 下面我们着重来实现enFirst和 DeEnd

// 队首添加元素,在es6中有unshit方法向数组的队首添加元素
function enFirst(element){
    this.dataSource.unshift(element)
}
// 队尾删除元素
function DeEnd(){
    return this.dataSource.pop()
}

// 其他方法与queue一致，就不重复了