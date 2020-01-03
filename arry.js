/**
 * 今天我们又来重温一下数组，
 * @alias 我们先来看下面一个例子
 */
var number = new Array(10); // 猜猜打印的会是啥
console.info(number); // 是一个长度为10 的空数组，注意哦，不是元素为10的数组哦

// 第二个是存取函数
indexOf() 函数是最常用的存取函数之一，用来查找传进来的参数在目标数组是否存在，如果目标包含该参数，则返回该元素在数组中的索引，如果不包含则返回 - 1

/**
 * @alias 第三个比较常见，需要我们来系统梳理一下的是，数组的字符串表示
 * @example join() toString() 这两个方法都可以返回一个数组所有元素的字符串，各元素用逗号隔开
 */
var newArray = ['name', 'age', 'grade', 'class']

var str1 = newArray.join(',');
var str2 = newArray.toString();
console.info(str1)
console.info(str2)

// 事实上当我们对一个数组使用print()函数时，系统会自动调用那个数组的toasting()方法

console.info(print(newArray))  // name,age,grade,class

/**
 * @alias 由已有数组创建新数组
 * @example concat(),splice()  这两个方法允许通过已有数组创建新的数组
 * @listens 由此可见，concat其实还可以进行数组的深复制如：[1,2].concat([]),当然数组复制还有很多方法：a=[...Array]
 * @listens 另外splice不仅可以从一个数组截取子集创建一个新数组还可以为一个数组增加或者删除元素
 */

/**
 * @alias 为数组排序
 * @example 首先介绍一个一下reverse方法，对数组元素进行翻转 [1,2,3,4].reverse()---> [4,3,2,1]  顺序完全掉个个
 * @example 还有更朴实，实用的算法我们会下面来重点将一下
 * @example sort() ， sort()方法有一个可选参数，是用来确定元素顺序的函数,排序后的数组。请注意，数组已原地排序，并且不进行复制。
 * @example 快速排序
 * @example 冒泡排序
 * @example 归并排序
 * @example 希尔排序
 */
// 首先我们来看第一个重点知识 sort（）
// 如果我们遇到的元素是字符串类型，那么数组的可变方法sort就会非常好使，当然如果是数字类型就不能使人满意了
// 重点：因为sort()方法是按照字典顺序对元素进行排序的，因此它假定的元素都是字符串类型，为了让sort方法也能
// 排序数字类型的元素，可以在调用方法时传入一个大小比较函数，排序时，sort方法会根据该函数比较数组两个元素的大小，从而决定整个数组的大小

// 把这些搞清楚之后，我们来到一道面试题
/**
 * @example  此题出现在站酷和神策数据都有考察过
 * @example  给出一个数组 arry1，让你对它进行排序
 */
let arry1 = [
        { name: 'xxp', age: 82, edu: 'wuhan' },
        { name: 'qy', age: 12, edu: 'peking' },
        { name: 'zh', age: 29, edu: 'tianjing' }
    ]

// 实现一个function 对这个数组元素来进行排序，按照age从小到大，使之变成以下数组
let newArry2 = [
        { name: 'qy', age: 12, edu: 'peking' },
        { name: 'zh', age: 29, edu: 'tianjing' },
        { name: 'xxp', age: 82, edu: 'wuhan' }
    ]
// 面试刚拿到这个题目的时候其实很茫然啊，咋整呢？
function compare(obj1, obj2) {  // 注意，我们只需要简化数组对象就好了，元素是个对象，那么把对象看车成一个元参数就好了，如obj1,obj2
    return obj1.age - obj2.age
}
var newArry3 = arry1.sort(compare)
console.info(newArry3)   // 我们发现这是从小到大，那我们从大到小呢?

function compare2(obj1,obj2){
    return obj2.age-obj1.age
}
console.info(arry1.sort(compare2)) // 很神奇，这会从大到小了

// 升序和降序为啥是这个逻辑呢？请往下看
// compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前；反之同理
// compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的

/**
 * @alias 接下来我们讲一下数组的迭代器方法
 * @example 迭代器方法对数组中的每一个元素应用一个函数，使之返回一个值，一组值，或者一个新的数组
 * @example 这里先介绍不产生新数组的迭代器方法
 * @example forEach(),every(),some(),reduce()
 * @example 这里其实我们很熟悉forEach() 方法，但是对every(),some()应该用的比较少么，至少我是这两个用的比较少，所以这里重点梳理一下
 */
every() 方法, 该方法接收一个返回值为布尔类型的函数，如果对于所有的元素，该函数均返回true，则该方法返回true

// eg:
function isEVEN(){

}

some() 方法，该方法接收一个返回值为布尔类型的函数，只要有一个元素返回true，则该方法返回true

// eg: