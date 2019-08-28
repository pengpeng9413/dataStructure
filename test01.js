/**
 * 数组求和
 * 我们常用的一个方式是通过  reduce 归并方法
 * @host
 * * arr.reduce(function(prev,cur,index,arr){
        ...
        }, init);
    其中，
    arr 表示将要原数组；
    prev 表示上一次调用回调时的返回值，或者初始值 init;
    cur 表示当前正在处理的数组元素；
    index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
    init 表示初始值
 */
var arr1=[1,2,3,4,5]
var sum = arr1.reduce(function (prev, cur) {
    return prev + cur;
},0);
console.log(sum)

/**
 * 求数组的最大项
 */
var arr2=[1,2,3,4,5]
var max=arr2.reduce(function(pre,cur){
    return Math.max(pre,cur)
})
console.log(max)

/**
 * 数组去重
 * 数据去重的常用的几种方法参考：https://juejin.im/post/5aed6110518825671b026bed
 * 
 */
// 方法1：利用 set 进行去重，最简便的方法
var arr3=[1,1,1,5,78,25,56,56]
function unique (arr) {
    // Array.from 方法可以将 Set 结构转为数组。
    return Array.from(new Set(arr))
}
var newArry3=unique(arr3)
console.info(unique(newArry3))

// 方法2：我们接着用reduce来做数组的去重
const uniqueArrry = (array) => {
    return array.reduce((preResult, current) => {
        if (!preResult.includes(current)) {
            preResult.push(current)
        }
        return preResult
    }, [])
}

console.log(uniqueArrry(arr3))

// 方法3：上面呢，是比较简单的单维数组去重，下面我们看一下对象数组如何去重
var arr = [{
            key: '01',
            value: '乐乐'
        }, {
            key: '02',
            value: '博博'
        }, {
            key: '03',
            value: '淘淘'
        },{
            key: '04',
            value: '哈哈'
        },{
            key: '01',
            value: '乐乐'
        }];
 // 上面是一个对象数组，我们如何对这个数组进行去重呢 ？

  //  方法1：利用对象访问属性的方法，判断对象中是否存在key，巧用对象key值唯一来实现对象数组的去重
   var result = [];
   var obj = {};
   for(var i =0; i<arr.length; i++){
      if(!obj[arr[i].key]){ // obj["01"] 给这个对象一个'01'的key值，没有这个key就往下走
         result.push(arr[i]);
         obj[arr[i].key] = true; // 赋值key的键值为true
      }
   } 

   console.log(result)
   console.log(obj)

/** 
 * 数组扁平化
 * 1. 递归，通过遍历最外层数组的每一个元素，看看是否还是数组，如果是的话，继续递归执行，不是的话，放到最后的结果数组当中（最笨的方法）
 * 2. toString() 方法
 * 3. reduce() 方法，是不是感觉reduce很强大
 * 4. ...es6扩展运算符+Array.some  方法
 */

  /* ============递归============== */
  var arryMutipile=[1,2,3,[4,5]]

  // 这里我们要注意，我们需要最终的结果集放在最外面
  var res=[]
  function flatten(arry){
    arry.map((item,index)=>{
        // 如果数组的话，这个es6的语法可以用来判断是否为一个数组
        if(Array.isArray(item)){
            flatten(item) // 是的话，递归
        }else{
            res.push(item)
        }
    })
    return res
  }
  const result=flatten(arryMutipile)
  console.info(result)

  /* ============toString============== */
  var arryMutipile=[1,2,3,[4,5]]
  function flatten(arry){
   return arry.toString().split(',').map(item=>{  // 注意这里不能少了  return 
        // 一元运算符可以转成number 类型
        return +item 
    })
  }
  const result=flatten(arryMutipile)
  console.info(result)

  /* ==============reduce=============== */
  // 还是要递归，显得这个方法很鸡肋
  var arryMutipile=[1,[2,3,[4,5]]]
  function flatten(arry){
    return arry.reduce(function(prev,current){
        return prev.concat(Array.isArray(current)?flatten(current):current)
    },[])
  }
    var result=flatten(arryMutipile)
    console.log(result)

/* ================some============ 
some() 为数组中的每一个元素执行一次 callback 函数，
直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。
如果找到了这样一个值，some() 将会立即返回 true。
否则，some() 返回 false。callback 只会在那些”有值“的索引上被调用，
不会在那些被删除或从来未被赋值的索引上调用。
 */

var arryMutipile=[1,2,4,[1.2,4],[1,5,[2,3],8]]
function flatten(arr){
    // 在while中将不断循环，直到不满足while里面的条件
    // arr 在变化，所以while里面的条件也会执行下去
    while (arr.some(item => Array.isArray(item))) {
        console.log(arr)
        arr = [].concat(...arr);
    }  //ES6新方法
    
    return arr;
}
var result=flatten(arryMutipile)
console.log(result)

    
  