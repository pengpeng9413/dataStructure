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